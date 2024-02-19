const codeSnippets = {
    python: `def binary_search(arr, low, high, x):
    while low <= high:
        mid = (low + high) // 2
        mid_val = arr[mid]

        if mid_val == x:
            return mid  # Element found
        elif mid_val < x:
            low = mid + 1
        else:
            high = mid - 1

    return -1  # Element not found

def exponential_search(arr, x):
    n = len(arr)

    if arr[0] == x:
        return 0  # Element found at the first position

    i = 1
    while i < n and arr[i] <= x:
        i *= 2

    return binary_search(arr, i // 2, min(i, n - 1), x)

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

    int binary_search(int arr[], int low, int high, int x) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int mid_val = arr[mid];
    
            if (mid_val == x) {
                return mid;  // Element found
            } else if (mid_val < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    
        return -1;  // Element not found
    }
    
    int exponential_search(int arr[], int n, int x) {
        if (arr[0] == x) {
            return 0;  // Element found at the first position
        }
    
        int i = 1;
        while (i < n && arr[i] <= x) {
            i *= 2;
        }
    
        return binary_search(arr, i / 2, (i < n) ? i : n - 1, x);
    }
    
    int main() {
        int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int n = sizeof(arr) / sizeof(arr[0]);
        int target = 7;
    
        int result = exponential_search(arr, n, target);
    
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
    
    int binary_search(vector<int>& arr, int low, int high, int x) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            int mid_val = arr[mid];
    
            if (mid_val == x) {
                return mid;  // Element found
            } else if (mid_val < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    
        return -1;  // Element not found
    }
    
    int exponential_search(vector<int>& arr, int x) {
        int n = arr.size();
    
        if (arr[0] == x) {
            return 0;  // Element found at the first position
        }
    
        int i = 1;
        while (i < n && arr[i] <= x) {
            i *= 2;
        }
    
        return binary_search(arr, i / 2, min(i, n - 1), x);
    }
    
    int main() {
        vector<int> arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target = 7;
    
        int result = exponential_search(arr, target);
    
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
        
        static int binarySearch(int arr[], int low, int high, int x) {
            while (low <= high) {
                int mid = low + (high - low) / 2;
                int midVal = arr[mid];
        
                if (midVal == x) {
                    return mid;  // Element found
                } else if (midVal < x) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        
            return -1;  // Element not found
        }
        
        static int exponentialSearch(int arr[], int x) {
            int n = arr.length;
        
            if (arr[0] == x) {
                return 0;  // Element found at the first position
            }
        
            int i = 1;
            while (i < n && arr[i] <= x) {
                i *= 2;
            }
        
            return binarySearch(arr, i / 2, Math.min(i, n - 1), x);
        }
        
        public static void main(String args[]) {
            int arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
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

    javascript: `function binarySearch(arr, low, high, x) {
        while (low <= high) {
            let mid = Math.floor(low + (high - low) / 2);
            let midVal = arr[mid];
    
            if (midVal === x) {
                return mid;  // Element found
            } else if (midVal < x) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    
        return -1;  // Element not found
    }
    
    function exponentialSearch(arr, x) {
        let n = arr.length;
    
        if (arr[0] === x) {
            return 0;  // Element found at the first position
        }
    
        let i = 1;
        while (i < n && arr[i] <= x) {
            i *= 2;
        }
    
        return binarySearch(arr, i / 2, Math.min(i, n - 1), x);
    }
    
    // Example usage:
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let target = 7;
    
    let result = exponentialSearch(arr, target);
    
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