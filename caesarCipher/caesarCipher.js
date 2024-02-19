function alphabetShift(factor) {
    factor = factor % 26;
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shift = alpha;
    if (factor < 0) {
        for (let i = 0; i > factor; i--) {
            shift = shift.slice(25) + shift.slice(0, 25);
        }
    }
    if (factor > 0) {
        for (let i = 0; i < factor; i++) {
            shift = shift.slice(1, 26) + shift.slice(0, 1);
        }
    }
    const convertTable = {};
    for (let i = 65; i <= 90; i++) {
        convertTable[String.fromCharCode(i)] = shift[i - 65];
    }
    return convertTable;
}

function caesarCipher(string, factor) {
    if (factor === 0) {
        return string;
    }
    string = string.toUpperCase();
    const convert = alphabetShift(factor);
    const newStr = string.split('');
    for (let i = 0; i < newStr.length; i++) {
        if (Object.keys(convert).includes(newStr[i])) {
            newStr[i] = convert[`${newStr[i]}`];
        }
    }
    return newStr.join('');
}

module.exports = caesarCipher;