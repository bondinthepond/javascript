class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVetex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(sourceVertex, targetVertex) {
    if (
      this.adjacencyList[sourceVertex] &&
      this.adjacencyList[targetVertex] &&
      sourceVertex != targetVertex
    ) {
      this.adjacencyList[sourceVertex].push(targetVertex);
      this.adjacencyList[targetVertex].push(sourceVertex);
      console.log("Edge Added");
      return true;
    }
    console.log("Edge Not Added");
    return false;
  }

  removeEdge(sourceVertex, targetVertex) {
    if (
      this.adjacencyList[sourceVertex] &&
      this.adjacencyList[targetVertex] &&
      sourceVertex != targetVertex
    ) {
      let sourceVertexIndex =
        this.adjacencyList[targetVertex].indexOf(sourceVertex);
      console.log(
        "TargetVertex : " +
          targetVertex +
          "sourceVertexIndex : " +
          sourceVertexIndex
      );

      this.adjacencyList[targetVertex].splice(sourceVertexIndex, 1);

      let targetVertexIndex =
        this.adjacencyList[sourceVertex].indexOf(targetVertex);
      console.log(
        "SourceVertex : " +
          sourceVertex +
          "targetVertexIndex : " +
          targetVertexIndex
      );

      this.adjacencyList[sourceVertex].splice(targetVertexIndex, 1);

      /* alternative approach - java script promise + array filter method
       
        this.adjacencyList[sourceVertex] = this.adjacencyList[
          sourceVertex
        ].filter((v) => v !== sourceVertex);
        this.adjacencyList[targetVertex] = this.adjacencyList[
          targetVertex
        ].filter((v) => v !== targetVertex);

      */
      console.log("Removed Edge");
      return true;
    }
    console.log("Edge Not Removed");
    return false;
  }

  removeVertex(vertex) {
    /* remove edges first, then remove the vertex
      In case of bi-directional graphs - pop the vertecies from the array of the traget vertex, and then pop the targetVertex from the array of the popped vetex.
      */

    if (!this.adjacencyList[vertex]) return false;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

let graph = new Graph();
graph.addVetex(5);
graph.addVetex(5);
graph.addVetex(15);
graph.addVetex(25);
graph.addVetex(35);
graph.addVetex(45);

graph.addEdge(5, 25);
graph.addEdge(5, 35);
graph.addEdge(35, 15);
graph.addEdge(5, 15);
graph.addEdge(35, 25);

graph.removeEdge(5, 15);
graph.removeEdge(35, 15);

console.log(graph);
