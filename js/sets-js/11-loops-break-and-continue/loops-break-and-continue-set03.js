const quizData = [
    {
        "question": "60. Which of the following statements is true about a `do-while` loop?",
        "code": "",
        "a": "The loop body always executes at least once.",
        "b": "It is also known as a pre-test loop.",
        "c": "The loop condition is checked at the end of each iteration.",
        "d": "It is not a valid loop construct in Java.",
        "correct": "a",
    },
    {
        "question": "61. What will be the output of the following code?",
        "code": "int x = 5;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n}\nSystem.out.print(x);",
        "a": "5",
        "b": "11",
        "c": "10",
        "d": "6",
        "correct": "b",
    },
    {
        "question": "62. What is the purpose of the initialization expression in a `for` loop?",
        "code": "",
        "a": "It defines the loop condition.",
        "b": "It specifies the loop body.",
        "c": "It sets the initial value of the loop control variable.",
        "d": "It determines the number of loop iterations.",
        "correct": "c",
    },
    {
        "question": "63. What will be the output of the following code?",
        "code": "int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n    }\n    sum += i;\n}\nSystem.out.print(sum);",
        "a": "30",
        "b": "25",
        "c": "20",
        "d": "15",
        "correct": "a",
    },
    {
        "question": "64. What does the following code print?",
        "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 3; j > 0; j--) {\n        System.out.print(i + j + \" \");\n    }\n    System.out.println();\n}",
        "a": "2 3 4 \n 1 2 3 \n 0 1 2",
        "b": "3 2 1 \n 3 2 1 \n 3 2 1",
        "c": "3 3 3 \n 2 2 2 \n 1 1 1",
        "d": "3 4 5 \n 2 3 4 \n 1 2 3",
        "correct": "d",
    },
    {
        "question": "65. What will be the output of the following code?",
        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0 <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
        "a": "* \n* * \n* * * \n* * * *",
        "b": "* \n* * \n* * * \n* * * * *",
        "c": "* * * * \n* * * \n* * \n*",
        "d": "* * * * \n* * * \n* * \n*",
        "correct": "a",
    },
    {
        "question": "66. What will be the output of the following code?",
        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
        "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
        "b": "1 1 \n2 2 2 \n3 3 3 3 \n4 4 4 4 4",
        "c": "1 \n2 2 \n3 3 3 \n4 4 4 4",
        "d": "1 2 3 4 \n1 2 3 \n1 2 \n1",
        "correct": "a",
    },
    
        {
            "question": "67. What is the output of the following code?",
            "code": "int x = 10;\nfor (int i = 1; i <= 4; i++) {\n    x -= i;\n}\nSystem.out.print(x);",
            "a": "5",
            "b": "0",
            "c": "-5",
            "d": "-10",
            "correct": "a",
        },
        {
            "question": "68. What will be the output of the following code?",
            "code": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n    i += 1;\n}",
            "a": "0 1 2 3 4",
            "b": "1 3",
            "c": "0 2 4",
            "d": "0 1 2 3 4 5",
            "correct": "c",
        },
        {
            "question": "69. What is the purpose of the termination condition in a `for` loop?",
            "code": "",
            "a": "It specifies the loop body.",
            "b": "It sets the initial value of the loop control variable.",
            "c": "It defines the loop condition.",
            "d": "It determines the number of loop iterations.",
            "correct": "c",
        },
        {
            "question": "70. What will be the output of the following code?",
            "code": "for (int i = 0; i < 3; i++) {\n    System.out.print(i);\n    if (i == 1) {\n        break;\n    }\n}",
            "a": "0 1 2",
            "b": "0 1",
            "c": "1",
            "d": "0",
            "correct": "b",
        },
        {
            "question": "71. What does the following code print?",
            "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 4; j > i; j--) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
            "a": "* * * * \n* * * \n* * \n*",
            "b": "* \n* * \n* * * \n* * * *",
            "c": "* * * * \n* * * \n* * \n*",
            "d": "* * * * \n* * * * \n* * * \n* *",
            "correct": "a",
        },
        {
            "question": "72. What will be the value of `sum` after the following code snippet?",
            "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i;\n}",
            "a": "20",
            "b": "25",
            "c": "30",
            "d": "15",
            "correct": "c",
        },
        {
            "question": "73. What will be the output of the following code?",
            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
            "b": "5 \n4 3 \n3 2 1 \n2 1 \n1",
            "c": "1 \n2 2 \n3 3 3 \n4 4 4 4",
            "d": "5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1",
            "correct": "a",
        },
        {
            "question": "74. What is the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    sum += i * i;\n}\nSystem.out.print(sum);",
            "a": "10",
            "b": "20",
            "c": "30",
            "d": "55",
            "correct": "d",
        },
        {
            "question": "75. What will be the output of the following code?",
            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.print(i + \"-\" + j + \" \");\n    }\n}",
            "a": "0-0 0-1 1-0 1-1 2-0 2-1",
            "b": "0-0 1-0 2-0 0-1 1-1 2-1",
            "c": "0-0 0-1 2-0 2-1",
            "d": "0-0 1-0 0-1 1-1 2-0 2-1",
            "correct": "a",
        },
        {
            "question": "76. What is the output of the following code?",
            "code": "int x = 1;\nfor (int i = 1; i <= 4; i++) {\n    x *= i;\n}\nSystem.out.print(x);",
            "a": "1",
            "b": "4",
            "c": "12",
            "d": "24",
            "correct": "d",
        },
        {
            "question": "77. What will be the output of the following code?",
            "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n    i++;\n}",
            "a": "1 2 3 4 5",
            "b": "1 3 5",
            "c": "2 4",
            "d": "1 4",
            "correct": "b",
        },
        {
            "question": "78. What is the purpose of the increment expression in a `for` loop?",
            "code": "select the correct Option",
            "a": "It specifies the loop body.",
            "b": "It sets the initial value of the loop control variable.",
            "c": "It defines the loop condition.",
            "d": "It updates the loop control variable after each iteration.",
            "correct": "d",
        },
        {
            "question": "79. What will be the output of the following code?",
            "code": "int x = 10;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
            "a": "15",
            "b": "12",
            "c": "18",
            "d": "13",
            "correct": "a",
        },
        {
            "question": "80. What does the following code print?",
            "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "0 \\n 0 1 \\n 0 1 2 \\n 0 1 2 3",
            "b": "0 1 2 3 \\n 0 1 2 \\n 0 1 \\n 0",
            "c": "0 \\n 1 2 \\n 2 3 4 \\n 3 4 5 6",
            "d": "0 1 2 3 \\n 0 1 2 \\n 0 1 \\n 0",
            "correct": "a",
        },
        {
            "question": "81. What will be the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 1) {\n    }\n    sum += i;\n}\nSystem.out.print(sum);",
            "a": "4",
            "b": "6",
            "c": "10",
            "d": "5",
            "correct": "c",
        },
        {
            "question": "82. What is the output of the following code?",
            "code": "for (int i = 0; i < 5; i++) {\n    for (int j = i; j >= 0; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "0 0 0 0 0 \\n 1 1 1 1 \\n 2 2 2 \\n 3 3 \\n 4",
            "b": "0 0 0 0 0 \\n 1 1 1 1 \\n 2 2 2 \\n 3 3 \\n 4 4",
            "c": "0 \\n 1 0 \\n 2 1 0 \\n 3 2 1 0 \\n 4 3 2 1 0",
            "d": "0 \\n 1 1 \\n 2 2 2 \\n 3 3 3 3 \\n 4 4 4 4 4",
            "correct": "c",
        },
        {
            "question": "83. What will be the output of the following code?",
            "code": "int x = 5;\nfor (int i = 0; i < 4; i++) {\n    x -= i;\n}\nSystem.out.print(x);",
            "a": "5",
            "b": "2",
            "c": "8",
            "d": "10",
            "correct": "b",
        },
        {
            "question": "84. What does the following code print?",
            "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 4 - i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
            "a": "* * * * \\n * * * \\n * * \\n * \\n",
            "b": "* \\n * * \\n * * * \\n * * * *",
            "c": "* * * * \\n * * * \\n * * \\n *",
            "d": "* \\n * * \\n * * * \\n * * * *",
            "correct": "a",
        },
        {
            "question": "85. What will be the output of the following code?",
            "code": "for (int i = 2; i <= 6; i += 2) {\n    System.out.print(i + \" \");\n}",
            "a": "2 4 6 8 10",
            "b": "2 4 6",
            "c": "4 6 8",
            "d": "2 4 6 8",
            "correct": "b",
        },
        {
            "question": "86. What is the output of the following code?",
            "code": "int x = 0;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    if (x == 3) {\n        break;\n    }\n}\nSystem.out.print(x);",
            "a": "3",
            "b": "1",
            "c": "2",
            "d": "0",
            "correct": "a",
        },
        
        {
            "question": "87. What will be the output of the following code?",
            "code": "int x = 5;\nfor (int i = 1; i <= 4; i++) {\n    x *= i;\n}\nSystem.out.print(x);",
            "a": "25",
            "b": "120",
            "c": "30",
            "d": "24",
            "correct": "b"
        },
        {
            "question": "88. What is the purpose of the loop control variable in a `for` loop?",
            "code": "",
            "a": "It defines the loop condition.",
            "b": "It sets the initial value of the loop control variable.",
            "c": "It specifies the loop body.",
            "d": "It updates the loop control variable after each iteration.",
            "correct": "d"
        },
        {
            "question": "89. What will be the output of the following code?",
            "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n    i--;\n}",
            "a": "1 2 3 4 5",
            "b": "1 3 5",
            "c": "2 4",
            "d": "1 4",
            "correct": "b"
        },
        {
            "question": "90. What does the following code print?",
            "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
            "a": "* \n* * \n* * * \n* * * *",
            "b": "* * * * \n* * * \n* * \n*",
            "c": "* * * * \n* * * \n* * \n*",
            "d": "* \n* * \n* * * \n* * * *",
            "correct": "a"
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