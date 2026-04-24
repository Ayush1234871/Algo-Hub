const codeSnippets = {
    python: `class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = []

    def addEdge(self, u, v, w):
        self.graph.append([u, v, w])

    def printArr(self, dist):
        print("Vertex Distance from Source")
        for i in range(self.V):
            print("{0}\\t\\t{1}".format(i, dist[i]))

    def BellmanFord(self, src):
        dist = [float("Inf")] * self.V
        dist[src] = 0

        for _ in range(self.V - 1):
            for u, v, w in self.graph:
                if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                    dist[v] = dist[u] + w

        for u, v, w in self.graph:
            if dist[u] != float("Inf") and dist[u] + w < dist[v]:
                print("Graph contains negative weight cycle")
                return

        self.printArr(dist)

if __name__ == '__main__':
    g = Graph(5)
    g.addEdge(0, 1, -1)
    g.addEdge(0, 2, 4)
    g.addEdge(1, 2, 3)
    g.addEdge(1, 3, 2)
    g.addEdge(1, 4, 2)
    g.addEdge(3, 2, 5)
    g.addEdge(3, 1, 1)
    g.addEdge(4, 3, -3)

    g.BellmanFord(0)`,

    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

struct Edge {
    int src, dest, weight;
};

struct Graph {
    int V, E;
    struct Edge* edge;
};

struct Graph* createGraph(int V, int E) {
    struct Graph* graph = (struct Graph*) malloc(sizeof(struct Graph));
    graph->V = V;
    graph->E = E;
    graph->edge = (struct Edge*) malloc(graph->E * sizeof(struct Edge));
    return graph;
}

void printArr(int dist[], int n) {
    printf("Vertex   Distance from Source\\n");
    for (int i = 0; i < n; ++i)
        printf("%d \\t\\t %d\\n", i, dist[i]);
}

void BellmanFord(struct Graph* graph, int src) {
    int V = graph->V;
    int E = graph->E;
    int dist[V];

    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX;
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = graph->edge[j].src;
            int v = graph->edge[j].dest;
            int weight = graph->edge[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    for (int i = 0; i < E; i++) {
        int u = graph->edge[i].src;
        int v = graph->edge[i].dest;
        int weight = graph->edge[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            printf("Graph contains negative weight cycle\\n");
            return;
        }
    }
    printArr(dist, V);
}

int main() {
    int V = 5, E = 8;
    struct Graph* graph = createGraph(V, E);

    graph->edge[0].src = 0; graph->edge[0].dest = 1; graph->edge[0].weight = -1;
    graph->edge[1].src = 0; graph->edge[1].dest = 2; graph->edge[1].weight = 4;
    graph->edge[2].src = 1; graph->edge[2].dest = 2; graph->edge[2].weight = 3;
    graph->edge[3].src = 1; graph->edge[3].dest = 3; graph->edge[3].weight = 2;
    graph->edge[4].src = 1; graph->edge[4].dest = 4; graph->edge[4].weight = 2;
    graph->edge[5].src = 3; graph->edge[5].dest = 2; graph->edge[5].weight = 5;
    graph->edge[6].src = 3; graph->edge[6].dest = 1; graph->edge[6].weight = 1;
    graph->edge[7].src = 4; graph->edge[7].dest = 3; graph->edge[7].weight = -3;

    BellmanFord(graph, 0);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <limits.h>

using namespace std;

struct Edge {
    int src, dest, weight;
};

void BellmanFord(int V, int E, vector<Edge>& edges, int src) {
    vector<int> dist(V, INT_MAX);
    dist[src] = 0;

    for (int i = 1; i <= V - 1; i++) {
        for (int j = 0; j < E; j++) {
            int u = edges[j].src;
            int v = edges[j].dest;
            int weight = edges[j].weight;
            if (dist[u] != INT_MAX && dist[u] + weight < dist[v])
                dist[v] = dist[u] + weight;
        }
    }

    for (int i = 0; i < E; i++) {
        int u = edges[i].src;
        int v = edges[i].dest;
        int weight = edges[i].weight;
        if (dist[u] != INT_MAX && dist[u] + weight < dist[v]) {
            cout << "Graph contains negative weight cycle" << endl;
            return;
        }
    }

    cout << "Vertex Distance from Source" << endl;
    for (int i = 0; i < V; ++i)
        cout << i << "\\t\\t" << dist[i] << endl;
}

int main() {
    int V = 5;
    int E = 8;
    vector<Edge> edges(E);

    edges[0] = {0, 1, -1};
    edges[1] = {0, 2, 4};
    edges[2] = {1, 2, 3};
    edges[3] = {1, 3, 2};
    edges[4] = {1, 4, 2};
    edges[5] = {3, 2, 5};
    edges[6] = {3, 1, 1};
    edges[7] = {4, 3, -3};

    BellmanFord(V, E, edges, 0);
    return 0;
}`,

    java: `import java.util.*;

class BellmanFordGraph {
    class Edge {
        int src, dest, weight;
        Edge() { src = dest = weight = 0; }
    };

    int V, E;
    Edge edge[];

    BellmanFordGraph(int v, int e) {
        V = v;
        E = e;
        edge = new Edge[e];
        for (int i = 0; i < e; ++i)
            edge[i] = new Edge();
    }

    void BellmanFord(BellmanFordGraph graph, int src) {
        int V = graph.V, E = graph.E;
        int dist[] = new int[V];

        for (int i = 0; i < V; ++i)
            dist[i] = Integer.MAX_VALUE;
        dist[src] = 0;

        for (int i = 1; i < V; ++i) {
            for (int j = 0; j < E; ++j) {
                int u = graph.edge[j].src;
                int v = graph.edge[j].dest;
                int weight = graph.edge[j].weight;
                if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v])
                    dist[v] = dist[u] + weight;
            }
        }

        for (int j = 0; j < E; ++j) {
            int u = graph.edge[j].src;
            int v = graph.edge[j].dest;
            int weight = graph.edge[j].weight;
            if (dist[u] != Integer.MAX_VALUE && dist[u] + weight < dist[v]) {
                System.out.println("Graph contains negative weight cycle");
                return;
            }
        }

        printArr(dist, V);
    }

    void printArr(int dist[], int V) {
        System.out.println("Vertex Distance from Source");
        for (int i = 0; i < V; ++i)
            System.out.println(i + "\\t\\t" + dist[i]);
    }

    public static void main(String[] args) {
        int V = 5;
        int E = 8;

        BellmanFordGraph graph = new BellmanFordGraph(V, E);

        graph.edge[0].src = 0; graph.edge[0].dest = 1; graph.edge[0].weight = -1;
        graph.edge[1].src = 0; graph.edge[1].dest = 2; graph.edge[1].weight = 4;
        graph.edge[2].src = 1; graph.edge[2].dest = 2; graph.edge[2].weight = 3;
        graph.edge[3].src = 1; graph.edge[3].dest = 3; graph.edge[3].weight = 2;
        graph.edge[4].src = 1; graph.edge[4].dest = 4; graph.edge[4].weight = 2;
        graph.edge[5].src = 3; graph.edge[5].dest = 2; graph.edge[5].weight = 5;
        graph.edge[6].src = 3; graph.edge[6].dest = 1; graph.edge[6].weight = 1;
        graph.edge[7].src = 4; graph.edge[7].dest = 3; graph.edge[7].weight = -3;

        graph.BellmanFord(graph, 0);
    }
}`,

    javascript: `class Graph {
    constructor(vertices) {
        this.V = vertices;
        this.graph = [];
    }

    addEdge(u, v, w) {
        this.graph.push([u, v, w]);
    }

    BellmanFord(src) {
        let dist = new Array(this.V).fill(Infinity);
        dist[src] = 0;

        for (let i = 0; i < this.V - 1; i++) {
            for (let j = 0; j < this.graph.length; j++) {
                let u = this.graph[j][0];
                let v = this.graph[j][1];
                let w = this.graph[j][2];
                if (dist[u] != Infinity && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                }
            }
        }

        for (let j = 0; j < this.graph.length; j++) {
            let u = this.graph[j][0];
            let v = this.graph[j][1];
            let w = this.graph[j][2];
            if (dist[u] != Infinity && dist[u] + w < dist[v]) {
                console.log("Graph contains negative weight cycle");
                return;
            }
        }

        console.log("Vertex \\t Distance from Source");
        for (let i = 0; i < this.V; i++) {
            console.log(i + " \\t\\t " + dist[i]);
        }
    }
}

let g = new Graph(5);
g.addEdge(0, 1, -1);
g.addEdge(0, 2, 4);
g.addEdge(1, 2, 3);
g.addEdge(1, 3, 2);
g.addEdge(1, 4, 2);
g.addEdge(3, 2, 5);
g.addEdge(3, 1, 1);
g.addEdge(4, 3, -3);

g.BellmanFord(0);`
};

const languageSelector = document.getElementById('language');
const codeDisplay = document.getElementById('code');

languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    codeDisplay.textContent = codeSnippets[selectedLanguage];
});

codeDisplay.textContent = codeSnippets[languageSelector.value];

const copyButton = document.getElementById('copy-button');
const codeElement = document.getElementById('code');

copyButton.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copyButton.textContent = 'Code Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy Code';
    }, 2000);
});
