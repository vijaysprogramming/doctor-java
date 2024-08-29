const quizData = [
    
    
    {
        "question": "1.Select the correct option",
        "code": "class M1 {\n    public static void main(String[] args) {\n        int i = 10;\n        Integer obj1 = new Integer(i);\n        Integer obj2 = Integer.valueOf(i);\n        int j = obj1.intValue();\n        int k = obj2.intValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "done",
        "b": "Compilation Error",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "2.Select the correct option",
        "code": "class M2 {\n    public static void main(String[] args) {\n        Double obj1 = new Double(5.5);\n        Double obj2 = Double.valueOf(5.5);\n        double d1 = obj1.doubleValue();\n        double d2 = obj2.doubleValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "3.Select the correct option",
        "code": "class M3 {\n    public static void main(String[] args) {\n        Character obj1 = new Character('a');\n        Character obj2 = Character.valueOf('a');\n        char c1 = obj1.charValue();\n        char c2 = obj2.charValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "4.Select the correct option",
        "code": "class M4 {\n    public static void main(String[] args) {\n        boolean flag = false;\n        Boolean b1 = new Boolean(flag);\n        Boolean b2 = Boolean.valueOf(flag);\n        boolean i = b1.booleanValue();\n        boolean j = b2.booleanValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "5.Select the correct option",
        "code": "class M5 {\n    public static void main(String[] args) {\n        String s1 = \"10\";\n        Integer obj1 = new Integer(s1);\n        Integer obj2 = Integer.valueOf(s1);\n        int i = obj1.intValue();\n        int j = obj2.intValue();\n        System.out.println(i);\n        System.out.println(j);\n    }\n}",
        "a": "Compilation Error",
        "b": "10\n10",
        "c": "0\n0",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "6.Select the correct option",
        "code": "class M6 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        Double obj1 = new Double(s1);\n        Double obj2 = Double.valueOf(s1);\n        double d1 = obj1.doubleValue();\n        double d2 = obj2.doubleValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "7.Select the correct option",
        "code": "class M7 {\n    public static void main(String[] args) {\n        String s1 = \"true\";\n        Boolean obj1 = new Boolean(s1);\n        Boolean obj2 = Boolean.valueOf(s1);\n        boolean b1 = obj1.booleanValue();\n        boolean b2 = obj2.booleanValue();\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "8.Select the correct option",
        "code": "class M8 {\n    public static void main(String[] args) {\n        String s1 = \"10\";\n        int i = Integer.parseInt(s1);\n        double j = Double.parseDouble(s1);\n        System.out.println(i);\n        System.out.println(j);\n    }\n}",
        "a": "Compilation Error",
        "b": "10\n10",
        "c": "10\n10.0",
        "d": "None of the above",
        "correct": "c"
    },
    {
        "question": "9.Select the correct option",
        "code": "class M9 {\n    public static void main(String[] args) {\n        int i = 10;\n        double j = 1.5;\n        String s1 = Integer.toString(i);\n        String s2 = Double.toString(j);\n        System.out.println(s1);\n        System.out.println(s2);\n    }\n}",
        "a": "Compilation Error",
        "b": "10\n1.5",
        "c": "10\n15.0",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "10.Select the correct option",
        "code": "class M10 {\n    public static void main(String[] args) {\n        String s1 = \"10r\";\n        int i = Integer.parseInt(s1);\n        System.out.println(\"done\");\n    }\n}",
        "a": "Compilation Error",
        "b": "NumberFormatException",
        "c": "10r\ndone",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "11.Select the correct option",
        "code": "class M11 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        int i = Integer.parseInt(s1);\n        System.out.println(\"done\");\n    }\n}",
        "a": "NumberFormatException",
        "b": "10.5\ndone",
        "c": "Compilation Error",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "12.Select the correct option",
        "code": "class M12 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        double i = Double.parseDouble(s1);\n        System.out.println(\"done\");\n    }\n}",
        "a": "NumberFormatException",
        "b": "10.5\ndone",
        "c": "Compilation Error",
        "d": "done",
        "correct": "d"
    },
    {
        "question": "13.Select the correct option",
        "code": "class M13 {\n    public static void main(String[] args) {\n        String s1 = \"xyz\";\n        boolean flag = Boolean.parseBoolean(s1);\n        System.out.println(flag);\n    }\n}",
        "a": "NumberFormatException",
        "b": "false",
        "c": "true",
        "d": "Compilation Error",
        "correct": "b"
    },
    {
        "question": "14.Select the correct option",
        "code": "class M14 {\n    public static void main(String[] args) {\n        Integer obj = new Integer(90);\n        int i = obj;\n        System.out.println(\"done\");\n    }\n}",
        "a": "done",
        "b": "Compilation Error",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "15.Select the correct option",
        "code": "class M15 {\n    public static void main(String[] args) {\n        int i = 10;\n        Integer obj1 = i;\n        Integer obj2 = 20;\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "16.Select the correct option",
        "code": "class M16 {\n    static void test(int i) {\n        System.out.println(\"test(int)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"------------\");\n        Integer obj = new Integer(90);\n        test(obj);\n    }\n}",
        "a": "test(int)\n------------\ntest(int)",
        "b": "test(int)\ntest(int)\n------------",
        "c": "------------\ntest(int)\ntest(int)",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "17.Select the correct option",
        "code": "class M17 {\n    static void test(Integer i) {\n        System.out.println(\"test(Integer)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"------------\");\n        Integer obj = new Integer(90);\n        test(obj);\n    }\n}",
        "a": "test(Integer)\ntest(Integer)\n------------",
        "b": "------------\ntest(Integer)\ntest(Integer)",
        "c": "test(Integer)\n------------\ntest(Integer)",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "18.Select the correct option",
        "code": "class M18 {\n    static void test(double j) {\n        System.out.println(\"test(double)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"done\");\n        int i = 200;\n        test(i);\n    }\n}",
        "a": "Compilation Error",
        "b": "test(double)\ndone\ntest(double)",
        "c": "test(double)\ntest(double)\ndone",
        "d": "None",
        "correct": "b"
    },
    {
        "question": "19.Select the correct option",
        "code": "class M19 {\n    public static void main(String[] args) {\n        int i = 10;\n        double j = 10.5;\n        j = i;\n        Double obj1 = new Double(20);\n        Integer obj2 = new Integer(20);\n        obj1 = obj2;\n        System.out.println(\"done\");\n    }\n}",
        "a": "Compilation Error",
        "b": "NumberFormatException",
        "c": "done",
        "d": "None",
        "correct": "a"
    },
    {
        "question": "20.Select the correct option",
        "code": "class M20 {\n    public static void main(String[] args) {\n        Double obj1 = new Double(20);\n        Integer obj2 = new Integer(20);\n        Number obj3 = obj1;\n        Number obj4 = obj2;\n        System.out.println(\"done\");\n    }\n}",
        "a": "Yes",
        "b": "No",
        "c": "None of the above",
        "d": "Not applicable",
        "correct": "a"
    },
    
        {
            "question": "21.Select the correct option",
            "code": "class M21 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": "22.Select the correct option",
            "code": "class M22 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Byte obj) {\n        System.out.println(\"test1(Byte)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "test1(Byte)\ndone",
            "b": "done\ntest1(Byte)",
            "c": "None",
            "d": "Not applicable",
            "correct": "c"
        },
        {
            "question": "23.Select the correct option",
            "code": "class M23 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Byte obj) {\n        System.out.println(\"test1(Byte)\");\n    }\n    static void test1(double d1) {\n        System.out.println(\"test1(double)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "done\ntest1(double)",
            "b": "test1(double)\ndone",
            "c": "None",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": "24.Select the correct option",
            "code": "class M24 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Number obj) {\n        System.out.println(\"test1(Number)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "test1(Number)\ndone",
            "b": "test1(Integer)\ndone",
            "c": "None",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "25.Select the correct option",
            "code": "class M25 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Object obj) {\n        System.out.println(\"test1(Object)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "test1(Integer)\ndone",
            "b": "test1(Object)\ndone",
            "c": "None",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": "26.Select the correct option",
            "code": "class M26 {\n    static void test(int ... args) {\n        System.out.println(\"var arg\");\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10);\n        System.out.println(\"done\");\n    }\n}",
            "a": "var arg\nvar arg\nvar arg\nvar arg\ndone",
            "b": "Compile time error",
            "c": "None",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "27.Select the correct option",
            "code": "class M27 {\n    static void test(int ... args) {\n        System.out.println(\"var arg:\" + args.length);\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10, 5);\n        test(40, 10, 5, 45, 100);\n        System.out.println(\"done\");\n    }\n}",
            "a": "var arg:0\nvar arg:1\nvar arg:2\nvar arg:3\nvar arg:5\ndone",
            "b": "var arg\nvar arg\nvar arg\ndone",
            "c": "None",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "28.Select the correct option",
            "code": "class M28 {\n    static void test(int ... args) {\n        for(int value : args) {\n            System.out.println(value);\n        }\n        System.out.println(\"------------\");\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10, 5);\n        test(40, 10, 5, 45, 100);\n        System.out.println(\"done\");\n    }\n}",
            "a": "------------\n1\n------------\n2\n4\n------------\n40\n10\n5\n------------\n40\n10\n5\n45\n100\n------------\ndone",
            "b": "------------\n1\n2\n4\n40\n10\n5\n40\n10\n5\n45\n100\n------------\ndone",
            "c": "None",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "29.Select the correct option",
            "code": "class M29 {\n    public static void main(String ... args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "30.Select the correct option",
            "code": "class M30 {\n    public static void test(String x, double ... y) {\n        System.out.println(x);\n        for(double value : y) {\n            System.out.println(value);\n        }\n        System.out.println(\"--------\");\n    }\n    public static void main(String[] args) {\n        test(\"abc\");\n        test(\"abc\", 4.5);\n        test(\"abc\", 4.5, 50.0);\n        test(\"abc\", 4.5, 50.0, 2.3);\n        System.out.println(\"done\");\n    }\n}",
            "a": "--------\nabc\n--------\nabc\n4.5\n--------\nabc\n4.5\n50.0\n--------\nabc\n4.5\n50.0\n2.3\ndone",
            "b": "abc\n--------\nabc\n4.5\n--------\nabc\n4.5\n50.0\n--------\nabc\n4.5\n50.0\n2.3\n--------\ndone",
            "c": "None",
            "d": "Not applicable",
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