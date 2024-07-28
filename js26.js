// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestUniqueSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let maxSubstring = "";
    let charIndexMap = new Map(); // Map to store the last index of each character

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If the character is already in the map and its index is within the current window
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            // Move the start to the right of the previous index of currentChar
            start = charIndexMap.get(currentChar) + 1;
        }

        // Update the last seen index of the current character
        charIndexMap.set(currentChar, end);

        // Calculate the length of the current substring
        const currentLength = end - start + 1;

        // Update maxLength and maxSubstring if a longer substring is found
        if (currentLength > maxLength) {
            maxLength = currentLength;
            maxSubstring = s.slice(start, end + 1);
        }
    }

    return maxSubstring;
}

const inputString = "abcabcbb";
const longestSubstring = longestUniqueSubstring(inputString);
console.log(longestSubstring); // Output: "abc"
