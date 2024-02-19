const codeSnippets = {
    python: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i, j, k = 0, 0, 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1
`,

    c: `#include <stdio.h>

    void merge(int arr[], int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
    
        int left_half[n1], right_half[n2];
    
        for (int i = 0; i < n1; i++)
            left_half[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            right_half[j] = arr[mid + 1 + j];
    
        int i = 0, j = 0, k = left;
    
        while (i < n1 && j < n2) {
            if (left_half[i] <= right_half[j]) {
                arr[k] = left_half[i];
                i++;
            } else {
                arr[k] = right_half[j];
                j++;
            }
            k++;
        }
    
        while (i < n1) {
            arr[k] = left_half[i];
            i++;
            k++;
        }
    
        while (j < n2) {
            arr[k] = right_half[j];
            j++;
            k++;
        }
    }
    
    void merge_sort(int arr[], int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
    
            merge_sort(arr, left, mid);
            merge_sort(arr, mid + 1, right);
    
            merge(arr, left, mid, right);
        }
    }
    
    int main() {
        int my_array[] = {38, 27, 43, 3, 9, 82, 10};
        int array_size = sizeof(my_array) / sizeof(my_array[0]);
    
        merge_sort(my_array, 0, array_size - 1);
    
        printf("Sorted array: ");
        for (int i = 0; i < array_size; i++)
            printf("%d ", my_array[i]);
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <vector>
    
    void merge(std::vector<int>& arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
    
        std::vector<int> left_half(n1);
        std::vector<int> right_half(n2);
    
        for (int i = 0; i < n1; i++)
            left_half[i] = arr[left + i];
        for (int j = 0; j < n2; j++)
            right_half[j] = arr[mid + 1 + j];
    
        int i = 0, j = 0, k = left;
    
        while (i < n1 && j < n2) {
            if (left_half[i] <= right_half[j]) {
                arr[k] = left_half[i];
                i++;
            } else {
                arr[k] = right_half[j];
                j++;
            }
            k++;
        }
    
        while (i < n1) {
            arr[k] = left_half[i];
            i++;
            k++;
        }
    
        while (j < n2) {
            arr[k] = right_half[j];
            j++;
            k++;
        }
    }
    
    void merge_sort(std::vector<int>& arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
    
            merge_sort(arr, left, mid);
            merge_sort(arr, mid + 1, right);
    
            merge(arr, left, mid, right);
        }
    }
    
    int main() {
        std::vector<int> my_vector = {38, 27, 43, 3, 9, 82, 10};
    
        merge_sort(my_vector, 0, my_vector.size() - 1);
    
        std::cout << "Sorted array: ";
        for (int num : my_vector)
            std::cout << num << " ";
    
        return 0;
    }
    
`,

    java: `public class MergeSort {

        public static void merge(int[] arr, int left, int mid, int right) {
            int n1 = mid - left + 1;
            int n2 = right - mid;
    
            int[] leftHalf = new int[n1];
            int[] rightHalf = new int[n2];
    
            for (int i = 0; i < n1; i++)
                leftHalf[i] = arr[left + i];
            for (int j = 0; j < n2; j++)
                rightHalf[j] = arr[mid + 1 + j];
    
            int i = 0, j = 0, k = left;
    
            while (i < n1 && j < n2) {
                if (leftHalf[i] <= rightHalf[j]) {
                    arr[k] = leftHalf[i];
                    i++;
                } else {
                    arr[k] = rightHalf[j];
                    j++;
                }
                k++;
            }
    
            while (i < n1) {
                arr[k] = leftHalf[i];
                i++;
                k++;
            }
    
            while (j < n2) {
                arr[k] = rightHalf[j];
                j++;
                k++;
            }
        }
    
        public static void mergeSort(int[] arr, int left, int right) {
            if (left < right) {
                int mid = left + (right - left) / 2;
    
                mergeSort(arr, left, mid);
                mergeSort(arr, mid + 1, right);
    
                merge(arr, left, mid, right);
            }
        }
    
        public static void main(String[] args) {
            int[] myArray = {38, 27, 43, 3, 9, 82, 10};
    
            mergeSort(myArray, 0, myArray.length - 1);
    
            System.out.print("Sorted array: ");
            for (int num : myArray)
                System.out.print(num + " ");
        }
    }
    
`,

    javascript: `function merge(arr, left, mid, right) {
        const n1 = mid - left + 1;
        const n2 = right - mid;
    
        const leftHalf = new Array(n1);
        const rightHalf = new Array(n2);
    
        for (let i = 0; i < n1; i++)
            leftHalf[i] = arr[left + i];
        for (let j = 0; j < n2; j++)
            rightHalf[j] = arr[mid + 1 + j];
    
        let i = 0, j = 0, k = left;
    
        while (i < n1 && j < n2) {
            if (leftHalf[i] <= rightHalf[j]) {
                arr[k] = leftHalf[i];
                i++;
            } else {
                arr[k] = rightHalf[j];
                j++;
            }
            k++;
        }
    
        while (i < n1) {
            arr[k] = leftHalf[i];
            i++;
            k++;
        }
    
        while (j < n2) {
            arr[k] = rightHalf[j];
            j++;
            k++;
        }
    }
    
    function mergeSort(arr, left, right) {
        if (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
    
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
    
            merge(arr, left, mid, right);
        }
    }
    
    // Example usage:
    const myArray = [38, 27, 43, 3, 9, 82, 10];
    
    mergeSort(myArray, 0, myArray.length - 1);
    
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
