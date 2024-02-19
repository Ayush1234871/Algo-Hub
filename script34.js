const codeSnippets = {
    python: `import hashlib

    def hash_function_1(key):
        return hash(key) % 10  # Example hash function 1
    
    def hash_function_2(key):
        return int(hashlib.md5(str(key).encode()).hexdigest(), 16) % 10  # Example hash function 2
    
    def multiple_hashing(key):
        hash_value_1 = hash_function_1(key)
        hash_value_2 = hash_function_2(key)
    
        # Combine hash values (example: XOR)
        combined_hash = hash_value_1 ^ hash_value_2
    
        return combined_hash
    
    # Example usage
    key = "example_key"
    result = multiple_hashing(key)
    print(f"Hash value for key {key}: {result}")
    
`,

    c: `#include <stdio.h>
    #include <string.h>
    
    // Example hash function 1
    int hashFunction1(const char* key) {
        return (int)strlen(key) % 10;
    }
    
    // Example hash function 2 (using simple XOR)
    int hashFunction2(const char* key) {
        int hashValue = 0;
        while (*key) {
            hashValue ^= *key++;
        }
        return hashValue % 10;
    }
    
    // Combine hash values (example: XOR)
    int multipleHashing(const char* key) {
        int hashValue1 = hashFunction1(key);
        int hashValue2 = hashFunction2(key);
    
        return hashValue1 ^ hashValue2;
    }
    
    // Example usage
    int main() {
        const char* key = "example_key";
        int result = multipleHashing(key);
        printf("Hash value for key %s: %d\n", key, result);
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <cstring>
    #include <functional>
    
    int hashFunction1(const std::string& key) {
        return std::hash<std::string>{}(key) % 10;  // Example hash function 1
    }
    
    int hashFunction2(const std::string& key) {
        // Example hash function 2 (using simple XOR)
        int hashValue = 0;
        for (char ch : key) {
            hashValue ^= ch;
        }
        return hashValue % 10;
    }
    
    int multipleHashing(const std::string& key) {
        int hashValue1 = hashFunction1(key);
        int hashValue2 = hashFunction2(key);
    
        // Combine hash values (example: XOR)
        int combinedHash = hashValue1 ^ hashValue2;
    
        return combinedHash;
    }
    
    // Example usage
    int main() {
        std::string key = "example_key";
        int result = multipleHashing(key);
        std::cout << "Hash value for key " << key << ": " << result << std::endl;
    
        return 0;
    }
    
    
`,

    java: `import java.security.MessageDigest;
    import java.security.NoSuchAlgorithmException;
    
    public class MultipleHashing {
    
        public static int hashFunction1(String key) {
            return key.hashCode() % 10;  // Example hash function 1
        }
    
        public static int hashFunction2(String key) {
            try {
                MessageDigest digest = MessageDigest.getInstance("MD5");
                byte[] hashBytes = digest.digest(key.getBytes());
                return Math.abs(new String(hashBytes).hashCode()) % 10;  // Example hash function 2
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
                return -1;
            }
        }
    
        public static int multipleHashing(String key) {
            int hashValue1 = hashFunction1(key);
            int hashValue2 = hashFunction2(key);
    
            // Combine hash values (example: XOR)
            int combinedHash = hashValue1 ^ hashValue2;
    
            return combinedHash;
        }
    
        // Example usage
        public static void main(String[] args) {
            String key = "example_key";
            int result = multipleHashing(key);
            System.out.println("Hash value for key " + key + ": " + result);
        }
    }
    
    
`,

    javascript: `// Example hash function 1
    function hashFunction1(key) {
        return key.length % 10;
    }
    
    // Example hash function 2 (using simple XOR)
    function hashFunction2(key) {
        let hashValue = 0;
        for (let i = 0; i < key.length; i++) {
            hashValue ^= key.charCodeAt(i);
        }
        return hashValue % 10;
    }
    
    // Combine hash values (example: XOR)
    function multipleHashing(key) {
        const hashValue1 = hashFunction1(key);
        const hashValue2 = hashFunction2(key);
    
        return hashValue1 ^ hashValue2;
    }
    
    // Example usage
    const key = "example_key";
    const result = multipleHashing(key);
    console.log(\`Hash value for key \${key}: \${result}\`);
    
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
