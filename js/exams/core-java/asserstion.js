const quizData = [
    
    
    {
        "question": "1.What is the output for given code?",
        "code": "package pack1;\n\nclass A {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "correct": "b"
    },
    {
        "question": "2.What is the output for given code?",
        "code": "package pack1;\n\npublic class B {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true;                //jdk 1.3\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "3.What is the output for given code?",
        "code": "package pack1;\n\npublic class C {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false : \"Something went wrong\";  //jdk 1.3\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "b"
    },
    {
        "question": "4.What is the output for given code?",
        "code": "package pack1;\n\npublic class D {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        assert i == 10;           //jdk 1.8\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "5.What is the output for given code?",
        "code": "package pack1;\n\npublic class E {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "6.What is the output for given code?",
        "code": "package pack1;\n\npublic class F {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        //assert i == 10 : ;\n        System.out.println(2);\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "7.What is the output for given code?",
        "code": "package pack1;\n\npublic class G {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert test();\n        System.out.println(2);\n    }\n\n    static boolean test() {\n        return true;\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "8.What is the output for given code?",
        "code": "package pack1;\n\npublic class H {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert test();    //jdk 1.3\n        System.out.println(2);\n    }\n\n    static int test() {\n        return 10;\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "c"
    },
    {
        "question": "9.What is the output for given code?",
        "code": "package pack1;\n\npublic class I {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true : test();     //jdk 1.3\n        System.out.println(2);\n    }\n\n    static int test() {\n        return 10;\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "b"
    },
    {
        "question": "10.What is the output for given code?",
        "code": "package pack1;\n\npublic class J {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true : test();      //jdk 1.3\n        System.out.println(2);\n    }\n\n    static void test() {\n    }\n}",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "correct": "a"
    },
    {
        "question": "11.What is the output for given code?",
        "code": "package pack1;\n\npublic class K {\n    public static void main(String[] args) {\n        int assert = 10;     //jdk 1.3\n        System.out.println(assert);\n    }\n}",
        "a": "10<br>",
        "b": "Compile Time Error<br>",
        "correct": "b"
    },
    {
        "question": "12.What is the output for given code?",
        "code": "package pack1;\n\nimport pack1.pack11.M;\nimport pack2.N;\nimport pack2.pack22.O;\n\nclass L {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n        M.test2();\n        System.out.println(3);\n        O.test4();\n        System.out.println(4);\n        N.test3();\n        System.out.println(5);\n    }\n}\n\n/* package pack1.pack11;\n\nclass M {\n    public static void test2() {\n        System.out.println(\"pack1.pack11.M.test2 begin\");\n        assert false;\n        System.out.println(\"pack1.pack11.M.test2 end\");\n    }\n}\n\npackage pack2;\n\nclass N {\n    public static void test3() {\n        System.out.println(\"pack2.N.test3 begin\");\n        assert false;\n        System.out.println(\"pack2.N.test3 end\");\n    }\n}\n\npackage pack2.pack22;\n\nclass O {\n    public static void test4() {\n        System.out.println(\"pack2.pack22.O.test4 begin\");\n        assert false;\n        System.out.println(\"pack2.pack22.O.test4 end\");\n    }\n}*/\n\n/* if you give \n.ea:pack2...\n\nthen what could be the output*/",
        "a": "1<br>2<br>3<br>pack2.pack22.O.test4 begin<br>pack2.pack22.O.test4 end<br>4<br>pack2.N.test3 begin<br>pack2.N.test3 end<br>5<br>",
        "b": "Compile Time Error<br>",
        "c": "1<br>2<br>pack1.pack11.M.test2 begin<br>pack1.pack11.M.test2 end<br>3<br>pack2.pack22.O.test4 begin<br>pack2.pack22.O.test4 end<br>4<br>pack2.N.test3 begin<br>pack2.N.test3 end<br>5<br>",
        "correct": "a"
    },
    {
        "question": "13.What is the output for given code?",
        "code": "package pack1;\n\nimport pack1.pack11.M;\nimport pack2.N;\nimport pack2.pack22.O;\n\nclass L {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n        M.test2();\n        System.out.println(3);\n        O.test4();\n        System.out.println(4);\n        N.test3();\n        System.out.println(5);\n    }\n}\n\n/* package pack1.pack11;\n\nclass M {\n    public static void test2() {\n        System.out.println(\"pack1.pack11.M.test2 begin\");\n        assert false;\n        System.out.println(\"pack1.pack11.M.test2 end\");\n    }\n}\n\npackage pack2;\n\nclass N {\n    public static void test3() {\n        System.out.println(\"pack2.N.test3 begin\");\n        assert false;\n        System.out.println(\"pack2.N.test3 end\");\n    }\n}\n\npackage pack2.pack22;\n\nclass O {\n    public static void test4() {\n        System.out.println(\"pack2.pack22.O.test4 begin\");\n        assert false;\n        System.out.println(\"pack2.pack22.O.test4 end\");\n    }\n}*/\n\n/* if you give \n.ea:pack1...\n\nthen what could be the output*/",
        "a": "1<br>2<br>pack1.pack11.M.test2 begin<br>pack1.pack11.M.test2 end<br>3<br>4<br>5<br>",
        "b": "Compile Time Error<br>",
        "c": "1<br>2<br>pack1.pack11.M.test2 begin<br>pack1.pack11.M.test2 end<br>3<br>pack2.pack22.O.test4 begin<br>pack2.pack22.O.test4 end<br>4<br>pack2.N.test3 begin<br>pack2.N.test3 end<br>5<br>",
        "correct": "a"
    },
    {
        "question": "14.What is the output for given code?",
        "code": "package pack1;\n\nimport pack1.pack11.M;\nimport pack2.N;\nimport pack2.pack22.O;\n\nclass L {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n        M.test2();\n        System.out.println(3);\n        O.test4();\n        System.out.println(4);\n        N.test3();\n        System.out.println(5);\n    }\n}\n\n/* package pack1.pack11;\n\nclass M {\n    public static void test2() {\n        System.out.println(\"pack1.pack11.M.test2 begin\");\n        assert false;\n        System.out.println(\"pack1.pack11.M.test2 end\");\n    }\n}\n\npackage pack2;\n\nclass N {\n    public static void test3() {\n        System.out.println(\"pack2.N.test3 begin\");\n        assert false;\n        System.out.println(\"pack2.N.test3 end\");\n    }\n}\n\npackage pack2.pack22;\n\nclass O {\n    public static void test4() {\n        System.out.println(\"pack2.pack22.O.test4 begin\");\n        assert false;\n        System.out.println(\"pack2.pack22.O.test4 end\");\n    }\n}*/\n\n/*\n1. .ea:pack2...\n\n//enable in pack2 and sub packages of pack2 (pack2.pack22) members\n\n2. .ea:pack2.N\n\n//enable only in the N class\n\n3. .ea .da:pack1...\n\n//enable in pack2 and sub packages of pack2 (pack2.pack22) members\n\n4. .ea .da:pack1... .da:pack2.pack22.O\n\n//enable only in the N class*/",
        "a": "1<br>2<br>pack1.pack11.M.test2 begin<br>pack1.pack11.M.test2 end<br>3<br>4<br>5<br>",
        "b": "Compile Time Error<br>",
        "c": "1<br>2<br>pack1.pack11.M.test2 begin<br>pack1.pack11.M.test2 end<br>3<br>pack2.pack22.O.test4 begin<br>pack2.pack22.O.test4 end<br>4<br>pack2.N.test3 begin<br>pack2.N.test3 end<br>5<br>",
        "correct": "a"
    },
    {
        "question": "15.What is the output for given code?",
        "code": "package pack1;\n\nclass A {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n    }\n}\n\n// without supplying VM argument what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "d"
    },
    {
        "question": "16.What is the output for given code?",
        "code": "package pack1;\n\nclass A {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n    }\n}\n\n// after supplying VM argument as .ea what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "d"
    },
    {
        "question": "17.What is the output for given code?",
        "code": "package pack1;\n\nclass A {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false;\n        System.out.println(2);\n    }\n}\n\n// after supplying VM argument as .da what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "a"
    },
    {
        "question": "18.What is the output for given code?",
        "code": "package pack1;\n\npublic class B {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true;\n        System.out.println(2);\n    }\n}\n\n//Without supplying VM argument what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "a"
    },
    {
        "question": "19.What is the output for given code?",
        "code": "package pack1;\n\npublic class B {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true;\n        System.out.println(2);\n    }\n}\n\n// By supplying VM argument as .ea what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "a"
    },
    {
        "question": "20.What is the output for given code?",
        "code": "package pack1;\n\npublic class B {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert true;\n        System.out.println(2);\n    }\n}\n\n// By supplying VM argument as .da what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError<br>",
        "correct": "a"
    },
    {
        "question": "21.What is the output for given code?",
        "code": "package pack1;\n\npublic class C {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false : \"Something went wrong\";\n        System.out.println(2);\n    }\n}\n\n// Without supplying VM argument what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError : Something went wrong<br>",
        "correct": "d"
    },
    {
        "question": "22.What is the output for given code?",
        "code": "package pack1;\n\npublic class C {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false : \"Something went wrong\";\n        System.out.println(2);\n    }\n}\n\n// By supplying VM argument as .ea what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError : Something went wrong<br>",
        "correct": "d"
    },
    {
        "question": "23.What is the output for given code?",
        "code": "package pack1;\n\npublic class C {\n    public static void main(String[] args) {\n        System.out.println(1);\n        assert false : \"Something went wrong\";\n        System.out.println(2);\n    }\n}\n\n//By supplying VM argument as .da what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "1<br>AssertionError : Something went wrong<br>",
        "correct": "a"
    },
    {
        "question": "24.What is the output for given code?",
        "code": "package pack1;\n\npublic class D {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        assert i == 10;\n        System.out.println(2);\n    }\n}\n\n// Without supplying VM argument what could be the output",
        "a": "1<br>2<br>",
        "b": "1<br>",
        "c": "Compile Time Error<br>",
        "d": "AssertionError<br>",
        "correct": "a"
    },
    
        {
            "question": "25.What is the output for given code?",
            "code": "package pack1;\n\npublic class D {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        assert i == 10;\n        System.out.println(2);\n    }\n}\n\n// By supplying VM argument as .ea what could be the output",
            "a": "1<br>2<br>",
            "b": "1<br>",
            "c": "Compile Time Error<br>",
            "d": "1<br>AssertionError<br>",
            "correct": "a"
        },
        {
            "question": "26.What is the output for given code?",
            "code": "package pack1;\n\npublic class D {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        assert i == 10;\n        System.out.println(2);\n    }\n}\n\n// By supplying VM argument as .da what could be the output",
            "a": "1<br>2<br>",
            "b": "1<br>",
            "c": "Compile Time Error<br>",
            "d": "1<br>AssertionError<br>",
            "correct": "a"
        },
        {
            "question": "27.What is the output for given code?",
            "code": "package pack1;\n\npublic class E {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10;\n        assert i = 10;\n        System.out.println(2);\n    }\n}\n\n// Without supplying VM argument what could be the output",
            "a": "1<br>2<br>",
            "b": "1<br>",
            "c": "Compile Time Error<br>",
            "d": "1<br>AssertionError<br>",
            "correct": "c"
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
codeEl.innerHTML = `<pre><code class="language.java">${currentQuizData.code}</code></pre>`;
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
    <h2 style="text.align: center; font.size: 2rem;">Quiz Results</h2>
    <p style="font.size: 1.5rem; text.align: center;">You answered ${score}/${quizData.length} questions correctly</p>
    <div style="margin.top: 2rem; max.height: 400px; overflow.y: auto; padding: 1rem; border: 1px solid #ccc; border.radius: 10px;">
        <h3 style="text.align: center; margin.bottom: 2rem;">Detailed Summary</h3>
        <ul style="list.style.type: none; padding: 0; font.size: 1.2rem;">
            ${selectedAnswers.map((result, index) => `
                <li style="margin.bottom: 1.5rem;">
                    <strong>Question ${index + 1}:</strong> ${result.question}<br>
                    <pre><code class="language.java">${result.code}</code></pre>
                    <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                    ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
                </li>
            `).join('')}
        </ul>
    </div>
    <div style="text.align: center; margin.top: 2rem;">
        <button onclick="location.reload()" style="font.size: 1.2rem; padding: 0.8rem 1.5rem; background.color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
    </div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}