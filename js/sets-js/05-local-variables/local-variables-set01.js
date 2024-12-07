const quizData = [
    
        {
            "question": "01. How many primitive data types are there in Java?",
            "code": `select the correct option`,
            "a": "5",
            "b": "6",
            "c": "8",
            "d": "10",
            "correct": "c",
        },
        {
            "question": "02. Which of the following is NOT a primitive data type in Java?",
            "code": `select the correct option`,
            "a": "int",
            "b": "char",
            "c": "boolean",
            "d": "String",
            "correct": "d",
        },
        {
            "question": "03. What is the range of the `byte` data type in Java?",
            "code": `select the correct option`,
            "a": "-128 to 127",
            "b": "0 to 255",
            "c": "-32768 to 32767",
            "d": "-2147483648 to 2147483647",
            "correct": "a",
        },
        {
            "question": "04. What is the default data type for decimal values in Java?",
            "code": `select the correct option`,
            "a": "float",
            "b": "double",
            "c": "int",
            "d": "long",
            "correct": "b",
        },
        {
            "question": "05. Which symbol is used for assignment in Java?",
            "code": `select the correct option`,
            "a": "==",
            "b": "=",
            "c": "->",
            "d": ":",
            "correct": "b",
        },
        {
            "question": "06. Which keyword is used to declare a variable in Java?",
            "code": `select the correct option`,
            "a": "var",
            "b": "let",
            "c": "datatype",
            "d": "The type of the variable itself (e.g., int, float)",
            "correct": "d",
        },
        {
            "question": "07. Which of the following declarations is correct for initializing a `float` variable?",
            "code": `select the correct option`,
            "a": "float f = 5.67;",
            "b": "float f = 5.67f;",
            "c": "float f = \"5.67\";",
            "d": "float f = '5.67';",
            "correct": "b",
        },
        {
            "question": "08. What is the correct syntax to declare and initialize an `int` variable in Java?",
            "code": `select the correct option`,
            "a": "int 10 = i;",
            "b": "int i; i = 10;",
            "c": "int i = 10;",
            "d": "int i = '10';",
            "correct": "c",
        },
        {
            "question": "09. What is the value range of the `long` data type in Java?",
            "code": `select the correct option`,
            "a": "-128 to 127",
            "b": "-32768 to 32767",
            "c": "-2147483648 to 2147483647",
            "d": "-9223372036854775808 to 9223372036854775807",
            "correct": "d",
        },
        {
            "question": "10. In Java, a `variable` must be ____________ before it is used.",
            "code": `select the correct option`,
            "a": "Declared",
            "b": "Initialized",
            "c": "Declared and initialized",
            "d": "None of the above",
            "correct": "c",
        },
        {
            "question": "11. What is the process of assigning a new value to an already declared variable called?",
            "code": `select the correct option`,
            "a": "Initialization",
            "b": "Assignment",
            "c": "Re-initialization",
            "d": "Declaration",
            "correct": "c",
        },
        {
            "question": "12. What will happen if you try to use a local variable in Java before initializing it?",
            "code": `select the correct option`,
            "a": "Compilation error",
            "b": "The variable will be assigned a default value",
            "c": "Runtime error",
            "d": "It will print null",
            "correct": "a",
        },
        {
            "question": "13. What is the Java convention for naming class names?",
            "code": `select the correct option`,
            "a": "Starts with a lowercase letter and follows camelCase",
            "b": "Starts with an uppercase letter and follows camelCase",
            "c": "All lowercase letters",
            "d": "Starts with an uppercase letter, but camelCase is optional",
            "correct": "b",
        },
        {
            "question": "14. Which of the following is the correct way to declare multiple variables of the same type in one line?",
            "code": `select the correct option`,
            "a": "int a, b, c;",
            "b": "int a b c;",
            "c": "int a = 5, b = 10, c = 15;",
            "d": "Both A and C",
            "correct": "d",
        },
        {
            "question": "15. Which of the following values would you need to add `f` or `F` to in Java?",
            "code": `select the correct option`,
            "a": "3.14",
            "b": "45",
            "c": "0x5A",
            "d": "true",
            "correct": "a",
        },
        {
            "question": "16. What is the smallest data type (in terms of memory size) in Java?",
            "code": `select the correct option`,
            "a": "byte",
            "b": "short",
            "c": "int",
            "d": "float",
            "correct": "a",
        },
        {
            "question": "17. What is the range of the `int` data type in Java?",
            "code": `select the correct option`,
            "a": "-128 to 127",
            "b": "-32768 to 32767",
            "c": "-2147483648 to 2147483647",
            "d": "-9223372036854775808 to 9223372036854775807",
            "correct": "c",
        },
        {
            "question": "18. What is the result of the following code?\n\nint i = 10;\ni = 20;\nSystem.out.println(i);",
            "code": `select the correct option`,
            "a": "Compilation error",
            "b": "10",
            "c": "20",
            "d": "0",
            "correct": "c",
        },
        {
            "question": "19. What is the default value of a local variable in Java?",
            "code": `select the correct option`,
            "a": "0",
            "b": "null",
            "c": "false",
            "d": "None (must be initialized before use)",
            "correct": "d",
        },
        {
            "question": "20. What is the value range of the `float` data type in Java?",
            "code": "`select the correct option`,",
            "a": "1.40239846e-45f to 3.40282347e+38f",
            "b": "4.94065645841246544e-324 to 1.79769313486231570e+308",
            "c": "-128 to 127",
            "d": "-2147483648 to 2147483647",
            "correct": "a",
        
            {
                "question": "01. How many primitive data types are there in Java?",
                "code": `select the correct option`,
                "a": "5",
                "b": "6",
                "c": "8",
                "d": "10",
                "correct": "c",
            },
            {
                "question": "02. Which of the following is NOT a primitive data type in Java?",
                "code": `select the correct option`,
                "a": "int",
                "b": "char",
                "c": "boolean",
                "d": "String",
                "correct": "d",
            },
            {
                "question": "03. What is the range of the `byte` data type in Java?",
                "code": `select the correct option`,
                "a": "-128 to 127",
                "b": "0 to 255",
                "c": "-32768 to 32767",
                "d": "-2147483648 to 2147483647",
                "correct": "a",
            },
            {
                "question": "04. What is the default data type for decimal values in Java?",
                "code": `select the correct option`,
                "a": "float",
                "b": "double",
                "c": "int",
                "d": "long",
                "correct": "b",
            },
            {
                "question": "05. Which symbol is used for assignment in Java?",
                "code": `select the correct option`,
                "a": "==",
                "b": "=",
                "c": "->",
                "d": ":",
                "correct": "b",
            },
            {
                "question": "06. Which keyword is used to declare a variable in Java?",
                "code": `select the correct option`,
                "a": "var",
                "b": "let",
                "c": "datatype",
                "d": "The type of the variable itself (e.g., int, float)",
                "correct": "d",
            },
            {
                "question": "07. Which of the following declarations is correct for initializing a `float` variable?",
                "code": `select the correct option`,
                "a": "float f = 5.67;",
                "b": "float f = 5.67f;",
                "c": "float f = \"5.67\";",
                "d": "float f = '5.67';",
                "correct": "b",
            },
            {
                "question": "08. What is the correct syntax to declare and initialize an `int` variable in Java?",
                "code": `select the correct option`,
                "a": "int 10 = i;",
                "b": "int i; i = 10;",
                "c": "int i = 10;",
                "d": "int i = '10';",
                "correct": "c",
            },
            {
                "question": "09. What is the value range of the `long` data type in Java?",
                "code": `select the correct option`,
                "a": "-128 to 127",
                "b": "-32768 to 32767",
                "c": "-2147483648 to 2147483647",
                "d": "-9223372036854775808 to 9223372036854775807",
                "correct": "d",
            },
            {
                "question": "10. In Java, a `variable` must be ____________ before it is used.",
                "code": `select the correct option`,
                "a": "Declared",
                "b": "Initialized",
                "c": "Declared and initialized",
                "d": "None of the above",
                "correct": "c",
            },
            {
                "question": "11. What is the process of assigning a new value to an already declared variable called?",
                "code": `select the correct option`,
                "a": "Initialization",
                "b": "Assignment",
                "c": "Re-initialization",
                "d": "Declaration",
                "correct": "c",
            },
            {
                "question": "12. What will happen if you try to use a local variable in Java before initializing it?",
                "code": `select the correct option`,
                "a": "Compilation error",
                "b": "The variable will be assigned a default value",
                "c": "Runtime error",
                "d": "It will print null",
                "correct": "a",
            },
            {
                "question": "13. What is the Java convention for naming class names?",
                "code": `select the correct option`,
                "a": "Starts with a lowercase letter and follows camelCase",
                "b": "Starts with an uppercase letter and follows camelCase",
                "c": "All lowercase letters",
                "d": "Starts with an uppercase letter, but camelCase is optional",
                "correct": "b",
            },
            {
                "question": "14. Which of the following is the correct way to declare multiple variables of the same type in one line?",
                "code": `select the correct option`,
                "a": "int a, b, c;",
                "b": "int a b c;",
                "c": "int a = 5, b = 10, c = 15;",
                "d": "Both A and C",
                "correct": "d",
            },
            {
                "question": "15. Which of the following values would you need to add `f` or `F` to in Java?",
                "code": `select the correct option`,
                "a": "3.14",
                "b": "45",
                "c": "0x5A",
                "d": "true",
                "correct": "a",
            },
            {
                "question": "16. What is the smallest data type (in terms of memory size) in Java?",
                "code": `select the correct option`,
                "a": "byte",
                "b": "short",
                "c": "int",
                "d": "float",
                "correct": "a",
            },
            {
                "question": "17. What is the range of the `int` data type in Java?",
                "code": `select the correct option`,
                "a": "-128 to 127",
                "b": "-32768 to 32767",
                "c": "-2147483648 to 2147483647",
                "d": "-9223372036854775808 to 9223372036854775807",
                "correct": "c",
            },
            {
                "question": "18. What is the result of the following code?\n\nint i = 10;\ni = 20;\nSystem.out.println(i);",
                "code": `select the correct option`,
                "a": "Compilation error",
                "b": "10",
                "c": "20",
                "d": "0",
                "correct": "c",
            },
            {
                "question": "19. What is the default value of a local variable in Java?",
                "code": `select the correct option`,
                "a": "0",
                "b": "null",
                "c": "false",
                "d": "None (must be initialized before use)",
                "correct": "d",
            },
            
                {
                    "question": "21. Which of the following is NOT a valid identifier in Java?",
                    "code": `select the correct option`,
                    "a": "_myVar",
                    "b": "$myVar",
                    "c": "1myVar",
                    "d": "myVar123",
                    "correct": "c"
                },
                {
                    "question": "22. Which of the following is an example of variable initialization?",
                    "code": `select the correct option`,
                    "a": "int i;",
                    "b": "i = 10;",
                    "c": "int i = 10;",
                    "d": "Both B and C",
                    "correct": "d"
                },
                {
                    "question": "23. What is the correct syntax to reinitialize an `int` variable in Java?",
                    "code": `select the correct option`,
                    "a": "int i = 10; i = 20;",
                    "b": "int i = 10, i = 20;",
                    "c": "i = 20;",
                    "d": "Both A and C",
                    "correct": "d"
                },
                {
                    "question": "24. What is the key difference between primitive and non-primitive data types in Java?",
                    "code": `select the correct option`,
                    "a": "Primitive types are user-defined, non-primitive are built-in",
                    "b": "Non-primitive types are built-in, primitive types are user-defined",
                    "c": "Primitive types hold actual values, non-primitive types store references",
                    "d": "Non-primitive types are faster than primitive types",
                    "correct": "c"
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
