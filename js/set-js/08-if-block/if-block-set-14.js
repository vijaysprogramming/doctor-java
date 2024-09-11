const quizData = [
{
    "question": "371. What is the output of the following Java code?",
    "code": "class L531 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x % 2 == 0)\n            if (x % 3 == 0)\n                System.out.println(\"x is divisible by both 2 and 3\");\n            else\n                System.out.println(\"x is divisible by 2 but not 3\");\n        else\n            System.out.println(\"x is not divisible by 2\");\n    }\n}",
    "a": "x is divisible by both 2 and 3",
    "b": "x is divisible by 2 but not 3",
    "c": "x is not divisible by 2",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "372. What is the output of the following Java code?",
    "code": "class L532 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n        else\n            System.out.println(\"x is even\");\n    }\n}",
    "a": "x is odd",
    "b": "x is even",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "373. What is the output of the following Java code?",
    "code": "class L533 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x % 2 == 0 && x % 3 == 0)\n            System.out.println(\"x is divisible by 2 and 3\");\n        else\n            System.out.println(\"x is not divisible by 2 and 3\");\n    }\n}",
    "a": "x is divisible by 2 and 3",
    "b": "x is not divisible by 2 and 3",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "374. What is the output of the following Java code?",
    "code": "class L534 {\n    public static void main(String[] args) {\n        int x = 50;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 10 == 0)\n            System.out.println(\"x is divisible by 10\");\n    }\n}",
    "a": "x is divisible by 5, x is divisible by 10",
    "b": "x is divisible by 5",
    "c": "x is divisible by 10",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "375. What is the output of the following Java code?",
    "code": "class L535 {\n    public static void main(String[] args) {\n        int x = 14;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n        else\n            System.out.println(\"x is unknown\");\n    }\n}",
    "a": "x is even",
    "b": "x is odd",
    "c": "x is unknown",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "376. What is the output of the following Java code?",
    "code": "class L536 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (x > 0)\n            System.out.println(\"x is positive\");\n        if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n    }\n}",
    "a": "x is positive, x is odd",
    "b": "x is positive",
    "c": "x is odd",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "377. What is the output of the following Java code?",
    "code": "class L537 {\n    public static void main(String[] args) {\n        int x = -10;\n        if (x < 0)\n            System.out.println(\"x is negative\");\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n    }\n}",
    "a": "x is negative, x is even",
    "b": "x is negative",
    "c": "x is even",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "378. What is the output of the following Java code?",
    "code": "class L538 {\n    public static void main(String[] args) {\n        int x = 100;\n        if (x % 10 == 0)\n            System.out.println(\"x is divisible by 10\");\n        if (x % 25 == 0)\n            System.out.println(\"x is divisible by 25\");\n    }\n}",
    "a": "x is divisible by 10, x is divisible by 25",
    "b": "x is divisible by 10",
    "c": "x is divisible by 25",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "379. What is the output of the following Java code?",
    "code": "class L539 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n    }\n}",
    "a": "x is zero",
    "b": "x is non-zero",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "380. What is the output of the following Java code?",
    "code": "class L540 {\n    public static void main(String[] args) {\n        int x = 45;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 9 == 0)\n            System.out.println(\"x is divisible by 9\");\n    }\n}",
    "a": "x is divisible by 5",
    "b": "x is divisible by 9",
    "c": "x is divisible by 5, x is divisible by 9",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "381. What is the output of the following Java code?",
    "code": "class L541 {\n    public static void main(String[] args) {\n        int x = 2;\n        if (x < 0)\n            System.out.println(\"x is negative\");\n        else if (x > 0)\n            System.out.println(\"x is positive\");\n        else\n            System.out.println(\"x is zero\");\n    }\n}",
    "a": "x is positive",
    "b": "x is negative",
    "c": "x is zero",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "382. What is the output of the following Java code?",
    "code": "class L542 {\n    public static void main(String[] args) {\n        int x = 22;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else\n            System.out.println(\"x is odd\");\n    }\n}",
    "a": "x is even",
    "b": "x is odd",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "383. What is the output of the following Java code?",
    "code": "class L543 {\n    public static void main(String[] args) {\n        int x = 11;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else if (x % 3 == 0)\n            System.out.println(\"x is divisible by 3\");\n        else\n            System.out.println(\"x is neither even nor divisible by 3\");\n    }\n}",
    "a": "x is even",
    "b": "x is divisible by 3",
    "c": "x is neither even nor divisible by 3",
    "d": "Not applicable",
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