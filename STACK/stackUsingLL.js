class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null; // Initialize the top of the stack as null
        this.size = 0;   // Initialize the size of the stack
    }

    // Add an element to the top of the stack
    push(element) {
        const newNode = new Node(element); // Create a new node
        newNode.next = this.top; // Point the new node to the current top
        this.top = newNode;      // Update the top to be the new node
        this.size++;             // Increment the size
    }

    // Remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow"; // If the stack is empty, return "Underflow"
        }
        const poppedNode = this.top; // Store the current top node
        this.top = this.top.next;    // Update the top to the next node
        this.size--;                 // Decrement the size
        return poppedNode.value;     // Return the value of the popped node
    }

    // Return the top element without removing it
    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack"; // If the stack is empty, return a message
        }
        return this.top.value; // Return the value of the top element
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0; // Return true if the size is 0
    }

    // Return the size of the stack
    getSize() {
        return this.size; // Return the size
    }

    // Print the elements in the stack
    printStack() {
        let current = this.top;
        let stackValues = [];
        while (current) {
            stackValues.push(current.value);
            current = current.next;
        }
        return stackValues.join(' '); // Join the elements into a string separated by spaces
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // Output: 30 20 10
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.getSize()); // Output: 2
console.log(stack.isEmpty()); // Output: false
