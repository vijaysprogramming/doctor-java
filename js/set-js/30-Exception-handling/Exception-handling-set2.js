const quizData = [
    
    
    {
                
        "question": "31. What will be the output of the program?",
        "code": "public class F {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            if (true) {\n                throw new ArithmeticException();\n            }\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {
        "question": "32. What will be the output of the program?",
        "code": "public class G {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            int i = 10 / 0;\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n            throw new ArithmeticException(ex.getMessage());\n        }\n        System.out.println(5);\n    }\n}",
        "a": "1<br>2<br>4<br>ArithmeticException: / by zero<br>",
        "b": "1<br>2<br>4<br>Exception in thread \"main\" java.lang.ArithmeticException: / by zero<br>at com.lara5.G.main(G.java:15)<br>",
        "c": "1<br>2<br>",
        "d": "Not applicable<br>",
        "correct": "b"
    },
    {
        "question": "33. What will be the output of the program?",
        "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "b"
    },
    {
        "question": "34. What will be the output of the program?",
        "code": "class H {\n    void test() {\n    }\n}\n\nclass I extends H {\n    void test() throws IOException {\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "b"
    },
    {
        "question": "35. What will be the output of the program?",
        "code": "class H {\n    void test() throws Throwable {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "b"
    },
    {
        "question": "36. What will be the output of the program?",
        "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws NullPointerException {\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {
        "question": "37. What will be the output of the program?",
        "code": "public class M1 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {
        "question": "38. What will be the output of the program?",
        "code": "public class M2 {\n    public static void main(String[] args) {\n        try {\n            test();\n        } catch (ClassNotFoundException ex) {\n        }\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {
        "question": "39. What will be the output of the program?",
        "code": "public class M3 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test();\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {
        "question": "40. What will be the output of the program?",
        "code": "public class M4 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test1();\n    }\n    static void test1() throws ClassNotFoundException {\n        test2();\n    }\n    static void test2() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
        "a": "yes<br>",
        "b": "no<br>",
        "c": "None of the above<br>",
        "d": "Not applicable<br>",
        "correct": "a"
    },
    {


"question": "41. What will be the output of the program?",
"code": "public class M5 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        int i = 10 / 0;\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "b"
},
{
"question": "42. What will be the output of the program?",
"code": "public class M6 {\n    public static void main(String[] args) throws ArithmeticException {\n        test1();\n    }\n    static void test1() throws ArithmeticException {\n        test2();\n    }\n    static void test2() throws ArithmeticException {\n        int i = 10 / 0;\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "b"
},
{
"question": "43. What will be the output of the program?",
"code": "import java.sql.DriverManager;\n\npublic class M7 {\n    public static void main(String[] args) throws Exception {\n        test1();\n    }\n    static void test1() throws Exception {\n        test2();\n    }\n    static void test2() throws Exception {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "b"
},
{
"question": "44. What will be the output of the program?",
"code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M8 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        try {\n            Class.forName(\"\");\n            DriverManager.getConnection(\"\");\n            Thread.sleep(230);\n        } catch (SQLException ex) {\n        } catch (ClassNotFoundException ex) {\n        } catch (InterruptedException ex) {\n        }\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "45. What will be the output of the program?",
"code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M9 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        try {\n            Class.forName(\"\");\n            DriverManager.getConnection(\"\");\n            Thread.sleep(230);\n        } catch (Exception ex) {\n        }\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "46. What will be the output of the program?",
"code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M10 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        try {\n            test2();\n        } catch (ClassNotFoundException ex) {\n        } catch (SQLException ex) {\n        } catch (InterruptedException ex) {\n        }\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "47. What will be the output of the program?",
"code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M11 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        try {\n            test2();\n        } catch (Exception ex) {\n        }\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "84. What will be the output of the program?",
"code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M12 {\n    public static void main(String[] args) throws ClassNotFoundException, SQLException, InterruptedException {\n        test1();\n    }\n    static void test1() throws ClassNotFoundException, SQLException, InterruptedException {\n        test1();\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "b"
},
{
"question": "49. What will be the output of the program?",
"code": "public class M13 {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"done\");\n            int i = 10;\n            i++;\n            i += 2000;\n        } catch (ArithmeticException ex) {\n        }\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "50. What will be the output of the program?",
"code": "public class M14 {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"done\");\n            int i = 10;\n            i++;\n            i += 2000;\n        } catch (ClassNotFoundException ex) {\n        }\n    }\n}",
"a": "yes<br>",
"b": "no<br>",
"c": "None of the above<br>",
"d": "Not applicable<br>",
"correct": "a"
},
{
"question": "51. What will be the output of the program?",
"code": "package com.lara;\nimport java.util.Scanner;\n\npublic class M26 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        } catch (NumberFormatException ex) {\n            System.out.println(5);\n        }\n        System.out.println(6);\n    }\n}",
"a": "1<br>NumberFormatException<br>",
"b": "1<br>2<br>3<br>5<br>",
"c": "Compile Time Error<br>",
"d": "None<br>",
"correct": "a"
},
{


    "question": "52. What will be the output of the program?",
    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M27 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        }\n        System.out.println(6);\n    }\n}",
    "a": "1<br>NumberFormatException<br>",
    "b": "1<br>AithmeticException<br>",
    "c": "Compile Time Error<br>",
    "d": "None<br>",
    "correct": "b"
},
{
    "question": "53. What will be the output of the program?",
    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M28 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);  ////risky 2\n            System.out.println(3);\n            int[] elements = new int[10];\n            int m = elements[i];\n            System.out.println(4);\n        } catch (ArithmeticException ex) {\n            System.out.println(5);\n        } catch (NumberFormatException ex1) {\n            System.out.println(6);\n        } catch (ArrayIndexOutOfBoundsException ex1) {\n            System.out.println(7);\n        }\n        System.out.println(8);\n    }\n}",
    "a": "1<br>6<br>8<br>",
    "b": "1<br>2<br>3<br>7<br>8<br>",
    "c": "Compile Time Error<br>",
    "d": "None<br>",
    "correct": "a"
},
{
    "question": "54. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M29 {\n    public static void main(String[] args) {\n        try {\n        } catch (NumberFormatException ex) {\n        }\n        try {\n        } catch (NumberFormatException ex) {\n        }\n    }\n}",
    "a": "NumberFormatException<br>",
    "b": "NullPointerException<br>",
    "c": "Compile Time Error<br>",
    "d": "No output<br>",
    "correct": "d"
},
{
    "question": "55. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M30 {\n    public static void main(String[] args) {\n        try {\n        } catch (ArrayIndexOutOfBoundsException ex) {\n        } catch (NullPointerException ex) {\n        }\n    }\n}",
    "a": "ArrayIndexOutOfBoundsException<br>",
    "b": "NullPointerException<br>",
    "c": "Compile Time Error<br>",
    "d": "No output<br>",
    "correct": "d"
},
{
    "question": "56. What will be the output of the program?",
    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M31 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (NumberFormatException ex) {\n            System.out.println(4);\n        } finally {\n            System.out.println(5);\n        }\n        System.out.println(6);\n    }\n}",
    "a": "1<br>2<br>3<br>5<br>6<br>",
    "b": "1<br>4<br>5<br>6<br>",
    "c": "1<br>2<br>5<br>AirthmeticException<br>",
    "d": "None<br>",
    "correct": "a"
},
{
    "question": "57. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M32 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10 / 0;\n        try {\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n    }\n}",
    "a": "1<br>4<br>",
    "b": "1<br>AithmeticException<br>",
    "c": "Compile Time Error<br>",
    "d": "None<br>",
    "correct": "c"
},
{
    "question": "58. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M33 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            return;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
    "a": "1<br>2<br>",
    "b": "1<br>2<br>5<br>",
    "c": "1<br>2<br>4<br>5<br>",
    "d": "1<br>2<br>4<br>",
    "correct": "d"
},
{
    "question": "59. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M34 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            int i = 10 / 0;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n            return;\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
    "a": "1<br>2<br>3<br>4<br>",
    "b": "1<br>2<br>3<br>",
    "c": "1<br>2<br>3<br>4<br>",
    "d": "none<br>",
    "correct": "b"
},
{
    "question": "60. What will be the output of the program?",
    "code": "package com.lara;\n\npublic class M35 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        if (true) {\n            return;\n        }\n        try {\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
    "a": "1<br>4<br>",
    "b": "1<br>2<br>4<br>5<br>",
    "c": "1<br>",
    "d": "none<br>",
    "correct": "a"
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
