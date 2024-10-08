const quizData = [

    {
    question:  "1.What is the output for given code?",
    code: `class A 
    {
    
    public static void main(String[] args) 
    
    {
    
    int i = 0;
    
    if(i++ == 0)
    
    {
    
    i ++;
    
    }
    
    System.out.println("main:" + i);
    
    }
    
    }
    }`,
    a: "Compile Time Error",
    b: "2",
    c: "3",
    d: "5",
    correct: "b",
    },
    
    {
    question:  "2.What is the output for given code?",
    code: `class B 
    {
    public static void main(String[] args) 
    {
    int i = 0;
    if(i++ == 0)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:1<br>main:3",
    b: "main:0",
    c: "main:1",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "3.What is the output for given code?",
    code: `class C
    {
    public static void main(String[] args) 
    {
    int i = 0;
    if(i++ == 1)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:1<br>main:3",
    b: "main:0",
    c: "main:1",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "4.What is the output for given code?",
    code: `class D
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(true || i++ == 1)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:1<br>main:3",
    b: "if block:0<br>main:2",
    c: "main:0",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "5.What is the output for given code?",
    code: `class E
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(i++ == 0 || i++ == 1)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:1<br>main:3",
    b: "if block:0<br>main:2",
    c: "if block:1<br>main:2",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "6.What is the output for given code?",
    code: `class F
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(i++ == 1 || i++ == 1)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:0<br>main:3",
    b: "if block:1<br>main:4",
    c: "if block:2<br>main:4",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "7.What is the output for given code?",
    code: `class G
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(i++ == 1 || i++ == 2)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "main:2",
    b: "main:0",
    c: "main:1",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "8.What is the output for given code?",
    code: `class H
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(false && i++ == 0)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:1<br>main:3",
    b: "main:0",
    c: "main:1",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "9.What is the output for given code?",
    code: `class I
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(i++ == 0 && i++ == 0)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:2<br>main:5",
    b: "main:0",
    c: "main:2",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "10.What is the output for given code?",
    code: `class J
    {
    public static void main(String[] args)
    {
    int i = 0;
    if(i++ == 0 && i++ == 1)
    {
    System.out.println("if block:" + i++);
    i++;
    }
    System.out.println("main:" + i);
    }
    }`,
    a: "if block:2<br>main:4",
    b: "main:1",
    c: "main:2",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "11.What is the output for given code?",
    code: `class K 
    {
    public static void main(String[] args) 
    {
    System.out.println(true);
    System.out.println(!true);
    System.out.println(true || true);
    System.out.println(true || false);
    System.out.println(false || false);
    System.out.println(false || true);
    System.out.println(true && true);
    System.out.println(true && false);
    System.out.println(false && false);
    System.out.println(false && true);
    }
    }`,
    a: "true<br>false<br>true<br>true<br>false<br>true<br>true<br>false<br>false<br>false",
    b: "true<br>false<br>true<br>true<br>true<br>true<br>true<br>false<br>false<br>false",
    c: "true<br>false<br>true<br>true<br>false<br>true<br>true<br>false<br>false<br>true",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "12.What is the output for given code?",
    code: `class L 
    {
    public static void main(String[] args) 
    {
    int i = 0;
    System.out.println(true || (i++ == 0));
    System.out.println(i);
    }
    }`,
    a: "true<br>1",
    b: "true<br>0",
    c: "Compile Time Error",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "13.What is the output for given code?",
    code: `class M
    {
    public static void main(String[] args) 
    {
    int i = 0;
    System.out.println(false || (i++ == 0));
    System.out.println(i);
    }
    }`,
    a: "false<br>1",
    b: "true<br>0",
    c: "true<br>1",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "14.What is the output for given code?",
    code: `class N
    {
    public static void main(String[] args) 
    {
    int i = 0;
    System.out.println(false && (i++ == 0));
    System.out.println(i);
    }
    }`,
    a: "false<br>0",
    b: "false<br>1",
    c: "true<br>1",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "15.What is the output for given code?",
    code: `class O
    {
    public static void main(String[] args) 
    {
    int i = 0;
    System.out.println(true && (i++ == 0));
    System.out.println(i);
    }
    }`,
    a: "0",
    b: "true<br>0",
    c: "true<br>1",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "16.What is the output for given code?",
    code: `class A 
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if block");
    }
    else
    {
    System.out.println("else block");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block<br>main end",
    b: "main begin<br>else block<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "17.What is the output for given code?",
    code: `class B
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block");
    }
    else
    {
    System.out.println("else block");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block<br>main end",
    b: "main begin<br>else block<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "18.What is the output for given code?",
    code: `class C
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block");
    }
    else
    System.out.println("else block");
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>else block<br>main end",
    b: "main begin<br>if block<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "19.What is the output for given code?",
    code: `class D
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if block");
    }
    else
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    b: "main begin<br>if block<br>main end",
    c: "main begin<br>if block<br>else block stmt2<br>else block stmt3<br>main end",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "20.What is the output for given code?",
    code: `class E
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block");
    }
    else
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    b: "main begin<br>if block<br>main end",
    c: "main begin<br>if block<br>else block stmt2<br>else block stmt3<br>main end",
    d: "None of the above",
    correct: "a",
    },,
    {
    question:  "21.What is the output for given code?",
    code: `class F
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block");
    }
    else
    System.out.println("else block");
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>else block<br>main end",
    b: "main begin<br>main end",
    c: "main begin<br>if block<br>main end",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "22.What is the output for given code?",
    code: `class G
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block stmt1");
    System.out.println("if block stmt2");
    System.out.println("if block stmt3");
    }
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
    b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "23.What is the output for given code?",
    code: `class H
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if block stmt1");
    System.out.println("if block stmt2");
    System.out.println("if block stmt3");
    }
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
    b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "a",
    },
    {
    question:  "24.What is the output for given code?",
    code: `class I
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false)
    {
    System.out.println("if block stmt1");
    System.out.println("if block stmt2");
    System.out.println("if block stmt3");
    }
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
    b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "25.What is the output for given code?",
    code: `class J
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if block stmt1");
    System.out.println("if block stmt2");
    System.out.println("if block stmt3");
    }
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
    b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    c: "main begin<br>main end",
    d: "None of the above",
    correct: "a",
    },
    {
    question: "26.What is the output for given code?",
    code: `class K
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if block stmt1");
    System.out.println("if block stmt2");
    System.out.println("if block stmt3");
    }
    System.out.println("main end");
    }
    }`,
    a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
    b: "main begin<br>main end",
    c: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    d: "None of the above",
    correct: "a",
    },
    
    {
    question:  "27.What is the output for given code?",
    code: `class L
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true)
    {
    System.out.println("if-block");
    }
    System.out.println("some thing");
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end:");
    }
    }`,
    a: "main begin<br>if-block<br>some thing<br>main end",
    b: "Compile Time Error",
    c: "None of the above",
    d: "None of the above",
    correct: "b",
    },
    {
    question:  "28.What is the output for given code?",
    code: `class M
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(false);
    {
    System.out.println("if-block");
    }
    System.out.println("main end:");
    }
    }`,
    a: "main begin<br>if-block<br>main end",
    b: "Compile Time Error",
    c: "main begin<br>main end:",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "29.What is the output for given code?",
    code: `class N
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    if(true);
    {
    System.out.println("if-block");
    }
    else
    {
    System.out.println("else block stmt1");
    System.out.println("else block stmt2");
    System.out.println("else block stmt3");
    }
    System.out.println("main end:");
    }
    }`,
    a: "main begin<br>if-block<br>main end",
    b: "Compile Time Error",
    c: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
    d: "None of the above",
    correct: "c",
    },
    {
    question:  "30.What is the output for given code?",
    code: `class O
    {
    public static void main(String[] args) 
    {
    System.out.println("main begin");
    {
    System.out.println("block1-stmt1");
    System.out.println("block1-stmt2");
    System.out.println("block1-stmt3");
    System.out.println("block1-stmt4");
    }
    System.out.println("some thing");
    {
    System.out.println("block2-stmt1");
    System.out.println("block2-stmt2");
    System.out.println("block2-stmt3");
    System.out.println("block2-stmt4");
    }
    System.out.println("main end:");
    }
    }`,
    a: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing<br>block2-stmt1<br>block2-stmt2<br>block2-stmt3<br>block2-stmt4<br>main end:",
    b: "Compile Time Error",
    c: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing<br>main end",
    d: "None of the above",
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
