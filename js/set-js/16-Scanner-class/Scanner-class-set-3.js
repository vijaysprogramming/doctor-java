const quizData = 
    
    [
{
    question: "61.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("3.14 2.71 1.61");
        double product = 1.0;
        while(scanner.hasNextDouble()) {
            product *= scanner.nextDouble();
        }
        System.out.println("Product: " + product);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Product: 13.9286824",
    d: "Product: 13.9286824 2.71 1.61",
    correct: "c",
},
{
    question: "62.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        System.out.println("You entered: " + sentence);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter a sentence: [User Input] You entered: [User Input]",
    d: "Enter a sentence: [User Input]\\nYou entered: [User Input]",
    correct: "c",
},
{
    question: "63.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("true false true false");
        while(scanner.hasNextBoolean()) {
            System.out.print(scanner.nextBoolean() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "true false true false",
    d: "true\\nfalse\\ntrue\\nfalse",
    correct: "c",
},
{
    question: "67.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("A B C D E");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().toLowerCase() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "a b c d e",
    d: "A B C D E",
    correct: "c",
},
{
    question: "68.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("123 456 789");
        while(scanner.hasNextInt()) {
            System.out.println(scanner.nextInt() + 10);
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "133 466 799",
    d: "123 456 789 10",
    correct: "c",
},
{
    question: "69.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("One Two Three Four");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().charAt(0) + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "O T T F",
    d: "One Two Three Four",
    correct: "c",
},
{
    question: "70.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("a b c d e");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().toUpperCase() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "A B C D E",
    d: "a b c d e",
    correct: "c",
},
{
    question: "71.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("3.14 2.71 1.61");
        double product = 1.0;
        while(scanner.hasNextDouble()) {
            product *= scanner.nextDouble();
        }
        System.out.println("Product: " + product);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Product: 13.9286824",
    d: "Product: 13.9286824 2.71 1.61",
    correct: "c",
},
{
    question: "72.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        System.out.println("You entered: " + sentence);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter a sentence: [User Input] You entered: [User Input]",
    d: "Enter a sentence: [User Input]\\nYou entered: [User Input]",
    correct: "c",
},
{
    question: "73.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("true false true false");
        while(scanner.hasNextBoolean()) {
            System.out.print(scanner.nextBoolean() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "true false true false",
    d: "true\\nfalse\\ntrue\\nfalse",
    correct: "c",
},
{
    question: "74.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("A B C D E");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().toLowerCase() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "a b c d e",
    d: "A B C D E",
    correct: "c",
},
{
    question: "75.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("123 456 789");
        while(scanner.hasNextInt()) {
            System.out.println(scanner.nextInt() + 10);
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "133 466 799",
    d: "123 456 789 10",
    correct: "c",
},
{
    question: "76.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("One Two Three Four");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().charAt(0) + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "O T T F",
    d: "One Two Three Four",
    correct: "c",
},





];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const codeEl = document.getElementById('code');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
let selectedAnswers = [];

loadQuiz();

function loadQuiz() {
deselectAnswers();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
codeEl.innerHTML = `<pre><code class="language-java">${currentQuizData.code}</code></pre>`;
a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;

hljs.highlightAll(); // Apply syntax highlighting
}

function deselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
let answer;

answerEls.forEach(answerEl => {
if (answerEl.checked) {
    answer = answerEl.id;
}
});

return answer;
}

submitBtn.addEventListener('click', () => {
const answer = getSelected();

if (answer) {
const currentQuizData = quizData[currentQuiz];
const correctAnswerText = document.getElementById(currentQuizData.correct + "_text").innerText;
const selectedAnswerText = document.getElementById(answer + "_text").innerText;

if (answer === currentQuizData.correct) {
    score++;
    alert(`Correct! You selected "${selectedAnswerText}".`);
} else {
    alert(`Incorrect! You selected "${selectedAnswerText}". The correct answer is "${correctAnswerText}".`);
}

selectedAnswers.push({
    question: currentQuizData.question,
    code: currentQuizData.code,
    selected: selectedAnswerText,
    correct: correctAnswerText,
    isCorrect: answer === currentQuizData.correct
});

currentQuiz++;

if (currentQuiz < quizData.length) {
    loadQuiz();
} else {
    showResults();
}
} else {
alert("Please select an answer!");
}
});

function showResults() {
quiz.innerHTML = `
<h2 style="text-align: center; font-size: 2rem;">Quiz Results</h2>
<p style="font-size: 1.5rem; text-align: center;">You answered ${score}/${quizData.length} questions correctly</p>
<div style="margin-top: 2rem; max-height: 400px; overflow-y: auto; padding: 1rem; border: 1px solid #ccc; border-radius: 10px;">
    <h3 style="text-align: center; margin-bottom: 2rem;">Detailed Summary</h3>
    <ul style="list-style-type: none; padding: 0; font-size: 1.2rem;">
        ${selectedAnswers.map((result, index) => `
            <li style="margin-bottom: 1.5rem;">
                <strong>Question ${index + 1}:</strong> ${result.question}<br>
                <pre><code class="language-java">${result.code}</code></pre>
                <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
            </li>
        `).join('')}
    </ul>
</div>
<div style="text-align: center; margin-top: 2rem;">
    <button onclick="location.reload()" style="font-size: 1.2rem; padding: 0.8rem 1.5rem; background-color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
</div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}