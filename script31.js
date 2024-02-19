const codeSnippets = {
    python: `def factorial(n):
    return 1 if n == 0 else n * factorial(n - 1)

# Test
print(factorial(5))  # Output: 120


`,

    c: `#include <stdio.h>

    int factorial(int n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }
    
    int main() {
        printf("%d\n", factorial(5));  // Output: 120
        return 0;
    }
    
    
`,

    cpp: `#include <iostream>

    int factorial(int n) {
        return (n == 0) ? 1 : n * factorial(n - 1);
    }
    
    int main() {
        std::cout << factorial(5) << std::endl;  // Output: 120
        return 0;
    }
    
`,

    java: `public class Factorial {
        public static int factorial(int n) {
            return (n == 0) ? 1 : n * factorial(n - 1);
        }
    
        public static void main(String[] args) {
            System.out.println(factorial(5));  // Output: 120
        }
    }
    
    
`,

    javascript: `function factorial(n) {
        return (n === 0) ? 1 : n * factorial(n - 1);
    }
    
    // Test
    console.log(factorial(5));  // Output: 120
    
    
`
};

const languageSelector = document.getElementById('language');
const codeDisplay = document.getElementById('code');

languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    codeDisplay.textContent = codeSnippets[selectedLanguage];
});

codeDisplay.textContent = codeSnippets[languageSelector.value];
// Select the copy button and code element
const copyButton = document.getElementById('copy-button');
const codeElement = document.getElementById('code');

// Add a click event listener to the copy button
copyButton.addEventListener('click', () => {
    // Create a new textarea element to hold the code
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;

    // Append the textarea to the document
    document.body.appendChild(textArea);

    // Select the text in the textarea
    textArea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textArea);

    // Provide user feedback (e.g., changing the button text)
    copyButton.textContent = 'Code Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy Code';
    }, 2000); // Reset the button text after 2 seconds
});
