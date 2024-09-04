const quizData = [
    {
        "question": "191. After the code is executed, what will be the value of `x`?",
        "code": "int x = 170;\nx = x-- - --x + ++x - x++;\n",
        "a": "169",
        "b": "170",
        "c": "168",
        "d": "171",
        "correct": "c"
    },
    {
        "question": "192. What is the output of the following Java code?",
        "code": "int value = 67;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
        "a": "66",
        "b": "67",
        "c": "65",
        "d": "68",
        "correct": "b"
    },
    {
        "question": "193. Given the code snippet:",
        "code": "int num = 175;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "176",
        "b": "175",
        "c": "174",
        "d": "177",
        "correct": "b"
    },
    {
        "question": "194. What will be the value of `result` after executing the code below?",
        "code": "int result = 67;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "66",
        "b": "65",
        "c": "64",
        "d": "68",
        "correct": "c"
    },
    {
        "question": "195. What is the output of the following Java code?",
        "code": "int x = 45;\nint y = 13;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
        "a": "34",
        "b": "33",
        "c": "32",
        "d": "35",
        "correct": "b"
    },
    {
        "question": "196. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 50;\ncounter = counter-- - --counter + ++counter - counter--;\n",
        "a": "49",
        "b": "50",
        "c": "51",
        "d": "48",
        "correct": "a"
    },
    {
        "question": "197. What will be the value of `value` after executing the following code?",
        "code": "int value = 70;\nvalue = value-- + --value - value++ + ++value;\n",
        "a": "69",
        "b": "70",
        "c": "68",
        "d": "71",
        "correct": "a"
    },
    {
        "question": "198. Given the code snippet:",
        "code": "int num = 185;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "186",
        "b": "185",
        "c": "184",
        "d": "187",
        "correct": "b"
    },
    {
        "question": "199. What will be the output of the following Java code?",
        "code": "int a = 70;\nint b = 20;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
        "a": "49",
        "b": "48",
        "c": "47",
        "d": "50",
        "correct": "c"
    },
    {
        "question": "200. After the code is executed, what will be the value of `x`?",
        "code": "int x = 190;\nx = x-- - --x + ++x - x++;\n",
        "a": "189",
        "b": "190",
        "c": "188",
        "d": "191",
        "correct": "c"
    },
    
        {
            "question": "201. What is the output of the following Java code?",
            "code": "int value = 72;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "71",
            "b": "72",
            "c": "70",
            "d": "73",
            "correct": "a"
        },
        {
            "question": "202. Given the code snippet:",
            "code": "int num = 195;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "196",
            "b": "195",
            "c": "194",
            "d": "197",
            "correct": "b"
        },
        {
            "question": "203. What will be the value of `result` after executing the code below?",
            "code": "int result = 72;\nresult = result++ - --result + result-- - ++result;\n",
            "a": "71",
            "b": "70",
            "c": "69",
            "d": "73",
            "correct": "c"
        },
        {
            "question": "204. What is the output of the following Java code?",
            "code": "int x = 50;\nint y = 14;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
            "a": "38",
            "b": "37",
            "c": "36",
            "d": "39",
            "correct": "b"
        },
        {
            "question": "205. After executing the following code, what will be the value of `counter`?",
            "code": "int counter = 55;\ncounter = counter-- - --counter + ++counter - counter--;\n",
            "a": "54",
            "b": "55",
            "c": "56",
            "d": "53",
            "correct": "a"
        },
        {
            "question": "206. What will be the value of `value` after executing the following code?",
            "code": "int value = 75;\nvalue = value-- + --value - value++ + ++value;\n",
            "a": "74",
            "b": "75",
            "c": "73",
            "d": "76",
            "correct": "a"
        },
        {
            "question": "207. Given the code snippet:",
            "code": "int num = 205;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "206",
            "b": "205",
            "c": "204",
            "d": "207",
            "correct": "b"
        },
        {
            "question": "208. What will be the output of the following Java code?",
            "code": "int a = 75;\nint b = 21;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "52",
            "b": "51",
            "c": "50",
            "d": "53",
            "correct": "b"
        },
        {
            "question": "209. After the code is executed, what will be the value of `x`?",
            "code": "int x = 210;\nx = x-- - --x + ++x - x++;\n",
            "a": "209",
            "b": "210",
            "c": "208",
            "d": "211",
            "correct": "c"
        },
        {
            "question": "210. What is the output of the following Java code?",
            "code": "int value = 77;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "76",
            "b": "77",
            "c": "75",
            "d": "78",
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
    
