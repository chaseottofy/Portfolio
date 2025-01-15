import { tokenize } from '@csstools/css-tokenizer';
import { parseListOfComponentValues } from '@csstools/css-parser-algorithms';
import fs from 'fs/promises';
import path from 'path';
import subsetFont from 'subset-font';


const subsettedText = [...new Set(['_', '-', '–', '—', ',', ':', '!', '.', "'", '"', '(', ')', '[', ']', '{', '}', '@', '*', '/', '&', '#', '%', '•', '+', '>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])].join('');

const root = './src';
const prefix = 'subset-';
const rootToFonts = 'src/assets/fonts/';
const stylesToFonts = '../assets/fonts/';
const tofonts = ['src', 'assets', 'fonts'];
const cssPath = path.join(root, '/styles/root.css');
const getCss = async (cssPath) => {
  const css = await fs.readFile(cssPath, 'utf-8');
  return css;
};

const absSanitize = (url) => {
  let newpath = url;
  const validstart = (tst) => /[a-zA-Z0-9]/.test(tst);

  while (!validstart(newpath[0])) {
    newpath = newpath.slice(1);
    if (newpath.length === 0) {
      throw new Error('Invalid path');
    }
  }

  if (newpath.length > 0) {
    while (!validstart(newpath[newpath.length - 1])) {
      newpath = newpath.slice(0, -1);
      if (newpath.length === 0) {
        throw new Error('Invalid path');
      }
    }
  }

  if (newpath.length > 0) {
    while (tofonts.some((v) => newpath.startsWith(v))) {
      const nextdir = newpath.indexOf('/');
      if (nextdir === -1) return newpath;
      if (newpath.length === 0) {
        throw new Error('Invalid path');
      }
      newpath = newpath.slice(nextdir + 1);
    }
  }
  return newpath;
};

const getUpdatedCSS = async () => {
  try {
    const css = await getCss(cssPath);
    let cssString = css.toString();
    const tokens = tokenize({ css: cssString });
    const components = parseListOfComponentValues(tokens);
    const fontFaceDeclarations = [];
    for (let i = 0; i < components.length; i++) {
      const token = components[i];
      if (token.type === 'token' &&
        token?.value[0] === 'at-keyword-token' &&
        token?.value[1] === '@font-face') {
        const nxt = components[i + 2];
        if (nxt.type !== 'simple-block') continue;
        const [start, end] = [token.value[2], nxt.endToken[2] + 1];
        fontFaceDeclarations.push({
          start,
          end,
          declaration: cssString.slice(start, end),
          block: nxt.value,
        });
      }
    }

    for (const { declaration, block } of fontFaceDeclarations) {
      const blockFunctions = block
        .filter((v) => {
          if (v.type === 'function') {
            const { name = null } = v;
            return name[1].trim().startsWith('url');
          }
        });
      for (const { name, endToken } of blockFunctions) {
        const urlStart = name[3];
        const urlEnd = endToken[2];
        const sliced = cssString.slice(urlStart, urlEnd);
        const fontdir = absSanitize(sliced);
        const [fontFolder, fontName] = fontdir.split('/');
        const prefixedName = fontName.startsWith(prefix) ? fontName : `${prefix}${fontName}`;

        const origAbsPath = rootToFonts + fontdir;
        const origRelativePath = stylesToFonts + fontFolder + '/' + fontName;
        const prefixedRelativePath = stylesToFonts + fontFolder + '/' + prefixedName;
        const prefixedAbsPath = rootToFonts + fontFolder + '/' + prefixedName;

        const fontbuffer = await fs.readFile(origAbsPath);
        const subsetBuffer = await subsetFont(fontbuffer, subsettedText);
        await fs.writeFile(prefixedAbsPath, subsetBuffer);
        const updatedDeclaration = declaration.slice().replace(origRelativePath, prefixedRelativePath);
        cssString = cssString.replace(declaration, updatedDeclaration);
      }
    }
    await fs.writeFile(cssPath, cssString);
  } catch (error) {
    console.log('error');
    console.error(error);
  }
  return null;
};

getUpdatedCSS();
/*
@font-face {
  font-display: swap;
  font-family: geist;
  font-style: normal;
  font-weight: 400 500;
  src: local('Geist Regular'),
    local('Geist Medium'),
    url('../assets/fonts/geist/subset-geist.woff2') format('woff2');
}
@font-face {
  font-display: swap;
  font-family: Neue Montreal;
  font-style: normal;
  font-weight: 500;
  src: url('../assets/fonts/neue/NeueMontreal-Medium.woff2') format('woff2');
}

@font-face {
  font-display: swap;
  font-family: Neue Montreal;
  font-style: normal;
  font-weight: 400;
  src: url('../assets/fonts/neue/subset-NeueMontreal-Regular.woff2') format('woff2');
}
*/