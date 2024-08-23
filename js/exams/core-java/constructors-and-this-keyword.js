const quizData = [
    {
        question: "1.What is the output for given code?",
        code: `class A 
{
    A()
    {
        System.out.println("A()");
    }

    public static void main(String[] args) 
    {
        System.out.println("main begin");
        A a1 = new A();
        System.out.println("-------------");
        A a2 = new A();
        System.out.println("-------------");
        A a3 = new A();
        System.out.println("-------------");
        System.out.println("main end");
    }
}`,
        a: "main begin<br>-------------<br>-------------<br>-------------<br>main end",
        b: "main begin<br>A()<br>-------------<br>A()<br>-------------<br>A()<br>-------------<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "2-What is the output for given code?",
        code: `class B
{
    int i;

    B()
    {
        System.out.println("B()");
        this.i = 20;
    }

    public static void main(String[] args) 
    {
        System.out.println("main begin");
        B obj1 = new B();
        System.out.println("-------------");
        B obj2 = new B(); 
        System.out.println("-------------");
        B obj3 = new B();
        System.out.println("-------------");
        System.out.println(obj1.i + ", " + obj2.i + ", " + obj3.i);
        System.out.println("main end");
    }
}`,
        a: "main begin<br>B()<br>-------------<br>B()<br>-------------<br>B()<br>-------------<br>20, 20, 20<br>main end",
        b: "main begin<br>-------------<br>-------------<br>-------------<br>0, 0, 0<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "3-What is the output for given code?",
        code: `class C
{
    int i;

    C()
    {
        System.out.println("C()");
        i = 20;
    }

    public static void main(String[] args) 
    {
        System.out.println("main begin");
        C obj1 = new C();
        System.out.println("-------------");
        C obj2 = new C();
        System.out.println("-------------");
        C obj3 = new C();
        System.out.println("-------------");
        System.out.println(obj1.i + ", " + obj2.i + ", " + obj3.i);
        System.out.println("main end");
    }
}`,
        a: "main begin<br>-------------<br>-------------<br>-------------<br>20, 20, 20<br>main end",
        b: "main begin<br>C()<br>-------------<br>C()<br>-------------<br>C()<br>-------------<br>20, 20, 20<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "4-What is the output for given code?",
        code: `class D
{
    int i;

    D()
    {
        System.out.println("D():" + i);
        i = 20;
    }

    public static void main(String[] args) 
    {
        System.out.println("main begin");
        D obj1 = new D();
        System.out.println("-------------");
        D obj2 = obj1;
        System.out.println("-------------");
        D obj3 = obj2;
        System.out.println("-------------");
        System.out.println(obj1.i + ", " + obj2.i + ", " + obj3.i);
        System.out.println("main end");
    }
}`,
        a: "main begin<br>-------------<br>-------------<br>-------------<br>20, 20, 20<br>main end",
        b: "main begin<br>D():0<br>-------------<br>D():0<br>-------------<br>D():0<br>-------------<br>20, 20, 20<br>main end",
        c: "main begin<br>D():0<br>-------------<br>-------------<br>-------------<br>20, 20, 20<br>main end",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "5-What is the output for given code?",
        code: `class E 
{
    static E()
    {
        System.out.println("E()");
    }

    public static void main(String[] args) 
    {
        System.out.println("Hello World!");
    }
}`,
        a: "Hello World!",
        b: "Hello World!<br>E()",
        c: "E()<br>Hello World!",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "6-What is the output for given code?",
        code: `class F 
{
    void F()
    {
        System.out.println("F()");
    }

    public static void main(String[] args) 
    {
        System.out.println("main begin");
        F f1 = new F();
        System.out.println("main end");
    }
}`,
        a: "main begin<br>F()<br>main end",
        b: "main begin<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the output for given code?",
        code: `class G 
{
    public static void main(String[] args) 
    {
        System.out.println("main begin");
        G g1 = new G();
        System.out.println("-----------");
        G g2 = new G();
        System.out.println("-----------");
        System.out.println("main end");
    }
}`,
        a: "main begin<br>-----------<br>-----------<br>main end",
        b: "main begin<br>G()<br>-----------<br>G()<br>-----------<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is the output for given code?",
        code: `class H 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            H obj = new H(90);
            System.out.println("main end");
        }
    }`,
        a: "Yes",
        b: "No",
        c: "None of the above",
        d: "Not applicable",
        correct: "b",
    },
    {
        question: "What is the output for given code?",
        code: `class I
    {
        I(int i)
        {
            System.out.println("I(int)");
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            I obj = new I(90);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>I(int)<br>main end",
        b: "main begin<br>I(90)<br>main end",
        c: "None of the above",
        d: "Not applicable",
        correct: "a",
    },
    {
        question: "What is the output for given code?",
        code: `class J
    {
        J(int i) 
        {
            System.out.println("J(int)");
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            J obj = new J();
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>J(int)<br>main end",
        b: "main begin<br>J(int)<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the output for given code?",
        code: `class K
    {
        K()
        {
            System.out.println("K()");
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            K obj = new K(20);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>K(int)<br>main end",
        b: "main begin<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What is the output for given code?",
        code: `class L
    {
        int i;
        L()
        {
            System.out.println("L()");
            i = 20;
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            L obj1 = new L();
            System.out.println("---------");
            L obj2 = new L();
            System.out.println("---------");
            L obj3 = new L();
            System.out.println("---------");
            System.out.println(obj1.i + ", " + obj2.i + "," + obj3.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>L()<br>---------<br>L()<br>---------<br>L()<br>---------<br>20, 20, 20<br>main end",
        b: "main begin<br>---------<br>---------<br>---------<br>20, 20, 20<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is the output for given code?",
        code: `package src;
    
    class M
    {
        int i;
        M(int k)
        {
            System.out.println("M(int)");
            i = k;
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            M obj1 = new M(10);
            System.out.println("---------");
            M obj2 = new M(50);
            System.out.println("---------");
            M obj3 = new M(20);
            System.out.println("---------");
            System.out.println(obj1.i + ", " + obj2.i + "," + obj3.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>---------<br>---------<br>---------<br>10, 50, 20<br>main end",
        b: "main begin<br>M(int)<br>---------<br>M(int)<br>---------<br>M(int)<br>---------<br>10, 50, 20<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the output for given code?",
        code: `package src;
    
    class N
    {
        int i; 
        N(int i)
        {
            System.out.println("N(int)");
            i = i;
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            N obj1 = new N(10);
            System.out.println("---------");
            N obj2 = new N(50);
            System.out.println("---------");  
            N obj3 = new N(20);
            System.out.println("---------");
            System.out.println(obj1.i + ", " + obj2.i + "," + obj3.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>N(int)<br>---------<br>N(int)<br>---------<br>N(int)<br>---------<br>0, 0, 0<br>main end",
        b: "main begin<br>N(int)<br>---------<br>N(int)<br>---------<br>N(int)<br>---------<br>10, 50, 20<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is the output for given code?",
        code: `package src;
    
    class O
    {
        int i;
        O(int i)
        {
            System.out.println("O(int)");
            this.i = i;
        }
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            O obj1 = new O(10);
            System.out.println("---------");
            O obj2 = new O(50);
            System.out.println("---------");
            O obj3 = new O(20);
            System.out.println("---------");
            System.out.println(obj1.i + ", " + obj2.i + "," + obj3.i);
            System.out.println("main end");
        }
    }`,
        a: "main begin<br>O(int)<br>---------<br>O(int)<br>---------<br>O(int)<br>---------<br>10, 50, 20<br>main end",
        b: "main begin<br>O(int)<br>---------<br>O(int)<br>---------<br>O(int)<br>---------<br>0, 0, 0<br>main end",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "What is the output for given code?",
        code: `package src;
    
    class Person 
    {
        String firstName;
        int age;
        Person(String firstName, int age)
        {
            this.firstName = firstName;
            this.age = age;
        }
        public static void main(String[] args) 
        {
            Person p1 = new Person("Vijay", 22);
            Person p2 = new Person("Raghu", 24);
            Person p3 = new Person("Ravi", 25);
            System.out.println(p1.firstName + ", " + p1.age);
            System.out.println(p2.firstName + ", " + p2.age);
            System.out.println(p3.firstName + ", " + p3.age);
        }
    }`,
        a: "Vijay, 22<br>Raghu, 24<br>Ravi, 25",
        b: "Ravi, 25<br>Vijay, 22<br>Raghu, 24",
        c: "Compile time error",
        d: "None of the above",
        correct: "a",
    },
    {
        question: `It is not possible to develop multiple constructors in the same class`,
        code: "Select the correct answer",
        a: "True",
        b: "False",
        c: "Not applicable",
        d: "None of the above",
        correct: "b",
    },
    {
        question: `While overloading a constructor, constructor arguments must be the same`,
        code: "Select the correct answer",
        a: "True",
        b: "False",
        c: "Not applicable",
        d: "None of the above",
        correct: "b",
    },
    {
        question:  `We can create only one object by using one constructor`,
        code: "Select the correct answer",
        a: "True",
        b: "False",
        c: "Not applicable",
        d: "None of the above",
        correct: "a",
    },
    {
        question: `We can create only one object by using one constructor`,
        code: "Select the correct answer",
        a: "True",
        b: "False",
        c: "Not applicable",
        d: "None of the above",
        correct: "b",
    },
    {
        question: `We can call one constructor from another constructor by using this calling statement`,
        code: "Select the correct answer",
        a: "True",
        b: "False",
        c: "Not applicable",
        d: "None of the above",
        correct: "a",
    },
    {
        question : "we can use any constructor to create an object even the same constructor not available in the same class",
        code : "Select the correct answer",
         a : "Yes",
         b : "No",
         c : "None of the above",
         d : "Not applicable",
         correct : "b"
    },
    {
         question : "default constructor from a compiler can be even with an arguments",
         code : "Select the correct answer",
         a : "Yes",
         b : "No",
         c : "None of the above",
         d : "Not applicable",
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