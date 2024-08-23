class Graph{
    constructor(){
        this.adjacencylist = {}
    }

    addVertex(vertex){
        if(!this.adjacencylist[vertex]){
            this.adjacencylist[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencylist[vertex1]) {
            this.addVertex(vertex1)
            
        } 
        if(!this.adjacencylist[vertex2]) {
            this.addVertex(vertex2)
            
        } 
        this.adjacencylist[vertex1].add(vertex2)
        this.adjacencylist[vertex2].add(vertex1)
        

    }


    //checking if the edge exists 

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencylist[vertex1].has(vertex2) &&
            this.adjacencylist[vertex2].has(vertex1)
        )
    }
    display(){
        for(let vertex in this.adjacencylist){
            console.log(vertex + " -> " + [...this.adjacencylist[vertex]]);
            
        }
    }

    removeEdge(vertex1,vertex2){
        this.adjacencylist[vertex1].delete(vertex2)
        this.adjacencylist[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencylist[vertex]){
            return 
        }
        for(let addVertex of this.adjacencylist[vertex]){
            this.removeEdge(vertex,addVertex)
        }
        delete this.adjacencylist[vertex]
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")


graph.addEdge("A","B")
graph.addEdge("B","C")
graph.display()
console.log(graph.hasEdge("A","B"));
console.log(graph.hasEdge("A","c"));
graph.removeVertex("B")
graph.display()