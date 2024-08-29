const quizData = [
{
    "question": "341. What is the output of the following Java code?",
    "code": "class L501 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "342. What is the output of the following Java code?",
    "code": "class L502 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        System.out.println(\"Outside if\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "Outside if",
    "c": "Compilation error",
    "d": "x is greater than 5, Outside if",
    "correct": "d"
    },
    {
    "question": "343. What is the output of the following Java code?",
    "code": "class L503 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5);\n        System.out.println(\"x is greater than 5\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "344. What is the output of the following Java code?",
    "code": "class L504 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 5)\n            System.out.println(\"x is 5\");\n    }\n}",
    "a": "x is 5",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "345. What is the output of the following Java code?",
    "code": "class L505 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 10)\n            System.out.println(\"x is 10\");\n    }\n}",
    "a": "x is 10",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "346. What is the output of the following Java code?",
    "code": "class L506 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x)\n            System.out.println(\"x is true\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is true",
    "c": "No output",
    "d": "Compilation error",
    "correct": "d"
    },
    {
    "question": "347. What is the output of the following Java code?",
    "code": "class L507 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x < 15)\n            System.out.println(\"x is less than 15\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is less than 15",
    "c": "No output",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "348. What is the output of the following Java code?",
    "code": "class L508 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x > 8)\n            System.out.println(\"x is greater than 8\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "349. What is the output of the following Java code?",
    "code": "class L509 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x > 15)\n            System.out.println(\"x is greater than 15\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 15",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "350. What is the output of the following Java code?",
    "code": "class L510 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            System.out.println(\"Outside if\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "Outside if",
    "c": "Compilation error",
    "d": "x is greater than 5, Outside if",
    "correct": "a"
    },
    {
    "question": "351. What is the output of the following Java code?",
    "code": "class L511 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            System.out.println(\"Still inside if\");\n        System.out.println(\"Outside if\");\n    }\n}",
    "a": "x is greater than 5, Still inside if, Outside if",
    "b": "x is greater than 5, Outside if",
    "c": "Compilation error",
    "d": "x is greater than 5",
    "correct": "b"
    },
    {
    "question": "352. What is the output of the following Java code?",
    "code": "class L512 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            else\n            System.out.println(\"x is not greater than 5\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is not greater than 5",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "353. What is the output of the following Java code?",
    "code": "class L513 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else\n            System.out.println(\"x is not greater than 5\");\n            System.out.println(\"Outside else\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is not greater than 5, Outside else",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "354. What is the output of the following Java code?",
    "code": "class L514 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x = 5)\n            System.out.println(\"x is 5\");\n    }\n}",
    "a": "x is 5",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "355. What is the output of the following Java code?",
    "code": "class L515 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 10)\n            System.out.println(\"x is 10\");\n    }\n}",
    "a": "x is 10",
    "b": "No output",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "356. What is the output of the following Java code?",
    "code": "class L516 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x)\n            System.out.println(\"x is true\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is true",
    "c": "No output",
    "d": "Compilation error",
    "correct": "d"
    },
    {
    "question": "357. What is the output of the following Java code?",
    "code": "class L517 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x < 15)\n            System.out.println(\"x is less than 15\");\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is less than 15",
    "c": "No output",
    "d": "Not applicable",
    "correct": "b"
    },
    
    {
        "question": "358. What is the output of the following Java code?",
        "code": "class L518 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x > 10)\n            System.out.println(\"x is greater than 10\");\n        else\n            System.out.println(\"x is 10 or less\");\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is 10 or less",
        "c": "Compilation error",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "359. What is the output of the following Java code?",
        "code": "class L519 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n    }\n}",
        "a": "x is zero",
        "b": "x is non-zero",
        "c": "No output",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "360. What is the output of the following Java code?",
        "code": "class L520 {\n    public static void main(String[] args) {\n        int x = -5;\n        if (x > 0)\n            System.out.println(\"x is positive\");\n        else if (x < 0)\n            System.out.println(\"x is negative\");\n        else\n            System.out.println(\"x is zero\");\n    }\n}",
        "a": "x is positive",
        "b": "x is negative",
        "c": "x is zero",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "361. What is the output of the following Java code?",
        "code": "class L521 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else\n            System.out.println(\"x is odd\");\n    }\n}",
        "a": "x is even",
        "b": "x is odd",
        "c": "No output",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "362. What is the output of the following Java code?",
        "code": "class L522 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5 && x < 15)\n            System.out.println(\"x is between 5 and 15\");\n        else\n            System.out.println(\"x is out of range\");\n    }\n}",
        "a": "x is between 5 and 15",
        "b": "x is out of range",
        "c": "No output",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "363. What is the output of the following Java code?",
        "code": "class L523 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x < 15 || x > 25)\n            System.out.println(\"x is outside the range of 15 to 25\");\n        else\n            System.out.println(\"x is within the range\");\n    }\n}",
        "a": "x is outside the range of 15 to 25",
        "b": "x is within the range",
        "c": "No output",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "364. What is the output of the following Java code?",
        "code": "class L524 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 0)\n            if (x % 2 == 0)\n                System.out.println(\"x is positive and even\");\n            else\n                System.out.println(\"x is positive and odd\");\n        else\n            System.out.println(\"x is non-positive\");\n    }\n}",
        "a": "x is positive and even",
        "b": "x is positive and odd",
        "c": "x is non-positive",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "365. What is the output of the following Java code?",
        "code": "class L525 {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        if (x > y)\n            System.out.println(\"x is greater than y\");\n        else if (x < y)\n            System.out.println(\"x is less than y\");\n        else\n            System.out.println(\"x is equal to y\");\n    }\n}",
        "a": "x is greater than y",
        "b": "x is less than y",
        "c": "x is equal to y",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "366. What is the output of the following Java code?",
        "code": "class L526 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x % 3 == 0 && x % 4 == 0)\n            System.out.println(\"x is divisible by 3 and 4\");\n        else\n            System.out.println(\"x is not divisible by 3 and 4\");\n    }\n}",
        "a": "x is divisible by 3 and 4",
        "b": "x is not divisible by 3 and 4",
        "c": "No output",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "367. What is the output of the following Java code?",
        "code": "class L527 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 3 == 0)\n            System.out.println(\"x is divisible by 3\");\n    }\n}",
        "a": "x is divisible by 5, x is divisible by 3",
        "b": "x is divisible by 5",
        "c": "x is divisible by 3",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "368. What is the output of the following Java code?",
        "code": "class L528 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n        else\n            System.out.println(\"x is unknown\");\n    }\n}",
        "a": "x is zero",
        "b": "x is non-zero",
        "c": "x is unknown",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "369. What is the output of the following Java code?",
        "code": "class L529 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x % 4 == 0)\n            System.out.println(\"x is divisible by 4\");\n        else\n            System.out.println(\"x is not divisible by 4\");\n    }\n}",
        "a": "x is divisible by 4",
        "b": "x is not divisible by 4",
        "c": "No output",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "370. What is the output of the following Java code?",
        "code": "class L530 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        else\n            System.out.println(\"x is not divisible by 5\");\n    }\n}",
        "a": "x is divisible by 5",
        "b": "x is not divisible by 5",
        "c": "No output",
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