const quizData = [
    {
        "question": "151. What will be the value of `i` after the loop completes execution?",
        "code": "",
        "a": "2",
        "b": "3",
        "c": "4",
        "d": "5",
        "correct": "b"
    },
    {
        "question": "152. Which part of the `for` loop is executed after each iteration?",
        "code": "",
        "a": "Initialization expression",
        "b": "Loop body",
        "c": "Condition",
        "d": "Increment expression",
        "correct": "d"
    },
    {
        "question": "153. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "correct": "a"
    },
    {
        "question": "154. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 2;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "correct": "a"
    },
    {
        "question": "155. What does the `System.out.println(\"FINAL\");` statement after the loop do?",
        "code": "",
        "a": "Prints the word \"FINAL\".",
        "b": "Prints the value of `i`.",
        "c": "Prints the word \"FINAL\" followed by a space.",
        "d": "Prints the value of `i` followed by the word \"FINAL\".",
        "correct": "a"
    },
    {
        "question": "156. In the code provided, what will be the final output printed after the loop?",
        "code": "",
        "a": "BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n FINAL",
        "c": "BODY \n INCREMENT \n FINAL",
        "d": "FINAL",
        "correct": "a"
    },
    {
        "question": "157. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
        "a": "0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2",
        "b": "0,0 1,1 2,2",
        "c": "0,0 1,0 2,0 0,1 1,1 2,1 0,2 1,2 2,2",
        "d": "0,0",
        "correct": "a"
    },
    {
        "question": "158. What is the purpose of the inner `for` loop in the code provided?",
        "code": "",
        "a": "It defines the loop condition for the outer loop.",
        "b": "It initializes the loop control variable for the outer loop.",
        "c": "It specifies the loop body for the outer loop.",
        "d": "It generates the column values for the matrix pattern.",
        "correct": "d"
    },
    {
        "question": "159. In the code provided, how many times will the inner `for` loop execute in total?",
        "code": "",
        "a": "3 times",
        "b": "6 times",
        "c": "9 times",
        "d": "12 times",
        "correct": "c"
    },
    {
        "question": "160. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
        "a": "0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2",
        "b": "0,0 1,1 2,2",
        "c": "0,0 1,0 2,0 0,1 1,1 2,1 0,2 1,2 2,2",
        "d": "0,0",
        "correct": "a"
    },
    {
        "question": "161. What will be the value of `i` and `j` when the inner `for` loop completes execution for the first time?",
        "code": "",
        "a": "i = 0, j = 0",
        "b": "i = 1, j = 0",
        "c": "i = 0, j = 1",
        "d": "i = 1, j = 1",
        "correct": "a"
    },
    {
        "question": "162. What is the purpose of the outer `for` loop in the code provided?",
        "code": "",
        "a": "It defines the loop condition for the inner loop.",
        "b": "It initializes the loop control variable for the inner loop.",
        "c": "It specifies the loop body for the inner loop.",
        "d": "It generates the row values for the matrix pattern.",
        "correct": "d"
    },
    {
        "question": "163. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
        "a": "1,1 2,1 2,2 3,1 3,2 3,3",
        "b": "1,1 2,2 3,3",
        "c": "1,1 1,2 2,1 2,2 3,1 3,2 3,3",
        "d": "1,1 2,1 3,1",
        "correct": "a"
    },
    {
        "question": "164. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
        "a": "1,1 2,1 2,2 3,1 3,2 3,3",
        "b": "1,1 2,2 3,3",
        "c": "1,1 1,2 2,1 2,2 3,1 3,2 3,3",
        "d": "1,1 2,1 3,1",
        "correct": "a"
    },
    {
        "question": "165. What will be the value of `i` and `j` when the inner `for` loop completes execution for the second time?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
        "a": "i = 1, j = 1",
        "b": "i = 2, j = 1",
        "c": "i = 1, j = 2",
        "d": "i = 2, j = 2",
        "correct": "d"
    },
    {
        "question": "166. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "1 \n 2 2 \n 3 3 3",
        "b": "1 \n 1 2 \n 1 2 3",
        "c": "1 \n 2 \n 3",
        "d": "1 2 3",
        "correct": "b"
    },
    {
        "question": "167. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "1 2 3",
        "b": "3 2 1",
        "c": "1 1 1",
        "d": "Prints nothing",
        "correct": "a"
    },
    {
        "question": "168. What is the purpose of the `if` block in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "To print the values of `i` and `j`.",
        "b": "To terminate the inner loop early.",
        "c": "To check if `i` is equal to `j` and print the value.",
        "d": "To increment the value of `i` if `i` is equal to `j`.",
        "correct": "c"
    },
    {
        "question": "169. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "1 time",
        "b": "2 times",
        "c": "3 times",
        "d": "4 times",
        "correct": "c"
    },
    {
        "question": "170. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i + j == 4) {\n                    System.out.print(\"* \");\n                }\n            }\n        }\n    }\n}",
        "a": "* * * *",
        "b": "* * *",
        "c": "* *",
        "d": "*",
        "correct": "b"
    },
    {
        "question": "171. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i % 2 == 0) ? \"A\" : \"B\");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "B\nAA\nBBB\nAAAA\nBBBBB",
        "b": "BBB\nAA\nB\nAAAA\nBBBBB",
        "c": "BB\nA\nBBBB\nAAAA\nBBBBBB",
        "d": "BBBB\nA\nBB\nAAA\nBBBBBB",
        "correct": "a"
    },
    {
        "question": "172. What is the purpose of the ternary operator (`? :`) in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i % 2 == 0) ? \"A\" : \"B\");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "To assign a value to `i`.",
        "b": "To determine whether `i` is even or odd.",
        "c": "To check if `i` is equal to `j` and print the value.",
        "d": "To calculate the sum of `i` and `j`.",
        "correct": "b"
    },
    {
        "question": "173. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i > j) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "* * *\n* * *\n* * **",
        "b": "* # #\n* * #\n* * * **",
        "c": "* * *\n* * *\n* * #",
        "d": "# # #\n* * #\n* * *",
        "correct": "b"
    },
    {
        "question": "174. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % j == 0) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "1 2 3 4",
        "b": "1 2 3",
        "c": "1 2 3 4",
        "d": "1 2 3 4 1 2 3 4",
        "correct": "a"
    },
    {
        "question": "175. What is the purpose of the `%` operator in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % j == 0) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
        "a": "To calculate the square root of `i`.",
        "b": "To check if `i` is divisible by `j`.",
        "c": "To calculate the product of `i` and `j`.",
        "d": "To calculate the remainder when `i` is divided by `j`.",
        "correct": "d"
    },
    {
        "question": "176. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 5; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "5 4 3 2 1 \n 5 4 3 2 \n 5 4 3 \n 5 4 \n 5",
        "b": "5 5 5 5 5 \n 4 4 4 4 \n 3 3 3 \n 2 2 \n 1",
        "c": "5 \n 4 5 \n 3 4 5 \n 2 3 4 5 \n 1 2 3 4 5",
        "d": "5 4 3 2 1 \n 4 3 2 1 \n 3 2 1 \n 2 1 \n 1",
        "correct": "a"
    },
    {
        "question": "177. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "* # * #\n   * # * #\n   * # * #\n   * # * #",
        "b": "* * * *\n   * * * *\n   * * * *\n   * * * *",
        "c": "* # * #\n   * # * #\n   * # * #\n   * # * #",
        "d": "# # # #\n   # # # #\n   # # # #\n   # # # #",
        "correct": "c"
    },
    {
        "question": "178. What is the purpose of the logical operator `&&` in the code provided?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "To check if both `i` and `j` are even.",
        "b": "To check if either `i` or `j` is even.",
        "c": "To invert the condition for the inner loop.",
        "d": "To increment both `i` and `j` simultaneously.",
        "correct": "a"
    },
    {
        "question": "179. In the code provided, how many times will the `if` block be executed?",
        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "4 times",
        "b": "6 times",
        "c": "8 times",
        "d": "16 times",
        "correct": "c"
    },
    {
        "question": "180. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = n; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
        "a": "5 4 3 2 1\n   5 4 3 2\n   5 4 3\n   5 4\n   5",
        "b": "1 2 3 4 5\n   2 3 4 5\n   3 4 5\n   4 5\n   5",
        "c": "5 4 3 2 1\n   4 3 2 1\n   3 2 1\n   2 1\n   1",
        "d": "5\n   5 4\n   5 4 3\n   5 4 3 2\n   5 4 3 2 1",
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