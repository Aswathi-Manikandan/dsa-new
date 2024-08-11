function bubbleSortWithCount(arr) {
    let n = arr.length;
    let swapCount = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapCount++;
            }
        }
    }

    return { sortedArray: arr, swapCount: swapCount };
}

// Example usage:
let numbers = [64, 34, 25, 12, 22, 11, 90];
let result = bubbleSortWithCount(numbers);
console.log(result.sortedArray);  // Output: [11, 12, 22, 25, 34, 64, 90]
console.log(result.swapCount);    // Output: Number of swaps required
