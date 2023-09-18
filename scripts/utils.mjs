import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function get__filename() {
  const stack = new Error().stack;
  const match = stack.match(/^Error\s+at[^\r\n]+\s+at *(?:[^\r\n(]+\((.+?)(?::\d+:\d+)?\)|(.+?)(?::\d+:\d+)?) *([\r\n]|$)/);
  const filename = match[1] || match[2];
  if (filename.startsWith('file://')) { return fileURLToPath(filename); }
  return filename;
}

// hack to allow __dirname
export function initGlobalDirname() {
  if (typeof __filename === 'undefined') {
    global.__filename = get__filename();
    global.__dirname = path.dirname(__filename);
  }
}

export function isNum(value) {
  const num = Number(value);
  if (isNaN(num)) {
    throw new Error(`Invalid small image multiplier specified. Must be a number. Input: ${value}`);
  }

  return num;
}

export async function convertImageToBase64(filePath) {
  const buffer = await fs.promises.readFile(filePath);
  return buffer.toString('base64');
}

export async function clearDirectory(directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isFile()) {
        fs.unlinkSync(filePath);
        console.log(`Deleted: ${filePath}`);
      } else {
        console.log(`Skipped directory: ${filePath}`);
      }
    }

    console.log('All files cleared from the directory!');

  } catch (error) {
    console.error(`Error reading or clearing directory: ${error.message}`);
  }
}