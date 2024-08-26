const quizData = [
    
    {
        "question": "1. What will be the output of the program?",
        "code": "package toString;\n\nclass A {\n    int i;\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n    }\n}",
        "a": "toString.A@15db9742",
        "b": "20",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "2. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A {\n    int i;\n    public String toString() {\n        return \"its A type object with i value as: \" + i;\n    }\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n    }\n}",
        "a": "its A type object with i value as: 20",
        "b": "20",
        "c": "toString.pack1.A@15db9742",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "3. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A {\n    int i;\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n        String s1 = \"desc: \" + a1;\n        System.out.println(s1);\n    }\n}",
        "a": "its A type object with i value as: 20\ndesc: ",
        "b": "its A type object with i value as: 20\ndesc: its A type object with i value as: 20",
        "c": "toString.pack1.A@15db9742\ndesc: toString.pack1.A@15db9742",
        "d": "None",
        "correct": "c"
      },
      {
        "question": "4. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A {\n    int i;\n    public String toString() {\n        return \"its A type object with i value as: \" + i;\n    }\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n        String s1 = \"desc: \" + a1;\n        System.out.println(s1);\n    }\n}",
        "a": "its A type object with i value as: 20\ndesc: ",
        "b": "its A type object with i value as: 20\ndesc: its A type object with i value as: 20",
        "c": "toString.pack1.A@15db9742\ndesc: toString.pack1.A@15db9742",
        "d": "None",
        "correct": "b"
      },
      {
        "question": "5. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass B {\n    int i, j;\n    B(int i, int j) {\n        this.i = i;\n        this.j = j;\n    }\n}\n\npublic class M2 {\n    public static void main(String[] args) {\n        B b1 = new B(10, 20);\n        System.out.println(b1);\n    }\n}",
        "a": "toString.pack1.B@15db9742",
        "b": "10, 20",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "6. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass B {\n    int i, j;\n    B(int i, int j) {\n        this.i = i;\n        this.j = j;\n    }\n    public String toString() {\n        return \"Its from B class i: \" + i + \", j: \" + j;\n    }\n}\n\npublic class M2 {\n    public static void main(String[] args) {\n        B b1 = new B(10, 20);\n        System.out.println(b1);\n    }\n}",
        "a": "toString.pack1.B@15db9742",
        "b": "10, 20",
        "c": "Its from B class i: 10, j: 20",
        "d": "None",
        "correct": "c"
      },
      {
        "question": "7. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass C {\n    int i;\n}\n\nclass D {\n    int j;\n    C c1;\n}\n\npublic class M3 {\n    public static void main(String[] args) {\n        C c1 = new C();\n        c1.i = 10;\n        D d1 = new D();\n        d1.j = 20;\n        d1.c1 = c1;\n        System.out.println(c1);\n        System.out.println(d1);\n    }\n}",
        "a": "toString.pack1.C@15db9742\ntoString.pack1.D@6d06d69c",
        "b": "Compilation Error",
        "c": "Not applicable",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "8. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass C {\n    int i;\n    @Override\n    public String toString() {\n        return \"i = \" + i;\n    }\n}\n\nclass D {\n    int j;\n    C c1;\n    @Override\n    public String toString() {\n        return \"j = \" + j + \", \" + c1;\n    }\n}\n\npublic class M3 {\n    public static void main(String[] args) {\n        C c1 = new C();\n        c1.i = 10;\n        D d1 = new D();\n        d1.j = 20;\n        d1.c1 = c1;\n        System.out.println(c1);\n        System.out.println(d1);\n    }\n}",
        "a": "i = 10\nj = 20, i = 10",
        "b": "toString.pack1.C@15db9742\nj = 20, toString.pack1.C@15db9742",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "9. What will be the output of the program?",
        "code": "package toString.pack1;\n\nimport java.util.ArrayList;\n\npublic class M5 {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        Integer obj = 10;\n        Thread t1 = new Thread();\n        ArrayList list = new ArrayList();\n        System.out.println(s1);\n        System.out.println(obj);\n        System.out.println(t1);\n        System.out.println(list);\n    }\n}",
        "a": "Hello\n10\nThread[Thread-0,5,main]\n[]",
        "b": "Compilation Error",
        "c": "hello\n10\nException",
        "d": "None",
        "correct": "a"
      },
      {
        "question": "10. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass G {\n    int i;\n}\n\npublic class M6 {\n    public static void main(String[] args) {\n        G g1 = new G();\n        g1.i = 10;\n        G g2 = new G();\n        g2.i = 10;\n        System.out.println(g1 == g2);\n        System.out.println(g1.equals(g2));\n    }\n}",
        "a": "true\ntrue",
        "b": "false\nfalse",
        "c": "true\nfalse",
        "d": "false\ntrue",
        "correct": "b"
      },
      {
        "question": "11. What will be the output of the program?",
        "code": "package toString;\n\nclass A{\n    int i;\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n    }\n}",
        "a": "toString.A@15db9742",
        "b": "20",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "12. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A{\n    int i;\n    public String toString() {\n        return \"its A type object with i value as: \" + i;\n    }\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n    }\n}",
        "a": "its A type object with i value as: 20",
        "b": "20",
        "c": "toString.pack1.A@15db9742",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "13. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A{\n    int i;\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n        String s1 = \"desc: \" + a1;\n        System.out.println(s1);\n    }\n}",
        "a": "its A type object with i value as: 20\ndesc: ",
        "b": "its A type object with i value as: 20\ndesc: its A type object with i value as: 20",
        "c": "toString.pack1.A@15db9742\ndesc: toString.pack1.A@15db9742",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "14. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass A{\n    int i;\n    public String toString() {\n        return \"its A type object with i value as: \" + i;\n    }\n}\n\npublic class M1 {\n    public static void main(String[] args) {\n        A a1 = new A();\n        a1.i = 20;\n        System.out.println(a1);\n        String s1 = \"desc: \" + a1;\n        System.out.println(s1);\n    }\n}",
        "a": "its A type object with i value as: 20\ndesc: ",
        "b": "its A type object with i value as: 20\ndesc: its A type object with i value as: 20",
        "c": "toString.pack1.A@15db9742\ndesc: toString.pack1.A@15db9742",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "15. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass B{\n    int i, j;\n    B(int i, int j){\n        this.i = i;\n        this.j = j;\n    }\n}\n\npublic class M2 {\n    public static void main(String[] args) {\n        B b1 = new B(10, 20);\n        System.out.println(b1);\n    }\n}",
        "a": "toString.pack1.B@15db9742",
        "b": "10, 20",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "16. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass B{\n    int i, j;\n    B(int i, int j){\n        this.i = i;\n        this.j = j;\n    }\n    public String toString() {\n        return \"Its from B class i: \" + i + \", j: \" + j;\n    }\n}\n\npublic class M2 {\n    public static void main(String[] args) {\n        B b1 = new B(10, 20);\n        System.out.println(b1);\n    }\n}",
        "a": "toString.pack1.B@15db9742",
        "b": "10, 20",
        "c": "Its from B class i: 10, j: 20",
        "d": "None",
        "correct": "c"
    },
    {
        "question": "17. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass C{\n    int i;\n}\n\nclass D{\n    int j;\n    C c1;\n}\n\npublic class M3 {\n    public static void main(String[] args) {\n        C c1 = new C();\n        c1.i = 10;\n        D d1 = new D();\n        d1.j = 20;\n        d1.c1 = c1;\n        System.out.println(c1);\n        System.out.println(d1);\n    }\n}",
        "a": "toString.pack1.C@15db9742\ntoString.pack1.D@6d06d69c",
        "b": "toString.pack1.C@15db9742",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "18. What will be the output of the program?",
        "code": "package toString.pack1;\n\nclass C{\n    int i;\n    @Override\n    public String toString() {\n        // TODO Auto-generated method stub\n        return \"i = \" + i;\n    }\n}\n\nclass D{\n    int j;\n    C c1;\n    @Override\n    public String toString() {\n        // TODO Auto-generated method stub\n        return \"j = \" + j + \", \" + c1;\n    }\n}\n\npublic class M3 {\n    public static void main(String[] args) {\n        C c1 = new C();\n        c1.i = 10;\n        D d1 = new D();\n        d1.j = 20;\n        d1.c1 = c1;\n        System.out.println(c1);\n        System.out.println(d1);\n    }\n}",
        "a": "i = 10\nj = 20, i = 10",
        "b": "toString.pack1.C@15db9742\nj = 20, toString.pack1.C@15db9742",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "19. What will be the output of the program?",
        "code": "package toString.pack1;\n\nimport java.util.ArrayList;\n\npublic class M5 {\n    public static void main(String[] args) {\n        String s1 = \"Hello\";\n        Integer obj = 10;\n        Thread t1 = new Thread();\n        ArrayList list = new ArrayList();\n        System.out.println(s1);\n        System.out.println(obj);\n        System.out.println(t1);\n        System.out.println(list);\n    }\n}",
        "a": "Hello\n10\nThread[Thread-0,5,main]\n[]",
        "b": "Compilation Error",
        "c": "hello\n10\nException",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "22. What will be the output of the following code?",
        "code": "package toString.pack2;\n\nclass H {\n    int i, j, k;\n    H(int i, int j, int k){\n        this.i = i;\n        this.j = j;\n        this.k = k;\n    }\n    @Override\n    public boolean equals(Object obj) {\n        return (obj instanceof H &&\n                i == ((H) obj).i &&\n                j == ((H)obj).j &&\n                k == ((H)obj).k);\n    }\n}\n\npublic class M8 {\n    public static void main(String[] args) {\n        H h1 = new H(10, 20, 30);\n        H h2 = new H(10, 20, 30);\n        System.out.println(h1.equals(h2));\n        System.out.println(h1.equals(10));\n        System.out.println(h1.equals(new H(10, 20, 30)));\n        System.out.println(h1.equals(new H(10, 20, 31)));\n        System.out.println(h1.equals(\"hello\"));\n    }\n}",
        "a": "true\nfalse\ntrue\nfalse\nfalse",
        "b": "true\nfalse\ntrue\nfalse\ntrue",
        "c": "true\ntrue\ntrue\nfalse\nfalse",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "23. What will be the output of the following code?",
        "code": "package toString.pack2;\n\npublic class M9 {\n    public static void main(String[] args) {\n        String s1 = \"hello\";\n        String s2 = \"hello\";\n        String s3 = new String(\"hello\");\n        \n        System.out.println(s1.equals(s2));\n        System.out.println(s1.equals(s3));\n        System.out.println(s2.equals(s3));\n    }\n}",
        "a": "true\nfalse\nfalse",
        "b": "true\ntrue\ntrue",
        "c": "false\nfalse\ntrue",
        "d": "false\ntrue\ntrue",
        "correct": "b"
    },
    {
        "question": "24. What will be the output of the following code?",
        "code": "package toString.pack2;\n\npublic class M10 {\n    public static void main(String[] args) {\n        Integer obj1 = new Integer(90);\n        Integer obj2 = new Integer(90);\n        Integer obj3 = 90;\n        System.out.println(obj1.equals(obj2));\n        System.out.println(obj1.equals(obj3));\n        System.out.println(obj2.equals(obj3));\n    }\n}",
        "a": "true\nfalse\nfalse",
        "b": "true\ntrue\ntrue",
        "c": "false\nfalse\ntrue",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "25. What will be the output of the following code?",
        "code": "package toString.pack2;\n\npublic class M11 {\n    public static void main(String[] args) {\n        StringBuffer sb1 = new StringBuffer(\"hello\");\n        StringBuffer sb2 = new StringBuffer(\"hello\");\n        System.out.println(sb1.equals(sb2));\n    }\n}",
        "a": "true",
        "b": "false",
        "c": "Compilation Error",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "26. What will be the output of the following code?",
        "code": "package toString.pack2;\n\npublic class M12 {\n    public static void main(String[] args) {\n        StringBuilder sb1 = new StringBuilder(\"hello\");\n        StringBuilder sb2 = new StringBuilder(\"hello\");\n        System.out.println(sb1.equals(sb2));\n    }\n}",
        "a": "true",
        "b": "false",
        "c": "Compilation Error",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "27. What is the output of the program?",
        "code": "package toString.pack3;\n\nclass D\n{\n    int i;\n    int j;\n    D(int i, int j){\n        this.i = i;\n        this.j = j;\n    }\n    @Override\n    public int hashCode() {\n        String s1 = Integer.toString(i);\n        String s2 = Integer.toString(j);\n        int hash = s1.hashCode();\n        hash += s2.hashCode();\n        return hash;\n    }\n}\n\npublic class M9 {\n    public static void main(String[] args) {\n        D d1 = new D(10, 20);\n        D d2 = new D(10, 20);\n        System.out.println(d1.hashCode());\n        System.out.println(d2.hashCode());\n        D d3 = new D(20,10);\n        System.out.println(d3.hashCode());\n        D d4 = new D(200, 100);\n        System.out.println(d4.hashCode());\n    }\n}",
        "a": "Content of the object",
        "b": "hashcode values of the object",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "28. Will the following code compile successfully?",
        "code": "package toString.pack4;\n\nclass B\n{\n}\n\npublic class M2 {\n    public static void main(String[] args) {\n        B b1 = new B();\n        B b2 = b1.clone();\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "29. Will the following code compile successfully?",
        "code": "package toString.pack4;\n\npublic class C {\n    public static void main(String[] args) {\n        C c1 = new C();\n        C c2 = c1.clone();\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "30. What will be the output of the program?",
        "code": "package toString.pack4;\n\npublic class D {\n    public static void main(String[] args) {\n        D d1 = new D();\n        D d2 = (D) d1.clone();\n        System.out.println(\"done\");\n    }\n}",
        "a": "done",
        "b": "Compilation Error",
        "c": "None",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "31. What will be the output of the program?",
        "code": "package toString.pack4;\n\npublic class E {\n    public static void main(String[] args) \n        throws CloneNotSupportedException\n        {\n            E e1 = new E();\n            System.out.println(1);\n            E e2 = (E) e1.clone();\n            System.out.println(2);\n        }\n}",
        "a": "1\n2",
        "b": "Compilation Error",
        "c": "1\nCloneNotSupportedException",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "32. Will the following code compile and run successfully?",
        "code": "package toString.pack4;\n\npublic class F implements Cloneable {\n    public static void main(String[] args) \n    throws CloneNotSupportedException{\n        F f1 = new F();\n        F f2 = (F) f1.clone();\n        System.out.println(\"f1: \" + f1);\n        System.out.println(\"f2: \" + f2);\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "33. What will be the output of the program?",
        "code": "package toString.pack4;\n\npublic class G implements Cloneable{\n    int i;\n    public static void main(String[] args) \n    throws CloneNotSupportedException\n    {\n        G obj1 = new G();\n        obj1.i = 10; \n        G obj2 = (G) obj1.clone();\n        System.out.println(\"a:\" + obj2.i);\n        obj2.i = 20;\n        System.out.println(\"b:\" + obj1.i);\n        obj1.i = 30;\n        System.out.println(\"c:\" + obj2.i);\n    }\n}",
        "a": "a:10\nb:10\nc:20",
        "b": "a:20\nb:10\nc:20",
        "c": "None",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "34. To return one class object to the main class, which method do you need to call?",
        "code": "",
        "a": "get()",
        "b": "class()",
        "c": "None",
        "d": "getclass()",
        "correct": "d"
    },
    {
        "question": "35. What is available in the class object that the user gets by calling getclass()?",
        "code": "",
        "a": "object",
        "b": "method",
        "c": "None",
        "d": "Not applicable",
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
}
);

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