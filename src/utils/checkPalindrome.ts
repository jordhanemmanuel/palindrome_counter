/*export const isPalindrome = (str: string = '') : boolean => {
    if (str == '123') 
        return true;
    else return false;
}*/

// Check if is a Palindrome, returning true or false.
// Ex: If parameter is 'arara', returns true, if 'teste', returns false.
export function isPalindrome(str:string = ''):boolean {
    //you can do the same thing using only this line of code
    //return str.split('').reverse().join('');
    let strArr:string[] = str.split('');
    strArr.reverse();
    let rts:string = strArr.join('');
    return str == rts ? true : false;
}

// Check how many palindromes in one stirng, only palindrome of 3 characters.
// Ex: 'asdfafadsd' will return 3 (faf, afa, dsd) while 'asdfafadsdafa' will return 3 too, since 'afa' repeats 2 times.
export function howManyPalindrome(str:string = ''):number {
    if (str.length < 3) return 0;

    let strArr:string[] = str.split('');
    let history:string[];
    let i:number = 0;
    let qty:number = 0;
    let strVal:string;
    for (i; i<strArr.length-2; i++) {
        if (strArr[i] == strArr[i+2]) {
            strVal = strArr[i] + strArr[i+1] + strArr[i+2];
            if (strArr.indexOf(strVal) == -1) { //qty = strArr.push(strVal);
                qty++;
                strArr.push(strVal);
            }
        }
    }
    return qty;
}

console.log(howManyPalindrome('1223'));
console.log(howManyPalindrome('asdfafadsdafa'));

