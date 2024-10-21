const quizData = [
    {
        question: "01. What is machine-level language also known as?",
        code: `select the correct option`,
        a: "Binary code",
        b: "Assembly language",
        c: "Low-level language",
        d: "High-level language",
        correct: "a",
    },
    {
        question: "02. Which programming language is one step above machine code?",
        code: `select the correct option`,
        a: "High-level language",
        b: "Assembly language",
        c: "Low-level language",
        d: "Scripting language",
        correct: "b",
    },
    {
        question: "03. What is a major disadvantage of machine-level programming language?",
        code: `select the correct option`,
        a: "Direct control over hardware",
        b: "Easy readability",
        c: "Highly specific to architecture",
        d: "Portability across platforms",
        correct: "c",
    },
    {
        question: "04. Which programming language provides a human-readable representation of computer instructions using mnemonics and symbols?",
        code: `select the correct option`,
        a: "Machine code",
        b: "Assembly language",
        c: "Low-level language",
        d: "High-level language",
        correct: "b",
    },
    {
        question: "05. Which type of programming language is closer to hardware compared to high-level languages?",
        code: `select the correct option`,
        a: "High-level language",
        b: "Machine code",
        c: "Low-level language",
        d: "Assembly language",
        correct: "c",
    },
    {
        question: "06. What do low-level programming languages like assembly use to represent operations and memory addresses?",
        code: `select the correct option`,
        a: "Binary digits",
        b: "Mnemonics and symbols",
        c: "English-like syntax",
        d: "High-level abstractions",
        correct: "b",
    },
    {
        question: "07. Which type of language offers higher-level abstractions while still allowing direct access to system resources?",
        code: `select the correct option`,
        a: "High-level language",
        b: "Machine code",
        c: "Mid-level language",
        d: "Low-level language",
        correct: "c",
    },
    {
        question: "08. Which language is known for its use of mnemonics like MOV for move and ADD for addition?",
        code: `select the correct option`,
        a: "Java",
        b: "Python",
        c: "x86 Assembly",
        d: "COBOL",
        correct: "c",
    },
    {
        question: "09. Which type of programming languages are designed to be more abstract and user-friendly?",
        code: `select the correct option`,
        a: "High-level language",
        b: "Low-level language",
        c: "Machine code",
        d: "Assembly language",
        correct: "a",
    },
    {
        question: "10. What is a key advantage of high-level programming languages?",
        code: `select the correct option`,
        a: "Direct control over hardware",
        b: "Portability across platforms",
        c: "Closer to machine code",
        d: "Efficient use of system resources",
        correct: "b",
    },
    {
        question: "11. Which language introduced structured programming concepts like loops and blocks?",
        code: `select the correct option`,
        a: "Fortran",
        b: "COBOL",
        c: "ALGOL",
        d: "LISP",
        correct: "c",
    },
    {
        question: "12. What is one of the characteristics of COBOL programming language?",
        code: `select the correct option`,
        a: "Readability and English-like syntax",
        b: "Designed for artificial intelligence research",
        c: "Known for its use in scientific computing",
        d: "Supports dynamic typing",
        correct: "a",
    },
    {
        question: "13. Who were the creators of the Java programming language?",
        code: `select the correct option`,
        a: "Bill Gates and Paul Allen",
        b: "Steve Jobs and Steve Wozniak",
        c: "James Gosling and Mike Sheridan",
        d: "Linus Torvalds and Richard Stallman",
        correct: "c",
    },
    {
        question: "14. When was Java officially announced to the public?",
        code: `select the correct option`,
        a: "1985",
        b: "1995",
        c: "2005",
        d: "2015",
        correct: "b",
    },
    {
        question: "15. What was the original name of the language before it was renamed to Java?",
        code: `select the correct option`,
        a: "Oak",
        b: "Pine",
        c: "Maple",
        d: "Cedar",
        correct: "a",
    },
    {
        question: "16. What is the slogan that highlights Java's platform independence?",
        code: `select the correct option`,
        a: "Write Once, Run Anywhere (WORA)",
        b: "Code Once, Execute Anywhere (COEA)",
        c: "Compile Once, Deploy Anywhere (CODA)",
        d: "Execute Once, Deploy Anywhere (EODA)",
        correct: "a",
    },
    {
        question: "17. What component is required to execute Java bytecode on a specific platform?",
        code: `select the correct option`,
        a: "Java Compiler",
        b: "Java Development Kit (JDK)",
        c: "Java Virtual Machine (JVM)",
        d: "Java Runtime Environment (JRE)",
        correct: "c",
    },
    {
        question: "18. What feature of Java allows it to be platform-independent?",
        code: `select the correct option`,
        a: "Just-In-Time (JIT) Compilation",
        b: "Write Once, Run Anywhere (WORA)",
        c: "Direct hardware control",
        d: "High performance optimization",
        correct: "b",
    },
    {
        question: "19. Which company acquired Sun Microsystems, taking over the development of Java?",
        code: `select the correct option`,
        a: "IBM",
        b: "Microsoft",
        c: "Oracle Corporation",
        d: "Google",
        correct: "c",
    },
    {
        question: "20. What was the original purpose of the 'Green Project' initiated by Sun Microsystems?",
        code: `select the correct option`,
        a: "To develop a programming language for interactive television",
        b: "To create a new operating system",
        c: "To design a graphics processing unit",
        d: "To develop a mobile application platform",
        correct: "a",
    },
    {
        question: "21. What is an advantage of machine-level programming language?",
        code: `select the correct option`,
        a: "Portability",
        b: "Direct control over hardware",
        c: "Easy readability",
        d: "High-level abstraction",
        correct: "b",
    },
    {
        question: "22. What type of programming languages provide powerful constructs for solving complex problems?",
        code: `select the correct option`,
        a: "Machine-level language",
        b: "Low-level language",
        c: "High-level language",
        d: "Assembly language",
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
