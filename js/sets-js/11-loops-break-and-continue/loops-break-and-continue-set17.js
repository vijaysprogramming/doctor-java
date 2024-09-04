const quizData = [
   
    {
        "question": "481. What is the purpose of the label `middle` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "a"
    },
    {
        "question": "482. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 54",
        "b": "Total: 81",
        "c": "Total: 108",
        "d": "Total: 135",
        "correct": "b"
    },
    {
        "question": "483. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
        "a": "To skip the current iteration of the innermost loop when all three variables are odd.",
        "b": "To terminate the innermost loop when all three variables are odd.",
        "c": "To skip the current iteration of the middle loop when all three variables are odd.",
        "d": "To terminate the middle loop when all three variables are odd.",
        "correct": "a"
    },
    {
        "question": "484. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 18",
        "b": "Result: 24",
        "c": "Result: 30",
        "d": "Result: 36",
        "correct": "d"
    },
    {
        "question": "485. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "a"
    },
    {
        "question": "486. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: -1.5",
        "b": "Result: -0.75",
        "c": "Result: 0.0",
        "d": "Result: 0.75",
        "correct": "a"
    },
    {
        "question": "487. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b",
    },
    {
        "question": "488. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 72",
        "b": "Total: 90",
        "c": "Total: 108",
        "d": "Total: 126",
        "correct": "b",
    },
    {
        "question": "489. What is the purpose of the label `middle` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "a",
    },
    {
        "question": "490. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 60",
        "b": "Total: 90",
        "c": "Total: 120",
        "d": "Total: 150",
        "correct": "b",
    },
    {
        "question": "491. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
        "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
        "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
        "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
        "d": "To terminate the middle loop when all three variables meet the specified conditions.",
        "correct": "a",
    },
    {
        "question": "492. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 20) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 18",
        "b": "Result: 24",
        "c": "Result: 30",
        "d": "Result: 36",
        "correct": "d",
    },
    {
        "question": "493. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "a",
    },
    {
        "question": "494. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: -2.5",
        "b": "Result: -2.0",
        "c": "Result: -1.5",
        "d": "Result: -1.0",
        "correct": "b",
    },
   
    {
        "question": "495. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b",
    },
    
        {
            "question": "496. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 8) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
            "a": "Total: 72",
            "b": "Total: 90",
            "c": "Total: 108",
            "d": "Total: 126",
            "correct": "b",
        },
        {
            "question": "497. What is the purpose of the label `middle` in the code provided?",
            "a": "To identify the different levels of nesting in the loops.",
            "b": "To create separate instances of the loops with different initial values.",
            "c": "To identify the exit points of the loops when using `break` statements.",
            "d": "To differentiate between loops that use `break` statements and loops that don't.",
            "correct": "c",
        },
        {
            "question": "498. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
            "a": "Total: 60",
            "b": "Total: 90",
            "c": "Total: 120",
            "d": "Total: 150",
            "correct": "b",
        },
        {
            "question": "499. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
            "correct": "a",
        },
        {
            "question": "500. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 10) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: 18",
            "b": "Result: 24",
            "c": "Result: 30",
            "d": "Result: 36",
            "correct": "c",
        },
        {
            "question": "501. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
            "a": "To identify the different levels of nesting in the loops.",
            "b": "To create separate instances of the loops with different initial values.",
            "c": "To identify the exit points of the loops when using `break` statements.",
            "d": "To differentiate between loops that use `break` statements and loops that don't.",
            "correct": "c",
        },
        {
            "question": "502. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: -1.5",
            "b": "Result: -0.75",
            "c": "Result: 0.0",
            "d": "Result: 0.75",
            "correct": "b",
        },
        {
            "question": "503. What does the `break` statement in the code provided do?",
            "a": "Terminates the innermost loop where it is used.",
            "b": "Terminates the middle loop where it is used.",
            "c": "Terminates the outermost loop where it is used.",
            "d": "Skips the rest of the current iteration of the loop.",
            "correct": "a",
        },
        {
            "question": "504. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break outer;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
            "a": "Flag: true",
            "b": "Flag: false",
            "c": "none",
            "d": "not applicable",
            "correct": "b",
        },
        {
            "question": "505. What is the purpose of the `break` statement with label `outer` in the code provided?",
            "a": "To terminate the execution of the outermost loop.",
            "b": "To terminate the execution of the innermost loop.",
            "c": "To terminate the execution of the middle loop.",
            "d": "To skip the rest of the current iteration of the outermost loop.",
            "correct": "a",
        },
        {
            "question": "506. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
            "a": "Total: 72",
            "b": "Total: 90",
            "c": "Total: 108",
            "d": "Total: 126",
            "correct": "b",
        },
        {
            "question": "509. What is the purpose of the label `middle` in the code provided?",
            "a": "To identify the different levels of nesting in the loops.",
            "b": "To create separate instances of the loops with different initial values.",
            "c": "To identify the exit points of the loops when using `break` statements.",
            "d": "To differentiate between loops that use `break` statements and loops that don't.",
            "correct": "c",
        },
        {
            "question": "507. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
            "a": "Total: 60",
            "b": "Total: 90",
            "c": "Total: 120",
            "d": "Total: 150",
            "correct": "b",
        },
        {
            "question": "508. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
            "correct": "a",
        },
        {
            "question": "509. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: 18",
            "b": "Result: 24",
            "c": "Result: 30",
            "d": "Result: 36",
            "correct": "c",
        },
        {
            "question": "510. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
            "a": "To identify the different levels of nesting in the loops.",
            "b": "To create separate instances of the loops with different initial values.",
            "c": "To identify the exit points of the loops when using `break` statements.",
            "d": "To differentiate between loops that use `break` statements and loops that don't.",
            "correct": "c",
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