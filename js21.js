// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
// Sample array: [1, 2, 3] and subset length is 2 
// Expected output: [[2, 1], [3, 1], [3, 2]]

function getSubsets(arr, length) {
    const results = [];

    function backtrack(start, path) {
        if (path.length === length) {
            results.push([...path]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            backtrack(i + 1, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return results;
}

const inputArray = [1, 2, 3];
const subsetLength = 2;
const subsets = getSubsets(inputArray, subsetLength);
console.log(subsets); // Output: [[1, 2], [1, 3], [2, 3]]
