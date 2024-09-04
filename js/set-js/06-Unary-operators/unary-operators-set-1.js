const quizData = [
    
    {
        question:  "1.What is the output for given code?",
        code: `class A 

{

public static void main(String[] args) 

{

int i = 1;

System.out.println(i ++);

System.out.println(i);

System.out.println(i);

}

}
}`,
        a: "2<br>2<br>2",
        b: "1<br>2<br>2",
        c: "3<br>2<br>2",
        d: "5<br>2<br>2",
        correct: "b",
    },

    
    {
        question: "2.What is the output for given code?",
        code: `class B 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            System.out.println(i ++);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
        a: "0<br>1<br>1<br>1<br>1",
        b: "0<br>2<br>2<br>2<br>2",
        c: "1<br>1<br>1<br>1<br>1",
        d: "6<br>1<br>1<br>1<br>1",
        correct: "a",
    },
    
    {
        question: "3.What is the output for given code?",
        code: `class C 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            System.out.println(i --);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
        a: "4<br>4<br>4<br>4<br>4<br>4",
        b: "5<br>4<br>3<br>2<br>1<br>0",
        c: "5<br>4<br>4<br>4<br>4<br>4",
        d: "5<br>4<br>4<br>6<br>4<br>4",
        correct: "c",
    },
    
    {
        question: "4.What is the output for given code?",
        code: `class D 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "0<br>1",
        b: "1<br>0",
        c: "1<br>1",
        d: "1<br>3",
        correct: "b",
    },
    
    {
        question: "5.What is the output for given code?",
        code: `class E 
    {
        public static void main(String[] args) 
        {
            int i = 10;
            int j = i --;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "9<br>10",
        b: "10<br>9",
        c: "9<br>9",
        d: "9<br>8",
        correct: "a",
    },
    
    {
        question: "6.What is the output for given code?",
        code: `class F 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "0<br>1",
        b: "1<br>0",
        c: "1<br>1",
        d: "1<br>5",
        correct: "c",
    },
    {
        question: "7.What is the output for given code?",
        code: `class G 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "4<br>9",
        b : "9<br>4",
        c : "4<br>10",
        d : "9<br>3",
        correct : "a"
    },
    {
         question : "8.What is the output for given code?",
          code : `class H 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i + i ++ + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>2",
         b : "2<br>4",
         c : "2<br>2",
         d : "3<br>2",
          correct : "b"
    },
    {
        question : "9.What is the output for given code?",
        code : `class I 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i + i -- + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a : "3<br>16",
        b : "5<br>16",
        c : "4<br>15",
        d : "4<br>16",
        correct : "a"
    },
    {
         question : "10.What is the output for given code?",
          code : `class J 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i ++ + i ++ + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "2<br>6",
        b : "3<br>6",
        c : "4<br>5",
        d : "4<br>6",
        correct : "b"
    },
    {
         question : "11.What is the output for given code?",
         code : `class K 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i -- + i -- + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "2<br>16",
        b : "3<br>16",
        c : "2<br>14",
        d : "4<br>6",
         correct : "a"
    },
    {
         question : "12.What is the output for given code?",
         code: `class L 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i + i ++ + i + i -- + i + i -- + i + i -- + i + i ++ + i + i + i ++ + i ++ + i -- + i -- + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a : "0<br>10",
        b : "10<br>0",
        c : "0<br>11",
        d : "4<br>6",
        correct : "c"
    },
    {
        question : "13.What is the output for given code?",
        code : `class M 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            i = i++;
            System.out.println(i);
        }
    }`,
         a: "1",
         b : "2",
         c : "0",
         d : "5",
         correct : "c.What is the output for given code?"
    },
    {
         question : "14.What is the output for given code?",
         code : `class N 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            i = i --;
            System.out.println(i);
        }
    }`,
         a : "4",
         b : "5",
         c : "6",
         c : "0",
         correct : "b"
    },
    {
        question : "15.What is the output for given code?",
        code : `class O 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            System.out.println(++ i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
         a: "1<br>1<br>1<br>1<br>1",
         b: "1<br>2<br>2<br>2<br>2",
         c: "5<br>4<br>4<br>4<br>4<br>4",
         d: "5<br>4<br>4<br>6<br>4<br>4",
        "correct": "b"
    },
    {
         question : "16.What is the output for given code?",
         code : `class P 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            System.out.println(-- i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
         a : "5<br>4<br>4<br>4<br>4",
         b : "4<br>4<br>4<br>4<br>4",
         c: "5<br>4<br>4<br>4<br>4<br>4",
         d: "5<br>4<br>4<br>6<br>4<br>4",
        "correct": "b"
    },
    {
         question : "17.What is the output for given code?",
         code : `class Q 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = ++ i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "1<br>2",
         b : "1<br>1",
         c : "1<br>3",
         d : "1<br>8",
        "correct": "b"
    },
    {
         question : "18.What is the output for given code?",
         code : `class R 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = -- i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>4",
         b : "4<br>3",
         c : "4<br>6",
         d : "4<br>7",
         correct : "a"
    },
    {
         question : "19.What is the output for given code?",
         code : `class S 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = ++ i + i + ++ i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>4",
         b : "2<br>3",
         c : "2<br>4",
         d : "2<br>8",
         correct : "c"
    },
    {
         question : "20.What is the output for given code?",
         code : `class T
    {
        public static void main(String[] args) 
        {
            int i = 1;
            int j = ++ i + i + -- i + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "1<br>6",
         b : "2<br>6",
         c : "2<br>5",
    },
    {
        "question": "21. What is the value of `x` after executing the following Java code?",
        "code": "int x = 5;\nx = ++x + x--;",
        "a": "10",
        "b": "11",
        "c": "12",
        "d": "13",
        "correct": "b"
    },
    {
        "question": "22. What is the value of `a` after the following code is executed?",
        "code": "int a = 8;\na = a++ + ++a - a-- + --a;",
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "11",
        "correct": "a"
    },
    {
        "question": "23. What will be the value of `x` after the code is executed?",
        "code": "int x = 3;\nx = x++ + ++x - x-- + --x;",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "correct": "b"
    },
    {
        "question": "24. Given the following code snippet:",
        "code": "int num = 7;\nnum = num++ + ++num - num-- + --num;",
        "a": "7",
        "b": "8",
        "c": "9",
        "d": "10",
        "correct": "a"
    },
    {
        "question": "25. What will be the output of the following Java code?",
        "code": "int x = 4;\nint y = x++ + ++x - --x - x--;\nSystem.out.println(y);",
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "correct": "a"
    },
    {
        "question": "26. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 10;\ncounter = counter-- + --counter + counter++ - ++counter;",
        "a": "10",
        "b": "9",
        "c": "11",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "27. What will be the value of `result` after executing the code below?",
        "code": "int result = 6;\nresult = result++ + ++result - result-- + --result;",
        "a": "6",
        "b": "7",
        "c": "8",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "28. What is the value of `value` after executing the following code?",
        "code": "int value = 15;\nvalue = value++ - --value + value-- + ++value;",
        "a": "15",
        "b": "16",
        "c": "17",
        "d": "18",
        "correct": "a"
    },
    {
        "question": "29. Given the code snippet:",
        "code": "int num = 5;\nnum = num++ - num-- + ++num - --num;",
        "a": "5",
        "b": "4",
        "c": "3",
        "d": "6",
        "correct": "b"
    },
    {
        "question": "30. What will be the output of the following Java code?",
        "code": "int a = 7;\nint b = 3;\nint result = a-- - --a + ++b + b++;\nSystem.out.println(result);",
        "a": "12",
        "b": "11",
        "c": "10",
        "d": "9",
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