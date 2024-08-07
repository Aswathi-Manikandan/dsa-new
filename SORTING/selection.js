function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Assume the minimum is the first element
        let minIndex = i;

        // Check the rest of the array to find the true minimum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the minimum value with the value at the current position
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

const arr = [29, 10, 14, 37, 13];
console.log(selectionSort(arr)); // Output: [10, 13, 14, 29, 37]
