const codeSnippets = {
    python: `import heapq

class Node:
    def __init__(self, freq, symbol, left=None, right=None):
        self.freq = freq
        self.symbol = symbol
        self.left = left
        self.right = right
        self.huff = ''

    def __lt__(self, nxt):
        return self.freq < nxt.freq

def printNodes(node, val=''):
    newVal = val + str(node.huff)
    if(node.left):
        printNodes(node.left, newVal)
    if(node.right):
        printNodes(node.right, newVal)
    if(not node.left and not node.right):
        print(f"{node.symbol} -> {newVal}")

chars = ['a', 'b', 'c', 'd', 'e', 'f']
freq = [5, 9, 12, 13, 16, 45]

nodes = []
for x in range(len(chars)):
    heapq.heappush(nodes, Node(freq[x], chars[x]))

while len(nodes) > 1:
    left = heapq.heappop(nodes)
    right = heapq.heappop(nodes)
    left.huff = 0
    right.huff = 1
    newNode = Node(left.freq+right.freq, left.symbol+right.symbol, left, right)
    heapq.heappush(nodes, newNode)

printNodes(nodes[0])`,

    c: `// C implementation of Huffman Coding is complex and requires full Priority Queue implementation.
// Here is the conceptual structure:
#include <stdio.h>
#include <stdlib.h>

struct MinHeapNode {
    char data;
    unsigned freq;
    struct MinHeapNode *left, *right;
};

// Function to print an array
void printArray(int arr[], int n) {
    for (int i = 0; i < n; ++i)
        printf("%d", arr[i]);
    printf("\\n");
}

// Pseudo-code for core logic:
// 1. Create a min heap of capacity equal to size. Initially, there are size nodes.
// 2. Extract two minimum freq items from min heap
// 3. Create a new internal node with frequency equal to the sum of the two nodes frequencies. 
// 4. Insert the new node into the min heap
// 5. Repeat until heap contains only one node
// 6. Print codes by traversing the tree.`,

    cpp: `#include <iostream>
#include <queue>
#include <vector>
#include <string>

using namespace std;

struct Node {
    char data;
    unsigned freq;
    Node *left, *right;
    Node(char data, unsigned freq) {
        left = right = NULL;
        this->data = data;
        this->freq = freq;
    }
};

struct compare {
    bool operator()(Node* l, Node* r) {
        return (l->freq > r->freq);
    }
};

void printCodes(struct Node* root, string str) {
    if (!root)
        return;
    if (root->data != '$')
        cout << root->data << ": " << str << "\\n";
    printCodes(root->left, str + "0");
    printCodes(root->right, str + "1");
}

void HuffmanCodes(char data[], int freq[], int size) {
    struct Node *left, *right, *top;
    priority_queue<Node*, vector<Node*>, compare> minHeap;
    for (int i = 0; i < size; ++i)
        minHeap.push(new Node(data[i], freq[i]));

    while (minHeap.size() != 1) {
        left = minHeap.top(); minHeap.pop();
        right = minHeap.top(); minHeap.pop();
        top = new Node('$', left->freq + right->freq);
        top->left = left;
        top->right = right;
        minHeap.push(top);
    }
    printCodes(minHeap.top(), "");
}

int main() {
    char arr[] = { 'a', 'b', 'c', 'd', 'e', 'f' };
    int freq[] = { 5, 9, 12, 13, 16, 45 };
    int size = sizeof(arr) / sizeof(arr[0]);
    HuffmanCodes(arr, freq, size);
    return 0;
}`,

    java: `import java.util.PriorityQueue;
import java.util.Scanner;
import java.util.Comparator;

class HuffmanNode {
    int data;
    char c;
    HuffmanNode left;
    HuffmanNode right;
}

class MyComparator implements Comparator<HuffmanNode> {
    public int compare(HuffmanNode x, HuffmanNode y) {
        return x.data - y.data;
    }
}

public class Huffman {
    public static void printCode(HuffmanNode root, String s) {
        if (root.left == null && root.right == null && Character.isLetter(root.c)) {
            System.out.println(root.c + ":" + s);
            return;
        }
        printCode(root.left, s + "0");
        printCode(root.right, s + "1");
    }

    public static void main(String[] args) {
        int n = 6;
        char[] charArray = { 'a', 'b', 'c', 'd', 'e', 'f' };
        int[] charfreq = { 5, 9, 12, 13, 16, 45 };
        PriorityQueue<HuffmanNode> q = new PriorityQueue<HuffmanNode>(n, new MyComparator());

        for (int i = 0; i < n; i++) {
            HuffmanNode hn = new HuffmanNode();
            hn.c = charArray[i];
            hn.data = charfreq[i];
            hn.left = null;
            hn.right = null;
            q.add(hn);
        }

        HuffmanNode root = null;

        while (q.size() > 1) {
            HuffmanNode x = q.peek(); q.poll();
            HuffmanNode y = q.peek(); q.poll();
            HuffmanNode f = new HuffmanNode();
            f.data = x.data + y.data;
            f.c = '-';
            f.left = x;
            f.right = y;
            root = f;
            q.add(f);
        }
        printCode(root, "");
    }
}`,

    javascript: `class Node {
    constructor(char, freq, left = null, right = null) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

function printCodes(root, str = "") {
    if (!root) return;
    if (root.char !== null) {
        console.log(root.char + ": " + str);
    }
    printCodes(root.left, str + "0");
    printCodes(root.right, str + "1");
}

function huffmanCoding(chars, freqs) {
    let nodes = [];
    for (let i = 0; i < chars.length; i++) {
        nodes.push(new Node(chars[i], freqs[i]));
    }
    
    while (nodes.length > 1) {
        nodes.sort((a, b) => a.freq - b.freq);
        let left = nodes.shift();
        let right = nodes.shift();
        let parent = new Node(null, left.freq + right.freq, left, right);
        nodes.push(parent);
    }
    
    printCodes(nodes[0]);
}

const chars = ['a', 'b', 'c', 'd', 'e', 'f'];
const freqs = [5, 9, 12, 13, 16, 45];
huffmanCoding(chars, freqs);`
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
