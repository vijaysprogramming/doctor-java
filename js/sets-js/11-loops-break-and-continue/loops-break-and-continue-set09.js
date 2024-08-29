const quizData = [
    {
        "question": "241. In the code provided, how many times will the `else` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "1 time",
        "correct": "b"
    },
    {
        "question": "242. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
        "a": "3 4",
        "b": "6 5",
        "c": "4 5",
        "d": "5 6",
        "correct": "a"
    },
    {
        "question": "243. What is the purpose of the `p < 5 || q > 5` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is less than 5 or `q` is greater than 5.",
        "b": "To check if `p` is greater than 5 or `q` is less than 5.",
        "c": "To check if `p` is equal to 5 or `q` is greater than 5.",
        "d": "To check if `p` is less than or equal to 5 or `q` is less than 5.",
        "correct": "a"
    },
    {
        "question": "244. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "b"
    },
    {
        "question": "245. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "8 7 6",
        "b": "5 6 7",
        "c": "8 7 6 5",
        "d": "5 6 7 8",
        "correct": "a"
    },
    {
        "question": "246. What is the purpose of the `a % 2 == 0 && b % 2 != 0` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is even and `b` is odd.",
        "b": "To check if `a` is odd and `b` is even.",
        "c": "To check if both `a` and `b` are even.",
        "d": "To check if both `a` and `b` are odd.",
        "correct": "a"
    },
    {
        "question": "247. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "b"
    },
    {
        "question": "248. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 5) {\n            i++;\n        }\n    }\n}",
        "a": "5 times",
        "b": "6 times",
        "c": "4 times",
        "d": "1 time",
        "correct": "a"
    },
    {
        "question": "249. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "7 6 5",
        "b": "8 7 6",
        "c": "7 6 6",
        "d": "8 7 7",
        "correct": "a"
    },
    {
        "question": "250. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` is equal to `b`.",
        "d": "To check if `a` is less than `b`.",
        "correct": "a"
    },
    {
        "question": "251. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "252. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 10;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "9 8 8 9",
        "b": "8 8 9 9",
        "c": "9 9 8 8",
        "d": "8 8 9 8",
        "correct": "a"
    },
    {
        "question": "253. What is the purpose of the `p-- > 5 && q++ < 8` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 10;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 5 and `q` is less than 8.",
        "b": "To check if `p` is less than 5 or `q` is greater than 8.",
        "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 8.",
        "d": "To check if `p` is less than 5 and `q` is greater than 8.",
        "correct": "a"
    },
    {
        "question": "254. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 3) {\n            i++;\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "255. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 5;\n        int s = 8;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 7) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
        "a": "7 7 7 7",
        "b": "7 6 7 6",
        "c": "6 7 5 7",
        "d": "6 8 7 6",
        "correct": "b"
    },
    {
        "question": "256. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 3;\n        for (; i <= 6; i++) {\n            System.out.print(i * i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "9 16 25 36 7",
        "b": "9 16 25 36 8",
        "c": "9 16 25 36 9",
        "d": "9 16 25 36 10",
        "correct": "b"
    },
    {
        "question": "257. What is the purpose of the `i++` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 3;\n        for (; i <= 6; i++) {\n            System.out.print(i * i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "To increment `i` by 1 before using it.",
        "b": "To increment `i` by 1 after using it.",
        "c": "To decrement `i` by 1 before using it.",
        "d": "To decrement `i` by 1 after using it.",
        "correct": "b"
    },
    {
        "question": "258. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
        "a": "3 times",
        "b": "4 times",
        "c": "5 times",
        "d": "6 times",
        "correct": "b"
    },
    {
        "question": "259. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "7 8 9",
        "b": "8 7 6",
        "c": "7 7 7",
        "d": "8 8 8",
        "correct": "a"
    },
    {
        "question": "260. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` and `b` are equal.",
        "d": "To check if `a` is less than `b`.",
        "correct": "a"
    },
    {
        "question": "261. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "262. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 9;\n        int q = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "8 6 7 7",
        "b": "8 5 7 6",
        "c": "8 6 6 7",
        "d": "8 7 6 7",
        "correct": "a"
    },
    {
        "question": "263. What is the purpose of the `p-- > 5 && q++ < 8` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 9;\n        int q = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 5 and `q` is less than 8.",
        "b": "To check if `p` is less than 5 or `q` is greater than 8.",
        "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 8.",
        "d": "To check if `p` is less than 5 and `q` is greater than 8.",
        "correct": "a"
    },
    {
        "question": "264. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
    },
    {
        "question": "265. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 4;\n        int s = 7;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 7) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
        "a": "6 7 5 6",
        "b": "6 6 4 6",
        "c": "5 7 3 7",
        "d": "5 8 3 7",
        "correct": "a"
    },
    {
        "question": "267. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        for (; i <= 4; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
        "a": "1 4 9 16 5",
        "b": "1 4 9 16 6",
        "c": "1 4 9 16 7",
        "d": "1 4 9 16 8",
        "correct": "b"
    },
    {
        "question": "268. What is the purpose of the `i++` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        for (; i <= 4; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
        "a": "To increment `i` by 1 after using it.",
        "b": "To increment `i` by 1 before using it.",
        "c": "To decrement `i` by 1 before using it.",
        "d": "To decrement `i` by 1 after using it.",
        "correct": "a"
    },
    {
        "question": "269. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        while (i < 5) {\n            i++;\n        }\n    }\n}",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "b"
    },
    {
        "question": "270. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "6 7 8",
        "b": "5 6 7",
        "c": "6 6 6",
        "d": "5 5 5",
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