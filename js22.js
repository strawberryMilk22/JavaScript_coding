// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
// Sample arguments: 'microsoft.com', 'o' 
// Expected output: 3 

function countLetterOccurrences(str, letter) {
    // Ensure that the letter is a single character and the string is valid
    if (typeof str !== 'string' || typeof letter !== 'string' || letter.length !== 1) {
        throw new TypeError("Invalid input. 'str' should be a string and 'letter' should be a single character.");
    }

    // Convert the string to lowercase to ensure case-insensitivity (optional)
    str = str.toLowerCase();
    letter = letter.toLowerCase();

    // Initialize count
    let count = 0;

    // Iterate through each character in the string
    for (let char of str) {
        if (char === letter) {
            count++;
        }
    }

    return count;
}

const inputString = 'microsoft.com';
const letterToCount = 'o';
const occurrences = countLetterOccurrences(inputString, letterToCount);
console.log(occurrences); // Output: 3
