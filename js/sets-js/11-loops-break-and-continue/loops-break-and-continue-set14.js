const quizData = [
    {
        "question": "390. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "b"
    },
    {
        "question": "391. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
        "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
        "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
        "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
        "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
        "correct": "a"
    },
    {
        "question": "392. In the code provided, how many times will the innermost loop iterate?",
        "a": "12 times",
        "b": "15 times",
        "c": "18 times",
        "d": "21 times",
        "correct": "c"
    },
    {
        "question": "393. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "6 times",
        "b": "9 times",
        "c": "12 times",
        "d": "15 times",
        "correct": "d"
    },
    {
        "question": "394. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if ((i + j) % 2 != 0 && (j + k) % 2 == 0 && (i + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 240",
        "b": "Total: 265",
        "c": "Total: 290",
        "d": "Total: 315",
        "correct": "b"
    },
    {
        "question": "395. What is the purpose of the `(i + j) % 2 != 0 && (j + k) % 2 == 0 && (i + k) % 2 != 0` condition in the code provided?",
        "a": "To check if the sum of `i` and `j` is odd, the sum of `j` and `k` is even, and the sum of `i` and `k` is odd.",
        "b": "To check if the sum of `i` and `j` is even, the sum of `j` and `k` is odd, and the sum of `i` and `k` is even.",
        "c": "To check if the sum of `i` and `j` is odd, the sum of `j` and `k` is odd, and the sum of `i` and `k` is odd.",
        "d": "To check if the sum of `i` and `j` is even, the sum of `j` and `k` is even, and the sum of `i` and `k` is even.",
        "correct": "a"
    },
    {
        "question": "396. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 6; i++) {\n            for (double j = 2.0; j <= 7.0; j++) {\n                for (int k = 3; k <= 8; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 3.75",
        "b": "Result: 5.0",
        "c": "Result: 6.75",
        "d": "Result: 9.0",
        "correct": "b"
    },
    {
        "question": "397. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if ((i + j) % 3 == 0 && (j + k) % 3 != 0 && (i + k) % 3 == 0) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "398. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 6; i++) {\n            for (int j = 2; j <= 7; j++) {\n                for (int k = 3; k <= 8; k++) {\n                    if (i % 3 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "b"
    },
    {
        "question": "399. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
        "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
        "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
        "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
        "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
        "correct": "a"
    },
    {
        "question": "400. In the code provided, how many times will the innermost loop iterate?",
        "a": "18 times",
        "b": "21 times",
        "c": "24 times",
        "d": "27 times",
        "correct": "d"
    },
    {
        "question": "401. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "9 times",
        "b": "12 times",
        "c": "15 times",
        "d": "18 times",
        "correct": "b"
    },
    {
        "question": "402. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0) {\n                    }\n                    if ((j + k) % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 56",
        "b": "Total: 68",
        "c": "Total: 80",
        "d": "Total: 92",
        "correct": "c"
    },
    {
        "question": "403. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 3; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        result += i * j / k;\n                    } else {\n                        break;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 0.0",
        "b": "Result: 2.0",
        "c": "Result: 4.0",
        "d": "Result: 6.0",
        "correct": "a"
    },
    {
        "question": "404. What does the `break` statement in the code provided do?",
        "a": "It terminates the innermost loop and continues execution with the next statement after the loop.",
        "b": "It terminates the outermost loop and continues execution with the next statement after the loop.",
        "c": "It terminates all the loops and continues execution with the next statement after the loops.",
        "d": "It terminates the current method and continues execution with the next statement after the method.",
        "correct": "a"
    },
    {
        "question": "405. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k > 10) {\n                        break outer;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 15",
        "b": "Total: 36",
        "c": "Total: 55",
        "d": "Total: 66",
        "correct": "a"
    },
    {
        "question": "406. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "c"
    },
    {
        "question": "407. In the code provided, what is the purpose of the `if (j == 5) { break; }` statement?",
        "a": "To terminate the innermost loop when `j` is equal to 5.",
        "b": "To terminate the middle loop when `j` is equal to 5.",
        "c": "To skip the current iteration of the innermost loop when `j` is equal to 5.",
        "d": "To skip the current iteration of the middle loop when `j` is equal to 5.",
        "correct": "b"
    },
    {
        "question": "408. In the code provided, what is the purpose of the `if (i == 3) { break; }` statement?",
        "a": "To terminate the innermost loop when `i` is equal to 3.",
        "b": "To terminate the middle loop when `i` is equal to 3.",
        "c": "To skip the current iteration of the innermost loop when `i` is equal to 3.",
        "d": "To skip the current iteration of the middle loop when `i` is equal to 3.",
        "correct": "b"
    },
    {
        "question": "409. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 5; k++) {\n                    if (i * j * k == 24) {\n                        break outer;\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 96",
        "b": "Total: 132",
        "c": "Total: 180",
        "d": "Total: 216",
        "correct": "b"
    },
    {
        "question": "410. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "c"
    },
    {
        "question": "411. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                    }\n                    if (i % 2 != 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 5.5",
        "b": "Result: 7.0",
        "c": "Result: 9.5",
        "d": "Result: 11.0",
        "correct": "b"
    },
    {
        "question": "412. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        total += i + j + k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 60",
        "b": "Total: 96",
        "c": "Total: 120",
        "d": "Total: 156",
        "correct": "b"
    },
    {
        "question": "418. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H I",
        "b": "D E F H I J K",
        "c": "E F G I J K L",
        "d": "G H I K L M N",
        "correct": "a"
    },
    {
        "question": "419. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
        "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
        "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
        "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
        "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
        "correct": "a"
    },
    {
        "question": "420. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 == 0 && k % 2 == 0) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 144",
        "b": "Total: 192",
        "c": "Total: 240",
        "d": "Total: 288",
        "correct": "c"
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