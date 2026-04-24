const codeSnippets = {
    python: `import collections

def bfs(graph, root):
    visited, queue = set(), collections.deque([root])
    visited.add(root)

    while queue:
        vertex = queue.popleft()
        print(str(vertex) + " ", end="")

        for neighbour in graph[vertex]:
            if neighbour not in visited:
                visited.add(neighbour)
                queue.append(neighbour)

if __name__ == '__main__':
    graph = {0: [1, 2], 1: [2], 2: [3], 3: [1, 2]}
    print("Following is Breadth First Traversal: ")
    bfs(graph, 0)`,

    c: `#include <stdio.h>
#include <stdlib.h>
#define SIZE 40

struct queue {
    int items[SIZE];
    int front;
    int rear;
};

struct queue* createQueue() {
    struct queue* q = malloc(sizeof(struct queue));
    q->front = -1;
    q->rear = -1;
    return q;
}

int isEmpty(struct queue* q) {
    if (q->rear == -1) return 1;
    else return 0;
}

void enqueue(struct queue* q, int value) {
    if (q->rear == SIZE - 1)
        printf("\\nQueue is Full!!");
    else {
        if (q->front == -1)
            q->front = 0;
        q->rear++;
        q->items[q->rear] = value;
    }
}

int dequeue(struct queue* q) {
    int item;
    if (isEmpty(q)) {
        printf("Queue is empty");
        item = -1;
    } else {
        item = q->items[q->front];
        q->front++;
        if (q->front > q->rear) {
            q->front = q->rear = -1;
        }
    }
    return item;
}

struct node {
    int vertex;
    struct node* next;
};

struct node* createNode(int v) {
    struct node* newNode = malloc(sizeof(struct node));
    newNode->vertex = v;
    newNode->next = NULL;
    return newNode;
}

struct Graph {
    int numVertices;
    struct node** adjLists;
    int* visited;
};

struct Graph* createGraph(int vertices) {
    struct Graph* graph = malloc(sizeof(struct Graph));
    graph->numVertices = vertices;
    graph->adjLists = malloc(vertices * sizeof(struct node*));
    graph->visited = malloc(vertices * sizeof(int));
    for (int i = 0; i < vertices; i++) {
        graph->adjLists[i] = NULL;
        graph->visited[i] = 0;
    }
    return graph;
}

void addEdge(struct Graph* graph, int src, int dest) {
    struct node* newNode = createNode(dest);
    newNode->next = graph->adjLists[src];
    graph->adjLists[src] = newNode;
    
    newNode = createNode(src);
    newNode->next = graph->adjLists[dest];
    graph->adjLists[dest] = newNode;
}

void bfs(struct Graph* graph, int startVertex) {
    struct queue* q = createQueue();
    graph->visited[startVertex] = 1;
    enqueue(q, startVertex);

    while (!isEmpty(q)) {
        int currentVertex = dequeue(q);
        printf("%d ", currentVertex);

        struct node* temp = graph->adjLists[currentVertex];
        while (temp) {
            int adjVertex = temp->vertex;
            if (graph->visited[adjVertex] == 0) {
                graph->visited[adjVertex] = 1;
                enqueue(q, adjVertex);
            }
            temp = temp->next;
        }
    }
}

int main() {
    struct Graph* graph = createGraph(4);
    addEdge(graph, 0, 1);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 2);
    addEdge(graph, 2, 0);
    addEdge(graph, 2, 3);
    addEdge(graph, 3, 3);
    bfs(graph, 2);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <queue>

using namespace std;

void bfs(vector<vector<int>>& adjList, int startNode, vector<bool>& visited) {
    queue<int> q;
    visited[startNode] = true;
    q.push(startNode);

    while (!q.empty()) {
        int currentNode = q.front();
        q.pop();
        cout << currentNode << " ";

        for (int neighbor : adjList[currentNode]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}

void addEdge(vector<vector<int>>& adjList, int u, int v) {
    adjList[u].push_back(v);
}

int main() {
    int vertices = 5;
    vector<vector<int>> adjList(vertices);
    addEdge(adjList, 0, 1);
    addEdge(adjList, 0, 2);
    addEdge(adjList, 1, 3);
    addEdge(adjList, 1, 4);
    addEdge(adjList, 2, 4);
    
    vector<bool> visited(vertices, false);
    cout << "Breadth First Traversal starting from vertex 0: ";
    bfs(adjList, 0, visited);
    return 0;
}`,

    java: `import java.util.*;

class Graph {
    private int V;
    private LinkedList<Integer> adj[];

    Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; ++i)
            adj[i] = new LinkedList();
    }

    void addEdge(int v, int w) {
        adj[v].add(w);
    }

    void BFS(int s) {
        boolean visited[] = new boolean[V];
        LinkedList<Integer> queue = new LinkedList<Integer>();
        
        visited[s] = true;
        queue.add(s);

        while (queue.size() != 0) {
            s = queue.poll();
            System.out.print(s + " ");

            Iterator<Integer> i = adj[s].listIterator();
            while (i.hasNext()) {
                int n = i.next();
                if (!visited[n]) {
                    visited[n] = true;
                    queue.add(n);
                }
            }
        }
    }

    public static void main(String args[]) {
        Graph g = new Graph(4);
        g.addEdge(0, 1);
        g.addEdge(0, 2);
        g.addEdge(1, 2);
        g.addEdge(2, 0);
        g.addEdge(2, 3);
        g.addEdge(3, 3);

        System.out.println("Following is Breadth First Traversal (starting from vertex 2)");
        g.BFS(2);
    }
}`,

    javascript: `class Graph {
    constructor(v) {
        this.V = v;
        this.adj = new Array(v);
        for (let i = 0; i < v; i++) {
            this.adj[i] = [];
        }
    }
    
    addEdge(v, w) {
        this.adj[v].push(w);
    }

    BFS(s) {
        let visited = new Array(this.V).fill(false);
        let queue = [];
        
        visited[s] = true;
        queue.push(s);

        let result = [];
        while (queue.length > 0) {
            s = queue.shift();
            result.push(s);

            for (let i = 0; i < this.adj[s].length; i++) {
                let n = this.adj[s][i];
                if (!visited[n]) {
                    visited[n] = true;
                    queue.push(n);
                }
            }
        }
        console.log(result.join(" "));
    }
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log("Following is Breadth First Traversal (starting from vertex 2)");
g.BFS(2);`
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
