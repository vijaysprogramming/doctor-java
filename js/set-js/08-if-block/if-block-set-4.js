const quizData = [
{
    "question": "91. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity91 {\n    public static void main(String[] args) {\n        int a = 8, b = 16;\n        if (a == 8) {\n            System.out.print(\"a is 8\");\n        } else if (b == 16) {\n            System.out.print(\"b is 16\");\n        } else {\n            System.out.print(\"Neither a is 8 nor b is 16\");\n        }\n    }\n}",
    "a": "a is 8",
    "b": "b is 16",
    "c": "Neither a is 8 nor b is 16",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "92. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity92 {\n    public static void main(String[] args) {\n        int x = 25, y = 50;\n        if (x % 5 == 0) {\n            System.out.print(\"x is divisible by 5\");\n        } else if (y % 5 == 0) {\n            System.out.print(\"y is divisible by 5\");\n        } else if (x % 10 == 0) {\n            System.out.print(\"x is divisible by 10\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is divisible by 5",
    "b": "y is divisible by 5",
    "c": "x is divisible by 10",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "93. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity93 {\n    public static void main(String[] args) {\n        int a = 7, b = 14;\n        if (a % 7 == 0) {\n            System.out.print(\"a is divisible by 7\");\n        } else if (b % 7 == 0) {\n            System.out.print(\"b is divisible by 7\");\n        } else {\n            System.out.print(\"Neither a nor b is divisible by 7\");\n        }\n    }\n}",
    "a": "a is divisible by 7",
    "b": "b is divisible by 7",
    "c": "Neither a nor b is divisible by 7",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "94. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity94 {\n    public static void main(String[] args) {\n        int x = 10, y = 20, z = 30;\n        if (x > y) {\n            System.out.print(\"x is greater than y\");\n        } else if (y > z) {\n            System.out.print(\"y is greater than z\");\n        } else {\n            System.out.print(\"z is the greatest\");\n        }\n    }\n}",
    "a": "x is greater than y",
    "b": "y is greater than z",
    "c": "z is the greatest",
    "d": "None of the conditions are true",
    "correct": "c"
    },
    {
    "question": "95. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity95 {\n    public static void main(String[] args) {\n        int a = 12, b = 15;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else {\n            System.out.print(\"Neither a nor b is even\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "Neither a nor b is even",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "96. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity96 {\n    public static void main(String[] args) {\n        int x = 6, y = 9;\n        if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else if (y % 3 == 0) {\n            System.out.print(\"y is divisible by 3\");\n        } else {\n            System.out.print(\"Neither x nor y is divisible by 3\");\n        }\n    }\n}",
    "a": "x is divisible by 3",
    "b": "y is divisible by 3",
    "c": "Neither x nor y is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "97. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity97 {\n    public static void main(String[] args) {\n        int a = 9, b = 18;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "a is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "c"
    },
    {
    "question": "98. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity98 {\n    public static void main(String[] args) {\n        int a = 4, b = 12, c = 20;\n        if (a < b) {\n            System.out.print(\"a is less than b\");\n        } else if (b < c) {\n            System.out.print(\"b is less than c\");\n        } else {\n            System.out.print(\"a is not less than b and b is not less than c\");\n        }\n    }\n}",
    "a": "a is less than b",
    "b": "b is less than c",
    "c": "a is not less than b and b is not less than c",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "99. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity99 {\n    public static void main(String[] args) {\n        int x = 50, y = 25;\n        if (x > y) {\n            System.out.print(\"x is greater than y\");\n        } else if (x < y) {\n            System.out.print(\"x is less than y\");\n        } else {\n            System.out.print(\"x is equal to y\");\n        }\n    }\n}",
    "a": "x is greater than y",
    "b": "x is less than y",
    "c": "x is equal to y",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "100. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity100 {\n    public static void main(String[] args) {\n        int a = 7, b = 14;\n        if (a % 7 == 0) {\n            System.out.print(\"a is divisible by 7\");\n        } else if (b % 7 == 0) {\n            System.out.print(\"b is divisible by 7\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is divisible by 7",
    "b": "b is divisible by 7",
    "c": "a is even",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    
    {
    "question": "101. What is the output of the following Java code?",
    "code": "public class NestedIfElse101 {\n    public static void main(String[] args) {\n        int x = 15, y = 10;\n        if (x > y) {\n            if (x > 20) {\n                System.out.print(\"x is greater than 20\");\n            } else {\n                System.out.print(\"x is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 20",
    "b": "x is not greater than 20",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "b"
    },
    {
    "question": "102. What is the output of the following Java code?",
    "code": "public class NestedIfElse102 {\n    public static void main(String[] args) {\n        int num1 = 10, num2 = 15;\n        if (num1 > num2) {\n            if (num1 > 5) {\n                System.out.print(\"num1 is greater than 5\");\n            } else {\n                System.out.print(\"num1 is not greater than 5\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 5",
    "b": "num1 is not greater than 5",
    "c": "num1 is not greater than num2",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "103. What is the output of the following Java code?",
    "code": "public class NestedIfElse103 {\n    public static void main(String[] args) {\n        int x = 18, y = 20;\n        if (x > y) {\n            if (x > 15) {\n                System.out.print(\"x is greater than 15\");\n            } else {\n                System.out.print(\"x is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 15",
    "b": "x is not greater than 15",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "104. What is the output of the following Java code?",
    "code": "public class NestedIfElse104 {\n    public static void main(String[] args) {\n        int num1 = 12, num2 = 10;\n        if (num1 > num2) {\n            if (num1 > 15) {\n                System.out.print(\"num1 is greater than 15\");\n            } else {\n                System.out.print(\"num1 is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 15",
    "b": "num1 is not greater than 15",
    "c": "num1 is not greater than num2",
    "d": "None of the above",
    "correct": "b"
    },
    {
    "question": "105. What is the output of the following Java code?",
    "code": "public class NestedIfElse105 {\n    public static void main(String[] args) {\n        int x = 25, y = 30;\n        if (x > y) {\n            if (x > 20) {\n                System.out.print(\"x is greater than 20\");\n            } else {\n                System.out.print(\"x is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 20",
    "b": "x is not greater than 20",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "106. What is the output of the following Java code?",
    "code": "public class NestedIfElse106 {\n    public static void main(String[] args) {\n        int num1 = 22, num2 = 18;\n        if (num1 > num2) {\n            if (num1 > 20) {\n                System.out.print(\"num1 is greater than 20\");\n            } else {\n                System.out.print(\"num1 is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 20",
    "b": "num1 is not greater than 20",
    "c": "num1 is not greater than num2",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "107. What is the output of the following Java code?",
    "code": "public class NestedIfElse107 {\n    public static void main(String[] args) {\n        int x = 15, y = 12;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 10",
    "b": "x is not greater than 10",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "108. What is the output of the following Java code?",
    "code": "public class NestedIfElse108 {\n    public static void main(String[] args) {\n        int num1 = 18, num2 = 22;\n        if (num1 > num2) {\n            if (num1 > 20) {\n                System.out.print(\"num1 is greater than 20\");\n            } else {\n                System.out.print(\"num1 is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 20",
    "b": "num1 is not greater than 20",
    "c": "num1 is not greater than num2",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "109. What is the output of the following Java code?",
    "code": "public class NestedIfElse109 {\n    public static void main(String[] args) {\n        int x = 5, y = 8;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 10",
    "b": "x is not greater than 10",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "110. What is the output of the following Java code?",
    "code": "public class NestedIfElse110 {\n    public static void main(String[] args) {\n        int num1 = 8, num2 = 5;\n        if (num1 > num2) {\n            if (num1 > 10) {\n                System.out.print(\"num1 is greater than 10\");\n            } else {\n                System.out.print(\"num1 is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 10",
    "b": "num1 is not greater than 10",
    "c": "num1 is not greater than num2",
    "d": "None of the above",
    "correct": "b"
    },
    
    {
    "question": "111. What is the output of the following Java code?",
    "code": "public class NestedIfElse111 {\n    public static void main(String[] args) {\n        int a = 8, b = 12;\n        if (a > b) {\n            if (a > 10) {\n                System.out.print(\"a is greater than 10\");\n            } else {\n                System.out.print(\"a is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"a is not greater than b\");\n        }\n    }\n}",
    "a": "a is greater than 10",
    "b": "a is not greater than 10",
    "c": "a is not greater than b",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "112. What is the output of the following Java code?",
    "code": "public class NestedIfElse112 {\n    public static void main(String[] args) {\n        int num = 25;\n        if (num % 2 == 0) {\n            if (num > 20) {\n                System.out.print(\"num is even and greater than 20\");\n            } else {\n                System.out.print(\"num is even but not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num is odd\");\n        }\n    }\n}",
    "a": "num is even and greater than 20",
    "b": "num is even but not greater than 20",
    "c": "num is odd",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "113. What is the output of the following Java code?",
    "code": "public class NestedIfElse113 {\n    public static void main(String[] args) {\n        int num = 5;\n        if (num > 10) {\n            if (num % 2 == 0) {\n                System.out.print(\"num is even\");\n            } else {\n                System.out.print(\"num is odd\");\n            }\n        } else {\n            System.out.print(\"num is not greater than 10\");\n        }\n    }\n}",
    "a": "num is even",
    "b": "num is odd",
    "c": "num is not greater than 10",
    "d": "None of the above",
    "correct": "c"
    },
    {
    "question": "114. What is the output of the following Java code?",
    "code": "public class NestedIfElse114 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 20) {\n            if (x < 40) {\n                System.out.print(\"x is between 20 and 40\");\n            } else {\n                System.out.print(\"x is 40 or more\");\n            }\n        } else {\n            System.out.print(\"x is 20 or less\");\n        }\n    }\n}",
    "a": "x is between 20 and 40",
    "b": "x is 40 or more",
    "c": "x is 20 or less",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "115. What is the output of the following Java code?",
    "code": "public class NestedIfElse115 {\n    public static void main(String[] args) {\n        int num = 18;\n        if (num > 15) {\n            if (num % 3 == 0) {\n                System.out.print(\"num is divisible by 3\");\n            } else {\n                System.out.print(\"num is not divisible by 3\");\n            }\n        } else {\n            System.out.print(\"num is 15 or less\");\n        }\n    }\n}",
    "a": "num is divisible by 3",
    "b": "num is not divisible by 3",
    "c": "num is 15 or less",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "116. What is the output of the following Java code?",
    "code": "public class NestedIfElse116 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 0) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is positive and even\");\n            } else {\n                System.out.print(\"x is positive and odd\");\n            }\n        } else {\n            System.out.print(\"x is zero or negative\");\n        }\n    }\n}",
    "a": "x is positive and even",
    "b": "x is positive and odd",
    "c": "x is zero or negative",
    "d": "None of the above",
    "correct": "b"
    },
    {
    "question": "117. What is the output of the following Java code?",
    "code": "public class NestedIfElse117 {\n    public static void main(String[] args) {\n        int a = 20, b = 15;\n        if (a >= b) {\n            if (a == b) {\n                System.out.print(\"a is equal to b\");\n            } else {\n                System.out.print(\"a is greater than b\");\n            }\n        } else {\n            System.out.print(\"a is less than b\");\n        }\n    }\n}",
    "a": "a is equal to b",
    "b": "a is greater than b",
    "c": "a is less than b",
    "d": "None of the above",
    "correct": "b"
    },
    {
    "question": "118. What is the output of the following Java code?",
    "code": "public class NestedIfElse118 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num % 2 == 0) {\n            if (num % 4 == 0) {\n                System.out.print(\"num is divisible by 4\");\n            } else {\n                System.out.print(\"num is not divisible by 4\");\n            }\n        } else {\n            System.out.print(\"num is odd\");\n        }\n    }\n}",
    "a": "num is divisible by 4",
    "b": "num is not divisible by 4",
    "c": "num is odd",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "119. What is the output of the following Java code?",
    "code": "public class NestedIfElse119 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x < 10) {\n            if (x == 0) {\n                System.out.print(\"x is zero\");\n            } else {\n                System.out.print(\"x is less than 10 but not zero\");\n            }\n        } else {\n            System.out.print(\"x is 10 or more\");\n        }\n    }\n}",
    "a": "x is zero",
    "b": "x is less than 10 but not zero",
    "c": "x is 10 or more",
    "d": "None of the above",
    "correct": "a"
    },
    {
    "question": "120. What is the output of the following Java code?",
    "code": "public class NestedIfElse120 {\n    public static void main(String[] args) {\n        int num = 17;\n        if (num % 2 != 0) {\n            if (num > 15) {\n                System.out.print(\"num is an odd number greater than 15\");\n            } else {\n                System.out.print(\"num is an odd number 15 or less\");\n            }\n        } else {\n            System.out.print(\"num is an even number\");\n        }\n    }\n}",
    "a": "num is an odd number greater than 15",
    "b": "num is an odd number 15 or less",
    "c": "num is an even number",
    "d": "None of the above",
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
    