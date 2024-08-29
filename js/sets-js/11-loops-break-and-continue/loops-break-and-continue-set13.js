const quizData = [
    {
        "question": "361. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double total = 0.0;\n        for (float i = 1.0f; i <= 3.0f; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    total += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 13.6",
        "b": "Total: 15.2",
        "c": "Total: 16.8",
        "d": "Total: 18.4",
        "correct": "a"
    },
    {
        "question": "362. In the code provided, what is the data type of the `total` variable?",
        "a": "float",
        "b": "double",
        "c": "int",
        "d": "long",
        "correct": "b"
    },
    {
        "question": "363. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int counter = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k % 3 == 0) {\n                        counter++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Counter: \" + counter);\n    }\n}",
        "a": "Counter: 9",
        "b": "Counter: 12",
        "c": "Counter: 15",
        "d": "Counter: 18",
        "correct": "b"
    },
    {
        "question": "364. What is the purpose of the `i * j * k % 3 == 0` condition in the code provided?",
        "a": "To check if the product of `i`, `j`, and `k` is divisible by 3.",
        "b": "To check if the product of `i`, `j`, and `k` is not divisible by 3.",
        "c": "To check if the sum of `i`, `j`, and `k` is divisible by 3.",
        "d": "To check if the sum of `i`, `j`, and `k` is not divisible by 3.",
        "correct": "a"
    },
    {
        "question": "365. What is the purpose of the `counter` variable in the code provided?",
        "a": "To count the number of times the `if` condition is true.",
        "b": "To count the number of times the `if` condition is false.",
        "c": "To store the product of `i`, `j`, and `k` whenever the condition is met.",
        "d": "To store the sum of `i`, `j`, and `k` whenever the condition is met.",
        "correct": "a"
    },
    {
        "question": "366. What is the purpose of `(char) (character + i)` in the code provided?",
        "a": "To print the character `character` concatenated with `i`.",
        "b": "To print the character after incrementing its ASCII value by `i`.",
        "c": "To print the character before incrementing its ASCII value by `i`.",
        "d": "To print the character after decrementing its ASCII value by `i`.",
        "correct": "b"
    },
    {
        "question": "367. In the code provided, how many times will the innermost loop iterate?",
        "a": "3 times",
        "b": "6 times",
        "c": "9 times",
        "d": "12 times",
        "correct": "d"
    },
    {
        "question": "368. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 || j % 2 == 0 || k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 84",
        "b": "Total: 99",
        "c": "Total: 114",
        "d": "Total: 129",
        "correct": "b"
    },
    {
        "question": "369. What is the purpose of the `i % 2 == 0 || j % 2 == 0 || k % 2 == 0` condition in the code provided?",
        "a": "To check if any of `i`, `j`, or `k` is even.",
        "b": "To check if all of `i`, `j`, and `k` are even.",
        "c": "To check if any of `i`, `j`, or `k` is odd.",
        "d": "To check if all of `i`, `j`, and `k` are odd.",
        "correct": "a"
    },
    {
        "question": "370. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 30.75",
        "b": "Result: 37.5",
        "c": "Result: 45.0",
        "d": "Result: 52.5",
        "correct": "a"
    },
    {
        "question": "371. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (!(i * j * k % 2 == 0)) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "372. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "a"
    },
    {
        "question": "373. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
        "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
        "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
        "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
        "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
        "correct": "a"
    },
    {
        "question": "374. In the code provided, how many times will the innermost loop iterate?",
        "a": "9 times",
        "b": "12 times",
        "c": "15 times",
        "d": "18 times",
        "correct": "d"
    },
    {
        "question": "375. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "6 times",
        "b": "9 times",
        "c": "12 times",
        "d": "15 times",
        "correct": "c"
    },
    {
        "question": "376. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0 && (j + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 44",
        "b": "Total: 61",
        "c": "Total: 80",
        "d": "Total: 101",
        "correct": "b"
    },
    {
        "question": "377. What is the purpose of the `(i + j) % 2 == 0 && (j + k) % 2 != 0` condition in the code provided?",
        "a": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is odd.",
        "b": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is even.",
        "c": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is even.",
        "d": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is odd.",
        "correct": "a"
    },
    {
        "question": "378. What is the purpose of `(char) (character + i)` in the code provided?",
        "a": "To print the character `character` concatenated with `i`.",
        "b": "To print the character after incrementing its ASCII value by `i`.",
        "c": "To print the character before incrementing its ASCII value by `i`.",
        "d": "To print the character after decrementing its ASCII value by `i`.",
        "correct": "b"
    },
    {
        "question": "379. In the code provided, how many times will the innermost loop iterate?",
        "a": "3 times",
        "b": "6 times",
        "c": "9 times",
        "d": "12 times",
        "correct": "c"
    },
    {
        "question": "380. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 || j % 2 == 0 || k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 84",
        "b": "Total: 99",
        "c": "Total: 114",
        "d": "Total: 129",
        "correct": "d"
    },
    {
        "question": "381. What is the purpose of the `i % 2 == 0 || j % 2 == 0 || k % 2 == 0` condition in the code provided?",
        "a": "To check if any of `i`, `j`, or `k` is even.",
        "b": "To check if all of `i`, `j`, and `k` are even.",
        "c": "To check if any of `i`, `j`, or `k` is odd.",
        "d": "To check if all of `i`, `j`, and `k` are odd.",
        "correct": "a"
    },
    {
        "question": "382. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 30.75",
        "b": "Result: 37.5",
        "c": "Result: 45.0",
        "d": "Result: 52.5",
        "correct": "d"
    },
    {
        "question": "383. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (!(i * j * k % 2 == 0)) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "384. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "b"
    },
    {
        "question": "385. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
        "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
        "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
        "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
        "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
        "correct": "a"
    },
    {
        "question": "386. In the code provided, how many times will the innermost loop iterate?",
        "a": "9 times",
        "b": "12 times",
        "c": "15 times",
        "d": "18 times",
        "correct": "d"
    },
    {
        "question": "387. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "6 times",
        "b": "9 times",
        "c": "12 times",
        "d": "15 times",
        "correct": "d"
    },
    {
        "question": "386. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0 && (j + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 44",
        "b": "Total: 61",
        "c": "Total: 80",
        "d": "Total: 101",
        "correct": "b"
    },
    {
        "question": "387. What is the purpose of the `(i + j) % 2 == 0 && (j + k) % 2 != 0` condition in the code provided?",
        "a": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is odd.",
        "b": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is even.",
        "c": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is even.",
        "d": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is odd.",
        "correct": "a"
    },
    {
        "question": "388. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 3; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 && j % 2 != 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 3.75",
        "b": "Result: 6.0",
        "c": "Result: 9.0",
        "d": "Result: 11.25",
        "correct": "a"
    },
    {
        "question": "389. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 == 0) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "correct": "b"
    },
    {
        "question": "390. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "b"
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