const quizData = [
    {
        question: "1. what is the output",
        code: "class A \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nmain end",
        b: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",
        c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",
            d: "none of the above",
        correct: "b",
    },
    {
        question: "2. what is the output",
        code: "class B \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nmain end",
        b: "main begin\nloop body:10\nloop body:11\nloop body:12\nloop body:13\nmain end",
         c: "main begin\nmain end",
        correct: "a",
    },
    {
        question: "3. what is the output",
        code: "class C \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n            System.out.println(\"loop body:\" + i);\n            int j = 20;\n            j++;\n            j += 20;\n            System.out.println(\"--------------:\" + j);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nloop body:1\nloop body:1\n--------------:41\nloop body:2\nloop body:2\n--------------:41\nloop body:3\nloop body:3\n--------------:41\nloop body:4\nloop body:4\n--------------:41\nloop body:5\nloop body:5\n--------------:41\nmain end",
        b: "main begin\nloop body:1\nloop body:1\n--------------:41\nloop body:2\nloop body:2\n--------------:41\nloop body:3\nloop body:3\n--------------:41\nloop body:4\nloop body:4\n--------------:41\nloop body:5\nloop body:5\n--------------:41\nmain end",
        c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",

            d: "none of the above",
        correct: "a",
    },
    {
        question: "4. what is the output",
        code: "class D \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
        a: "runtime error",
        b: "compile time error",
        c: "error",
            d: "none of the above",
        correct: "b",
    },
    {
       question: "5. what is the output",
        code: "class E \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i = i + 2)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "compile time error",
        b: "main begin\nloop body:1\nloop body:3\nloop body:5\nloop body:7\nloop body:9\nmain end:",
        c: "error",
            d: "none of the above",
        correct: "b",
    },
    {
        question: "6. what is the output",
        code: "class G \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i--)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "run time error",
        b: "main begin\nloop body:1\nloop body:3\nloop body:5\nloop body:7\nloop body:9\nmain end:",
        c: "main begin\nloop body:10\nloop body:9\nloop body:8\nloop body:7\nloop body:6\nloop body:5\nloop body:4\nloop body:3\nloop body:2\nloop body:1\nmain end:",

            d: "none of the above",
        correct: "c",
    },
    {
        question: "7. what is the output",
        code: "class H \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i = i - 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "compile time error",
        b: "main begin\nloop body:10\nloop body:7\nloop body:4\nloop body:1\nmain end:",
        c: "main begin\nloop body:10\nloop body:7\nloop body:4\nmain end:",
        
            d: "none of the above",
        "correct": "b",
    },
    {
        question: "8. what is the output",
        code: "class I \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i -= 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "main begin\nloop body:10\nloop body:7\nloop body:4\nloop body:1\nmain end:",
        b: "main begin\nloop body:10\nloop body:7\nloop body:1\nmain end:",
        c: "main begin\nmain end:",
        correct: "b",
    },
    {
        question: "9. what is the output",
        code: "class J \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 50; i = i * 5)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "main begin\nloop body:1\nloop body:5\nloop body:25\nmain end:",
        b: "main begin\nloop body:1\nloop body:5\nmain end:",
        c: "main begin\nloop body:25\nmain end:",
        correct: "a",
    },
    {
        question: "10. what is the output",
        code: "class K \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 500; i *= 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nloop body:81\nloop body:243\nmain end:",
        b: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nloop body:81\nmain end:",
        c: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nmain end:",
        correct: "a",
    },
    {
        question: "11. what is the output",
        code: "class L \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 5000; i > 0; i = i / 10)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
        a: "main begin\nloop body:5000\nloop body:500\nloop body:50\nloop body:5\nmain end:",
        b: "main begin\nloop body:5000\nloop body:500\nloop body:50\nmain end:",
        c: "main begin\nloop body:5000\nloop body:500\nloop body:50\nloop body:5\nloop body:0\nmain end:",
        correct: "a",
    },
    {
        question: "12. what is the output",
        code: "class M \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(; i <= 3; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
        a: "main begin\nloop body:0\nloop body:1\nloop body:2\nloop body:3\nmain end:4",
        b: "main begin\nloop body:0\nloop body:1\nloop body:2\nloop body:3\nmain end:3",
        c: "compile time error",
        correct: "a",
    },
    {
        question: "13. what is the output",
        code: "class N \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j <= 2; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
        a: "main begin\nmain end:2",
        b: "main begin\nmain end:3",
        c: "error",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "14. what is the output",
        code: "class O \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j < 3; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
        a: "main begin\nmain end:2",
        b: "main begin\nmain end:3",
        c: "error",
        d: "none of the above",
        correct: "b",
    },
    {
        "question": "15. what is the output",
        "code": "class P \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j <= 3; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
        a: "main begin\nmain end:3",
        b: "main begin\nmain end:4",
        c: "error",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "16. what is the output",
        code: "class Q \n{\n    static int i = 10;\n    static int j = 20;\n    static int k;\n    static int m = 30;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n    }\n}",
        a: "10,\n20,\n0,\n30",
        b: "10, 20, k, 30",
        c: "10, 20, 0, 30",
        d: "Compile Time Error",
        correct: "c",
    },
    
        {
            question: "17. what is the output",
            code: "class R \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; i <= 5; )\n        {\n            System.out.println(\"loop body:\" + i ++);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "run time error",
            b: "compile time error",
            c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
            d: "not applicable",
            correct: "c",
        },
        {
            question: "18. what is the output",
            code: "class S \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; i <= 5; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
            b: "main begin\nmain end:6",
            c: "compile time error",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "19. what is the output",
            code: "class T \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; ; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
            b: "run time error",
            c: "compile time error",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "20. what is the output",
            code: "class U \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; ; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n    }\n}",
            a: "compile time error",
            b: "infinite loop",
            c: "mainbegin",
            d: "run time error",
            correct: "b",
        },
        {
            question: "21. what is the output",
            code: "class V \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 10; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
            a: "infinite loop",
            b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47",
            c: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:10, 47",
            d: "compile time error",
            correct: "b",
        },
        {
            question: "22. what is the output",
            code: "class W \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
            a: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
            b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
            c: "infinite loop",
            d: "compile time error",
            correct: "a",
        },
        {
            question: "23. what is the output",
            code: "class X \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 20 || j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
            a: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59\nloop body:15, 62\nloop body:16, 65\nloop body:17, 68\nloop body:18, 71\nloop body:19, 74\nloop body:20, 77",
            b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56",
            c: "compile time error",
        
            d: "none of the above",
            correct: "a",
        },
        {
            question: "24. what is the output",
            code: "class Y \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 20 && j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
            a: "infinite loop",
            b: "compile time error",
            c: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
            d: "none of the above",
            correct: "c",
        },
        {
            question: "25. what is the output",
            code: "class Z \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 1, System.out.println(\"init\"); \n        test(i); \n        System.out.println(\"before change:\" + i), i++, System.out.println(\"after change:\" + i))\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n\n    static boolean test(int i)\n    {\n        boolean flag = (i <= 5);\n        System.out.println(\"boolean status for \" + i + \" is \" + flag);\n        return flag;\n    }\n}",
            a: "run time error",
            b: "compile time error",
            c: "main begin\ninit\nboolean status for 1 is true\nloop body:1\nbefore change:1\nafter change:2\nboolean status for 2 is true\nloop body:2\nbefore change:2\nafter change:3\nboolean status for 3 is true\nloop body:3\nbefore change:3\nafter change:4\nboolean status for 4 is true\nloop body:4\nbefore change:4\nafter change:5\nboolean status for 5 is true\nloop body:5\nbefore change:5\nafter change:6\nboolean status for 6 is false\nmain end",
            d: "main begin\ninit\nboolean status for 1 is true\nloop body:1\nbefore change:1\nafter change:2\nboolean status for 2 is true\nloop body:2\nbefore change:2\nafter change:3\nboolean status for 3 is true\nloop body:3\nbefore change:3\nafter change:4\nboolean status for 4 is true\nloop body:4\nbefore change:4\nafter change:5\nboolean status for 5 is true\nloop body:5\nbefore change:5\nafter change:6\nboolean status for 6 is true\nmain end",
            correct: "c",
        },
        {
            question: "26. what is the output",
            code: "class Z1 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        //int m = 1, n = 10, o, p = 30, q, r = 40;\n        for(int i = 1, System.out.println(\"init\"); \n        test(i); \n        System.out.println(\"before change:\" + i), i++, System.out.println(\"after change:\" + i))\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n\n    static boolean test(int i)\n    {\n        boolean flag = (i <= 5);\n        System.out.println(\"boolean status for \" + i + \" is \" + flag);\n        return flag;\n    }\n}",
            a: "compile time error",
            b: "run time error",
            c: "error",
            d: "none of the above",
            correct: "a",
        },
        {
            question: "27. what is the output",
            code: "class Z2 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 0; i <= 5; i++)\n        System.out.println(\"loop body:\" + i);\n        System.out.println(\"loop body:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
            a: "run time error",
            b: "compile time error",
            c: "0",
            d: "5",
            correct: "d",
        },
        {
            question: "28. what is the output",
            code: "class Z3 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 0; i <= 5; i++)\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"loop body stmt2:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
            a: "main begin\nloop body stmt1:0\nloop body stmt1:1\nloop body stmt1:2\nloop body stmt1:3\nloop body stmt1:4\nloop body stmt1:5\nloop body stmt2:6\nmain end",
            b: "compile time error",
            c: "run time error",
            d: "mainbegin\nloop body stmt1:0\nloop body stmt1:1\nloop body stmt1:2\nloop body stmt1:3\nloop body stmt1:4\nloop body stmt1:5\nmain end",
            correct: "a",
        },
        {
            question: "29. what is the output",
            code: "class Z4 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 0; i <= 5; i++);\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"loop body stmt2:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
            a: "compile time error",
            b: "run time error",
            c: "main begin\nmain end",
            d: "mainbegin\nloop body stmt1:6\nloop body stmt2:6\nmain end",
            correct: "d",
        },
        {
            question: "30. what is the output",
            code: "class Z5 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 0; i <= 5; i++);\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
            a: "runtime error",
            b: "compile time error",
            c: "error",
            d: "none of the above",
            correct: "b",
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