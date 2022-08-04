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

    let strArr:string[] = str.toLowerCase().split('');
    let history:string[] = [];
    let i:number = 0;
    let qty:number = 0;
    let strVal:string;
    for (i; i<strArr.length-2; i++) {
        if (strArr[i] == strArr[i+2]) {
            strVal = strArr[i] + strArr[i+1] + strArr[i+2];
            if (history.indexOf(strVal) == -1) { //qty = strArr.push(strVal);
                qty++;
                history.push(strVal);
            }
        }
    }
    return qty;
}

//Check how many possible palindromes in one strong, only palindrome of 3 characters.
//Ex: 'asdfafagklopl' will return 7 (asa, ada, afa, aaa, faf, lol, lpl)
export function possiblesPalindrome(str:string = ''):number {
    if (str.length < 3) return 0;

    let letters:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let lettersHis:string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let strArr:string[] = str.toLowerCase().split('');
    let strRev:string[] = str.toLowerCase().split('');
    let qty:number = 0;
    let index:number;
    let x: number;
    let y:number;
    let s:string;
    strRev.reverse();
    console.log(str);

    for (let i = 0; i<strArr.length-2 && lettersHis.length > 0;i++) {
        s = strArr[i];
        if (lettersHis.indexOf(s) == -1) continue; //if the letter isn't on this array, the palindrome has already been checked for that initial letter
        lettersHis.splice(lettersHis.indexOf(s),1);
        index = strRev.indexOf(s);
        if (strArr.length - 1 - i <= index) continue; //see if the index found on reversed array is not the same index on non-reverse array
        x = strArr.length - 1 - index; //x points to the same letter, like indexOf but reversed
        letters.forEach(function(item) {
            y = strArr.indexOf(item, i+1);
            if (y > i && y < x) qty++; 
        })
    }
    return qty;
}

console.log(howManyPalindrome('1223'));
console.log(howManyPalindrome('asdfafadsdafa'));
console.log(possiblesPalindrome('asdfafagklopl'));
