class queueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(element){
        this.stack1.push(element)
    }

    dequeue(){
        if(this.stack2.length === 0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length === 0){
            return "Empty"
        }
        return this.stack2.pop()
    }

    peek(){
        if(this.stack2.length === 0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length === 0){
            return "empty"
        }
        return this.stack2[this.stack2.length-1]
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let result = "";
            for (let i = 0; i < this.stack2.length; i++) {
                result += this.stack2[i] + " ";
            }
            for (let i = this.stack1.length - 1; i >= 0; i--) {
                result += this.stack1[i] + " ";
            }
            console.log(result.trim());
        }
    }
}

const queue = new queueUsingStack()
queue.enqueue(71)
queue.enqueue(52)
queue.enqueue(59)
queue.enqueue(51)
queue.enqueue(45)
queue.printQueue()
console.log(queue.dequeue());
console.log(queue.peek());

