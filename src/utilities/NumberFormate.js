export function formatNumber(num) {
    const suffixes = ['', 'k', 'M', 'B', 'T']; // Array of suffixes for each order of magnitude
    if (num < 1000) {
      return (num / 1000).toFixed(1) + suffixes[1]; // Divide num by 1000 and add the "k" suffix
    }
    const order = Math.min(Math.floor(Math.log10(num) / 3), suffixes.length - 1); // Determine order of magnitude
    const scaled = num / Math.pow(10, order * 3); // Scale the number by the order of magnitude
    return scaled.toFixed(1) + suffixes[order]; // Return the formatted string with one decimal place and the appropriate suffix
  }
  

