const codeSnippets = {
    python: `import hashlib

    def sha256_hash(input_string):
        # Create a new SHA-256 hash object
        sha256 = hashlib.sha256()
    
        # Update the hash object with the input string
        sha256.update(input_string.encode('utf-8'))
    
        # Get the hexadecimal representation of the hash
        hash_result = sha256.hexdigest()
        
        return hash_result
    
    # Example usage
    input_data = "Hello, SHA-256!"
    hashed_result = sha256_hash(input_data)
    print(f"SHA-256 Hash: {hashed_result}")
    
`,

    c: `#include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <openssl/sha.h>
    
    void sha256_hash(const char *input, char *output) {
        SHA256_CTX sha256;
        SHA256_Init(&sha256);
        SHA256_Update(&sha256, input, strlen(input));
        SHA256_Final(output, &sha256);
    }
    
    int main() {
        const char *input_data = "Hello, SHA-256!";
        unsigned char hashed_result[SHA256_DIGEST_LENGTH];
        
        sha256_hash(input_data, hashed_result);
    
        printf("SHA-256 Hash: ");
        for (int i = 0; i < SHA256_DIGEST_LENGTH; i++) {
            printf("%02x", hashed_result[i]);
        }
        printf("\n");
    
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

    java: `import java.security.MessageDigest;
    import java.security.NoSuchAlgorithmException;
    
    public class SHA256Example {
    
        public static String sha256Hash(String input) {
            try {
                // Create a new SHA-256 MessageDigest object
                MessageDigest digest = MessageDigest.getInstance("SHA-256");
    
                // Update the digest with the input string
                byte[] hashBytes = digest.digest(input.getBytes());
    
                // Convert the byte array to a hexadecimal string
                StringBuilder hexString = new StringBuilder();
                for (byte hashByte : hashBytes) {
                    hexString.append(String.format("%02x", hashByte));
                }
    
                return hexString.toString();
            } catch (NoSuchAlgorithmException e) {
                e.printStackTrace();
                return null;
            }
        }
    
        // Example usage
        public static void main(String[] args) {
            String input = "Hello, SHA-256!";
            String hashedResult = sha256Hash(input);
            System.out.println("SHA-256 Hash: " + hashedResult);
        }
    }
    
`,

    javascript: `const crypto = require('crypto');

    function sha256Hash(inputString) {
        const hash = crypto.createHash('sha256');
        return hash.update(inputString, 'utf-8').digest('hex');
    }
    
    // Example usage
    const inputString = "Hello, SHA-256!";
    const hashedResult = sha256Hash(inputString);
    console.log(\`SHA-256 Hash: \${hashedResult}\`);
      console.log(\`SHA-256 Hash: \${hashedResult}\`);
       
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
