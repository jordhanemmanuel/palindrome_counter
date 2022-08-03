/*export const isPalindrome = (str: string = '') : boolean => {
    if (str == '123') 
        return true;
    else return false;
}*/

export function isPalindrome(str:string = ''):boolean {
    //you can do the same thing using only this line of code
    //return str.split('').reverse().join('');
    let strArr : string[] = str.split('');
    strArr.reverse();
    let rts : string = strArr.join('');
    return str == rts ? true : false;
}

console.log(isPalindrome('1223'));
console.log(isPalindrome('abba'));
