const codeSnippets = {
    python: `def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i          # Element found, return its index
    return -1                 # Element not found in the list

# Example usage:
my_list = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
target_element = 9

result = linear_search(my_list, target_element)
if result != -1:
    print(f"Element {target_element} found at index {result}")
else:
    print(f"Element {target_element} not found in the list")
`,

    c: `#include <stdio.h>

int linear_search(int arr[], int size, int target) 
{
    for (int i = 0; i < size; i++) 
    {
        if (arr[i] == target) 
        {
            return i;      // Element found, return its index
        }
    }
    return -1;            // Element not found in the array
}

int main() 
{
    int my_array[] = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    int size = sizeof(my_array) / sizeof(my_array[0]);
    int target_element = 9;

    int result = linear_search(my_array, size, target_element);
    if (result != -1) 
    {
        printf("Element %d found at index %d\n", target_element, result);
    } 
    else 
    {
        printf("Element %d not found in the array\n", target_element);
    }
    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>

int linear_search(const std::vector<int>& vec, int target) 
{
    for (int i = 0; i < vec.size(); i++) 
    {
        if (vec[i] == target) 
        {
            return i;       // Element found, return its index
        }
    }
    return -1;             // Element not found in the vector
}

int main() 
{
    std::vector<int> my_vector = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
    int target_element = 9;

    int result = linear_search(my_vector, target_element);
    if (result != -1) 
    {
        std::cout << "Element " << target_element << " found at index " << result << std::endl;
    } 
    else
    {
        std::cout << "Element " << target_element << " not found in the vector" << std::endl;
    }
    return 0;
}
`,

    java: `public class LinearSearch 
    {

    public static int linearSearch(int[] arr, int target) 
    {
        for (int i = 0; i < arr.length; i++) 
        {
            if (arr[i] == target) 
            {
                return i;       // Element found, return its index
            }
        }
        return -1;             // Element not found in the array
    }
    public static void main(String[] args) 
    {
        int[] myArray = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5};
        int targetElement = 9;

        int result = linearSearch(myArray, targetElement);
        if (result != -1) 
        {
            System.out.println("Element " + targetElement + " found at index " + result);
        } 
        else 
        {
            System.out.println("Element " + targetElement + " not found in the array");
        }
    }
}
`,

    javascript: `function linearSearch(arr, target) 
    {
    for (let i = 0; i < arr.length; i++) 
    {
        if (arr[i] === target) 
        {
            return i;       // Element found, return its index
        }
    }
    return -1; // Element not found in the array
}

const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const targetElement = 9;

const result = linearSearch(myArray, targetElement);
if (result !== -1) {
    console.log(\`Element \${targetElement} found at index \${result}\`);
} else {
    console.log(\`Element \${targetElement} not found in the array\`);
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
