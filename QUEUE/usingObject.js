class Queue {
    constructor() {
        this.items = [];
        this.rear = 0;
        this.front = 0;
    }

    // Add an element to the rear of the queue
    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return item;
    }

    // Check if the queue is empty
    isEmpty() {
        return this.rear === this.front;
    }

    // Return the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the queue";
        }
        return this.items[this.front];
    }

    // Return the size of the queue
    size() {
        return this.rear - this.front;
    }

    // Print the elements in the queue
    print() {
        console.log(this.items.slice(this.front, this.rear));
    }
}

// Example usage:
const queue = new Queue();
console.log(queue.isEmpty()); // Output: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
console.log(queue.size()); // Output: 4
queue.print(); // Output: [ 10, 20, 30, 40 ]

console.log(queue.dequeue()); // Output: 10
console.log(queue.peek()); // Output: 20
