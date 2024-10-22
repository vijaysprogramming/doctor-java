const quizData = [
    
    {
        question: "1.println method automatically goes to the next line after printing?",
        code: "Select The Correct Answer",
        a: " true",
        b: "false",
        c: "not applicable",
        d: "non of above",
        correct: "d"
    },
    {
        question: "2.print method automatically goes to the next line after printing?",
        code: `Select The Correct Answer`,
        a: "true",
        b: "false",
        b: "false",
        c: "not applicable",
        d: "non of above",
        correct: "a"
    },
    {
        question: "3.which method goes to the next line after printing?",
        code: `Select The Correct Answer`,
        a: "println",
        b: "print",
        c: "scanf",
        d: "non of above",
        correct: "a"
    },
    {
        question: "4.System.out.println(Hello) // how many lines of output?",
        code: `Select The Correct Answer`,
        a: "1",
        b: "2",
        c: "0",
        c: "not applicable",
        d: "6",
        correct: "a"
    },
    {
        question: "5.System.out.print(Hello); // how many lines of output?",
        code: `Select The Correct Answer`,
        a: "1",
        b: "2",
        c: "0",
        c: "4",
        d: "non of above",
        correct: "a"
    },
    {
        question: "6.which is correct syntactically?",
        code: `Select The Correct Answer`,
        a: "System.out.println();",
        b: "System.out.print();",
        c: "System.in.print();",
        d: "non of above",

        correct: "a"
    }
    {
        question: "6. What is the output of the following code?",
        code: `System.out.print("Hello ");\nSystem.out.println("World");`,
        a: "Hello\nWorld",
        b: "Hello World",
        c: "World\nHello",
        d: "World Hello",
    
        correct: "b"
    },
    {
        question: "8. What happens if you don't include a newline character \\n in print()?",
        code: `Select the correct answer`,
        a: "The text prints on the same line.",
        b: "The text prints on the next line.",
        c: "The program throws an error.",
        d: "It depends on the operating system.",
    
        correct: "a"
    },
    {
        question: "9. How many times will the following code print 'Java'?",
        code: `System.out.print("Java");\nSystem.out.print("Java");\nSystem.out.println("Java");`,
        a: "1",
        b: "2",
        c: "3",
        d: "4",
    
        correct: "c"
    },
    {
        question: "10. What is the output of the following code?",
        code: `System.out.println("A");\nSystem.out.print("B");\nSystem.out.print("C");\nSystem.out.println("D");`,
        a: "A\nBCD",
        b: "A\nB\nC\nD",
        c: "A B C D",
        d: "ABCD",
    
        correct: "a"
    },
    {
        question: "11. Which method is used to ensure that the cursor moves to a new line after each output in Java?",
        code: `Select the correct answer`,
        a: "print()",
        b: "println()",
        c: "printf()",
        d: "output()",
    
        correct: "b"
    },
    {
        question: "12. What is the behavior of `System.out.print('A\\nB');`?",
        code: `System.out.print("A\\nB");`,
        a: "A\nB",
        b: "AB",
        c: "A B",
        d: "Compilation error",
    
        correct: "a"
    },
    {
        question: "13. How many lines will the following code print?",
        code: `System.out.println("Line1");\nSystem.out.print("Line2");\nSystem.out.print("Line3");\nSystem.out.println("Line4");`,
        a: "2",
        b: "3",
        c: "4",
        d: "1",
    
        correct: "b"
    },
    {
        question: "14. Which method is preferred when you need to print multiple items on the same line?",
        code: `Select the correct answer`,
        a: "println()",
        b: "print()",
        c: "Both are the same",
        d: "Neither",
    
        correct: "b"
    },
    {
        question: "15. What is the output of the following code?",
        code: `System.out.print("First");\nSystem.out.println();\nSystem.out.println("Second");`,
        a: "First\nSecond",
        b: "FirstSecond",
        c: "First\nSecond",
        d: "First Second",
    
        correct: "a"
    },
    {
        question: "16. What will be printed if this code is executed?",
        code: `System.out.println();\nSystem.out.println("Java");\nSystem.out.println();`,
        a: "Java",
        b: "Java",
        c: "Empty lines followed by 'Java'",
        d: "Java followed by empty lines",
    
        correct: "c"
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
codeEl.innerHTML = `<pre><code class="language.java">${currentQuizData.code}</code></pre>`;
a_text.innerHTML = currentQuizData.a;
b_text.innerHTML = currentQuizData.b;
c_text.innerHTML = currentQuizData.c;
d_text.innerHTML = currentQuizData.d;

hljs.highlightAll(); 
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
    <h2 style="text.align: center; font.size: 2rem;">Quiz Results</h2>
    <p style="font.size: 1.5rem; text.align: center;">You answered ${score}/${quizData.length} questions correctly</p>
    <div style="margin.top: 2rem; max.height: 400px; overflow.y: auto; padding: 1rem; border: 1px solid #ccc; border.radius: 10px;">
        <h3 style="text.align: center; margin.bottom: 2rem;">Detailed Summary</h3>
        <ul style="list.style.type: none; padding: 0; font.size: 1.2rem;">
            ${selectedAnswers.map((result, index) => `
                <li style="margin.bottom: 1.5rem;">
                    <strong>Question ${index + 1}:</strong> ${result.question}<br>
                    <pre><code class="language.java">${result.code}</code></pre>
                    <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                    ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
                </li>
            `).join('')}
        </ul>
    </div>
    <div style="text.align: center; margin.top: 2rem;">
        <button onclick="location.reload()" style="font.size: 1.2rem; padding: 0.8rem 1.5rem; background.color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
    </div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}
