const quizData = [
    
        {
            "question": "which command is used to set env variable in the command prompt?",
            "code": "Select The Correct Answer",
            "a": "echo",
            "b": "path",
            "c": "classpath",
            "d": "set",
            "correct": "d"
        },
        {
            "question": "which command is used to read env variable in the command prompt?",
            "code": "Select The Correct Answer",
            "a": "echo",
            "b": "path",
            "c": "classpath",
            "d": "set",
            "correct": "a"
        },
        {
            "question": "How many ways are there to set path env variable?",
            "code": "Select The Correct Answer",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "0",
            "correct": "b"
        },
        {
            "question": "which way of setting a path will be local to the current command prompt?",
            "code": "Select The Correct Answer",
            "a": "through set command",
            "b": "in my computer under user level",
            "c": "in my computer under system level",
            "d": "none of the above",
            "correct": "a"
        },
        {
            "question": "which way of setting a path will be to the current user and all of his every session?",
            "code": "Select The Correct Answer",
            "a": "through set command",
            "b": "in my computer under user level",
            "c": "in my computer under system level",
            "d": "none of the above",
            "correct": "b"
        },
        {
            "question": "which way of setting a path will be to every user?",
            "code": "Select The Correct Answer",
            "a": "through set command",
            "b": "in my computer under user level",
            "c": "in my computer under system level",
            "d": "none of the above",
            "correct": "c"
        },
        {
            "question": "Why do we need to set the path?",
            "code": "Select The Correct Answer",
            "a": "to find out the java version",
            "b": "in order to specify the commands location",
            "c": "in order open command prompt",
            "d": "none of the above",
            "correct": "b"
        },
        {
            "question": "how to know the version of JDK?",
            "code": "Select The Correct Answer",
            "a": "javac -version",
            "b": "javac -version",
            "c": "JDK version",
            "d": "JDK version",
            "correct": "a"
        },
        {
            "question": "which folder of JDK contains the commands?",
            "code": "Select The Correct Answer",
            "a": "bin",
            "b": "lib",
            "c": "cmd",
            "d": "javac",
            "correct": "a"
        },
        {
            "question": "which command is used to compile java program?",
            "code": "Select The Correct Answer",
            "a": "java",
            "b": "javac",
            "c": "Compile",
            "d": "java_c",
            "correct": "b"
        },
        {
            "question": "which command is used to run java program?",
            "code": "Select The Correct Answer",
            "a": "java",
            "b": "javac",
            "c": "Compile",
            "d": "java_c",
            "correct": "a"
        },
        {
            "question": "what is the file extension to java program?",
            "code": "Select The Correct Answer",
            "a": "java",
            "b": "javac",
            "c": "Compile",
            "d": "txt",
            "correct": "a"
        },
        {
            "question": "Which type of file will be developed by javac command?",
            "code": "Select The Correct Answer",
            "a": "java",
            "b": "class",
            "c": "Compile",
            "d": "txt",
            "correct": "b"
        },
        {
            "question": "Which type of file will be used by java command to run?",
            "code": "Select The Correct Answer",
            "a": "java",
            "b": "class",
            "c": "compile",
            "d": "txt",
            "correct": "b"
        },
        {
            "question": "From which location we have to trigger javac command?",
            "code": "Select The Correct Answer",
            "a": "from the place where java file is saved",
            "b": "from the place where class file is generated",
            "c": "from the place where javac command available",
            "d": "from the place where java command available",
            "correct": "a"
        },
        {
            "question": "From which location we have to trigger java command?",
            "code": "Select The Correct Answer",
            "a": "from the place where java file is saved",
            "b": "from the place where class file is generated",
            "c": "from the place where javac command available",
            "d": "from the place where java command available",
            "correct": "b"
        },
        {
            "question": "what is the order of the commands to be triggered?",
            "code": "Select The Correct Answer",
            "a": "first javac and then java",
            "b": "first java and then javac",
            "correct": "a"
        },
        {
            "question": "Which option of javac command is used to specify different location for class files?",
            "code": "Select The Correct Answer",
            "a": "d",
            "b": "cp",
            "correct": "a"
        },
        {
            "question": "Which option of java command is used to specify class files location?",
            "code": "Select The Correct Answer",
            "a": "d",
            "b": "cp",
            "correct": "b"
        },
        {
            "question": "Which option of java command is used to find out version of JDK?",
            "code": "Select The Correct Answer",
            "a": "version",
            "b": "java",
            "c": "JDK",
            "correct": "a"
        },
        {
            "question": "Which option of java command is used to find out all options and their description?",
            "code": "Select The Correct Answer",
            "a": "all",
            "b": "help",
            "c": "total",
            "correct": "b"
        },
        {
            "question": "Which command is used to change the current directory in the command prompt?",
            "code": "Select The Correct Answer",
            "a": "cd",
            "b": "change",
            "c": "move",
            "correct": "a"
        },
        {
            "question": "Which command is used to move to parent of the current directory?",
            "code": "Select The Correct Answer",
            "a": "cd parent",
            "b": "cd ..",
            "c": "cd mv",
            "correct": "b"
        },
        {
    "question": 43,
    "code": "we can use any constructor to create an object even the same constructor not available in the same class",
    "a": "Yes",
    "b": "No",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": 44,
    "code": "default constructor from a compiler can be even with an arguments",
    "a": "Yes",
    "b": "No",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "b"
}

    
    
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
