// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');
  
    let capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    return capitalizedWords.join(' ');
  }
  
console.log(capitalizeFirstLetterOfEachWord('the quick brown fox')); 
// Output: 'The Quick Brown Fox'
  
