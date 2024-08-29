const quizData = [
{
    "question": "31.Method overriding is required to achieve polymorphism.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "a"
},
{
    "question": "32.Constructor overriding is required to achieve polymorphism.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "b"
},
{
    "question": "33.Upcasting is required to achieve polymorphism.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "a"
},
{
    "question": "34.Downcasting is required to achieve polymorphism.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "b"
},
{
    "question": "35.Which two are required to achieve polymorphism?",
    "code": "Select The Correct Answer",
    "a": "Downcasting",
    "b": "Upcasting",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "b, d"
},
{
    "question": "36.Static methods can't be overridden.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "a"
},
{
    "question": "37.Static methods can be overridden.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "b"
},
{
    "question": "38.Static methods are involved in polymorphism.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No",
    "c": "Constructor overriding",
    "d": "Method overriding",
    "correct": "b"
},
{
    "question": "39.The subclass doesn't need to be loaded while accessing a superclass static member with a subclass name.",
    "code": "Select The Correct Answer",
    "a": "Yes",
    "b": "No","c": "Constructor overriding",
    "d": "Method overriding",
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
codeEl.innerHTML = `<pre><code class="language.java">${currentQuizData.code}</code></pre>`;
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
<h2 style="text.align: center; font.size: 2rem;">Quiz Results</h2>
<p style="font.size: 1.5rem; text.align: center;">You answered ${score}/${quizData.length} questions correctly</p>
<div style="margin.top: 2rem; max.height: 400px; overflow.y: auto; padding: 1rem; border: 1px solid #ccc; border.radius: 10px;">
    <h3 style="text.align: center; margin.bottom: 2rem;">Detailed Summary</h3>
    <ul style="list.style.type: none; padding: 0; font.size: 1.2rem;">
        ${selectedAnswers.map((result, index) => `
            <li style="margin.bottom: 1.5rem;">
                <strong>Question ${index + 1}:</strong> ${result.question}<br>
                <pre><code class="language.java">${result.code}</code></pre>
                <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
            </li>
        `).join('')}
    </ul>
</div>
<div style="text.align: center; margin.top: 2rem;">
    <button onclick="location.reload()" style="font.size: 1.2rem; padding: 0.8rem 1.5rem; background.color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
</div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}