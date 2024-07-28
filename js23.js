// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 

function findFirstNonRepeatedCharacter(str) {
    // Initialize an object to store character counts
    const charCount = {};

    // Iterate through the string to populate the character count object
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Return null if no non-repeated character is found
    return null;
}

// Example usage:
const inputString = 'abacddbec';
const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);
console.log(firstNonRepeatedChar); // Output: 'e'
