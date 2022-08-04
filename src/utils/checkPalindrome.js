"use strict";
/*export const isPalindrome = (str: string = '') : boolean => {
    if (str == '123')
        return true;
    else return false;
}*/
exports.__esModule = true;
exports.possiblesPalindrome = exports.howManyPalindrome = exports.isPalindrome = void 0;
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
// Ex: 'asdfafadsd' will return 3 (faf, afa, dsd) while 'asdfafadsdafa' will return 3 too, since 'afa' repeats 2 times.
function howManyPalindrome(str) {
    if (str === void 0) { str = ''; }
    if (str.length < 3)
        return 0;
    var strArr = str.toLowerCase().split('');
    var history = [];
    var i = 0;
    var qty = 0;
    var strVal;
    for (i; i < strArr.length - 2; i++) {
        if (strArr[i] == strArr[i + 2]) {
            strVal = strArr[i] + strArr[i + 1] + strArr[i + 2];
            if (history.indexOf(strVal) == -1) { //qty = strArr.push(strVal);
                qty++;
                history.push(strVal);
            }
        }
    }
    return qty;
}
exports.howManyPalindrome = howManyPalindrome;
function possiblesPalindrome(str) {
    if (str === void 0) { str = ''; }
    if (str.length < 3)
        return 0;
    var letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersHis = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var strArr = str.toLowerCase().split('');
    var strRev = str.toLowerCase().split('');
    var qty = 0;
    var index;
    var x;
    var y;
    var s;
    strRev.reverse();
    console.log(str);
    var _loop_1 = function (i) {
        s = strArr[i];
        if (lettersHis.indexOf(s) == -1)
            return "continue"; //if the letter isn't on this array, the palindrome has already been checked for that initial letter
        lettersHis.splice(lettersHis.indexOf(s), 1);
        index = strRev.indexOf(s);
        if (strArr.length - 1 - i <= index)
            return "continue"; //see if the index found on reversed array is not the same index on non-reverse array
        x = strArr.length - 1 - index; //x points to the same letter, like indexOf but reversed
        letters.forEach(function (item) {
            y = strArr.indexOf(item, i + 1);
            if (y > i && y < x)
                qty++;
        });
    };
    for (var i = 0; i < strArr.length - 2 && lettersHis.length > 0; i++) {
        _loop_1(i);
    }
    return qty;
}
exports.possiblesPalindrome = possiblesPalindrome;
console.log(howManyPalindrome('1223'));
console.log(howManyPalindrome('asdfafadsdafa'));
console.log(possiblesPalindrome('asdfafagklopl'));
