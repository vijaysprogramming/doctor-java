const quizData = [
    {
        "question": "301. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 3; j++) {\n                for (int k = 1; k <= 2; k++) {\n                    for (int l = 1; l <= 3; l++) {\n                        if (i + j == k + l) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "1 1 1 1 1 1 2 2 1 1 2 3",
        "b": "1 2 1 1 1 3 2 2 1 2 2 3",
        "c": "1 2 2 3 1 2 2 2 1 2 3 3",
        "d": "1 1 2 2 1 1 2 3 1 1 3 3",
        "correct": "b"
    },
    {
        "question": "302. What is the purpose of the i + j == k + l condition in the code provided?",
        "a": "To check if the sum of i and j is equal to the sum of k and l.",
        "b": "To check if the difference between i and j is equal to the difference between k and l.",
        "c": "To check if the product of i and j is equal to the product of k and l.",
        "d": "To check if the quotient of i and j is equal to the quotient of k and l.",
        "correct": "a"
    },
    {
        "question": "303. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 4; k++) {\n                    for (int l = 4; l <= 5; l++) {\n                        if (i * j * k * l > 30) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "2 2 3 4 2 2 3 5 2 2 4 4",
        "b": "2 3 4 5 2 3 4 5",
        "c": "1 2 3 4 2 3 4 5",
        "d": "1 1 3 4 1 1 4 5",
        "correct": "b"
    },
    {
        "question": "304. In the code provided, how many times will the innermost loop iterate?",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "5 times",
        "correct": "b"
    },
    {
        "question": "305. In the code provided, how many times will the if block inside the innermost loop be executed?",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
    },
    {
        "question": "306. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 2; j <= 3; j++) {\n                for (int k = 3; k <= 4; k++) {\n                    for (int l = 4; l <= 5; l++) {\n                        if (i * j * k * l > 20 && (i + j + k + l) % 3 == 0) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
        "a": "1 2 3 4",
        "b": "1 2 3 5",
        "c": "2 2 3 4",
        "d": "2 2 3 5",
        "correct": "a"
    },
    {
        "question": "307. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 5;\n        for (int i = 1; i <= 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "11",
        "correct": "d"
      },
      {
        "question": "308. What is the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i <= 3) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "1 2",
        "b": "1 2 3",
        "c": "1 2 3 4",
        "d": "2 3 4",
        "correct": "b"
      },
      {
        "question": "309. In the following code, what will be the output if the initial value of `x` is 10?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        while (x > 0) {\n            System.out.print(x + \" \");\n            x -= 3;\n        }\n    }\n}",
        "a": "10 7 4 1",
        "b": "10 8 6 4",
        "c": "10 8 5 2",
        "d": "10 7 3",
        "correct": "a"
      },
      {
        "question": "310. What is the final value of `x` after the following code executes?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 0;\n        for (int i = 1; i <= 5; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "10",
        "b": "15",
        "c": "20",
        "d": "25",
        "correct": "b"
      },
      {
        "question": "311. What will the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        for (int i = 1; i <= 3; i++) {\n            x *= i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "2",
        "b": "4",
        "c": "6",
        "d": "12",
        "correct": "c"
      },
      {
        "question": "312. What is the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (int i = 0; i < 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "2",
        "b": "3",
        "c": "5",
        "d": "7",
        "correct": "d"
      },
      {
        "question": "313. How many times will the following loop execute?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "d"
      },
      {
        "question": "314. What will be the final value of `x` after the following code executes?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        while (x <= 4) {\n            x++;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "correct": "c"
      },
      {
        "question": "315. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i < 4) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "1 2",
        "b": "1 2 3",
        "c": "1 2 3 4",
        "d": "2 3 4",
        "correct": "b"
      },
      {
        "question": "316. What is the value of `x` after the following loop?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        for (int i = 1; i <= 5; i++) {\n            x -= 2;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "0",
        "b": "2",
        "c": "4",
        "d": "8",
        "correct": "b"
      },
      {
        "question": "317. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        for (int i = 1; i < 4; i++) {\n            x *= i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "1",
        "b": "2",
        "c": "6",
        "d": "24",
        "correct": "c"
      },
      {
        "question": "318. What is the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        while (i <= 4) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "2 3",
        "b": "2 3 4",
        "c": "2 3 4 5",
        "d": "3 4 5",
        "correct": "b"
      },
      {
        "question": "319. In the following code, what will be the value of `x` after the loop?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 0;\n        for (int i = 1; i <= 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
        "a": "3",
        "b": "4",
        "c": "6",
        "d": "9",
        "correct": "c"
      },
      {
        "question": "320. How many times will the loop in the following code execute?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i += 2) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
      },
      {
        "question": "321. What will the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 3;\n        while (x > 0) {\n            x--;\n            System.out.print(x + \" \");\n        }\n    }\n}",
        "a": "2 1 0",
        "b": "3 2 1",
        "c": "2 1 0 -1",
        "d": "1 0 -1",
        "correct": "a"
      },
        {
            "question": "322. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
            "a": "Flag: true",
            "b": "Flag: false",
            "c": "none",
            "d": "not applicable",
            "correct": "b"
        },
        {
            "question": "323. What is the purpose of the `i * j * k < 10` condition in the code provided?",
            "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
            "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
            "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
            "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
            "correct": "a"
        },
        {
            "question": "324. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
            "a": "A B C D E F G H I",
            "b": "A B C D E F G H J",
            "c": "A B C D E F G H K",
            "d": "A B C D E F G H L",
            "correct": "a"
        },
        {
            "question": "325. In the code provided, how many times will the innermost loop iterate?",
            "a": "2 times",
            "b": "3 times",
            "c": "4 times",
            "d": "5 times",
            "correct": "d"
        },
        {
            "question": "326. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
            "a": "1 time",
            "b": "2 times",
            "c": "3 times",
            "d": "4 times",
            "correct": "a"
        },
        {
            "question": "327. What will be the output of the following code?",
            "code": "class P {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k > 10) {\n                        count++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Count: \" + count);\n    }\n}",
            "a": "Count: 10",
            "b": "Count: 20",
            "c": "Count: 30",
            "d": "Count: 40",
            "correct": "b"
        },
        {
            "question": "328. What is the purpose of the `i * j * k > 10` condition in the code provided?",
            "a": "To check if the product of `i`, `j`, and `k` is greater than 10.",
            "b": "To check if the product of `i`, `j`, and `k` is less than 10.",
            "c": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
            "d": "To check if the sum of `i`, `j`, and `k` is less than 10.",
            "correct": "a"
        },
        {
            "question": "329. In the code provided, what is the data type of the `count` variable?",
            "a": "byte",
            "b": "short",
            "c": "int",
            "d": "long",
            "correct": "c"
        },
        {
            "question": "329. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    result += i / j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
            "a": "Result: 1.3666666666666667",
            "b": "Result: 1.511111111111111",
            "c": "Result: 1.6666666666666667",
            "d": "Result: 1.8222222222222222",
            "correct": "a"
        },
        {
            "question": "330. In the code provided, what is the data type of the `result` variable?",
            "a": "float",
            "b": "double",
            "c": "int",
            "d": "long",
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