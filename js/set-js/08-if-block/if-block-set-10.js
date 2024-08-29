const quizData = [
{
    "question": "281. What is the output of the following Java code?",
    "code": "class L468 {\n    public static void main(String[] args) {\n        int a = 7;\n        if (a > 10) {\n            System.out.println(\"a is greater than 10\");\n        } else if (a == 7) {\n            System.out.println(\"a is 7\");\n        } else {\n            System.out.println(\"a is not greater than 10 and not 7\");\n        }\n    }\n}",
    "a": "a is greater than 10",
    "b": "a is 7",
    "c": "a is not greater than 10 and not 7",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "282. What is the output of the following Java code?",
    "code": "class L469 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a < 5 || a > 15) {\n            System.out.println(\"a is out of range\");\n        } else {\n            System.out.println(\"a is within range\");\n        }\n    }\n}",
    "a": "a is out of range",
    "b": "a is within range",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "283. What is the output of the following Java code?",
    "code": "class L470 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a <= 10) {\n            System.out.println(\"a is 10 or less\");\n        } else if (a <= 20) {\n            System.out.println(\"a is between 10 and 20\");\n        } else {\n            System.out.println(\"a is greater than 20\");\n        }\n    }\n}",
    "a": "a is 10 or less",
    "b": "a is between 10 and 20",
    "c": "a is greater than 20",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "284. What is the output of the following Java code?",
    "code": "class L471 {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        if (a < b) {\n            System.out.println(\"a is less than b\");\n        } else {\n            System.out.println(\"a is not less than b\");\n        }\n    }\n}",
    "a": "a is less than b",
    "b": "a is not less than b",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "285. What is the output of the following Java code?",
    "code": "class L472 {\n    public static void main(String[] args) {\n        int a = 12;\n        int b = 8;\n        if (a > b) {\n            if (a % 2 == 0) {\n                System.out.println(\"a is even and greater than b\");\n            } else {\n                System.out.println(\"a is odd and greater than b\");\n            }\n        }\n    }\n}",
    "a": "a is even and greater than b",
    "b": "a is odd and greater than b",
    "c": "a is even and less than b",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "286. What is the output of the following Java code?",
    "code": "class L473 {\n    public static void main(String[] args) {\n        int a = 18;\n        if (a < 15) {\n            System.out.println(\"a is less than 15\");\n        } else if (a < 20) {\n            System.out.println(\"a is between 15 and 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
    "a": "a is less than 15",
    "b": "a is between 15 and 20",
    "c": "a is 20 or more",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "287. What is the output of the following Java code?",
    "code": "class L474 {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 7;\n        if (a > b) {\n            System.out.println(\"a is greater than b\");\n        } else if (a < b) {\n            System.out.println(\"a is less than b\");\n        } else {\n            System.out.println(\"a is equal to b\");\n        }\n    }\n}",
    "a": "a is greater than b",
    "b": "a is less than b",
    "c": "a is equal to b",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "288. What is the output of the following Java code?",
    "code": "class L475 {\n    public static void main(String[] args) {\n        int a = 12;\n        int b = 12;\n        if (a == b) {\n            System.out.println(\"a is equal to b\");\n        } else {\n            System.out.println(\"a is not equal to b\");\n        }\n    }\n}",
    "a": "a is equal to b",
    "b": "a is not equal to b",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "289. What is the output of the following Java code?",
    "code": "class L476 {\n    public static void main(String[] args) {\n        int a = 4;\n        if (a >= 5) {\n            System.out.println(\"a is 5 or more\");\n        } else {\n            System.out.println(\"a is less than 5\");\n        }\n    }\n}",
    "a": "a is 5 or more",
    "b": "a is less than 5",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "290. What is the output of the following Java code?",
    "code": "class L477 {\n    public static void main(String[] args) {\n        int a = 8;\n        if (a % 2 == 0) {\n            if (a % 4 == 0) {\n                System.out.println(\"a is divisible by 4\");\n            } else {\n                System.out.println(\"a is divisible by 2 but not by 4\");\n            }\n        } else {\n            System.out.println(\"a is not divisible by 2\");\n        }\n    }\n}",
    "a": "a is divisible by 4",
    "b": "a is divisible by 2 but not by 4",
    "c": "a is not divisible by 2",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "291. What is the output of the following Java code?",
    "code": "class L478 {\n    public static void main(String[] args) {\n        int a = 9;\n        if (a % 3 == 0) {\n            System.out.println(\"a is divisible by 3\");\n        } else {\n            System.out.println(\"a is not divisible by 3\");\n        }\n    }\n}",
    "a": "a is divisible by 3",
    "b": "a is not divisible by 3",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "292. What is the output of the following Java code?",
    "code": "class L479 {\n    public static void main(String[] args) {\n        int a = 14;\n        if (a % 2 == 0 && a % 7 == 0) {\n            System.out.println(\"a is divisible by both 2 and 7\");\n        } else {\n            System.out.println(\"a is not divisible by both 2 and 7\");\n        }\n    }\n}",
    "a": "a is divisible by both 2 and 7",
    "b": "a is not divisible by both 2 and 7",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "293. What is the output of the following Java code?",
    "code": "class L480 {\n    public static void main(String[] args) {\n        int a = 2;\n        int b = 5;\n        if (a + b == 7) {\n            System.out.println(\"Sum is 7\");\n        } else {\n            System.out.println(\"Sum is not 7\");\n        }\n    }\n}",
    "a": "Sum is 7",
    "b": "Sum is not 7",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "294. What is the output of the following Java code?",
    "code": "class L481 {\n    public static void main(String[] args) {\n        int a = 6;\n        int b = 2;\n        if (a / b == 3) {\n            System.out.println(\"Division result is 3\");\n        } else {\n            System.out.println(\"Division result is not 3\");\n        }\n    }\n}",
    "a": "Division result is 3",
    "b": "Division result is not 3",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "295. What is the output of the following Java code?",
    "code": "class L482 {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 2;\n        if (a * b == 6) {\n            System.out.println(\"Multiplication result is 6\");\n        } else {\n            System.out.println(\"Multiplication result is not 6\");\n        }\n    }\n}",
    "a": "Multiplication result is 6",
    "b": "Multiplication result is not 6",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "296. What is the output of the following Java code?",
    "code": "class L483 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a % 5 == 0) {\n            System.out.println(\"a is divisible by 5\");\n        } else {\n            System.out.println(\"a is not divisible by 5\");\n        }\n    }\n}",
    "a": "a is divisible by 5",
    "b": "a is not divisible by 5",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "297. What is the output of the following Java code?",
    "code": "class L484 {\n    public static void main(String[] args) {\n        int a = 8;\n        if (a % 2 != 0) {\n            System.out.println(\"a is odd\");\n        } else {\n            System.out.println(\"a is even\");\n        }\n    }\n}",
    "a": "a is odd",
    "b": "a is even",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "298. What is the output of the following Java code?",
    "code": "class L485 {\n    public static void main(String[] args) {\n        int a = 7;\n        if (a > 10 && a < 20) {\n            System.out.println(\"a is between 10 and 20\");\n        } else {\n            System.out.println(\"a is not in the range\");\n        }\n    }\n}",
    "a": "a is between 10 and 20",
    "b": "a is not in the range",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "299. What is the output of the following Java code?",
    "code": "class L486 {\n    public static void main(String[] args) {\n        int a = 13;\n        if (a % 2 == 1) {\n            System.out.println(\"a is odd\");\n        } else {\n            System.out.println(\"a is even\");\n        }\n    }\n}",
    "a": "a is odd",
    "b": "a is even",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "300. What is the output of the following Java code?",
    "code": "class L487 {\n    public static void main(String[] args) {\n        int a = 6;\n        if (a % 3 == 0 && a % 2 == 0) {\n            System.out.println(\"a is divisible by both 3 and 2\");\n        } else {\n            System.out.println(\"a is not divisible by both 3 and 2\");\n        }\n    }\n}",
    "a": "a is divisible by both 3 and 2",
    "b": "a is not divisible by both 3 and 2",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    
    {
        "question": "301. What is the output of the following Java code?",
        "code": "class L463 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 15",
        "c": "x is greater than 8",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "302. What is the output of the following Java code?",
        "code": "class L464 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 15",
        "c": "x is greater than 8",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "303. What is the output of the following Java code?",
        "code": "class L465 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is not greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is not greater than 5",
        "c": "x is greater than 8",
        "d": "Not applicable",
        "correct": "d"
    },
    {
        "question": "304. What is the output of the following Java code?",
        "code": "class L466 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (\n\nx > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 15\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 15",
        "c": "x is not greater than 5 or 15",
        "d": "Not applicable",
        "correct": "d"
    },
    {
        "question": "305. What is the output of the following Java code?",
        "code": "class L467 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 8",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "306. What is the output of the following Java code?",
        "code": "class L468 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 8",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "307. What is the output of the following Java code?",
        "code": "class L469 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 8",
        "c": "No output",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "308. What is the output of the following Java code?",
        "code": "class L470 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "309. What is the output of the following Java code?",
        "code": "class L471 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "310. What is the output of the following Java code?",
        "code": "class L472 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 8",
        "c": "x is not greater than 5 or 8",
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