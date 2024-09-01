class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(vertex1,vertex2){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push(vertex2)
        this.adjacencyList[vertex2].push(vertex1)

    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex=>vertex!==vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex=>vertex!==vertex1)
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].lenth){
            const adjacentVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }

    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->'+ this.adjacencyList[vertex].join(', '));
            
        }
    }
}

const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');

graph.display()