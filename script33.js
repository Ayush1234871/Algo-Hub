const codeSnippets = {
    python: `def division_hash(key, table_size):
    return key % table_size

key = 27
table_size = 10
hash_value = division_hash(key, table_size)
print(f"Hash value for key {key}: {hash_value}")

`,

    c: `#include <stdio.h>

    int divisionHash(int key, int tableSize) {
        return key % tableSize;
    }
    
    int main() {
        int key = 27;
        int tableSize = 10;
        int hashValue = divisionHash(key, tableSize);
        printf("Hash value for key %d: %d\n", key, hashValue);
        return 0;
    }
    
`,

    cpp: `#include <iostream>

    int divisionHash(int key, int tableSize) {
        return key % tableSize;
    }
    
    int main() {
        int key = 27;
        int tableSize = 10;
        int hashValue = divisionHash(key, tableSize);
        std::cout << "Hash value for key " << key << ": " << hashValue << std::endl;
        return 0;
    }
    
`,

    java: `public class DivisionHashing {

        public static int divisionHash(int key, int tableSize) {
            return key % tableSize;
        }
    
        public static void main(String[] args) {
            int key = 27;
            int tableSize = 10;
            int hashValue = divisionHash(key, tableSize);
            System.out.println("Hash value for key " + key + ": " + hashValue);
        }
    }
    
`,

    javascript: `function divisionHash(key, tableSize) {
        return key % tableSize;
    }
    
    let key = 27;
    let tableSize = 10;
    let hashValue = divisionHash(key, tableSize);
    console.log(\`Hash value for key \${key}: \${hashValue\`);
    
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
