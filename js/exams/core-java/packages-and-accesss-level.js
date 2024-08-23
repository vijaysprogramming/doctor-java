const quizData = [
    
        {
            question: "01- package is used for grouping similar kind of classes",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "02- package keyword can be anywhere in the file",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "03- package keyword should be as a first statement in the java file",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "04- how to compile if A.java file which is in pack1 folder with a package as pack1 declaration.",
            code: "select the correct option",
            a: "javac pack1/A.java",
            b: "javac pack1.A.java",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "05- how to run class file(A.class) which is in pack1 package",
            code: "select the correct option",
            a: "java pack1/A",
            b: "java pack1.A",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "06- package is used for avoiding naming conflicts to the classes",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "07- private member of any class should be used in the same class.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "08- we can't use private member of one class in another class.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "09- we can use private method of A class inside a B class",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "10- we can use private method of A class inside a B class, if both the classes are in the same java file.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "11- constructor can be private.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "12- if class containing private constructor, then object should be created within the same class.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private.",
            d: "none of above",
            correct: "a",
        },
        {
            question: "13- if class containing only private constructor/constructors, then we can't develop a subclass.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private.",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "14- private member of a class can be accessed from its subclass.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "15- subclass constructor always should call only superclass non-private constructor.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private.",
            d: "none of above",
            correct: "a",
        },
        {
            question: "16- private static methods of superclass can be accessed from its subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "17- outer classes can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "18- inner classes can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "19- outer classes can't be static",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "20- inner classes can't be static",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "21- static initialization block can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "22- instance initialization block can't be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "23- private members of superclass inheriting to subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "24- private members are surviving in the inheritance",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "25- default scope also considered as a package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "26- default scoped members are allowed to use in the same package.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "27- default scoped members are allowed to use in the other packages also.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "28- default scoped members are inheriting to the subclasses of same package.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "29- default scoped members are inheriting to subclasses of any package.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "30- protected scoped members are allowed to use in the same package.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "31- protected scoped members are allowed to use in the other packages also.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "32- protected and default both are one and the same in case of usage",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "33- protected scoped member can be inherited to every subclass including subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "34- protected scoped member can be inherited to subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "35- if protected member is inheriting to subclass of another package, then it should be used in the within that subclass by using subclass reference type.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "36- if protected member is inheriting to subclass of another package, then it should be used in the within that subclass by using superclass reference type.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "37- if protected member is inheriting to subclass of another package, then it can be used in outside a subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "38- if protected member is inheriting to subclass of another package, then it should be used in the same subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "39- public scoped members are allowed to use only in the same package.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "40- public scoped members are allowed to use in the other packages also.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "41- public and protected both are one and the same in case of usage",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "42- public scoped member can be inherited to every subclass including subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "43- public scoped member can be inherited to subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "44- if public member is inheriting to subclass of another package, then it should be used only in the within that subclass by using subclass reference type.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "45- if public member is inheriting to subclass of another package, then it should be used only in the within that subclass by using superclass reference type.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "46- if public member is inheriting to subclass of another package, then it can be used in outside a subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "47- if public member is inheriting to subclass of another package, then it should be used only in the same subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "48- only public classes can be used in another packages.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "49- we can use one class in another class of the same package without import.",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        {
            question: "50- we can use another package class without import",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        {
            question: "51- package is used for grouping similar kind of classes",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "52- package keyword can be anywhere in the file",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "53- package keyword should be as a first statement in the java file",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "54- how to compile if A.java file which is in pack1 folder with a package as pack1 declaration",
            code: "select the correct option",
            a: "javac pack1/A.java",
            b: "javac pack1.A.java",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "55- how to run class file(A.class) which is in pack1 package",
            code: "select the correct option",
            a: "java pack1/A",
            b: "java pack1.A",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "56- package is used for avoiding naming conflicts to the classes",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "57- private member of any class should be used in the same class",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "58- we can't use private member of one class in another class",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "59- we can use private method of A class inside a B class",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "60- we can use private method of A class inside a B class, if both the classes are in the same java file",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "61- constructor can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "62- if class containing private constructor, then object should be created within the same class",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "63- if class containing only private constructor/constructors, then we can't develop a subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "64- private member of a class can be accessed from its subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "65- Sub class constructor always should call only super class non-private constructor",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "we can't make constructor as a private",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "66- private static methods of super class can be accessed from its subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "67- outer classes can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "68- inner classes can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "69- outer classes can't be static",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "70- inner classes can't be static",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "71- static initialization block can be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "72- instance initialization block can't be private",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "73- private members of super class inheriting to subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "74- private members are surviving in the inheritance",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "75- default scope also considered as a package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "76- default scoped members are allowed to use in the same package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "77- default scoped members are allowed to use in the other packages also",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "78- default scoped members are inheriting to the subclasses of same package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "79- default scoped members are inheriting to the subclasses of any package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "80- protected scoped members are allowed to use in the same package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "81- protected scoped members are allowed to use in the other packages also",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "82- protected and default both are one and the same in case of usage",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "83- protected scoped member can be inherited to every subclass including subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "84- protected scoped member can be inherited to subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "85- if protected member is inheriting to subclass of another package, then it should be used in the within that subclass by using subclass reference type",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "86- if protected member is inheriting to subclass of another package, then it should be used in the within that subclass by using super class reference type",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "87- if protected member is inheriting to subclass of another package, then it can be used in outside a subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "88- if protected member is inheriting to subclass of another package, then it should be used in the same subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "89- public scoped members are allowed to use only in the same package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "90- public scoped members are allowed to use in the other packages also",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "91- public and protected both are one and the same in case of usage",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "92- public scoped member can be inherited to every subclass including subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "93- public scoped member can be inherited to subclass of another package",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "94- if public member is inheriting to subclass of another package, then it should be used only in the within that subclass by using subclass reference type",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "95- if public member is inheriting to subclass of another package, then it should be used only in the within that subclass by using super class reference type",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "96- if public member is inheriting to subclass of another package, then it can be used in outside a subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "97- if public member is inheriting to subclass of another package, then it should be used only in the same subclass",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "98- only public classes can be used in another packages",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        },
        
        {
            question: "99- we can use one class in another class of the same package without import",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "a",
        },
        
        {
            question: "100- we can use another package class without import",
            code: "select the correct option",
            a: "true",
            b: "false",
            c: "not applicable",
            d: "none of above",
            correct: "b",
        }
        
    
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