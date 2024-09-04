const quizData = [
{
    "question": "31.Select the correct option",
    "code": "class M31 {\n    public static void test(double ... y, String x) {\n    }\n}",
    "a": "Yes",
    "b": "No",
    "c": "None",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": "32.Select the correct option",
    "code": "class M32 {\n    public static void test(double ... y) {\n    }\n    public static void test(double[] z) {\n    }\n}",
    "a": "Yes",
    "b": "No",
    "c": "None",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "39.Select the correct option",
    "code": "class M34 {\n    public static void test(byte b1) {\n        System.out.println(\"byte\");\n    }\n    public static void test(double b1) {\n        System.out.println(\"double\");\n    }\n    public static void test(Byte b1) {\n        System.out.println(\"Byte\");\n    }\n    public static void test(Integer b1) {\n        System.out.println(\"Integer\");\n    }\n    public static void test(Number b1) {\n        System.out.println(\"Number\");\n    }\n    public static void test(Object b1) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        test(10.5);\n        test((byte)10);\n        test(10);\n        test((Number)10);\n        test((Object)10);\n    }\n}",
    "a": "byte\ndouble\nByte\nInteger\nNumber\nObject",
    "b": "byte\ndouble\nByte\nNumber\nObject",
    "c": "None",
    "d": "Not applicable",
    "correct": "a"
},

    {
        "question": "40.For primitive byte data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "byte",
        "b": "Byte",
        "c": "BYTE",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "41.For primitive short data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "Short",
        "b": "SHORT",
        "c": "short",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "43.For primitive int data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "Int",
        "b": "Integer",
        "c": "integer",
        "d": "int",
        "correct": "b"
    },
    {
        "question": "44.For primitive long data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "long",
        "b": "LONG",
        "c": "Long",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "45.For primitive float data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "Float",
        "b": "FLOAT",
        "c": "float",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "46.For primitive double data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "DOUBLE",
        "b": "Double",
        "c": "double",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "47.For primitive char data type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "Char",
        "b": "Character",
        "c": "char",
        "d": "character",
        "e": "None",
        "correct": "b"
    },
    {
        "question": "48.For primitive boolean type what is the corresponding wrapper class?",
        "code": "Select The Correct Answer",
        "a": "boolean",
        "b": "BOOLEAN",
        "c": "Boolean",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "49.All wrapper classes are available in………..",
        "code": "Select The Correct Answer",
        "a": "java.util",
        "b": "java.awt",
        "c": "java.lang",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "50Is it possible to develop a sub class to wrapper class?",
        "code": "Select The Correct Answer",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "51.All wrapper classes are not eligible to serialization?",
        "code": "Select The Correct Answer",
        "a": "True",
        "b": "False",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "52.Wrapper classes accepts only objects?",
        "code": "Select The Correct Answer",
        "a": "True",
        "b": "False",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "53.Is it possible to convert a string into int primitive if string contains characters?",
        "code": "Select The Correct Answer",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "54.What is the special allowed in case of converting string to double primitive or float primitive?",
        "code": "Select The Correct Answer",
        "a": ".(dot)",
        "b": "_(Underscore)",
        "c": "*(star)",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "55.While converting string to boolean primitive which is other than true what you will get as output?",
        "code": "Select The Correct Answer",
        "a": "Exception",
        "b": "false",
        "c": "none",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "56.Inside a character class parse method is not available",
        "code": "Select The Correct Answer",
        "a": "True",
        "b": "False",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "57.Auto boxing and auto unboxing introduced in which version?",
        "code": "Select The Correct Answer",
        "a": "JDK1.4",
        "b": "JDK1.3",
        "c": "JDK1.5",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "58.Every wrapper class can upcast to number or object?",
        "code": "Select The Correct Answer",
        "a": "True",
        "b": "False",
        "c": "None",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "60.We can use method arguments as variable number of arguments?",
        "code": "Select The Correct Answer",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
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