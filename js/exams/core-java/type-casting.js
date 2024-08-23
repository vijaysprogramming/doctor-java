const quizData = [
    {
        question: "1- which data type is narrower among??",
        code: "select the correct option",
        a: "short",
        b: "float",
        c: "byte",
        d: "none of the above",
        correct: "b",
    },
    
    {
        question: "2- which data type is narrower among?",
        code: "select the correct option",
        a: "long",
        b: "float",
        c: "double",
        d: "none of the above",
        correct: "a",
    },
    
    {
        question: "3- which one is automatic?",
        code: "select the correct option",
        a: "widening",
        b: "narrowing",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "4- short assigning to int is",
        code: "select the correct option",
        a: "widening",
        b: "narrowing",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "5- long assigning to double is?",
        code: "select the correct option",
        a: "widening",
        b: "narrowing",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "6-",
        code: `class A
{
    public static void main(String[] args)
    {
        byte b = 100;
short s = 1000;
s = b; 
        System.out.println("done");
    }
}`,
        a: "compilation error",
        b: "done",
        c: "not applicable",
        d: "none of the above",
        correct: "a",
    },
    {
        question: "7-",
        code: `class B
{
    public static void main(String[] args)
    {
        byte b = 100;
short s = 1000;
s = (short) b; 
        System.out.println("done");
    }
}`,
        a: "compilation error",
        b: "done",
        c: "not applicable",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "8-",
        code: `class C
{
    public static void main(String[] args)
    {
        byte b = 100;
short s = 1000;
    int i;

double d;

s = b;

i = b;

i = s;

d = b;

d = s;
        System.out.println("done");
    }
}`,
        a: "compilation error",
        b: "done",
        c: "not applicable",
        d: "none of the above",
        correct: "b",
    },
{
    question: "9-",
    code: `class D 
{
public static void main(String[] args) 
{
System.out.println("main begin");
byte b = 20;
test(b); 
System.out.println("main end");
}
public static void test(int i)
{
System.out.println("test");
}
}`,
    a: "compilation error",
    b: "done",
    c: "main beging <br> test <br> main end",
    d: "none of the above",
    correct: "c",
},
{
    question: "10-",
    code: `class E
class E 
{ 
public static void main(String[] args) 
{ 
System.out.println("main begin"); 
byte b = 20; 
test(b); 
short s = 20; 
test(s); 
int i = 20; 
test(i); 
long j = 20; 
test(j); 
System.out.println("main end"); 
} 
public static void test(double i) 

{ 
}
}`,
    a: "compilation error",
    b: "main beging <br> test <br> test <br> test <br> test <br> main end",
    c: "main beging <br> test <br> main end",
    d: "none of the above",
    correct: "b",
},
{
    question: "11- Which data type is wider?",
    code: "Select the correct option",
    a: "short",
    b: "float",
    c: "byte",
    d: "none of the above",
    correct: "b",
},
{
    question: "12- Which data type is wider?",
    code: "Select the correct option",
    a: "long",
    b: "float",
    c: "double",
    d: "none of the above",
    correct: "c"
},
{
    question: "13- Which one is an explicit conversion?",
    code: "Select the correct option",
    a: "widening",
    b: "narrowing",
    c: "none of the above",
    d: "both",
    correct: "b"
},
{
    question: "14- Assigning long to int is?",
    code: "Select the correct option",
    a: "widening",
    b: "narrowing",
    c: "none of the above",
    d: "both",
    correct: "b"
},
{
    question: "15- Assigning double to byte is?",
    code: "Select the correct option",
    a: "widening",
    b: "narrowing",
    c: "none of the above",
    d: "both",
    correct: "b",
},
{
    question: "16- Which data type is the widest?",
    code: "Select the correct option",
    a: "long",
    b: "float",
    c: "double",
    d: "none of the above",
    correct: "c"
},
{
    question: "17- Which data type is the narrowest?",
    code: "Select the correct option",
    a: "long",
    b: "byte",
    c: "double",
    d: "none of the above",
    correct: "b"
},
{
    question: "18",
    code: `class I 
{
    public static void main(String[] args) 
    {
        int x = 1000;
        byte y = 10;
        y = x;
        System.out.println("done");
    }
}`,
    a: "compilation error",
    b: "done",
    c: "none of the above",
    d: "both",
    correct: "a",
},
{
    question: "19",
    code: `class I 
{
    public static void main(String[] args) 
    {
        int x = 1000;
        byte y = 10;
        y = x;
        System.out.println("done");
    }
}`,
    a: "compilation error",
    b: "done",
    c: "none of the above",
    d: "both",
    correct: "a",
},
{
    question: "20",
    code: `class J 
{
    public static void main(String[] args) 
    {
        int x = 1000;
        byte y = 10;
        y = (byte) x;
        System.out.println("done");
    }
}`,
    a: "compilation error",
    b: "done",
    "correct": "b"
},
{
    question: "21",
    code: `class K 
{ 
    public static void main(String[] args) 
    { 
        int x = 129; 
        byte y = 10; 
        y = (byte) x; 
        System.out.println(x + "," + y); 
    } 
}`,
    a: "compilation error",
    b: "129,-127",
    c: "129,129",
    c: "none of the above",
    d: "both",
    correct: "b",
},
{
    question: "22",
    code: `class L
{
    public static void main(String[] args) 
    {
        int x = -130;
        byte y = 10;
        y = (byte) x;
        System.out.println(x + "," + y);
    }
}`,
    a: "compilation error",
    b: "129,-127",
    c: "-130,126",
    c: "none of the above",
    d: "both",
    correct: "c",
},
{
    question: "23",
    code: `class M 
{
    public static void main(String[] args) 
    {
        int i = 10;
        short j = i;
        System.out.println(j);
    }
}`,
    a: "compilation error",
    b: "10",
    c: "none of the above",
    d: "both",
    correct: "a",
},
{
    question: "24",
    code: `class N 
{
    public static void main(String[] args) 
    {
        int i = 32768;
        short j = (short) i;
        System.out.println(j);
    }
}`,
    a: "compilation error",
    b: "32768",
    c: "-32768",
    d: "none of the above",
    correct: "c",
},
{
    question: "25",
    code: `class O 
{ 
    public static void main(String[] args) 
    { 
        int i = 130; 
        short j = (byte) i; 
        System.out.println(j); 
    } 
}`,
    a: "compilation error",
    b: "-126",
    c: "-130",
    d: "none of the above",
    correct: "b",
},
{
    question: "26- In case of derived data type, upcasting is automatic.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "27- In case of derived data type, upcasting should be explicit.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "28- In case of derived data type, downcasting is automatic.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "29- In case of derived data type, upcasting should be explicit.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    "correct": "b",
},
{
    question: "30- Method argument is superclass type and while calling the same method supplying subclass type is proper syntax.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "31- Method argument is subclass type and while calling the same method supplying superclass type is proper syntax.",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "32- Method return type is Object type and while calling the same, is it possible to take the return value into a String type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "33- Method return type is String type and while calling the same, is it possible to take the return value into an Object type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "34- Method return type is String type and while calling the same, is it possible to take the return value into an Object type variable?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "35- Object obj = new String(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "36- String obj = new Object(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "37- Object obj = (Object) new String(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "38- String obj = (String) new Object(); // Will it compile?",
    code: "Select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "39- Which option gives a runtime exception?",
    code: "Select the correct option",
    a: "Object obj = new Object()",
    b: "Object obj = new String()",
    c: "String obj = (String) new Object();",
    d: "Object obj = (Object) new String();",
    correct: "c",
},
{
    question: "40- What is the output?",
    code: "String s1 = new String();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "c",
},
{
    question: "41- What is the output?",
    code: "Object s1 = new String();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "c",
},
{
    question: "42- What is the output?",
    code: "String s1 = new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "a",
},
{
    question: "43- What is the output?",
    code: "String s1 = (String) new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    e: "falsefalse",
    correct: "b",
},
{
    question: "44- What is the output?",
    code: "Object s1 = new Object();\nSystem.out.print(s1 instanceof Object);\nSystem.out.print(s1 instanceof String);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "truefalse",
    correct: "d",
},
{
    question: "45- What is the output?",
    code: "String s1 = new String(\"4.5\");\nSystem.out.print(s1 instanceof Integer);\nSystem.out.print(s1 instanceof Double);",
    a: "compilation error",
    b: "runtime error",
    c: "truetrue",
    d: "falsefalse",
    correct: "d",
},
{
    question: "46- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = new A();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "a",
},
{
    question: "47- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = (B)new A();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "b",
},
{
    question: "48- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = new B();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "a",
},
{
    question: "49- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           A a1 = (B) new B();\n          System.out.print(a1.i);\n          System.out.print(a1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "1010",
    correct: "d",
},
{
    question: "50- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           B b1 = new B();\n          System.out.print(b1.i);\n          System.out.print(b1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    e: "1010",
    correct: "c",
},
{
    question: "51- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           B b1 = new A();\n          System.out.print(b1.i);\n          System.out.print(b1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",

    correct: "a",
},
{
    question: "52- What is the output?",
    code: "class A\n{\n     int i = 10;\n}\nclass B extends A\n{\n     int j = 20;\n}\nclass C\n{\n     public static void main(String[] args)\n     {\n           B b1 = (B) new A();\n          System.out.print(b1.i);\n          System.out.print(b1.j);\n     }\n}",
    a: "compilation error",
    b: "runtime error",
    c: "1020",
    d: "2010",
    correct: "b",
},
{
    question: "53- Which of the following is a derived data type?",
    code: "Select the correct option",
    a: "class",
    b: "interface",
    c: "int",
    d: "Both a and b",
    correct: "d",
},
{
    question: "54- The members which are under one inheritance are involved in derived casting",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "55- Is it possible to use a subclass wherever a superclass is required?",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "56- Which type of casting is automatic?",
    code: "Select the correct option",
    a: "Down casting",
    b: "Up casting",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "57- Object class is the super most class",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "58- We need to do up casting explicitly",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "59- Compiler only does the down casting automatically",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "b",
},
{
    question: "60- Every class is a subclass to Object class",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "61- Is it possible to inject variables once after an object is created?",
    code: "Select the correct option",
    a: "Yes",
    b: "No",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "62- To avoid getting a ClassCastException we can use the instanceof operator",
    code: "Select the correct option",
    a: "Yes",
    b: "No",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "63- If the object type is a specific class type, instanceof operator returns",
    code: "Select the correct option",
    a: "True",
    b: "False",
    c: "not applicable",
    d: "none of the above",
    correct: "a",
},
{
    question: "64- Is it possible to use instanceof across classes?",
    code: "Select the correct option",
    a: "Yes",
    b: "No",
    c: "not applicable",
    d: "none of the above",
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
