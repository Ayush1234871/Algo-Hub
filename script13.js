const codeSnippets = {
    python: `def cycle_sort(arr):
    n = len(arr)

    for cycle_start in range(n - 1):
        item = arr[cycle_start]

        pos = cycle_start
        for i in range(cycle_start + 1, n):
            if arr[i] < item:
                pos += 1

        if pos == cycle_start:
            continue

        while item == arr[pos]:
            pos += 1

        arr[pos], item = item, arr[pos]

        while pos != cycle_start:
            pos = cycle_start
            for i in range(cycle_start + 1, n):
                if arr[i] < item:
                    pos += 1

            while item == arr[pos]:
                pos += 1

            arr[pos], item = item, arr[pos]

    return arr

# Example usage:
arr = [5, 2, 9, 1, 5, 6]
sorted_arr = cycle_sort(arr.copy())
print("Original array:", arr)
print("Sorted array:", sorted_arr)

`,

    c: `#include <stdio.h>

    void cycleSort(int arr[], int n) {
        for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            int item = arr[cycleStart];
            int pos = cycleStart;
    
            for (int i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }
    
            if (pos == cycleStart) {
                continue;
            }
    
            while (item == arr[pos]) {
                pos++;
            }
    
            int temp = arr[pos];
            arr[pos] = item;
            item = temp;
    
            while (pos != cycleStart) {
                pos = cycleStart;
    
                for (int i = cycleStart + 1; i < n; i++) {
                    if (arr[i] < item) {
                        pos++;
                    }
                }
    
                while (item == arr[pos]) {
                    pos++;
                }
    
                temp = arr[pos];
                arr[pos] = item;
                item = temp;
            }
        }
    }
    
    int main() {
        int arr[] = {5, 2, 9, 1, 5, 6};
        int n = sizeof(arr) / sizeof(arr[0]);
    
        printf("Original array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
    
        cycleSort(arr, n);
    
        printf("\nSorted array: ");
        for (int i = 0; i < n; i++) {
            printf("%d ", arr[i]);
        }
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <vector>
    
    void cycleSort(std::vector<int>& arr) {
        int n = arr.size();
    
        for (int cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            int item = arr[cycleStart];
            int pos = cycleStart;
    
            for (int i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }
    
            if (pos == cycleStart) {
                continue;
            }
    
            while (item == arr[pos]) {
                pos++;
            }
    
            std::swap(arr[pos], item);
    
            while (pos != cycleStart) {
                pos = cycleStart;
    
                for (int i = cycleStart + 1; i < n; i++) {
                    if (arr[i] < item) {
                        pos++;
                    }
                }
    
                while (item == arr[pos]) {
                    pos++;
                }
    
                std::swap(arr[pos], item);
            }
        }
    }
    
    int main() {
        std::vector<int> arr = {5, 2, 9, 1, 5, 6};
    
        std::cout << "Original array: ";
        for (const auto& element : arr) {
            std::cout << element << " ";
        }
    
        cycleSort(arr);
    
        std::cout << "\nSorted array: ";
        for (const auto& element : arr) {
            std::cout << element << " ";
        }
    
        return 0;
    }
    
`,

    java: `function cycleSort(arr) {
        const n = arr.length;
    
        for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
            let item = arr[cycleStart];
            let pos = cycleStart;
    
            for (let i = cycleStart + 1; i < n; i++) {
                if (arr[i] < item) {
                    pos++;
                }
            }
    
            if (pos === cycleStart) {
                continue;
            }
    
            while (item === arr[pos]) {
                pos++;
            }
    
            [arr[pos], item] = [item, arr[pos]];
    
            while (pos !== cycleStart) {
                pos = cycleStart;
    
                for (let i = cycleStart + 1; i < n; i++) {
                    if (arr[i] < item) {
                        pos++;
                    }
                }
    
                while (item === arr[pos]) {
                    pos++;
                }
    
                [arr[pos], item] = [item, arr[pos]];
            }
        }
    }
    
    // Example usage:
    let arr = [5, 2, 9, 1, 5, 6];
    
    console.log("Original array: " + arr.join(" "));
    cycleSort(arr);
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