class Node{
    constructor(value){
        this.value = value
        this.head = null
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty');
        }
        else{
            let curr = this.head
            let listValues = ""
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next
            }
            console.log(listValues);
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
        this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }
}

const list = new LinkedList()
list.append(30)
list.append(70)
list.append(40)
list.append(80)
list.print()

