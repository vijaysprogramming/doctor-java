const quizData = [
{
    question: "31. Method argument is subclass type and while calling the same method supplying superclass type is proper syntax.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "32. Method return type is Object type and while calling the same, is it possible to take the return value into a String type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "33. Method return type is String type and while calling the same, is it possible to take the return value into an Object type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "34. Method return type is String type and while calling the same, is it possible to take the return value into an Object type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "35. Object obj = new String(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "36. String obj = new Object(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "37. Object obj = (Object) new String(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "38. String obj = (String) new Object(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "39. Which option gives a runtime exception?",
    code: "Select the correct option",
    a: "Object obj = new Object()",
    b: "Object obj = new String()",
    c: "String obj = (String) new Object();",
    d: "Object obj = (Object) new String();",
    correct: "c",
},
{
    question: "40. What is the output?",
    code: "String s1 = new String();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "c",
},
{
    question: "41. What is the output?",
    code: "Object s1 = new String();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "c",
},
{
    question: "42. What is the output?",
    code: "String s1 = new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "a",
},
{
    question: "43. What is the output?",
    code: "String s1 = (String) new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    e: "falsefalse",
    correct: "b",
},
{
    question: "44. What is the output?",
    code: "Object s1 = new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "d",
},
{
    question: "45. What is the output?",
    code: "String s1 = new String(\"4.5\");\nSystem.out.print(s1 instanceof Integer);\nSystem.out.print(s1 instanceof Double);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "falsefalse",
    correct: "d",
},
{
    question: "46. What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = new A();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "a",
},
{
    question: "47. What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = (B)new A();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "b",
},
{
    question: "48. What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = new B();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "a",
},
{
    question: "49. What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = (B) new B();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "1010",
    correct: "d",
},
{
    question: "50. What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           B b1 = new B();\n          System.out.print(b1.i);\n          System.out.print(b1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    e: "1010",
    correct: "c",
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