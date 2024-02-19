const codeSnippets = {
    python: `def ternary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        third = (right - left) // 3
        mid1 = left + third
        mid2 = right - third

        if arr[mid1] == target:
            return mid1
        elif arr[mid2] == target:
            return mid2

        if target < arr[mid1]:
            right = mid1 - 1
        elif target > arr[mid2]:
            left = mid2 + 1
        else:
            left = mid1 + 1
            right = mid2 - 1

    return -1  # Target element not found

# Example usage:
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
target = 7
result = ternary_search(arr, target)

if result != -1:
    print(f"Element {target} found at index {result}.")
else:
    print(f"Element {target} not found in the array.")

`,

    c: `#include <stdio.h>

    int ternary_search(int arr[], int left, int right, int target) {
        while (left <= right) {
            int third = (right - left) / 3;
            int mid1 = left + third;
            int mid2 = right - third;
    
            if (arr[mid1] == target) {
                return mid1;
            } else if (arr[mid2] == target) {
                return mid2;
            }
    
            if (target < arr[mid1]) {
                right = mid1 - 1;
            } else if (target > arr[mid2]) {
                left = mid2 + 1;
            } else {
                left = mid1 + 1;
                right = mid2 - 1;
            }
        }
        return -1;  // Target element not found
    }
    
    int main() {
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int size = sizeof(arr) / sizeof(arr[0]);
        int target = 7;
        int result = ternary_search(arr, 0, size - 1, target);
    
        if (result != -1) {
            printf("Element %d found at index %d.\n", target, result);
        } else {
            printf("Element %d not found in the array.\n", target);
        }
    
        return 0;
    }
    
    
`,
java: `import java.util.Arrays;

public class TernarySearch {
    public static int ternarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int third = (right - left) / 3;
            int mid1 = left + third;
            int mid2 = right - third;

            if (arr[mid1] == target) {
                return mid1;
            } else if (arr[mid2] == target) {
                return mid2;
            }

            if (target < arr[mid1]) {
                right = mid1 - 1;
            } else if (target > arr[mid2]) {
                left = mid2 + 1;
            } else {
                left = mid1 + 1;
                right = mid2 - 1;
            }
        }
        return -1;  // Target element not found
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
        int result = ternarySearch(arr, target);

        if (result != -1) {
            System.out.println("Element " + target + " found at index " + result + ".");
        } else {
            System.out.println("Element " + target + " not found in the array.");
        }
    }
}


`,


    cpp: `import java.util.Arrays;

    public class TernarySearch {
        public static int ternarySearch(int[] arr, int target) {
            int left = 0;
            int right = arr.length - 1;
    
            while (left <= right) {
                int third = (right - left) / 3;
                int mid1 = left + third;
                int mid2 = right - third;
    
                if (arr[mid1] == target) {
                    return mid1;
                } else if (arr[mid2] == target) {
                    return mid2;
                }
    
                if (target < arr[mid1]) {
                    right = mid1 - 1;
                } else if (target > arr[mid2]) {
                    left = mid2 + 1;
                } else {
                    left = mid1 + 1;
                    right = mid2 - 1;
                }
            }
            return -1;  // Target element not found
        }
    
        public static void main(String[] args) {
            int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
            int target = 7;
            int result = ternarySearch(arr, target);
    
            if (result != -1) {
                System.out.println("Element " + target + " found at index " + result + ".");
            } else {
                System.out.println("Element " + target + " not found in the array.");
            }
        }
    }
    
    
`,

    javascript: `function ternarySearch(arr, target) {
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            const third = Math.floor((right - left) / 3);
            const mid1 = left + third;
            const mid2 = right - third;
    
            if (arr[mid1] === target) {
                return mid1;
            } else if (arr[mid2] === target) {
                return mid2;
            }
    
            if (target < arr[mid1]) {
                right = mid1 - 1;
            } else if (target > arr[mid2]) {
                left = mid2 + 1;
            } else {
                left = mid1 + 1;
                right = mid2 - 1;
            }
        }
        return -1; // Target element not found
    }
    
    // Example usage:
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 7;
    const result = ternarySearch(arr, target);
    
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