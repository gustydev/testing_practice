function analyzeArray(arr) {
    if (arr.length === 0) {
        throw Error('No input / array is empty')
    }
    if (arr.some((e) => typeof e !== "number")) {
        throw Error('Array must be all numbers (no strings or other types allowed)')
    }
    const avg = arr.reduce((sum, current) => sum + current, 0) / arr.length;
    return {
        average: avg,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

module.exports = analyzeArray;