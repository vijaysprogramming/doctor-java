const quizData = 
    
    [
        {
            question: "1.What is the purpose of the Scanner class in Java?",
            code: "Select The Correct Answer",
            a: "To read input from the console",
            b: "To print output to the console",
            c: "To perform mathematical calculations",
            d: "To create graphical user interfaces",
            correct: "a",
        },
        {
            question: "2.Which package contains the Scanner class in Java?",
            code: "Select The Correct Answer",
            a: "java.lang",
            b: "java.util",
            c: "java.io",
            d: "java.text",
            correct: "b",
        },
        {
            question: "3.Which method is used to read an integer from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextInt()",
            b: "nextDouble()",
            c: "next()",
            d: "nextLine()",
            correct: "a",
        },
        {
            question: "4.What will happen if you use `nextInt()` to read a non-integer input?",
            code: "Select The Correct Answer",
            a: "It will throw a compile-time error",
            b: "It will throw a runtime exception",
            c: "It will return the default value for int",
            d: "It will wait for valid input",
            correct: "b",
        },
        {
            question: "5.How can you read a double value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextDouble()",
            b: "next()",
            c: "nextInt()",
            d: "nextLine()",
            correct: "a",
        },
        {
            question: "6.Which method is used to read a line of text from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextLine()",
            b: "next()",
            c: "nextInt()",
            d: "nextDouble()",
            correct: "a",
        },
        {
            question: "7.What does the `next()` method of Scanner do?",
            code: "Select The Correct Answer",
            a: "Reads the next character",
            b: "Reads the next word (sequence of non-space characters)",
            c: "Reads the next line",
            d: "Reads the next integer",
            correct: "b",
        },
        {
            question: "8.Which method reads a byte value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextByte()",
            b: "next()",
            c: "nextLine()",
            d: "nextInt()",
            correct: "a",
        },
        {
            question: "9.How can you read a short value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextShort()",
            b: "next()",
            c: "nextInt()",
            d: "nextLine()",
            correct: "a",
        },
        {
            question: "10.Which method reads a long value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextLong()",
            b: "next()",
            c: "nextInt()",
            d: "nextLine()",
            correct: "a",
        },
        {
            question: "11.What is the purpose of the `useDelimiter()` method in Scanner?",
            code: "Select The Correct Answer",
            a: "It sets the delimiter for reading numbers",
            b: "It sets the delimiter for reading characters",
            c: "It sets the delimiter for splitting strings",
            d: "It sets the delimiter for reading lines",
            correct: "c",
        },
        {
            question: "12.Which method is used to check if there is another token available in the input?",
            code: "Select The Correct Answer",
            a: "hasNext()",
            b: "hasToken()",
            c: "hasNextToken()",
            d: "hasMore()",
            correct: "a",
        },
        {
            question: "13.What happens if you call `nextLine()` after calling `nextInt()` without consuming the newline character?",
            code: "Select The Correct Answer",
            a: "It reads the next line properly",
            b: "It skips the next line",
            c: "It throws an InputMismatchException",
            d: "It waits indefinitely for input",
            correct: "b",
        },
        {
            question: "14.Which method is used to close the Scanner object?",
            code: "Select The Correct Answer",
            a: "close()",
            b: "shutdown()",
            c: "end()",
            d: "finish()",
            correct: "a",
        },
        {
            question: "15.What will happen if you call `nextDouble()` and the next token is not a valid double?",
            code: "Select The Correct Answer",
            a: "It will return 0.0",
            b: "It will throw a NoSuchElementException",
            c: "It will throw an InputMismatchException",
            d: "It will return Double.NaN",
            correct: "c",
        },
        {
            question: "16.Which method reads a boolean value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextBoolean()",
            b: "next()",
            c: "nextLine()",
            d: "nextInt()",
            correct: "a",
        },
        {
            question: "17.How can you read a float value from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextFloat()",
            b: "next()",
            c: "nextDouble()",
            d: "nextLine()",
            correct: "a",
        },
        {
            question: "18.What is the default delimiter used by Scanner?",
            code: "Select The Correct Answer",
            a: "Space",
            b: "Comma",
            c: "Tab",
            d: "Newline",
            correct: "a",
        },
        {
            question: "19.How can you change the delimiter used by Scanner to a comma?",
            code: "Select The Correct Answer",
            a: "scanner.useDelimiter(\",\")",
            b: "scanner.setDelimiter(\",\")",
            c: "scanner.delimiter(\",\")",
            d: "scanner.changeDelimiter(\",\")",
            correct: "a",
        },
        {
            question: "20.Which method can be used to read an unsigned integer from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextUnsignedInt()",
            b: "nextInt()",
            c: "next()",
            d: "nextLine()",
            correct: "b",
        },
        {
            question: "21.What happens if you call `next()` when there are no more tokens in the input?",
            code: "Select The Correct Answer",
            a: "It throws a NoSuchElementException",
            b: "It returns an empty string",
            c: "It returns null",
            d: "It throws an InputMismatchException",
            correct: "a",
        },
        {
            question: "22.How can you read a hexadecimal integer from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "scanner.nextInt(16)",
            b: "scanner.nextHexInt()",
            c: "scanner.next()",
            d: "scanner.nextLine()",
            correct: "a",
        },
        {
            question: "23.What method is used to read a string with spaces from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextLine()",
            b: "next()",
            c: "nextString()",
            d: "nextWord()",
            correct: "b",
        },
        {
            question: "24.Which method is used to read a byte array from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextBytes()",
            b: "next()",
            c: "nextLine()",
            d: "nextByteArray()",
            correct: "a",
        },
        {
            question: "25.How can you set the radix (base) for reading integers using Scanner?",
            code: "Select The Correct Answer",
            a: "scanner.useRadix()",
            b: "scanner.setRadix()",
            c: "scanner.radix()",
            d: "scanner.useDelimiter()",
            correct: "a",
        },
        {
            question: "26.What does the `skip()` method of Scanner do?",
            code: "Select The Correct Answer",
            a: "Skips a specified pattern",
            b: "Skips a specified number of tokens",
            c: "Skips a specified number of characters",
            d: "Skips a specified line",
            correct: "a",
        },
        {
            question: "27.Which method is used to read a formatted string from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "nextFormatted()",
            b: "next()",
            c: "nextLine()",
            d: "nextFormat()",
            correct: "b",
        },
        {
            question: "28.What happens if you call `nextBoolean()` when the next token is not a valid boolean value?",
            code: "Select The Correct Answer",
            a: "It throws an InputMismatchException",
            b: "It throws a NoSuchElementException",
            c: "It returns false",
            d: "It returns true",
            correct: "a",
        },
        {
            question: "29.How can you read a single word (sequence of non-space characters) from the console using Scanner?",
            code: "Select The Correct Answer",
            a: "next()",
            b: "nextLine()",
            c: "nextWord()",
            d: "nextString()",
            correct: "a",
        },
        {
            question: "30.What is the purpose of the `hasNextLine()` method in Scanner?",
            code: "Select The Correct Answer",
            a: "Checks if there is another line available",
            b: "Checks if there is another token available",
            c: "Checks if there is another integer available",
            d: "Checks if there is another character available",
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