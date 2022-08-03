"use strict";
/*export const isPalindrome = (str: string = '') : boolean => {
    if (str == '123')
        return true;
    else return false;
}*/
exports.__esModule = true;
exports.isPalindrome = void 0;
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
console.log(isPalindrome('1223'));
console.log(isPalindrome('abba'));
