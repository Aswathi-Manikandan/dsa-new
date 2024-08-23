// Heap Sort implementation in JavaScript
function heapSort(array) {
    let n = array.length;

    // Build a max heap from the array
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end (swap)
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, i, 0);
    }
}

// To heapify a subtree rooted with node i which is an index in array[].
// n is the size of the heap
function heapify(array, n, i) {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // left child index
    let right = 2 * i + 2; // right child index

    // If the left child is larger than the root
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If the right child is larger than the largest so far
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If the largest is not the root
    if (largest !== i) {
        // Swap the root with the largest element
        [array[i], array[largest]] = [array[largest], array[i]];

        // Recursively heapify the affected sub-tree
        heapify(array, n, largest);
    }
}

// Example usage:
let array = [12, 11, 13, 5, 6, 7];
heapSort(array);
console.log("Sorted array:", array); // Output: [5, 6, 7, 11, 12, 13]
