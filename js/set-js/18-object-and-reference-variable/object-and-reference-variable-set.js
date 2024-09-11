const quizData = [
    
    {
        question:  "1.What is the output for given code?",
        code: `class A 
    {
        int i;
    
        public static void main(String[] args) 
        {
            System.out.println(i);
        }
    }`,
        a: "0",
        b: "Compile time error",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question:  "2.What is the output for given code?",
        code: `class B 
    {
        void test()
        {
        }
    
        public static void main(String[] args) 
        {
            test();
            System.out.println("Hello World!");
        }
    }`,
        a: "Hello World",
        b: "Compile time error",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question:  "3.What is the output for given code?",
        code: `class C 
    {
        static void test1()
        {
            System.out.println("Hello World!");
            test2();
        }
    
        void test2()
        {
            System.out.println("Hello World!");
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question:  "4.What is the output for given code?",
        code: `class D 
    {
        public void test1()
        {
            System.out.println("Hello World!");
        }
    
        static
        {
            test1();
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question:  "5.What is the output for given code?",
        code: `package src;
    
    class E
    {
        int i;
    
        static
        {
            i = 20;
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question:  "6.What is the output for given code?",
        code: `class F 
    {
        int i;
    
        public static void main(String[] args) 
        {
            F f1 = new F();
            System.out.println(f1.i);
        }
    }`,
        a: "0",
        b: "Compile time error",
        c: "None of the above",
        d: "Not applicable",
        correct: "a",
    },
    {
        question:  "7.What is the output for given code?",
        code: `package src;
    
    class G 
    {
        void test()
        {
            System.out.println("from test");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            G g1 = new G();
            g1.test();
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>from test<br>main end",
        b: "main begin<br>main end",
        c: "Compile time error",
        d: "Not applicable",
        correct: "a",
    },
    {
        question:  "8.What is the output for given code?",
        code: `class H 
    {
        void test()
        {
        }
    
        static
        {
            H h1 = new H();
            h1.test();
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "a",
    },
    {
        question:  "9.What is the output for given code?",
        code: `class I 
    {
        int x;
    
        static void test()
        {
            I obj = new I();
            System.out.println(obj.x);
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "a",
    },
    {
        question:  "10.What is the output for given code?",
        code: `class J 
    {
        int x;
    
        static
        {
            J ref = new J();
            System.out.println(ref.x);
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "a",
    },
    {
        question:  "11.What is the output for given code?",
        code: `class K 
    {
        int i;
    
        public static void main(String[] args) 
        {
            K k1 = new K();
            System.out.println(k1.i);
            k1.i = 20;
            System.out.println(k1.i);
        }
    }`,
        a: "0<br>0",
        b: "0<br>20",
        c: "20<br>0",
        d: "Compile time error",
        correct: "b",
    },
    {
        question:  "12.What is the output for given code?",
        code: `class L 
    {
        void test()
        {
            System.out.println("from test");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            L ref = new L();
            ref.test();
            System.out.println("...........");
            ref.test();
            System.out.println("...........");
            ref.test();
            System.out.println("...........");
            System.out.println("main end");
        }
    }`,
        a: "Compile time error",
        b: "main begin<br>...........<br>...........<br>...........<br>main end",
        c: "main begin<br>from test<br>...........<br>from test<br>...........<br>from test<br>...........<br>main end",
        d: "None",
        correct: "c",
    },
    {
        question:  "13.What is the output for given code?",
        code: `class M 
    {
        int i;
    
        public static void main(String[] args) 
        {
            M m1 = new M();
            M m2 = m1;
            System.out.println(m1.i);
            System.out.println(m2.i);
            m1.i = 10;
            System.out.println(m1.i);
            System.out.println(m2.i);
            m2.i = 20;
            System.out.println(m1.i);
            System.out.println(m2.i);
        }
    }`,
        a: "Compile time error",
        b: "0<br>0<br>10<br>10<br>20<br>20",
        c: "0 0 10 10 20 20",
        d: "None",
        correct: "b",
    },
    {
        question:  "14.What is the output for given code?",
        code: `class N 
    {
        int i;
    
        public static void main(String[] args) 
        {
            N n1 = new N();
            N n2 = n1;
            N n3 = n2;
            N n4 = n1;
            N n5 = n3;
            n4.i = 20;
            System.out.println(n1.i);
            System.out.println(n2.i);
            System.out.println(n3.i);
            System.out.println(n4.i);
            System.out.println(n5.i);
            n2.i += 20;
            System.out.println(n1.i); 
            System.out.println(n2.i); 
            System.out.println(n3.i); 
            System.out.println(n4.i); 
            System.out.println(n5.i); 
        }
    }`,
        a: "Compile time error",
        b: "20<br>20<br>20<br>20<br>20<br>40<br>40<br>40<br>40<br>40",
        c: "20<br>20<br>20<br>20<br>20<br>20<br>20<br>20<br>20<br>20",
        d: "None",
        correct: "b",
    },
    {
        question:  "15.What is the output for given code?",
        code: `class O 
    {
        int i;
    
        public static void main(String[] args) 
        {
            O ref1 = new O();
            ref1.i = 10;
            O ref2 = new O();
            ref2.i = 20;
            O ref3 = new O();
            ref3.i = 30;
            System.out.println(ref1.i);
            System.out.println(ref2.i);
            System.out.println(ref3.i);
            ref2.i = ref1.i + ref3.i; 
            System.out.println(ref1.i);
            System.out.println(ref2.i);
            System.out.println(ref3.i);
        }
    }`,
        a: "Compile time error",
        b: "10<br>20<br>30<br>10<br>30<br>40",
        c: "10<br>20<br>30<br>10<br>40<br>30",
        d: "None",
        correct: "c",
    },
    {
        question:  "15.What is the output for given code?",
        code: `class P 
    {
        int i;
    
        public static void test()
        {
            System.out.println("test begin");
            P obj = new P();
            System.out.println(obj.i);
            obj.i = 10;
            System.out.println(obj.i);
            System.out.println("test end");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>test begin<br>0<br>10<br>test end<br>main end",
        b: "main begin<br>test begin<br>10<br>0<br>test end<br>main end",
        c: "Compile time error",
        d: "None",
        correct: "a",
    },
    {
        question:  "16.What is the output for given code?",
        code: `class Q
    {
        int i;
    
        public static void test(Q obj)
        {
            System.out.println("test begin");
            System.out.println("c:" + obj.i);
            obj.i = 10;
            System.out.println("d:" + obj.i);
            System.out.println("test end");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            Q ref = new Q();
            ref.i = 5;
            System.out.println("a:" + ref.i);
            test(ref);
            System.out.println("b:" + ref.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>a:5<br>test begin<br>c:0<br>d:10<br>test end<br>b:5<br>main end",
        b: "main begin<br>a:5<br>test begin<br>c:5<br>d:10<br>test end<br>b:10<br>main end",
        c: "Compile time error",
        d: "None",
        correct: "b",
    },
    {
        question:  "17.What is the output for given code?",
        code: `class R
    {
        int i;
    
        public static R test()
        {
            System.out.println("test begin");
            R obj = new R();
            System.out.println("c:" + obj.i);
            obj.i = 10;
            System.out.println("d:" + obj.i);
            System.out.println("test end");
            return obj;
        }
    
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            R ref = test();
            System.out.println("a:" + ref.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>test begin<br>c:0<br>d:10<br>test end<br>a:10<br>main end",
        b: "main begin<br>test begin<br>a:0<br>c:0<br>d:10<br>test end<br>main end",
        c: "Compile time error",
        d: "None",
        correct: "a",
    },
    {
        question:  "18.What is the output for given code?",
        code: `class S 
    {
        void test()
        {
            System.out.println("test:" + this);
        }
    
        public static void main(String[] args) 
        {
            S s1 = new S();
            System.out.println("main:" + s1);
            s1.test();
        }
    }`,
        a: "main:0<br>test:src.S@15db9",
        b: "main:src.S@15db9742<br>test:src.S@15db9742",
        c: "Compile time error",
        d: "None",
        correct: "b",
    },
    {
        question:  "19.What is the output for given code?",
        code: `class T
    {
        int i;
    
        void test()
        {
            System.out.println("test:" + this.i);
            this.i = 20;
        }
    
        public static void main(String[] args) 
        {
            T t1 = new T();
            t1.i = 10;
            System.out.println("main1:" + t1.i);
            t1.test();
            System.out.println("main2:" + t1.i);
        }
    }`,
        a: "main1:10<br>test:10<br>main2:20",
        b: "main1:10<br>test:0<br>main2:20",
        c: "Compile time error",
        d: "None",
        correct: "a",
    },
    {
        question:  "20.What is the output for given code?",
        code: `package src; 
    
    class U
    {
        int i;
    
        void test()
        {
            System.out.println("test:" + i);
            i = 20;
        }
    
        public static void main(String[] args) 
        {
            U obj = new U();
            obj.i = 10;
            System.out.println("main1:" + obj.i);
            obj.test();
            System.out.println("main2:" + obj.i);
        }
    }`,
        a: "main1:10<br>test:10<br>main2:20",
        b: "main1:10<br>test:0<br>main2:20",
        c: "Compile time error",
        d: "None",
        correct: "a",
    },
    {
        question:  "21.What is the output for given code?",
        code: `class B
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            if(false)
            {
                System.out.println("if.body");
            }
            else
            {
                System.out.println("else begin");
                if(true)
                {
                    System.out.println("else if body");
                }
                System.out.println("else end");
            }
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>else begin<br>else if body<br>else end",
        b: "main begin<br>else begin<br>else if body<br>else end<br>main end",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "b",
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
