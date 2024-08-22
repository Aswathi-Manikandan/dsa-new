class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return 2 * index + 1;
    }

    getRightChildIndex(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;

        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    extractMax() {
        if (this.heap.length === 0) return null;

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return max;
    }

    heapifyDown() {
        let index = 0;

        while (this.getLeftChildIndex(index) < this.heap.length) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.getRightChildIndex(index) < this.heap.length && this.heap[this.getRightChildIndex(index)] > this.heap[largerChildIndex]) {
                largerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }

            index = largerChildIndex;
        }
    }
}

// Example usage:
const maxHeap = new MaxHeap();
maxHeap.insert(10);
maxHeap.insert(15);
maxHeap.insert(20);
maxHeap.insert(17);

console.log(maxHeap.extractMax()); // Output: 20
console.log(maxHeap.extractMax()); // Output: 17
console.log(maxHeap.extractMax());
console.log(maxHeap.extractMax());
