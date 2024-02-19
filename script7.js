const codeSnippets = {
    python: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # Set a flag to check if any swaps are made in this pass
        swapped = False

        # Last i elements are already sorted, so we don't need to check them
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # Swap the elements if they are in the wrong order
                arr[j], arr[j+1] = arr[j+1], arr[j]
                swapped = True

        # If no swaps were made, the list is already sorted
        if not swapped:
            break

# Example usage:
my_list = [64, 25, 12, 22, 11]
bubble_sort(my_list)
print("Sorted list:", my_list)

`,

    c: `#include <stdio.h>

    void swap(int *xp, int *yp) {
        int temp = *xp;
        *xp = *yp;
        *yp = temp;
    }
    
    void bubbleSort(int arr[], int n) {
        int i, j;
        // Flag to check if any swaps were made in a pass
        int swapped;
    
        for (i = 0; i < n - 1; i++) {
            swapped = 0;
            // Last i elements are already sorted, so we don't need to check them
            for (j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements if they are in the wrong order
                    swap(&arr[j], &arr[j + 1]);
                    swapped = 1;
                }
            }
    
            // If no swaps were made, the list is already sorted
            if (!swapped) {
                break;
            }
        }
    }
    
    int main() {
        int arr[] = {64, 25, 12, 22, 11};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        bubbleSort(arr, n);
    
        printf("Sorted array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
        printf("\n");
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>

    void swap(int &x, int &y) {
        int temp = x;
        x = y;
        y = temp;
    }
    
    void bubbleSort(int arr[], int n) {
        for (int i = 0; i < n - 1; i++) {
            // Flag to check if any swaps were made in a pass
            bool swapped = false;
            
            // Last i elements are already sorted, so we don't need to check them
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements if they are in the wrong order
                    swap(arr[j], arr[j + 1]);
                    swapped = true;
                }
            }
    
            // If no swaps were made, the list is already sorted
            if (!swapped) {
                break;
            }
        }
    }
    
    int main() {
        int arr[] = {64, 25, 12, 22, 11};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        bubbleSort(arr, n);
    
        std::cout << "Sorted array: ";
        for (int i = 0; i < n; i++) {
            std::cout << arr[i] << " ";
        }
        std::cout << std::endl;
    
        return 0;
    }
    
`,

    java: `public class BubbleSort {
        static void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    
        static void bubbleSort(int[] arr) {
            int n = arr.length;
    
            for (int i = 0; i < n - 1; i++) {
                // Flag to check if any swaps were made in a pass
                boolean swapped = false;
    
                // Last i elements are already sorted, so we don't need to check them
                for (int j = 0; j < n - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        // Swap the elements if they are in the wrong order
                        swap(arr, j, j + 1);
                        swapped = true;
                    }
                }
    
                // If no swaps were made, the list is already sorted
                if (!swapped) {
                    break;
                }
            }
        }
    
        public static void main(String[] args) {
            int[] arr = {64, 25, 12, 22, 11};
    
            bubbleSort(arr);
    
            System.out.print("Sorted array: ");
            for (int value : arr) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
    
`,

    javascript: `function bubbleSort(arr) {
        const n = arr.length;
    
        for (let i = 0; i < n - 1; i++) {
            // Flag to check if any swaps were made in a pass
            let swapped = false;
    
            // Last i elements are already sorted, so we don't need to check them
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap the elements if they are in the wrong order
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
            }
    
            // If no swaps were made, the list is already sorted
            if (!swapped) {
                break;
            }
        }
    }
    
    // Example usage:
    const arr = [64, 25, 12, 22, 11];
    bubbleSort(arr);
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
