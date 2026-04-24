const codeSnippets = {
    python: `def lcs(X, Y):
    m = len(X)
    n = len(Y)
  
    # declaring the array for storing the dp values
    L = [[None]*(n + 1) for i in range(m + 1)]
  
    for i in range(m + 1):
        for j in range(n + 1):
            if i == 0 or j == 0:
                L[i][j] = 0
            elif X[i-1] == Y[j-1]:
                L[i][j] = L[i-1][j-1] + 1
            else:
                L[i][j] = max(L[i-1][j], L[i][j-1])
  
    return L[m][n]

X = "AGGTAB"
Y = "GXTXAYB"
print("Length of LCS is", lcs(X, Y))`,

    c: `#include <stdio.h>
#include <string.h>

int max(int a, int b) { return (a > b) ? a : b; }

int lcs(char* X, char* Y, int m, int n) {
    int L[m + 1][n + 1];
    int i, j;

    for (i = 0; i <= m; i++) {
        for (j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[m][n];
}

int main() {
    char X[] = "AGGTAB";
    char Y[] = "GXTXAYB";
    int m = strlen(X);
    int n = strlen(Y);
    printf("Length of LCS is %d\\n", lcs(X, Y, m, n));
    return 0;
}`,

    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

int lcs(string X, string Y, int m, int n) {
    vector<vector<int>> L(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[m][n];
}

int main() {
    string X = "AGGTAB";
    string Y = "GXTXAYB";
    int m = X.length();
    int n = Y.length();
    cout << "Length of LCS is " << lcs(X, Y, m, n);
    return 0;
}`,

    java: `class LCS {
    int lcs(char[] X, char[] Y, int m, int n) {
        int L[][] = new int[m + 1][n + 1];

        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0 || j == 0)
                    L[i][j] = 0;
                else if (X[i - 1] == Y[j - 1])
                    L[i][j] = L[i - 1][j - 1] + 1;
                else
                    L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
            }
        }
        return L[m][n];
    }

    public static void main(String[] args) {
        LCS lcs_obj = new LCS();
        String s1 = "AGGTAB";
        String s2 = "GXTXAYB";

        char[] X = s1.toCharArray();
        char[] Y = s2.toCharArray();
        int m = X.length;
        int n = Y.length;

        System.out.println("Length of LCS is " + " " + lcs_obj.lcs(X, Y, m, n));
    }
}`,

    javascript: `function lcs(X, Y, m, n) {
    let L = new Array(m + 1);
    for(let i = 0; i < L.length; i++) {
        L[i] = new Array(n + 1);
    }

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i == 0 || j == 0)
                L[i][j] = 0;
            else if (X[i - 1] == Y[j - 1])
                L[i][j] = L[i - 1][j - 1] + 1;
            else
                L[i][j] = Math.max(L[i - 1][j], L[i][j - 1]);
        }
    }
    return L[m][n];
}

let X = "AGGTAB";
let Y = "GXTXAYB";
let m = X.length;
let n = Y.length;

console.log("Length of LCS is", lcs(X, Y, m, n));`
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
