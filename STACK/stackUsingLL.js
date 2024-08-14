class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedListStack{
    constructor(){
        this.top = null
        this.count = 0
    }

    push(element){
        const NewNode = new Node(element)
        NewNode.next = this.top
        this.top = NewNode
        this.count++    
    }

    pop(){
        if(this.isEmpty()){
            return "No elements to pop"
        }
        const PoppedNode = this.top
        this.top = this.top.next
        this.count--
        return PoppedNode.value
    }

    isEmpty(){
        return this.top === null
    }

    peek(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.top.value
    }

    print(){
        let current = this.top
        let result = ' '
        while(current){
            result += current.value + ' '
            current = current.next
        }
        return result.trim()
    }
   
}


const link = new LinkedListStack
link.push(99)
link.push(88)
link.push(56)
link.push(78)
console.log(link.print());
console.log(link.pop());
console.log(link.print());
console.log(link.peek());
console.log(link.print());




