// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    let newStr = str.toLowerCase().replace(/[^0-9a-z]/g, '');
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('nurses run'));
console.log(isPalindrome('abc de4'));