const quizData = [
    {
        "question": "331. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "332. What is the purpose of the `i * j * k < 10` condition in the code provided?",
        "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
        "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
        "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
        "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
        "correct": "a"
    },
    {
        "question": "333. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
        "a": "A B C D E F G H I",
        "b": "A B C D E F G H J",
        "c": "A B C D E F G H K",
        "d": "A B C D E F G H L",
        "correct": "a"
    },
    {
        "question": "334. In the code provided, how many times will the innermost loop iterate?",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "d"
    },
    {
        "question": "335. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "a"
    },
    {
        "question": "336. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k > 10) {\n                        total++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 10",
        "b": "Total: 20",
        "c": "Total: 30",
        "d": "Total: 40",
        "correct": "b"
    },
    {
        "question": "337. What is the purpose of the `i * j * k > 10` condition in the code provided?",
        "a": "To check if the product of `i`, `j`, and `k` is greater than 10.",
        "b": "To check if the product of `i`, `j`, and `k` is less than 10.",
        "c": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
        "d": "To check if the sum of `i`, `j`, and `k` is less than 10.",
        "correct": "a"
    },
    {
        "question": "338. In the code provided, what is the data type of the `total` variable?",
        "a": "byte",
        "b": "short",
        "c": "int",
        "d": "long",
        "correct": "c"
    },
    {
        "question": "339. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    result += i / j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 1.3666666666666667",
        "b": "Result: 1.511111111111111",
        "c": "Result: 1.6666666666666667",
        "d": "Result: 1.8222222222222222",
        "correct": "a"
    },
    {
        "question": "340. In the code provided, what is the data type of the `result` variable?",
        "a": "float",
        "b": "double",
        "c": "int",
        "d": "long",
        "correct": "b"
    },
    {
        "question": "341. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "correct": "b"
    },
    {
        "question": "342. What is the purpose of the `i * j * k < 10` condition in the code provided?",
        "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
        "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
        "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
        "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
        "correct": "a"
    },
    {
        "question": "343. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
        "a": "A B C D E F G H I",
        "b": "A B C D E F G H J",
        "c": "A B C D E F G H K",
        "d": "A B C D E F G H L",
        "correct": "a"
    },
    {
        "question": "345. In the code provided, how many times will the innermost loop iterate?",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "d"
    },
    {
        "question": "346. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "a"
    },
    
        {
            "question": "347. What will be the output of the following code?",
            "code": "class P {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k % 2 == 0) {\n                        sum += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Sum: \" + sum);\n    }\n}",
            "a": "Sum: 40",
            "b": "Sum: 60",
            "c": "Sum: 80",
            "d": "Sum: 100",
            "correct": "b"
        },
        {
            "question": "348. What is the purpose of the `i * j * k % 2 == 0` condition in the code provided?",
            "a": "To check if the product of `i`, `j`, and `k` is even.",
            "b": "To check if the product of `i`, `j`, and `k` is odd.",
            "c": "To check if the sum of `i`, `j`, and `k` is even.",
            "d": "To check if the sum of `i`, `j`, and `k` is odd.",
            "correct": "a"
        },
        {
            "question": "349. In the code provided, what is the data type of the `sum` variable?",
            "a": "byte",
            "b": "short",
            "c": "int",
            "d": "long",
            "correct": "c"
        },
        {
            "question": "350. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (float i = 1.0f; i <= 5.0f; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    result += (i + j + k) / 3.0;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: 30.0",
            "b": "Result: 40.0",
            "c": "Result: 50.0",
            "d": "Result: 60.0",
            "correct": "b"
        },
        {
            "question": "351. In the code provided, what is the data type of the `result` variable?",
            "a": "float",
            "b": "double",
            "c": "int",
            "d": "long",
            "correct": "b"
        },
        {
            "question": "352. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
            "a": "Flag: true",
            "b": "Flag: false",
            "correct": "a"
        },
        {
            "question": "353. What is the purpose of the `i * j * k < 10` condition in the code provided?",
            "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
            "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
            "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
            "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
            "correct": "a"
        },
        {
            "question": "354. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
            "a": "A B C D E F G H I",
            "b": "A B C D E F G H J",
            "c": "A B C D E F G H K",
            "d": "A B C D E F G H L",
            "correct": "a"
        },
        {
            "question": "356. In the code provided, how many times will the innermost loop iterate?",
            "a": "2 times",
            "b": "3 times",
            "c": "4 times",
            "d": "5 times",
            "correct": "c"
        },
        {
            "question": "357. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
            "a": "1 time",
            "b": "2 times",
            "c": "3 times",
            "d": "4 times",
            "correct": "d"
        },
        {
            "question": "358. What will be the output of the following code?",
            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % j == 0 && j % k == 0) {\n                        result += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: 15",
            "b": "Result: 33",
            "c": "Result: 57",
            "d": "Result: 75",
            "correct": "b"
        },
        {
            "question": "359. What is the purpose of the `i % j == 0 && j % k == 0` condition in the code provided?",
            "a": "To check if both `i` is divisible by `j` and `j` is divisible by `k`.",
            "b": "To check if either `i` is divisible by `j` or `j` is divisible by `k`.",
            "c": "To check if both `i` is divisible by `j` or `j` is divisible by `k`.",
            "d": "To check if either `i` is divisible by `j` and `j` is divisible by `k`.",
            "correct": "a"
        },
        {
            "question": "360. What is the purpose of the `result` variable in the code provided?",
            "a": "To store the sum of `i`, `j`, and `k` whenever the condition is met.",
            "b": "To store the product of `i`, `j`, and `k` whenever the condition is met.",
            "c": "To store the quotient of `i`, `j`, and `k` whenever the condition is met.",
            "d": "To store the difference of `i`, `j`, and `k` whenever the condition is met.",
            "correct": "a"
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