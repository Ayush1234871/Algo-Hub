const codeSnippets = {
    python: `import random

    def monte_carlo_pi(num_samples):
        inside_circle = 0
    
        for _ in range(num_samples):
            x = random.uniform(0, 1)
            y = random.uniform(0, 1)
    
            distance = x**2 + y**2
            if distance <= 1:
                inside_circle += 1
    
        return (inside_circle / num_samples) * 4
    
    # Example usage:
    num_samples = 1000000
    estimated_pi = monte_carlo_pi(num_samples)
    print(f"Estimated value of pi using {num_samples} samples: {estimated_pi}")
    
`,

    c: `#include <stdio.h>
    #include <stdlib.h>
    #include <time.h>
    
    double monte_carlo_pi(int num_samples) {
        int inside_circle = 0;
    
        for (int i = 0; i < num_samples; ++i) {
            double x = (double)rand() / RAND_MAX;
            double y = (double)rand() / RAND_MAX;
    
            double distance = x * x + y * y;
            if (distance <= 1) {
                inside_circle++;
            }
        }
    
        return (double)inside_circle / num_samples * 4;
    }
    
    int main() {
        srand((unsigned)time(NULL));
    
        int num_samples = 1000000;
        double estimated_pi = monte_carlo_pi(num_samples);
        printf("Estimated value of pi using %d samples: %f\n", num_samples, estimated_pi);
    
        return 0;
    }
    
`,

    cpp: `#include <iostream>
    #include <cstdlib>
    #include <ctime>
    
    double monte_carlo_pi(int num_samples) {
        int inside_circle = 0;
    
        for (int i = 0; i < num_samples; ++i) {
            double x = (double)rand() / RAND_MAX;
            double y = (double)rand() / RAND_MAX;
    
            double distance = x * x + y * y;
            if (distance <= 1) {
                inside_circle++;
            }
        }
    
        return (double)inside_circle / num_samples * 4;
    }
    
    int main() {
        srand((unsigned)time(NULL));
    
        int num_samples = 1000000;
        double estimated_pi = monte_carlo_pi(num_samples);
        std::cout << "Estimated value of pi using " << num_samples << " samples: " << estimated_pi << std::endl;
    
        return 0;
    }
    
`,

    java: `import java.util.Random;

    public class MonteCarloPi {
    
        public static double monteCarloPi(int numSamples) {
            int insideCircle = 0;
    
            Random random = new Random();
            for (int i = 0; i < numSamples; ++i) {
                double x = random.nextDouble();
                double y = random.nextDouble();
    
                double distance = x * x + y * y;
                if (distance <= 1) {
                    insideCircle++;
                }
            }
    
            return (double) insideCircle / numSamples * 4;
        }
    
        public static void main(String[] args) {
            int numSamples = 1000000;
            double estimatedPi = monteCarloPi(numSamples);
            System.out.printf("Estimated value of pi using %d samples: %f%n", numSamples, estimatedPi);
        }
    }
    
    
`,

    javascript: `function monteCarloPi(numSamples) {
        let insideCircle = 0;
    
        for (let i = 0; i < numSamples; ++i) {
            const x = Math.random();
            const y = Math.random();
    
            const distance = x * x + y * y;
            if (distance <= 1) {
                insideCircle++;
            }
        }
    
        return (insideCircle / numSamples) * 4;
    }
    
    const numSamples = 1000000;
    const estimatedPi = monteCarloPi(numSamples);
    console.log(\`Estimated value of pi using \${numSamples} samples: \${estimatedPi}\`);
    
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
