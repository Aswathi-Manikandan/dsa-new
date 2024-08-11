function bubbleSortRecursive(arr, n) { 
    // Define a function named bubbleSortRecursive that takes an array and its size as arguments.
    
    if (n === 1) {
        // Base case: If the size of the array is 1, return the array as it is already sorted.
        return arr;
    }

    for (let i = 0; i < n - 1; i++) { 
        // Loop through the array to compare adjacent elements.
        
        if (arr[i] > arr[i + 1]) { 
            // If the current element is greater than the next element,
            // swap them.
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }

    // Recursively call the function for the array size reduced by one.
    return bubbleSortRecursive(arr, n - 1);
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSortRecursive(numbers, numbers.length));  // Output: [11, 12, 22, 25, 34, 64, 90]
