const quizData = [
{
    "question": "211. What is the output of the following Java code?",
    "code": "public class LogicalOperators223 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (!(x < 5) || x % 2 != 0) {\n            System.out.print(\"x is 5 or more or odd\");\n        } else {\n            System.out.print(\"x is less than 5 and even\");\n        }\n    }\n}",
    "a": "x is 5 or more or odd",
    "b": "x is less than 5 and even",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "212. What is the output of the following Java code?",
    "code": "public class LogicalOperators224 {\n    public static void main(String[] args) {\n        int num = 30;\n        if (num > 25 && (num % 3 == 0 || num % 5 == 0)) {\n            System.out.print(\"num is greater than 25 and divisible by 3 or 5\");\n        } else {\n            System.out.print(\"num is 25 or less or not divisible by 3 or 5\");\n        }\n    }\n}",
    "a": "num is greater than 25 and divisible by 3 or 5",
    "b": "num is 25 or less or not divisible by 3 or 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "213. What is the output of the following Java code?",
    "code": "public class LogicalOperators213 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
    "a": "num is greater than 10 or less than 5",
    "b": "num is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "214. What is the output of the following Java code?",
    "code": "public class LogicalOperators214 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
    "a": "x is not greater than 5",
    "b": "x is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "215. What is the output of the following Java code?",
    "code": "public class LogicalOperators215 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
    "a": "num is greater than 5 and less than 10",
    "b": "num is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "216. What is the output of the following Java code?",
    "code": "public class LogicalOperators216 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
    "a": "x is greater than 10 or less than 5",
    "b": "x is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "217. What is the output of the following Java code?",
    "code": "public class LogicalOperators217 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
    "a": "num is not greater than 5",
    "b": "num is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "218. What is the output of the following Java code?",
    "code": "public class LogicalOperators218 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
    "a": "x is greater than 5 and less than 10",
    "b": "x is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "219. What is the output of the following Java code?",
    "code": "public class LogicalOperators219 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
    "a": "num is greater than 10 or less than 5",
    "b": "num is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "220. What is the output of the following Java code?",
    "code": "public class LogicalOperators220 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
    "a": "x is not greater than 5",
    "b": "x is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "221. What is the output of the following Java code?",
    "code": "public class LogicalOperators221 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
    "a": "num is greater than 5 and less than 10",
    "b": "num is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "222. What is the output of the following Java code?",
    "code": "public class LogicalOperators222 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
    "a": "x is greater than 10 or less than 5",
    "b": "x is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "223. What is the output of the following Java code?",
    "code": "public class LogicalOperators223 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
    "a": "num is not greater than 5",
    "b": "num is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "224. What is the output of the following Java code?",
    "code": "public class LogicalOperators224 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
    "a": "x is greater than 5 and less than 10",
    "b": "x is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "225. What is the output of the following Java code?",
    "code": "public class LogicalOperators225 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
    "a": "num is greater than 10 or less than 5",
    "b": "num is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "226. What is the output of the following Java code?",
    "code": "public class LogicalOperators226 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
    "a": "x is not greater than 5",
    "b": "x is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "227. What is the output of the following Java code?",
    "code": "public class LogicalOperators227 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
    "a": "num is greater than 5 and less than 10",
    "b": "num is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "228. What is the output of the following Java code?",
    "code": "public class LogicalOperators228 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
    "a": "x is greater than 10 or less than 5",
    "b": "x is within the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "229. What is the output of the following Java code?",
    "code": "public class LogicalOperators229 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
    "a": "num is not greater than 5",
    "b": "num is greater than 5",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "230. What is the output of the following Java code?",
    "code": "public class LogicalOperators230 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
    "a": "x is greater than 5 and less than 10",
    "b": "x is not in the range",
    "c": "None of the above",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "232. What will be the output of the following Java program?",
    "code": "class J401 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "else2",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "233. What is the output of the following Java code?",
    "code": "class J402 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "else2",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "234. What will be the output of the following Java program?",
    "code": "class J403 {\n    public static void main(String[] args) {\n        if (true)\n            if (true)\n                System.out.println(\"inner if\");\n            else if (false)\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "Not applicable",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "235. What is the output of the following Java code?",
    "code": "class J404 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (true)\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "Not applicable",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "236. What will be the output of the following Java program?",
    "code": "class J405 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (false)\n                System.out.println(\"else1\");\n            else\n                System.out.println(\"else2\");\n        else\n            System.out.println(\"else3\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "else2",
    "d": "else3",
    "correct": "c"
    },
    {
    "question": "237. What is the output of the following Java code?",
    "code": "class J406 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (true)\n                System.out.println(\"else1\");\n            else\n                System.out.println(\"else2\");\n        else\n            System.out.println(\"else3\");\n    }\n}",
    "a": "inner if",
    "b": "else1",
    "c": "else2",
    "d": "else3",
    "correct": "b"
    },
    {
    "question": "238. What will be the output of the following Java program?",
    "code": "class J407 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else\n                if (true)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
    "a": "inner if",
    "b": "inner else",
    "c": "inner else2",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "239. What is the output of the following Java code?",
    "code": "class J408 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (true)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
    "a": "inner if",
    "b": "inner else",
    "c": "inner else2",
    "d": "outer else",
    "correct": "d"
    },
    {
    "question": "240. What will be the output of the following Java program?",
    "code": "class J409 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (false)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
    "a": "inner if",
    "b": "inner else",
    "c": "inner else2",
    "d": "outer else",
    "correct": "d"
    },
    {
    "question": "241. What is the output of the following Java code?",
    "code": "class J410 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (false)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            if (true)\n                System.out.println(\"outer else\");\n    }\n}",
    "a": "inner if",
    "b": "inner else",
    "c": "inner else2",
    "d": "outer else",
    "correct": "d"
    },
    {
    "question": "242. What is the output of the following Java code?",
    "code": "class L411 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from last else if",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "243. What is the output of the following Java code?",
    "code": "class L412 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from last else if",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "244. What is the output of the following Java code?",
    "code": "class L413 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from last else if",
    "d": "Not applicable",
    "correct": "b"
    },
    {
    "question": "245. What is the output of the following Java code?",
    "code": "class L414 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
    "a": "from if",
    "b": "from else if",
    "c": "from last else if",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "246. What is the output of the following Java code?",
    "code": "class L415 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from else\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
    "a": "from if",
    "b": "from else",
    "c": "from nested else",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "247. What is the output of the following Java code?",
    "code": "class L416 {\n    public static void main(String[] args) {\n        if (true) {\n            if (true) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
    "a": "from inner if",
    "b": "from inner else",
    "c": "from outer else",
    "d": "Not applicable",
    "correct": "a"
    },
    {
    "question": "248. What is the output of the following Java code?",
    "code": "class L417 {\n    public static void main(String[] args) {\n        if (false) {\n            if (true) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
    "a": "from inner if",
    "b": "from inner else",
    "c": "from outer else",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "249. What is the output of the following Java code?",
    "code": "class L418 {\n    public static void main(String[] args) {\n        if (false) {\n            if (false) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
    "a": "from inner if",
    "b": "from inner else",
    "c": "from outer else",
    "d": "Not applicable",
    "correct": "c"
    },
    {
    "question": "250. What is the output of the following Java code?",
    "code": "class L419 {\n    public static void main(String[] args) {\n        if (true) {\n            if (false) {\n                System.out.println(\"from inner if\");\n            } else {\n                if (true) {\n                    System.out.println(\"from inner else\");\n                } else {\n                    System.out.println(\"from nested else\");\n                }\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
    "a": "from inner if",
    "b": "from inner else",
    "c": "from nested else",
    "d": "from outer else",
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