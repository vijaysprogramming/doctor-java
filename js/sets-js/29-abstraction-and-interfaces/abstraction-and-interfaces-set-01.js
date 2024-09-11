const quizData = [
        {
            question: "1. Defined method should not have an abstract keyword.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "2. Method without a body should not have an abstract keyword.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "3. Method should have both definition (body) and also an abstract keyword.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "4. Any class can be declared as an abstract.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "5. If a class contains at least one abstract method, then it should be declared as an abstract.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "6. An abstract class can become a member of a Java file.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "7. A class file is generated while compiling an abstract class.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "8. We can create an object for an abstract class.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "9. We can create a reference to an abstract class.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "10. We can use an abstract class for data type purposes.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "11. An attribute can be of an abstract class type.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "12. A method argument can't be of an abstract class type.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "13. If a superclass abstract method is inherited by a subclass and the subclass does not implement it, then...",
            code: `select the correct option`,
            a: "The subclass should be declared as abstract",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "14. Is it possible to declare a class as abstract if that class doesn't have any abstract methods?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "15. Is it possible to declare a constructor as abstract?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "16. Are constructors inherited by subclasses?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "17. Is it possible to define a constructor in an abstract class?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "18. When does the constructor of an abstract class execute?",
            code: `select the correct option`,
            a: "While creating an object for the abstract class.",
            b: "While creating an object for a subclass which is concrete.",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "19. By default, is an interface abstract?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "20. Can we develop defined methods in an interface?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "21. Interface attributes should be initialized while declaring them.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "22. The abstract keyword is optional while declaring a method in an interface.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "23. Which access specifier is allowed for interface members?",
            code: `select the correct option`,
            a: "private",
            b: "protected",
            c: "public",
            d: "none of the above",
            correct: "c",
        },
        
        {
            question: "24. What is the default access specifier for members of an interface?",
            code: `select the correct option`,
            a: "private",
            b: "protected",
            c: "public",
            d: "none of the above",
            correct: "c",
        },
        
        {
            question: "25. By default, is an interface public?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "26. Can we develop a constructor inside an interface?",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "27. Interface attributes are:",
            code: `select the correct option`,
            a: "private",
            b: "static",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "28. We can't create an object for an interface.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
        {
            question: "29. We can't create a reference to an interface.",
            code: `select the correct option`,
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        
        {
            question: "30. We can use an interface for data type purposes.",
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
