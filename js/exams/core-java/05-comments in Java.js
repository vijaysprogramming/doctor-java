const quizData = 
    [
        {
            "question": "1. What are the types of comments available in Java?",
            "code": `select the correct option`,
            "a": "Single-line, Multi-line, and Documentation comments",
            "b": "Inline, Block, and Documentation comments",
            "c": "Single-line, Inline, and Block comments",
            "d": "Multi-line and Block comments",
            "correct": "a"
        },
        {
            "question": "2. Which of the following symbols is used for single-line comments in Java?",
            "code": `select the correct option`,
            "a": "/*",
            "b": "//",
            "c": "/",
            "d": "#",
            "correct": "b"
        },
        {
            "question": "3. How do you write a multi-line comment in Java?",
            "code": `select the correct option`,
            "a": "// this is a comment",
            "b": "/* this is a comment */",
            "c": "/ this is a comment */",
            "d": "# this is a comment",
            "correct": "b"
        },
        {
            "question": "4. What is the purpose of documentation comments in Java?",
            "code": `select the correct option`,
            "a": "To generate API documentation",
            "b": "To hide code during testing",
            "c": "To speed up program execution",
            "d": "To comment multiple lines of code",
            "correct": "a"
        },
        {
            "question": "5. Which comment style is used to document methods and classes in Java?",
            "code": `select the correct option`,
            "a": "// Single-line comments",
            "b": "/* Multi-line comments */",
            "c": "/* documentation comments\n* documentation comments\n* documentation comments\n*/",
            "d": "<!-- HTML-style comments -->",
            "correct": "c"
        },
        {
            "question": "6. What will happen if you add a comment inside a string in Java?",
            "code": `select the correct option`,
            "a": "The program will ignore the comment",
            "b": "The program will throw an error",
            "c": "The comment will be part of the string output",
            "d": "The comment will be automatically removed",
            "correct": "c"
        },
        {
            "question": "7. Which of the following is correct for a multi-line comment in Java?",
            "code": `select the correct option`,
            "a": "/*\nThis is a comment\nOn multiple lines\n*/",
            "b": "//\nThis is a comment\nOn multiple lines\n//",
            "c": "#\nThis is a comment\nOn multiple lines\n#",
            "d": "//\nThis is a comment\nOn multiple lines\n//",
            "correct": "a"
        },
        {
            "question": "8. What is the output of the following code?\n\nSystem.out.println(\"Hello\"); // This is a comment",
            "code": `select the correct option`,
            "a": "No output due to the comment",
            "b": "Error due to the comment",
            "c": "Hello",
            "d": "Hello followed by \"This is a comment\"",
            "correct": "c"
        },
        {
            "question": "9. What is the purpose of using comments in Java code?",
            "code": `select the correct option`,
            "a": "To increase code execution speed",
            "b": "To temporarily disable a block of code",
            "c": "To add readable notes for programmers",
            "d": "Both B and C",
            "correct": "d"
        },
        {
            "question": "10. Can comments be nested in Java?",
            "code": `select the correct option`,
            "a": "Yes, in all types of comments",
            "b": "No, comments cannot be nested",
            "c": "Only in multi-line comments",
            "d": "Only in documentation comments",
            "correct": "b"
        },
        {
            "question": "11. What will happen if you forget to close a multi-line comment (`/*`) in Java?",
            "code": `select the correct option`,
            "a": "The program will ignore the comment",
            "b": "The program will throw a compilation error",
            "c": "The program will generate a warning",
            "d": "The program will run normally but ignore the unclosed comment",
            "correct": "b"
        },
        {
            "question": "12. What is the output of the following code?\nSystem.out.println(\"Java\"); /* Multi-line\ncomment begins here */ System.out.println(\"Comments\");",
            "code": `select the correct option`,
            "a": "Java\nComments",
            "b": "No output due to comments",
            "c": "Java",
            "d": "Compilation error",
            "correct": "a",
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
