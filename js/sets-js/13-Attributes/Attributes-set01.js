const quizData = [
    {
        question: "1. what is the output",
        code: "class A \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n    }\n}",
        a: "0",
        b: "Compile Time Error",
        c: "None",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "2. what is the output",
        code: "class B \n{\n    static byte i;\n    static short j;\n    static int k;\n    static long m;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n        System.out.println(j);\n        System.out.println(k);\n        System.out.println(m);\n    }\n}",
        a: "0\n0\n0\n0",
        b: "1\n1\n1\n1",
        c: "None",
        d: "Compile Time Error",
        correct: "a",
    },
    {
        question: "3. what is the output",
        code: "class C \n{\n    static float i;\n    static double j;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n        System.out.println(j);\n    }\n}",
        a: "1.0\n1.0",
        b: "0.0\n0.0",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "4. what is the output",
        code: "class D \n{\n    static boolean i;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n    }\n}",
        a: "true",
        b: "false",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "5. what is the output",
        code: "class E \n{\n    static char i;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n    }\n}",
        a: "'\\u0000'",
        b: "No output",
        c: "Compile Time Error",
        d: "None",
        correct: "a",
    },
    {
        question: "6. what is the output",
        code: "class F \n{\n    static String i;\n    static int[] j;\n    static String[] k;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n        System.out.println(j);\n        System.out.println(k);\n    }\n}",
        a: "null\n0\nnull",
        b: "null\nnull\nnull",
        c: "Compile Time Error",
        d: "No output",
        correct: "b",
    },
    {
        question: "7. what is the output",
        code: "class G \n{\n    static int i;\n    static int j;\n    static int k;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \",\" + k);\n    }\n}",
        a: "0, 0,0",
        b: "0,\n0,\n0",
        c: "Compile Time Error",
        d: "No output",
        correct: "a",
    },
    {
        question: "8. what is the output",
        code: "class H \n{\n    static int i, j, k;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \",\" + k);\n    }\n}",
        a: "0, 0,0",
        b: "0,\n0,\n0",
        c: "Compile Time Error",
        d: "No output",
        correct: "a",
    },
    {
        question: "9. what is the output",
        code: "class I \n{\n    static int m;\n    static double m;\n    public static void main(String[] args) \n    {\n        System.out.println(\"done\");\n    }\n}",
        a: "done",
        b: "No output",
        c: "Compile Time Error",
        d: "None",
        correct: "c",
    },
    {
        question: "10. what is the output",
        code: "class J \n{\n    public static void main(String[] args) \n    {\n        int m = 10;\n        double m = 4.5;\n        System.out.println(\"done\");\n    }\n}",
        a: "done",
        b: "No output",
        c: "Compile Time Error",
        d: "None",
        correct: "c",
    },
    {
        question: "11. what is the output",
        code: "class K \n{\n    static int m;\n    public static void main(String[] args) \n    {\n        int m = 4;\n        System.out.println(m);\n    }\n}",
        a: "m",
        b: "4",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "12. what is the output",
        code: "class L \n{\n    static int m;\n    public static void main(String[] args) \n    {\n        boolean m = true;\n        System.out.println(m);\n    }\n}",
        a: "m",
        b: "true",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "13. what is the output",
        code: "class M \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        boolean i = true;\n        System.out.println(i);\n        System.out.println(M.i);\n    }\n}",
        a: "true\n0",
        b: "true\ntrue",
        c: "Compile Time Error",
        d: "None",
        correct: "a",
    },
    {
        question: "14. what is the output",
        code: "class N \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        System.out.println(i);\n        System.out.println(N.i);\n    }\n}",
        a: "0\n0",
        b: "0 0",
        c: "Compile Time Error",
        d: "None",
        correct: "a",
    },
    {
        question: "15. what is the output",
        code: "class O \n{\n    static int i;\n    static double j;\n    public static void main(String[] args) \n    {\n        System.out.println(O.i);\n        System.out.println(O.j);\n    }\n}",
        a: "0\n0",
        b: "0\n0.0",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "16. what is the output",
        code: "class P \n{\n    public static void main(String[] args) \n    {\n        static int i;\n        System.out.println(\"done\");\n    }\n}",
        a: "done",
        b: "Compile Time Error",
        c: "None",
        correct: "b",
    },
    {
        question: "17. what is the output",
        code: "class Q \n{\n    static int i = 10;\n    static int j = 20;\n    static int k;\n    static int m = 30;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n    }\n}",
        a: "10,\n20,\n0,\n30",
        b: "10, 20, k, 30",
        c: "10, 20, 0, 30",
        d: "Compile Time Error",
        correct: "c",
    },
    {
        question: "18. what is the output",
        code: "class R \n{\n    static int i = 10;\n    static int j = 20;\n    static int k;\n    static int m = 30;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n        i = 50;\n        j = 510;\n        k = 40;\n        m = 140;\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n    }\n}",
        a: "10, 20, 0, 30\n50, 510, 40, 140",
        b: "10, 20, 00, 30\n50, 51, 40, 140",
        c: "Compile Time Error",
        d: "None",
        correct: "a",
    },
    {
        question: "19. what is the output",
        code: "class S \n{\n    static int i = 10, j = 20, k, m = 30;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n        i = 50;\n        j = 510;\n        k = 40;\n        m = 140;\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n    }\n}",
        a: "10, 20, 00, 30\n50, 51, 40, 1400",
        b: "10, 20, 0, 30\n50, 510, 40, 140",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "20. what is the output",
        code: "class T \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        System.out.println(\"main:\" + i);\n    }\n    public static void test()\n    {\n        System.out.println(\"test:\" + i);\n    }\n}",
        a: "main:0",
        b: "main:0\ntest: 0",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "21. what is the output",
        code: "class U \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        System.out.println(\"main:\" + i);\n        test();\n        U.test();\n    }\n    public static void test()\n    {\n        System.out.println(\"test:\" + i);\n    }\n}",
        a: "main:0\ntest: 0",
        b: "main:0\ntest: 0\ntest: 0",
        c: "Compile Time Error",
        d: "None",
        correct: "b",
    },
    {
        question: "22. what is the output",
        code: "class V \n{\n    static int i;\n    public static void main(String[] args) \n    {\n        System.out.println(\"main1:\" + i);\n        i = 1;\n        test();\n        System.out.println(\"main2:\" + i);\n        i = 2;\n        V.test();\n        System.out.println(\"main3:\" + i);\n    }\n    public static void test()\n    {\n        System.out.println(\"test:\" + i);\n        i += 3;\n    }\n}",
        a: "main1:0\ntest:1\nmain2:4\ntest:2\nmain3:5",
        b: "main:0\ntest: 1\nmain1:4\ntest:2\nmain1:5",
        c: "Compile Time Error",
        d: "None",
        correct: "a",
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