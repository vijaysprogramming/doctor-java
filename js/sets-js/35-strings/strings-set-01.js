const quizData = [
    {
        question: "1. what is the output",
        code: `class M1
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        System.out.println(s1);
        String s2 = new String("hello");
        System.out.println(s2);
    }
}`,
        a: "hello <br> hello",
        b: "hello",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "2. what is the output",
        code: `class M2
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        String s2 = "hello";
        System.out.println(s1 == s2);
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "3. what is the output",
        code: `class M3
{
    public static void main(String[] args)
    {
        String s1 = new String("hello");
        String s2 = new String("hello");
        System.out.println(s1 == s2);
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "4. what is the output",
        code: `class M4
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        String s2 = "Hello";
        String s3 = new String("hello");
        String s4 = new String("hello");
        System.out.println(s3.equals(s4));
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "5. what is the output",
        code: `class M5
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        int i = s1.length();
        System.out.println(i);
        System.out.println(s1.length());
    }
}`,
        a: "5 <br> 5",
        b: "4 <br> 4",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "6. what is the output",
        code: `class M6
{
    public static void main(String[] args)
    {
        String s1 = "a c";
        String s2 = " a c ";
        System.out.println(s1.length());
        System.out.println(s2.length());
    }
}`,
        a: "5 <br> 3",
        b: "3 <br> 5",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "7. what is the output",
        code: `class M7
{
    public static void main(String[] args)
    {
        String s1 = "Hi India";
        String s2 = "Hi "India";
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "Hi India <br> Hi \"India\"",
        b: "Hi India <br> Hi India",
        c: "Compilation error",
        d: "none",
        correct: "c",
    },
    {
        question: "8. what is the output",
        code: `class M8
{
    public static void main(String[] args)
    {
        String s1 = "Hi India";
        String s2 = "Hi \"India\"";
        System.out.println(s1.length());
        System.out.println(s2.length());
    }
}`,
        a: "10 <br> 8",
        b: "8 <br> 10",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "9. what is the output",
        code: `class M9
{
    public static void main(String[] args)
    {
        String s1 = "hello n hello";
        String s2 = "hello \n hello";
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "hello n hello <br> hello <br> hello",
        b: "hello n hello <br> hello",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "10. what is the output",
        code: `class M10
{
    public static void main(String[] args)
    {
        String s1 = "abc \ xyz";
        System.out.println(s1);
    }
}`,
        a: "Yes",
        b: "No",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "11. what is the output",
        code: `class M11
{
    public static void main(String[] args)
    {
        String s1 = "hello \\ xyz";
        System.out.println(s1);
    }
}`,
        a: "Yes",
        b: "No",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "12. what is the output",
        code: `class M12
{
    public static void main(String[] args)
    {
        String path = "D:\\JDK8.0\\bin";
        System.out.println(path);
    }
}`,
        a: "D:\\JDK8.0\\bin",
        b: "runtime error",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "13. what is the output",
        code: `class M13
{
    public static void main(String[] args)
    {
        String path = "D:\\JDK8.0\\bin";
        System.out.println(path);
    }
}`,
        a: "D:\\JDK8.0\\bin",
        b: "runtime error",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "14. what is the output",
        code: `class M14
{
    public static void main(String[] args)
    {
        String path = "D:/JDK8.0/bin";
        System.out.println(path);
    }
}`,
        a: "Compilation error",
        b: "runtime error",
        c: "D:/JDK8.0/bin",
        d: "none",
        correct: "c",
    },
    {
        question: "15. what is the output",
        code: `class M15
{
    public static void main(String[] args)
    {
        String s1 = "abc";
        s1 = s1 + "xyz";
        System.out.println(s1);
    }
}`,
        a: "Compilation error",
        b: "runtime error",
        c: "abcxyz",
        d: "abc + xyz",
        correct: "c",
    },
    {
        question: "16. what is the output",
        code: `class M16
{
    public static void main(String[] args)
    {
        String s1 = "abc";
        String s2 = null;
        String s3 = s1 + s2;
        String s4 = s2 + s1;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}`,
        a: "abc <br> null <br> abcnull <br> nullabc",
        b: "abc <br> null <br> abcnull <br> abcnull",
        c: "Compilation error",
        d: "null <br> abc <br> abcnull <br> nullabc",
        correct: "a"
    },
    {
        question: "17. what is the output",
        code: `class M17
{
    public static void main(String[] args)
    {
        String s1 = null;
        String s2 = s1 + null;
        String s3 = null + s1;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}`,
        a: "null <br> null <br> nullnull",
        b: "null <br> nullnull <br> nullnull",
        c: "Compilation error",
        d: "none",
        correct: "a"
    },
    {
        question: "18. what is the output..",
        code: `class M18
{
    public static void main(String[] args)
    {
        String s1 = null + null;
        System.out.println(s1);
    }
}`,
        a: "nullnull",
        b: "null + null",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "19. what is the output",
        code: `class M19
{
    public static void main(String[] args)
    {
        String s1 = "abc" + 5 + 6;
        String s2 = 5 + "abc" + 6;
        String s3 = 5 + 6 + "abc";
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}`,
        a: "abc56 <br> 5abc6 <br> 11abc",
        b: "abc11 <br> 5abc6 <br> 11abc",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "20. what is the output",
        code: `class M20
{
    public static void main(String[] args)
    {
        String s1 = null + null;
        String s2 = 5 + 9;
        String s3 = null + "";
        String s4 = "" + null;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}`,
        a: "nullnull <br> 14 <br> null <br> null",
        b: "Compilation error",
        c: "runtime error",
        d: "none",
        correct: "a",
    },
    {
        question: "21. what is the output",
        code: `class M21
{
    public static void main(String[] args)
    {
        String s1 = null;
        System.out.println(s1.length());
    }
}`,
        a: "yes",
        b: "no",
        c: "none",
        d: "none",
        correct: "b",
    },
    {
        question: "22. what is the output",
        code: `class M22
{
    public static void main(String[] args)
    {
        String s1 = NULL;
        System.out.println("Hello World!"s1.length());
    }
}`,
        a: "yes",
        b: "no",
        c: "none",
        d: "none",
        correct: "b",
    },
    {
        question: "23. what is the output",
        code: `class M23
{
    public static void main(String[] args)
    {
        String s1 = "null";
        System.out.println(s1.length());
    }
}`,
        a: "4",
        b: "NullPointerException",
        c: "Compilation error",
        d: "none",
        correct: "a"
    },
    {
        question: "24. what is the output",
        code: `class M24
{
    public static void main(String[] args)
    {
        String s1 = "xyz";
        System.out.println(s1);
        s1.concat("hello");
        System.out.println(s1);
    }
}`,
        a: "xyz <br> xyz",
        b: "xyzxyz",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "25. what is the output",
        code: `class M25
{
    public static void main(String[] args)
    {
        String s1 = "xyz";
        System.out.println(s1);
        String s2 = s1.concat("hello");
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "xyzxyz <br> xyzhello",
        b: "xyz <br> xyz <br> xyz <br> hello",
        c: "xyz <br> xyz <br> xyzhello",
        d: "Compilation error",
        correct: "a",
    },
    
        {
            question: "26. what is the output",
            code: `package StringBuffer;
    
    public class S1 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer();
    
            sb.append("hello");
    
            sb.append("test");
    
            sb.append("123");
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "true <br> true",
            b: "false <br> false",
            c: "true <br> false",
            d: "false <br> true",
            correct: "a",
        },
        {
            question: "27. what is the output",
            code: `package StringBuffer;
    
    public class S13 {
    
        public static void main(String[] args) {
    
            StringBuilder sb = new StringBuilder("hellotoall");
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "Compilation error",
            b: "123",
            c: "hellotest123",
            d: "hellotoall",
            correct: "d",
        },
        {
            question: "28. what is the output",
            code: `package StringBuffer;
    
    public class S3 {
    
        public static void main(String[] args) {
    
            StringBuffer sb1 = new StringBuffer();
    
            sb1.append("hello");
    
            System.out.println(sb1.length());
    
            System.out.println(sb1.capacity());
    
        }
    
    }`,
            a: "5 <br> 16",
            b: "5 <br> 34",
            c: "5 <br> 32",
            d: "Compilation error",
            correct: "a",
        },
        {
            question: "29. what is the output",
            code: `package StringBuffer;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer();
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "16 <br> 0 <br> --------------------- <br> 18 <br> 34",
            b: "16 <br> 0 <br> --------------------- <br> 18 <br> 32",
            c: "18 <br> 34 <br> --------------------- <br> 16 <br> 0",
            d: "16 <br> 0 <br> --------------------- <br> 18 <br> 34",
            correct: "d",
        },
        {
            question: "30. what is the output",
            code: `package StringBuffer;
    
    public class S5 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer(2000);
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "2000 <br> 0 <br> --------------------- <br> 18 <br> 2000",
            b: "2000 <br> 1 <br> --------------------- <br> 18 <br> 2000",
            c: "Compilation error",
            d: "none",
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
