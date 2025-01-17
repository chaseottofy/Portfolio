import fs from 'fs';
import * as fontkit from 'fontkit';
import path from 'path';

// Windows system fonts directory
const WINDOWS_FONTS_DIR = 'C:\\Windows\\Fonts';
const os2var = "OS/2";
async function loadFont(fontPath) {
  try {
    const font = await fontkit.open(fontPath);
    return font;
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

async function calculateFontMetrics(fontPath) {
  const font = await loadFont(fontPath.toString());
  const {
    unitsPerEm: fontUnitsPerEm,
    head: { unitsPerEm: headUnitsPerEm },
    [os2var]: { typoAscender, typoDescender, typoLineGap, capHeight, xHeight },
  } = font;
  const metrics = {
    ascent: typoAscender / fontUnitsPerEm,
    descent: Math.abs(typoDescender) / fontUnitsPerEm,
    lineHeight: (typoAscender - typoDescender + typoLineGap) / fontUnitsPerEm,
    capHeight: (capHeight || headUnitsPerEm * 0.7) / fontUnitsPerEm, // Fallback if capHeight not defined
    xHeight: (xHeight || headUnitsPerEm * 0.5) / fontUnitsPerEm // Fallback if xHeight not defined
  };
  return metrics;
}

async function generateFallbackCSS(woff2Path, fallbackFontName = 'Arial') {
  // Load source font metrics
  const sourceMetrics = await calculateFontMetrics(woff2Path);
  // Load fallback font metrics (from Windows Fonts directory)
  const fallbackPath = path.join(WINDOWS_FONTS_DIR, `${fallbackFontName}.ttf`);
  const fallbackMetrics = await calculateFontMetrics(fallbackPath);
  const metricKeys = Object.keys(sourceMetrics);
  const fontoverrideKeyMap = metricKeys.map((k) => {
    const ovrk = k.replace(/([A-Z])/g, '-$1').toLowerCase() + '-override';
    const calcmtr = (sourceMetrics[k] / fallbackMetrics[k] * 100).toFixed(3);
    return `  ${ovrk}: ${calcmtr}%;`;
  });

  const pathname = path.basename(woff2Path, '.woff2');
  return `
@font-face {
  font-family: '${pathname}-fallback';
  src: local('${fallbackFontName}');
${fontoverrideKeyMap.join('\n')}
}
  `;
  // console.log(fontoverrideKeyMap);
  // return;

  // const fontKeyOverrideMap = {
  //   'ascent': ['ascent-override', '%'],
  //   'descent': ['descent-override', '%'],
  //   'lineHeight': ['line-gap-override', '%'],
  //   'capHeight': ['cap-height-override', '%'],
  //   'xHeight': ['x-height-override', '%'],
  //   // 'ascent-override': ['ascent', '%'],
  //   // 'descent-override': ['descent', '%'],
  //   // 'line-gap-override': 'lineHeight',

  // };
  const overrides = {};
  for (let i = 0; i < metricKeys.length; i++) {
    const k = metricKeys[i];
  }
  for (const k of metricKeys) {
    overrides[k] = (sourceMetrics[k] / fallbackMetrics[k] * 100).toFixed(3);
  }
  console.log(overrides);
  return overrides;

  // Get font names
  const fontName = path.basename(woff2Path, '.woff2');
  const css = `/* Fallback for ${fontName} using ${fallbackFontName} */
@font-face {
  font-family: '${fontName}-fallback';
  src: local('${fallbackFontName}');
  ascent-override: ${overrides.ascent}%;
  descent-override: ${overrides.descent}%;
  line-gap-override: ${overrides.lineHeight}%;
  cap-height-override: ${overrides.cap}%;
  x-height-override: ${overrides.ex}%;
}
`;
  // Generate CSS with fallback
  //   const css = `/* Fallback for ${fontName} using ${fallbackFontName} */
  // @font-face {
  //   font-family: '${fontName}-fallback';
  //   src: local('${fallbackFontName}');
  //   ascent-override: ${overrides.ascent}%;
  //   descent-override: ${overrides.descent}%;
  //   line-gap-override: ${overrides.lineHeight}%;
  //   cap-height-override: ${overrides.cap}%;
  //   x-height-override: ${overrides.ex}%;
  // }

  // /* Original font with fallback */
  // @font-face {
  //   font-family: '${fontName}';
  //   src: url('${path.basename(woff2Path)}') format('woff2');
  // }

  // /* Usage example */
  // .font-${fontName.toLowerCase()} {
  //   font-family: '${fontName}', '${fontName}-fallback';
  // }`;

  return css;
}

// CLI interface
// if (require.main === module) {
//   const woff2Path = process.argv[2];
//   const fallbackFontName = process.argv[3] || 'Arial';

//   if (!woff2Path) {
//     console.error('Usage: node font-fallback.js <woff2-font-path> [fallback-font-name]');
//     process.exit(1);
//   }

//   generateFallbackCSS(woff2Path, fallbackFontName)
//     .then(css => {
//       console.log(css);
//       // Save to file
//       // const outputPath = `${path.basename(woff2Path, '.woff2')}-fallback.css`;
//       //fs.writeFileSync(outputPath, css);
//       // console.log(css);
//       //console.log(`\nCSS saved to ${outputPath}`);
//     })
//     .catch(error => {
//       console.error('Error:', error.message);
//       process.exit(1);
//     });
// }

const fontpath = 'src/assets/fonts/neue/subset-PPNeueMontreal-Variable.woff2';
const fontpath2 = 'src/assets/fonts/basement/subset-basement-expanded.woff2';
const fallbackFontName = 'Arial';
const init = async () => {
  try {
    const fonts = [fontpath, fontpath2];
    for (const font of fonts) {
      const css = await generateFallbackCSS(font, fallbackFontName);
      console.log(css);
    }
    // const fallbackCSS = await generateFallbackCSS(
    //   fontpath,
    //   fallbackFontName,
    // );
    // console.log(fallbackCSS);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  // generateFallbackCSS(fontpath, fallbackFontName)
  //   .then(css => {
  //     console.log(css);
  //     // Save to file
  //     // const outputPath = `${path.basename(woff2Path, '.woff2')}-fallback.css`;
  //     //fs.writeFileSync(outputPath, css);
  //     // console.log(css);
  //     //console.log(`\nCSS saved to ${outputPath}`);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error.message);
  //     process.exit(1);
  //   });
  // const fontpath = 'src/assets/fonts/neue-indv/NeueMontreal-Regular.woff2';
  // const css = gen(fontpath);
  // console.log(css);
};
init();
// module.exports = {
//   calculateFontMetrics,
//   generateFallbackCSS
// };