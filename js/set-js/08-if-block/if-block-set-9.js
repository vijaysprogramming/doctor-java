const quizData = [
{
    "question": "251. What is the output of the following Java code?",
    "code": "class L438 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "252. What is the output of the following Java code?",
    "code": "class L439 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "253. What is the output of the following Java code?",
    "code": "class L440 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "c"
    },
    {
    "question": "254. What is the output of the following Java code?",
    "code": "class L441 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "from nested else",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "255. What is the output of the following Java code?",
    "code": "class L442 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "Compilation error",
    "d": "No output",
    "correct": "d"
    },
    {
    "question": "256. What is the output of the following Java code?",
    "code": "class L443 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "257. What is the output of the following Java code?",
    "code": "class L444 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "258. What is the output of the following Java code?",
    "code": "class L445 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "from nested else",
    "d": "No output",
    "correct": "c"
    },
    {
    "question": "259. What is the output of the following Java code?",
    "code": "class L446 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "260. What is the output of the following Java code?",
    "code": "class L447 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "261. What is the output of the following Java code?",
    "code": "class L448 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from else",
    "d": "No output",
    "correct": "c"
    },
    {
    "question": "262. What is the output of the following Java code?",
    "code": "class L449 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "263. What is the output of the following Java code?",
    "code": "class L450 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from nested if",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "264. What is the output of the following Java code?",
    "code": "class L451 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 8",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "265. What is the output of the following Java code?",
    "code": "class L452 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 8",
    "d": "No output",
    "correct": "a"
    },
    
    {
    "question": "266. What is the output of the following Java code?",
    "code": "class L453 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
    "a": "a is less than 10",
    "b": "a is less than 20",
    "c": "a is 20 or more",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "267. What is the output of the following Java code?",
    "code": "class L454 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
    "a": "a is less than 10",
    "b": "a is less than 20",
    "c": "a is 20 or more",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "268. What is the output of the following Java code?",
    "code": "class L455 {\n    public static void main(String[] args) {\n        int a = 25;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
    "a": "a is less than 10",
    "b": "a is less than 20",
    "c": "a is 20 or more",
    "d": "No output",
    "correct": "c"
    },
    {
    "question": "269. What is the output of the following Java code?",
    "code": "class L456 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5 && a < 15) {\n            System.out.println(\"a is between 5 and 15\");\n        } else {\n            System.out.println(\"a is not between 5 and 15\");\n        }\n    }\n}",
    "a": "a is between 5 and 15",
    "b": "a is not between 5 and 15",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "270. What is the output of the following Java code?",
    "code": "class L457 {\n    public static void main(String[] args) {\n        int a = 20;\n        if (a > 15 || a < 10) {\n            System.out.println(\"a is either greater than 15 or less than 10\");\n        } else {\n            System.out.println(\"a is between 10 and 15\");\n        }\n    }\n}",
    "a": "a is either greater than 15 or less than 10",
    "b": "a is between 10 and 15",
    "c": "Compilation error",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "271. What is the output of the following Java code?",
    "code": "class L458 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5) {\n            if (a < 15) {\n                System.out.println(\"a is between 5 and 15\");\n            }\n        }\n    }\n}",
    "a": "a is between 5 and 15",
    "b": "No output",
    "c": "Compilation error",
    "d": "Runtime error",
    "correct": "a"
    },
    {
    "question": "272. What is the output of the following Java code?",
    "code": "class L459 {\n    public static void main(String[] args) {\n        int a = 30;\n        if (a > 25) {\n            System.out.println(\"a is greater than 25\");\n        } else if (a > 20) {\n            System.out.println(\"a is greater than 20\");\n        } else {\n            System.out.println(\"a is 20 or less\");\n        }\n    }\n}",
    "a": "a is greater than 25",
    "b": "a is greater than 20",
    "c": "a is 20 or less",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "273. What is the output of the following Java code?",
    "code": "class L460 {\n    public static void main(String[] args) {\n        int a = 20;\n        if (a > 25) {\n            System.out.println(\"a is greater than 25\");\n        } else if (a > 15) {\n            System.out.println(\"a is greater than 15\");\n        } else {\n            System.out.println(\"a is 15 or less\");\n        }\n    }\n}",
    "a": "a is greater than 25",
    "b": "a is greater than 15",
    "c": "a is 15 or less",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "274. What is the output of the following Java code?",
    "code": "class L461 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a == 10) {\n            System.out.println(\"a is 10\");\n        } else if (a != 10) {\n            System.out.println(\"a is not 10\");\n        } else {\n            System.out.println(\"Invalid value\");\n        }\n    }\n}",
    "a": "a is 10",
    "b": "a is not 10",
    "c": "Invalid value",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "275. What is the output of the following Java code?",
    "code": "class L462 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a != 10) {\n            System.out.println(\"a is not 10\");\n        } else {\n            System.out.println(\"a is 10\");\n        }\n    }\n}",
    "a": "a is 10",
    "b": "a is not 10",
    "c": "Invalid value",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "276. What is the output of the following Java code?",
    "code": "class L463 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5 && a < 10) {\n            System.out.println(\"a is between 5 and 10\");\n        } else if (a == 10) {\n            System.out.println(\"a is 10\");\n        } else {\n            System.out.println(\"a is not in the range\");\n        }\n    }\n}",
    "a": "a is between 5 and 10",
    "b": "a is 10",
    "c": "a is not in the range",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "277. What is the output of the following Java code?",
    "code": "class L464 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a < 10) {\n            if (a > 0) {\n                System.out.println(\"a is positive and less than 10\");\n            }\n        }\n    }\n}",
    "a": "a is positive and less than 10",
    "b": "No output",
    "c": "Compilation error",
    "d": "Runtime error",
    "correct": "a"
    },
    {
    "question": "278. What is the output of the following Java code?",
    "code": "class L465 {\n    public static void main(String[] args) {\n        int a = 30;\n        if (a < 25) {\n            System.out.println(\"a is less than 25\");\n        } else {\n            System.out.println(\"a is 25 or more\");\n        }\n    }\n}",
    "a": "a is less than 25",
    "b": "a is 25 or more",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "279. What is the output of the following Java code?",
    "code": "class L466 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a % 2 == 0) {\n            System.out.println(\"a is even\");\n        } else {\n            System.out.println(\"a is odd\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "a is odd",
    "c": "Compilation error",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "280. What is the output of the following Java code?",
    "code": "class L467 {\n    public static void main(String[] args) {\n        int a = 4;\n        if (a % 2 == 0) {\n            System.out.println(\"a is even\");\n        } else {\n            System.out.println(\"a is odd\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "a is odd",
    "c": "Compilation error",
    "d": "No output",
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