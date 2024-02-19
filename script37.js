const codeSnippets = {
    python: `import random

    def las_vegas_algorithm(target, arr):
        attempts = 0
    
        while True:
            attempts += 1
            # Shuffle the array randomly
            random.shuffle(arr)
    
            # Check if the target is found
            if arr[0] == target:
                print(f"Target {target} found in {attempts} attempts.")
                return arr[0]
    
    # Example usage
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    target = 7
    las_vegas_algorithm(target, arr)
    
`,

    c: `#include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    
    int lasVegasAlgorithm(int target, int arr[], int size) {
        srand(time(NULL));
        int attempts = 0;
    
        while (1) {
            attempts++;
            // Shuffle the array randomly
            for (int i = 0; i < size - 1; i++) {
                int j = i + rand() % (size - i);
                // Swap elements
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
    
            // Check if the target is found
            if (arr[0] == target) {
                printf("Target %d found in %d attempts.\n", target, attempts);
                return arr[0];
            }
        }
    }
    
    int main() {
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        lasVegasAlgorithm(target, arr, sizeof(arr) / sizeof(arr[0]));
        return 0;
    }
    
    
`,

    cpp: `#include <iostream>
    #include <algorithm>
    #include <vector>
    #include <ctime>
    
    int lasVegasAlgorithm(int target, std::vector<int>& arr) {
        std::srand(std::time(0));
        int attempts = 0;
    
        while (true) {
            attempts++;
            // Shuffle the array randomly
            std::random_shuffle(arr.begin(), arr.end());
    
            // Check if the target is found
            if (arr[0] == target) {
                std::cout << "Target " << target << " found in " << attempts << " attempts." << std::endl;
                return arr[0];
            }
        }
    }
    
    int main() {
        std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        lasVegasAlgorithm(target, arr);
        return 0;
    }
    
`,

    java: `import java.util.Arrays;
    import java.util.Random;
    
    public class LasVegasAlgorithm {
    
        public static int lasVegasAlgorithm(int target, int[] arr) {
            Random rand = new Random();
            int attempts = 0;
    
            while (true) {
                attempts++;
                // Shuffle the array randomly
                for (int i = 0; i < arr.length - 1; i++) {
                    int j = i + rand.nextInt(arr.length - i);
                    // Swap elements
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
    
                // Check if the target is found
                if (arr[0] == target) {
                    System.out.println("Target " + target + " found in " + attempts + " attempts.");
                    return arr[0];
                }
            }
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
            int target = 7;
            lasVegasAlgorithm(target, arr);
        }
    }
    
`,

    javascript: `function lasVegasAlgorithm(target, arr) {
        let attempts = 0;
    
        while (true) {
            attempts++;
            // Shuffle the array randomly
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                // Swap elements
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
    
            // Check if the target is found
            if (arr[0] === target) {
                console.log(\`Target \${target} found in \${attempts} attempts.\`);
                return arr[0];
            }
        }
    }
    
    // Example usage
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    lasVegasAlgorithm(target, arr);
    
    
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
