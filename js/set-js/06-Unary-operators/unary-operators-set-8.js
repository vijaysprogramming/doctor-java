const quizData = [
{
    "question": "211. Given the code snippet:",
    "code": "int num = 215;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "216",
    "b": "215",
    "c": "214",
    "d": "217",
    "correct": "b"
},
{
    "question": "212. What will be the value of `result` after executing the code below?",
    "code": "int result = 77;\nresult = result++ - --result + result-- - ++result;\n",
    "a": "76",
    "b": "75",
    "c": "74",
    "d": "78",
    "correct": "c"
},
{
    "question": "213. What is the output of the following Java code?",
    "code": "int x = 55;\nint y = 15;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
    "a": "42",
    "b": "41",
    "c": "40",
    "d": "43",
    "correct": "a"
},
{
    "question": "214. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 60;\ncounter = counter-- - --counter + ++counter - counter--;\n",
    "a": "59",
    "b": "60",
    "c": "61",
    "d": "58",
    "correct": "a"
},
{
    "question": "215. What will be the value of `value` after executing the following code?",
    "code": "int value = 80;\nvalue = value-- + --value - value++ + ++value;\n",
    "a": "79",
    "b": "80",
    "c": "78",
    "d": "81",
    "correct": "a"
},
{
    "question": "216. Given the code snippet:",
    "code": "int num = 225;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "226",
    "b": "225",
    "c": "224",
    "d": "227",
    "correct": "b"
},
{
    "question": "217. What will be the output of the following Java code?",
    "code": "int a = 80;\nint b = 22;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
    "a": "55",
    "b": "54",
    "c": "53",
    "d": "56",
    "correct": "c"
},
{
    "question": "218. After executing the following code, what will be the value of `x`?",
    "code": "int x = 230;\nx = x-- - --x + ++x - x++;\n",
    "a": "229",
    "b": "230",
    "c": "228",
    "d": "231",
    "correct": "c"
},
{
    "question": "219. What is the output of the following Java code?",
    "code": "int value = 82;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
    "a": "81",
    "b": "82",
    "c": "80",
    "d": "83",
    "correct": "b"
},
{
    "question": "220. Given the code snippet:",
    "code": "int num = 235;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "236",
    "b": "235",
    "c": "234",
    "d": "237",
    "correct": "b"
},
{
    "question": "221. What will be the value of `result` after executing the code below?",
    "code": "int result = 82;\nresult = result++ - --result + result-- - ++result;\n",
    "a": "81",
    "b": "80",
    "c": "79",
    "d": "83",
    "correct": "c"
},
{
    "question": "222. What is the output of the following Java code?",
    "code": "int x = 60;\nint y = 16;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
    "a": "44",
    "b": "43",
    "c": "42",
    "d": "45",
    "correct": "b"
},
{
    "question": "223. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 65;\ncounter = counter-- - --counter + ++counter - counter--;\n",
    "a": "64",
    "b": "65",
    "c": "66",
    "d": "63",
    "correct": "a"
},
{
    "question": "224. What will be the value of `value` after executing the following code?",
    "code": "int value = 85;\nvalue = value-- + --value - value++ + ++value;\n",
    "a": "84",
    "b": "85",
    "c": "83",
    "d": "86",
    "correct": "a"
},
{
    "question": "225. Given the code snippet:",
    "code": "int num = 245;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "246",
    "b": "245",
    "c": "244",
    "d": "247",
    "correct": "b"
},
{
    "question": "226. What will be the output of the following Java code?",
    "code": "byte num = 60;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "61",
    "b": "60",
    "c": "59",
    "d": "62",
    "correct": "b"
},
{
    "question": "227. What will be the value of `result` after executing the code below?",
    "code": "short result = 60;\nresult = (short)(result++ - --result + result-- - ++result);\n",
    "a": "59",
    "b": "58",
    "c": "57",
    "d": "61",
    "correct": "c"
},
{
    "question": "228. What is the output of the following Java code?",
    "code": "byte x = 20;\nbyte y = 6;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
    "a": "14",
    "b": "13",
    "c": "12",
    "d": "15",
    "correct": "a"
},
{
    "question": "229. After executing the following code, what will be the value of `counter`?",
    "code": "short counter = 25;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
    "a": "24",
    "b": "25",
    "c": "26",
    "d": "23",
    "correct": "a"
},
{
    "question": "230. What will be the value of `value` after executing the code below?",
    "code": "long value = 70;\nvalue = value-- + --value - value++ + ++value;\n",
    "a": "69",
    "b": "70",
    "c": "68",
    "d": "71",
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
