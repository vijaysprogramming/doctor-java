const quizData = [
    {
        question: "1. what is the output",
        code: `class A
    {
        public static void main(String[] args) 
        {
            int i;
            if(true)
            {
                i = 10;
            }
            else
            {
                i = 20;
            }
            System.out.println(i);
        }
    }`,
        a: "10",
        b: "20",
        c: "Compile.time error",
        d: "none",
        correct: "a",
    },
    
    {
        question: "2. what is the output",
        code: `class B
    {
        public static void main(String[] args) 
        {
            int i;
            if(false)
            {
                i = 10;
            }
            else
            {
                i = 20;
            }
            System.out.println(i);
        }
    }`,
        a: "10",
        b: "20",
        c: "error",
        d: "none",
        correct: "b",
    },
    
    {
        question: "3. what is the output",
        code: `class C
    {
        public static void main(String[] args) 
        {
            int i = true ? 10 : 20;
            System.out.println(i);
        }
    }`,
        a: "10",
        b: "20",
        c: "error",
        d: "none",
        correct: "a",
    },
    
    {
        question: "4. what is the output",
        code: `class D
    {
        public static void main(String[] args) 
        {
            int i = false ? 10 : 20;
            System.out.println(i);
        }
    }`,
        a: "10",
        b: "20",
        c: "error",
        d: "none",
        correct: "b",
    },
    
    {
        question: "5. what is the output",
        code: `class E
    {
        public static void main(String[] args) 
        {
            int k = 200;
            int i = k < 100 ? 10 : 20;
            System.out.println(i);
        }
    }`,
        a: "100",
        b: "10",
        c: "20",
        d: "error",
        correct: "c",
    },
    
    {
        question: "6. what is the output",
        code: `class F
    {
        public static void main(String[] args) 
        {
            int k = 200;
            int i = k > 100 ? 10 : 20;
            System.out.println(i);
        }
    }`,
        a: "20",
        b: "10",
        c: "error",
        d: "none",
        correct: "b",
    },
    
    {
        question: "7. what is the output",
        code: `class G
    {
        public static void main(String[] args) 
        {
            int i = 200, j = 300;
            int min = i > j ? j : i;
            System.out.println("min b/w " + i + " and " + j + " is " + min);
        }
    }`,
        a: "min b/w 200 and 300 is 300",
        b: "min b/w 200 and 300 is 200",
        c: "error",
        d: "none",
        correct: "b",
    },
    
    {
        question: "8 .what is the output",
        code: `class H
    {
        public static void main(String[] args) 
        {
            int i = 200, j = 100;
            int min = i > j ? j : i;
            System.out.println("min b/w " + i + " and " + j + " is " + min);
        }
    }`,
        a: "min b/w 200 and 100 is 100",
        b: "min b/w 200 and 100 is 200",
        c: "error",
        d: "none",
        correct: "a",
    },
    
    {
        question: "9. what is the output",
        code: `class J 
    {
        public static void main(String[] args) 
        {
            int m = 10, n = 20, o = 15;
            int min;
            if(m < n && m < o)
            {
                min = m;
            }
            else if(n < m && n < o)
            {
                min = n;
            }
            else
            {
                min = o;
            }
            System.out.println("min value among " + m + ", " + n + ", " + o + " is " + min);
        }
    }`,
        a: "min value among 10, 20, 15 is 10",
        b: "min value among 10, 20, 15 is 15",
        c: "error",
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
