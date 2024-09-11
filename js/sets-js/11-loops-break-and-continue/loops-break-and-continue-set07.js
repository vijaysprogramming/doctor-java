const quizData = [
    {
        "question": "181. What is the purpose of the variable `n` in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = n; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "To store the value of `i`.",
        "b": "To store the value of `j`.",
        "c": "To control the number of rows and columns in the pattern.",
        "d": "To determine the number of iterations in the outer loop.",
        "correct": "c"
    },
    {
        "question": "182. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
        "a": "1 2 3 4 5 6 7 8 9 10 11 12",
        "b": "1 2 3 4 6 12",
        "c": "1 2 3 4 5 6",
        "d": "1 2 3 4 6",
        "correct": "b"
    },
    {
        "question": "183. What is the purpose of the `if` block in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
        "a": "To print the divisors of the number `num`.",
        "b": "To check if `i` is divisible by `num`.",
        "c": "To increment the value of `num` if it's a divisor of `i`.",
        "d": "To determine if `num` is prime or composite.",
        "correct": "a"
    },
    {
        "question": "184. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
        "a": "Depends on the value of `num`.",
        "b": "1 time",
        "c": "Number of divisors of `num`.",
        "d": "Equal to `num`.",
        "correct": "c"
    },
    {
        "question": "185. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = x++;\n        System.out.println(x + \" \" + y);\n    }\n}",
        "a": "6 5",
        "b": "5 6",
        "c": "5 5",
        "d": "6 6",
        "correct": "a"
    },
    {
        "question": "186. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int c = 30;\n        \n        if (++a > 10 && b++ < 20 || c-- > 30) {\n            System.out.println(a + \" \" + b + \" \" + c);\n        } else {\n            System.out.println(\"Nope\");\n        }\n    }\n}",
        "a": "11 20 30",
        "b": "11 21 30",
        "c": "10 20 29",
        "d": "Nope",
        "correct": "a"
    },
    {
        "question": "187. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
        "a": "3 10",
        "b": "2 10",
        "c": "3 9",
        "d": "2 9",
        "correct": "d"
    },
    {
        "question": "188. What is the purpose of the `--` operator in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
        "a": "To increment the value of `a` before using it.",
        "b": "To decrement the value of `a` after using it.",
        "c": "To decrement the value of `b` before using it.",
        "d": "To increment the value of `b` after using it.",
        "correct": "b"
    },
    {
        "question": "189. In the code provided, what is the value of `a` after the expression `a-- + --a` is evaluated?",
        "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "correct": "a"
    },
    {
        "question": "190. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
        "a": "True",
        "b": "False",
        "correct": "b"
    },
    {
        "question": "191. What is the purpose of the `&&` operator in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
        "a": "To check if both `x` and `y` are equal to 10.",
        "b": "To check if either `x` or `y` is equal to 10.",
        "c": "To perform logical AND between the expressions.",
        "d": "To perform logical OR between the expressions.",
        "correct": "c"
    },
    {
        "question": "192. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "0 times",
        "d": "Depends on the values of `x` and `y`.",
        "correct": "c"
    },
    {
        "question": "193. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        if (p > 10 || q < 5) {\n            System.out.println(\"Success\");\n        } else {\n            System.out.println(\"Failure\");\n        }\n    }\n}",
        "a": "Success",
        "b": "Failure",
        "correct": "a"
    },
    {
        "question": "194. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int m = 8;\n        int n = 10;\n        \n        if (m > 5 && n > 10) {\n            System.out.println(\"Yes\");\n        } else {\n            System.out.println(\"No\");\n        }\n    }\n}",
        "a": "Yes",
        "b": "No",
        "correct": "b"
    },
    {
        "question": "195. What is the purpose of the `||` operator in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int m = 8;\n        int n = 10;\n        \n        if (m > 5 || n > 10) {\n            System.out.println(\"Yes\");\n        } else {\n            System.out.println(\"No\");\n        }\n    }\n}",
        "a": "To perform logical AND between the expressions.",
        "b": "To perform logical OR between the expressions.",
        "c": "To check if both `m` and `n` are greater than 10.",
        "d": "To check if either `m` or `n` is greater than 10.",
        "correct": "b"
    },
    {
        "question": "196. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        if (r > 15 || s > 40) {\n            System.out.println(\"High\");\n        } else {\n            System.out.println(\"Low\");\n        }\n    }\n}",
        "a": "High",
        "b": "Low",
        "correct": "a"
    },
    {
        "question": "197. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "1 2 3 4 5",
        "b": "1 3 5",
        "c": "2 4",
        "d": "1",
        "correct": "b"
    },
    {
        "question": "198. What is the purpose of the `i++` statement inside the loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "To increment `i` by 1 after each iteration.",
        "b": "To decrement `i` by 1 after each iteration.",
        "c": "To increment `i` by 2 after each iteration.",
        "d": "To decrement `i` by 2 after each iteration.",
        "correct": "c"
    },
    {
        "question": "199. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "5 times",
        "correct": "b"
    },
    {
        "question": "200. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
        "a": "1 2 3 4 5",
        "b": "5 4 3 2 1",
        "c": "5 4 3 2",
        "d": "1",
        "correct": "b"
    },
    {
        "question": "201. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
        "b": "1\n2 1\n3 2 1\n4 3 2 1\n5 4 3 2 1",
        "c": "1\n1 1\n1 1 1\n1 1 1 1\n1 1 1 1 1",
        "d": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5",
        "correct": "a"
    },
    {
        "question": "202. What is the purpose of the inner loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "To generate the column values for a triangular pattern.",
        "b": "To increment the value of `i` for each iteration.",
        "c": "To calculate the factorial of `j`.",
        "d": "To check if `i` is equal to `j`.",
        "correct": "a"
    },
    {
        "question": "203. In the code provided, how many times will the inner loop execute in total?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "5 times",
        "b": "10 times",
        "c": "15 times",
        "d": "25 times",
        "correct": "c"
    },
    {
        "question": "204. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 4; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "4 3 2 1\n4 3 2\n4 3\n4",
        "b": "1 2 3 4\n1 2 3\n1 2\n1",
        "c": "4 4 4 4\n3 3 3\n2 2\n1",
        "d": "4 3 2 1\n3 2 1\n2 1\n1",
        "correct": "a"
    },
    {
        "question": "205. What is the purpose of the outer loop in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 4; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "To generate the row values for a triangular pattern.",
        "b": "To increment the value of `j` for each iteration.",
        "c": "To calculate the factorial of `i`.",
        "d": "To check if `i` is equal to `j`.",
        "correct": "a"
    },
    {
        "question": "206. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i + j == 4) {\n                    System.out.print(\"* \");\n                }\n            }\n        }\n    }\n}",
        "a": "* * * *",
        "b": "* * *",
        "c": "* * * *",
        "d": "*",
        "correct": "b"
    },
    {
        "question": "207. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
        "a": "11 12 13",
        "b": "14 13 12",
        "c": "11 14 13",
        "d": "14 15 12",
        "correct": "a"
    },
    {
        "question": "208. What is the purpose of the `++x` and `--y` statements in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
        "a": "To increment `x` and `y` by 1 before using them.",
        "b": "To increment `x` by 1 and decrement `y` by 1 before using them.",
        "c": "To decrement `x` by 1 and increment `y` by 1 before using them.",
        "d": "To decrement `x` and `y` by 1 before using them.",
        "correct": "b"
    },
    {
        "question": "209. In the code provided, how many times will the loop iterate?",
        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
        "a": "2 times",
        "b": "3 times",
        "c": "4 times",
        "d": "6 times",
        "correct": "b"
    },
    {
        "question": "210. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "7",
        "correct": "d"
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