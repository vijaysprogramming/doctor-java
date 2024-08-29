const quizData = [
{
    question:  "31. What is the output for given code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int i = 0;
    while (i < 3) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            default:
                System.out.println("Other");
        }
        i++;
    }
}
}
}`,
    a: ' One',
    b: 'Two',
    c: 'TwoTwoTwo',
    d: 'TwoOther',
    correct: 'C',
},
{
    question: "32. What will be the output of the following code if executed?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int i = 0;
    do {
        int x = 5;
        switch (x) {
            case 3:
                System.out.println("Three");
                break;
            case 5:
                System.out.println("Five");
                break;
            default:
                System.out.println("Other");
        }
        i++;
    } while (i < 2);
}
}`,
    a: 'Three',
    b: 'Five',
    c: 'Other',
    d: 'FiveFive',
    correct: 'd',
},
{
    question: "33. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 7;
    if (num > 5) {
        switch (num) {
            case 6:
                System.out.println("Six");
                break;
            case 7:
                System.out.println("Seven");
                break;
            default:
                System.out.println("Other");
        }
    } else {
        System.out.println("Less than or equal to 5");
    }
}
}`,
    a: 'Six',
    b: 'Seven',
    c: 'Less than or equal to 5',
    d: 'Other',
    correct: 'b',
},
{
    question: "34. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 5;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
            break;
        default:
            System.out.println("Other value");
    }
    System.out.println("Outside switch");
}
}`,
    a: 'Value is 5\nOutside switch',
    b: 'Value is 10\nOutside switch',
    c: 'Value is 5',
    d: 'Compilation error',
    correct: 'a',
},
{
    question: "36. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 4;
    switch (num) {
        case 2:
            System.out.println("Two");
            break;
        case 4:
            System.out.println("Four");
        case 6:
            System.out.println("Six");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'Four',
    b: 'FourSixDefault case',
    c: 'FourSix',
    d: 'Compilation error',
    correct: 'b'
},
{
    question: "37. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 10;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
            continue;
        default:
            System.out.println("Other value");
    }
}
}`,
    a: 'Value is 5',
    b: 'Value is 10',
    c: 'Compilation error',
    d: 'No output',
    correct: 'c',
},
{
    question: "38. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 10;
    String result = (x > 5) ? "Greater than 5" : switch (x) {
        case 5:
            yield "Equal to 5";
        case 10:
            yield "Equal to 10";
        default:
            yield "Other value";
    };
    System.out.println(result);
}
}`,
    a: 'Greater than 5',
    b: 'Equal to 5',
    c: 'Equal to 10',
    d: 'Other value',
    correct: 'a',
},
{
    question: "39. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 2;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Default case',
    d: 'Compilation error',
    correct: 'b',
},
{
    question: "40. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 1;
    switch (x) {
        case 1:
            System.out.println("One");
        case 2:
            System.out.println("Two");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'OneTwo',
    d: 'OneTwoDefault case',
    correct: 'd',
},
{
    question: "41. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 3;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'No output',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "42. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 2;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        case 3:
            System.out.println("Three");
            break;
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'Compilation error',
    correct: 'b',
},
{
    question: "43. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 3;
    switch (x) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        case 3:
            System.out.println("Three");
        case 4:
            System.out.println("Four");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'ThreeFourDefault case',
    correct: 'd',
},
{
    question: "44. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int value = 5;
    switch (value) {
        case 1:
            System.out.println("One");
            break;
        case 5:
            System.out.println("Five");
        case 10:
            System.out.println("Ten");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Five',
    c: 'FiveTenDefault case',
    d: 'Compilation error',
    correct: 'c',
}, 
{
    question: "45. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 7;
    if (num > 5) {
        switch (num) {
            case 6:
                System.out.println("Six");
                break;
            case 7:
                System.out.println("Seven");
                break;
            default:
                System.out.println("Other");
        }
    } else {
        System.out.println("Less than or equal to 5");
    }
}
}`,
    a: 'Six',
    b: 'Seven',
    c: 'Less than or equal to 5',
    d: 'Other',
    correct: 'b',
},
{
    question: "46. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 5;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
            break;
        default:
            System.out.println("Other value");
    }
    System.out.println("Outside switch");
}
}`,
    a: 'Value is 5\nOutside switch',
    b: 'Value is 10\nOutside switch',
    c: 'Value is 5',
    d: 'Compilation error',
    correct: 'a',
},
{
    question: "47. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 4;
    switch (num) {
        case 2:
            System.out.println("Two");
            break;
        case 4:
            System.out.println("Four");
        case 6:
            System.out.println("Six");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'Four',
    b: 'FourSixDefault case',
    c: 'FourSix',
    d: 'Compilation error',
    correct: 'b',
},
{
    question: "48. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 10;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
            continue;
        default:
            System.out.println("Other value");
    }
}
}`,
    a: 'Value is 5',
    b: 'Value is 10',
    c: 'Compilation error',
    d: 'No output',
    correct: 'c',
},
{
    question: "49. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 10;
    String result = (x > 5) ? "Greater than 5" : switch (x) {
        case 5:
            yield "Equal to 5";
        case 10:
            yield "Equal to 10";
        default:
            yield "Other value";
    };
    System.out.println(result);
}
}`,
    a: 'Greater than 5',
    b: 'Equal to 5',
    c: 'Equal to 10',
    d: 'Other value',
    correct: 'a',
},
{
    question: "50. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 2;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Default case',
    d: 'Compilation error',
    correct: 'b',
},
{
    question: "51. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 1;
    switch (x) {
        case 1:
            System.out.println("One");
        case 2:
            System.out.println("Two");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'OneTwo',
    d: 'OneTwoDefault case',
    correct: 'd',
},
{
    question: "52. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 3;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'No output',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "53. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int num = 2;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        case 3:
            System.out.println("Three");
            break;
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'Compilation error',
    correct: 'b',
},
{
    question: "54. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int x = 3;
    switch (x) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        case 3:
            System.out.println("Three");
        case 4:
            System.out.println("Four");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Two',
    c: 'Three',
    d: 'ThreeFourDefault case',
    correct: 'd',
},
{
    question: "55. What will be the output of the following code?",
    code: `public class SwitchExample {
public static void main(String[] args) {
    int value = 5;
    switch (value) {
        case 1:
            System.out.println("One");
            break;
        case 5:
            System.out.println("Five");
        case 10:
            System.out.println("Ten");
        default:
            System.out.println("Default case");
    }
}
}`,
    a: 'One',
    b: 'Five',
    c: 'FiveTenDefault case',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "56. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int num = 3;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        default:
            System.out.println("Default case");
        case 2:
            System.out.println("Two");
    }
}
}
}`,
    a: 'One',
    b: 'Default case',
    c: ' Two',
    d: 'Default caseTwo',
    correct: 'd',
},
{
    question: "57. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int num = 1;
    switch (num) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        default:
            System.out.println("Default case");
    }
    System.out.println("Outside switch");
}
}
}`,
    a: ' One<br>Outside switch',
    b: 'Default case Two<br>Outside switch',
    c: 'one',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "58. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int x = 7;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
        case 7:
            System.out.println("Value is 7");
            break;
    }
}
}
`,
    a: 'Value is 5',
    b: 'Value is 10',
    c: 'Value is 7',
    d: 'Compilation error',
    correct: 'c',
},
{
    question: "59. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int x = 10;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 10:
            System.out.println("Value is 10");
            continue;
        default:
            System.out.println("Other value");
    }
}
}
`,
    a: 'Value is 5',
    b: 'Value is 10',
    c: 'Compilation error',
    d: 'No output',
    correct: 'c',
},
{
    question: "60. What will be the output of the above code?",
    code: `java
public class SwitchExample {
public static void main(String[] args) {
    int x = 6;
    switch (x) {
        case 5:
            System.out.println("Value is 5");
            break;
        case 6:
            System.out.println("Value is 6");
        case 7:
            System.out.println("Value is 7");
            break;
        default:
            System.out.println("Other value");
    }
}
}
`,
    a: 'Value is 5',
    b: 'Value is 6',
    c: 'Value is 7',
    d: 'Value is 6Value is 7',
    correct: 'd',
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
codeEl.innerHTML = `<pre><code class="language.java">${currentQuizData.code}</code></pre>`;
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
    <h2 style="text.align: center; font.size: 2rem;">Quiz Results</h2>
    <p style="font.size: 1.5rem; text.align: center;">You answered ${score}/${quizData.length} questions correctly</p>
    <div style="margin.top: 2rem; max.height: 400px; overflow.y: auto; padding: 1rem; border: 1px solid #ccc; border.radius: 10px;">
        <h3 style="text.align: center; margin.bottom: 2rem;">Detailed Summary</h3>
        <ul style="list.style.type: none; padding: 0; font.size: 1.2rem;">
            ${selectedAnswers.map((result, index) => `
                <li style="margin.bottom: 1.5rem;">
                    <strong>Question ${index + 1}:</strong> ${result.question}<br>
                    <pre><code class="language.java">${result.code}</code></pre>
                    <strong>Your Answer:</strong> ${result.selected} (${result.isCorrect ? '<span style="color: green;">Correct</span>' : '<span style="color: red;">Incorrect</span>'})<br>
                    ${!result.isCorrect ? `<strong>Correct Answer:</strong> ${result.correct}` : ''}
                </li>
            `).join('')}
        </ul>
    </div>
    <div style="text.align: center; margin.top: 2rem;">
        <button onclick="location.reload()" style="font.size: 1.2rem; padding: 0.8rem 1.5rem; background.color: #8e44ad; color: #fff; border: none; cursor: pointer;">Reload Quiz</button>
    </div>
`;

hljs.highlightAll(); // Apply syntax highlighting in the summary
}
