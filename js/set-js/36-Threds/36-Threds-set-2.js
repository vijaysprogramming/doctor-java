const quizData = 
[
{
    question: "31. If a child thread receives an unhandled exception, will the main thread terminate from the execution?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "32. Is currentThread() a static method in the Thread class?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "33. Does currentThread() return a reference to the thread which executes the currentThread() method?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "34. Which t1 refers to the main thread? (Assume A is a subclass of Thread and B is a subclass of Runnable)",
    code: "select the correct option",
    a: "A t1 = new A()",
    b: "B t1 = new B()",
    c: "Thread t1 = Thread.currentThread()",
    d: "Thread t1 = B.currentThread()",
    correct: "c"
},
{
    question: "35. Is it possible to define more than one thread for class A, if A is a subclass of Thread class?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "36. Is it possible to define more than one thread for class B, if B is a subclass of Runnable interface?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "37. How many minimum number of objects are required to class A to define 2 threads? (Assume A is a subclass of Thread)",
    code: "select the correct option",
    a: "1",
    b: "2",
    c: "we can't define multiple threads to the same class",
    d: "not applicable",
    correct: "b"
},
{
    question: "38. How many minimum number of objects are required to class A to define 2 threads? (Assume A is a subclass of Runnable)",
    code: "select the correct option",
    a: "1",
    b: "2",
    c: "we can't define multiple threads to the same class",
    d: "not applicable",
    correct: "b"
},
{
    question: "39. Does every thread have a unique id?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "40. What is the data type of the id of a thread?",
    code: "select the correct option",
    a: "int",
    b: "long",
    c: "double",
    d: "String",
    correct: "b"
},
{
    question: "41. How to change a thread ID?",
    code: "select the correct option",
    a: "set()",
    b: "setId()",
    c: "setThreadId()",
    d: "we can't change",
    correct: "d"
},
{
    question: "42. How to read a thread ID?",
    code: "select the correct option",
    a: "get()",
    b: "getId()",
    c: "getThreadId()",
    d: "we can't read",
    correct: "b"
},
{
    question: "43. What is the default name for the main thread?",
    code: "select the correct option",
    a: "main",
    b: "initiator",
    c: "parent",
    d: "no name",
    correct: "a"
},
{
    question: "44. What is the default name for the 1st child thread?",
    code: "select the correct option",
    a: "main",
    b: "thread-0",
    c: "thread-1",
    d: "thread-2",
    correct: "b"
},
{
    question: "45. What is the default name for the 2nd child thread?",
    code: "select the correct option",
    a: "main",
    b: "thread-0",
    c: "thread-1",
    d: "thread-2",
    correct: "c"
},
{
    question: "46. Is it possible to change the name of the main thread?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "47. How to change the default name of a thread?",
    code: "select the correct option",
    a: "setName()",
    b: "setThreadName()",
    c: "we can't change",
    d: "not applicable",
    correct: "a"
},
{
    question: "48. Is it possible to choose a name for a child thread while creating it?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "49. What is the maximum priority for threads?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "c"
},
{
    question: "50. What is the minimum priority in case of threads?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "a"
},
{
    question: "51. What is the normal priority in case of threads?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "b"
},
{
    question: "52. What is the value of Thread.MIN_PRIORITY?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "a"
},
{
    question: "53. What is the value of Thread.NORM_PRIORITY?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "b"
},
{
    question: "54. What is the value of Thread.MAX_PRIORITY?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "c"
},
{
    question: "55. What is the default priority of a main thread?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "not applicable",
    correct: "b"
},
{
    question: "56. What is the default priority of a child thread?",
    code: "select the correct option",
    a: "1",
    b: "5",
    c: "10",
    d: "its a priority of its parent thread.",
    correct: "d"
},
{
    question: "57. What is the datatype of a priority?",
    code: "select the correct option",
    a: "int",
    b: "long",
    c: "double",
    d: "String",
    correct: "a"
},
{
    question: "58. How to read the priority of a thread?",
    code: "select the correct option",
    a: "get()",
    b: "getPriority()",
    c: "getP()",
    d: "getInt()",
    correct: "b"
},
{
    question: "59. How to change the priority of a thread?",
    code: "select the correct option",
    a: "set()",
    b: "setPriority()",
    c: "setP()",
    d: "setInt()",
    correct: "b"
},
{
    question: "60. Is it possible to change the priority of a main thread?",
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