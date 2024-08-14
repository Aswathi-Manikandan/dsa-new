class StackUsingOneQueue{
    constructor(){
        this.queue = []
    }

    push(element){
        const size = this.queue.length
        this.queue.push(element)

        //rotate to make the new element at the front

        for(let i=0;i<size;i++){
            this.queue.push(this.queue.shift())
        }
    }

    pop(){
        if(this.isEmpty()){
            return "Underflow"
        }
        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return "No elements"
        }
        return this.queue[0]
    }

    print(){
        return this.queue.join(' ')
    }
}

const stack = new StackUsingOneQueue
stack.push(50)
stack.push(80)
stack.push(20)
stack.push(60)
stack.push(10)
console.log(stack.print());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.print());



