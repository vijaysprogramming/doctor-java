const quizData = 
    
    [
{
    question: "31.Which method is used to read a pattern from the console using Scanner?",
    code: "Select The Correct Answer",
    a: "next()",
    b: "nextPattern()",
    c: "nextLine()",
    d: "nextRegex()",
    correct: "b",
},
{
    question: "32.What is the purpose of the `hasNextInt(int radix)` method in Scanner?",
    code: "Select The Correct Answer",
    a: "Checks if there is another integer available in the specified radix",
    b: "Checks if there is another line available",
    c: "Checks if there is another token available",
    d: "Checks if there is another double available",
    correct: "a",
},
{
    question: "33.How can you read a file path from the console using Scanner?",
    code: "Select The Correct Answer",
    a: "nextLine()",
    b: "nextPath()",
    c: "next()",
    d: "nextFile()",
    correct: "a",
},
{
    question: "34.What is the return type of the `hasNext()` method in Scanner?",
    code: "Select The Correct Answer",
    a: "boolean",
    b: "int",
    c: "String",
    d: "void",
    correct: "a",
},
{
    question: "35.How can you read a date in a specific format from the console using Scanner?",
    code: "Select The Correct Answer",
    a: "nextLine()",
    b: "next()",
    c: "nextFormattedDate()",
    d: "nextDate()",
    correct: "d",
},
{
    question: "36.Which method can be used to read a token until a specific pattern is encountered?",
    code: "Select The Correct Answer",
    a: "next()",
    b: "nextUntil()",
    c: "nextLine()",
    d: "nextPattern()",
    correct: "b",
},
{
    question: "37.What is the purpose of the `reset()` method in Scanner?",
    code: "Select The Correct Answer",
    a: "Resets the scanner's state",
    b: "Clears the current token",
    c: "Resets the scanner's delimiter",
    d: "Closes the scanner",
    correct: "a",
},
{
    question: "38.How can you read an unsigned long from the console using Scanner?",
    code: "Select The Correct Answer",
    a: "nextLong()",
    b: "nextUnsignedLong()",
    c: "next()",
    d: "nextLine()",
    correct: "a",
},
{
    question: "39.What is the purpose of the `ioException()` method in Scanner?",
    code: "Select The Correct Answer",
    a: "Checks if an IOException occurred",
    b: "Throws an IOException",
    c: "Closes the scanner",
    d: "Resets the scanner's state",
    correct: "a",
},
{
    question: "40.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer: ");
        int num = scanner.nextInt();
        System.out.println("You entered: " + num);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter an integer: [User Input] You entered: [User Input]",
    d: "Enter an integer: [User Input]\nYou entered: [User Input]",
    correct: "c",
},
{
    question: "41.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("1 true 3.14 hello");
        while(scanner.hasNext()) {
            if(scanner.hasNextInt()) {
                System.out.println(scanner.nextInt());
            } else if(scanner.hasNextDouble()) {
                System.out.println(scanner.nextDouble());
            } else if(scanner.hasNextBoolean()) {
                System.out.println(scanner.nextBoolean());
            } else {
                System.out.println(scanner.next());
            }
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "1 true 3.14 hello",
    d: "1\ntrue\n3.14\nhello",
    correct: "d",
},
{
    question: "42.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a double: ");
        double num = scanner.nextDouble();
        System.out.println("You entered: " + num);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter a double: [User Input] You entered: [User Input]",
    d: "Enter a double: [User Input]\nYou entered: [User Input]",
    correct: "c",
},
{
    question: "43.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("One Two Three Four");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().charAt(0) + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "O T T F",
    d: "One Two Three Four",
    correct: "c",
},
{
    question: "44.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("5 2 7");
        int sum = 0;
        while(scanner.hasNextInt()) {
            sum += scanner.nextInt();
        }
        System.out.println("Sum: " + sum);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Sum: 14",
    d: "Sum: 527",
    correct: "c",
},
{
    question: "45.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("false True FALSE true");
        while(scanner.hasNextBoolean()) {
            System.out.println(scanner.nextBoolean());
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "false true false true",
    d: "false\nTrue\nFALSE\ntrue",
    correct: "c",
},
{
    question: "46.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("Hello World 123");
        while(scanner.hasNext()) {
            System.out.println(scanner.next());
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Hello World 123",
    d: "Hello\nWorld\n123",
    correct: "d",
},
{
    question: "47.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("3.14 2.71 1.61");
        double product = 1.0;
        while(scanner.hasNextDouble()) {
            product *= scanner.nextDouble();
        }
        System.out.println("Product: " + product);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Product: 13.9286824",
    d: "Product: 13.9286824 2.71 1.61",
    correct: "c",
},
{
    question: "48.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("Java Programming Is Fun");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().toUpperCase() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "JAVA PROGRAMMING IS FUN",
    d: "Java Programming Is Fun",
    correct: "c",
},
{
    question: "49.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String sentence = scanner.nextLine();
        System.out.println("You entered: " + sentence);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter a sentence: [User Input] You entered: [User Input]",
    d: "Enter a sentence: [User Input]",
    correct: "c",
},
{
    question: "50.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("1 2 3 4 5");
        while(scanner.hasNextInt()) {
            System.out.println(scanner.nextInt() * 2);
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "2\n4\n6\n8\n10",
    d: "1 2 3 4 5",
    correct: "c",
},
{
    question: "51.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String str = scanner.nextLine();
        System.out.println("You entered: " + str);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Enter a string: [User Input] You entered: [User Input]",
    d: "Enter a string: [User Input]\nYou entered: [User Input]",
    correct: "c",
},
{
    question: "52.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("false true true false");
        while(scanner.hasNextBoolean()) {
            System.out.print(scanner.nextBoolean() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "false true true false",
    d: "false\ntrue\ntrue\nfalse",
    correct: "c",
},
{
    question: "53.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("1 3 5 7 9");
        int product = 1;
        while(scanner.hasNextInt()) {
            product *= scanner.nextInt();
        }
        System.out.println("Product: " + product);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Product: 945",
    d: "Product: 1 3 5 7 9",
    correct: "c",
},
{
    question: "54.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("abc def ghi");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().length() + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "3 3 3",
    d: "2 3 3",
    correct: "c",
},
{
    question: "55.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("1 2.5 3 4.2 5");
        double sum = 0;
        while(scanner.hasNextDouble()) {
            sum += scanner.nextDouble();
        }
        System.out.println("Sum: " + sum);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Sum: 16.7",
    d: "Sum: 16.7 5",
    correct: "c",
},
{
    question: "56.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("Java\\nProgramming\\nIs Fun");
        while(scanner.hasNextLine()) {
            System.out.println(scanner.nextLine().toUpperCase());
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "JAVA\\nPROGRAMMING\\nIS FUN",
    d: "Java Programming Is Fun",
    correct: "c",
},
{
    question: "57.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("a\\nb\\nc");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().charAt(0) + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "a b c",
    d: "a\\nb\\nc",
    correct: "c",
},
{
    question: "58.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("Hello 123 true 3.14");
        while(scanner.hasNext()) {
            if(scanner.hasNextInt()) {
                System.out.println("Integer: " + scanner.nextInt());
            } else if(scanner.hasNextBoolean()) {
                System.out.println("Boolean: " + scanner.nextBoolean());
            } else if(scanner.hasNextDouble()) {
                System.out.println("Double: " + scanner.nextDouble());
            } else {
                System.out.println("String: " + scanner.next());
            }
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Integer: 123\\nString: true\\nDouble: 3.14",
    d: "Integer: 123\\nBoolean: true\\nDouble: 3.14",
    correct: "d",
},
{
    question: "59.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("1 2 3 4 5");
        int sum = 0;
        while(scanner.hasNextInt()) {
            sum += scanner.nextInt();
        }
        System.out.println("Sum: " + sum);
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "Sum: 15",
    d: "Sum: 1 2 3 4 5",
    correct: "c",
},
{
    question: "60.What is the output of the following Java program?",
    code: `import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner("Java Programming Language");
        while(scanner.hasNext()) {
            System.out.print(scanner.next().charAt(0) + " ");
        }
        scanner.close();
    }
}`,
    a: "Compile-time error",
    b: "Runtime error",
    c: "J P L",
    d: "JPL",
    correct: "c",
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