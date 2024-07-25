// 1. Write a JavaScript function that reverse a number. 
// Example x = 32245;
// Expected Output: 54223 


function reverseNumber(num) {
    let currentNum = 0;
    let absNum = Math.abs(num);

    while (absNum > 0) {
       currentNum = currentNum * 10 + absNum % 10;
       absNum = Math.floor(absNum / 10);
    }
    
    return num < 0 ? -currentNum : currentNum;
}

console.log(reverseNumber(-32245));
console.log(reverseNumber(32245));
