class Node{
    constructor(value){
        this.value = value
        this.next = null
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

    prepend(value){
        const node = new Node(value)
            if(this.isEmpty()){
                this.head = node
            }else{
                node.next = this.head 
                this.head = node
            }
            this.size++
        }
        print(){
            if(this.isEmpty()){
                console.log('empty list');
            }else{
                let curr = this.head
                let listValues = ""
                while(curr){
                    listValues += `${curr.value}  `
                    curr = curr.next
                }
                console.log(listValues);
            }
        }

        reverse(){
            let prev = null
            let curr = this.head
            while(curr){
                let next = curr.next
                curr.next = prev
                prev = curr
                curr = next

            }
            this.head = prev
        }
    }

  const list = new LinkedList()
   list.prepend(50)
   list.prepend(90)
   list.prepend(20)
   list.prepend(44)
   list.print()
  list.reverse()
  list.print()