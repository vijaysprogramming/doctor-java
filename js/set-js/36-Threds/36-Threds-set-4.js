const quizData = 
[
{
    question: "91. Assume a1 is a type of A class and it is pointing to an object of A class. To access a synchronized and static method on a1, which lock is required?",
    code: "select the correct option",
    a: "object lock of any object",
    b: "object lock of an object which is referred by a1",
    c: "object lock of an object which is referred by thread reference",
    d: "class lock of A class",
    correct: "d"
},
{
    question: "92. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any non-static and non-synchronized method on a1 simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "93. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any non-static and non-synchronized different methods on a1 simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "94. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any synchronized and non-static methods on a1 simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "95. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any synchronized and non-static different methods on a1 simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "96. Assume a1 is a type of A class and it is pointing to an object of A class and a2 is a type of A class and it is pointing to another object of the same A class. Assume A class contains synchronized and non-static test1() method. Is it possible for one thread to access a1.test1() and another thread to access a2.test1() simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "97. Assume a1 is a type of A class and it is pointing to an object of A class and a2 is a type of A class and it is pointing to another object of the same A class. Assume A class contains synchronized and non-static test1() and test2() methods. Is it possible for one thread to access a1.test1() and another thread to access a2.test2() simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "98. Assume a1 is a type of A class and it is pointing to an object of A class. Assume A class contains synchronized and non-static test1() and test2() methods. Is it possible for one thread to access a1.test1() and another thread to access a1.test2() simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "99. Assume A class containing static and synchronized test1() method. Is it possible, two threads accessing A.test1() simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "100. Assume A class containing static and synchronized test1() and test2() methods. Is it possible, one thread accessing A.test1() and another thread accessing A.test2() simultaneously?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "101. While a thread is entering into a synchronized and non-static method on a1 pointing object, should it require the object lock of an object which is referred to by a1?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "102. If a thread requires the object lock of the current object to enter into a synchronized block, what could be the mutex for the synchronized block?",
    code: "select the correct option",
    a: "Runnable reference",
    b: "Thread reference",
    c: "this",
    d: "not applicable",
    correct: "c"
},
{
    question: "103. If t1 thread is holding the object lock of a1 and looking for the object lock of a2, and t2 thread is holding the object lock of a2 and looking for the object lock of a1, then which thread will execute first?",
    code: "select the correct option",
    a: "t1",
    b: "t2",
    c: "dead lock",
    d: "not applicable",
    correct: "c"
},
{
    question: "104. In which class is the wait() method developed?",
    code: "select the correct option",
    a: "Thread",
    b: "Object",
    c: "ThreadLocal",
    d: "not applicable",
    correct: "b"
},
{
    question: "105. In which class is the notify() method developed?",
    code: "select the correct option",
    a: "Thread",
    b: "Object",
    c: "ThreadLocal",
    d: "not applicable",
    correct: "b"
},
{
    question: "106. In which class is the notifyAll() method developed?",
    code: "select the correct option",
    a: "Thread",
    b: "Object",
    c: "ThreadLocal",
    d: "not applicable",
    correct: "b"
},
{
    question: "107. Does the String class have the wait() method?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "108. Does the Thread class have the notify() method?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "109. Should a thread require the object lock of t1 to call t1.wait()?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "110. Should a thread require the object lock of t1 to call t1.notify()?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",   
    correct: "a"
},
{
    question: "111. Should a thread require the object lock of t2 to call t1.notifyAll()?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "112. If a thread holding the object lock of t1 is trying to call t2.wait(), where t1 and t2 are referring to different objects, will the thread go to the waiting state?",
    code: "select the correct option",
    a: "yes",
    b: "no",
    c: "not applicable",
    d: "none of the above",
    correct: "b"
},
{
    question: "113. Which checked exception is required to call the wait() method?",
    code: "select the correct option",
    a: "ClassNotFoundException",
    b: "SQLException",
    c: "InterruptedException",
    d: "double",
    correct: "c"
},
{
    question: "114. The main thread is about to call a1.wait() in the main method by choosing a synchronized block. What could be the mutex for the synchronized block?",
    code: "select the correct option",
    a: "this",
    b: "main thread reference",
    c: "a1",
    d: "none of the above",
    correct: "c"
},
{
    question: "115. The child thread is about to call wait() in the run method by choosing a synchronized block. What could be the mutex for the synchronized block?",
    code: "select the correct option",
    a: "this",
    b: "main thread reference",
    c: "a1",
    d: "none of the above",
    correct: "a"
},
{
    question: "116. The main thread is about to call a1.notify() in the main method by choosing a synchronized block. What could be the mutex for the synchronized block?",
    code: "select the correct option",
    a: "this",
    b: "main thread reference",
    c: "a1",
    d: "none of the above",
    correct: "c"
},
{
    question: "117. The child thread is about to call notifyAll() in the run method by choosing a synchronized block. What could be the mutex for the synchronized block?",
    code: "select the correct option",
    a: "this",
    b: "main thread reference",
    c: "a1",
    d: "none of the above",
    correct: "c"
},
{
    question: "118. There are two objects. t1 is referring to one object and t2 is referring to another object. If a child thread went into waiting by calling wait on t1, how can the child thread be released from waiting?",
    code: "select the correct option",
    a: "someone has to call t1.notify()",
    b: "someone has to call t2.notifyAll()",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
},
{
    question: "119. There are two objects. t1 is referring to one object and t2 is referring to another object. If some child threads went into waiting by calling wait on t1, how can all child threads be released from waiting?",
    code: "select the correct option",
    a: "someone has to call t1.notify()",
    b: "someone has to call t2.notifyAll()",
    c: "someone has to call t1.notifyAll()",

    d: "none of the above",
    correct: "c"
},
{
    question: "120. While a thread is going to the wait stage, does it release the owned lock?",
    code: "select the correct option",
    a: "true",
    b: "false",
    c: "not applicable",
    d: "none of the above",
    correct: "a"
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