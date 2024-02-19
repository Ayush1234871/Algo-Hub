const codeSnippets = {
    python: `def radix_sort(arr):
    # Find the maximum number to determine the number of digits
    max_num = max(arr)
    exp = 1

    # Iterate through each digit place (unit, tens, hundreds, etc.)
    while max_num // exp > 0:
        counting_sort(arr, exp)
        exp *= 10

def counting_sort(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10

    # Count occurrences of digits at the current place value
    for i in range(n):
        index = arr[i] // exp
        count[index % 10] += 1

    # Update count array to store actual position of elements
    for i in range(1, 10):
        count[i] += count[i - 1]

    # Build the output array
    i = n - 1
    while i >= 0:
        index = arr[i] // exp
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1

    # Copy the output array to the original array
    for i in range(n):
        arr[i] = output[i]

# Example usage:
myArray = [170, 45, 75, 90, 802, 24, 2, 66]
radix_sort(myArray)
print("Sorted array:", myArray)

`,

    c: `#include <stdio.h>

    // A utility function to get the maximum value in arr[]
    int getMax(int arr[], int n) {
        int max = arr[0];
        for (int i = 1; i < n; i++)
            if (arr[i] > max)
                max = arr[i];
        return max;
    }
    
    // Using counting sort to sort the elements based on significant places
    void countingSort(int arr[], int n, int exp) {
        const int range = 10; // The range of possible digits (0-9)
        int output[n]; // Output array
        int count[range] = {0};
    
        // Count occurrences of digits at the current place value
        for (int i = 0; i < n; i++)
            count[(arr[i] / exp) % range]++;
    
        // Update count array to store actual position of elements
        for (int i = 1; i < range; i++)
            count[i] += count[i - 1];
    
        // Build the output array
        for (int i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % range] - 1] = arr[i];
            count[(arr[i] / exp) % range]--;
        }
    
        // Copy the output array to the original array
        for (int i = 0; i < n; i++)
            arr[i] = output[i];
    }
    
    // Radix Sort
    void radixSort(int arr[], int n) {
        // Find the maximum number to determine the number of digits
        int max = getMax(arr, n);
    
        // Iterate through each digit place (unit, tens, hundreds, etc.)
        for (int exp = 1; max / exp > 0; exp *= 10)
            countingSort(arr, n, exp);
    }
    
    // Print an array
    void printArray(int arr[], int n) {
        for (int i = 0; i < n; i++)
            printf("%d ", arr[i]);
        printf("\n");
    }
    
    // Example usage
    int main() {
        int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        radixSort(arr, n);
    
        printf("Sorted array: ");
        printArray(arr, n);
    
        return 0;
    }
    
    
`,

    cpp: `#include <iostream>
    #include <vector>
    
    using namespace std;
    
    // A utility function to get the maximum value in arr[]
    int getMax(const vector<int>& arr) {
        int max = arr[0];
        for (int i = 1; i < arr.size(); i++)
            if (arr[i] > max)
                max = arr[i];
        return max;
    }
    
    // Using counting sort to sort the elements based on significant places
    void countingSort(vector<int>& arr, int exp) {
        const int range = 10; // The range of possible digits (0-9)
        vector<int> output(arr.size());
        vector<int> count(range, 0);
    
        // Count occurrences of digits at the current place value
        for (int i = 0; i < arr.size(); i++)
            count[(arr[i] / exp) % range]++;
    
        // Update count array to store the actual position of elements
        for (int i = 1; i < range; i++)
            count[i] += count[i - 1];
    
        // Build the output array
        for (int i = arr.size() - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % range] - 1] = arr[i];
            count[(arr[i] / exp) % range]--;
        }
    
        // Copy the output array to the original array
        arr = output;
    }
    
    // Radix Sort
    void radixSort(vector<int>& arr) {
        // Find the maximum number to determine the number of digits
        int max = getMax(arr);
    
        // Iterate through each digit place (unit, tens, hundreds, etc.)
        for (int exp = 1; max / exp > 0; exp *= 10)
            countingSort(arr, exp);
    }
    
    // Print an array
    void printArray(const vector<int>& arr) {
        for (int i : arr)
            cout << i << " ";
        cout << endl;
    }
    
    // Example usage
    int main() {
        vector<int> arr = {170, 45, 75, 90, 802, 24, 2, 66};
    
        radixSort(arr);
    
        cout << "Sorted array: ";
        printArray(arr);
    
        return 0;
    }
    
`,

    java: `  import java.util.Arrays;

    public class RadixSort {
    
        // A utility function to get the maximum value in arr[]
        private static int getMax(int arr[]) {
            int max = arr[0];
            for (int i = 1; i < arr.length; i++)
                if (arr[i] > max)
                    max = arr[i];
            return max;
        }
    
        // Using counting sort to sort the elements based on significant places
        private static void countingSort(int arr[], int exp) {
            final int range = 10; // The range of possible digits (0-9)
            int n = arr.length;
            int output[] = new int[n];
            int count[] = new int[range];
    
            // Count occurrences of digits at the current place value
            for (int i = 0; i < n; i++)
                count[(arr[i] / exp) % range]++;
    
            // Update count array to store the actual position of elements
            for (int i = 1; i < range; i++)
                count[i] += count[i - 1];
    
            // Build the output array
            for (int i = n - 1; i >= 0; i--) {
                output[count[(arr[i] / exp) % range] - 1] = arr[i];
                count[(arr[i] / exp) % range]--;
            }
    
            // Copy the output array to the original array
            System.arraycopy(output, 0, arr, 0, n);
        }
    
        // Radix Sort
        public static void radixSort(int arr[]) {
            // Find the maximum number to determine the number of digits
            int max = getMax(arr);
    
            // Iterate through each digit place (unit, tens, hundreds, etc.)
            for (int exp = 1; max / exp > 0; exp *= 10)
                countingSort(arr, exp);
        }
    
        // Print an array
        private static void printArray(int arr[]) {
            System.out.println(Arrays.toString(arr));
        }
    
        // Example usage
        public static void main(String[] args) {
            int arr[] = {170, 45, 75, 90, 802, 24, 2, 66};
    
            radixSort(arr);
    
            System.out.print("Sorted array: ");
            printArray(arr);
        }
    }
    
`,

    javascript: `  function getMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
    
    function countingSort(arr, exp) {
        const range = 10; // The range of possible digits (0-9)
        const n = arr.length;
        const output = new Array(n);
        const count = new Array(range).fill(0);
    
        // Count occurrences of digits at the current place value
        for (let i = 0; i < n; i++) {
            count[Math.floor(arr[i] / exp) % range]++;
        }
    
        // Update count array to store the actual position of elements
        for (let i = 1; i < range; i++) {
            count[i] += count[i - 1];
        }
    
        // Build the output array
        for (let i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % range] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % range]--;
        }
    
        // Copy the output array to the original array
        for (let i = 0; i < n; i++) {
            arr[i] = output[i];
        }
    }
    
    function radixSort(arr) {
        // Find the maximum number to determine the number of digits
        const max = getMax(arr);
    
        // Iterate through each digit place (unit, tens, hundreds, etc.)
        for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
            countingSort(arr, exp);
        }
    }
    
    // Example usage:
    const myArray = [170, 45, 75, 90, 802, 24, 2, 66];
    radixSort(myArray);
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