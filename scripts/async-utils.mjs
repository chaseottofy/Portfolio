import fs from 'fs/promises';

/**
 * Check if a directory exists at the given path
 * @param {string} dirPath - Path to the directory
 * @returns {Promise<boolean>} True if directory exists, false otherwise
 */
async function directoryExists(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    return stats.isDirectory();
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error; // Re-throw other errors
  }
}

async function resetDirectory(dirPath) {
  try {
    // Check if directory exists
    const exists = await fs.access(dirPath)
      .then(() => true)
      .catch(() => false);
    
    if (exists) {
      // Remove all contents recursively
      await fs.rm(dirPath, { recursive: true, force: true });
    }
    
    // Create fresh directory
    await fs.mkdir(dirPath, { recursive: true });
    
  } catch (error) {
    console.error(`Error handling directory ${dirPath}:`, error);
    throw error;
  }
}

/**
 * Check if a path exists (could be file or directory)
 * @param {string} path - Path to check
 * @returns {Promise<boolean>} True if path exists, false otherwise
 */
async function pathExists(path) {
  try {
    await fs.access(path);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error; // Re-throw other errors
  }
}

// Example usage:
/*
try {
  // Check if directory exists
  const dirExists = await directoryExists('./fonts');
  console.log('Directory exists:', dirExists);

  // Check if path exists
  const exists = await pathExists('./fonts/font.woff2');
  console.log('Path exists:', exists);
} catch (error) {
  console.error('Error checking path:', error);
}
*/

async function prependToCSS(filePath, contentToPrepend) {
  try {
    // Read existing content
    const existingContent = await fs.readFile(filePath, 'utf8');

    // Combine new and existing content
    const newContent = `${contentToPrepend}\n\n${existingContent}`;

    // Write back to file
    await fs.writeFile(filePath, newContent, 'utf8');
  } catch (error) {
    throw new Error(`Failed to prepend to CSS file: ${error.message}`);
  }
}

export { directoryExists, resetDirectory, pathExists, prependToCSS };
