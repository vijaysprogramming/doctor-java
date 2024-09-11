const quizData = [
{
    "question": "61. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M37 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n            System.exit(0);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
    "a": "1<br>1<br>3<br>",
    "b": "1<br>1<br>3<br>4<br>",
    "c": "1<br>1<br>3<br>5<br>",
    "d": "none<br>",
    "correct": "a"
},
{
    "question": "62. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M1 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 10 / 0;\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "Compile Time Error<br>",
    "c": "Run Time Exception<br>",
    "d": "None<br>",
    "correct": "c"
},
{
    "question": "63. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M1 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 10 / 0;\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "Compile Time Error<br>",
    "c": "ArithmeticException<br>",
    "d": "None<br>",
    "correct": "c"
},
{
    "question": "64. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M2 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = Integer.parseInt(\"90R\");\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "ArithmeticException<br>",
    "d": "Compile Time Error<br>",
    
    "correct": "b"
},
{
    "question": "65. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M3 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String s1 = null;\n        int i = s1.length();\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "Compile Time Error<br>",
    "d": "NullPointerException<br>",
   
    "correct": "d"
},
{
    "question": "66. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M4 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int[] elements = new int[5];\n        int i = elements[10];\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "Compile Time Error<br>",
    "d": "NullPointerException<br>",
    "e": "None<br>",
    "correct": "e"
},
{
    "question": "67. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M5 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = new Object();\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "ClassCastException<br>",
    "d": "NullPointerException<br>",
    
    "correct": "c"
},
{
"question": "68. What will be the output of the program?",
"code": "package com.lara;\n\npublic class M6 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = \"abc\";\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "ClassCastException<br>",
    "d": "NullPointerException<br>",
    
    "correct": "e"
},
{
    "question": "69. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M7 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = new Integer(\"90\");\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
    "a": "main begin<br>main end<br>",
    "b": "NumberFormatException<br>",
    "c": "ClassCastException<br>",
    "d": "NullPointerException<br>",
    
    "correct": "c"
},

    {
        "question": "70. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M8 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String s1 = \"hello\";\n        String s2 = s1.substring(2, 10);\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\nmain end",
        "b": "StringIndexOutOfBoundsException",
        "c": "ClassCastException",
        "d": "NullPointerException",
        "correct": "b"
    },
    {
        "question": "71. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M9 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int[] elements = new int[999999999];\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\nmain end",
        "b": "ArrayIndexOutOfBoundsException",
        "c": "OutOfMemoryError",
        "d": "NullPointerException",
        "correct": "c"
    },
    {
        "question": "72. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M10 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        main(null);\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\nmain end",
        "b": "StackOverFlowError",
        "c": "OutOfMemoryError",
        "d": "NullPointerException",
        "correct": "b"
    },
    {
        "question": "73. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M11 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        main(args);\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\nmain end",
        "b": "StackOverFlowError",
        "c": "OutOfMemoryError",
        "d": "NullPointerException",
        "correct": "b"
    },
    {
        "question": "74. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M12 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\n1\n3\nmain end",
        "b": "ArithmeticException",
        "c": "NumberFormatException",
        "d": "NullPointerException",
        "correct": "a"
    },
    {
        "question": "75. What will be the output of the program?",
        "code": "package com.lara;\n\npublic class M13 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(\"from catch:\" + ex);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        "a": "main begin\n1\nfrom catch : / by zero\nmain end",
        "b": "ArithmeticException",
        "c": "NumberFormatException",
        "d": "main begin\n1\nfrom catch:java.lang.ArithmeticException: / by zero\nmain end",
        "correct": "d"
    },
    {
        "question": "76. What will be the output of the program?",
        "code": "public class Foo {\n    public static void main(String[] args) {\n        try {\n            return;\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
        "a": "finally",
        "b": "compilation fail",
        "c": "the code run with no output",
        "d": "An exception is thrown at runtime.",
        "correct": "a"
    },
    {
        "question": "77. What will be the output of the program?",
        "code": "try {\n    int x = 0;\n    int y = 5 / x;\n} catch (Exception e) {\n    System.out.println(\"Exception\");\n} catch (ArithmeticException ae) {\n    System.out.println(\"Arithmetic Exception\");\n}\nSystem.out.println(\"finished\");",
        "a": "finished",
        "b": "Exception",
        "c": "Compilation fail",
        "d": "Arithmetic Exception",
        "correct": "c"
    },
    {
        "question": "78. What will be the output of the program?",
        "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {\n        throw new Error();\n    }\n}",
        "a": "ABCD",
        "b": "compilation fail",
        "c": "C is printing before exiting with an error message.",
        "d": "BC is printed before exiting with an error message.",
        "correct": "d"
    },
    {
        "question": "79. What will be the output of the program?",
        "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (RuntimeException ex) {\n            System.out.print(\"B\");\n        } catch (Exception ex1) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n        System.out.print(\"E\");\n    }\n    public static void badMethod() {\n        throw new RuntimeException();\n    }\n}",
        "a": "BD",
        "b": "BCD",
        "c": "BDE",
        "d": "BCDE",
        "correct": "d"
    },
    {
        "question": "80. What will be the output of the program?",
        "code": "public class RTExcept {\n    public static void throwit() {\n        System.out.print(\"throwit \");\n        throw new RuntimeException();\n    }\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"hello \");\n            throwit();\n        } catch (Exception re) {\n            System.out.print(\"caught \");\n        } finally {\n            System.out.print(\"finally \");\n        }\n        System.out.println(\"after \");\n    }\n}",
        "a": "hello throwit caught",
        "b": "hello throwit caught",
        "c": "hello throwit RuntimeException caught after",
        "d": "hello throwit caught finally after",
        "correct": "d"
    },
    {
        "question": "81. What will be the output of the program?",
        "code": "public class Test {\n    public static void aMethod() throws Exception {\n        try {\n            throw new Exception();\n        } finally {\n            System.out.print(\"finally \");\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            aMethod();\n        } catch (Exception e) {\n            System.out.print(\"exception \");\n        }\n        System.out.print(\"finished\");\n    }\n}",
        "a": "finally",
        "b": "exception finished",
        "c": "finally exception finished",
        "d": "Compilation fails",
        "correct": "b"
    },
    {
        "question": "82. What will be the output of the program?",
        "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {}\n}",
        "a": "AC",
        "b": "BC",
        "c": "ACD",
        "d": "ABCD",
        "correct": "c"
    },
    {
        "question": "83. What will be the output of the program?",
        "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {\n        throw new RuntimeException();\n    }\n}",
        "a": "AB",
        "b": "BC",
        "c": "ABC",
        "d": "BCD",
        "correct": "d"
    },
    {
        "question": "84. What will be the output of the program?",
        "code": "public class MyProgram {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"Hello world \");\n        } finally {\n            System.out.println(\"Finally executing \");\n        }\n    }\n}",
        "a": "Nothing. The program will not compile because no exceptions are specified.",
        "b": "Nothing. The program will not compile because no catch clauses are specified.",
        "c": "Hello world.",
        "d": "Hello world Finally executing",
        "correct": "d"
    },
    {
        "question": "85. What will be the output of the program?",
        "code": "class Exc0 extends Exception { }\nclass Exc1 extends Exc0 { }\npublic class Test {\n    public static void main(String[] args) {\n        try {\n            throw new Exc1();\n        } catch (Exc0 e0) {\n            System.out.println(\"Ex0 caught\");\n        } catch (Exception e) {\n            System.out.println(\"exception caught\");\n        }\n    }\n}",
        "a": "Ex0 caught",
        "b": "exception caught",
        "c": "Compilation fails because of an error at line 2.",
        "d": "Compilation fails because of an error at line 9.",
        "correct": "a"
    },
    {
        "question": "86. Predict the output of following Java program",
        "code": "class Main {\n   public static void main(String[] args) {\n      try {\n         throw 10;\n      } catch(int e) {\n         System.out.println(\"Got the Exception \" + e);\n      }\n  }\n}",
        "a": "Got the Exception 10",
        "b": "Got The Exception 0",
        "c": "Compilation Fail",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "87. What will be the output of the program?",
        "code": "class Test extends Exception { }\nclass Main {\n   public static void main(String[] args) {\n      try {\n         throw new Test();\n      } catch(Test t) {\n         System.out.println(\"Got the Test Exception\");\n      } finally {\n         System.out.println(\"Inside finally block \");\n      }\n  }\n}",
        "a": "Got the Test Exception\nInside finally block",
        "b": "Got the Test Exception",
        "c": "Inside finally block",
        "d": "Compiler Error",
        "correct": "a"
    },
    {
        "question": "88. Output of following Java program?",
        "code": "class Main {\n   public static void main(String[] args) {\n      int x = 0;\n      int y = 10;\n      int z = y / x;\n  }\n}",
        "a": "Compilation Error",
        "b": "compiles and runs fine",
        "c": "Compiles fine but throws ArithmeticException",
        "d": "No output",

        "correct": "c"
    },
    {
        "question": "89. What will be the output of the program?",
        "code": "class Base extends Exception { }\nclass Derived extends Base { }\npublic class Main {\n  public static void main(String[] args) {\n   try {\n       throw new Derived();\n    } catch(Base b) {\n       System.out.println(\"Caught base class exception\");\n    } catch(Derived d) {\n       System.out.println(\"Caught derived class exception\");\n    }\n  }\n}",
        "a": "Caught base class exception",
        "b": "Caught derived class exception",
        "c": "Compiler Error because derived is not throwable",
        "d": "Compiler Error because base class exception is caught before derived class",
        "correct": "a"
    },
    {
        "question": "90. Output of following Java program?",
        "code": "class Test {\n    public static void main(String[] args) {\n        try {\n            int a = 0;\n            System.out.println(\"a = \" + a);\n            int b = 20 / a;\n            System.out.println(\"b = \" + b);\n        } catch(ArithmeticException e) {\n            System.out.println(\"Divide by zero error\");\n        } finally {\n            System.out.println(\"inside the finally block\");\n        }\n    }\n}",
        "a": "Compile error",
        "b": "Divide by zero error",
        "c": "a = 0\nDivide by zero error\ninside the finally block",
        "d": "a = 0",
        "correct": "c"
    },
    {
        "question": "91. What will be the output of the program?",
        "code": "class Test {\n    public static void main(String[] args) {\n        try {\n            int a[]= {1, 2, 3, 4};\n            for (int i = 1; i <= 4; i++) {\n                System.out.println(\"a[\" + i + \"]=\" + a[i] + \"n\");\n            }\n        } catch (Exception e) {\n            System.out.println(\"error = \" + e);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException\");\n        }\n    }\n}",
        "a": "Compiler error",
        "b": "Run time error",
        "c": "ArrayIndexOutOfBoundsException",
        "d": "Error Code is printed",
        "correct": "c"
    },
    {
        "question": "92. When do exceptions in Java arise in the code sequence?",
        "code": "",
        "a": "Run Time",
        "b": "Compilation fail",
        "c": "Can occur any time",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "93. Which of these keywords is not a part of exception handling?",
        "code": "",
        "a": "try",
        "b": "finally",
        "c": "thrown",
        "d": "catch",
        "correct": "c"
    },
    {
        "question": "94. Which of these keywords must be used to monitor for exceptions?",
        "code": "",
        "a": "try",
        "b": "finally",
        "c": "throw",
        "d": "catch",
        "correct": "a"
    },
    {
        "question": "95. Which of these keywords must be used to handle the exception thrown by the try block in some rational manner?",
        "code": "",
        "a": "try",
        "b": "finally",
        "c": "throw",
        "d": "catch",
        "correct": "d"
    },
    {
        "question": "96. Which of these keywords is used to manually throw an exception?",
        "code": "",
        "a": "try",
        "b": "finally",
        "c": "throw",
        "d": "catch",
        "correct": "c"
    },
    {
        "question": "97. Which of these is a superclass of all exceptional type classes?",
        "code": "",
        "a": "String",
        "b": "RunTimeException",
        "c": "Throwable",
        "d": "Cachable",
        "correct": "c"
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
