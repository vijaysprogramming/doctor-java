const quizData = [
{
    "question": "291. What is the output of the following Java code?",
    "code": "byte x = 70;\nbyte y = 11;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
    "a": "58",
    "b": "57",
    "c": "56",
    "d": "59",
    "correct": "b"
},
{
    "question": "292. After executing the following code, what will be the value of `counter`?",
    "code": "short counter = 75;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
    "a": "74",
    "b": "75",
    "c": "76",
    "d": "73",
    "correct": "a"
},
{
    "question": "293. What will be the value of `value` after executing the code below?",
    "code": "long value = 130;\nvalue = value-- + --value - value++ + ++value;\n",
    "a": "129",
    "b": "130",
    "c": "128",
    "d": "131",
    "correct": "a"
},
{
    "question": "294. Given the code snippet:",
    "code": "float num = 47.5f;\nnum = num++ + num-- - --num + ++num;\n",
    "a": "48.5",
    "b": "47.5",
    "c": "46.5",
    "d": "49.5",
    "correct": "b"
},
{
    "question": "295. What will be the output of the following Java code?",
    "code": "double a = 130.5;\ndouble b = 40.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
    "a": "89.5",
    "b": "88.5",
    "c": "87.5",
    "d": "90.5",
    "correct": "b"
},
{
    "question": "296. After the code is executed, what will be the value of `x`?",
    "code": "float x = 140.7f;\nx = x-- - --x + ++x - x++;\n",
    "a": "139.7",
    "b": "140.7",
    "c": "138.7",
    "d": "141.7",
    "correct": "c"
},
{
    "question": "297. What is the output of the following Java code?",
    "code": "long value = 135;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
    "a": "134",
    "b": "135",
    "c": "133",
    "d": "136",
    "correct": "b"
},
{
    "question": "298. Given the code snippet:",
    "code": "byte num = 140;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
    "a": "141",
    "b": "140",
    "c": "139",
    "d": "142",
    "correct": "b"
},
{
    "question": "299. What will be the value of `result` after executing the code below?",
    "code": "double result = 140.5;\nresult = result++ - --result + result-- - ++result;\n",
    "a": "139.5",
    "b": "138.5",
    "c": "137.5",
    "d": "141.5",
    "correct": "c"
},
{
    "question": "300. What is the output of the following Java code?",
    "code": "byte x = 80;\nbyte y = 12;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
    "a": "67",
    "b": "66",
    "c": "65",
    "d": "68",
    "correct": "b"
},
{
    "question": "300. What is the output of the following Java code?",
    "code": "byte x = 80;\nbyte y = 12;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
    "a": "68",
    "b": "67",
    "c": "66",
    "d": "69",
    "correct": "b"
},
{
    "question": "351. What is the output of the following Java code?",
    "code": "int a = 260;\nint b = 10;\nint result = a-- - ++b + b-- - --a;\nSystem.out.println(result);\n",
    "a": "249",
    "b": "248",
    "c": "247",
    "d": "250",
    "correct": "b"
},
{
    "question": "352. After the code is executed, what will be the value of `counter`?",
    "code": "int counter = 265;\ncounter = counter-- - ++counter - counter++ - --counter;\n",
    "a": "265",
    "b": "264",
    "c": "266",
    "d": "263",
    "correct": "b"
},
{
    "question": "353. What will be the value of `value` after executing the code below?",
    "code": "int value = 270;\nvalue = value-- - value++ + ++value - --value;\n",
    "a": "270",
    "b": "269",
    "c": "268",
    "d": "271",
    "correct": "b"
},
{
    "question": "354. Given the code snippet:",
    "code": "int num = 275;\nnum = num-- - num++ + num-- - num++;\n",
    "a": "275",
    "b": "274",
    "c": "273",
    "d": "276",
    "correct": "a"
},
{
    "question": "355. What will be the value of `result` after executing the code below?",
    "code": "int result = 280;\nresult = result-- - result++ + ++result - --result;\n",
    "a": "280",
    "b": "279",
    "c": "278",
    "d": "281",
    "correct": "c"
},
{
    "question": "356. What is the output of the following Java code?",
    "code": "int x = 285;\nint y = 5;\nint z = x-- + --y - y++ + ++x;\nSystem.out.println(z);\n",
    "a": "286",
    "b": "285",
    "c": "284",
    "d": "287",
    "correct": "a"
},
{
    "question": "357. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 290;\ncounter = counter-- + --counter - counter++ - ++counter;\n",
    "a": "290",
    "b": "289",
    "c": "291",
    "d": "288",
    "correct": "b"
},
{
    "question": "358. What will be the value of `value` after executing the code below?",
    "code": "int value = 295;\nvalue = value-- - ++value - value++ - --value;\n",
    "a": "295",
    "b": "294",
    "c": "293",
    "d": "296",
    "correct": "b"
},
{
    "question": "359. Given the code snippet:",
    "code": "int num = 300;\nnum = num-- - num++ + num-- - num++;\n",
    "a": "300",
    "b": "299",
    "c": "298",
    "d": "301",
    "correct": "a"
},
{
    "question": "360. What is the output of the following Java code?",
    "code": "int x = 5;\nint y = 10;\nint z = ++x * y-- - x++ / --y;\nSystem.out.println(z);\n",
    "a": "46",
    "b": "48",
    "c": "50",
    "d": "52",
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
