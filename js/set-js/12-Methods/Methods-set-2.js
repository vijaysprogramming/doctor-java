const quizData = [
    
{
    question: "31.What is the output for given code?",
    code : "class Z11 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static int test1() {\n        System.out.println(\"from test1\");\n        return 100 + 300;\n    }\n}",
    a : "main begin\nfrom test1\nmain end:100 + 300",
    b : "main begin\nfrom test1\nmain end:400",
    c : "None",
    d : "None of the above",
    correct : "b"
},
{
    question : "32.What is the output for given code?",
    code : "class Z12 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static String test1() {\n        System.out.println(\"from test1\");\n        return \"Hello\";\n    }\n}",
    a : "main begin\nfrom test1\nmain end:Hello",
    b : "main begin\nfrom test1\nmain end:",
    c : "None",
    d : "None of the above",
    correct : "a"
},
{
    question : "33.What is the output for given code?",
    code : "class Z13 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static String test1() {\n        System.out.println(\"from test1\");\n        String str = \"hello to all\";\n        return str;\n    }\n}",
    a : "main begin\nfrom test1\nmain end:hello to all",
    b : "main begin\nfrom test1\nmain end: hello to all",
    c : "None",
    d : "None of the above",
    correct : "a"
},
{
    question : "34.What is the output for given code?",
    code : "class Z14 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
    a : "Compile time error",
    b : "main begin\nmain end\nfrom test",
    c : "main begin\nmain end",
    d : "None of the above",
    correct : "c"
},
{
    question : "35.What is the output for given code?",
    code : "class Z15 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test();\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
    a : "Compile time error",
    b : "main begin\nmain end\nfrom test",
    c : "main begin\nfrom test\nmain end",
    d : "None of the above",
    correct : "a"
},
{
    question : "36.What is the output for given code?",
    code : "class Z16 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(true);\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
    a : "Compile time error",
    b : "main begin\nmain end\nfrom test",
    c : "main begin\nfrom test\nmain end",
    d : "None of the above",
    correct : "a"
},
{
    question : "37.What is the output for given code?",
    code : "class Z17 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
    a : "Compile time error",
    b : "main begin\nmain end\nfrom test",
    c : "main begin\nfrom test\nmain end",
    d : "None of the above",
   correct : "b"
},
{
    question : "38.What is the output for given code?",
    code : "class Z18 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nfrom test:200\nfrom test:30\nmain end:",
    c : "main begin\nfrom test:200\nfrom test:30",
    d : "None of the above",
    correct : "b"
},
{
    question : "39.What is the output for given code?",
    code : "class Z19 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nmain end:200\nfrom test:200",
    c : "main begin\nfrom test:200\nmain end:200",
    d : "None of the above",
    correct : "a"
},
{
    question: "40.What is the output for given code?",
    code : "class Z20 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nfrom test:200\nfrom test:30\nmain end:",
    c : "main begin\nfrom test:200\nfrom test:30",
    d : "None of the above",
    correct : "b"
},
{
    question : "41.What is the output for given code?",
    code : "class Z21 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nfrom test:200\nmain end:",
    c : "main begin\nfrom test:200",
    d : "None of the above",
    correct : "a"
},
{
    question : "42.What is the output for given code?",
    code : "class Z22 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4.5);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nfrom test:200\nmain end:",
    c : "main begin\nfrom test:200",
    d : "None of the above",
    correct : "a"
},
{
    question: "43.What is the output for given code?",
    code : "class Z23 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
    a : "Compile time error",
    b : "main begin\nfrom test:200\nmain end:",
    c : "main begin\nfrom test:200",
    d : "None of the above",
    correct : "c"
},

   {
        question : "44.What is the output for given code?",
        code : "class Z24 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i + \", \" + j);\n    }\n}",
        a : "main begin\nfrom test:200, 4\nmain end:",
        b : "main begin\nfrom test:200\nmain end:",
        c : "main begin\nfrom test: 200\nmain end:",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "45.What is the output for given code?",
        code : "class Z25 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int i) {\n        System.out.println(\"from test:\");\n    }\n}",
        a : "main begin\nmain end\nfrom test",
        b : "Compile time error",
        c : "main begin\nmain end",
        d : "None of the above",
        correct : "b"
   },
   {
        question : "46.What is the output for given code?",
        code : "class Z26 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, double i) {\n        System.out.println(\"from test:\");\n    }\n}",
        a : "main begin\nmain end\nfrom test",
        b : "Compile time error",
        c : "main begin\nmain end",
        d : "None of the above",
        correct : "b"
   },
   {
        question : "47.What is the output for given code?",
        code : "class Z27 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        double i;\n        System.out.println(\"from test:\");\n    }\n}",
        a : "main begin\nmain end\nfrom test",
        b : "Compile time error",
        c : "main begin\nmain end",
        d : "None of the above",
        correct : "b"
   },
   {
        question : "48.What is the output for given code?",
        code : "class Z28 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, 20, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\");\n    }\n}",
        a : "main begin\nmain end\nfrom test",
        b : "Compile time error",
        c : "main begin\nfrom test\nmain end",
        d : "None of the above",
        correct : "b"
   },
   {
        question : "49.What is the output for given code?",
        code : "class Z29 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, false, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\");\n    }\n}",
        a : "main begin\nmain end\nfrom test",
        b : "Compile time error",
        c : "main begin\nfrom test\nmain end",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "50.What is the output for given code?",
        code : "class Z30 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, false, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\" + i);\n        System.out.println(\"from test:\" + j);\n        System.out.println(\"from test:\" + k);\n    }\n}",
        a : "main begin\nfrom test:10\nfrom test:false\nfrom test:30\nmain end:",
        b : "Compile time error",
        c : "main begin\nfrom test:false\nfrom test:10\nfrom test:30\nmain end",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "51.What is the output for given code?",
        code : "class Z31 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x;\n        test(x);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
        a : "main begin\nfrom test:0\nmain end:",
        b : "Compile time error",
        c : "main begin\nmain end",
        d: "None of the above",
        correct : "b"
   },
   {
        question : "52.What is the output for given code?",
        code : "class Z32 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x = 30;\n        test(x);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
        a : "main begin\nfrom test:30\nmain end:",
        b : "Compile time error",
        c : "main begin\nmain end",
        d : "None of the above",
        correct : "a"
   },
   {
        question :"53.What is the output for given code?",
        code : "class Z33 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x;\n        test(x = 10);\n        System.out.println(\"main end:\" + x);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
        a : "main begin\nfrom test:10\nmain end:",
        b : "Compile time error",
        c : "main begin\nmain end",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "54.What is the output for given code?",
        code : "class Z34 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i;\n        test(i = 10);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
        a : "main begin\nfrom test:10\nmain end:10",
        b : "Compile time error",
        c : "main begin\nfrom test:10\nmain end:30",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "55.What is the output for given code?",
        code : "class Z35 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 1;\n        test(i + 20);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
        a : "main begin\nfrom test:21\nmain end:1",
        b : "Compile time error",
        c : "main begin\nfrom test:21\nmain end:30",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "56.What is the output for given code?",
        code : "class Z36 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x = 1;\n        test(x + 20);\n        System.out.println(\"main end:\" + x);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
        a : "main begin\nfrom test:21\nmain end:1",
        b : "Compile time error",
        c : "main begin\nfrom test:21\nmain end:30",
        d : "None of the above",
        correct : "a"
   },
   {
        question : "57.What is the output for given code?",
        code : "class Z37 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 1;\n        test(i);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
        a : "main begin\nfrom test:1\nmain end:30",
        b : "Compile time error",
        c : "main begin\nfrom test:1\nmain end:1",
        d : "None of the above",
        correct : "c"
   },
   {
        question : "58.What is the output for given code?",
        code : "class Z38 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, 20, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i + \", \" + j);\n    }\n}",
        a : "main begin\nfrom test:10, 20\nmain end:",
        b : "Compile time error",
        c : "main begin\nfrom test:10\nmain end:",
        d : "None of the above",
        correct : "b"
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