
/**
 * DEV
 * measureMemory
 * log memory usage to the console every 10 seconds
 */
function measureMemory() {
  function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
  }

  function printMemoryUsage() {
    const memory = window.performance.memory;
    const used = formatBytes(memory.usedJSHeapSize);
    const total = formatBytes(memory.totalJSHeapSize);
    console.log(`Memory usage: ${used} / ${total}`);
  }

  setInterval(printMemoryUsage, 10000); // Log memory usage every 10 seconds
}

export default measureMemory;
