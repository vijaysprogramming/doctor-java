const quizData = [
    
        {
            question: "1- constructors are inheriting to sub class",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "2- initialization blocks are inheriting to sub class",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "3- super class constructor not inheriting to subclass. subclass constructor calling super class constructor.",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
            {
                question: "4-",
                code: "package src;\n\nclass A\n{\n    int i;\n}\n\nclass B extends A\n{\n    int j;\n    public static void main(String[] args)\n    {\n        B b1 = new B();\n        System.out.println(b1.i);\n        System.out.println(b1.j);\n    }\n}",
                a: "0\n0",
                b: "Compilation Error",
                c: "Run Time Error",
                d: "None",
                correct: "a",
            },
            {
                question: "5-",
                code: "package src;\n\nclass C\n{\n    void test1()\n    {\n        System.out.println(\"from test1\");\n    }\n}\n\nclass D extends C\n{\n    void test2()\n    {\n        System.out.println(\"from test2\");\n    }\n    public static void main(String[] args)\n    {\n        D d1 = new D();\n        d1.test1();\n        d1.test2();\n    }\n}",
                a: "from test1\nfrom test2",
                b: "from test2\nfrom test1",
                c: "Run Time Error",
                d: "Compilation Error",
                correct: "a",
            },
            {
                question: "6-",
                code: "package src;\n\nclass E\n{\n    static int i;\n}\n\nclass F extends E\n{\n    static int j;\n    public static void main(String[] args)\n    {\n        System.out.println(F.i);\n        System.out.println(F.j);\n    }\n}",
                a: "Compilation Error",
                b: "0\n0",
                c: "Run Time Error",
                d: "None",
                correct: "b",
            },
            {
                question: "7-",
                code: "package src;\n\nclass G\n{\n    static void test1()\n    {\n        System.out.println(\"G-test1\");\n    }\n}\n\nclass H extends G\n{\n    static void test2()\n    {\n        System.out.println(\"H-test2\");\n    }\n    public static void main(String[] args)\n    {\n        H.test1();\n        H.test2();\n    }\n}",
                a: "H-test1\nG-test2",
                b: "G-test1\nH-test2",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "8-",
                code: "package src;\n\nclass I\n{\n    static int m;\n    int n;\n    static void test1()\n    {\n        System.out.println(\"from test1\");\n    }\n    void test2()\n    {\n        System.out.println(\"from test2\");\n    }\n}\n\nclass J extends I\n{\n    public static void main(String[] args)\n    {\n        System.out.println(J.m);\n        J.test1();\n        J ref = new J();\n        System.out.println(ref.n);\n        ref.test2();\n    }\n}",
                a: "Compilation Error",
                b: "from test1\n0\nfrom test2\n0",
                c: "0\nfrom test1\n0\nfrom test2",
                d: "Runtime Error",
                correct: "c",
            },
            {
                question: "9-",
                code: "package src;\n\nclass K\n{\n    K()\n    {\n        super();\n        System.out.println(\"K()\");\n    }\n}\n\nclass L extends K\n{\n    L()\n    {\n        super();\n        System.out.println(\"L()\");\n    }\n    public static void main(String[] args)\n    {\n        L obj = new L();\n    }\n}",
                a: "Compilation Error",
                b: "K()\nL()",
                c: "L()\nK()",
                d: "None",
                correct: "b",
            },
            {
                question: "10-",
                code: "package src;\n\nclass M\n{\n    M()\n    {\n        System.out.println(\"M()\");\n    }\n}\n\nclass N extends M\n{\n    N()\n    {\n        System.out.println(\"N()\");\n    }\n}\n\nclass O extends N\n{\n    public static void main(String[] args)\n    {\n        M m1 = new M();\n        System.out.println(\"---------\");\n        N n1 = new N();\n        System.out.println(\"---------\");\n        O o1 = new O();\n        System.out.println(\"---------\");\n    }\n}",
                a: "M()\n---------\nM()\nN()\n---------\nM()\nN()\n---------",
                b: "Compilation Error",
                c: "None",
                d: "None",
                correct: "a",
            },
            {
                question: "11-",
                code: "package src;\n\nclass A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n}\n\nclass P extends C\n{\n    P()\n    {\n        System.out.println(\"P()\");\n    }\n    public static void main(String[] args)\n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        P p1 = new P();\n        System.out.println(\"---------\");\n    }\n}",
                a: "---------\n---------\n---------\nP()\n---------",
                b: "A()\n---------\nA()\nB()\n---------\nA()\nB()\nC()\n---------\nA()\nB()\nC()\nP()\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "12-",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super();\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass Q extends C\n{\n    Q()\n    {\n        System.out.println(\"Q()\");\n    }\n    Q(int i)\n    {\n        super();\n        System.out.println(\"Q(int)\");\n    }\n    public static void main(String[] args)\n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        Q q1 = new Q();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        Q q2 = new Q(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "A()\n---------\nA()\nB()\n---------\nA()\nB()\nC()\n---------\nA()\nB()\nC()\nQ()\n---------\nA(int)\n---------\nA()\nB(int)\n---------\nA()\nB()\nC(int)\n---------\nA()\nB()\nC()\nQ(int)\n---------",
                b: "A()\n---------\nB()\n---------\nC()\n---------\nQ()\n---------\nA(int)\n---------\nB(int)\n---------\nC(int)\n---------\nQ(int)\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "a",
            },
            {
                question: 13,
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        super(10);\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super(i);\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass R extends C \n{\n    R()\n    {\n        super(20);\n        System.out.println(\"R()\");\n    }\n    R(int i)\n    {\n        super(200);\n        System.out.println(\"R(int)\");\n    }\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        R r1 = new R();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        R r2 = new R(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "Compilation Error",
                b: "A()\n---------\nA(int)\nB()\n---------\nA(int)\nB()\nC()\n---------\nA()\nB(int)\nC(int)\nR()\n---------\nA(int)\n---------\nA()\nB(int)\n---------\nA()\nB(int)\nC(int)\n---------\nA()\nB(int)\nC(int)\nR(int)\n---------",
                c: "None",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "14",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        this();\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        super(10);\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        this();\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        this(90);\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super(i);\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass S extends C \n{\n    S()\n    {\n        this(90);\n        System.out.println(\"S()\");\n    }\n    S(int i)\n    {\n        super(200);\n        System.out.println(\"S(int)\");\n    }\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        S s1 = new S();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        S s2 = new S(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "A()\n---------\nA()\nA(int)\nB()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nC()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\nS()\n---------\nA()\nA(int)\n---------\nA()\nA(int)\nB()\nB(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\n---------",
                b: "A()\n---------\nA()\nA(int)\nB()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nC()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\nS()\n---------\nA()\nA(int)\n---------\nA()\nA(int)\nB()\nB(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "15",
                code: "class A\n{\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass T extends A\n{\n    T(int i)\n    {\n        System.out.println(\"T(int)\");\n    }\n    public static void main(String[] args) \n    {\n        T t1 = new T(90);\n        System.out.println(\"done\");\n    }\n}",
                a: "Compilation Error",
                b: "T(int)\ndone",
                c: "A(int)\nT(int)",
                d: "None",
                correct: "c"
            },
            {
                question: "16",
                code: "class A\n{\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass U extends A\n{\n    U(int i)\n    {\n        super(i);\n        System.out.println(\"U(int)\");\n    }\n    public static void main(String[] args) \n    {\n        U u1 = new U(90);\n        System.out.println(\"done\");\n    }\n}",
                a: "Compilation Error",
                b: "A(int)\nU(int)\ndone",
                c: "U(int)\nA(int)\ndone",
                d: "None",
                correct: "b"
            },
            {
                question: "17",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass V\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        A a2 = new A();\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()",
                b: "A()\nA-IIB\n----------\nA()\nA-IIB",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b"
            },
            {
                question: "18",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    {\n        System.out.println(\"B-IIB1\");\n    }\n    {\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n    }\n}\n\nclass W\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        A a2 = new A();\n        System.out.println(\"----------\");\n        B b1 = new B();\n        System.out.println(\"----------\");\n        B b2 = new B();\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2",
                b: "A()\nA-IIB\n----------\nA()\nA-IIB\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b"
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
