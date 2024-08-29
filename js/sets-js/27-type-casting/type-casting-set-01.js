// alert("helllllo")

// [
//     {
//         question: "1. which data type is narrower among??",
//         code: "select the correct option",
//         a: "short",
//         b: "float",
//         c: "byte",
//         d: "none of the above",
//         correct: "b",
//     },
    
//     {
//         question: "2. which data type is narrower among?",
//         code: "select the correct option",
//         a: "long",
//         b: "float",
//         c: "double",
//         d: "none of the above",
//         correct: "a",
//     },
    
//     {
//         question: "3. which one is automatic?",
//         code: "select the correct option",
//         a: "widening",
//         b: "narrowing",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "a",
//     },
//     {
//         question: "4. short assigning to int is",
//         code: "select the correct option",
//         a: "widening",
//         b: "narrowing",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "a",
//     },
//     {
//         question: "5. long assigning to double is?",
//         code: "select the correct option",
//         a: "widening",
//         b: "narrowing",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "a",
//     },
//     {
//         question: "6. what is the output",
//         code: `class A
// {
//     public static void main(String[] args)
//     {
//         byte b = 100;
// short s = 1000;
// s = b; 
//         System.out.println("done");
//     }
// }`,
//         a: "compilation error",
//         b: "done",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "a",
//     },
//     {
//         question: "7. what is the output",
//         code: `class B
// {
//     public static void main(String[] args)
//     {
//         byte b = 100;
// short s = 1000;
// s = (short) b; 
//         System.out.println("done");
//     }
// }`,
//         a: "compilation error",
//         b: "done",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "b",
//     },
//     {
//         question: "8. what is the output",
//         code: `class C
// {
//     public static void main(String[] args)
//     {
//         byte b = 100;
// short s = 1000;
//     int i;

// double d;

// s = b;

// i = b;

// i = s;

// d = b;

// d = s;
//         System.out.println("done");
//     }
// }`,
//         a: "compilation error",
//         b: "done",
//         c: "not applicable",
//         d: "none of the above",
//         correct: "b",
//     },
// {
//     question: "9. what is the output",
//     code: `class D 
// {
// public static void main(String[] args) 
// {
// System.out.println("main begin");
// byte b = 20;
// test(b); 
// System.out.println("main end");
// }
// public static void test(int i)
// {
// System.out.println("test");
// }
// }`,
//     a: "compilation error",
//     b: "done",
//     c: "main beging <br> test <br> main end",
//     d: "none of the above",
//     correct: "c",
// },
// {
//     question: "10. what is the output",
//     code: `class E
// class E 
// { 
// public static void main(String[] args) 
// { 
// System.out.println("main begin"); 
// byte b = 20; 
// test(b); 
// short s = 20; 
// test(s); 
// int i = 20; 
// test(i); 
// long j = 20; 
// test(j); 
// System.out.println("main end"); 
// } 
// public static void test(double i) 

// { 
// }
// }`,
//     a: "compilation error",
//     b: "main beging <br> test <br> test <br> test <br> test <br> main end",
//     c: "main beging <br> test <br> main end",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "11. Which data type is wider?",
//     code: "Select the correct option",
//     a: "short",
//     b: "float",
//     c: "byte",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "12. Which data type is wider?",
//     code: "Select the correct option",
//     a: "long",
//     b: "float",
//     c: "double",
//     d: "none of the above",
//     correct: "c"
// },
// {
//     question: "13. Which one is an explicit conversion?",
//     code: "Select the correct option",
//     a: "widening",
//     b: "narrowing",
//     c: "none of the above",
//     d: "both",
//     correct: "b"
// },
// {
//     question: "14. Assigning long to int is?",
//     code: "Select the correct option",
//     a: "widening",
//     b: "narrowing",
//     c: "none of the above",
//     d: "both",
//     correct: "b"
// },
// {
//     question: "15. Assigning double to byte is?",
//     code: "Select the correct option",
//     a: "widening",
//     b: "narrowing",
//     c: "none of the above",
//     d: "both",
//     correct: "b",
// },
// {
//     question: "16. Which data type is the widest?",
//     code: "Select the correct option",
//     a: "long",
//     b: "float",
//     c: "double",
//     d: "none of the above",
//     correct: "c"
// },
// {
//     question: "17. Which data type is the narrowest?",
//     code: "Select the correct option",
//     a: "long",
//     b: "byte",
//     c: "double",
//     d: "none of the above",
//     correct: "b"
// },
// {
//     question: "18.what is the output",
//     code: `class I 
// {
//     public static void main(String[] args) 
//     {
//         int x = 1000;
//         byte y = 10;
//         y = x;
//         System.out.println("done");
//     }
// }`,
//     a: "compilation error",
//     b: "done",
//     c: "none of the above",
//     d: "both",
//     correct: "a",
// },
// {
//     question: "19. what is the output",
//     code: `class I 
// {
//     public static void main(String[] args) 
//     {
//         int x = 1000;
//         byte y = 10;
//         y = x;
//         System.out.println("done");
//     }
// }`,
//     a: "compilation error",
//     b: "done",
//     c: "none of the above",
//     d: "both",
//     correct: "a",
// },
// {
//     question: "20. what is the output",
//     code: `class J 
// {
//     public static void main(String[] args) 
//     {
//         int x = 1000;
//         byte y = 10;
//         y = (byte) x;
//         System.out.println("done");
//     }
// }`,
//     a: "compilation error",
//     b: "done",
//     "correct": "b"
// },
// {
//     question: "21. what is the output",
//     code: `class K 
// { 
//     public static void main(String[] args) 
//     { 
//         int x = 129; 
//         byte y = 10; 
//         y = (byte) x; 
//         System.out.println(x + "," + y); 
//     } 
// }`,
//     a: "compilation error",
//     b: "129,-127",
//     c: "129,129",
//     c: "none of the above",
//     d: "both",
//     correct: "b",
// },
// {
//     question: "22. what is the output",
//     code: `class L
// {
//     public static void main(String[] args) 
//     {
//         int x = -130;
//         byte y = 10;
//         y = (byte) x;
//         System.out.println(x + "," + y);
//     }
// }`,
//     a: "compilation error",
//     b: "129,-127",
//     c: "-130,126",
//     c: "none of the above",
//     d: "both",
//     correct: "c",
// },
// {
//     question: "23. what is the output",
//     code: `class M 
// {
//     public static void main(String[] args) 
//     {
//         int i = 10;
//         short j = i;
//         System.out.println(j);
//     }
// }`,
//     a: "compilation error",
//     b: "10",
//     c: "none of the above",
//     d: "both",
//     correct: "a",
// },
// {
//     question: "24. what is the output",
//     code: `class N 
// {
//     public static void main(String[] args) 
//     {
//         int i = 32768;
//         short j = (short) i;
//         System.out.println(j);
//     }
// }`,
//     a: "compilation error",
//     b: "32768",
//     c: "-32768",
//     d: "none of the above",
//     correct: "c",
// },
// {
//     question: "25. what is the output",
//     code: `class O 
// { 
//     public static void main(String[] args) 
//     { 
//         int i = 130; 
//         short j = (byte) i; 
//         System.out.println(j); 
//     } 
// }`,
//     a: "compilation error",
//     b: "-126",
//     c: "-130",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "26. In case of derived data type, upcasting is automatic.",
//     code: "Select the correct option",
//     a: "yes",
//     b: "no",
//     c: "not applicable",
//     d: "none of the above",
//     correct: "a",
// },
// {
//     question: "27. In case of derived data type, upcasting should be explicit.",
//     code: "Select the correct option",
//     a: "yes",
//     b: "no",
//     c: "not applicable",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "28. In case of derived data type, downcasting is automatic.",
//     code: "Select the correct option",
//     a: "yes",
//     b: "no",
//     c: "not applicable",
//     d: "none of the above",
//     correct: "b",
// },
// {
//     question: "29. In case of derived data type, upcasting should be explicit.",
//     code: "Select the correct option",
//     a: "yes",
//     b: "no",
//     c: "not applicable",
//     d: "none of the above",
//     "correct": "b",
// },
// {
//     question: "30. Method argument is superclass type and while calling the same method supplying subclass type is proper syntax.",
//     code: "Select the correct option",
//     a: "yes",
//     b: "no",
//     c: "not applicable",
//     d: "none of the above",
//     correct: "a",
// },
// ];

// const quiz = document.getElementById('quiz');
// const answerEls = document.querySelectorAll('.answer');
// const questionEl = document.getElementById('question');
// const codeEl = document.getElementById('code');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submitBtn = document.getElementById('submit');

// let currentQuiz = 0;
// let score = 0;
// let selectedAnswers = [];

// loadQuiz();

// function loadQuiz() {
//     deselectAnswers();

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.question;
//     codeEl.innerHTML = `<pre><code class="language-java">${currentQuizData.code}</code></pre>`;
//     a_text.innerHTML = currentQuizData.a;
//     b_text.innerHTML = currentQuizData.b;
//     c_text.innerHTML = currentQuizData.c;
//     d_text.innerHTML = currentQuizData.d;

//     hljs.highlightAll(); // Apply syntax highlighting
// }

// function deselectAnswers() {
//     answerEls.forEach(answerEl => answerEl.checked = false);
// }

// function getSelected() {
//     let answer;

//     answerEls.forEach(answerEl => {
//         if (answerEl.checked) {
//             answer = answerEl.id;
//         }
//     });

//     return answer;
// }

// submitBtn.addEventListener('click', () => {
//     const answer = getSelected();

//     if (answer) {
//         const currentQuizData = quizData[currentQuiz];
//         const correctAnswerText = document.getElementById(currentQuizData.correct + "_text").innerText;
//         const selectedAnswerText = document.getElementById(answer + "_text").innerText;

//         if (answer === currentQuizData.correct) {
//             score++;
//             alert(`Correct! You selected "${selectedAnswerText}".`);
//         } else {
//             alert(`Incorrect! You selected "${selectedAnswerText}". The correct answer is "${correctAnswerText}".`);
//         }

//         selectedAnswers.push({
//             question: currentQuizData.question,
//             code: currentQuizData.code,
//             selected: selectedAnswerText,
//             correct: correctAnswerText,
//             isCorrect: answer === currentQuizData.correct
//         });

//         currentQuiz++;

//         if (currentQuiz < quizData.length) {
//             loadQuiz();
//         } else {
//             showResults();
//         }
//     } else {
//         alert("Please select an answer!");
//     }
// });

// function showResults() {
//     quiz.innerHTML = `
//         <h2 style="text-align: center; font-size: 2rem;">Quiz Results</h2>
//         <p style="font-size: 1.5rem; text-align: center;">You answered ${score}/${quizData.length} questions correctly</p>
//         <div style="margin-top: 2rem; max-height: 400px; overflow-y: auto; padding: 1rem; border: 1px solid #ccc; border-radius: 10px;">
//             <h3 style="text-align: center; margin-bottom: 2rem;">Detailed Summary</h3>
//             <ul style="list-style-type: none; padding: 0; font-size: 1.2rem;">
//                 ${selectedAnswers.map((result, index) => `
//                     <li style="margin-bottom: 1.5rem;">
//                         <strong>Question ${index + 1}:</strong> ${result.question}<br>
//                         <pre><code class="language-java">${result.code}</code></pre>
//                         <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
//                         ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
//                     </li>
//                 `).join('')}
//             </ul>
//         </div>
//         <div style="text-align: center; margin-top: 2rem;">
//             <button onclick="location.reload()" style="font-size: 1.2rem; padding: 0.8rem 1.5rem; background-color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
//         </div>
//     `;

//     hljs.highlightAll(); // Apply syntax highlighting in the summary
// }






const quizData = [
    
    {
        "question": "1.Can we define an empty array?",
        "code": "Select The Correct Answer",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "2.Array size must be declared in which data type?",
        "code": "Select The Correct Answer",
        "a": "Boolean",
        "b": "Double",
        "c": "None of the above",
        "d": "Int",
        "correct": "d"
    },
    {
        "question": "3.Array index must be declared in which data type?",
        "code": "Select The Correct Answer",
        "a": "Boolean",
        "b": "Double",
        "c": "None of the above",
        "d": "Int",
        "correct": "d"
    },
    {
        "question": "4.Arrays are which datatype in case of Java?",
        "code": "Select The Correct Answer",
        "a": "Derived datatype",
        "b": "Primitive datatype",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "5.To read the elements of an ArrayList which method is used?",
        "code": "Select The Correct Answer",
        "a": "Set()",
        "b": "Get()",
        "c": "Size()",
        "d": "Read()",
        "correct": "b"
    },
    {
        "question": "6.In Java, arrays are what?",
        "code": "Select The Correct Answer",
        "a": "Object",
        "b": "Object references",
        "c": "Primitive data type",
        "d": "None of the above",
        "correct": "a"
    },
    {
        "question": "7.Which one is a valid statement?",
        "code": "Select The Correct Answer",
        "a": "char[] c = new char();",
        "b": "char[] c = new char[5];",
        "c": "char[] c = new char(4);",
        "d": "char[] c = new char[];",
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