const codeSnippets = {
    python: `def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = left + (right - left) // 2
        
        if arr[mid] == target:
            return mid  # Element found, return its index
        elif arr[mid] < target:
            left = mid + 1  # Target is in the right half
        else:
            right = mid - 1  # Target is in the left half
    
    return -1  # Element not found in the list

# Example usage:
my_list = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
target_element = 13

result = binary_search(my_list, target_element)
if result != -1:
    print(f"Element {target_element} found at index {result}")
else:
    print(f"Element {target_element} not found in the list")

`,

    c: `#include <stdio.h>

    int binary_search(int arr[], int size, int target) {
        int left = 0, right = size - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;  // Element found, return its index
            } else if (arr[mid] < target) {
                left = mid + 1;  // Target is in the right half
            } else {
                right = mid - 1;  // Target is in the left half
            }
        }
        
        return -1;  // Element not found in the array
    }
    
    int main() {
        int my_array[] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int size = sizeof(my_array) / sizeof(my_array[0]);
        int target_element = 13;
    
        int result = binary_search(my_array, size, target_element);
        if (result != -1) {
            printf("Element %d found at index %d\n", target_element, result);
        } else {
            printf("Element %d not found in the array\n", target_element);
        }
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <vector>
    
    int binary_search(const std::vector<int>& vec, int target) {
        int left = 0, right = vec.size() - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (vec[mid] == target) {
                return mid;  // Element found, return its index
            } else if (vec[mid] < target) {
                left = mid + 1;  // Target is in the right half
            } else {
                right = mid - 1;  // Target is in the left half
            }
        }
        
        return -1;  // Element not found in the vector
    }
    
    int main() {
        std::vector<int> my_vector = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
        int target_element = 13;
    
        int result = binary_search(my_vector, target_element);
        if (result != -1) {
            std::cout << "Element " << target_element << " found at index " << result << std::endl;
        } else {
            std::cout << "Element " << target_element << " not found in the vector" << std::endl;
        }
    
        return 0;
    }
    
`,

    java: `import java.util.Arrays;

    public class BinarySearch {
        public static int binarySearch(int[] arr, int target) {
            int left = 0;
            int right = arr.length - 1;
    
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (arr[mid] == target) {
                    return mid;  // Element found, return its index
                } else if (arr[mid] < target) {
                    left = mid + 1;  // Target is in the right half
                } else {
                    right = mid - 1;  // Target is in the left half
                }
            }
    
            return -1;  // Element not found in the array
        }
    
        public static void main(String[] args) {
            int[] myArray = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};
            int targetElement = 13;
    
            int result = binarySearch(myArray, targetElement);
            if (result != -1) {
                System.out.println("Element " + targetElement + " found at index " + result);
            } else {
                System.out.println("Element " + targetElement + " not found in the array");
            }
        }
    }
    
`,

    javascript: `function binarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
    
            if (arr[mid] === target) {
                return mid;  // Element found, return its index
            } else if (arr[mid] < target) {
                left = mid + 1;  // Target is in the right half
            } else {
                right = mid - 1;  // Target is in the left half
            }
        }
    
        return -1;  // Element not found in the array
    }
    
    const myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const targetElement = 13;
    
    const result = binarySearch(myArray, targetElement);
    if (result !== -1) {
        console.log(\`Element \${targetElement} found at index \${result}\`);
    } else {
        console.log(\`Element \${targetElement} not found in the array\`);
    }
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
