const quizData = [
    {
        question: "31. what is the output",
        code: `package StringBuffer;

public class S6 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("test");

        System.out.println(sb.capacity());

        System.out.println(sb.length());

        System.out.println("---------------------");

        sb.append("123456789987654321");

        System.out.println(sb.length());

        System.out.println(sb.capacity());

        System.out.println("---------------------");

        sb.trimToSize();

        System.out.println(sb.length());

        System.out.println(sb.capacity());

    }

}`,
        a: "16 <br> 4 <br> --------------------- <br> 22 <br> 44 <br> --------------------- <br> 22 <br> 22",
        b: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 22",
        c: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 44",
        d: "none",
        correct: "a",
    },
    {
        question: "32. what is the output",
        code: `package StringBuffer;

public class S7 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("test");

        System.out.println(sb.capacity());

        System.out.println(sb.length());

        System.out.println("---------------------");

        sb.append("123456789987654321");

        System.out.println(sb.length());

        System.out.println(sb.capacity());

        System.out.println("---------------------");

        sb.trimToSize();

        System.out.println(sb.length());

        System.out.println(sb.capacity());

    }

}`,
        a: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 22",
        b: "16 <br> 4 <br> --------------------- <br> 22 <br> 44 <br> --------------------- <br> 22 <br> 22",
        c: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 44",
        d: "none",
        correct: "a",
    },
    {
        question: "33. what is the output",
        code: `package StringBuffer;

public class S8 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("test");

        System.out.println(sb);

        sb.reverse();

        System.out.println(sb);

    }

}`,
        a: "tset",
        b: "test <br> tset",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "34. what is the output",
        code: `package StringBuffer;

public class S9 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("test");

        System.out.println(sb);

        sb.deleteCharAt(2);

        System.out.println(sb);

    }

}`,
        a: "test <br> tet",
        b: "tet",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "35. what is the output",
        code: `package StringBuffer;

public class S10 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("hellotoall");

        System.out.println(sb);

        sb.delete(2, 6);

        System.out.println(sb);

    }

}`,
        a: "hellotoall <br> hetoall",
        b: "hellotoall <br> heloall",
        c: "hellotoall <br> heoall",
        d: "Compilation error",
        correct: "a",
    },
    {
        question: "36. what is the output",
        code: `package StringBuffer;

public class S11 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("hellotoall");

        System.out.println(sb);

        sb.delete(2, 30);

        System.out.println(sb);

    }

}`,
        a: "hellotoall <br> hel",
        b: "StringIndexOutOfBoundsException",
        c: "Compilation error",
        d: "hellotoall <br> he",
        correct: "b",
    },
    {
        question: "37. what is the output",
        code: `package StringBuffer;

public class S12 {

    public static void main(String[] args) {

        StringBuffer sb = new StringBuffer("hellotoall");

        System.out.println(sb);

        sb.delete(20, 30);

        System.out.println(sb);

    }

}`,
        a: "hellotoall",
        b: "StringIndexOutOfBoundsException",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "38. vwhat is the output",
        code: `package StringBuffer;

public class S13 {

    public static void main(String[] args) {

        StringBuilder sb = new StringBuilder("hellotoall");

        System.out.println(sb);

    }

}`,
        a: "hellotoall",
        b: "No output",
        c: "Compilation error",
        d: "StringOutOfBoundsException",
        correct: "a",
    },
    {
        question: "39 .what is the output",
        code: `package formatter;

public class S1 {

    public static void main(String[] args) {

        String s1 = "hello";

        String s2 = String.format("==> %s", s1);

        System.out.println(s1);

        System.out.println(s2);

    }

}`,
        a: "hello==> hello",
        b: "hello <br> ==> hello",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "40. what is the output",
        code: `package formatter;

public class S2 {

    public static void main(String[] args) {

        String s1 = "hello";

        String s2 = String.format("==> %s <==", s1);

        System.out.println(s1);

        System.out.println(s2);

    }

}`,
        a: "hello <br> ==> hello <==",
        b: "hello==> hello <==",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },

    {
        question: "41. what is the output",
        code: `package formatter;

public class S3 {

    public static void main(String[] args) {

        String s1 = "hello";

        String s2 = String.format(" (%s) and (%d) ans (%f)", s1, 100, 4.5);

        System.out.println(s1);

        System.out.println(s2);

    }

}`,
        a: "hello <br> (hello) and (100) ans (4.500000)",
        b: "hello (hello) and (100) ans (4.500000)",
        c: "Compilation error",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "42. what is the output",
        code: `package formatter;

public class S4 {

    public static void main(String[] args) {

        String s1 = "hello";

        int i = 100;

        double d  = 2.5;

        char ch = 'k';

        boolean b = true;

        System.out.printf("i value is %d ", i);

        System.out.printf("j value is %f ", d);

        System.out.printf("b value is %b ", b);

        System.out.printf("s1 value is %s ", s1);

        System.out.printf("ch value is %c ", ch);

    }

}`,
        a: "i value is 100 <br> j value is 2.5 <br> b value is true <br> s1 value is hello <br> ch value is k",
        b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
        c: "Compilation error",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "43. what is the output",
        code: `package formatter;

public class S5 {

    public static void main(String[] args) {

        String s1 = "hello";

        int i = 100;

        double d  = 2.5;

        char ch = 'k';

        boolean b = true;

        System.out.printf("i value is %d ", i);

        System.out.printf("\nj value is %f ", d);

        System.out.printf("\nb value is %b ", b);

        System.out.printf("\ns1 value is %s ", s1);

        System.out.printf("\nch value is %c ", ch);

    }

}`,
        a: "i value is 100 <br> <br> j value is 2.5 <br> <br> b value is true <br> <br> s1 value is hello <br> <br> ch value is k",
        b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
        c: "Compilation error",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "44. what is the output",
        code: `package formatter;

public class S6 {

    public static void main(String[] args) {

        String s1 = "hello";

        int i = 100;

        double d  = 2.5;

        char ch = 'k';

        boolean b = true;

        System.out.printf("i value is %s ", i);

        System.out.printf("\nj value is %s ", d);

        System.out.printf("\nb value is %s ", b);

        System.out.printf("\ns1 value is %s ", s1);

        System.out.printf("\nch value is %s ", ch);

    }

}`,
        a: "i value is 100 <br> <br> j value is 2.5 <br> <br> b value is true <br> <br> s1 value is hello <br> <br> ch value is k",
        b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
        c: "Compilation error",
        d: "not applicable",
        correct: "c",
    },
    {
        question: "45. what is the output",
        code: `package formatter;

public class S7 {

    public static void main(String[] args) {

        double d  = 2.5;

        System.out.printf("\nj value is %d ", d);

    }

}`,
        a: "Yes",
        b: "No",
        c: "none",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "46. what is the output",
        code: `package formatter;

public class S8 {

    public static void main(String[] args) {

        int i = 100;

        double j  = 2.5;

        System.out.printf("i value is %d and j value is %f",i, j);

    }

}`,
        a: "Compilation error",
        b: "i value is 100 and d value is 2.500000",
        c: "i value is 100 and d value is 2.5",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "47. what is the output",
        code: `package formatter;

public class S9 {

    public static void main(String[] args) {

        int i = 100;

        double j = 2.5;

        System.out.printf("j value is %2$f and j value is %1$d",i, j);

    }

}`,
        a: "j value is 2.500000 and j value is 100",
        b: "j value is 2.5 and j value is 100",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "48. what is the output",
        code: `package formatter;

public class S10 {

    public static void main(String[] args) {

        int num = 123456;

        String s1 = String.format("num is (%d)", num);

        System.out.println(s1);

    }

}`,
        a: "123456",
        b: "(123456)",
        c: "num is (123456)",
        d: "Compilation error",
        correct: "c",
    },
    {
        question: "49. what is the output",
        code: `package formatter;

public class S11 {

    public static void main(String[] args) {

        int num = 123456;

        String s1 = String.format("num is (%020d)", num);

        System.out.println(s1);

    }

}`,
        a: "num is (0000000000000,123456)",
        b: "num is (0000000000000123456)",
        c: "num is (0000000000000123,456)",
        d: "Compilation error",
        correct: "b",
    },
    {
        question: "50. what is the output",
        code: `package formatter;

public class S12 {

    public static void main(String[] args) {

        int num = 123456;

        String s1 = String.format("num is (%-20d)", num);

        System.out.println(s1);

    }

}`,
        a: "num is (123456)",
        b: "num is (123456              )",
        c: "Compilation error",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "51. what is the output",
        code: `package formatter;

public class S13 {

    public static void main(String[] args) {

        int num = 123456;

        String s1 = String.format("num is (%-020d)", num);

        System.out.println(s1);

    }

}`,
        a: "Yes",
        b: "No",
        c: "none",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "52. what is the output",
        code: `package formatter;

public class S14 {

    public static void main(String[] args) {

        int num = 123456;

        String s1 = String.format("num is (%0,20d)", num);

        System.out.println(s1);

    }

}`,
        a: "num is (0000000000000,123456)",
        b: "num is (0000000000000123456)",
        c: "num is (0000000000000123,456)",
        d: "Compilation error",
        correct: "d",
    },
    {
        question: "53. what is the output",
        code: `package formatter;

public class S15 {

    public static void main(String[] args) {

        int num = -123456;

        String s1 = String.format("num is %(d", num);

        System.out.println(s1);

    }

}`,
        a: "Compilation error",
        b: "num is (123456)",
        c: "123456",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "54. what is the output",
        code: `package formatter;

public class S16 {

    public static void main(String[] args) {

        double num = 1234.5678;

        String s1 = String.format("num is %.3f", num);

        System.out.println(s1);

    }

}`,
        a: "num is 1234.568",
        b: "num is 1234.567",
        c: "num is 12345.678",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "55. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S1 {

    public static void main(String[] args) {

        String src = "hello and hello and hello Again and Again";

        String regex = "and";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "6:and <br> 16:and <br> 32:and",
        b: "Compilation error",
        c: "and <br> and <br> and",
        d: "6: <br> 16: <br> 32: ",
        correct: "a",
    },
    {
        question: "56. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S2 {

    public static void main(String[] args) {

        String src = "hello and hello and hello Again and Again";

        String regex = "hello";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "hello <br> hello <br> hello",
        b: "0:hello <br> 10:hello <br> 20:hello",
        c: "0: <br> 10: <br> 20: ",
        d: "Compilation error",
        correct: "b",
    },
    {
        question: "57. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S3 {

    public static void main(String[] args) {

        String src = "hello and hello and hello Again and Again";

        String regex = "a";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "6:a <br> 16:a <br> 28:a <br> 32:a <br> 38:a",
        b: "Compilation error",
        c: "6: <br> 16: <br> 28: <br> 32: <br> 38: ",
        d: "not applicable",
        correct: "a",
    },
    {
        question: "58. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S4 {

    public static void main(String[] args) {

        String src = "hello and hello and hello Again and Again";

        String regex = "[ali]";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "Compilation error",
        b: "No output",
        c: "2:l <br> 3:l <br> 6:a <br> 12:l <br> 13:l <br> 16:a <br> 22:l <br> 23:l <br> 28:a <br> 29:i <br> 32:a <br> 38:a <br> 39:i",
        d: "not applicable",
        correct: "c",
    },
    {
        question: "59. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S4 {

    public static void main(String[] args) {

        String src = "java8, java10,     java11,        java12,         oracle18";

        String regex = "\\s";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "6: <br> 14: <br> 15: <br> 16: <br> 17: <br> 18: <br> 26: <br> 27: <br> 28: <br> 29: <br> 30: <br> 31: <br> 32: <br> 33: <br> 41: <br> 42: <br> 43: <br> 44: <br> 45: <br> 46: <br> 47: <br> 48: <br> 49:",
        b: "6: <br> 14: <br> 26: <br> 41: ",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "60. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S4 {

    public static void main(String[] args) {

        String src = "java8, java10,     java11,        java12,         oracle18";

        String regex = "\\s+";

        Pattern pattern = Pattern.compile(regex);

        Matcher matches = pattern.matcher(src);

        while(matches.find()) {

            System.out.println(matches.start() + ":" + matches.group());

        }

    }

}`,
        a: "6: <br> 14: <br> 15: <br> 16: <br> 17: <br> 18: <br> 26: <br> 27: <br> 28: <br> 29: <br> 30: <br> 31: <br> 32: <br> 33: <br> 41: <br> 42: <br> 43: <br> 44: <br> 45: <br> 46: <br> 47: <br> 48: <br> 49:",
        b: "6: <br> 14: <br> 26: <br> 41: ",
        c: "Compilation error",
        d: "None",
        correct: "b",
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
