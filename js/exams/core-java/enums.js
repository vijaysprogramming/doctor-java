const quizData = [
    {
        question: "1- In which version of JDK are enums introduced?",
        code: `select the correct option`,
        a: "JDK 1.0",
        b: "JDK 1.4",
        c: "JDK 1.5",
        d: "JDK 1.6",
        correct: "c",
    },
    
    {
        question: "2- Enums are mainly used for grouping similar kind of and fixed number of constants. True/False?",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "3- In which scenario enums can't be used?",
        code: `select the correct option`,
        a: "to represent day names",
        b: "to represent month names",
        c: "to represent continents",
        d: "to represent skills",
        correct: "d",
    },
    
    {
        question: "4- Enum can't become a member of a Java file?",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "5- For enum also class file is generating while compiling?",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "6- Enum constants can be duplicate",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "7- All enum constants are static by default",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "8- We can develop an enum inside a class as a member of the class",
        code: `select the correct option`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "9- Which method of enum is used for reading all constants?",
        code: `select the correct option`,
        a: "values()",
        b: "ordinal()",
        c: "valueOf()",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "10- Which method of enum is used for reading the index of a constant?",
        code: `select the correct option`,
        a: "values()",
        b: "ordinal()",
        c: "valueOf()",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "11- Which method of enum is used for referring a specified constant?",
        code: `select the correct option`,
        a: "values()",
        b: "ordinal()",
        c: "valueOf()",
        d: "none of the above",
        correct: "c",
    },
    
    {
        question: "12- We can achieve uniformity among the developers with enums.",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "13- Every enum should have a minimum of one constructor. If we are not developing any constructors, then the compiler will provide a default constructor",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "14- What is the need of 'constant specific class body' (CSCB)?",
        code: `select the correct option`,
        a: "to provide a constructor",
        b: "to provide a method specific to constant",
        c: "to provide a method generic to all constants",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "15- Is it possible to choose enum constant as an argument to a switch block?",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "16- EnumSet is used to group few or all constants of multiple enums.",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "17- Enum should have a minimum of one constant to provide an attribute or a method, or at least there should be a semicolon before starting an attribute or a method.",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "18- Which access level is allowed for constructors of an enum?",
        code: `select the correct option`,
        a: "private",
        b: "protected",
        c: "public",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "19- Is it possible to develop a main method along with the list of constants in the enum?",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "20- Abstract enum is possible.",
        code: `select the correct option`,
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "21- java.lang.Enum is the superclass to all enums.",
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
