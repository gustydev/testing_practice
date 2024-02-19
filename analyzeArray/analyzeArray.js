function analyzeArray(arr) {
    if (!arr) {
        throw new Error('No input')
    }
    if (arr.some((e) => typeof e !== "number")) {
        throw new Error('Array must be all numbers (no strings or other types allowed)')
    }
    return {

    }
}

module.exports = analyzeArray;