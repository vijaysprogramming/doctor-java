const quizData = [
{
    question: "61. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int num = 5;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 5:
            System.out.println("Five");
        case 10:
            System.out.println("Ten");
            break;
        default:
            System.out.println("Other value");
    }
}
}
`,
    a: 'One',
    b: 'Five',
    c: 'FiveTen',
    d: 'FiveTenOther value',
    correct: 'c',
},
{
    question: "62. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int x = 3;
    switch (x) {
        case 1:
            System.out.println("One");
            break;
        default:
            System.out.println("Default case");
        case 2:
            System.out.println("Two");
    }
}
}
`,
    a: 'One',
    b: 'Default case',
    c: 'Two',
    d: 'Default caseTwo',
    correct: 'd',
},
{
    question: "63. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int x = 5;
    switch (x) {
        case 1:
            System.out.println("One");
            break;
        case 5:
            System.out.println("Five");
        case 10:
            System.out.println("Ten");
            break;
        default:
            System.out.println("Other value");
    }
    System.out.println("Outside switch");
}
}
`,
    a: 'One<br>Outside switch',
    b: 'Five<br>Outside switch',
    c: 'FiveTen<br>Outside switch',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "64. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int num = 2;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
        case 3:
            System.out.println("Three");
        default:
            System.out.println("Default case");
    }
    System.out.println("Outside switch");
}
}
`,
    a: 'One<br>Outside switch',
    b: 'Two<br>Three<br>Default case<br>Outside switch',
    c: 'Two<br>Three<br>Outside switch',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "66. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Hello World 123 3.14 true\");\n        while(scanner.hasNext()) {\n            if(scanner.hasNextInt()) {\n                System.out.println(scanner.nextInt());\n            } else if(scanner.hasNextDouble()) {\n                System.out.println(scanner.nextDouble());\n            } else if(scanner.hasNextBoolean()) {\n                System.out.println(scanner.nextBoolean());\n            } else {\n                System.out.println(scanner.next());\n            }\n        }\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Hello World 123 3.14 true",
     d : "123 3.14 true",
     correct : "c",
},
{
     question : "67. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        int num = scanner.nextInt();\n        System.out.println(\"You entered: \" + num);\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Enter a number: [User Input] You entered: [User Input]",
     d : "Enter a number: [User Input]<br>You entered: [User Input]",
     correct : "c",
},
{
     question: "68. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"123 456 789\");\n        int sum = 0;\n        while(scanner.hasNextInt()) {\n            sum += scanner.nextInt();\n        }\n        System.out.println(\"Sum: \" + sum);\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Sum: 1368",
     d : "Sum: 45",
     correct : "d",
},
{
     question : "69. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Hello\\nWorld\\n123\");\n        while(scanner.hasNextLine()) {\n            System.out.println(scanner.nextLine());\n        }\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Hello World 123",
     d : "Hello\\nWorld\\n123",
     correct : "c",
},
{
     question : "70. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"3.14 2.71 1.61\");\n        double product = 1.0;\n        while(scanner.hasNextDouble()) {\n            product *= scanner.nextDouble();\n        }\n        System.out.println(\"Product: \" + product);\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Product: 13.9286824",
     d : "Product: 13.9286824 2.71 1.61",
     correct : "c",
},
{
     question : "71. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a sentence: \");\n        String sentence = scanner.nextLine();\n        System.out.println(\"You entered: \" + sentence);\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Enter a sentence: [User Input] You entered: [User Input]",
     d : "Enter a sentence: [User Input]<br>You entered: [User Input]",
     correct : "c",
},
{
     question : "72. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"true false true\");\n        while(scanner.hasNextBoolean()) {\n            System.out.println(scanner.nextBoolean());\n        }\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "true false true",
     d : "true\\nfalse\\ntrue",
     correct : "c",
},
{
     question : "73. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Java Programming\\nIs Fun\");\n        System.out.println(scanner.next());\n        System.out.println(scanner.nextLine());\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Java Programming<br>Is Fun",
     d : "Java\\nProgramming Is Fun",
     correct : "c",
},
{
     question : "74. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a word: \");\n        String word = scanner.next();\n        System.out.println(\"You entered: \" + word);\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "Enter a word: [User Input] You entered: [User Input]",
     d : "Enter a word: [User Input]<br>You entered: [User Input]",
    correct : "c",
},
{
     question : "75. What will be the output of the following code?",
     code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"A quick brown fox jumps\");\n        while(scanner.hasNext()) {\n            System.out.print(scanner.next().toUpperCase() + \" \");\n        }\n        scanner.close();\n    }\n}",
     a : "Compile-time error",
     b : "Runtime error",
     c : "A QUICK BROWN FOX JUMPS",
     d : "A quick brown fox jumps",
     correct : "c",
}

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
codeEl.innerHTML = `<pre><code class="language.java">${currentQuizData.code}</code></pre>`;
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
    <h2 style="text.align: center; font.size: 2rem;">Quiz Results</h2>
    <p style="font.size: 1.5rem; text.align: center;">You answered ${score}/${quizData.length} questions correctly</p>
    <div style="margin.top: 2rem; max.height: 400px; overflow.y: auto; padding: 1rem; border: 1px solid #ccc; border.radius: 10px;">
        <h3 style="text.align: center; margin.bottom: 2rem;">Detailed Summary</h3>
        <ul style="list.style.type: none; padding: 0; font.size: 1.2rem;">
            ${selectedAnswers.map((result, index) => `
                <li style="margin.bottom: 1.5rem;">
                    <strong>Question ${index + 1}:</strong> ${result.question}<br>
                    <pre><code class="language.java">${result.code}</code></pre>
                    <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                    ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
                </li>
            `).join('')}
        </ul>
    </div>
    <div style="text.align: center; margin.top: 2rem;">
        <button onclick="location.reload()" style="font.size: 1.2rem; padding: 0.8rem 1.5rem; background.color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
    </div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}
