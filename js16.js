// 16. Write a JavaScript function to extract unique characters from a string. 
// Example string: "thequickbrownfoxjumpsoverthelazydog"
// Expected Output: "thequickbrownfxjmpsvlazydg"

function extractUniqueCharacters(str) {
    // Initialize an empty Set to keep track of unique characters
    let uniqueChars = new Set();

    // Initialize an empty array to store the result
    let result = [];

    // Iterate through each character in the string
    for (let char of str) {
        // Add the character to the Set and to the result array if it's not already in the Set
        if (!uniqueChars.has(char)) {
            uniqueChars.add(char);
            result.push(char);
        }
    }

    // Convert the result array to a string and return it
    return result.join('');
}

// Example usage:
let input = "thequickbrownfoxjumpsoverthelazydog";
let output = extractUniqueCharacters(input);
console.log(output); // Output: "thequickbrownfxjmpsvlazydg"
