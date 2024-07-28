// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
// Sample array: [1,2,3,4,5]
// Expected Output: 2,4 

function secondLowestAndGreatest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements.";
    }

    let sortedArray = arr.slice().sort((a, b) => a - b);

    let secondLowest = sortedArray[1];
    let secondGreatest = sortedArray[sortedArray.length - 2];

    return [secondLowest, secondGreatest];
}

let sampleArray = [1, 2, 3, 4, 5];
let result = secondLowestAndGreatest(sampleArray);
console.log(result); // Output: [2, 4]
  