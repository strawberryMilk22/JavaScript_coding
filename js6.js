// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');

    let capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return capitalizedWords.join(' ');
}


let input = 'the quick brown fox';
let output = capitalizeFirstLetterOfEachWord(input);
console.log(output); // Output: 'The Quick Brown Fox'
