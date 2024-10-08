class circularQueue{
    constructor(capacity){
        this.items = new Array(capacity)
        this.capacity=capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(element){
        if(!this.isFull()){
            this.rear = (this.rear+1)%this.capacity
            this.items[this.rear] = element
            this.currentLength+=1
            if(this.front===-1){
                this.front= this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }
        const item = this.items[this.front]
        this.items[this.front]=null
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
            if (this.isEmpty()) {
                this.front = -1;
                this.rear = -1;
                }
        return item;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }

    
    print() {
        if (this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            let i = this.front;
            let str = '';
            while (i !== this.rear) {
                str += this.items[i] + ' ';
                i = (i + 1) % this.capacity;
            }
            str += this.items[i];
            console.log(str);
        }
    }
    
}

const queue = new circularQueue(5);
console.log(queue.isEmpty()); // Output: true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.isFull()); // Output: true
queue.print(); // Output: 10 20 30 40 50
console.log(queue.dequeue()); // Output: 10
queue.print(); // Output: 20 30 40 50
console.log(queue.peek()); // Output: 20
queue.enqueue(60);
queue.print(); // Output: 20 30 40 50 60
