const quizData = [
{
    question: "31. We can access attributes of an interface through the interface name.",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "32. An interface can become a member of a Java file.",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "33. While compiling a Java file, a class file is not created for an interface.",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},

{
    question: "34. Which keyword is used to develop a class by using a super interface?",
    code: `select the correct option`,
    a: "extends",
    b: "implements",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},

{
    question: "35. Which keyword is used to develop an interface by using a super interface?",
    code: `select the correct option`,
    a: "extends",
    b: "implements",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "36. Is it possible to implement an interface method in a subclass with a protected access specifier?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},

{
    question: "37. Is it required to implement all methods of a super interface inside a subclass in order to create an object for the subclass?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "38. If any method of a super interface is not implemented in a subclass, which keyword should be used for the subclass?",
    code: `select the correct option`,
    a: "public",
    b: "abstract",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},

{
    question: "39. Which is the correct order?",
    code: `select the correct option`,
    a: "First extends, then implements.",
    b: "First implements, then extends.",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "40. Can a class implement any number of super interfaces?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "41. Can a class extend one superclass and also implement any number of super interfaces?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "42. Can an interface extend any number of super interfaces?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},

{
    question: "43. Is multiple inheritance possible only through super interfaces?",
    code: `select the correct option`,
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
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
