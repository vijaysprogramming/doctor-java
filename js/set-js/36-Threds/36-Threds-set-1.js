const quizData = 
[
    {
        question: "01. By default, how many threads are involved in the foreground execution?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "02. In which package is the Thread class available?",
        code: "select the correct option",
        a: "java.threads",
        b: "java.lang",
        c: "java.io",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "03. Thread is a concrete class.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "04. We can create an object of the Thread class.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "05. Which method of the Thread class do we need to override to incorporate a thread task?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "06. Which method of the Thread class do we need to call to execute a new thread in the separate thread execution context?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "07. Which method of the Thread class do we need to call to register a new thread with the thread scheduler?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "08. In which package is the Runnable interface available?",
        code: "select the correct option",
        a: "java.lang",
        b: "java.io",
        c: "java.threads",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "09. How many methods are available in the Runnable interface?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "no methods",
        correct: "a"
    },
    {
        question: "10. Is the Runnable interface a marker interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "11. Is the Runnable interface a functional interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "12. Which method is available in the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "13. Which method do we have to implement while developing a subclass to the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "14. How many ways are there to develop child threads in Java programming language?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "no methods",
        correct: "b"
    },
    {
        question: "15. In which method do we have to implement the thread task while developing a child thread by using the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "16. Which reference type should we supply to the constructor of the Thread class while developing a thread by making use of the Runnable interface?",
        code: "select the correct option",
        a: "ThreadLocal",
        b: "Number",
        c: "Runnable",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "17. Is the start() method available in the Runnable interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "18. Can we call the start() method from a class which is a subclass of the Runnable interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "19. Can we call the start() method from a class which is a subclass of the Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "20. Can we call the start() method from the Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "21. What happens if the main thread is calling the run() method from the child thread instead of the start() method?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Compilation and Running both success and child thread will be allocated to execute run() method",
        d: "Compilation and Running both success and main thread will be executing run() method",
        correct: "d"
    },
    {
        question: "22. If the main thread is calling the run() method from the child thread instead of the start() method, then will the child be registering with the thread scheduler?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "23. Is it possible to call the run() method more than once in the same thread reference?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "24. Is it possible to call the start() method more than once in the same thread reference?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "25. What happens if the start() method is called more than once on the same thread reference?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Executing more than one time",
        correct: "b"
    },
    {
        question: "24. What happens if the run() method is called more than once on the same thread reference?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Executing more than one time",
        correct: "c"
    },
    {
        question: "26. Does an unhandled exception object affect only the current thread?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "27. Does an unhandled exception object affect all the running threads of the current execution?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "28. If the main thread receives an unhandled exception, will the main thread only terminate from the execution?",
        code: "select the correct option",
        a: "yes",
        b: "no",c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "29. If the main thread receives an unhandled exception, will all the threads of the current execution terminate?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "30. If a child thread receives an unhandled exception, will all the threads of the current execution terminate?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
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