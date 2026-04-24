const codeSnippets = {
    python: `def printMaxActivities(s, f):
    n = len(f)
    print("Following activities are selected")

    # The first activity is always selected
    i = 0
    print(i, end=" ")

    # Consider rest of the activities
    for j in range(1, n):
        # If this activity has start time greater than
        # or equal to the finish time of previously
        # selected activity, then select it
        if s[j] >= f[i]:
            print(j, end=" ")
            i = j

s = [1, 3, 0, 5, 8, 5]
f = [2, 4, 6, 7, 9, 9]
printMaxActivities(s, f)`,

    c: `#include <stdio.h>

void printMaxActivities(int s[], int f[], int n) {
    int i, j;
    printf("Following activities are selected\\n");

    // The first activity is always selected
    i = 0;
    printf("%d ", i);

    // Consider rest of the activities
    for (j = 1; j < n; j++) {
        // If this activity has start time greater than or
        // equal to the finish time of previously selected
        // activity, then select it
        if (s[j] >= f[i]) {
            printf("%d ", j);
            i = j;
        }
    }
}

int main() {
    int s[] = {1, 3, 0, 5, 8, 5};
    int f[] = {2, 4, 6, 7, 9, 9};
    int n = sizeof(s) / sizeof(s[0]);
    printMaxActivities(s, f, n);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>

void printMaxActivities(std::vector<int> s, std::vector<int> f) {
    int n = s.size();
    std::cout << "Following activities are selected\\n";

    int i = 0;
    std::cout << i << " ";

    for (int j = 1; j < n; j++) {
        if (s[j] >= f[i]) {
            std::cout << j << " ";
            i = j;
        }
    }
}

int main() {
    std::vector<int> s = {1, 3, 0, 5, 8, 5};
    std::vector<int> f = {2, 4, 6, 7, 9, 9};
    printMaxActivities(s, f);
    return 0;
}`,

    java: `public class ActivitySelection {
    public static void printMaxActivities(int s[], int f[], int n) {
        int i, j;
        System.out.println("Following activities are selected");

        i = 0;
        System.out.print(i + " ");

        for (j = 1; j < n; j++) {
            if (s[j] >= f[i]) {
                System.out.print(j + " ");
                i = j;
            }
        }
    }

    public static void main(String[] args) {
        int s[] = {1, 3, 0, 5, 8, 5};
        int f[] = {2, 4, 6, 7, 9, 9};
        int n = s.length;
        printMaxActivities(s, f, n);
    }
}`,

    javascript: `function printMaxActivities(s, f) {
    let n = s.length;
    console.log("Following activities are selected");

    let i = 0;
    let result = [i];

    for (let j = 1; j < n; j++) {
        if (s[j] >= f[i]) {
            result.push(j);
            i = j;
        }
    }
    console.log(result.join(" "));
}

let s = [1, 3, 0, 5, 8, 5];
let f = [2, 4, 6, 7, 9, 9];
printMaxActivities(s, f);`
};

const languageSelector = document.getElementById('language');
const codeDisplay = document.getElementById('code');

languageSelector.addEventListener('change', () => {
    const selectedLanguage = languageSelector.value;
    codeDisplay.textContent = codeSnippets[selectedLanguage];
});

codeDisplay.textContent = codeSnippets[languageSelector.value];

const copyButton = document.getElementById('copy-button');
const codeElement = document.getElementById('code');

copyButton.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    copyButton.textContent = 'Code Copied!';
    setTimeout(() => {
        copyButton.textContent = 'Copy Code';
    }, 2000);
});
