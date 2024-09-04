const quizData = [
    {
        "question": "211. What is the purpose of the `i % 2 == 0` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
        "a": "To check if `i` is an even number.",
        "b": "To check if `i` is an odd number.",
        "c": "To check if `i` is divisible by 2.",
        "d": "To check if `i` is greater than 2.",
        "correct": "a"
    },
    {
        "question": "212. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "b"
    },
    {
        "question": "213. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "5 4 3 2",
        "b": "6 5 4 3",
        "c": "5 5 5 5",
        "d": "4 3 3 3",
        "correct": "a"
    },
    {
        "question": "214. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` and `b` are equal.",
        "d": "To check if `a` is less than `b`.",
        "correct": "a"
    },
    {
        "question": "215. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
    },
    {
        "question": "216. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        int y = 6;\n        \n        for (int i = 0; i < 4; i++) {\n            if (x < y) {\n                x *= 2;\n            } else {\n                y /= 2;\n            }\n        }\n        \n        System.out.println(x + \" \" + y);\n    }\n}",
        "a": "16 6",
        "b": "2 3",
        "c": "8 6",
        "d": "4 3",
        "correct": "c"
    },
    {
        "question": "217. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "0 1 2 3 4 5",
        "b": "0 1 2 3 4",
        "c": "1 2 3 4 5",
        "d": "0 1 2 3 4 6",
        "correct": "b"
    },
    {
        "question": "218. What is the purpose of the `i++` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "To increment `i` by 1 before using it.",
        "b": "To increment `i` by 1 after using it.",
        "c": "To decrement `i` by 1 before using it.",
        "d": "To decrement `i` by 1 after using it.",
        "correct": "b"
    },
    {
        "question": "219. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "5 times",
        "b": "6 times",
        "c": "4 times",
        "d": "1 time",
        "correct": "a"
    },
    {
        "question": "220. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
        "a": "11 19 12 18 13 17",
        "b": "11 20 12 19 13 18",
        "c": "11 20 12 19 14 18",
        "d": "11 21 12 20 13 19",
        "correct": "a"
    },
    {
        "question": "220. What is the purpose of the `a++ > 10 || b-- < 20` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than 10 or `b` is less than 20.",
        "b": "To check if `a` is less than or equal to 10 and `b` is greater than or equal to 20.",
        "c": "To check if `a` is greater than 10 and `b` is less than 20.",
        "d": "To check if `a` is less than 10 or `b` is greater than 20.",
        "correct": "a"
    },
    {
        "question": "221. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "222. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "7 8 9",
        "b": "6 7 8",
        "c": "7 8 10",
        "d": "7 8 11",
        "correct": "a"
    },
    {
        "question": "223. What is the purpose of the `p > 10 && q < 5` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 10 and `q` is less than 5.",
        "b": "To check if `p` is less than or equal to 10 and `q` is greater than or equal to 5.",
        "c": "To check if `p` is greater than 10 or `q` is less than 5.",
        "d": "To check if `p` is less than 10 or `q` is greater than 5.",
        "correct": "a"
    },
    {
        "question": "224. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "225. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r > 15 || s > 40) {\n                System.out.print(r-- + \" \");\n            } else {\n                System.out.print(s++ + \" \");\n            }\n        }\n    }\n}",
        "a": "19 18 17 16",
        "b": "20 19 18 17",
        "c": "30 31 32 33",
        "d": "31 32 33 34",
        "correct": "b"
    },
    {
        "question": "226. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "10 9 8 7 6 5",
        "b": "10 9 8 7 6",
        "c": "9 8 7 6 5",
        "d": "10 9 8 7",
        "correct": "b"
    },
    {
        "question": "227. What is the purpose of the `i--` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "To increment `i` by 1 after using it.",
        "b": "To decrement `i` by 1 before using it.",
        "c": "To increment `i` by 1 before using it.",
        "d": "To decrement `i` by 1 after using it.",
        "correct": "d"
    },
    {
        "question": "228. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
        "a": "5 times",
        "b": "6 times",
        "c": "4 times",
        "d": "1 time",
        "correct": "b"
    },
    {
        "question": "229. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "10 11 12",
        "b": "9 10 11",
        "c": "8 9 10",
        "d": "7 8 9",
        "correct": "d"
    },
    {
        "question": "230. What is the purpose of the `a > b` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `a` is greater than `b`.",
        "b": "To check if `b` is greater than `a`.",
        "c": "To check if `a` is equal to `b`.",
        "d": "To check if `a` is less than `b`.",
        "correct": "b"
    },
    {
        "question": "231. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "a"
    },
    {
        "question": "232. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "7 8 9",
        "b": "6 7 8",
        "c": "7 8 10",
        "d": "7 8 11",
        "correct": "a"
    },
    {
        "question": "233. What is the purpose of the `p > 10 && q < 5` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `p` is greater than 10 and `q` is less than 5.",
        "b": "To check if `a` is less than or equal to 10 and `q` is greater than or equal to 5.",
        "c": "To check if `p` is greater than 10 or `q` is less than 5.",
        "d": "To check if `p` is less than 10 or `q` is greater than 5.",
        "correct": "a"
    },
    {
        "question": "234. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "235. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r > 15 || s > 40) {\n                System.out.print(r-- + \" \");\n            } else {\n                System.out.print(s++ + \" \");\n            }\n        }\n    }\n}",
        "a": "19 18 17 16",
        "b": "20 19 18 17",
        "c": "30 31 32 33",
        "d": "31 32 33 34",
        "correct": "b"
    },
    {
        "question": "236. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
        "a": "4 9 16 5",
        "b": "4 9 5",
        "c": "4 5 6",
        "d": "4 9 16",
        "correct": "a"
    },
    {
        "question": "237. What is the purpose of the `x * x` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
        "a": "To print the square of `x`.",
        "b": "To print the value of `x`.",
        "c": "To increment `x` by 1.",
        "d": "To print the square root of `x`.",
        "correct": "a"
    },
    {
        "question": "238. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "b"
    },
    {
        "question": "239. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "8 7 6",
        "b": "5 6 7 8",
        "c": "8 7 6 5",
        "d": "5 6 7",
        "correct": "b"
    },
    {
        "question": "240. What is the purpose of the `b > 10` condition in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
        "a": "To check if `b` is greater than 10.",
        "b": "To check if `a` is greater than 10.",
        "c": "To check if `b` is less than or equal to 10.",
        "d": "To check if `a` is less than 10.",
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