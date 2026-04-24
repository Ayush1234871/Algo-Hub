const codeSnippets = {
    python: `d = 256

def search(pat, txt, q):
    M = len(pat)
    N = len(txt)
    i = 0
    j = 0
    p = 0    # hash value for pattern
    t = 0    # hash value for txt
    h = 1

    for i in range(M-1):
        h = (h*d)%q

    for i in range(M):
        p = (d*p + ord(pat[i]))%q
        t = (d*t + ord(txt[i]))%q

    for i in range(N-M+1):
        if p==t:
            for j in range(M):
                if txt[i+j] != pat[j]:
                    break
                else: j+=1
            if j==M:
                print("Pattern found at index " + str(i))
        if i < N-M:
            t = (d*(t-ord(txt[i])*h) + ord(txt[i+M]))%q
            if t < 0:
                t = t+q

txt = "GEEKS FOR GEEKS"
pat = "GEEK"
q = 101
search(pat,txt,q)`,

    c: `#include <stdio.h>
#include <string.h>

#define d 256

void search(char pat[], char txt[], int q) {
    int M = strlen(pat);
    int N = strlen(txt);
    int i, j;
    int p = 0; // hash value for pattern
    int t = 0; // hash value for txt
    int h = 1;

    for (i = 0; i < M - 1; i++)
        h = (h * d) % q;

    for (i = 0; i < M; i++) {
        p = (d * p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }

    for (i = 0; i <= N - M; i++) {
        if (p == t) {
            for (j = 0; j < M; j++) {
                if (txt[i + j] != pat[j])
                    break;
            }
            if (j == M)
                printf("Pattern found at index %d \\n", i);
        }
        if (i < N - M) {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            if (t < 0)
                t = (t + q);
        }
    }
}

int main() {
    char txt[] = "GEEKS FOR GEEKS";
    char pat[] = "GEEK";
    int q = 101;
    search(pat, txt, q);
    return 0;
}`,

    cpp: `#include <bits/stdc++.h>
using namespace std;

#define d 256

void search(char pat[], char txt[], int q) {
    int M = strlen(pat);
    int N = strlen(txt);
    int i, j;
    int p = 0; // hash value for pattern
    int t = 0; // hash value for txt
    int h = 1;

    for (i = 0; i < M - 1; i++)
        h = (h * d) % q;

    for (i = 0; i < M; i++) {
        p = (d * p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }

    for (i = 0; i <= N - M; i++) {
        if (p == t) {
            for (j = 0; j < M; j++) {
                if (txt[i + j] != pat[j]) {
                    break;
                }
            }
            if (j == M)
                cout << "Pattern found at index " << i << endl;
        }

        if (i < N - M) {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            if (t < 0)
                t = (t + q);
        }
    }
}

int main() {
    char txt[] = "GEEKS FOR GEEKS";
    char pat[] = "GEEK";
    int q = 101;
    search(pat, txt, q);
    return 0;
}`,

    java: `public class RabinKarp {
    public final static int d = 256;

    static void search(String pat, String txt, int q) {
        int M = pat.length();
        int N = txt.length();
        int i, j;
        int p = 0; // hash value for pattern
        int t = 0; // hash value for txt
        int h = 1;

        for (i = 0; i < M - 1; i++)
            h = (h * d) % q;

        for (i = 0; i < M; i++) {
            p = (d * p + pat.charAt(i)) % q;
            t = (d * t + txt.charAt(i)) % q;
        }

        for (i = 0; i <= N - M; i++) {
            if (p == t) {
                for (j = 0; j < M; j++) {
                    if (txt.charAt(i + j) != pat.charAt(j))
                        break;
                }
                if (j == M)
                    System.out.println("Pattern found at index " + i);
            }

            if (i < N - M) {
                t = (d * (t - txt.charAt(i) * h) + txt.charAt(i + M)) % q;
                if (t < 0)
                    t = (t + q);
            }
        }
    }

    public static void main(String[] args) {
        String txt = "GEEKS FOR GEEKS";
        String pat = "GEEK";
        int q = 101;
        search(pat, txt, q);
    }
}`,

    javascript: `const d = 256;

function search(pat, txt, q) {
    let M = pat.length;
    let N = txt.length;
    let i, j;
    let p = 0; // hash value for pattern
    let t = 0; // hash value for txt
    let h = 1;

    for (i = 0; i < M - 1; i++)
        h = (h * d) % q;

    for (i = 0; i < M; i++) {
        p = (d * p + pat.charCodeAt(i)) % q;
        t = (d * t + txt.charCodeAt(i)) % q;
    }

    for (i = 0; i <= N - M; i++) {
        if (p == t) {
            for (j = 0; j < M; j++) {
                if (txt.charAt(i + j) != pat.charAt(j))
                    break;
            }
            if (j == M)
                console.log("Pattern found at index " + i);
        }

        if (i < N - M) {
            t = (d * (t - txt.charCodeAt(i) * h) + txt.charCodeAt(i + M)) % q;
            if (t < 0)
                t = (t + q);
        }
    }
}

let txt = "GEEKS FOR GEEKS";
let pat = "GEEK";
let q = 101;
search(pat, txt, q);`
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
