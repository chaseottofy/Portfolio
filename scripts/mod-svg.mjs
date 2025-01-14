import fs from 'fs/promises';
import path from 'path';
import { optimize } from 'svgo';
import { clearDirectory } from './utils.mjs';

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);

  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function processSVG(filePath, outputDir) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const fileName = path.basename(filePath);
    const outputPath = path.join(outputDir, fileName);
    const result = optimize(content, {
      path: filePath,
      multipass: true,
      plugins: [
        'removeDoctype',
        'removeXMLProcInst',
        'removeComments',
        'removeStyleElement',
        'removeScriptElement',
        'removeMetadata',
        'prefixIds',
        'collapseGroups',
        'removeTitle',
        'removeEmptyText',
        'removeEmptyContainers',
        'removeHiddenElems',
        'cleanupEnableBackground',
        {
          name: 'removeAttrs',
          params: {
            attrs: ['class'],
          },
        },
        {
          name: 'addClassesToSVGElement',
          params: {
            className: 'tsv-icon',
          },
        },
        {
          name: 'removeUselessStrokeAndFill',
          params: {
            stroke: true,
            fill: true,
          }
        }
      ],
      // plugins: [
      //   'removeComments',
      //   {
      //     name: 'convertColors',
      //     params: {
      //       currentColor: true
      //     }
      //   },
      //   // {
      //   //   name: 'removeMetadata',
      //   //   active: true,
      //   // },
      //   // {
      //   //   name: 'removeAttrs',
      //   //   params: {
      //   //     attrs: [
      //   //       'class',
      //   //       /^data-.*/
      //   //     ]
      //   //   }
      //   // }
      //   // {
      //   //   name: 'removeDimensions',
      //   // },
      //   // {
      //   //   name: 'removeAttrs',
      //   //   params: {
      //   //     attrs: ['class', 'data-name', 'fill', 'stroke']
      //   //   }
      //   // },
      //   // {
      //   //   name: 'addAttributesToSVGElement',
      //   //   params: {
      //   //     attributes: [
      //   //       { fill: 'currentColor' },
      //   //       { stroke: 'currentColor' }
      //   //     ]
      //   //   }
      //   // }
      // ]
    });

    await fs.writeFile(outputPath, result.data);
    console.log(`Processed: ${fileName} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function findSVGFiles(directory, outputDir) {
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });

    for (const file of files) {
      const fullPath = path.join(directory, file.name);

      if (file.isDirectory()) {
        // Create corresponding subdirectory in output
        const subOutputDir = path.join(outputDir, file.name);
        await ensureDirectoryExists(subOutputDir);

        // clear directory 

        await findSVGFiles(fullPath, subOutputDir);
      } else if (path.extname(file.name).toLowerCase() === '.svg') {
        await processSVG(fullPath, outputDir);
      }
    }
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

async function init() {
  const outputDirectory = './src/images/svg/';
  const targetDirectory = './src/images/base-svg'; // unoptimized SVGs
  try {
    await ensureDirectoryExists(outputDirectory);
    await clearDirectory(outputDirectory);
    await findSVGFiles(targetDirectory, outputDirectory);
    console.log('Processing complete!');
  } catch (error) {
    console.error('Error clearing directory:', error);
  }
  // await ensureDirectoryExists(outputDirectory);
  // await findSVGFiles(targetDirectory, outputDirectory);
  // console.log('Processing complete!');
}

init();