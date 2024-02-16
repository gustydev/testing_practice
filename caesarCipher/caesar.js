'abcdefghijklmnopqrstuvwxyz' // 0

// Right shift
'bcdefghijklmnopqrstuvwxyza' // 1
'cdefghijklmnopqrstuvwxyzab' // 2
'defghijklmnopqrstuvwxyzabc' // 3

// Left shift
'zabcdefghijklmnopqrstuvwxy' // -1
'yzabcdefghijklmnopqrstuvwx' // -2
'xyzabcdefghijklmnopqrstuvw' // -3

function caesarCipher(string, factor) {
    string = string.toUpperCase();
    
}