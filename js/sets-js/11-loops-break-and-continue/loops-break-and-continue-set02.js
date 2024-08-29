const quizData = [
    {
        question: "31. what is the output",
        code: "class Z6 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 0; i <= 5; i++);\n        {\n            System.out.println(\"loop body stmt1:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "compile time error",
        b: "main begin",
        c: "run time error",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "32. what is the output",
        code: "class A \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++)\n        {\n            System.out.println(\"loop begin:\" + i);\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "compile time error",
        b: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nloop begin:10\nloop end:10\nmain end",
        c: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nmain end",
        d: "not applicable",
        correct: "b",
    },
    {
        question: "33. what is the output",
        code: "class B \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++)\n        {\n            System.out.println(\"loop begin:\" + i);\n            if(i == 7)\n            {\n                continue;\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "run time error",
        b: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nloop begin:10\nloop end:10\nmain end",
        c: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nmain end",
        d: "compile time error",
        correct: "b",
    },    
    {
        question: "34. what is the output",
        code: "class C {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"loop begin:\" + i);\n            if(i <= 4) {\n                continue;\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nloop begin:1\nloop begin:2\nloop begin:3\nloop begin:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nloop begin:10\nloop end:10\nmain end",
        b: "compile time error",
        c: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nmain end",
        d: "run time error",
        correct: "a",
    },
    
    {
        question: "35. what is the output",
        code: "class D {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"loop begin:\" + i);\n            if(i <= 4) {\n                continue;\n                System.out.println(\"if end\");\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "run time error",
        b: "main begin\nloop begin:1\nloop begin:2\nloop begin:3\nloop begin:4\nloop end:4\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nloop begin:10\nloop end:10\nmain end",
        c: "compile time error",
        d: "run time error",
        correct: "c",
    },
    
    {
        question: "36. what is the output",
        code: "class E {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"loop begin:\" + i);\n            if(i <= 4) {\n                System.out.println(\"if begin\");\n                continue;\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nloop begin:1\nif begin\nloop begin:2\nif begin\nloop begin:3\nif begin\nloop begin:4\nif begin\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nloop begin:10\nloop end:10\nmain end",
        b: "main begin\nloop begin:1\nif begin\nloop begin:2\nif begin\nloop begin:3\nif begin\nloop begin:4\nif begin\nloop begin:5\nloop end:5\nloop begin:6\nloop end:6\nloop begin:7\nloop end:7\nloop begin:8\nloop end:8\nloop begin:9\nloop end:9\nmain end",
        c: "compile time error",
        d: "run time error",
        correct: "a",
    },
    
    {
        question: "37. what is the output",
        code: "class F {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"loop begin:\" + i);\n            if(i == 4) {\n                System.out.println(\"if begin\");\n                break;\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "compile time error",
        b: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nif begin\nmain end",
        c: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nmain end",
        d: "run time error",
        correct: "b",
    },
    
    {
        question: "38. what is the output",
        code: "class G {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"outer loop begin:\" + i);\n            for(int j = 101; j <= 105; j++) {\n                System.out.println(\"inner loop begin:\" + i + \",\" + j);\n            }\n            System.out.println(\"outer loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nouter loop begin:1\ninner loop begin:1,101\ninner loop begin:1,102\ninner loop begin:1,103\ninner loop begin:1,104\ninner loop begin:1,105\nouter loop end:1\nouter loop begin:2\ninner loop begin:2,101\ninner loop begin:2,102\ninner loop begin:2,103\ninner loop begin:2,104\ninner loop begin:2,105\nouter loop end:2\nouter loop begin:3\ninner loop begin:3,101\ninner loop begin:3,102\ninner loop begin:3,103\ninner loop begin:3,104\ninner loop begin:3,105\nouter loop end:3\nouter loop begin:4\ninner loop begin:4,101\ninner loop begin:4,102\ninner loop begin:4,103\ninner loop begin:4,104\ninner loop begin:4,105\nouter loop end:4\nouter loop begin:5\ninner loop begin:5,101\ninner loop begin:5,102\ninner loop begin:5,103\ninner loop begin:5,104\ninner loop begin:5,105\nouter loop end:5\nouter loop begin:6\ninner loop begin:6,101\ninner loop begin:6,102\ninner loop begin:6,103\ninner loop begin:6,104\ninner loop begin:6,105\nouter loop end:6\nouter loop begin:7\ninner loop begin:7,101\ninner loop begin:7,102\ninner loop begin:7,103\ninner loop begin:7,104\ninner loop begin:7,105\nouter loop end:7\nouter loop begin:8\ninner loop begin:8,101\ninner loop begin:8,102\ninner loop begin:8,103\ninner loop begin:8,104\ninner loop begin:8,105\nouter loop end:8\nouter loop begin:9\ninner loop begin:9,101\ninner loop begin:9,102\ninner loop begin:9,103\ninner loop begin:9,104\ninner loop begin:9,105\nouter loop end:9\nouter loop begin:10\ninner loop begin:10,101\ninner loop begin:10,102\ninner loop begin:10,103\ninner loop begin:10,104\ninner loop begin:10,105\nouter loop end:10\nmain end",
        b: "main begin\nouter loop begin:1\ninner loop begin:1,101\ninner loop begin:1,102\ninner loop begin:1,103\ninner loop begin:1,104\ninner loop begin:1,105\nouter loop end:1\nouter loop begin:2\ninner loop begin:2,101\ninner loop begin:2,102\ninner loop begin:2,103\ninner loop begin:2,104\ninner loop begin:2,105\nouter loop end:2\nouter loop begin:3\ninner loop begin:3,101\ninner loop begin:3,102\ninner loop begin:3,103\ninner loop begin:3,104\ninner loop begin:3,105\nouter loop end:3\nouter loop begin:4\ninner loop begin:4,101\ninner loop begin:4,102\ninner loop begin:4,103\ninner loop begin:4,104\ninner loop begin:4,105\nouter loop end:4\nouter loop begin:5\ninner loop begin:5,101\ninner loop begin:5,102\ninner loop begin:5,103\ninner loop begin:5,104\ninner loop begin:5,105\nouter loop end:5\nouter loop begin:6\ninner loop begin:6,101\ninner loop begin:6,102\ninner loop begin:6,103\ninner loop begin:6,104\ninner loop begin:6,105\nouter loop end:6\nouter loop begin:7\ninner loop begin:7,101\ninner loop begin:7,102\ninner loop begin:7,103\ninner loop begin:7,104\ninner loop begin:7,105\nouter loop end:7\nouter loop begin:8\ninner loop begin:8,101\ninner loop begin:8,102\ninner loop begin:8,103\ninner loop begin:8,104\ninner loop begin:8,105\nouter loop end:8\nouter loop begin:9\ninner loop begin:9,101\ninner loop begin:9,102\ninner loop begin:9,103\ninner loop begin:9,104\ninner loop begin:9,105\nouter loop end:9\nouter loop begin:10\ninner loop begin:10,101\ninner loop begin:10,102\ninner loop begin:10,103\ninner loop begin:10,104\nouter loop end:10\nmain end",
        c: "compile time error",
        d: "run time error",
        correct: "a",
    },
    
    {
        question: "39. what is the output",
        code: "class H {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"loop begin:\" + i);\n            if(i == 4) {\n                System.out.println(\"if begin\");\n                break;continue;\n            }\n            System.out.println(\"loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "compile time error",
        b: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nif begin\nmain end",
        c: "main begin\nloop begin:1\nloop end:1\nloop begin:2\nloop end:2\nloop begin:3\nloop end:3\nloop begin:4\nif begin\nmain end",
        d: "run time error",
        correct: "a",
    },
    
    {
        question: "40. what is the output",
        code: "class I {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i++) {\n            System.out.println(\"outer loop begin:\" + i);\n            for(int j = 101; j <= 105; j++) {\n                System.out.println(\"inner loop begin:\" + i + \",\" + j);\n            }\n            System.out.println(\"outer loop end:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
        a: "main begin\nouter loop begin:1\ninner loop begin:1,101\ninner loop begin:1,102\ninner loop begin:1,103\ninner loop begin:1,104\ninner loop begin:1,105\nouter loop end:1\nouter loop begin:2\ninner loop begin:2,101\ninner loop begin:2,102\ninner loop begin:2,103\ninner loop begin:2,104\ninner loop begin:2,105\nouter loop end:2\nouter loop begin:3\ninner loop begin:3,101\ninner loop begin:3,102\ninner loop begin:3,103\ninner loop begin:3,104\ninner loop begin:3,105\nouter loop end:3\nouter loop begin:4\ninner loop begin:4,101\ninner loop begin:4,102\ninner loop begin:4,103\ninner loop begin:4,104\ninner loop begin:4,105\nouter loop end:4\nouter loop begin:5\ninner loop begin:5,101\ninner loop begin:5,102\ninner loop begin:5,103\ninner loop begin:5,104\ninner loop begin:5,105\nouter loop end:5\nouter loop begin:6\ninner loop begin:6,101\ninner loop begin:6,102\ninner loop begin:6,103\ninner loop begin:6,104\ninner loop begin:6,105\nouter loop end:6\nouter loop begin:7\ninner loop begin:7,101\ninner loop begin:7,102\ninner loop begin:7,103\ninner loop begin:7,104\ninner loop begin:7,105\nouter loop end:7\nouter loop begin:8\ninner loop begin:8,101\ninner loop begin:8,102\ninner loop begin:8,103\ninner loop begin:8,104\ninner loop begin:8,105\nouter loop end:8\nouter loop begin:9\ninner loop begin:9,101\ninner loop begin:9,102\ninner loop begin:9,103\ninner loop begin:9,104\ninner loop begin:9,105\nouter loop end:9\nouter loop begin:10\ninner loop begin:10,101\ninner loop begin:10,102\ninner loop begin:10,103\ninner loop begin:10,104\ninner loop begin:10,105\nouter loop end:10\nmain end",
        b: "main begin\nouter loop begin:1\ninner loop begin:1,101\ninner loop begin:1,102\ninner loop begin:1,103\ninner loop begin:1,104\ninner loop begin:1,105\nouter loop end:1\nouter loop begin:2\ninner loop begin:2,101\ninner loop begin:2,102\ninner loop begin:2,103\ninner loop begin:2,104\ninner loop begin:2,105\nouter loop end:2\nouter loop begin:3\ninner loop begin:3,101\ninner loop begin:3,102\ninner loop begin:3,103\ninner loop begin:3,104\ninner loop begin:3,105\nouter loop end:3\nouter loop begin:4\ninner loop begin:4,101\ninner loop begin:4,102\ninner loop begin:4,103\ninner loop begin:4,104\ninner loop begin:4,105\nouter loop end:4\nouter loop begin:5\ninner loop begin:5,101\ninner loop begin:5,102\ninner loop begin:5,103\ninner loop begin:5,104\ninner loop begin:5,105\nouter loop end:5\nouter loop begin:6\ninner loop begin:6,101\ninner loop begin:6,102\ninner loop begin:6,103\ninner loop begin:6,104\ninner loop begin:6,105\nouter loop end:6\nouter loop begin:7\ninner loop begin:7,101\ninner loop begin:7,102\ninner loop begin:7,103\ninner loop begin:7,104\ninner loop begin:7,105\nouter loop end:7\nouter loop begin:8\ninner loop begin:8,101\ninner loop begin:8,102\ninner loop begin:8,103\ninner loop begin:8,104\ninner loop begin:8,105\nouter loop end:8\nouter loop begin:9\ninner loop begin:9,101\ninner loop begin:9,102\ninner loop begin:9,103\ninner loop begin:9,104\ninner loop begin:9,105\nouter loop end:9\nouter loop begin:10\ninner loop begin:10,101\ninner loop begin:10,102\ninner loop begin:10,103\ninner loop begin:10,104\ninner loop begin:10,105\nouter loop end:10\nmain end",
        c: "compile time error",
        d: "run time error",
        correct: "a",
    },
        {
            "question": "41. What will be the output of the following Java program?",
            "code": "class I\n{\n    public static void main(String[] args)\n    {\n        boolean flag = !(!(!false != !true)); \n        if(flag)\n        {\n            System.out.println(\"from if\");\n        }\n        System.out.println(\"end of main\");\n    }\n}",
            "a": "from if<br>end of main",
            "b": "end of main",
            "c": "Compilation error",
            "d": "Runtime error",
            "correct": "b",
        },
        {
            "question": "42. What will be the output of the following code snippet?",
            "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n}",
            "a": "1 2 3 4 5",
            "b": "5 4 3 2 1",
            "c": "1 1 1 1 1",
            "d": "2 3 4 5 6",
            "correct": "a",
        },
        {
            "question": "43. How many times will the loop execute in the following code?",
            "code": "for (int i = 10; i > 0; i -= 2) {\n    System.out.print(i + \" \");\n}",
            "a": "4 times",
            "b": "5 times",
            "c": "6 times",
            "d": "7 times",
            "correct": "b",
        },
        {
            "question": "44. What is the output of the following code?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    sum += i;\n}\nSystem.out.println(\"Sum: \" + sum);",
            "a": "Sum: 55",
            "b": "Sum: 45",
            "c": "Sum: 50",
            "d": "Sum: 60",
            "correct": "a",
        },
        {
            "question": "45. Which loop construct is used when you want to execute the loop body at least once?",
            "code": "",
            "a": "while loop",
            "b": "do-while loop",
            "c": "for loop",
            "d": "repeat-until loop",
            "correct": "b",
        },
        {
            "question": "46. What will be the output of the following code snippet?",
            "code": "for (int i = 0; i < 5; ++i) {\n    System.out.print(i + \" \");\n    if (i == 2) {\n        break;\n    }\n}",
            "a": "0 1 2",
            "b": "0 1 2 3 4",
            "c": "0 1",
            "d": "0 1 2 2",
            "correct": "a",
        },
        {
            "question": "47. Which of the following code snippets will print the even numbers between 1 and 10?",
            "code": "",
            "a": "for (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n        System.out.print(i + \" \");\n    }\n}",
            "b": "for (int i = 2; i <= 10; i += 2) {\n    System.out.print(i + \" \");\n}",
            "c": "for (int i = 1; i < 10; i++) {\n    if (i % 2 == 0) {\n        System.out.print(i + \" \");\n    }\n}",
            "d": "for (int i = 1; i <= 10; i++) {\n    System.out.print(i * 2 + \" \");\n}",
            "correct": "b",
        },
        {
            "question": "48. What will be the output of the following code?",
            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.print(i + \"-\" + j + \" \");\n    }\n}",
            "a": "0-0 0-1 1-0 1-1 2-0 2-1",
            "b": "0-0 1-0 2-0 0-1 1-1 2-1",
            "c": "0-0 0-1 2-0 2-1",
            "d": "0-0 1-0 0-1 1-1 2-0 2-1",
            "correct": "a",
        },
        {
            "question": "49. What will be the output of the following code?",
            "code": "int n = 4;\nfor (int i = 0; i < n; i++) {\n    for (int j = 0; j < n - i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
            "a": "* * * * \n* * * \n* * \n*",
            "b": "* * * \n* * \n*\n",
            "c": "* * * * \n* * * * \n* * * * \n* * * *",
            "d": "* * * * * * * *",
            "correct": "a",
        },
        {
            "question": "50. Which loop construct is best suited for iterating through elements of an array or collection?",
            "code": "",
            "a": "while loop",
            "b": "do-while loop",
            "c": "for loop",
            "d": "enhanced for loop (for-each loop)",
            "correct": "d",
        },
        {
            "question": "51. What is the output of the following code?",
            "code": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n    i += 1;\n}",
            "a": "0 1 2 3 4",
            "b": "1 3",
            "c": "0 2 4",
            "d": "0 1 2 3 4 5",
            "correct": "c",
        },
        {
            "question": "52. What will be the value of `x` after the following code snippet?",
            "code": "int x = 10;\nfor (int i = 0; i < 5; i++) {\n    x += i;\n}",
            "a": "10",
            "b": "15",
            "c": "25",
            "d": "20",
            "correct": "c",
        },
        {
            "question": "53. Which of the following loops will execute at least once?",
            "code": "",
            "a": "for loop",
            "b": "while loop",
            "c": "do-while loop",
            "d": "enhanced for loop",
            "correct": "c",
        },
        {
            "question": "54. What is the output of the following code?",
            "code": "int x = 5;\nfor (int i = 0; i < 3; i++) {\n    x += 2;\n}\nSystem.out.println(x);",
            "a": "7",
            "b": "11",
            "c": "10",
            "d": "5",
            "correct": "b",
        },
        {
            "question": "55. How many times will the inner loop execute in the following code?",
            "code": "for (int i = 1; i <= 5; i++) {\n    for (int j = 1; j <= 3; j++) {\n        System.out.print(i * j + \" \");\n    }\n}",
            "a": "5 times",
            "b": "3 times",
            "c": "15 times",
            "d": "8 times",
            "correct": "c",
        },
        {
            "question": "56. What will be the output of the following code?",
            "code": "int x = 0;\nfor (int i = 0; i < 5; i++) {\n    x += i;\n    if (x == 5) {\n        break;\n    }\n}\nSystem.out.println(x);",
            "a": "5",
            "b": "10",
            "c": "6",
            "d": "4",
            "correct": "a",
        },
        {
            "question": "57. What does the following code print?",
            "code": "for (int i = 1; i <= 3; i++) {\n    for (int j = 3; j >= 1; j--) {\n        System.out.print(i + j + \" \");\n    }\n    System.out.println();\n}",
            "a": "2 3 4 \n 3 4 5 \n 4 5 6",
            "b": "4 4 4 \n 4 4 4 \n 4 4 4",
            "c": "1 1 1 \n 2 2 2 \n 3 3 3",
            "d": "6 6 6 \n 6 6 6 \n 6 6 6",
            "correct": "a",
        },
        {
            "question": "58. What is the output of the following code?",
            "code": "for (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n    }\n    System.out.print(i + \" \");\n}",
            "a": "1 2 3 4 5",
            "b": "1 3 5",
            "c": "2 4",
            "d": "1 4",
            "correct": "a",
        },
        {
            "question": "59. What will be the value of `sum` after the following code snippet?",
            "code": "int sum = 0;\nfor (int i = 1; i <= 4; i++) {\n    sum += i * i;\n}",
            "a": "10",
            "b": "20",
            "c": "30",
            "d": "1",
            "correct": "b",
        },
        {
            "question": "60. Which of the following statements is true about a `do-while` loop?",
            "code": "",
            "a": "The loop body always executes at least once.",
            "b": "It is also known as a pre-test loop.",
            "c": "The loop condition is checked at the end of each iteration.",
            "d": "It is not a valid loop construct in Java.",
            "correct": "a",
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