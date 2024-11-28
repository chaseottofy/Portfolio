// const fs = require('node:fs');
// const path = require('node:path');
// const subsetFont = require('subset-font');
import fs from 'fs';
import path from 'path';
import subsetFont from 'subset-font';

/*
inputPath = '../src/styles/geist-latin.woff2',
outputPath = '../dist/geist-latin-subset.woff2',
*/

const subsettedText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?—•/';
const baseDir = './src/assets/fonts'
const fontFiles = {
  'NeueMontreal-Regular.woff2': {
    inputPath: `${baseDir}/neue/NeueMontreal-Regular.woff2`,
    outputPath: `${baseDir}/subsetted/NeueMontreal-Regular-Subset.woff2`,
  },
  'NeueMontreal-Medium.woff2': {
    inputPath: `${baseDir}/neue/NeueMontreal-Medium.woff2`,
    outputPath: `${baseDir}/subsetted/NeueMontreal-Medium-Subset.woff2`,
  },
  'basement-expanded.woff2': {
    inputPath: `${baseDir}/basement-expanded.woff2`,
    outputPath: `${baseDir}/subsetted/basement-expanded-Subset.woff2`,
  },
}

// node ./scripts/handle-subset-font.mjs ./src/assets/fonts/neue/NeueMontreal-Regular.woff2 ./src/assets/fonts/subsetted/NeueMontreal-Regular.woff2
async function subsetFontFile(
  // inputPath = './src/assets/fonts/neue/NeueMontreal-Regular.woff2',
  // outputPath = './dist',
  // outputPath = './src/assets/fonts/subsetted/NeueMontreal-Regular-Subset.woff2',
  inputPath,
  outputPath,
  text = subsettedText,
) {
  try {
    const fontBuffer = fs.readFileSync(inputPath);
    const subsetBuffer = await subsetFont(fontBuffer, text);
    // output exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    fs.writeFileSync(outputPath, subsetBuffer);
    console.log(`Subsetted font saved to: ${outputPath}`);
  } catch (error) {
    console.error('Error subsetting font:', error);
  }
}

// Main function to run the script
function main() {
  // const args = process.argv.slice(2);
  // if (args.length !== 2) {
  //   console.log('Usage: node subset-font.js <inputFontPath> <outputFontPath>');
  //   throw new Error('Invalid arguments')
  // }
  // subsetFontFile(...args, subsettedText);
  for (const [_, fontFile] of Object.entries(fontFiles)) {
    const { inputPath, outputPath } = fontFile;
    subsetFontFile(inputPath, outputPath, subsettedText);
  }
}

main();
