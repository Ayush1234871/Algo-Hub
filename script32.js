const codeSnippets = {
python: `def odd_factorial(n):
if n == 0:
    return 1
else:
    return n * even_factorial(n - 1)

def even_factorial(n):
if n == 0:
    return 1
else:
    return n * odd_factorial(n - 1)

# Test
print(odd_factorial(5))   # Output: 15 (5 * 3 * 1)
print(even_factorial(5))  # Output: 120 (4 * 2)

`,

c: `#include <stdio.h>

// Forward declaration
int evenFactorial(int n);

int oddFactorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * evenFactorial(n - 1);
    }
}

int evenFactorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * oddFactorial(n - 1);
    }
}

int main() {
    // Test oddFactorial for odd numbers
    printf("%d\n", oddFactorial(5));  // Output: 15 (5 * 3 * 1)

    // Test evenFactorial for even numbers
    printf("%d\n", evenFactorial(5)); // Output: 120 (4 * 2)

    return 0;
}


`,

cpp: `#include <iostream>

int evenFactorial(int n);

int oddFactorial(int n) {
    return (n == 0) ? 1 : n * evenFactorial(n - 1);
}

int evenFactorial(int n) {
    return (n == 0) ? 1 : n * oddFactorial(n - 1);
}

int main() {
    std::cout << oddFactorial(5) << std::endl;   // Output: 15 (5 * 3 * 1)
    std::cout << evenFactorial(5) << std::endl;  // Output: 120 (4 * 2)
    return 0;
}

`,

java: `public class IndirectRecursion {
    static int oddFactorial(int n) {
        return (n == 0) ? 1 : n * evenFactorial(n - 1);
    }

    static int evenFactorial(int n) {
        return (n == 0) ? 1 : n * oddFactorial(n - 1);
    }

    public static void main(String[] args) {
        System.out.println(oddFactorial(5));   // Output: 15 (5 * 3 * 1)
        System.out.println(evenFactorial(5));  // Output: 120 (4 * 2)
    }
}



`,

javascript: `function oddFactorial(n) {
    return (n === 0) ? 1 : n * evenFactorial(n - 1);
}

function evenFactorial(n) {
    return (n === 0) ? 1 : n * oddFactorial(n - 1);
}

// Test
console.log(oddFactorial(5));   // Output: 15 (5 * 3 * 1)
console.log(evenFactorial(5));  // Output: 120 (4 * 2)


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
