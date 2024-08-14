class Stack{
    constructor(){
        this.queue = []
    }

    push(element){
        const size = this.queue.length
        this.queue.push(element)
        for(let i = 0; i<size; i++){
            this.queue.push(this.queue.shift())
        }
    }

    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.queue.shift()
    }
}