const quizData = [
    
    {
         question : 1,
         code : "class G  {\n\n    static int p;\n\n    G(){\n        p += 10;\n    }\n\n    {\n        p += 20;\n    }\n\n    void test1(){\n        p += 30;\n    }\n\n    static void test2(){\n        p += 40;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(\"a: \" + p);\n        G g1 = new G();\n        System.out.println(\"b: \" + p);\n        g1.test1();\n        System.out.println(\"c: \" + p);\n        test2();\n        System.out.println(\"d: \" + p);\n    }\n}",
         a : "a: 0<br>b: 30<br>c: 60<br>d: 100",
         b : "a: 20<br>b: 20<br>c: 20<br>d: 20",
         c : "Compilation error",
         d : "None of the above",
         correct : "a",
    },
    {
         question : 2,
         code : "class H {\n    static int p = 10;\n\n    public static void main(String[] args) {\n        System.out.println(\"a: \" + p);\n        System.out.println(\"b: \" + H.p);\n        H obj = new H();\n        System.out.println(\"c: \" + obj.p);\n    }\n}",
         a : "a: 10<br>b: 10<br>c: 10",
         b : "Compilation error",
         c : "None of the above",
         d : "Not applicable",
         correct : "a",
    },
    {
         question : 3,
         code : "class I {\n    static int count;\n    I(){\n        count++;\n    }\n\n    public static void main(String[] args) {\n        I obj1 = new I();\n        System.out.println(\"a: \" + count);\n        I obj2 = new I();\n        System.out.println(\"b: \" + count);\n        I obj3 = new I();\n        System.out.println(\"c: \" + count);\n        I obj4 = new I();\n        System.out.println(\"d: \" + count);\n    }\n}",
         a : "a: 1<br>b: 1<br>c: 1<br>d: 1",
         b : "a: 1<br>b: 2<br>c: 3<br>d: 4",
         c : "Compilation error",
         d : "None of the above",
         correct : "b",
    },
    {
         question : 4,
         code : "class J {\n    static int count;\n    J(){\n        count++;\n    }\n\n    public static void main(String[] args) {\n        J obj1 = new J();\n        System.out.println(\"a: \" + count);\n        J obj2 = new J();\n        System.out.println(\"b: \" + count);\n        J obj3 = new J();\n        System.out.println(\"c: \" + count);\n        J obj4 = new J();\n        System.out.println(\"d: \" + count);\n        System.out.println(\"e: \" + obj1.count);\n        System.out.println(\"f: \" + obj2.count);\n        System.out.println(\"g: \" + obj3.count);\n        System.out.println(\"h: \" + obj4.count);\n    }\n}",
         a : "a: 1<br>b: 2<br>c: 3<br>d: 4<br>e: 1<br>f: 2<br>g: 3<br>h: 4",
         b : "a: 1<br>b: 1<br>c: 1<br>d: 1<br>e: 1<br>f: 2<br>g: 3<br>h: 4",
         c : "a: 1<br>b: 2<br>c: 3<br>d: 4<br>e: 4<br>f: 4<br>g: 4<br>h: 4",
         d : "Compilation error",
         correct : "a",
    },
    {
         question : 5,
         code : "class K {\n    static int count;\n    K(){\n        count++;\n    }\n    K(int i){\n        count++;\n    }\n    K(int i, int j){\n        count++;\n    }\n    public static void main(String[] args) {\n        K k1 = new K();\n        K k2 = new K(10);\n        K k3 = new K(10, 20);\n        K k4 = new K(20);\n        K k5 = new K();\n        System.out.println(count);\n    }\n}",
         a : "5",
         b : "3",
         c : "2",
         d : "Compilation error",
         correct : "a",
    },
    {
         question : 6,
         code : "class L {\n    static int count;\n    L(){\n    }\n    L(int i){\n    }\n    L(int i, int j){\n    }\n    {\n        count++;\n    }\n    public static void main(String[] args) {\n        L obj1 = new L();\n        L obj2 = new L();\n        L obj3 = new L(20);\n        L obj4 = new L();\n        L obj5 = new L();\n        L obj6 = new L(1, 4);\n        L obj7 = new L();\n        L obj8 = new L();\n        L obj9 = new L();\n        L obj10 = new L(7, 8);\n        System.out.println(count);\n    }\n}",
         a : "7",
         b : "10",
         c : "3",
         d : "Compilation error",
         correct : "b",
    },
    {
         question : 7,
         code : "Is it possible to use static variables anywhere in the class?",
         a : "True",
         b : "False",
         c : "None",
         d : "Not applicable",
         correct : "a",
    },
    {
         question : 8,
         code : "Is it possible for a static member of one class to be used in another class without class name?",
         a : "True",
         b : "False",
         c : "None",
         d : "Not applicable",
         correct : "b",
    },
    {
         question : 9,
         code : "Is it possible to access a static variable along with a reference variable?",
         a : "True",
         b : "False",
         c : "None",
         d : "Not applicable",
         correct : "a",
    }
    
    
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
