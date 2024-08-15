class Node{
    constructor(value){
        this.value = value 
        this.next = null
    }
}

class QueueUsingLinedList{
    constructor(){
        this.front =null
        this.rear = null
        this.size = 0
    }

    enqueue(element){
        const Newnode = new Node(element)
        if(this.rear){
            this.rear.next = Newnode
           
        }
        this.rear = Newnode

        if(!this.front){
            this.front = Newnode
        }
        this.size++
    }

    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }

        const dequednode = this.front
        this.front = this.front.next
        
        if(!this.front){
            this.rear = null
        }

        this.size--
        return dequednode.value
    }

    peek(){
        if(this.isEmpty()){
            return "Queue is empty "
        }
        return this.front.value
    }

    isEmpty(){
        return this.size === 0
    }

    print(){
        let current = this.front
        let result = ' '
        while(current){
            result+= current.value+' '
            current = current.next
        }
        return result.trim()
    }
}

const link = new QueueUsingLinedList()
link.enqueue(80)
link.enqueue(810)
link.enqueue(520)
link.enqueue(550)
link.enqueue(60)
console.log(link.print());
console.log(link.dequeue());
console.log(link.peek());


