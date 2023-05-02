export const formatNumber = (num) => {
    const suffixes = ['', 'k', 'M', 'B', 'T']; // Array of suffixes for each order of magnitude
    const order = Math.min(Math.floor(Math.log10(num) / 3), suffixes.length - 1); // Determine order of magnitude
    const scaled = num / Math.pow(10, order * 3); // Scale the number by the order of magnitude
    return scaled.toFixed(1) + suffixes[order]; // Return the formatted string with one decimal place and the appropriate suffix
}

