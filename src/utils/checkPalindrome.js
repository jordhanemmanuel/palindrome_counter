"use strict";
/*export const isPalindrome = (str: string = '') : boolean => {
    if (str == '123')
        return true;
    else return false;
}*/
exports.__esModule = true;
exports.howManyPalindrome = exports.isPalindrome = void 0;
// Check if is a Palindrome, returning true or false.
// Ex: If parameter is 'arara', returns true, if 'teste', returns false.
function isPalindrome(str) {
    if (str === void 0) { str = ''; }
    //you can do the same thing using only this line of code
    //return str.split('').reverse().join('');
    var strArr = str.split('');
    strArr.reverse();
    var rts = strArr.join('');
    return str == rts ? true : false;
}
exports.isPalindrome = isPalindrome;
// Check how many palindromes in one stirng, only palindrome of 3 characters.
// Ex: 'asdfafadsd' will return 3 (faf, afa, dsd).
function howManyPalindrome(str) {
    if (str === void 0) { str = ''; }
    if (str.length < 3)
        return 0;
    var strArr = str.split('');
    var history;
    var i = 0;
    var qty = 0;
    var strVal;
    for (i; i < strArr.length - 2; i++) {
        if (strArr[i] == strArr[i + 2]) {
            strVal = strArr[i] + strArr[i + 1] + strArr[i + 2];
            if (strArr.indexOf(strVal) == -1) { //qty = strArr.push(strVal);
                qty++;
                strArr.push(strVal);
            }
        }
    }
    return qty;
}
exports.howManyPalindrome = howManyPalindrome;
console.log(howManyPalindrome('1223'));
console.log(howManyPalindrome('asdfafadsdafa'));
