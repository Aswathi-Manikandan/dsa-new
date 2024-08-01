
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromFront() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.head.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.size--;
        return value;
    }

    removeFromEnd() {
        if (this.isEmpty()) {
            return null;
        }
        const value = this.tail.value;
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
        return value;
    }

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let result = '';
            while (current) {
                result += `${current.value} `;
                current = current.next;
            }
            console.log('Doubly Linked List:', result.trim());
        }
    }

    reverse() {
        let current = this.head;
        let prevNode = null;
        while (current) {
            const nextNode = current.next;
            current.next = prevNode;
            current.prev = nextNode;
            prevNode = current;
            current = nextNode;
        }
        this.tail = this.head;
        this.head = prevNode;
    }
}

// Example usage:
const dll = new DoublyLinkedList();
dll.append(1);
dll.append(2);
dll.append(3);
dll.prepend(0);

console.log('Original Doubly Linked List:');
dll.print();

dll.removeFromFront();
dll.removeFromEnd();

console.log('Doubly Linked List after removals:');
dll.print();

dll.reverse();
console.log('Reversed Doubly Linked List:');
dll.print();