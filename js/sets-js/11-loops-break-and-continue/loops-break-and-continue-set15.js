const quizData = [
   
    {
        "question": "421. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 18.928571428571427",
        "b": "Result: 24.571428571428573",
        "c": "Result: 31.571428571428573",
        "d": "Result: 38.92857142857143",
        "correct": "b"
    },
    {
        "question": "422. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        break middle;\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 312",
        "b": "Total: 504",
        "c": "Total: 624",
        "d": "Total: 726",
        "correct": "b"
    },
    {
        "question": "423. What is the purpose of the label `outer` in the code provided?",
        "a": "To break out of the innermost loop when a certain condition is met.",
        "b": "To break out of the middle loop when a certain condition is met.",
        "c": "To break out of the outermost loop when a certain condition is met.",
        "d": "To skip the current iteration of the outermost loop when a certain condition is met.",
        "correct": "c"
    },
    {
        "question": "424. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    System.out.print((char) (character + j + k) + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "F G H J K L M N",
        "b": "I J K M N O P Q",
        "c": "K L M O P Q R S",
        "d": "M N O Q R S T U",
        "correct": "c"
    },
    {
        "question": "425. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 87.0",
        "b": "Result: 96.0",
        "c": "Result: 104.0",
        "d": "Result: 108.0",
        "correct": "a"
    },
    {
        "question": "426. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 != 0 && j % 2 == 0 && k % 2 != 0) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 348",
        "b": "Total: 504",
        "c": "Total: 624",
        "d": "Total: 756",
        "correct": "b"
    },
    {
        "question": "427. What is the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k > 30.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 128.0",
        "b": "Result: 156.0",
        "c": "Result: 182.0",
        "d": "Result: 204.0",
        "correct": "c"
    },
    {
        "question": "428. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 132",
        "b": "Total: 168",
        "c": "Total: 192",
        "d": "Total: 216",
        "correct": "b"
    },
    {
        "question": "429. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        outer: for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 != 0 && j % 2 == 0 && k % 2 != 0) {\n                        break outer;\n                    }\n                    System.out.print((char) (character + i + j + k) + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "B C D F G H J K L",
        "b": "E F G H I J K L M",
        "c": "G H I J K L M N O",
        "d": "I J K L M N O P Q",
        "correct": "c"
    },
    {
        "question": "430. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 48.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 94.0",
        "b": "Result: 102.0",
        "c": "Result: 118.0",
        "d": "Result: 126.0",
        "correct": "b"
    },
    {
        "question": "431. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k == 36) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 288",
        "b": "Total: 336",
        "c": "Total: 384",
        "d": "Total: 432",
        "correct": "a"
    },
    {
        "question": "432. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 5; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k == 72.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 118.0",
        "b": "Result: 132.0",
        "c": "Result: 148.0",
        "d": "Result: 162.0",
        "correct": "c"
    },
    {
        "question": "434. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 48) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 168",
        "b": "Total: 192",
        "c": "Total: 216",
        "d": "Total: 240",
        "correct": "b"
    },
    {
        "question": "435. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 54.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 142.0",
        "b": "Result: 156.0",
        "c": "Result: 172.0",
        "d": "Result: 186.0",
        "correct": "a"
    },
    {
        "question": "436. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 336",
        "b": "Total: 396",
        "c": "Total: 456",
        "d": "Total: 516",
        "correct": "b"
    },
    {
        "question": "437. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: -18.5",
        "b": "Result: -14.5",
        "c": "Result: -10.5",
        "d": "Result: -6.5",
        "correct": "b"
    },
    {
        "question": "438. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "439. What is the purpose of the `break` statement with label `middle` in the code provided?",
        "code": "",
        "a": "To skip the current iteration of the middle loop.",
        "b": "To exit the middle loop when the condition is met.",
        "c": "To skip the remaining code in the innermost loop.",
        "d": "To terminate the outer loop when the condition is met.",
        "correct": "b"
    },
    {
        "question": "438. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 144",
        "b": "Total: 216",
        "c": "Total: 288",
        "d": "Total: 360",
        "correct": "b"
    },
    {
        "question": "439. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
        "code": "",
        "a": "To skip the current iteration of the innermost loop when all variables are odd.",
        "b": "To terminate the innermost loop when all variables are odd.",
        "c": "To skip the current iteration of the middle loop when all variables are odd.",
        "d": "To terminate the middle loop when all variables are odd.",
        "correct": "a"
    },
    {
        "question": "440. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 102",
        "b": "Total: 144",
        "c": "Total: 186",
        "d": "Total: 228",
        "correct": "b"
    },
    {
        "question": "441. What is the purpose of the label `middle` in the code provided?",
        "code": "",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "c"
    },
    {
        "question": "442. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                    }\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 9.75",
        "b": "Result: 13.75",
        "c": "Result: 18.25",
        "d": "Result: 23.25",
        "correct": "b"
    },
    {
        "question": "442. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 54.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: 142.0",
        "b": "Result: 156.0",
        "c": "Result: 172.0",
        "d": "Result: 186.0",
        "correct": "a"
    },
    {
        "question": "443. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            outer: for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        total += i + j + k;\n                        break outer;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 18",
        "b": "Total: 27",
        "c": "Total: 36",
        "d": "Total: 45",
        "correct": "a"
    },
    {
        "question": "444. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        total += i + j + k;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 12",
        "b": "Total: 15",
        "c": "Total: 18",
        "d": "Total: 21",
        "correct": "a"
    },
    {
        "question": "443. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
        "code": "",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "c"
    },
    {
        "question": "444. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
        "a": "Result: -14.5",
        "b": "Result: -10.5",
        "c": "Result: -6.5",
        "d": "Result: -2.5",
        "correct": "a"
    },
    {
        "question": "445. What does the `break` statement in the code provided do?",
        "code": "",
        "a": "It exits the current loop and proceeds to the next iteration of the outer loop.",
        "b": "It exits the current loop and proceeds to the next iteration of the middle loop.",
        "c": "It exits the current loop and proceeds to the next iteration of the innermost loop.",
        "d": "It exits the current loop and terminates the entire loop structure.",
        "correct": "b"
    },
    {
        "question": "446. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
        "a": "Flag: true",
        "b": "Flag: false",
        "c": "none",
        "d": "not applicable",
        "correct": "b"
    },
    {
        "question": "447. What is the purpose of the `break` statement with label `middle` in the code provided?",
        "code": "",
        "a": "To exit the innermost loop and continue with the next iteration of the middle loop.",
        "b": "To exit the middle loop and continue with the next iteration of the outer loop.",
        "c": "To skip the remaining code in the innermost loop and continue with the next iteration of the middle loop.",
        "d": "To terminate the middle loop and proceed with the next iteration of the outer loop.",
        "correct": "d"
    },
    {
        "question": "448. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 12) {\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 102",
        "b": "Total: 132",
        "c": "Total: 156",
        "d": "Total: 180",
        "correct": "b"
    },
    {
        "question": "449. What is the purpose of the label `middle` in the code provided?",
        "code": "",
        "a": "To identify the different levels of nesting in the loops.",
        "b": "To create separate instances of the loops with different initial values.",
        "c": "To identify the exit points of the loops when using `break` statements.",
        "d": "To differentiate between loops that use `break` statements and loops that don't.",
        "correct": "c"
    },
    {
        "question": "450. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
        "a": "Total: 108",
        "b": "Total: 144",
        "c": "Total: 180",
        "d": "Total: 216",
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