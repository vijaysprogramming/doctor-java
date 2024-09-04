const quizData = [
    
    
    {
        "question": "1. What will be the output of the program?",
        "code": `public class M1 {
    public static void main(String[] args) {
        int i = 10 / 0;
        int j = Integer.parseInt("abc");
        String s1 = null;
        int k = s1.length();
        int[] elements = new int[5];
        int m = elements[200];
        Object obj1 = new Integer(90);
        String str = (String) obj1;
        main(null);
        int[] array = new int[999999999];
    }
}`,
        "a": "NumberFormatException",
        "b": "NullPointerException",
        "c": "ClassCastException",
        "d": "ArithmeticException",
        "correct": "d"
    },
    {
        "question": "2. What will be the output of the program?",
        "code": `public class M2 {
    public static void main(String[] args) {
        try {
            Class.forName("");
        } catch(ClassNotFoundException ex) {
            ex.printStackTrace();
        }
    }
}`,
        "a": "ArithmeticException",
        "b": "ClassNotFoundException",
        "c": "ClassCastException",
        "d": "NullPointerException",
        "correct": "b"
    },
    {
        "question": "3. What will be the output of the program?",
        "code": `import java.io.FileReader;
import java.io.IOException;
public class M4 {
    public static void main(String[] args) {
        try {
            FileReader f2 = new FileReader("");
        } catch(IOException ex) {
        }
    }
}`,
        "a": "ArithmeticException",
        "b": "ClassNotFoundException",
        "c": "ClassCastException",
        "d": "NullPointerException",
        "correct": "e"
    },
    {
        "question": "4. What will be the output of the program?",
        "code": `import java.sql.DriverManager;
import java.sql.SQLException;
public class M5 {
    public static void main(String[] args) {
        try {
            DriverManager.getConnection("");
        } catch(SQLException ex) {
        }
    }
}`,
        "a": "ArithmeticException",
        "b": "ClassNotFoundException",
        "c": "ClassCastException",
        "d": "No output",
        "correct": "e"
    },
    {
        "question": "5. What will be the output of the program?",
        "code": `public class M6 {
    public static void main(String[] args) {
        try {
            Thread.sleep(10000);
        } catch(InterruptedException ex) {
        }
    }
}`,
        "a": "ArithmeticException",
        "b": "ClassNotFoundException",
        "c": "ClassCastException",
        "d": "No output",
        "correct": "e"
    },
    {
        "question": "6. What will be the output of the program?",
        "code": `import java.text.ParseException;
import java.text.SimpleDateFormat;
public class M7 {
    public static void main(String[] args) {
        SimpleDateFormat sd = null;
        try {
            sd.parse("");
        } catch(ParseException ex) {
        }
    }
}`,
        "a": "ArithmeticException",
        "b": "ClassNotFoundException",
        "c": "NullPointerException",
        "d": "ClassCastException",
        "correct": "c"
    },
    {
        "question": "7. What will be the output of the program?",
        "code": `package com.lara2;
public class M1 {
    public static void main(String[] args) {
        System.out.println("main begin");
        System.out.println("-------");
        System.out.println("---------");
        String s1 = null;
        System.out.println("---------");
        Object obj1 = new Integer(40);
        System.out.println("main end");
    }
}`,
        "a": "main begin<br>-------<br>---------<br>main end",
        "b": "NullPointerException",
        "c": "Compile Time Error",
        "d": "No output",
        "correct": "a"
    },
    {
        "question": "8. What will be the output of the program?",
        "code": `package com.lara2;
public class M2 {
    public static void main(String[] args) {
        System.out.println("main begin");
        System.out.println("-------");
        int[] elements = new int[999999999];
        System.out.println("-------");
        System.out.println("main end");
    }
}`,
        "a": "main begin<br>-------<br>---------<br>main end",
        "b": "NullPointerException",
        "c": "ArrayIndexOutOfBoundsException",
        "d": "StackOverFlowError",
        "correct": "e"
    },
    {
        "question": "9. What will be the output of the program?",
        "code": `package com.lara2;
public class M3 {
    public static void main(String[] args) {
        System.out.println("main begin");
        try {
            System.out.println(1);
            main(null);
            System.out.println(2);
        } catch(StackOverflowError err) {
            System.out.println(3);
        }
        System.out.println("main end");
    }
}`,
        "a": "yes",
        "b": "no","d": "No output",
        "c": "None of the above",
        "d": "No output",
        
        "correct": "a"
    },
    {
        "question": "10. What will be the output of the program?",
        "code": `package com.lara2;
public class M4 {
    public static void main(String[] args) {
        System.out.println("main begin");
        try {
            System.out.println(1);
            int[] elements = new int[999999999];
            System.out.println(2);
        } catch(OutOfMemoryError err) {
            System.out.println(3);
        }
        System.out.println("main end");
    }
}`,
        "a": "OutOfMemoryError",
        "b": "main begin<br>1<br>3<br>main end",
        "c": "ArrayIndexOutOfBoundsException",
        "d": "No output",
        
        "correct": "b"
    },
    {
        "question": "11. What will be the output of the program?",
        "code": `package com.lara1;
public class M1 {
    int test1() {
        return 10;
    }        
    int test2(boolean flag) {
        return 10;
    }
    int test3(boolean flag) {
        if(flag) {
            return 10;
        }
        return 20;
    }
    int test4(boolean flag) {
        if(flag) {
            return 10;
        } else {
            return 20;
        }
    }        
    int test7(boolean flag) {
        if(flag) {
            return 20;
        } else {
        }
        return 10;
    }        
    int test8(boolean flag) {
        if(flag) {
        } else {
            return 20;
        }
        return 10;
    }                
}`,
        "a": "yes",
        "b": "no",
        "c": "No output",
        "d": "None of the above",
        "correct": "a"
    },
    {
        "question": "12. What will be the output of the program?",
        "code": `package com.lara1;
public class M2 {
    int test1() {
        try {
            //some statements
        } catch(ArithmeticException ex) {
            //some statements
        }
        return 10;
    }
    int test2() {
        try {
            //some statements
            return 20;
        } catch(ArithmeticException ex) {
            //some statements
        }
        return 10;
    }
}`,
        "a": "no",
        "b": "yes",
        "c": "No output",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "13. What will be the output of the program?",
        "code": `package com.lara1;
public class M3 {
    int test1() {
        try {
            //some statements
        } catch(ArithmeticException ex) {
            //some statements
        } catch(NullPointerException ex) {
            //some statements
        }
        return 10;
    }
    int test2() {
        try {
            //some statements
            return 10;
        } catch(ArithmeticException ex) {
            //some statements
        } catch(NullPointerException ex) {
            //some statements
        }
        return 20;
    }
    int test3() {
        try {
            //some statements                        
        } catch(ArithmeticException ex) {
            //some statements
            return 10;
        } catch(NullPointerException ex) {
            //some statements
        }
        return 20;
    }
    int test4() {
        try {
            //some statements                        
        } catch(ArithmeticException ex) {
            //some statements
            return 10;
        } catch(NullPointerException ex) {
            //some statements
            return 5;
        }
        return 20;
    }
    int test5() {
        try {
            //some statements                        
        } catch(ArithmeticException ex) {
            //some statements
        } catch(NullPointerException ex) {
            //some statements
            return 5;
        }
        return 20;
    }        
}`,
        "a": "yes",
        "b": "no",
        "c": "No output",
        "d": "None of the above",
        "correct": "a",
    },
    {
        "question": "14. What will be the output of the program?",
        "code": `package com.lara1;
public class M4 {
    int test1() {
        try {
            //some statements
            return 20;
        } catch(ArithmeticException ex) {
            //some statements
        } finally {
            //some statments
        }
        return 10;
    }
    int test3() {
        try {
            //some statements                        
        } catch(ArithmeticException ex) {
            //some statements
            return 20;
        } finally {
            //some statments
        }
        return 10;
    }
    int test4() {
        try {
            //some statements                        
        } catch(ArithmeticException ex) {
            //some statements                        
        } finally {
            //some statments
            return 20;
        }
    }
}`,
        "a": "yes",
        "b": "no",
        "c": "Not applicable",
        "d": "None of the above",
        "correct": "a"
    },
    {
        "question": "15. What will be the output of the program?",
        "code": `class H {
    void test1() throws NullPointerException {
    }
}
class I extends H {
    void test2() throws ClassCastException {
    }
}`,
        "a": "yes",
        "b": "no",
        "c": "Not applicable",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "16. What will be the output of the program?",
        "code": `public class AgeIsNegativeException extends ArithmeticException {
    public AgeIsNegativeException() {
    }
    public AgeIsNegativeException(String msg) {
        super(msg);
    }
}`,
        "a": "yes",
        "b": "no",
        "c": "Not applicable",
        "d": "None of the above",
        "correct": "a"
    },
    {
        "question": "17. What will be the output of the program?",
        "code": `public class B {
    public static void main(String[] args) {
        System.out.println(1);
        if(true) {
            throw new ArithmeticException();
        }
        System.out.println(2);
    }
}`,
        "a": "yes",
        "b": "no",
        "c": "Not applicable",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "18. What will be the output of the program?",
        "code": `public class C {
    public static void main(String[] args) {
        System.out.println(1);
        if(true) {
            throw new ArithmeticException("some message");
        }
        System.out.println(2);
    }
}`,
        "a": "yes",
        "b": "no",
        "c": "Not applicable",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "19. What will be the output of the program?",
        "code": `import java.util.Scanner;
public class D {
    public static void main(String[] args) {
        System.out.println(1);
        Scanner sc = new Scanner(System.in);
        System.out.println("enter age");
        int age = sc.nextInt();
        if(age <= 0) {
            throw new ArithmeticException("age should be greater than 0");
        }
        System.out.println(2); 
    }
}`,
        "a": "1<br>enter age<br>-23<br>2",
        "b": "1<br>enter age<br>-23<br>Exception in thread \"main\" java.lang.ArithmeticException: age should be greater than 0<br>at com.lara5.D.main(D.java:13)",
        "c": "Compile Time Error",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "20. What will be the output of the program?",
        "code": `import java.util.Scanner;
public class E {
    public static void main(String[] args) {
        System.out.println(1);
        Scanner sc = new Scanner(System.in);
        System.out.println("enter age");
        int age = sc.nextInt();
        if(age <= 0) {
            throw new AgeIsNegativeException("age should be greater than 0");
        }
        System.out.println(2);
    }
}
class AgeIsNegativeException extends ArithmeticException {
    public AgeIsNegativeException() {
    }
    public AgeIsNegativeException(String msg) {
        super(msg);
    }
}`,
        "a": "1<br>enter age<br>64<br>2",
        "b": "1<br>enter age<br>64<br>Exception in thread \"main\" java.lang.ArithmeticException: age should be greater than 0<br>at com.lara5.D.main(D.java:13)",
        "c": "Compile Time Error",
        "d": "Not applicable",
        "correct": "a"
    },
    
        {
            "question": "21. What will be the output of the program?",
            "code": `public class F {
        public static void main(String[] args) {
            System.out.println(1);
            try {
                System.out.println(2);
                if (true) {
                    throw new ArithmeticException();
                }
                System.out.println(3);
            } catch (ArithmeticException ex) {
                System.out.println(4);
            }
            System.out.println(5);
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": "22. What will be the output of the program?",
            "code": `public class G {
        public static void main(String[] args) {
            System.out.println(1);
            try {
                System.out.println(2);
                int i = 10 / 0;
                System.out.println(3);
            } catch (ArithmeticException ex) {
                System.out.println(4);
                throw new ArithmeticException(ex.getMessage());
            }
            System.out.println(5);
        }
    }`,
            "a": "1<br>2<br>4<br>ArithmeticException: / by zero",
            "b": "1<br>2<br>4<br>Exception in thread \"main\" java.lang.ArithmeticException: / by zero<br>at com.lara5.G.main(G.java:15)",
            "c": "1<br>2<br>4",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": "23. What will be the output of the program?",
           "code": `class H {
        void test() throws RuntimeException {
        }
    }
    class I extends H {
        void test() throws Exception {
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": "24. What will be the output of the program?",
           "code": `class H {
        void test() {
        }
    }
    class I extends H {
        void test() throws IOException {
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": "25. What will be the output of the program?",
            "code": `c'lass H {
        void test() throws Throwable {
        }
    }
    class I extends H {
        void test() throws Exception {
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": "26. What will be the output of the program?",
            "code": `class H {
        void test() throws RuntimeException {
        }
    }
    class I extends H {
        void test() throws NullPointerException {
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": "27. What will be the output of the program?",
            "code": `public class M1 {
        public static void main(String[] args) throws ClassNotFoundException {
            Class.forName("");
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": "28. What will be the output of the program?",
                     "code": `public class M2 {
        public static void main(String[] args) {
            try {
                test();
            } catch (ClassNotFoundException ex) {
            }
        }
        static void test() throws ClassNotFoundException {
            Class.forName("");
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": "29. What will be the output of the program?",
            "code": `public class M3 {
        public static void main(String[] args) throws ClassNotFoundException {
            test();
        }
        static void test() throws ClassNotFoundException {
            Class.forName("");
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": "30. What will be the output of the program?",
            "code": `public class M4 {
        public static void main(String[] args) throws ClassNotFoundException {
            test1();
        }
        static void test1() throws ClassNotFoundException {
            test2();
        }
        static void test2() throws ClassNotFoundException {
            Class.forName("");
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        
                {
            
                    "question": "21. What will be the output of the program?",
                    "code": "public class F {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            if (true) {\n                throw new ArithmeticException();\n            }\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "a"
                },
                {
                    "question": "22. What will be the output of the program?",
                    "code": "public class G {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            int i = 10 / 0;\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n            throw new ArithmeticException(ex.getMessage());\n        }\n        System.out.println(5);\n    }\n}",
                    "a": "1<br>2<br>4<br>ArithmeticException: / by zero<br>",
                    "b": "1<br>2<br>4<br>Exception in thread \"main\" java.lang.ArithmeticException: / by zero<br>at com.lara5.G.main(G.java:15)<br>",
                    "c": "1<br>2<br>",
                    "d": "Not applicable<br>",
                    "correct": "b"
                },
                {
                    "question": "23. What will be the output of the program?",
                    "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "b"
                },
                {
                    "question": "24. What will be the output of the program?",
                    "code": "class H {\n    void test() {\n    }\n}\n\nclass I extends H {\n    void test() throws IOException {\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "b"
                },
                {
                    "question": "25. What will be the output of the program?",
                    "code": "class H {\n    void test() throws Throwable {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "b"
                },
                {
                    "question": "26. What will be the output of the program?",
                    "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws NullPointerException {\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "a"
                },
                {
                    "question": "27. What will be the output of the program?",
                    "code": "public class M1 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "a"
                },
                {
                    "question": "28. What will be the output of the program?",
                    "code": "public class M2 {\n    public static void main(String[] args) {\n        try {\n            test();\n        } catch (ClassNotFoundException ex) {\n        }\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "a"
                },
                {
                    "question": "29. What will be the output of the program?",
                    "code": "public class M3 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test();\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
                    "correct": "a"
                },
                {
                    "question": "30. What will be the output of the program?",
                    "code": "public class M4 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test1();\n    }\n    static void test1() throws ClassNotFoundException {\n        test2();\n    }\n    static void test2() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                    "a": "yes<br>",
                    "b": "no<br>",
                    "c": "None of the above<br>",
                    "d": "Not applicable<br>",
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
