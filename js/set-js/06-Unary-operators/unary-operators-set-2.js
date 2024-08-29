const quizData = [
{
    "question": "31. After the code is executed, what will be the value of `x`?",
    "code": "int x = 10;\nx = x-- - --x + ++x - x++;",
    "a": "10",
    "b": "9",
    "c": "11",
    "d": "8",
    "correct": "b"
},
{
    "question": "32. What is the output of the following Java code?",
    "code": "int value = 6;\nvalue = value-- + ++value - value++ - --value;\nSystem.out.println(value);",
    "a": "5",
    "b": "6",
    "c": "7",
    "d": "8",
    "correct": "a"
},
{
    "question": "33. Given the code snippet:",
    "code": "int num = 4;\nnum = num++ + num-- - --num + ++num;",
    "a": "4",
    "b": "5",
    "c": "3",
    "d": "6",
    "correct": "a"
},
{
    "question": "34. What will be the value of `result` after executing the code below?",
    "code": "int result = 8;\nresult = result++ + --result - result-- + ++result;",
    "a": "8",
    "b": "7",
    "c": "6",
    "d": "9",
    "correct": "a"
},
{
    "question": "35. What is the output of the following Java code?",
    "code": "int x = 5;\nint y = 3;\nint z = x-- + --y - x++;\nSystem.out.println(z);",
    "a": "4",
    "b": "5",
    "c": "3",
    "d": "6",
    "correct": "b"
},
{
    "question": "36. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 7;\ncounter = counter++ - --counter + counter-- - ++counter;",
    "a": "7",
    "b": "8",
    "c": "6",
    "d": "9",
    "correct": "a"
},
{
    "question": "37. What will be the value of `value` after executing the following code?",
    "code": "int value = 12;\nvalue = value++ + ++value - --value + value--;",
    "a": "13",
    "b": "14",
    "c": "12",
    "d": "15",
    "correct": "c"
},
{
    "question": "38. Given the code snippet:",
    "code": "int num = 9;\nnum = num++ - ++num + num-- - --num;",
    "a": "9",
    "b": "8",
    "c": "10",
    "d": "7",
    "correct": "b"
},
{
    "question": "39. What will be the output of the following Java code?",
    "code": "int a = 4;\nint b = 2;\nint result = a++ - ++b + b-- + --a;\nSystem.out.println(result);",
    "a": "3",
    "b": "4",
    "c": "5",
    "d": "2",
    "correct": "b"
},
{
    "question": "40. After the code is executed, what will be the value of `x`?",
    "code": "int x = 6;\nx = x++ + --x - x-- + ++x;",
    "a": "6",
    "b": "7",
    "c": "5",
    "d": "8",
    "correct": "a"
},
{
    "question": "41. What is the output of the following Java code?",
    "code": "int value = 10;\nvalue = value-- - --value + value++ + ++value;\nSystem.out.println(value);",
    "a": "10",
    "b": "9",
    "c": "8",
    "d": "11",
    "correct": "a"
},
{
    "question": "42. Given the code snippet:",
    "code": "int num = 6;\nnum = num-- + ++num - --num - num++;",
    "a": "7",
    "b": "6",
    "c": "5",
    "d": "8",
    "correct": "b"
},
{
    "question": "43. What will be the value of `result` after executing the code below?",
    "code": "int result = 9;\nresult = result++ - --result + ++result - result--;",
    "a": "10",
    "b": "9",
    "c": "8",
    "d": "11",
    "correct": "b"
},
{
    "question": "44. What is the output of the following Java code?",
    "code": "int x = 8;\nint y = 4;\nint z = x-- + ++y - y-- - --x;\nSystem.out.println(z);",
    "a": "7",
    "b": "6",
    "c": "8",
    "d": "5",
    "correct": "a"
},
{
    "question": "45. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 5;\ncounter = counter++ + --counter - ++counter - counter--;",
    "a": "5",
    "b": "4",
    "c": "6",
    "d": "3",
    "correct": "a"
},
{
    "question": "46. What will be the value of `value` after executing the following code?",
    "code": "int value = 7;\nvalue = value-- - ++value + value++ - --value;",
    "a": "8",
    "b": "7",
    "c": "6",
    "d": "9",
    "correct": "b"
},
{
    "question": "47. Given the code snippet:",
    "code": "int num = 10;\nnum = num++ - num-- + --num - ++num;",
    "a": "10",
    "b": "9",
    "c": "11",
    "d": "8",
    "correct": "b"
},
{
    "question": "48. What will be the output of the following Java code?",
    "code": "int a = 5;\nint b = 3;\nint result = a-- + ++b - b-- + --a;\nSystem.out.println(result);",
    "a": "5",
    "b": "6",
    "c": "4",
    "d": "3",
    "correct": "a"
},
{
    "question": "49. After the code is executed, what will be the value of `x`?",
    "code": "int x = 12;\nx = x++ - x-- + ++x - --x;",
    "a": "11",
    "b": "10",
    "c": "12",
    "d": "9",
    "correct": "b"
},
{
    "question": "50. What is the output of the following Java code?",
    "code": "int value = 8;\nvalue = value++ + --value - value++ + ++value;\nSystem.out.println(value);",
    "a": "8",
    "b": "9",
    "c": "7",
    "d": "10",
    "correct": "a"
},
{
    "question": "51. What will be the value of `y` after executing the code below?",
    "code": "int y = 10;\ny = y++ - --y + ++y - y--;",
    "a": "10",
    "b": "9",
    "c": "8",
    "d": "11",
    "correct": "b"
},
{
    "question": "52. What is the output of the following Java code?",
    "code": "int a = 3;\nint b = 2;\nint c = a++ - --b + b++ - --a;\nSystem.out.println(c);",
    "a": "1",
    "b": "2",
    "c": "0",
    "d": "3",
    "correct": "a"
},
{
    "question": "53. Given the code snippet:",
    "code": "int num = 5;\nnum = num-- + ++num - --num + num++;",
    "a": "6",
    "b": "5",
    "c": "4",
    "d": "7",
    "correct": "b"
},
{
    "question": "54. What will be the value of `x` after executing the code below?",
    "code": "int x = 7;\nx = x-- - --x + x++ - ++x;",
    "a": "7",
    "b": "6",
    "c": "8",
    "d": "9",
    "correct": "a"
},
{
    "question": "55. What is the output of the following Java code?",
    "code": "int p = 4;\nint q = 2;\nint r = p++ - --q + q-- + --p;\nSystem.out.println(r);",
    "a": "3",
    "b": "4",
    "c": "2",
    "d": "5",
    "correct": "b"
},
{
    "question": "56. After executing the following code, what will be the value of `counter`?",
    "code": "int counter = 11;\ncounter = counter++ + --counter - counter-- + ++counter;",
    "a": "11",
    "b": "12",
    "c": "10",
    "d": "13",
    "correct": "a"
},
{
    "question": "57. What will be the value of `value` after executing the following code?",
    "code": "int value = 15;\nvalue = value++ - ++value + --value - value++;",
    "a": "14",
    "b": "15",
    "c": "13",
    "d": "16",
    "correct": "b"
},
{
    "question": "58. Given the code snippet:",
    "code": "int num = 14;\nnum = num-- - ++num + num-- - --num;",
    "a": "14",
    "b": "13",
    "c": "12",
    "d": "15",
    "correct": "b"
},
{
    "question": "59. What will be the output of the following Java code?",
    "code": "int a = 6;\nint b = 4;\nint result = a++ + --b - b-- + --a;\nSystem.out.println(result);",
    "a": "7",
    "b": "6",
    "c": "8",
    "d": "9",
    "correct": "b"
},
{
    "question": "60. After the code is executed, what will be the value of `x`?",
    "code": "int x = 9;\nx = x++ - x-- + --x - ++x;",
    "a": "8",
    "b": "9",
    "c": "7",
    "d": "10",
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