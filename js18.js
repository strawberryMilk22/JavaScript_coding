// 18. Write a function for searching JavaScript arrays with a binary search. 
// Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(arr, target) {
    // Ensure the array is sorted
    if (!Array.isArray(arr) || arr.length === 0) {
        return -1; // Indicate that the array is invalid
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index if the target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Narrow the search to the right half
        } else {
            right = mid - 1; // Narrow the search to the left half
        }
    }

    return -1; // Indicate that the target was not found
}

let sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(sortedArray, 5)); // Output: 4
console.log(binarySearch(sortedArray, 11)); // Output: -1

