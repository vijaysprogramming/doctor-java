const quizData = 
[
{
    question: "121. While a thread is calling join, does it release the owned lock?",
    code: "select the correct option",
    a: "true",
    b: "false",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "123. While a thread is calling sleep, does it release the owned lock?",
    code: "select the correct option",
    a: "true",
    b: "false",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "124. ThreadLocal maintains a value local to a particular thread.",
    code: "select the correct option",
    a: "true",
    b: "false",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "125. If the same ThreadLocal object is used by two different threads and the first thread sets a value as 10 while the second thread has not set a value yet, what could be the value while reading by the second thread?",
    code: "select the correct option",
    a: "10",
    b: "0",
    c: "null",
    d: "exception",
    correct: "c"
},
{
    question: "126.Is it possible to stop all the threads that are under one group by using the group reference?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "127. ThreadGroup is used for grouping any number of and any type of threads.",
    code: "select the correct option",
    a: "true",
    b: "false",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "128. What is the state of a thread after calling the sleep method?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "NEW",
    
    correct: "b"
},
{
    question: "129. What is the state of a thread after calling the wait method?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "NEW",

    correct: "a"
},
{
    question: "130. What is the state of a thread after calling the join method?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "NEW",
    
    correct: "a"
},
{
    question: "131. What is the state of a thread after calling the start method while executing the run method?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "NEW",

    correct: "c"
},
{
    question: "132. What is the state of a thread before calling the start method?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "NEW",

    correct: "d"
},
{
    question: "133. What is the state of a thread while it is in a deadlock?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    
    d: "BLOCKED",
    correct: "d"
},
{
    question: "134. What is the state of a thread once its execution is over?",
    code: "select the correct option",
    a: "WAITING",
    b: "TIMED_WAITING",
    c: "RUNNABLE",
    d: "TERMINATED",
    correct: "d"
},
{
    question: "135. Does yield() request the current thread to give a chance to other threads?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
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