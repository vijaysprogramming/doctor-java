const quizData = [
    {
        question: "61. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S5{

        public static void main(String[] args) {

                String src = "java8, java10,     java11,        java12,         oracle18";

                String regex = "\\d";

                Pattern pattern = Pattern.compile(regex);

                Matcher matches = pattern.matcher(src);

                while(matches.find()) {

                        System.out.println(matches.start() + ":" + matches.group());

                }

        }

}`,
        a: "4:8 <br> 11:10 <br> 23:11 <br> 38:12 <br> 56:18",
        b: "Compilation error",
        c: "4:8 <br> 11:1 <br> 12:0 <br> 23:1 <br> 24:1 <br> 38:1 <br> 39:2 <br> 56:1 <br> 57:8",
        d: "None",
        correct: "a",
    },
    {
        question: "62. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S5{

        public static void main(String[] args) {

                String src = "java8, java10,     java11,        java12,         oracle18";

                String regex = "\\d+";

                Pattern pattern = Pattern.compile(regex);

                Matcher matches = pattern.matcher(src);

                while(matches.find()) {

                        System.out.println(matches.start() + ":" + matches.group());

                }

        }

}`,
        a: "4:8 <br> 11:10 <br> 23:11 <br> 38:12 <br> 56:18",
        b: "Compilation error",
        c: "4:8 <br> 11:1 <br> 12:0 <br> 23:1 <br> 24:1 <br> 38:1 <br> 39:2 <br> 56:1 <br> 57:8",
        d: "None",
        correct: "a",
    },
    {
        question: "63. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S6 {

        public static void main(String[] args) {

                String src = "java@java.com";

                String regex = "@";

                Pattern pattern = Pattern.compile(regex);

                Matcher matches = pattern.matcher(src);

                while(matches.find()) {

                        System.out.println(matches.start() + ":" + matches.group());

                }

        }

}`,
        a: "Compilation error",
        b: "4:@",
        c: "4:",
        d: "@",
        correct: "b",
    },
    {
        question: "64. what is the output",
        code: `package regularExpression;

import java.util.regex.Matcher;

import java.util.regex.Pattern;

public class S6 {

        public static void main(String[] args) {

                String src = "java@java.com";

                String regex = ".";

                //String regex = "@";

                Pattern pattern = Pattern.compile(regex);

                Matcher matches = pattern.matcher(src);

                System.out.println(matches.find());

        }

}`,
        a: "true",
        b: "false",
        c: "not applicable",
        d: "None",
        correct: "a",
    },
    {
        question: "65. what is the output",
        code: `package regularExpression;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date();

                System.out.println(date);

        }

}`,
        a: "Tue Dec 17 14:07:34 IST 2019",
        b: "Thu Jan 01 05:30:00 IST 1970",
        c: "Compilation error",
        d: "No output",
        correct: "a",
    },
    {
        question: "66. what is the output",
        code: `package regularExpression;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date(0);

                System.out.println(date);

        }

}`,
        a: "Tue Dec 17 14:07:34 IST 2019",
        b: "Thu Jan 01 05:30:00 IST 1970",
        c: "Compilation error",
        d: "No output",
        correct: "b",
    },
    {
        question: "67. what is the output",
        code: `package regularExpression;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date(1000*60*24);

                System.out.println(date);

        }

}`,
        a: "Tue Dec 17 14:07:34 IST 2019",
        b: "Thu Jan 01 05:30:00 IST 1970",
        c: "Fri Jan 02 05:30:00 IST 1970",
        correct: "c",
    },
    {
        question: "68. what is the output",
        code: `package regularExpression;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date(-1000*60*60*24);

                System.out.println(date);

        }

}`,
        a: "Wed Dec 31 05:30:00 IST 1969",
        b: "Thu Jan 01 05:30:00 IST 1970",
        c: "Fri Jan 02 05:30:00 IST 1970",
        correct: "a",
    },
    {
        question: "69. what is the output",
        code: `package regularExpression;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                Date date = cal.getTime();

                System.out.println(date);

        }

}`,
        a: "Compilation error",
        b: "Tue Dec 17 14:14:38 IST 2019",
        c: "Fri Jan 02 05:30:00 IST 1970",
        correct: "b",
    },
    {
        question: "70. what is the output",
        code: `package regularExpression;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                cal.add(Calendar.DATE, 20);

                Date date = cal.getTime();

                System.out.println(date);

        }

}`,
        a: "Mon Jan 06 14:18:12 IST 2020",
        b: "Fri Dec 20 14:14:38 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "71. what is the output",
        code: `package regularExpression;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                cal.add(Calendar.MONTH, -5);

                Date date = cal.getTime();

                System.out.println(date);

        }

}`,
        a: "Mon Jan 06 14:18:12 IST 2020",
        b: "Fri Dec 20 14:14:38 IST 2019",
        c: "Wed Jul 17 14:20:28 IST 2019",
        d: "None",
        correct: "c",
    },
    {
        question: "72. what is the output",
        code: `package regularExpression;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                cal.add(Calendar.YEAR, 10);

                Date date = cal.getTime();

                System.out.println(date);

        }

}`,
        a: "Mon Dec 17 14:21:55 IST 2029",
        b: "Fri Dec 20 14:14:38 IST 2019",
        c: "Wed Jul 17 14:20:28 IST 2019",
        d: "None",
        correct: "a",
    },
    {
        question: "73. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                Date date = cal.getTime();

                System.out.println(date);

                DateFormat df = DateFormat.getInstance();

                String s1 = df.format(date);

                System.out.println(s1);

        }

}`,
        a: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 AM",
        b: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 PM",
        c: "Tue Dec 17 14:24:18 IST 2020 <br> 12/17/19 2:24 PM",
        d: "None",
        correct: "a",
    },
    {
        question: "74. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                Date date = cal.getTime();

                System.out.println(date);

                DateFormat df = DateFormat.getDateInstance(DateFormat.SHORT);

                String s1 = df.format(date);

                System.out.println(s1);

        }

}`,
        a: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 AM",
        b: "Tue Dec 17 14:27:13 IST 2019 <br> 12/17/19",
        c: "Tue Dec 17 14:27:13 IST 2019 <br> 12/17/20",
        d: "None",
        correct: "b",
    },
    {
        question: "75. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Calendar cal = Calendar.getInstance();

                Date date = cal.getTime();

                System.out.println(date);

                DateFormat df = DateFormat.getDateInstance(DateFormat.LONG);

                String s1 = df.format(date);

                System.out.println(s1);

        }

}`,
        a: "Tue Dec 17 14:28:33 IST 2019 <br> December 17, 2019",
        b: "Mon 14:28:33 IST 2020 <br> December 17, 2020",
        c: "Tue Dec 17 14:28:33 IST 2018 <br> December 17, 2018",
        d: "None",
        correct: "a",
    },
    {
        question: "76. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.text.ParseException;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {                

                Calendar cal = Calendar.getInstance();

                Date date = cal.getTime();

                System.out.println(date);

                DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);

                String s1 = df.format(date);

                System.out.println(s1);

                

                try {

                        Date date2 = df.parse(s1);

                        System.out.println(date2);

                }

                catch(ParseException ex) {

                        ex.printStackTrace();

                }

        }

}`,
        a: "Tue Dec 17 14:32:08 IST 2019 <br> Tuesday, December 17, 2019 <br> Tue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 14:32:08 IST 2019 <br> Tue Dec 17 00:00:00 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "77. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.text.ParseException;

import java.text.SimpleDateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date();

                System.out.println(date);

                SimpleDateFormat sdf = new SimpleDateFormat("dd----MM----YY");

                String s1 = sdf.format(date);

                System.out.println(s1);

        }

}`,
        a: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
        b: "Tue Dec 17 14:37:40 <br> 17----Dec----2019",
        c: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
        d: "None",
        correct: "a",
    },
    {
        question: "78. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.text.ParseException;

import java.text.SimpleDateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                Date date = new Date();

                System.out.println(date);

                SimpleDateFormat sdf = new SimpleDateFormat("dd----MMM----YYYY");

                String s1 = sdf.format(date);

                System.out.println(s1);

        }

}`,
        a: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
        b: "Tue Dec 17 14:37:40 <br> 17----Dec----2019",
        c: "Compilation error",
        d: "None",
        correct: "c",
    },
    {
        question: "79. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.text.NumberFormat;

import java.text.ParseException;

import java.text.SimpleDateFormat;

import java.util.Calendar;

import java.util.Date;

public class S7 {

        public static void main(String[] args) {

                double num = 4.56787887;

                System.out.println(num);

                NumberFormat nf = NumberFormat.getInstance();

                String s1 = nf.format(num);

                System.out.println(s1);

        }

}`,
        a: "4.56787887 <br> 4.568",
        b: "4.56787887 <br> 4.56877",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "80. what is the output",
        code: `package regularExpression;

import java.text.DateFormat;

import java.text.NumberFormat;

import java.text.ParseException;

import java.text.SimpleDateFormat;

import java.util.Calendar;

import java.util.Date;

import java.util.Locale;

public class S7 {

        public static void main(String[] args) {

                double num = 423654778954.56787887;

                System.out.println(num);

                NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.UK);

                String s1 = nf.format(num);

                System.out.println(s1);

        }

}`,
        a: "4.236547789545679E11 <br> $423,654,778,954.57",
        b: "4.236547789545679E11 <br> £423,654,778,954.57",
        c: "Compilation error",
        d: "None",
        correct: "b",
    },
    {
        question: "81. what is the output",
        code: "package regularExpression;\n\nimport java.text.DateFormat;\nimport java.util.Calendar;\nimport java.util.Date;\nimport java.util.Locale;\n\npublic class S7 {\n\n    public static void main(String[] args) {\n\n        Calendar cal = Calendar.getInstance();\n        Date date = cal.getTime();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL, Locale.FRANCE);\n        String s1 = df.format(date);\n        System.out.println(s1);\n\n    }\n}\n",
        a: "Tue Dec 17 14:49:54 IST 2019\nmardi 17 décembre 2019",
        b: "Tue Dec 17 14:49:54 IST 2019\n 17 décembre 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "82. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.util.Date;\n\npublic class S1 {\n\n    public static void main(String[] args) {\n\n        Date date = new Date();\n        System.out.println(date);\n\n    }\n}\n",
        a: "Today's date",
        b: "Tomorrow's date",
        c: "Yesterday's date",
        d: "None",
        correct: "a",
    },
    {
        question: "83. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S2 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance();\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 15:24:16 IST 2019\nDec 17, 2019\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 15:24:16 IST 2019\n17-Dec-2019\nTue Dec 17 00:00:00 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "84. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S3 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.SHORT);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 16:28:12 IST 2019\n12/17/2019\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 16:28:12 IST 2019\nDec/17/19\nTue Dec 17 00:00:00 IST 2019",
        c: "Tue Dec 17 16:28:12 IST 2019\n12/17/19\nTue Dec 17 00:00:00 IST 2019",
        d: "None",
        correct: "c",
    },
    {
        question: "85. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S4 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 16:24:52 IST 2019\nDecember 17, 2019\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 16:27:28 IST 2019\nDec 17, 2019\nTue Dec 17 00:00:00 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "86. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S5 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.LONG);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 16:24:52 IST 2019\nDecember 17, 2019\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 16:24:52 IST 2019\n17, December, 2019\nTue Dec 17 00:00:00 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "a",
    },
    {
        question: "87. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S6 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 16:23:37 IST 2019\nDecember 17, 2019, Tuesday\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 16:23:37 IST 2019\nTuesday, December 17, 2019\nTue Dec 17 00:00:00 IST 2019",
        c: "Compilation error",
        d: "None",
        correct: "b",
    },
    {
        question: "88. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.ParseException;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\n\npublic class S7 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        SimpleDateFormat df = new SimpleDateFormat(\"dd-MM-yyyy\");\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 15:35:54 IST 2019\n17-12-2019\nTue Dec 17 00:00:00 IST 2019",
        b: "Tue Dec 17 15:35:54 IST 2019\n17-Dec--2019\nTue Dec 17 00:00:00 IST 2019",
        c: "Tue Dec 17 15:35:54 IST 2019\n17-Dec--19Tue Dec 17 00:00:00 IST 2019",
        d: "None",
        correct: "a",
    },
    {
        question: "89. what is the output",
        code: "package dateAndNumberFormats;\n\nimport java.text.ParseException;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\n\npublic class S8 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        SimpleDateFormat df = new SimpleDateFormat(\"yyyy.MM.dd G 'at' HH:mm:ss z\");\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
        a: "Tue Dec 17 15:39:38 IST 2019\n2019.12.17 AD at 15:39:38 IST\nTue Dec 17 15:39:38 IST 2019",
        b: "Tue Dec 17 15:39:38 IST 2019\n2019.12.17 AD at 15:39:38 GMT\nTue Dec 17 15:39:38 IST 2019",
        c: "Compilation error",
        d: "None",
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
