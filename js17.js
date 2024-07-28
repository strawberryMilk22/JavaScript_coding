// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 

function countLetterOccurrences(str) {
    // Initialize an empty object to store letter counts
    let letterCounts = {};

    // Convert the string to lowercase to ensure case-insensitivity
    str = str.toLowerCase();

    // Iterate through each character in the string
    for (let char of str) {
        // Check if the character is a letter
        if (char >= 'a' && char <= 'z') {
            // Increment the count for the character or initialize it if it doesn't exist
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }

    return letterCounts;
}

let input = "The quick brown fox jumps over the lazy dog";
let occurrences = countLetterOccurrences(input);
console.log(occurrences);
// Output: { t: 2, h: 2, e: 3, q: 1, u: 2, i: 1, c: 1, k: 1, b: 1, r: 2, o: 4, w: 1, n: 1, f: 1, x: 1, j: 1, m: 1, p: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, d: 1, g: 1 }
