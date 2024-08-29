const quizData = [
{
    "question": "61. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity61 {\n    public static void main(String[] args) {\n        int x = 12, y = 18;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > x) {\n            System.out.print(\"y > x\");\n        } else if (x == y) {\n            System.out.print(\"x and y are equal\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x > y",
    "b": "y > x",
    "c": "x and y are equal",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "62. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity62 {\n    public static void main(String[] args) {\n        int num1 = 20, num2 = 16;\n        if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
    "a": "Divisible by 5",
    "b": "Divisible by 4",
    "c": "Neither divisible by 4 nor by 5",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "63. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity63 {\n    public static void main(String[] args) {\n        int a = 6, b = 15, c = 9;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (c % 3 == 0) {\n            System.out.print(\"c is divisible by 3\");\n        } else {\n            System.out.print(\"None of them are divisible by 3\");\n        }\n    }\n}",
    "a": "a is divisible by 3",
    "b": "b is divisible by 3",
    "c": "c is divisible by 3",
    "d": "None of them are divisible by 3",
    "correct": "b"
    },
    {
    "question": "64. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity64 {\n    public static void main(String[] args) {\n        int x = 10, y = 15, z = 12;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x > y",
    "b": "y > z",
    "c": "z > x",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "65. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity65 {\n    public static void main(String[] args) {\n        int num1 = 18, num2 = 25;\n        if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
    "a": "Divisible by 4",
    "b": "Divisible by 5",
    "c": "Neither divisible by 4 nor by 5",
    "d": "No output",
    "correct": "a"
    },
    {
    "question": "66. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity66 {\n    public static void main(String[] args) {\n        int a = 7, b = 12, c = 10;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (c % 2 == 0) {\n            System.out.print(\"c is even\");\n        } else {\n            System.out.print(\"None of them are even\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "c is even",
    "d": "None of them are even",
    "correct": "d"
    },
    {
    "question": "67. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity67 {\n    public static void main(String[] args) {\n        int x = 12, y = 18;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > x) {\n            System.out.print(\"y > x\");\n        } else if (x == y) {\n            System.out.print(\"x and y are equal\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x > y",
    "b": "y > x",
    "c": "x and y are equal",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "68. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity68 {\n    public static void main(String[] args) {\n        int num1 = 20, num2 = 16;\n        if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
    "a": "Divisible by 5",
    "b": "Divisible by 4",
    "c": "Neither divisible by 4 nor by 5",
    "d": "No output",
    "correct": "b"
    },
    {
    "question": "69. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity69 {\n    public static void main(String[] args) {\n        int a = 6, b = 15, c = 9;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (c % 3 == 0) {\n            System.out.print(\"c is divisible by 3\");\n        } else {\n            System.out.print(\"None of them are divisible by 3\");\n        }\n    }\n}",
    "a": "a is divisible by 3",
    "b": "b is divisible by 3",
    "c": "c is divisible by 3",
    "d": "None of them are divisible by 3",
    "correct": "b"
    },
    {
    "question": "70. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity70 {\n    public static void main(String[] args) {\n        int x = 10, y = 15, z = 12;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x > y",
    "b": "y > z",
    "c": "z > x",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "71. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity71 {\n    public static void main(String[] args) {\n        int x = 9, y = 18;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is even",
    "b": "y is even",
    "c": "x is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "72. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity72 {\n    public static void main(String[] args) {\n        int a = 8, b = 13;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "a is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "73. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity73 {\n    public static void main(String[] args) {\n        int a = 15, b = 24;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is divisible by 3",
    "b": "b is divisible by 3",
    "c": "a is even",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "74. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity74 {\n    public static void main(String[] args) {\n        int x = 20, y = 25, z = 15;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x > y",
    "b": "y > z",
    "c": "z > x",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "75. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity75 {\n    public static void main(String[] args) {\n        int num1 = 30, num2 = 45;\n        if (num1 % 5 == 0) {\n            System.out.print(\"num1 is divisible by 5\");\n        } else if (num1 % 3 == 0) {\n            System.out.print(\"num1 is divisible by 3\");\n        } else if (num2 % 5 == 0) {\n            System.out.print(\"num2 is divisible by 5\");\n        } else {\n            System.out.print(\"Neither num1 nor num2 are divisible by 5 or 3\");\n        }\n    }\n}",
    "a": "num1 is divisible by 5",
    "b": "num1 is divisible by 3",
    "c": "num2 is divisible by 5",
    "d": "Neither num1 nor num2 are divisible by 5 or 3",
    "correct": "a"
    },
    {
    "question": "76. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity76 {\n    public static void main(String[] args) {\n        int a = 12, b = 16;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "a is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "77. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity77 {\n    public static void main(String[] args) {\n        int x = 14, y = 21;\n        if (x % 7 == 0) {\n            System.out.print(\"x is divisible by 7\");\n        } else if (y % 7 == 0) {\n            System.out.print(\"y is divisible by 7\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is divisible by 7",
    "b": "y is divisible by 7",
    "c": "x is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "78. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity78 {\n    public static void main(String[] args) {\n        int a = 24, b = 36;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "a is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "79. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity79 {\n    public static void main(String[] args) {\n        int x = 11, y = 22;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is even",
    "b": "y is even",
    "c": "x is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "80. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity80 {\n    public static void main(String[] args) {\n        int a = 18, b = 20;\n        if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else if (b % 5 == 0) {\n            System.out.print(\"b is divisible by 5\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is divisible by 5",
    "b": "b is divisible by 5",
    "c": "a is even",
    "d": "None of the conditions are true",
    "correct": "c"
    },
    {
    "question": "81. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity81 {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        if (a > b) {\n            System.out.print(\"a is greater than b\");\n        } else if (a < b) {\n            System.out.print(\"a is less than b\");\n        } else {\n            System.out.print(\"a is equal to b\");\n        }\n    }\n}",
    "a": "a is greater than b",
    "b": "a is less than b",
    "c": "a is equal to b",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "82. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity82 {\n    public static void main(String[] args) {\n        int x = 8, y = 12;\n        if (x % 4 == 0) {\n            System.out.print(\"x is divisible by 4\");\n        } else if (y % 4 == 0) {\n            System.out.print(\"y is divisible by 4\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is divisible by 4",
    "b": "y is divisible by 4",
    "c": "x is divisible by 3",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "83. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity83 {\n    public static void main(String[] args) {\n        int num = 25;\n        if (num % 5 == 0) {\n            System.out.print(\"num is divisible by 5\");\n        } else if (num % 10 == 0) {\n            System.out.print(\"num is divisible by 10\");\n        } else if (num % 2 == 0) {\n            System.out.print(\"num is even\");\n        } else {\n            System.out.print(\"num is not divisible by 5 or 10\");\n        }\n    }\n}",
    "a": "num is divisible by 5",
    "b": "num is divisible by 10",
    "c": "num is even",
    "d": "num is not divisible by 5 or 10",
    "correct": "a"
    },
    {
    "question": "84. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity84 {\n    public static void main(String[] args) {\n        int x = 30, y = 25;\n        if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else if (y > 20) {\n            System.out.print(\"y is greater than 20\");\n        } else {\n            System.out.print(\"Neither x nor y is greater than 20\");\n        }\n    }\n}",
    "a": "x is greater than 20",
    "b": "y is greater than 20",
    "c": "Neither x nor y is greater than 20",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "85. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity85 {\n    public static void main(String[] args) {\n        int a = 22, b = 44;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is even",
    "b": "b is even",
    "c": "a is divisible by 5",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "86. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity86 {\n    public static void main(String[] args) {\n        int x = 10, y = 12, z = 15;\n        if (x % 5 == 0) {\n            System.out.print(\"x is divisible by 5\");\n        } else if (y % 5 == 0) {\n            System.out.print(\"y is divisible by 5\");\n        } else if (z % 5 == 0) {\n            System.out.print(\"z is divisible by 5\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is divisible by 5",
    "b": "y is divisible by 5",
    "c": "z is divisible by 5",
    "d": "None of the conditions are true",
    "correct": "c"
    },
    {
    "question": "87. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity87 {\n    public static void main(String[] args) {\n        int a = 50, b = 60;\n        if (a % 10 == 0) {\n            System.out.print(\"a is divisible by 10\");\n        } else if (b % 10 == 0) {\n            System.out.print(\"b is divisible by 10\");\n        } else if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else {\n            System.out.print(\"Neither a nor b are divisible by 10 or 5\");\n        }\n    }\n}",
    "a": "a is divisible by 10",
    "b": "b is divisible by 10",
    "c": "a is divisible by 5",
    "d": "Neither a nor b are divisible by 10 or 5",
    "correct": "a"
    },
    {
    "question": "88. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity88 {\n    public static void main(String[] args) {\n        int x = 22, y = 27;\n        if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else if (y % 3 == 0) {\n            System.out.print(\"y is divisible by 3\");\n        } else if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is divisible by 3",
    "b": "y is divisible by 3",
    "c": "x is even",
    "d": "None of the conditions are true",
    "correct": "b"
    },
    {
    "question": "89. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity89 {\n    public static void main(String[] args) {\n        int a = 45, b = 50;\n        if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else if (b % 5 == 0) {\n            System.out.print(\"b is divisible by 5\");\n        } else if (a % 10 == 0) {\n            System.out.print(\"a is divisible by 10\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "a is divisible by 5",
    "b": "b is divisible by 5",
    "c": "a is divisible by 10",
    "d": "None of the conditions are true",
    "correct": "a"
    },
    {
    "question": "90. What is the output of the following Java code?",
    "code": "public class IfElseIfComplexity90 {\n    public static void main(String[] args) {\n        int x = 14, y = 18;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
    "a": "x is even",
    "b": "y is even",
    "c": "x is divisible by 3",
    "d": "None of the conditions are true",
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