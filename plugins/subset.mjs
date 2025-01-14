import { pathExists } from '../scripts/async-utils.mjs';
import fs from 'fs/promises';
import path from 'path';
import subsetFont from 'subset-font';
// analyze the following script 
/**
 * only tested with plain css and woff2 fonts.
 * 
 * npm run subset
 * 
 * Set 'cssPath', 'root', desired prefix, and subsettedText.
 * cssPath should be a direct path (from root './src') to the css file containing your font-face declarations.
 * the script will find the font file sources from the font-face declarations, create a subset of them stored in the same directory as the original font, and update the font-face declaration urls to point to the subsetted fonts.
 * 
 */
const subsettedText = [...new Set(['_', '-', '–', '—', ',', ':', '!', '.', "'", '"', '(', ')', '[', ']', '{', '}', '@', '*', '/', '&', '#', '%', '•', '+', '>', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])].join('');

const root = './src';
const prefix = 'subset-';
const cssPath = path.join(root, '/styles/root.css');
const FONT_FACE_REGEX = /@font-face\s*{[^}]*}/g;
const PROPERTY_REGEX = /\s*([\w-]+)\s*:\s*([^;]+)\s*;/g;
const SRC_URL_REGEX = /url\(['"]?([^'"()]+)['"]?\)\s*format\(['"]([^'"]+)['"]\)/g;
const SRC_LOCAL_REGEX = /local\(['"]([^'"]+)['"]\)/g;

const getCss = async (cssPath) => {
  const css = await fs.readFile(cssPath, 'utf-8');
  return css;
};

const removeComments = css => css.replace(/\/\*[\s\S]*?\*\//g, '');

const formatAssetUrl = url => path.normalize(path.join(root, url.replace(/\.\.\//g, '')));
const formatWhitespace = css => {
  return css
    .split('\n')
    .map((line) => line.trimEnd())
    .filter((line) => line.length > 0)
    .join('\n');
};
const parseSrcProperty = (src) => {
  const sources = [];
  SRC_URL_REGEX.lastIndex = 0;
  SRC_LOCAL_REGEX.lastIndex = 0;

  let match;
  while ((match = SRC_URL_REGEX.exec(src)) !== null) {
    sources.push({ type: 'url', url: match[1], format: match[2] });
  }
  while ((match = SRC_LOCAL_REGEX.exec(src)) !== null) {
    sources.push({ type: 'local', name: match[1] });
  }
  return sources;
};

const parseSingleFontFace = (fontFace) => {
  const props = {};
  let match;
  while ((match = PROPERTY_REGEX.exec(fontFace)) !== null) {
    const [, key, value] = match;
    props[key] = value.trim();
  }

  if (Object.hasOwnProperty.call(props, 'src') === false) {
    throw new Error(`Cannot process, invalid font-face declaration (missing src): ${fontFace}`);
  }

  props.src = parseSrcProperty(props.src);
  const srcUrl = props.src[0]?.url;
  const srcUrlArr = srcUrl.split('/');
  const srcend = srcUrlArr[srcUrlArr.length - 1];
  if (srcend.trim().startsWith(prefix)) return {};
  const upatedEnd = prefix + srcUrlArr[srcUrlArr.length - 1];
  return {
    [props['font-family']]: {
      input: srcUrl,
      output: [...srcUrlArr.slice(0, srcUrlArr.length - 1), upatedEnd].join('/'),
    },
  };
};

const qc = n => n === -1 ? 0 : n;
const updateFontFaceUrlsPre = (css, updates) => {
  const spl = css.split('\n');
  const keys = Object.keys(updates);
  let [inComment, inFontFace] = [false, false], activekey = null;
  for (let i = 0; i < spl.length; i++) {
    let line = spl[i];
    let trimmedLine = line.trim();
    const [openind, closeind] = [trimmedLine.indexOf('/*'), trimmedLine.indexOf('*/')];
    const [hasopen, hasclose] = [openind !== -1, closeind !== -1];
    if (trimmedLine.includes('@font-face')) inFontFace = true;
    if (hasopen && hasclose) {
      spl[i] = trimmedLine.slice(0, qc(openind)) + trimmedLine.slice(closeind + 2);
    } else {
      if (inComment) {
        inComment = !hasclose;
        spl[i] = !hasclose && !hasopen ? '' : trimmedLine.slice(!hasopen ? closeind + 2 : 0, !hasopen ? trimmedLine.length : qc(openind));
      } else {
        if (hasopen || hasclose) {
          inComment = hasopen && !hasclose;
          spl[i] = trimmedLine.slice(hasopen ? 0 : closeind + 2, hasopen ? qc(openind) : trimmedLine.length);
        }
      }
    };

    if (inFontFace) {
      trimmedLine = spl[i];
      if (!inComment) {
        if (trimmedLine.includes('font-family')) {
          activekey = keys.find((key) => trimmedLine.includes(key));
        }
        else if (trimmedLine.includes('url') && activekey) {
          trimmedLine = trimmedLine.replace(updates[activekey].input, updates[activekey].output);
          spl[i] = trimmedLine;
        }
      }
      if (trimmedLine.includes('}')) inFontFace = false, activekey = null;
    } else {
      spl[i] = line;
    }
    if (hasopen && hasclose) inComment = false;
  };
  return spl
    .filter((line) => line.trim().length > 0)
    .join('\n')
    .replace(/\}/g, '}\n');
};

const init = async () => {
  try {
    const css = await getCss(cssPath);
    const cssString = css.toString();
    const ffString = formatWhitespace(removeComments(cssString))?.match(FONT_FACE_REGEX) || [];
    const fontFaces = ffString.reduce((acc, curr) => {
      const parsed = parseSingleFontFace(curr);
      return { ...acc, ...parsed };
    }, {});
    for (const [_, value] of Object.entries(fontFaces)) {
      const { input, output } = value;
      const inputBuffer = await fs.readFile(formatAssetUrl(input));
      const outputPath = formatAssetUrl(output);
      const outputExists = await pathExists(outputPath);
      if (outputExists) {
        await fs.unlink(outputPath);
      }
      const subsetBuffer = await subsetFont(inputBuffer, subsettedText);
      await fs.writeFile(outputPath, subsetBuffer);
    }
    await fs.writeFile(cssPath, updateFontFaceUrlsPre(cssString, fontFaces));
  } catch (error) {
    console.log('error');
    console.error(error);
  }
};

init();
