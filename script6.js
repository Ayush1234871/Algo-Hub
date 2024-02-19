const codeSnippets = {
    python: `def selection_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        min_index = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_index]:
                min_index = j

        # Swap the found minimum element with the first element
        arr[i], arr[min_index] = arr[min_index], arr[i]

# Example usage:
my_array = [64, 25, 12, 22, 11]
selection_sort(my_array)
print("Sorted array:", my_array)

`,

    c: `#include <stdio.h>

    void swap(int *xp, int *yp) {
        int temp = *xp;
        *xp = *yp;
        *yp = temp;
    }
    
    void selectionSort(int arr[], int n) {
        int i, j, min_idx;
    
        for (i = 0; i < n - 1; i++) {
            min_idx = i;
            for (j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    min_idx = j;
                }
            }
    
            // Swap the found minimum element with the first element
            swap(&arr[i], &arr[min_idx]);
        }
    }
    
    int main() {
        int arr[] = {64, 25, 12, 22, 11};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        selectionSort(arr, n);
    
        printf("Sorted array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    
        return 0;
    }
      
`,

    cpp: `#include <iostream>
    #include <vector>
    
    void swap(int &x, int &y) {
        int temp = x;
        x = y;
        y = temp;
    }
    
    void selectionSort(std::vector<int> &arr) {
        int n = arr.size();
    
        for (int i = 0; i < n - 1; i++) {
            int min_index = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_index]) {
                    min_index = j;
                }
            }
    
            // Swap the found minimum element with the first element
            swap(arr[i], arr[min_index]);
        }
    }
    
    int main() {
        std::vector<int> arr = {64, 25, 12, 22, 11};
    
        selectionSort(arr);
    
        std::cout << "Sorted array: ";
        for (int i : arr) {
            std::cout << i << " ";
        }
        std::cout << std::endl;
    
        return 0;
    }
    
    
`,

    java: `public class SelectionSort {
        void swap(int arr[], int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    
        void selectionSort(int arr[]) {
            int n = arr.length;
    
            for (int i = 0; i < n - 1; i++) {
                int minIndex = i;
                for (int j = i + 1; j < n; j++) {
                    if (arr[j] < arr[minIndex]) {
                        minIndex = j;
                    }
                }
    
                // Swap the found minimum element with the first element
                swap(arr, i, minIndex);
            }
        }
    
        public static void main(String args[]) {
            SelectionSort sorter = new SelectionSort();
            int arr[] = {64, 25, 12, 22, 11};
    
            sorter.selectionSort(arr);
    
            System.out.print("Sorted array: ");
            for (int i : arr) {
                System.out.print(i + " ");
            }
            System.out.println();
        }
    }
     
`,

    javascript: `function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    function selectionSort(arr) {
        const n = arr.length;
    
        for (let i = 0; i < n - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
    
            // Swap the found minimum element with the first element
            swap(arr, i, minIndex);
        }
    }
    
    // Example usage:
    const arr = [64, 25, 12, 22, 11];
    selectionSort(arr);
    console.log("Sorted array: " + arr.join(" "));
    
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