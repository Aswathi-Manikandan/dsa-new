function bubbleSortStrings(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { 
        // Number of passes
        for (let j = 0; j < n - 1 - i; j++) { 
            // Comparison loop
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let strings = ["banana", "apple", "orange", "mango"];
console.log(bubbleSortStrings(strings));  // Output: ["apple", "banana", "mango", "orange"]
