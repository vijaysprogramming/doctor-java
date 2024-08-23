const quizData = [
    {
        question: "1- IIB is a member of what?",
        code: "select the correct option",
        a: "object",
        b: "method",
        c: "class",
        d: "function",
        correct: "c",
    },
    
    {
        question: "2- IIB stands for what?",
        code: "select the correct option",
        a: "instance initialization block",
        b: "instance interpreted block",
        c: "instance inherited block",
        d: "interpreted instance block",
        correct: "a",
    },
    
    {
        question: "3- The block which has no name, identifier, keyword is called as what?",
        code: "select the correct option",
        a: "SIB",
        b: "IIB",
        c: "abstract block",
        d: "interface",
        correct: "b",
    },
    
    {
        question: "4- For one object creation how many times 1 IIB will get executed?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "none of above",
        correct: "a",
    },
    
    {
        question: "5- The block which has executed each time for every object creation known as what?",
        code: "select the correct option",
        a: "SIB",
        b: "interface",
        c: "IIB",
        d: "abstract",
        correct: "c",
    },
    
    {
        question: "6- Can we keep the IIB anywhere in the program?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of above",
        correct: "b",
    },
    
    {
        question: "7- Can we define more than 1 IIB in a single program?",
        code: "select the correct option",
        a: "no",
        b: "yes",
        c: "not applicable",
        d: "none of above",
        correct: "b",
    },
    
    {
        question: "8- Did the user require to specify explicitly for the execution of IIB's?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of above",
        correct: "b",
    },
    
    {
        question: "9- IIB's are independent of constructor or not?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of above",
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