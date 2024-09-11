const quizData = [
{
    "question": "311. What is the output of the following Java code?",
    "code": "class L473 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 5 or 8",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "312. What is the output of the following Java code?",
    "code": "class L474 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 5 or 8",
    "d": "Not applicable",
    "correct": "c"
},

    {
        "question": "313. What is the output of the following Java code?",
        "code": "class L475 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x < 10) {\n            System.out.println(\"x is less than 10\");\n        } else if (x == 12) {\n            System.out.println(\"x is equal to 12\");\n        } else {\n            System.out.println(\"x is neither less than 10 nor equal to 12\");\n        }\n    }\n}",
        "a": "x is less than 10",
        "b": "x is equal to 12",
        "c": "x is neither less than 10 nor equal to 12",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "314. What is the output of the following Java code?",
        "code": "class L476 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x > 0) {\n            System.out.println(\"x is positive\");\n        } else if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else {\n            System.out.println(\"x is negative\");\n        }\n    }\n}",
        "a": "x is positive",
        "b": "x is zero",
        "c": "x is negative",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "315. What is the output of the following Java code?",
        "code": "class L477 {\n    public static void main(String[] args) {\n        int x = -5;\n        if (x < 0) {\n            System.out.println(\"x is negative\");\n        } else if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else {\n            System.out.println(\"x is positive\");\n        }\n    }\n}",
        "a": "x is negative",
        "b": "x is zero",
        "c": "x is positive",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "316. What is the output of the following Java code?",
        "code": "class L478 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is odd\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is odd",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "317. What is the output of the following Java code?",
        "code": "class L479 {\n    public static void main(String[] args) {\n        int x = 17;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is odd\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is odd",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "318. What is the output of the following Java code?",
        "code": "class L480 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 20) {\n            System.out.println(\"x is less than 20\");\n        }\n    }\n}",
        "a": "x is less than 20",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "319. What is the output of the following Java code?",
        "code": "class L481 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 25) {\n            System.out.println(\"x is greater than 25\");\n        }\n    }\n}",
        "a": "x is greater than 25",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "320. What is the output of the following Java code?",
        "code": "class L482 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 5) {\n            System.out.println(\"x is less than 5\");\n        } else if (x == 10) {\n            System.out.println(\"x is equal to 10\");\n        } else {\n            System.out.println(\"x is neither less than 5 nor equal to 10\");\n        }\n    }\n}",
        "a": "x is less than 5",
        "b": "x is equal to 10",
        "c": "x is neither less than 5 nor equal to 10",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "321. What is the output of the following Java code?",
        "code": "class L483 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x == 10) {\n            System.out.println(\"x is equal to 10\");\n        } else if (x == 15) {\n            System.out.println(\"x is equal to 15\");\n        } else {\n            System.out.println(\"x is neither 10 nor 15\");\n        }\n    }\n}",
        "a": "x is equal to 10",
        "b": "x is equal to 15",
        "c": "x is neither 10 nor 15",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "322. What is the output of the following Java code?",
        "code": "class L484 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        }\n    }\n}",
        "a": "x is greater than 15",
        "b": "x is greater than 10",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "323. What is the output of the following Java code?",
        "code": "class L485 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x > 20) {\n            System.out.println(\"x is greater than 20\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is not greater than 15\");\n        }\n    }\n}",
        "a": "x is greater than 20",
        "b": "x is greater than 15",
        "c": "x is not greater than 15",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "324. What is the output of the following Java code?",
        "code": "class L486 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is 5 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 5",
        "c": "x is 5 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "325. What is the output of the following Java code?",
        "code": "class L487 {\n    public static void main(String[] args) {\n        int x = 6;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is 5 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 5",
        "c": "x is 5 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "326. What is the output of the following Java code?",
        "code": "class L488 {\n    public static void main(String[] args) {\n        int x = 14;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is 10 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 15",
        "c": "x is 10 or less",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "327. What is the output of the following Java code?",
        "code": "class L489 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x >= 20) {\n            System.out.println(\"x is 20 or more\");\n        } else {\n            System.out.println(\"x is less than 20\");\n        }\n    }\n}",
        "a": "x is 20 or more",
        "b": "x is less than 20",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "328. What is the output of the following Java code?",
        "code": "class L490 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 2) {\n            System.out.println(\"x is greater than 2\");\n        } else {\n            System.out.println(\"x is 2 or less\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 2",
        "c": "x is 2 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "329. What is the output of the following Java code?",
        "code": "class L491 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x < 5) {\n            System.out.println(\"x is less than 5\");\n        } else if (x < 10) {\n            System.out.println(\"x is less than 10\");\n        } else {\n            System.out.println(\"x is 10 or more\");\n        }\n    }\n}",
        "a": "x is less than 5",
        "b": "x is less than 10",
        "c": "x is 10 or more",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "330. What is the output of the following Java code?",
        "code": "class L492 {\n    public static void main(String[] args) {\n        int x = 13;\n        if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else if (x % 2 == 0) {\n            System.out.println(\"x is divisible by 2\");\n        } else {\n            System.out.println(\"x is not divisible by 2 or 3\");\n        }\n    }\n}",
        "a": "x is divisible by 3",
        "b": "x is divisible by 2",
        "c": "x is not divisible by 2 or 3",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "331. What is the output of the following Java code?",
        "code": "class L493 {\n    public static void main(String[] args) {\n        int x = 6;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is not divisible by 2 or 3\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is divisible by 3",
        "c": "x is not divisible by 2 or 3",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "332. What is the output of the following Java code?",
        "code": "class L494 {\n    public static void main(String[] args) {\n        int x = 9;\n        if (x % 2 != 0) {\n            System.out.println(\"x is odd\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is neither odd nor divisible by 3\");\n        }\n    }\n}",
        "a": "x is odd",
        "b": "x is divisible by 3",
        "c": "x is neither odd nor divisible by 3",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "333. What is the output of the following Java code?",
        "code": "class L495 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x == 5) {\n            System.out.println(\"x is 5\");\n        } else if (x != 5) {\n            System.out.println(\"x is not 5\");\n        } else {\n            System.out.println(\"x is something else\");\n        }\n    }\n}",
        "a": "x is 5",
        "b": "x is not 5",
        "c": "x is something else",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "334. What is the output of the following Java code?",
        "code": "class L496 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else if (x != 0) {\n            System.out.println(\"x is not zero\");\n        } else {\n            System.out.println(\"x is something else\");\n        }\n    }\n}",
        "a": "x is zero",
        "b": "x is not zero",
        "c": "x is something else",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "335. What is the output of the following Java code?",
        "code": "class L497 {\n    public static void main(String[] args) {\n        int x = 11;\n        if (x % 5 == 0) {\n            System.out.println(\"x is divisible by 5\");\n        } else if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is not divisible by 5 or even\");\n        }\n    }\n}",
        "a": "x is divisible by 5",
        "b": "x is even",
        "c": "x is not divisible by 5 or even",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "336. What is the output of the following Java code?",
        "code": "class L498 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x % 4 == 0) {\n            System.out.println(\"x is divisible by 4\");\n        } else {\n            System.out.println(\"x is not divisible by 4\");\n        }\n    }\n}",
        "a": "x is divisible by 4",
        "b": "x is not divisible by 4",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "337. What is the output of the following Java code?",
        "code": "class L499 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x % 6 == 0) {\n            System.out.println(\"x is divisible by 6\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is not divisible by 3 or 6\");\n        }\n    }\n}",
        "a": "x is divisible by 6",
        "b": "x is divisible by 3",
        "c": "x is not divisible by 3 or 6",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "338. What is the output of the following Java code?",
        "code": "class L500 {\n    public static void main(String[] args) {\n        int x = 2;\n        if (x == 1) {\n            System.out.println(\"x is 1\");\n        } else if (x == 2) {\n            System.out.println(\"x is 2\");\n        } else {\n            System.out.println(\"x is neither 1 nor 2\");\n        }\n    }\n}",
        "a": "x is 1",
        "b": "x is 2",
        "c": "x is neither 1 nor 2",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "339. What is the output of the following Java code?",
        "code": "class L501 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x % 4 == 0) {\n            System.out.println(\"x is divisible by 4\");\n        } else if (x % 5 == 0) {\n            System.out.println(\"x is divisible by 5\");\n        } else {\n            System.out.println(\"x is not divisible by 4 or 5\");\n        }\n    }\n}",
        "a": "x is divisible by 4",
        "b": "x is divisible by 5",
        "c": "x is not divisible by 4 or 5",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "340. What is the output of the following Java code?",
        "code": "class L502 {\n    public static void main(String[] args) {\n        int x = 21;\n        if (x % 7 == 0) {\n            System.out.println(\"x is divisible by 7\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is neither divisible by 7 nor 3\");\n        }\n    }\n}",
        "a": "x is divisible by 7",
        "b": "x is divisible by 3",
        "c": "x is neither divisible by 7 nor 3",
        "d": "Not applicable",
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