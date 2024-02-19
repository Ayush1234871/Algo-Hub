const codeSnippets = {
    python: `import random

    class UniversalHashing:
    
        def __init__(self, hash_functions):
            self.hash_functions = hash_functions
    
        def random_hash_function(self):
            return random.choice(self.hash_functions)
    
        def hash_key(self, key):
            selected_function = self.random_hash_function()
            return selected_function(key)
    
    # Example usage
    hash_functions = [
        lambda x: (3 * x + 5) % 7,  # Example hash function 1
        lambda x: (2 * x + 4) % 7   # Example hash function 2
    ]
    
    universal_hashing = UniversalHashing(hash_functions)
    key = 42
    hash_value = universal_hashing.hash_key(key)
    print(f"Hash value for key {key}: {hash_value}")
    
`,

    c: `#include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    
    // Example hash function 1
    int hashFunction1(int key) {
        return (3 * key + 5) % 7;  // Adjust the size as needed
    }
    
    // Example hash function 2
    int hashFunction2(int key) {
        return (2 * key + 4) % 7;  // Adjust the size as needed
    }
    
    typedef struct {
        int (*hashFunctions[2])(int);
    } UniversalHashing;
    
    int randomHashFunction(UniversalHashing* universalHashing) {
        return rand() % 2;  // Randomly choose from the two hash functions
    }
    
    int hashKey(UniversalHashing* universalHashing, int key) {
        int selectedFunction = randomHashFunction(universalHashing);
        return universalHashing->hashFunctions[selectedFunction](key);
    }
    
    int main() {
        srand(time(NULL));  // Seed for randomization
        UniversalHashing universalHashing = {hashFunction1, hashFunction2};
        int key = 42;
        int hashValue = hashKey(&universalHashing, key);
        printf("Hash value for key %d: %d\n", key, hashValue);
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <vector>
    #include <cstdlib>
    
    class UniversalHashing {
    
    private:
        std::vector<int> hashFunctions;
    
    public:
        UniversalHashing(const std::vector<int>& hashFunctions) : hashFunctions(hashFunctions) {}
    
        int randomHashFunction() {
            return hashFunctions[rand() % hashFunctions.size()];
        }
    
        int hashKey(int key) {
            int selectedFunction = randomHashFunction();
            return hashFunction(key, selectedFunction);
        }
    
        int hashFunction(int key, int functionNumber) {
            // Example hash function implementation
            return (key * functionNumber) % 10;  // Adjust the size as needed
        }
    };
    
    int main() {
        std::vector<int> hashFunctions = {1, 2};  // Example hash functions
        UniversalHashing universalHashing(hashFunctions);
        int key = 42;
        int hashValue = universalHashing.hashKey(key);
        std::cout << "Hash value for key " << key << ": " << hashValue << std::endl;
    
        return 0;
    }
    
`,

    java: `import java.util.Random;

    public class UniversalHashing {
    
        private final int[] hashFunctions;
    
        public UniversalHashing(int[] hashFunctions) {
            this.hashFunctions = hashFunctions;
        }
    
        public int randomHashFunction() {
            return hashFunctions[new Random().nextInt(hashFunctions.length)];
        }
    
        public int hashKey(int key) {
            int selectedFunction = randomHashFunction();
            return hashFunction(key, selectedFunction);
        }
    
        private int hashFunction(int key, int functionNumber) {
            // Example hash function implementation
            return (key * functionNumber) % 10;  // Adjust the size as needed
        }
    
        public static void main(String[] args) {
            int[] hashFunctions = {1, 2};  // Example hash functions
            UniversalHashing universalHashing = new UniversalHashing(hashFunctions);
            int key = 42;
            int hashValue = universalHashing.hashKey(key);
            System.out.println("Hash value for key " + key + ": " + hashValue);
        }
    }
    
`,

    javascript: `class UniversalHashing {
        constructor(hashFunctions) {
            this.hashFunctions = hashFunctions;
        }
    
        randomHashFunction() {
            return Math.floor(Math.random() * this.hashFunctions.length);
        }
    
        hashKey(key) {
            const selectedFunction = this.randomHashFunction();
            return this.hashFunctions[selectedFunction](key);
        }
    }
    
    // Example hash function 1
    function hashFunction1(key) {
        return (3 * key + 5) % 7;  // Adjust the size as needed
    }
    
    // Example hash function 2
    function hashFunction2(key) {
        return (2 * key + 4) % 7;  // Adjust the size as needed
    }
    
    const universalHashing = new UniversalHashing([hashFunction1, hashFunction2]);
    const key = 42;
    const hashValue = universalHashing.hashKey(key);
    console.log(\`Hash value for key \${key}: \${hashValue}\`);
    
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
