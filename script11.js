const codeSnippets = {
    python: `def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2

    if left < n and arr[left] > arr[largest]:
        largest = left

    if right < n and arr[right] > arr[largest]:
        largest = right

    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)

def heapSort(arr):
    n = len(arr)

    # Build max heap
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # Extract elements one by one
    for i in range(n - 1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]
        heapify(arr, i, 0)

# Example usage:
myArray = [3, 6, 8, 10, 1, 2, 1]
heapSort(myArray)
print("Sorted array:", myArray)

`,

    c: `#include <stdio.h>

    void swap(int* a, int* b) {
        int t = *a;
        *a = *b;
        *b = t;
    }
    
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
    
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
    
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
    
        if (largest != i) {
            swap(&arr[i], &arr[largest]);
            heapify(arr, n, largest);
        }
    }
    
    void heapSort(int arr[], int n) {
        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    
        // Extract elements one by one
        for (int i = n - 1; i > 0; i--) {
            swap(&arr[0], &arr[i]);
            heapify(arr, i, 0);
        }
    }
    
    int main() {
        int arr[] = {3, 6, 8, 10, 1, 2, 1};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        heapSort(arr, n);
    
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
    void heapify(vector<T>& arr, int n, int i) {
        int largest = i;
        int left = 2 * i + 1;
        int right = 2 * i + 2;
    
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }
    
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }
    
        if (largest != i) {
            swap(arr[i], arr[largest]);
            heapify(arr, n, largest);
        }
    }
    
    template <typename T>
    void heapSort(vector<T>& arr) {
        int n = arr.size();
    
        // Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    
        // Extract elements one by one
        for (int i = n - 1; i > 0; i--) {
            swap(arr[0], arr[i]);
            heapify(arr, i, 0);
        }
    }
    
    int main() {
        vector<int> arr = {3, 6, 8, 10, 1, 2, 1};
        heapSort(arr);
    
        cout << "Sorted array: ";
        for (int i = 0; i < arr.size(); i++) {
            cout << arr[i] << " ";
        }
    
        return 0;
    }
    
`,

    java: `import java.util.Arrays;

    public class HeapSort {
    
        public static void main(String[] args) {
            int[] arr = {3, 6, 8, 10, 1, 2, 1};
            heapSort(arr);
            System.out.println("Sorted array: " + Arrays.toString(arr));
        }
    
        public static void swap(int arr[], int i, int j) {
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    
        public static void heapify(int arr[], int n, int i) {
            int largest = i;
            int left = 2 * i + 1;
            int right = 2 * i + 2;
    
            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }
    
            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }
    
            if (largest != i) {
                swap(arr, i, largest);
                heapify(arr, n, largest);
            }
        }
    
        public static void heapSort(int arr[]) {
            int n = arr.length;
    
            // Build max heap
            for (int i = n / 2 - 1; i >= 0; i--) {
                heapify(arr, n, i);
            }
    
            // Extract elements one by one
            for (int i = n - 1; i > 0; i--) {
                swap(arr, 0, i);
                heapify(arr, i, 0);
            }
        }
    }
    
`,

    javascript: `function heapSort(arr) {
        function swap(i, j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    
        function heapify(n, i) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;
    
            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }
    
            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }
    
            if (largest !== i) {
                swap(i, largest);
                heapify(n, largest);
            }
        }
    
        const n = arr.length;
    
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(n, i);
        }
    
        // Extract elements one by one
        for (let i = n - 1; i > 0; i--) {
            swap(0, i);
            heapify(i, 0);
        }
    }
    
    // Example usage:
    const myArray = [3, 6, 8, 10, 1, 2, 1];
    heapSort(myArray);
    console.log("Sorted array:", myArray);
       
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