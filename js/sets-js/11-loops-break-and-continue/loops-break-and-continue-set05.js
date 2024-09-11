const quizData = [
    {
        "question": "121. What will be the values of `i` and `j` after the loop completes execution?",
        "code": "",
        "a": "i = 14, j = 6",
        "b": "i = 15, j = 5",
        "c": "i = 15, j = 4",
        "d": "i = 14, j = 5",
        "correct": "c"
    },
    {
        "question": "122. Which part of the `for` loop is executed after each iteration?",
        "code": "",
        "a": "Initialization expression",
        "b": "Loop body",
        "c": "Condition",
        "d": "Increment expression",
        "correct": "d"
    },
    {
        "question": "123. What will be the output of the following code?",
        "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
        "a": "Prints nothing",
        "b": "0,20 1,19 2,18 ... 14,6 15,5 15,4",
        "c": "0,20 1,19 2,18 ... 14,6 14,5 15,4",
        "d": "0,20 1,19 2,18 ... 14,6 15,6 15,5",
        "correct": "b"
    },
    {
        "question": "124. What happens if you remove the increment expressions `i++` and `j--` from the `for` loop?",
        "code": "",
        "a": "The loop will not compile.",
        "b": "The loop will run infinitely.",
        "c": "The loop will not execute the loop body.",
        "d": "The loop will execute only once.",
        "correct": "b"
    },
    {
        "question": "125. What does the `System.out.println(i + \",\" + j);` statement inside the loop do?",
        "code": "",
        "a": "Prints the values of `i` and `j` separated by a comma.",
        "b": "Prints the values of `i` and `j` concatenated as strings.",
        "c": "Prints the values of `i` and `j` along with the text \"i,j\".",
        "d": "Prints the sum of `i` and `j`.",
        "correct": "a"
    },
    {
        "question": "126. In the code provided, what will be the final output printed outside the loop?",
        "code": "",
        "a": "15,5",
        "b": "15,4",
        "c": "14,6",
        "d": "16,5",
        "correct": "b"
    },
    {
        "question": "127. What will be the output of the following code?",
        "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
        "a": "Prints nothing",
        "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
        "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
        "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
        "correct": "c"
    },
    {
        "question": "128. What is the purpose of the termination condition in the `for` loop?",
        "code": "",
        "a": "It defines the loop condition.",
        "b": "It sets the initial value of the loop control variables.",
        "c": "It specifies the loop body.",
        "d": "It determines the number of loop iterations.",
        "correct": "a"
    },
    {
        "question": "129. In the code provided, how many times will the loop body be executed?",
        "code": "",
        "a": "4 times",
        "b": "5 times",
        "c": "6 times",
        "d": "7 times",
        "correct": "b"
    },
    {
        "question": "130. What does the following code print?",
        "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
        "a": "Prints nothing",
        "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
        "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
        "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
        "correct": "c"
    },
    {
        "question": "131. What will be the values of `i` and `j` after the loop completes execution?",
        "code": "",
        "a": "i = 6, j = 9",
        "b": "i = 5, j = 10",
        "c": "i = 7, j = 8",
        "d": "i = 8, j = 7",
        "correct": "b"
    },
    {
        "question": "132. Which part of the `for` loop is executed after each iteration?",
        "code": "",
        "a": "Initialization expression",
        "b": "Loop body",
        "c": "Condition",
        "d": "Increment expression",
        "correct": "d"
    },
    {
        "question": "133. What will be the output of the following code?",
        "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
        "a": "Prints nothing",
        "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
        "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
        "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
        "correct": "c"
    },
    {
        "question": "134. What happens if you remove the decrement expression `i--` and increment expression `j++` from the `for` loop?",
        "code": "",
        "a": "The loop will not compile.",
        "b": "The loop will run infinitely.",
        "c": "The loop will not execute the loop body.",
        "d": "The loop will execute only once.",
        "correct": "b"
    },
    {
        "question": "135. What does the `System.out.print(i + \",\" + j + \" \");` statement inside the loop do?",
        "code": "",
        "a": "Prints the values of `i` and `j` separated by a comma.",
        "b": "Prints the values of `i` and `j` concatenated as strings.",
        "c": "Prints the values of `i` and `j` along with the text \"i,j\".",
        "d": "Prints the sum of `i` and `j`.",
        "correct": "a"
    },
    {
        "question": "136. In the code provided, what will be the final output printed outside the loop?",
        "code": "",
        "a": "7,8",
        "b": "6,9",
        "c": "5,10",
        "d": "8,7",
        "correct": "b"
    },
    {
        "question": "137. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "correct": "b"
    },
    {
        "question": "138. What is the purpose of the initializer expression in the `for` loop?",
        "code": "",
        "a": "It defines the loop condition.",
        "b": "It sets the initial value of the loop control variable.",
        "c": "It specifies the loop body.",
        "d": "It determines the number of loop iterations.",
        "correct": "b"
    },
    {
        "question": "139. In the code provided, how many times will the loop body be executed?",
        "code": "",
        "a": "4 times",
        "b": "5 times",
        "c": "6 times",
        "d": "7 times",
        "correct": "b"
    },
    {
        "question": "140. What does the following code print?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "correct": "b"
    },
    {
        "question": "141. What will be the value of `i` after the loop completes execution?",
        "code": "",
        "a": "4",
        "b": "5",
        "c": "6",
        "d": "7",
        "correct": "b"
    },
    {
        "question": "142. Which part of the `for` loop is executed after each iteration?",
        "code": "",
        "a": "Initialization expression",
        "b": "Loop body",
        "c": "Condition",
        "d": "Increment expression",
        "correct": "d"
    },
    {
        "question": "143. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
        "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
        "correct": "b"
    },
    {
        "question": "144. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "correct": "a"
    },
    {
        "question": "145. What does the `System.out.println(\"FINAL\");` statement after the loop do?",
        "code": "",
        "a": "Prints the word \"FINAL\".",
        "b": "Prints the value of `i`.",
        "c": "Prints the word \"FINAL\" followed by a space.",
        "d": "Prints the value of `i` followed by the word \"FINAL\".",
        "correct": "a"
    },
    {
        "question": "146. In the code provided, what will be the final output printed after the loop?",
        "code": "",
        "a": "BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n FINAL",
        "c": "BODY \n INCREMENT \n FINAL",
        "d": "FINAL",
        "correct": "a"
    },
    {
        "question": "147. What will be the output of the following code?",
        "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
        "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
        "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
        "correct": "a"
    },
    {
        "question": "148. What is the purpose of the final expression in the `for` loop?",
        "code": "",
        "a": "It defines the loop condition.",
        "b": "It sets the initial value of the loop control variable.",
        "c": "It specifies the loop body.",
        "d": "It determines the number of loop iterations.",
        "correct": "d"
    },
    {
        "question": "149. In the code provided, how many times will the loop body be executed?",
        "code": "",
        "a": "3 times",
        "b": "4 times",
        "c": "5 times",
        "d": "6 times",
        "correct": "a"
    },
    
        {
            "question": "150. What does the following code print?",
            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
            "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
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