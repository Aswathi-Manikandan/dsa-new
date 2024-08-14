class Queue{
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue(){
        return this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    front(){
        return this.items[0]
    }
}

class StackUsingTwoQueue{
    constructor(){
        this.q1 = new Queue()
        this.q2 = new Queue()
    }

    push(element){
        this.q2.enqueue(element)

        while(!this.isEmpty()){
            this.q2.enqueue(this.q1.dequeue())
        }
        let temp = this.q1
        this.q1 = this.q2
        this.q2 = temp
    }

    pop(){
        if(this.q1.isEmpty()){
            return "Underflow"
        }
        return this.q1.dequeue()
    }

    peek(){
        if(this.q1.isEmpty()){
            return "Underflow"
        }
        return this.q1.front()
    }
    
    isEmpty(){
        return this.q1.isEmpty()
    }

    print(){
        return this.q1.items.join(' ')
    }
}

const stack = new StackUsingTwoQueue
stack.push(81)
stack.push(51)
stack.push(91)
stack.push(31)
stack.push(21)
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());
console.log(stack.peek());
console.log(stack.print());




