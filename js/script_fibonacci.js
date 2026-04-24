const codeSnippets = {
    python: `def fibonacci(n):
    # Create an array to store Fibonacci numbers
    f = [0] * (n + 2)
    
    # Base cases
    f[0] = 0
    f[1] = 1
    
    # Fill the array in bottom-up manner
    for i in range(2, n + 1):
        f[i] = f[i - 1] + f[i - 2]
        
    return f[n]

# Example usage
n = 9
print("Fibonacci number is", fibonacci(n))`,

    c: `#include <stdio.h>

int fibonacci(int n) {
    // Declare an array to store Fibonacci numbers.
    // 1 extra to handle case, n = 0
    int f[n + 2];
    int i;
  
    // 0th and 1st number of the series are 0 and 1
    f[0] = 0;
    f[1] = 1;
  
    for (i = 2; i <= n; i++) {
        // Add the previous 2 numbers in the series
        // and store it
        f[i] = f[i - 1] + f[i - 2];
    }
  
    return f[n];
}

int main() {
    int n = 9;
    printf("Fibonacci number is %d", fibonacci(n));
    return 0;
}`,

    cpp: `#include <iostream>
using namespace std;

int fibonacci(int n) {
    int f[n + 2];
    int i;
  
    f[0] = 0;
    f[1] = 1;
  
    for (i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
  
    return f[n];
}

int main() {
    int n = 9;
    cout << "Fibonacci number is " << fibonacci(n);
    return 0;
}`,

    java: `class Fibonacci {
    static int fibonacci(int n) {
        int f[] = new int[n + 2];
        int i;
        
        f[0] = 0;
        f[1] = 1;
        
        for (i = 2; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        
        return f[n];
    }
    
    public static void main(String args[]) {
        int n = 9;
        System.out.println("Fibonacci number is " + fibonacci(n));
    }
}`,

    javascript: `function fibonacci(n) {
    let f = new Array(n + 2);
    let i;
  
    f[0] = 0;
    f[1] = 1;
  
    for (i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }
  
    return f[n];
}

let n = 9;
console.log("Fibonacci number is " + fibonacci(n));`
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
