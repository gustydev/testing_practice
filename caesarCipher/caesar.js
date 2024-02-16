'abcdefghijklmnopqrstuvwxyz' // 0

// Right shift
'bcdefghijklmnopqrstuvwxyza' // 1
'cdefghijklmnopqrstuvwxyzab' // 2
'defghijklmnopqrstuvwxyzabc' // 3

// Left shift
'zabcdefghijklmnopqrstuvwxy' // -1
'yzabcdefghijklmnopqrstuvwx' // -2
'xyzabcdefghijklmnopqrstuvw' // -3

function alphabetShift(factor) {
    factor = factor % 26;
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (factor < 0) {
        for (let i = 0; i > factor; i--) {
            alpha = alpha.slice(25) + alpha.slice(0, 25);
        }
    }
    if (factor > 0) {
        for (let i = 0; i < factor; i++) {
            alpha = alpha.slice(1, 25) + alpha.slice(0, 1);
        }
    }
    return alpha;
}

function caesarCipher(string, factor) {


}

module.exports = caesarCipher;
