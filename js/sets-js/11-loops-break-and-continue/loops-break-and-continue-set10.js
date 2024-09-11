const quizData = [
    {
        "question": "271. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` and `b` are equal.",
        "d": "To check if `a` is less than `b`.",
        "correct": "b"
    },
    {
        "question": "272. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "a"
    },
    {
        "question": "273. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 6;\n        int q = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 4) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "5 4 4 5",
        "b": "5 4 5 4",
        "c": "5 4 5 5",
        "d": "6 4 6 5",
        "correct": "a"
    },
    {
        "question": "274. What is the purpose of the `p-- > 5 && q++ < 4` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 6;\n        int q = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 4) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 5 and `q` is less than 4.",
        "b": "To check if `p` is less than 5 or `q` is greater than 4.",
        "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 4.",
        "d": "To check if `p` is less than 5 and `q` is greater than 4.",
        "correct": "a"
    },
    {
        "question": "275. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
    },
    {
        "question": "276. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 3;\n        int s = 8;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 6) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
        "a": "6 7 5 6",
        "b": "6 8 4 7",
        "c": "7 7 3 6",
        "d": "7 8 3 7",
        "correct": "a"
    },
    {
        "question": "278. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        for (; i <= 3; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
        "a": "4 9 4",
        "b": "4 9 5",
        "c": "4 4 4",
        "d": "4 4 5",
        "correct": "b"
    },
    {
        "question": "279. What is the purpose of the `i++` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        for (; i <= 3; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
        "a": "To increment `i` by 1 after using it.",
        "b": "To increment `i` by 1 before using it.",
        "c": "To decrement `i` by 1 before using it.",
        "d": "To decrement `i` by 1 after using it.",
        "correct": "a"
    },
    {
        "question": "280. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "b"
    },
    {
        "question": "281. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "6 7 8",
        "b": "5 6 7",
        "c": "6 6 6",
        "d": "5 5 5",
        "correct": "b"
    },
    {
        "question": "282. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` and `b` are equal.",
        "d": "To check if `a` is less than `b`.",
        "correct": "b"
    },
    {
        "question": "283. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "a"
    },
    {
        "question": "284. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 5;\n        int q = 4;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 4 && q++ < 5) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "4 5 4 5",
        "b": "4 4 5 5",
        "c": "5 5 4 5",
        "d": "5 4 5 4",
        "correct": "a"
    },
    {
        "question": "285. What is the purpose of the `p-- > 4 && q++ < 5` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 5;\n        int q = 4;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 4 && q++ < 5) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 4 and `q` is less than 5.",
        "b": "To check if `p` is less than 4 or `q` is greater than 5.",
        "c": "To check if `p` is greater than or equal to 4 and `q` is less than or equal to 5.",
        "d": "To check if `p` is less than 4 and `q` is greater than 5.",
        "correct": "a"
    },
    {
        "question": "286. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 4; i++) {\n            // loop body\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
    },
        {
            "question": "287. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int r = 2;\n        int s = 7;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 6) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
            "a": "6 6 4 6",
            "b": "6 7 4 5",
            "c": "7 7 3 6",
            "d": "7 8 3 5",
            "correct": "a"
        },
            {
                "question": "288. What will be the output of the following code?",
                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 2; j++) {\n                for (int k = 1; k <= 2; k++) {\n                    for (int l = 1; l <= 2; l++) {\n                        System.out.print(i * j * k * l + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                "a": "1 2 2 4 2 4 4 8",
                "b": "1 2 4 8 2 4 8 16",
                "c": "1 2 2 4 1 2 2 4",
                "d": "1 2 4 8 1 2 4 8",
                "correct": "d"
            },
            {
                "question": "289. What is the purpose of the i * j * k * l statement inside the nested loops in the code provided?",
                "a": "To calculate the sum of i, j, k, and l.",
                "b": "To calculate the product of i, j, k, and l.",
                "c": "To calculate the difference between i, j, k, and l.",
                "d": "To calculate the quotient of i, j, k, and l.",
                "correct": "b"
            },
            {
                "question": "290. In the code provided, how many times will the innermost loop iterate?",
                "a": "2 times",
                "b": "4 times",
                "c": "8 times",
                "d": "16 times",
                "correct": "d"
            },
            {
                "question": "300. In the code provided, how many times will the if block inside the innermost loop be executed?",
                "a": "1 time",
                "b": "2 times",
                "c": "3 times",
                "d": "4 times",
                "correct": "d"
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