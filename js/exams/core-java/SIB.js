const quizData = [
    
    {
        question: 1,
        code: `class A 
        {
            static int i = 10;
            public static void main(String[] args) 
            {
                System.out.println(i);
            }
        }`,
        a: '10',
        b: '0',
        c: 'Compile Time Error',
        d: 'None of the above',
        correct: 'a',
    },
    {
        question: 2,
        code: `class B 
        {
            static int i = 10;
            static int j = 20;
            static int k;
            public static void main(String[] args) 
            {
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
            }
        }`,
        a: '10<br>20<br>0',
        b: '10 20 0',
        c: 'Compile Time Error',
        d: 'None of the above',
        correct: 'b',
    },
    { 
        question: 3,
        code:`class C
        {
            static int i = 10;
            static int j = 20;
            static int k;
            public static void main(String[] args)
            {
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
                i = 200;
                j = 400;
                k = 500;
                System.out.println(i);
                System.out.println(j);
                System.out.println(k);
            }
    }
        }`,
         a: "10<br>20<br>0<br>200 400 500",
        b:   "10<br>20<br>0<br>200<br>400<br>500",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "b",
        },
        {
            question: 4,
            code: `class D 
            {
                static int i = 10;
                static int j = 20;
                static
                {
                    //some code
                }
                public static void main(String[] args) 
                {
                    System.out.println(i + ", " + j);
                }
            }`,
            a: '10, 20',
            b: '10,<br>20',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'a'
        },
        {
            question: 5,
            code: `class E
            {
                static int i = test1();
                static int j = test2();
                static
                {
                    System.out.println("from SIB");
                }
                static int test1()
                {
                    System.out.println("from test1");
                    return 10;
                }
                static int test2()
                {
                    System.out.println("from test2");
                    return 20;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main:" + i + ", " + j);
                }
            }`,
            a: 'main:0, 0<br>from SIB<br>from test1<br>from test2',
            b: 'from SIB<br>from test1<br>from test2<br>main:10, 20',
            c: 'from test1<br>from test2<br>from SIB<br>main:10, 20',
            d: 'None of the above',
            correct: 'b'
        },
        {
            question: 6,
            code: `class F
            {
                static
                {
                    System.out.println("from SIB1");
                }
                static int i = test1();
                static int j = test2();
                static
                {
                    System.out.println("from SIB2");
                }
                static int test1()
                {
                    System.out.println("from test1");
                    return 10;
                }
                static int test2()
                {
                    System.out.println("from test2");
                    return 20;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main:" + i + ", " + j);
                }
            }`,
            a: 'from SIB1<br>from test1<br>from test2<br>from SIB2<br>main:10, 20',
            b: 'main:10, 20<br>from SIB1<br>from test1<br>from test2<br>from SIB2',
            c: 'from SIB1<br>from SIB2<br>from test1<br>from test2<br>main:10, 20',
            d: 'None of the above',
            correct: 'a'
        },
        {
            question: 7,
            code: `class G
            {
                static int i = test1();
                static int j = test2();
                static
                {
                    System.out.println("from SIB " + i + ", " + j);
                }
                static int test1()
                {
                    System.out.println("from test1 " + i + ", " + j);
                    return 10;
                }
                static int test2()
                {
                    System.out.println("from test2 " + i + ", " + j);
                    return 20;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main:" + i + ", " + j);
                }
            }`,
            a: 'main:0, 0<br>from test1 0, 0<br>from test2 10, 0<br>from SIB 10, 20',
            b: 'from test1 0, 0<br>from test2 10, 0<br>from SIB 10, 20<br>main:10, 20',
            c: 'from SIB 0, 0<br>from test1 0, 0<br>from test2 10, 0<br>main:10, 20',
            d: 'None of the above',
            correct: 'b'
        },
        {
            question: 8,
            code: `class H
            {
                static int i = test1();
                static int j = test2();
                static
                {
                    System.out.println("from SIB " + i + ", " + j);  
                    i += 1;
                    j += 2;
                }
                static int test1()
                {
                    System.out.println("from test1 " + i + ", " + j);
                    i += 3;
                    j += 4;
                    return i + j + 10;
                }
                static int test2()
                {
                    System.out.println("from test2 " + i + ", " + j);
                    i += j + 5;
                    j += i + 6;
                    return i + j + 20;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main:" + i + ", " + j);
                }
            }`,
            a: 'main:0, 0<br>from test1 0, 0<br>from test2 20, 6<br>from SIB 20, 94',
            b: 'from test1 0, 0<br>from test2 17, 4<br>from SIB 26, 82<br>main:27, 84',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'b'
        },
        {
            question: 9,
            code: `class I
            {
                static
                {        
                    System.out.println("SIB");
                }
                public static void main(String[] args) 
                {
                    System.out.println("main");
                }
            }`,
            a: 'SIB<br>main',
            b: 'main<br>SIB',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'a'
        },
        {
            question: 10,
            code: `class J
            {
                public static void main(String[] args) 
                {
                    System.out.println("main");
                }
                static
                {        
                    System.out.println("SIB");
                }
            }`,
            a: 'SIB<br>main',
            b: 'main<br>SIB',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'a'
        },
        {
            question: 11,
            code: `class K
            {
                public static void main(String[] args) 
                {
                    System.out.println("main");
                }
                static
                {        
                    System.out.println("SIB");
                    main(null);
                }
            }`,
            a: 'Compile Time Error',
            b: 'main<br>SIB',
            c: 'main<br>SIB<br>main',
            d: 'SIB<br>main<br>main',
            correct: 'c'
        },
        {
            question: 12,
            code: `class L
            {
                static int i = test();
                public static int test()
                {
                    System.out.println("test begin:" + i);
                    i = 1;
                    main(null);
                    System.out.println("test end:" + i);
                    i = 2;
                    return i + 2;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main:" + i);
                    i += 5;
                }
                static
                {        
                    System.out.println("SIB begin:" + i);
                    i = 3;
                    main(null);
                    System.out.println("SIB end:" + i);
                }
            }`,
            a: 'test begin:0<br>main:1<br>test end:6<br>SIB begin:4<br>main:3<br>SIB end:8<br>main:8',
            b: 'main:0<br>SIB begin:5<br>main:3<br>SIB end:8<br>test begin:8<br>main:1<br>test end:1',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'b'
        },
        {
            question: 13,
            code: `class M
            {
                static int i = test1();
                static int j = test2();
                static
                {
                    System.out.println("sib begin:" + i + ", " + j);
                    main(null);
                    System.out.println("sib end:" + i + ", " + j);
                    i += 1;
                    j += 1;
                }
                static int test1()
                {
                    System.out.println("test1 begin:" + i + ", " + j);
                    main(null);
                    System.out.println("test1 end:" + i + ", " + j);
                    i += j + 2;
                    j += i + 1;
                    return i + j + test2();
                }
                static int test2()
                {
                    System.out.println("test2 begin:" + i + ", " + j);
                    i += j + 5;
                    j += i + 4;
                    main(null);
                    System.out.println("test2 end:" + i + ", " + j);
                    i += j + 4;
                    j += i + 5;
                    return i + j + 10;
                }
                public static void main(String[] args) 
                {
                    System.out.println("main :" + i + ", " + j);
                    i += j + i;
                    j += i + j;
                }
            }`,
            a: 'test1 begin:0, 0<br>main :0, 0<br>test1 end:0, 0<br>test2 begin:2, 3<br>main :10, 17<br>test2 end:37, 71<br>test2 begin:315, 188<br>main :508, 700<br>test2 end:1716, 3116<br>sib begin:4836, 12803<br>main :4836, 12803<br>sib end:22475, 48081<br>main :22476, 48082',
            b: 'test1 begin:0, 0<br>main :0, 0<br>test1 end:0, 0<br>test2 begin:2, 3<br>main :10, 17<br>test2 end:73, 70<br>test2 begin:315, 188<br>main :508, 700<br>test2 end:1716, 3116<br>sib begin:4836, 12803<br>main :4836, 12803<br>sib end:22475, 49589<br>main :22476, 49086',
            c: 'Compile Time Error',
            d: 'None of the above',
            correct: 'b'
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