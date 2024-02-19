const codeSnippets = {
    python: `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# Example usage:
my_list = [3, 6, 8, 10, 1, 2, 1]
sorted_list = quicksort(my_list)
print(sorted_list)

`,

    c: `#include <stdio.h>

    void swap(int* a, int* b) {
        int t = *a;
        *a = *b;
        *b = t;
    }
    
    int partition(int arr[], int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
    
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(&arr[i], &arr[j]);
            }
        }
    
        swap(&arr[i + 1], &arr[high]);
        return (i + 1);
    }
    
    void quicksort(int arr[], int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
    
            quicksort(arr, low, pi - 1);
            quicksort(arr, pi + 1, high);
        }
    }
    
    int main() {
        int arr[] = {3, 6, 8, 10, 1, 2, 1};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        quicksort(arr, 0, n - 1);
    
        printf("Sorted array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
    
        return 0;
    }
     
`,

    cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    template <typename T>
    void swap(T& a, T& b) {
        T temp = a;
        a = b;
        b = temp;
    }
    
    template <typename T>
    int partition(vector<T>& arr, int low, int high) {
        T pivot = arr[high];
        int i = (low - 1);
    
        for (int j = low; j <= high - 1; j++) {
            if (arr[j] < pivot) {
                i++;
                swap(arr[i], arr[j]);
            }
        }
    
        swap(arr[i + 1], arr[high]);
        return (i + 1);
    }
    
    template <typename T>
    void quicksort(vector<T>& arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
    
            quicksort(arr, low, pi - 1);
            quicksort(arr, pi + 1, high);
        }
    }
    
    int main() {
        vector<int> arr = {3, 6, 8, 10, 1, 2, 1};
        int n = arr.size();
    
        quicksort(arr, 0, n - 1);
    
        cout << "Sorted array: ";
        for (int i = 0; i < n; i++) {
            cout << arr[i] << " ";
        }
    
        return 0;
    }
    
`,

    java: `import java.util.Arrays;

    public class QuickSort {
    
        public static void main(String[] args) {
            int[] arr = {3, 6, 8, 10, 1, 2, 1};
    
            quickSort(arr, 0, arr.length - 1);
    
            System.out.println("Sorted array: " + Arrays.toString(arr));
        }
    
        public static void quickSort(int[] arr, int low, int high) {
            if (low < high) {
                int pi = partition(arr, low, high);
    
                quickSort(arr, low, pi - 1);
                quickSort(arr, pi + 1, high);
            }
        }
    
        public static int partition(int[] arr, int low, int high) {
            int pivot = arr[high];
            int i = (low - 1);
    
            for (int j = low; j <= high - 1; j++) {
                if (arr[j] < pivot) {
                    i++;
                    swap(arr, i, j);
                }
            }
    
            swap(arr, i + 1, high);
            return i + 1;
        }
    
        public static void swap(int[] arr, int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
      
`,

    javascript: `function quickSort(arr) {
        if (arr.length <= 1) {
            return arr;
        }
    
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(element => element < pivot);
        const middle = arr.filter(element => element === pivot);
        const right = arr.filter(element => element > pivot);
    
        return quickSort(left).concat(middle, quickSort(right));
    }
    
    // Example usage:
    const myArray = [3, 6, 8, 10, 1, 2, 1];
    const sortedArray = quickSort(myArray);
    console.log("Sorted array:", sortedArray);
       
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
