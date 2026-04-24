const codeSnippets = {
    python: `import sys

class Graph():
    def __init__(self, vertices):
        self.V = vertices
        self.graph = [[0 for column in range(vertices)] 
                      for row in range(vertices)]

    def printSolution(self, dist):
        print("Vertex \\tDistance from Source")
        for node in range(self.V):
            print(node, "\\t", dist[node])

    def minDistance(self, dist, sptSet):
        min = sys.maxsize
        min_index = -1
        for u in range(self.V):
            if dist[u] < min and sptSet[u] == False:
                min = dist[u]
                min_index = u
        return min_index

    def dijkstra(self, src):
        dist = [sys.maxsize] * self.V
        dist[src] = 0
        sptSet = [False] * self.V

        for cout in range(self.V):
            x = self.minDistance(dist, sptSet)
            sptSet[x] = True
            for y in range(self.V):
                if self.graph[x][y] > 0 and sptSet[y] == False and \\
                dist[y] > dist[x] + self.graph[x][y]:
                        dist[y] = dist[x] + self.graph[x][y]

        self.printSolution(dist)

g = Graph(9)
g.graph = [[0, 4, 0, 0, 0, 0, 0, 8, 0],
           [4, 0, 8, 0, 0, 0, 0, 11, 0],
           [0, 8, 0, 7, 0, 4, 0, 0, 2],
           [0, 0, 7, 0, 9, 14, 0, 0, 0],
           [0, 0, 0, 9, 0, 10, 0, 0, 0],
           [0, 0, 4, 14, 10, 0, 2, 0, 0],
           [0, 0, 0, 0, 0, 2, 0, 1, 6],
           [8, 11, 0, 0, 0, 0, 1, 0, 7],
           [0, 0, 2, 0, 0, 0, 6, 7, 0]
          ]
g.dijkstra(0)`,

    c: `#include <stdio.h>
#include <limits.h>
#include <stdbool.h>

#define V 9

int minDistance(int dist[], bool sptSet[]) {
    int min = INT_MAX, min_index;
    for (int v = 0; v < V; v++)
        if (sptSet[v] == false && dist[v] <= min)
            min = dist[v], min_index = v;
    return min_index;
}

void printSolution(int dist[]) {
    printf("Vertex \\t Distance from Source\\n");
    for (int i = 0; i < V; i++)
        printf("%d \\t\\t %d\\n", i, dist[i]);
}

void dijkstra(int graph[V][V], int src) {
    int dist[V];
    bool sptSet[V];

    for (int i = 0; i < V; i++)
        dist[i] = INT_MAX, sptSet[i] = false;

    dist[src] = 0;

    for (int count = 0; count < V - 1; count++) {
        int u = minDistance(dist, sptSet);
        sptSet[u] = true;

        for (int v = 0; v < V; v++)
            if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX
                && dist[u] + graph[u][v] < dist[v])
                dist[v] = dist[u] + graph[u][v];
    }
    printSolution(dist);
}

int main() {
    int graph[V][V] = { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                        { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                        { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                        { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                        { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                        { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                        { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                        { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                        { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
    dijkstra(graph, 0);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <limits.h>

using namespace std;
#define INF 0x3f3f3f3f

void addEdge(vector<pair<int, int> > adj[], int u, int v, int wt) {
    adj[u].push_back(make_pair(v, wt));
    adj[v].push_back(make_pair(u, wt));
}

void shortestPath(vector<pair<int, int> > adj[], int V, int src) {
    priority_queue< pair<int, int>, vector <pair<int, int>> , greater<pair<int, int>> > pq;
    vector<int> dist(V, INF);

    pq.push(make_pair(0, src));
    dist[src] = 0;

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for (auto x : adj[u]) {
            int v = x.first;
            int weight = x.second;

            if (dist[v] > dist[u] + weight) {
                dist[v] = dist[u] + weight;
                pq.push(make_pair(dist[v], v));
            }
        }
    }

    printf("Vertex Distance from Source\\n");
    for (int i = 0; i < V; ++i)
        printf("%d \\t\\t %d\\n", i, dist[i]);
}

int main() {
    int V = 9;
    vector<pair<int, int> > adj[V];
    addEdge(adj, 0, 1, 4);
    addEdge(adj, 0, 7, 8);
    addEdge(adj, 1, 2, 8);
    addEdge(adj, 1, 7, 11);
    addEdge(adj, 2, 3, 7);
    addEdge(adj, 2, 8, 2);
    addEdge(adj, 2, 5, 4);
    addEdge(adj, 3, 4, 9);
    addEdge(adj, 3, 5, 14);
    addEdge(adj, 4, 5, 10);
    addEdge(adj, 5, 6, 2);
    addEdge(adj, 6, 7, 1);
    addEdge(adj, 6, 8, 6);
    addEdge(adj, 7, 8, 7);

    shortestPath(adj, V, 0);
    return 0;
}`,

    java: `import java.util.*;

class Dijkstra {
    static final int V = 9;
    
    int minDistance(int dist[], Boolean sptSet[]) {
        int min = Integer.MAX_VALUE, min_index = -1;

        for (int v = 0; v < V; v++)
            if (sptSet[v] == false && dist[v] <= min) {
                min = dist[v];
                min_index = v;
            }

        return min_index;
    }

    void printSolution(int dist[], int n) {
        System.out.println("Vertex   Distance from Source");
        for (int i = 0; i < V; i++)
            System.out.println(i + " tt " + dist[i]);
    }

    void dijkstra(int graph[][], int src) {
        int dist[] = new int[V];
        Boolean sptSet[] = new Boolean[V];

        for (int i = 0; i < V; i++) {
            dist[i] = Integer.MAX_VALUE;
            sptSet[i] = false;
        }

        dist[src] = 0;

        for (int count = 0; count < V - 1; count++) {
            int u = minDistance(dist, sptSet);
            sptSet[u] = true;

            for (int v = 0; v < V; v++)
                if (!sptSet[v] && graph[u][v] != 0 && 
                   dist[u] != Integer.MAX_VALUE && dist[u] + graph[u][v] < dist[v])
                    dist[v] = dist[u] + graph[u][v];
        }

        printSolution(dist, V);
    }

    public static void main(String[] args) {
        int graph[][] = new int[][] { { 0, 4, 0, 0, 0, 0, 0, 8, 0 },
                                      { 4, 0, 8, 0, 0, 0, 0, 11, 0 },
                                      { 0, 8, 0, 7, 0, 4, 0, 0, 2 },
                                      { 0, 0, 7, 0, 9, 14, 0, 0, 0 },
                                      { 0, 0, 0, 9, 0, 10, 0, 0, 0 },
                                      { 0, 0, 4, 14, 10, 0, 2, 0, 0 },
                                      { 0, 0, 0, 0, 0, 2, 0, 1, 6 },
                                      { 8, 11, 0, 0, 0, 0, 1, 0, 7 },
                                      { 0, 0, 2, 0, 0, 0, 6, 7, 0 } };
        Dijkstra t = new Dijkstra();
        t.dijkstra(graph, 0);
    }
}`,

    javascript: `function minDistance(dist, sptSet, V) {
    let min = Infinity, min_index = -1;

    for (let v = 0; v < V; v++) {
        if (sptSet[v] == false && dist[v] <= min) {
            min = dist[v];
            min_index = v;
        }
    }
    return min_index;
}

function printSolution(dist, V) {
    console.log("Vertex \\t Distance from Source");
    for (let i = 0; i < V; i++) {
        console.log(i + " \\t\\t " + dist[i]);
    }
}

function dijkstra(graph, src) {
    let V = graph.length;
    let dist = new Array(V);
    let sptSet = new Array(V);

    for (let i = 0; i < V; i++) {
        dist[i] = Infinity;
        sptSet[i] = false;
    }

    dist[src] = 0;

    for (let count = 0; count < V - 1; count++) {
        let u = minDistance(dist, sptSet, V);
        sptSet[u] = true;

        for (let v = 0; v < V; v++) {
            if (!sptSet[v] && graph[u][v] != 0 && dist[u] != Infinity && dist[u] + graph[u][v] < dist[v]) {
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    printSolution(dist, V);
}

let graph = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
              [ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
              [ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
              [ 0, 0, 7, 0, 9, 14, 0, 0, 0 ],
              [ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
              [ 0, 0, 4, 14, 10, 0, 2, 0, 0 ],
              [ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
              [ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
              [ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ];
              
dijkstra(graph, 0);`
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
