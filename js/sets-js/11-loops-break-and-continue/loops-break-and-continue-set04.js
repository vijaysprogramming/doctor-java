const quizData = [
    {
        "question": "91. What will be the output of the following code?",
        "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i;\n    }\n}\nSystem.out.print(sum);",
        "a": "4",
        "b": "6",
        "c": "10",
        "d": "5",
        "correct": "b"
    },
    {
        "question": "92. What is the output of the following code?",
        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 4; j >= i; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
        "a": "4 4 4 4 \n4 4 4 \n4 4 \n4",
        "b": "1 2 3 4 \n1 2 3 \n1 2 \n1",
        "c": "1 2 3 4 \n2 3 4 \n3 4 \n4",
        "d": "4 3 2 1 \n4 3 2 \n4 3 \n4",
        "correct": "d"
    },
    {
        "question": "93. What will be the output of the following code?",
        "code": "int x = 1;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "correct": "d"
    },
    {
        "question": "94. What does the following code print?",
        "code": "for (int i = 4; i > 0; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
        "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
        "b": "4 \n3 2 \n2 1 \n1",
        "c": "4 3 2 1 \n3 2 1 \n2 1 \n1",
        "d": "1 2 3 4 \n1 2 3 \n1 2 \n1",
        "correct": "c"
    },
    {
        "question": "95. What will be the output of the following code?",
        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(i + \" \");\n    }\n    System.out.println();\n}",
        "a": "1 \n2 2 \n3 3 3 \n4 4 4 4",
        "b": "1 \n1 2 \n1 2 3 \n1 2 3 4",
        "c": "1 1 1 1 \n2 2 2 \n3 3 \n4",
        "d": "1 \n2 2 \n3 3 3 \n4 4 4",
        "correct": "a"
    },
    {
        "question": "96. What is the output of the following code?",
        "code": "int x = 10;\nfor (int i = 1; i <= 4; i++) {\n    x -= i;\n    i++;\n}\nSystem.out.print(x);",
        "a": "5",
        "b": "10",
        "c": "6",
        "d": "8",
        "correct": "d"
    },
    {
        "question": "97. What will be the output of the following code?",
        "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i;\n}\nSystem.out.print(sum);",
        "a": "20",
        "b": "25",
        "c": "30",
        "d": "1",
        "correct": "c"
    },
    {
        "question": "98. What is the purpose of the termination condition in a `for` loop?",
        "code": "",
        "a": "It specifies the loop body.",
        "b": "It sets the initial value of the loop control variable.",
        "c": "It defines the loop condition.",
        "d": "It determines the number of loop iterations.",
        "correct": "c"
    },
    {
        "question": "99. What will be the output of the following code?",
        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
        "a": "* \n* * \n* * * \n* * * *",
        "b": "* * * * \n* * * \n* * \n*",
        "c": "* * * * \n* * * \n* * \n*",
        "d": "* \n* * \n* * * \n* * * *",
        "correct": "a"
    },
    {
        "question": "100. What does the following code print?",
        "code": "int x = 0;\nfor (int i = 1; i <= 5; i++) {\n    x += i;\n    if (x == 6) {\n        break;\n    }\n}\nSystem.out.print(x);",
        "a": "6",
        "b": "1",
        "c": "2",
        "d": "5",
        "correct": "a"
    },
    {
        "question": "101. What will be the output of the following code?",
        "code": "for (int i = 0; i < 5; i++) {\n    for (int j = 4; j >= i; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
        "a": "4 4 4 4 4 \n3 3 3 3 \n2 2 2 \n1 1 \n0",
        "b": "0 1 2 3 4 \n0 1 2 3 \n0 1 2 \n0 1 \n0",
        "c": "4 3 2 1 0 \n4 3 2 1 \n4 3 2 \n4 3 \n4",
        "d": "4"
    },
    
        {
            "question": "102. What will be the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i * i;\n    }\n}\nSystem.out.print(sum);",
            "a": "20",
            "b": "6",
            "c": "14",
            "d": "30",
            "correct": "c"
        },
        {
            "question": "103. What is the output of the following code?",
            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n 2 2 \n 3 3 3 \n 4 4 4 4",
            "b": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
            "c": "1 1 1 1 \n 2 2 2 \n 3 3 \n 4",
            "d": "1 \n 2 2 \n 3 3 3 \n 4 4 4",
            "correct": "b"
        },
        {
            "question": "104. What will be the output of the following code?",
            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = i; j >= 0; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "0 \n 0 1 \n 0 1 2",
            "b": "0 \n 1 0 \n 2 1 0",
            "c": "0 1 2 \n 0 1 \n 0",
            "d": "0 1 2 \n 1 0 \n 2 1 0",
            "correct": "a"
        },
        {
            "question": "105. What is the output of the following code?",
            "code": "int x = 1;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
            "a": "1",
            "b": "2",
            "c": "3",
            "d": "4",
            "correct": "d"
        },
        {
            "question": "106. What does the following code print?",
            "code": "for (int i = 4; i > 0; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
            "b": "4 \n 3 2 \n 2 1 \n 1",
            "c": "1 2 3 4 \n 2 3 4 \n 3 4 \n 4",
            "d": "4 3 2 1 \n 4 3 2 \n 4 3 \n 4",
            "correct": "b"
        },
        {
            "question": "107. What will be the output of the following code?",
            "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n}",
            "a": "1 2 3 4 5",
            "b": "1 2 3 4",
            "c": "5 4 3 2 1",
            "d": "5 4 3 2",
            "correct": "a"
        },
        {
            "question": "108. What is the purpose of the loop control variable in a `for` loop?",
            "a": "It defines the loop condition.",
            "b": "It sets the initial value of the loop control variable.",
            "c": "It specifies the loop body.",
            "d": "It updates the loop control variable after each iteration.",
            "correct": "d"
        },
        {
            "question": "109. What will be the output of the following code?",
            "code": "for (int i = 0; i < 4; i++) {\n    System.out.print(i + \" \");\n}",
            "a": "0 1 2 3",
            "b": "0 1 2",
            "c": "3 2 1 0",
            "d": "3 2 1",
            "correct": "a"
        },
        {
            "question": "110. What does the following code print?",
            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
            "a": "* \n * * \n * * *",
            "b": "* * * \n * * \n *",
            "c": "* * * \n * * \n *",
            "d": "* \n * * \n * * *",
            "correct": "a"
        },
        {
            "question": "111. What will be the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i;\n    }\n}\nSystem.out.print(sum);",
            "a": "6",
            "b": "4",
            "c": "2",
            "d": "10",
            "correct": "a"
        },
        {
            "question": "112. What is the output of the following code?",
            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
            "b": "1 \n 2 2 \n 3 3 3 \n 4 4 4 4",
            "c": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
            "d": "1 \n 2 \n 3 \n 4",
            "correct": "a"
        },
        {
            "question": "113. What will be the output of the following code?",
            "code": "for (int i = 5; i >= 1; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4 \n 1 2 3 4 5",
            "b": "5 4 3 2 1 \n 4 3 2 1 \n 3 2 1 \n 2 1 \n 1",
            "c": "1 2 3 4 5 \n 1 2 3 4 \n 1 2 3 \n 1 2 \n 1",
            "d": "5 \n 4 4 \n 3 3 3 \n 2 2 2 2 \n 1 1 1 1 1",
            "correct": "b"
        },
        {
            "question": "114. What will be the output of the following code?",
            "code": "int x = 0;\nfor (int i = 1; i <= 5; i++) {\n    x += i;\n}\nSystem.out.print(x);",
            "a": "10",
            "b": "11",
            "c": "15",
            "d": "25",
            "correct": "c"
        },
        {
            "question": "115. What does the following code print?",
            "code": "for (int i = 3; i >= 1; i--) {\n    for (int j = i; j >= 1; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
            "a": "1 \n 1 2 \n 1 2 3",
            "b": "3 \n 2 1 \n 1",
            "c": "3 2 1 \n 2 1 \n 1",
            "d": "1 \n 2 \n 3",
            "correct": "c"
        },
        {
            "question": "116. What will be the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i * i;\n}\nSystem.out.print(sum);",
            "a": "220",
            "b": "120",
            "c": "154",
            "d": "286",
            "correct": "a"
        },
        {
            "question": "117. What will be the output of the following code?",
            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
            "a": "Prints nothing",
            "b": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,5 \n 15,4",
            "c": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 14,5 \n 15,4",
            "d": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,6 \n 15,5",
            "correct": "b"
        },
        {
            "question": "118. What is the purpose of the termination condition in the `for` loop?",
            "code": "",
            "a": "It defines the loop condition.",
            "b": "It sets the initial value of the loop control variables.",
            "c": "It specifies the loop body.",
            "d": "It determines the number of loop iterations.",
            "correct": "a"
        },
        {
            "question": "119. In the code provided, how many times will the loop body be executed?",
            "code": "",
            "a": "15 times",
            "b": "16 times",
            "c": "20 times",
            "d": "21 times",
            "correct": "b"
        },
        {
            "question": "120. What does the following code print?",
            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
            "a": "Prints nothing",
            "b": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,5 \n 15,4",
            "c": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 14,5 \n 15,4",
            "d": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,6 \n 15,5",
            "correct": "b"
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