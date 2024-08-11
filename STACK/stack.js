class Stack{
    constructor(){
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    isEmpty(){
        return this.items.length === 0
    }

    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.pop()
    }

    print(){
       
        return this.items.join(' ')
    }

    peek() {
        if (this.isEmpty()) {
            return "No elements in the stack";
        }
        return this.items[this.items.length - 1];
    }
}

const stack = new Stack()
console.log(stack.pop());
stack.push(10)
stack.push(89)
stack.push(25)
console.log(stack.print());
console.log(stack.peek());


