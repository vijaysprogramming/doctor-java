const quizData = [
    {
        question: "01. What is an identifier in Java?",
        code: `select the correct option`,
        a: "A data type",
        b: "A name to identify something in a Java program",
        c: "A Java keyword",
        d: "A special symbol in Java",
        correct: "b",
    },
    {
        question: "02. Which of the following is NOT allowed in a Java identifier?",
        code: `select the correct option`,
        a: "Alphabets (A-Z, a-z)",
        b: "Digits (0-9)",
        c: "Special characters like `@` and `#`",
        d: "Underscore (_)",
        correct: "c",
    },
    {
        question: "03. Can a Java identifier start with a digit (0-9)?",
        code: `select the correct option`,
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "04. Which characters are allowed in Java identifiers apart from letters and digits?",
        code: `select the correct option`,
        a: "`@` and `#`",
        b: "`_` and `$`",
        c: "`&` and `*`",
        d: "`%` and `!`",
        correct: "b",
    },
    {
        question: "05. Can you use digits alone to form an identifier in Java?",
        code: `select the correct option`,
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "06. How should a class name be written in Java according to the naming convention?",
        code: `select the correct option`,
        a: "camelCase",
        b: "PascalCase",
        c: "lowercase",
        d: "UPPERCASE",
        correct: "b",
    },
    {
        question: "07. What is the naming convention for method names in Java?",
        code: `select the correct option`,
        a: "PascalCase",
        b: "UPPERCASE",
        c: "camelCase",
        d: "CapitalCase",
        correct: "c",
    },
    {
        question: "08. Which of the following is an invalid identifier in Java?",
        code: `select the correct option`,
        a: "myVariable",
        b: "$price",
        c: "123abc",
        d: "student_name",
        correct: "c",
    },
    {
        question: "09. Can you use spaces in Java identifiers?",
        code: `select the correct option`,
        a: "Yes",
        b: "No",
        correct: "b",
    },
    {
        question: "10. What happens if two `.java` files with the same class name are in the same directory?",
        code: `select the correct option`,
        a: "Both will compile successfully",
        b: "Only one will compile",
        c: "Compilation error",
        d: "The second file will be ignored",
        correct: "c",
    },
    {
        question: "11. Is it allowed to use an inbuilt class name as an identifier in Java?",
        code: `select the correct option`,
        a: "Yes, but it's not recommended",
        b: "Yes, and it is recommended",
        c: "No, it's illegal",
        d: "Only in certain cases",
        correct: "a",
    },
    {
        question: "12. Which case style should be used for naming variables in Java?",
        code: `select the correct option`,
        a: "PascalCase",
        b: "UPPERCASE",
        c: "camelCase",
        d: "snake_case",
        correct: "c",
    },
    {
        question: "13. Can a Java file be empty and still compile successfully?",
        code: `select the correct option`,
        a: "Yes",
        b: "No",
        correct: "a",
    },
    {
        question: "14. Which of the following is a valid Java class name?",
        code: `select the correct option`,
        a: "Myclass",
        b: "myClass",
        c: "MyClass",
        d: "myclass",
        correct: "c",
    },
    {
        question: "15. What is the main issue with using inbuilt class or interface names as identifiers?",
        code: `select the correct option`,
        a: "It leads to confusion",
        b: "It causes compilation errors",
        c: "It is illegal in Java",
        d: "It improves readability",
        correct: "a",
    },
    {
        question: "16. What is the convention to be followed for writing class names in Java?",
        code: `select the correct option`,
        a: "Class names should always be in lowercase",
        b: "Class names should follow PascalCase",
        c: "Class names can start with digits",
        d: "Class names can include spaces",
        correct: "b",
    },
    {
        question: "17. What is NOT allowed in a Java identifier?",
        code: `select the correct option`,
        a: "Letters",
        b: "Digits after letters",
        c: "Spaces",
        d: "`$` symbol",
        correct: "c",
    },
    {
        question: "18. Which rule must be followed when using digits in a Java identifier?",
        code: `select the correct option`,
        a: "Digits can be used alone",
        b: "Digits can only be used at the start",
        c: "Digits must follow letters",
        d: "Digits and letters cannot be mixed",
        correct: "c",
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
