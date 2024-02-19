const codeSnippets = {
    python: `def exponential_search(arr, target):
    if arr[0] == target:
        return 0  # Target element is the first element

    n = len(arr)
    i = 1
    while i < n and arr[i] <= target:
        i *= 2

    # Perform binary search within the identified range
    left, right = i // 2, min(i, n - 1)
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid  # Target element found
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return -1  # Target element not found

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = exponential_search(arr, target)
if result != -1:
    print(f"Element {target} found at index {result}.")
else:
    print(f"Element {target} not found in the array.")

`,

    c: `#include <stdio.h>

    int binarySearch(int arr[], int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid; // Target element found
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target element not found
    }
    
    int exponentialSearch(int arr[], int size, int target) {
        if (arr[0] == target) {
            return 0; // Target element is the first element
        }
        
        int i = 1;
        while (i < size && arr[i] <= target) {
            i *= 2;
        }
        
        // Perform binary search within the identified range
        return binarySearch(arr, i / 2, (i < size ? i : size - 1), target);
    }
    
    int main() {
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int size = sizeof(arr) / sizeof(arr[0]);
        int target = 7;
        int result = exponentialSearch(arr, size, target);
        
        if (result != -1) {
            printf("Element %d found at index %d.\n", target, result);
        } else {
            printf("Element %d not found in the array.\n", target);
        }
        
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    int binarySearch(vector<int>& arr, int left, int right, int target) {
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid; // Target element found
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target element not found
    }
    
    int exponentialSearch(vector<int>& arr, int target) {
        int size = arr.size();
        if (arr[0] == target) {
            return 0; // Target element is the first element
        }
        
        int i = 1;
        while (i < size && arr[i] <= target) {
            i *= 2;
        }
        
        // Perform binary search within the identified range
        return binarySearch(arr, i / 2, min(i, size - 1), target);
    }
    
    int main() {
        vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        int result = exponentialSearch(arr, target);
        
        if (result != -1) {
            cout << "Element " << target << " found at index " << result << "." << endl;
        } else {
            cout << "Element " << target << " not found in the array." << endl;
        }
        
        return 0;
    }
    
    
`,

    java: `import java.util.Arrays;

    public class ExponentialSearch {
        public static int binarySearch(int[] arr, int left, int right, int target) {
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (arr[mid] == target) {
                    return mid; // Target element found
                } else if (arr[mid] < target) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return -1; // Target element not found
        }
    
        public static int exponentialSearch(int[] arr, int target) {
            int size = arr.length;
            if (arr[0] == target) {
                return 0; // Target element is the first element
            }
    
            int i = 1;
            while (i < size && arr[i] <= target) {
                i *= 2;
            }
    
            // Perform binary search within the identified range
            return binarySearch(arr, i / 2, Math.min(i, size - 1), target);
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
            int target = 7;
            int result = exponentialSearch(arr, target);
    
            if (result != -1) {
                System.out.println("Element " + target + " found at index " + result + ".");
            } else {
                System.out.println("Element " + target + " not found in the array.");
            }
        }
    }
    
`,

    javascript: `function binarySearch(arr, left, right, target) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
    
            if (arr[mid] === target) {
                return mid; // Target element found
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target element not found
    }
    
    function exponentialSearch(arr, target) {
        const size = arr.length;
        if (arr[0] === target) {
            return 0; // Target element is the first element
        }
    
        let i = 1;
        while (i < size && arr[i] <= target) {
            i *= 2;
        }
    
        // Perform binary search within the identified range
        return binarySearch(arr, i / 2, Math.min(i, size - 1), target);
    }
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    const result = exponentialSearch(arr, target);
    
    if (result !== -1) {
        console.log(\`Element \${target} found at index \${result}.\`);
    } else {
        console.log(\`Element \${target} not found in the array.\`);
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