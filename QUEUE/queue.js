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

    print(){
        console.log(this.items.toString());
        
    }

    isEmpty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }
}

const queue = new Queue()
queue.enqueue(89)
queue.enqueue(57)
queue.print()
console.log(queue.dequeue());
console.log(queue.peek());


