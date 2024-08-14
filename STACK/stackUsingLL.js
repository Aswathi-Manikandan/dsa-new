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
            return "Underflow"
        }
        const poppedNode = this.top
        this.top = this.top.next
        this.count--
        return poppedNode.value
    }

    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.top.value
    }

    isEmpty(){
        return this.top === null
    }

    size(){
        return this.count
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

const link = new LinkedListStack()
link.push(90)
link.push(50)
link.push(78)
link.push(67)
console.log(link.print());
console.log(link.pop());
console.log(link.print());
console.log(link.peek());
console.log(link.print());




