const quizData = [
    
        {
            question: "1. what is the output",
            code: "class A \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
            a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nmain end",
            b: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",
            c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",
                d: "none of the above",
            correct: "b",
        },
        {
            question: "2. what is the output",
            code: "class B \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n}",
            a: "main begin\nmain end",
            b: "main begin\nloop body:10\nloop body:11\nloop body:12\nloop body:13\nmain end",
             c: "main begin\nmain end",
            correct: "a",
        },
        {
            question: "3. what is the output",
            code: "class C \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n            System.out.println(\"loop body:\" + i);\n            int j = 20;\n            j++;\n            j += 20;\n            System.out.println(\"--------------:\" + j);\n        }\n        System.out.println(\"main end\");\n    }\n}",
            a: "main begin\nloop body:1\nloop body:1\n--------------:41\nloop body:2\nloop body:2\n--------------:41\nloop body:3\nloop body:3\n--------------:41\nloop body:4\nloop body:4\n--------------:41\nloop body:5\nloop body:5\n--------------:41\nmain end",
            b: "main begin\nloop body:1\nloop body:1\n--------------:41\nloop body:2\nloop body:2\n--------------:41\nloop body:3\nloop body:3\n--------------:41\nloop body:4\nloop body:4\n--------------:41\nloop body:5\nloop body:5\n--------------:41\nmain end",
            c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end",
    
                d: "none of the above",
            correct: "a",
        },
        {
            question: "4. what is the output",
            code: "class D \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 5; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "runtime error",
            b: "compile time error",
            c: "error",
                d: "none of the above",
            correct: "b",
        },
        {
           question: "5. what is the output",
            code: "class E \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 10; i = i + 2)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "compile time error",
            b: "main begin\nloop body:1\nloop body:3\nloop body:5\nloop body:7\nloop body:9\nmain end:",
            c: "error",
                d: "none of the above",
            correct: "b",
        },
        {
            question: "6. what is the output",
            code: "class G \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i--)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "run time error",
            b: "main begin\nloop body:1\nloop body:3\nloop body:5\nloop body:7\nloop body:9\nmain end:",
            c: "main begin\nloop body:10\nloop body:9\nloop body:8\nloop body:7\nloop body:6\nloop body:5\nloop body:4\nloop body:3\nloop body:2\nloop body:1\nmain end:",
    
                d: "none of the above",
            correct: "c",
        },
        {
            question: "7. what is the output",
            code: "class H \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i = i - 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "compile time error",
            b: "main begin\nloop body:10\nloop body:7\nloop body:4\nloop body:1\nmain end:",
            c: "main begin\nloop body:10\nloop body:7\nloop body:4\nmain end:",
            
                d: "none of the above",
            "correct": "b",
        },
        {
            question: "8. what is the output",
            code: "class I \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 10; i >= 1; i -= 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "main begin\nloop body:10\nloop body:7\nloop body:4\nloop body:1\nmain end:",
            b: "main begin\nloop body:10\nloop body:7\nloop body:1\nmain end:",
            c: "main begin\nmain end:",
            correct: "b",
        },
        {
            question: "9. what is the output",
            code: "class J \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 50; i = i * 5)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "main begin\nloop body:1\nloop body:5\nloop body:25\nmain end:",
            b: "main begin\nloop body:1\nloop body:5\nmain end:",
            c: "main begin\nloop body:25\nmain end:",
            correct: "a",
        },
        {
            question: "10. what is the output",
            code: "class K \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1; i <= 500; i *= 3)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nloop body:81\nloop body:243\nmain end:",
            b: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nloop body:81\nmain end:",
            c: "main begin\nloop body:1\nloop body:3\nloop body:9\nloop body:27\nmain end:",
            correct: "a",
        },
        {
            question: "11. what is the output",
            code: "class L \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 5000; i > 0; i = i / 10)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\");\n    }\n}",
            a: "main begin\nloop body:5000\nloop body:500\nloop body:50\nloop body:5\nmain end:",
            b: "main begin\nloop body:5000\nloop body:500\nloop body:50\nmain end:",
            c: "main begin\nloop body:5000\nloop body:500\nloop body:50\nloop body:5\nloop body:0\nmain end:",
            correct: "a",
        },
        {
            question: "12. what is the output",
            code: "class M \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(; i <= 3; i++)\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nloop body:0\nloop body:1\nloop body:2\nloop body:3\nmain end:4",
            b: "main begin\nloop body:0\nloop body:1\nloop body:2\nloop body:3\nmain end:3",
            c: "compile time error",
            correct: "a",
        },
        {
            question: "13. what is the output",
            code: "class N \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j <= 2; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nmain end:2",
            b: "main begin\nmain end:3",
            c: "error",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "14. what is the output",
            code: "class O \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j < 3; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nmain end:2",
            b: "main begin\nmain end:3",
            c: "error",
            d: "none of the above",
            correct: "b",
        },
        {
            "question": "15. what is the output",
            "code": "class P \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 0;\n        for(int j = 0; j <= 3; j++)\n        {\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
            a: "main begin\nmain end:3",
            b: "main begin\nmain end:4",
            c: "error",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "16. what is the output",
            code: "class Q \n{\n    static int i = 10;\n    static int j = 20;\n    static int k;\n    static int m = 30;\n    public static void main(String[] args) \n    {\n        System.out.println(i + \", \" + j + \", \" + k + \", \" + m);\n    }\n}",
            a: "10,\n20,\n0,\n30",
            b: "10, 20, k, 30",
            c: "10, 20, 0, 30",
            d: "Compile Time Error",
            correct: "c",
        },
        
            {
                question: "17. what is the output",
                code: "class R \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; i <= 5; )\n        {\n            System.out.println(\"loop body:\" + i ++);\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
                a: "run time error",
                b: "compile time error",
                c: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
                d: "not applicable",
                correct: "c",
            },
            {
                question: "18. what is the output",
                code: "class S \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; i <= 5; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
                a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
                b: "main begin\nmain end:6",
                c: "compile time error",
                d: "not applicable",
                correct: "a",
            },
            {
                question: "19. what is the output",
                code: "class T \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; ; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n        System.out.println(\"main end:\" + i);\n    }\n}",
                a: "main begin\nloop body:1\nloop body:2\nloop body:3\nloop body:4\nloop body:5\nmain end:6",
                b: "run time error",
                c: "compile time error",
                d: "not applicable",
                correct: "b",
            },
            {
                question: "20. what is the output",
                code: "class U \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i = 1;\n        for( ; ; )\n        {\n            System.out.println(\"loop body:\" + i);\n            i++;\n        }\n    }\n}",
                a: "compile time error",
                b: "infinite loop",
                c: "mainbegin",
                d: "run time error",
                correct: "b",
            },
            {
                question: "21. what is the output",
                code: "class V \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 10; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
                a: "infinite loop",
                b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47",
                c: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:10, 47",
                d: "compile time error",
                correct: "b",
            },
            {
                question: "22. what is the output",
                code: "class W \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
                a: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
                b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
                c: "infinite loop",
                d: "compile time error",
                correct: "a",
            },
            {
                question: "23. what is the output",
                code: "class X \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 20 || j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
                a: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59\nloop body:15, 62\nloop body:16, 65\nloop body:17, 68\nloop body:18, 71\nloop body:19, 74\nloop body:20, 77",
                b: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56",
                c: "compile time error",
            
                d: "none of the above",
                correct: "a",
            },
            {
                question: "24. what is the output",
                code: "class Y \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 1, j = 20 ; i <= 20 && j <= 60; i++, j += 3)\n        {\n            System.out.println(\"loop body:\" + i + \", \" + j);\n        }\n    }\n}",
                a: "infinite loop",
                b: "compile time error",
                c: "main begin\nloop body:1, 20\nloop body:2, 23\nloop body:3, 26\nloop body:4, 29\nloop body:5, 32\nloop body:6, 35\nloop body:7, 38\nloop body:8, 41\nloop body:9, 44\nloop body:10, 47\nloop body:11, 50\nloop body:12, 53\nloop body:13, 56\nloop body:14, 59",
                d: "none of the above",
                correct: "c",
            },
            {
                question: "25. what is the output",
                code: "class Z \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 1, System.out.println(\"init\"); \n        test(i); \n        System.out.println(\"before change:\" + i), i++, System.out.println(\"after change:\" + i))\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n\n    static boolean test(int i)\n    {\n        boolean flag = (i <= 5);\n        System.out.println(\"boolean status for \" + i + \" is \" + flag);\n        return flag;\n    }\n}",
                a: "run time error",
                b: "compile time error",
                c: "main begin\ninit\nboolean status for 1 is true\nloop body:1\nbefore change:1\nafter change:2\nboolean status for 2 is true\nloop body:2\nbefore change:2\nafter change:3\nboolean status for 3 is true\nloop body:3\nbefore change:3\nafter change:4\nboolean status for 4 is true\nloop body:4\nbefore change:4\nafter change:5\nboolean status for 5 is true\nloop body:5\nbefore change:5\nafter change:6\nboolean status for 6 is false\nmain end",
                d: "main begin\ninit\nboolean status for 1 is true\nloop body:1\nbefore change:1\nafter change:2\nboolean status for 2 is true\nloop body:2\nbefore change:2\nafter change:3\nboolean status for 3 is true\nloop body:3\nbefore change:3\nafter change:4\nboolean status for 4 is true\nloop body:4\nbefore change:4\nafter change:5\nboolean status for 5 is true\nloop body:5\nbefore change:5\nafter change:6\nboolean status for 6 is true\nmain end",
                correct: "c",
            },
            {
                question: "26. what is the output",
                code: "class Z1 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        //int m = 1, n = 10, o, p = 30, q, r = 40;\n        for(int i = 1, System.out.println(\"init\"); \n        test(i); \n        System.out.println(\"before change:\" + i), i++, System.out.println(\"after change:\" + i))\n        {\n            System.out.println(\"loop body:\" + i);\n        }\n        System.out.println(\"main end\");\n    }\n\n    static boolean test(int i)\n    {\n        boolean flag = (i <= 5);\n        System.out.println(\"boolean status for \" + i + \" is \" + flag);\n        return flag;\n    }\n}",
                a: "compile time error",
                b: "run time error",
                c: "error",
                d: "none of the above",
                correct: "a",
            },
            {
                question: "27. what is the output",
                code: "class Z2 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 0; i <= 5; i++)\n        System.out.println(\"loop body:\" + i);\n        System.out.println(\"loop body:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
                a: "run time error",
                b: "compile time error",
                c: "0",
                d: "5",
                correct: "d",
            },
            {
                question: "28. what is the output",
                code: "class Z3 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 0; i <= 5; i++)\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"loop body stmt2:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
                a: "main begin\nloop body stmt1:0\nloop body stmt1:1\nloop body stmt1:2\nloop body stmt1:3\nloop body stmt1:4\nloop body stmt1:5\nloop body stmt2:6\nmain end",
                b: "compile time error",
                c: "run time error",
                d: "mainbegin\nloop body stmt1:0\nloop body stmt1:1\nloop body stmt1:2\nloop body stmt1:3\nloop body stmt1:4\nloop body stmt1:5\nmain end",
                correct: "a",
            },
            {
                question: "29. what is the output",
                code: "class Z4 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        int i;\n        for(i = 0; i <= 5; i++);\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"loop body stmt2:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
                a: "compile time error",
                b: "run time error",
                c: "main begin\nmain end",
                d: "mainbegin\nloop body stmt1:6\nloop body stmt2:6\nmain end",
                correct: "d",
            },
            {
                question: "30. what is the output",
                code: "class Z5 \n{\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        for(int i = 0; i <= 5; i++);\n        System.out.println(\"loop body stmt1:\" + i);\n        System.out.println(\"main end\");\n    }\n}",
                a: "runtime error",
                b: "compile time error",
                c: "error",
                d: "none of the above",
                correct: "b",
            },
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
                {
                    "question": "61. What will be the output of the following code?",
                    "code": "int x = 5;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n}\nSystem.out.print(x);",
                    "a": "5",
                    "b": "11",
                    "c": "10",
                    "d": "6",
                    "correct": "b",
                },
                {
                    "question": "62. What is the purpose of the initialization expression in a `for` loop?",
                    "code": "",
                    "a": "It defines the loop condition.",
                    "b": "It specifies the loop body.",
                    "c": "It sets the initial value of the loop control variable.",
                    "d": "It determines the number of loop iterations.",
                    "correct": "c",
                },
                {
                    "question": "63. What will be the output of the following code?",
                    "code": "int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    if (i % 2 == 0) {\n    }\n    sum += i;\n}\nSystem.out.print(sum);",
                    "a": "30",
                    "b": "25",
                    "c": "20",
                    "d": "15",
                    "correct": "a",
                },
                {
                    "question": "64. What does the following code print?",
                    "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 3; j > 0; j--) {\n        System.out.print(i + j + \" \");\n    }\n    System.out.println();\n}",
                    "a": "2 3 4 \n 1 2 3 \n 0 1 2",
                    "b": "3 2 1 \n 3 2 1 \n 3 2 1",
                    "c": "3 3 3 \n 2 2 2 \n 1 1 1",
                    "d": "3 4 5 \n 2 3 4 \n 1 2 3",
                    "correct": "d",
                },
                {
                    "question": "65. What will be the output of the following code?",
                    "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0 <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                    "a": "* \n* * \n* * * \n* * * *",
                    "b": "* \n* * \n* * * \n* * * * *",
                    "c": "* * * * \n* * * \n* * \n*",
                    "d": "* * * * \n* * * \n* * \n*",
                    "correct": "a",
                },
                {
                    "question": "66. What will be the output of the following code?",
                    "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                    "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
                    "b": "1 1 \n2 2 2 \n3 3 3 3 \n4 4 4 4 4",
                    "c": "1 \n2 2 \n3 3 3 \n4 4 4 4",
                    "d": "1 2 3 4 \n1 2 3 \n1 2 \n1",
                    "correct": "a",
                },
                
                    {
                        "question": "67. What is the output of the following code?",
                        "code": "int x = 10;\nfor (int i = 1; i <= 4; i++) {\n    x -= i;\n}\nSystem.out.print(x);",
                        "a": "5",
                        "b": "0",
                        "c": "-5",
                        "d": "-10",
                        "correct": "a",
                    },
                    {
                        "question": "68. What will be the output of the following code?",
                        "code": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n    i += 1;\n}",
                        "a": "0 1 2 3 4",
                        "b": "1 3",
                        "c": "0 2 4",
                        "d": "0 1 2 3 4 5",
                        "correct": "c",
                    },
                    {
                        "question": "69. What is the purpose of the termination condition in a `for` loop?",
                        "code": "",
                        "a": "It specifies the loop body.",
                        "b": "It sets the initial value of the loop control variable.",
                        "c": "It defines the loop condition.",
                        "d": "It determines the number of loop iterations.",
                        "correct": "c",
                    },
                    {
                        "question": "70. What will be the output of the following code?",
                        "code": "for (int i = 0; i < 3; i++) {\n    System.out.print(i);\n    if (i == 1) {\n        break;\n    }\n}",
                        "a": "0 1 2",
                        "b": "0 1",
                        "c": "1",
                        "d": "0",
                        "correct": "b",
                    },
                    {
                        "question": "71. What does the following code print?",
                        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 4; j > i; j--) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                        "a": "* * * * \n* * * \n* * \n*",
                        "b": "* \n* * \n* * * \n* * * *",
                        "c": "* * * * \n* * * \n* * \n*",
                        "d": "* * * * \n* * * * \n* * * \n* *",
                        "correct": "a",
                    },
                    {
                        "question": "72. What will be the value of `sum` after the following code snippet?",
                        "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i;\n}",
                        "a": "20",
                        "b": "25",
                        "c": "30",
                        "d": "15",
                        "correct": "c",
                    },
                    {
                        "question": "73. What will be the output of the following code?",
                        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
                        "b": "5 \n4 3 \n3 2 1 \n2 1 \n1",
                        "c": "1 \n2 2 \n3 3 3 \n4 4 4 4",
                        "d": "5 4 3 2 1 \n4 3 2 1 \n3 2 1 \n2 1",
                        "correct": "a",
                    },
                    {
                        "question": "74. What is the output of the following code?",
                        "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    sum += i * i;\n}\nSystem.out.print(sum);",
                        "a": "10",
                        "b": "20",
                        "c": "30",
                        "d": "55",
                        "correct": "d",
                    },
                    {
                        "question": "75. What will be the output of the following code?",
                        "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j < 2; j++) {\n        System.out.print(i + \"-\" + j + \" \");\n    }\n}",
                        "a": "0-0 0-1 1-0 1-1 2-0 2-1",
                        "b": "0-0 1-0 2-0 0-1 1-1 2-1",
                        "c": "0-0 0-1 2-0 2-1",
                        "d": "0-0 1-0 0-1 1-1 2-0 2-1",
                        "correct": "a",
                    },
                    {
                        "question": "76. What is the output of the following code?",
                        "code": "int x = 1;\nfor (int i = 1; i <= 4; i++) {\n    x *= i;\n}\nSystem.out.print(x);",
                        "a": "1",
                        "b": "4",
                        "c": "12",
                        "d": "24",
                        "correct": "d",
                    },
                    {
                        "question": "77. What will be the output of the following code?",
                        "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n    i++;\n}",
                        "a": "1 2 3 4 5",
                        "b": "1 3 5",
                        "c": "2 4",
                        "d": "1 4",
                        "correct": "b",
                    },
                    {
                        "question": "78. What is the purpose of the increment expression in a `for` loop?",
                        "code": "select the correct Option",
                        "a": "It specifies the loop body.",
                        "b": "It sets the initial value of the loop control variable.",
                        "c": "It defines the loop condition.",
                        "d": "It updates the loop control variable after each iteration.",
                        "correct": "d",
                    },
                    {
                        "question": "79. What will be the output of the following code?",
                        "code": "int x = 10;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
                        "a": "15",
                        "b": "12",
                        "c": "18",
                        "d": "13",
                        "correct": "a",
                    },
                    {
                        "question": "80. What does the following code print?",
                        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "0 \\n 0 1 \\n 0 1 2 \\n 0 1 2 3",
                        "b": "0 1 2 3 \\n 0 1 2 \\n 0 1 \\n 0",
                        "c": "0 \\n 1 2 \\n 2 3 4 \\n 3 4 5 6",
                        "d": "0 1 2 3 \\n 0 1 2 \\n 0 1 \\n 0",
                        "correct": "a",
                    },
                    {
                        "question": "81. What will be the output of the following code?",
                        "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 1) {\n    }\n    sum += i;\n}\nSystem.out.print(sum);",
                        "a": "4",
                        "b": "6",
                        "c": "10",
                        "d": "5",
                        "correct": "c",
                    },
                    {
                        "question": "82. What is the output of the following code?",
                        "code": "for (int i = 0; i < 5; i++) {\n    for (int j = i; j >= 0; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "0 0 0 0 0 \\n 1 1 1 1 \\n 2 2 2 \\n 3 3 \\n 4",
                        "b": "0 0 0 0 0 \\n 1 1 1 1 \\n 2 2 2 \\n 3 3 \\n 4 4",
                        "c": "0 \\n 1 0 \\n 2 1 0 \\n 3 2 1 0 \\n 4 3 2 1 0",
                        "d": "0 \\n 1 1 \\n 2 2 2 \\n 3 3 3 3 \\n 4 4 4 4 4",
                        "correct": "c",
                    },
                    {
                        "question": "83. What will be the output of the following code?",
                        "code": "int x = 5;\nfor (int i = 0; i < 4; i++) {\n    x -= i;\n}\nSystem.out.print(x);",
                        "a": "5",
                        "b": "2",
                        "c": "8",
                        "d": "10",
                        "correct": "b",
                    },
                    {
                        "question": "84. What does the following code print?",
                        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j < 4 - i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                        "a": "* * * * \\n * * * \\n * * \\n * \\n",
                        "b": "* \\n * * \\n * * * \\n * * * *",
                        "c": "* * * * \\n * * * \\n * * \\n *",
                        "d": "* \\n * * \\n * * * \\n * * * *",
                        "correct": "a",
                    },
                    {
                        "question": "85. What will be the output of the following code?",
                        "code": "for (int i = 2; i <= 6; i += 2) {\n    System.out.print(i + \" \");\n}",
                        "a": "2 4 6 8 10",
                        "b": "2 4 6",
                        "c": "4 6 8",
                        "d": "2 4 6 8",
                        "correct": "b",
                    },
                    {
                        "question": "86. What is the output of the following code?",
                        "code": "int x = 0;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    if (x == 3) {\n        break;\n    }\n}\nSystem.out.print(x);",
                        "a": "3",
                        "b": "1",
                        "c": "2",
                        "d": "0",
                        "correct": "a",
                    },
                    
                    {
                        "question": "87. What will be the output of the following code?",
                        "code": "int x = 5;\nfor (int i = 1; i <= 4; i++) {\n    x *= i;\n}\nSystem.out.print(x);",
                        "a": "25",
                        "b": "120",
                        "c": "30",
                        "d": "24",
                        "correct": "b"
                    },
                    {
                        "question": "88. What is the purpose of the loop control variable in a `for` loop?",
                        "code": "",
                        "a": "It defines the loop condition.",
                        "b": "It sets the initial value of the loop control variable.",
                        "c": "It specifies the loop body.",
                        "d": "It updates the loop control variable after each iteration.",
                        "correct": "d"
                    },
                    {
                        "question": "89. What will be the output of the following code?",
                        "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n    i--;\n}",
                        "a": "1 2 3 4 5",
                        "b": "1 3 5",
                        "c": "2 4",
                        "d": "1 4",
                        "correct": "b"
                    },
                    {
                        "question": "90. What does the following code print?",
                        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                        "a": "* \n* * \n* * * \n* * * *",
                        "b": "* * * * \n* * * \n* * \n*",
                        "c": "* * * * \n* * * \n* * \n*",
                        "d": "* \n* * \n* * * \n* * * *",
                        "correct": "a"
                    },
                    {
                        "question": "91. What will be the output of the following code?",
                        "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i;\n    }\n}\nSystem.out.print(sum);",
                        "a": "4",
                        "b": "6",
                        "c": "10",
                        "d": "5",
                        "correct": "b"
                    },
                    {
                        "question": "92. What is the output of the following code?",
                        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 4; j >= i; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "4 4 4 4 \n4 4 4 \n4 4 \n4",
                        "b": "1 2 3 4 \n1 2 3 \n1 2 \n1",
                        "c": "1 2 3 4 \n2 3 4 \n3 4 \n4",
                        "d": "4 3 2 1 \n4 3 2 \n4 3 \n4",
                        "correct": "d"
                    },
                    {
                        "question": "93. What will be the output of the following code?",
                        "code": "int x = 1;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
                        "a": "1",
                        "b": "2",
                        "c": "3",
                        "d": "4",
                        "correct": "d"
                    },
                    {
                        "question": "94. What does the following code print?",
                        "code": "for (int i = 4; i > 0; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "1 \n1 2 \n1 2 3 \n1 2 3 4",
                        "b": "4 \n3 2 \n2 1 \n1",
                        "c": "4 3 2 1 \n3 2 1 \n2 1 \n1",
                        "d": "1 2 3 4 \n1 2 3 \n1 2 \n1",
                        "correct": "c"
                    },
                    {
                        "question": "95. What will be the output of the following code?",
                        "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(i + \" \");\n    }\n    System.out.println();\n}",
                        "a": "1 \n2 2 \n3 3 3 \n4 4 4 4",
                        "b": "1 \n1 2 \n1 2 3 \n1 2 3 4",
                        "c": "1 1 1 1 \n2 2 2 \n3 3 \n4",
                        "d": "1 \n2 2 \n3 3 3 \n4 4 4",
                        "correct": "a"
                    },
                    {
                        "question": "96. What is the output of the following code?",
                        "code": "int x = 10;\nfor (int i = 1; i <= 4; i++) {\n    x -= i;\n    i++;\n}\nSystem.out.print(x);",
                        "a": "5",
                        "b": "10",
                        "c": "6",
                        "d": "8",
                        "correct": "d"
                    },
                    {
                        "question": "97. What will be the output of the following code?",
                        "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i;\n}\nSystem.out.print(sum);",
                        "a": "20",
                        "b": "25",
                        "c": "30",
                        "d": "1",
                        "correct": "c"
                    },
                    {
                        "question": "98. What is the purpose of the termination condition in a `for` loop?",
                        "code": "",
                        "a": "It specifies the loop body.",
                        "b": "It sets the initial value of the loop control variable.",
                        "c": "It defines the loop condition.",
                        "d": "It determines the number of loop iterations.",
                        "correct": "c"
                    },
                    {
                        "question": "99. What will be the output of the following code?",
                        "code": "for (int i = 0; i < 4; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                        "a": "* \n* * \n* * * \n* * * *",
                        "b": "* * * * \n* * * \n* * \n*",
                        "c": "* * * * \n* * * \n* * \n*",
                        "d": "* \n* * \n* * * \n* * * *",
                        "correct": "a"
                    },
                    {
                        "question": "100. What does the following code print?",
                        "code": "int x = 0;\nfor (int i = 1; i <= 5; i++) {\n    x += i;\n    if (x == 6) {\n        break;\n    }\n}\nSystem.out.print(x);",
                        "a": "6",
                        "b": "1",
                        "c": "2",
                        "d": "5",
                        "correct": "a"
                    },
                    {
                        "question": "101. What will be the output of the following code?",
                        "code": "for (int i = 0; i < 5; i++) {\n    for (int j = 4; j >= i; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                        "a": "4 4 4 4 4 \n3 3 3 3 \n2 2 2 \n1 1 \n0",
                        "b": "0 1 2 3 4 \n0 1 2 3 \n0 1 2 \n0 1 \n0",
                        "c": "4 3 2 1 0 \n4 3 2 1 \n4 3 2 \n4 3 \n4",
                        "d": "4"
                    },
                    
                        {
                            "question": "102. What will be the output of the following code?",
                            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i * i;\n    }\n}\nSystem.out.print(sum);",
                            "a": "20",
                            "b": "6",
                            "c": "14",
                            "d": "30",
                            "correct": "c"
                        },
                        {
                            "question": "103. What is the output of the following code?",
                            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "1 \n 2 2 \n 3 3 3 \n 4 4 4 4",
                            "b": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
                            "c": "1 1 1 1 \n 2 2 2 \n 3 3 \n 4",
                            "d": "1 \n 2 2 \n 3 3 3 \n 4 4 4",
                            "correct": "b"
                        },
                        {
                            "question": "104. What will be the output of the following code?",
                            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = i; j >= 0; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "0 \n 0 1 \n 0 1 2",
                            "b": "0 \n 1 0 \n 2 1 0",
                            "c": "0 1 2 \n 0 1 \n 0",
                            "d": "0 1 2 \n 1 0 \n 2 1 0",
                            "correct": "a"
                        },
                        {
                            "question": "105. What is the output of the following code?",
                            "code": "int x = 1;\nfor (int i = 0; i < 3; i++) {\n    x += i;\n    i++;\n}\nSystem.out.print(x);",
                            "a": "1",
                            "b": "2",
                            "c": "3",
                            "d": "4",
                            "correct": "d"
                        },
                        {
                            "question": "106. What does the following code print?",
                            "code": "for (int i = 4; i > 0; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
                            "b": "4 \n 3 2 \n 2 1 \n 1",
                            "c": "1 2 3 4 \n 2 3 4 \n 3 4 \n 4",
                            "d": "4 3 2 1 \n 4 3 2 \n 4 3 \n 4",
                            "correct": "b"
                        },
                        {
                            "question": "107. What will be the output of the following code?",
                            "code": "for (int i = 1; i <= 5; i++) {\n    System.out.print(i + \" \");\n}",
                            "a": "1 2 3 4 5",
                            "b": "1 2 3 4",
                            "c": "5 4 3 2 1",
                            "d": "5 4 3 2",
                            "correct": "a"
                        },
                        {
                            "question": "108. What is the purpose of the loop control variable in a `for` loop?",
                            "a": "It defines the loop condition.",
                            "b": "It sets the initial value of the loop control variable.",
                            "c": "It specifies the loop body.",
                            "d": "It updates the loop control variable after each iteration.",
                            "correct": "d"
                        },
                        {
                            "question": "109. What will be the output of the following code?",
                            "code": "for (int i = 0; i < 4; i++) {\n    System.out.print(i + \" \");\n}",
                            "a": "0 1 2 3",
                            "b": "0 1 2",
                            "c": "3 2 1 0",
                            "d": "3 2 1",
                            "correct": "a"
                        },
                        {
                            "question": "110. What does the following code print?",
                            "code": "for (int i = 0; i < 3; i++) {\n    for (int j = 0; j <= i; j++) {\n        System.out.print(\"* \");\n    }\n    System.out.println();\n}",
                            "a": "* \n * * \n * * *",
                            "b": "* * * \n * * \n *",
                            "c": "* * * \n * * \n *",
                            "d": "* \n * * \n * * *",
                            "correct": "a"
                        },
                        {
                            "question": "111. What will be the output of the following code?",
                            "code": "int sum = 0;\nfor (int i = 1; i <= 5; i++) {\n    if (i % 2 == 0) {\n        sum += i;\n    }\n}\nSystem.out.print(sum);",
                            "a": "6",
                            "b": "4",
                            "c": "2",
                            "d": "10",
                            "correct": "a"
                        },
                        {
                            "question": "112. What is the output of the following code?",
                            "code": "for (int i = 1; i <= 4; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
                            "b": "1 \n 2 2 \n 3 3 3 \n 4 4 4 4",
                            "c": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4",
                            "d": "1 \n 2 \n 3 \n 4",
                            "correct": "a"
                        },
                        {
                            "question": "113. What will be the output of the following code?",
                            "code": "for (int i = 5; i >= 1; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "1 \n 1 2 \n 1 2 3 \n 1 2 3 4 \n 1 2 3 4 5",
                            "b": "5 4 3 2 1 \n 4 3 2 1 \n 3 2 1 \n 2 1 \n 1",
                            "c": "1 2 3 4 5 \n 1 2 3 4 \n 1 2 3 \n 1 2 \n 1",
                            "d": "5 \n 4 4 \n 3 3 3 \n 2 2 2 2 \n 1 1 1 1 1",
                            "correct": "b"
                        },
                        {
                            "question": "114. What will be the output of the following code?",
                            "code": "int x = 0;\nfor (int i = 1; i <= 5; i++) {\n    x += i;\n}\nSystem.out.print(x);",
                            "a": "10",
                            "b": "11",
                            "c": "15",
                            "d": "25",
                            "correct": "c"
                        },
                        {
                            "question": "115. What does the following code print?",
                            "code": "for (int i = 3; i >= 1; i--) {\n    for (int j = i; j >= 1; j--) {\n        System.out.print(j + \" \");\n    }\n    System.out.println();\n}",
                            "a": "1 \n 1 2 \n 1 2 3",
                            "b": "3 \n 2 1 \n 1",
                            "c": "3 2 1 \n 2 1 \n 1",
                            "d": "1 \n 2 \n 3",
                            "correct": "c"
                        },
                        {
                            "question": "116. What will be the output of the following code?",
                            "code": "int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i * i;\n}\nSystem.out.print(sum);",
                            "a": "220",
                            "b": "120",
                            "c": "154",
                            "d": "286",
                            "correct": "a"
                        },
                        {
                            "question": "117. What will be the output of the following code?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,5 \n 15,4",
                            "c": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 14,5 \n 15,4",
                            "d": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,6 \n 15,5",
                            "correct": "b"
                        },
                        {
                            "question": "118. What is the purpose of the termination condition in the `for` loop?",
                            "code": "",
                            "a": "It defines the loop condition.",
                            "b": "It sets the initial value of the loop control variables.",
                            "c": "It specifies the loop body.",
                            "d": "It determines the number of loop iterations.",
                            "correct": "a"
                        },
                        {
                            "question": "119. In the code provided, how many times will the loop body be executed?",
                            "code": "",
                            "a": "15 times",
                            "b": "16 times",
                            "c": "20 times",
                            "d": "21 times",
                            "correct": "b"
                        },
                        {
                            "question": "120. What does the following code print?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,5 \n 15,4",
                            "c": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 14,5 \n 15,4",
                            "d": "0,20 \n 1,19 \n 2,18 \n ... \n 14,6 \n 15,6 \n 15,5",
                            "correct": "b"
                        },
                        {
                            "question": "121. What will be the values of `i` and `j` after the loop completes execution?",
                            "code": "",
                            "a": "i = 14, j = 6",
                            "b": "i = 15, j = 5",
                            "c": "i = 15, j = 4",
                            "d": "i = 14, j = 5",
                            "correct": "c"
                        },
                        {
                            "question": "122. Which part of the `for` loop is executed after each iteration?",
                            "code": "",
                            "a": "Initialization expression",
                            "b": "Loop body",
                            "c": "Condition",
                            "d": "Increment expression",
                            "correct": "d"
                        },
                        {
                            "question": "123. What will be the output of the following code?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 0, j = 20; (i < 15 && j > 15); i++, j--) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "0,20 1,19 2,18 ... 14,6 15,5 15,4",
                            "c": "0,20 1,19 2,18 ... 14,6 14,5 15,4",
                            "d": "0,20 1,19 2,18 ... 14,6 15,6 15,5",
                            "correct": "b"
                        },
                        {
                            "question": "124. What happens if you remove the increment expressions `i++` and `j--` from the `for` loop?",
                            "code": "",
                            "a": "The loop will not compile.",
                            "b": "The loop will run infinitely.",
                            "c": "The loop will not execute the loop body.",
                            "d": "The loop will execute only once.",
                            "correct": "b"
                        },
                        {
                            "question": "125. What does the `System.out.println(i + \",\" + j);` statement inside the loop do?",
                            "code": "",
                            "a": "Prints the values of `i` and `j` separated by a comma.",
                            "b": "Prints the values of `i` and `j` concatenated as strings.",
                            "c": "Prints the values of `i` and `j` along with the text \"i,j\".",
                            "d": "Prints the sum of `i` and `j`.",
                            "correct": "a"
                        },
                        {
                            "question": "126. In the code provided, what will be the final output printed outside the loop?",
                            "code": "",
                            "a": "15,5",
                            "b": "15,4",
                            "c": "14,6",
                            "d": "16,5",
                            "correct": "b"
                        },
                        {
                            "question": "127. What will be the output of the following code?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.println(i + \",\" + j);\n        }\n        System.out.println(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
                            "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
                            "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
                            "correct": "c"
                        },
                        {
                            "question": "128. What is the purpose of the termination condition in the `for` loop?",
                            "code": "",
                            "a": "It defines the loop condition.",
                            "b": "It sets the initial value of the loop control variables.",
                            "c": "It specifies the loop body.",
                            "d": "It determines the number of loop iterations.",
                            "correct": "a"
                        },
                        {
                            "question": "129. In the code provided, how many times will the loop body be executed?",
                            "code": "",
                            "a": "4 times",
                            "b": "5 times",
                            "c": "6 times",
                            "d": "7 times",
                            "correct": "b"
                        },
                        {
                            "question": "130. What does the following code print?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
                            "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
                            "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
                            "correct": "c"
                        },
                        {
                            "question": "131. What will be the values of `i` and `j` after the loop completes execution?",
                            "code": "",
                            "a": "i = 6, j = 9",
                            "b": "i = 5, j = 10",
                            "c": "i = 7, j = 8",
                            "d": "i = 8, j = 7",
                            "correct": "b"
                        },
                        {
                            "question": "132. Which part of the `for` loop is executed after each iteration?",
                            "code": "",
                            "a": "Initialization expression",
                            "b": "Loop body",
                            "c": "Condition",
                            "d": "Increment expression",
                            "correct": "d"
                        },
                        {
                            "question": "133. What will be the output of the following code?",
                            "code": "class O {\n    public static void main(String[] args) {\n        int i, j;\n        for (i = 10, j = 5; (i > 5 && j < 10); i--, j++) {\n            System.out.print(i + \",\" + j + \" \");\n        }\n        System.out.print(i + \",\" + j);\n    }\n}",
                            "a": "Prints nothing",
                            "b": "10,5 \n 9,6 \n 8,7 \n 7,8",
                            "c": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9 \n 5,10",
                            "d": "10,5 \n 9,6 \n 8,7 \n 7,8 \n 6,9",
                            "correct": "c"
                        },
                        {
                            "question": "134. What happens if you remove the decrement expression `i--` and increment expression `j++` from the `for` loop?",
                            "code": "",
                            "a": "The loop will not compile.",
                            "b": "The loop will run infinitely.",
                            "c": "The loop will not execute the loop body.",
                            "d": "The loop will execute only once.",
                            "correct": "b"
                        },
                        {
                            "question": "135. What does the `System.out.print(i + \",\" + j + \" \");` statement inside the loop do?",
                            "code": "",
                            "a": "Prints the values of `i` and `j` separated by a comma.",
                            "b": "Prints the values of `i` and `j` concatenated as strings.",
                            "c": "Prints the values of `i` and `j` along with the text \"i,j\".",
                            "d": "Prints the sum of `i` and `j`.",
                            "correct": "a"
                        },
                        {
                            "question": "136. In the code provided, what will be the final output printed outside the loop?",
                            "code": "",
                            "a": "7,8",
                            "b": "6,9",
                            "c": "5,10",
                            "d": "8,7",
                            "correct": "b"
                        },
                        {
                            "question": "137. What will be the output of the following code?",
                            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
                            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "correct": "b"
                        },
                        {
                            "question": "138. What is the purpose of the initializer expression in the `for` loop?",
                            "code": "",
                            "a": "It defines the loop condition.",
                            "b": "It sets the initial value of the loop control variable.",
                            "c": "It specifies the loop body.",
                            "d": "It determines the number of loop iterations.",
                            "correct": "b"
                        },
                        {
                            "question": "139. In the code provided, how many times will the loop body be executed?",
                            "code": "",
                            "a": "4 times",
                            "b": "5 times",
                            "c": "6 times",
                            "d": "7 times",
                            "correct": "b"
                        },
                        {
                            "question": "140. What does the following code print?",
                            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
                            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "correct": "b"
                        },
                        {
                            "question": "141. What will be the value of `i` after the loop completes execution?",
                            "code": "",
                            "a": "4",
                            "b": "5",
                            "c": "6",
                            "d": "7",
                            "correct": "b"
                        },
                        {
                            "question": "142. Which part of the `for` loop is executed after each iteration?",
                            "code": "",
                            "a": "Initialization expression",
                            "b": "Loop body",
                            "c": "Condition",
                            "d": "Increment expression",
                            "correct": "d"
                        },
                        {
                            "question": "143. What will be the output of the following code?",
                            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 5;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n    }\n}",
                            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY",
                            "d": "INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT",
                            "correct": "b"
                        },
                        {
                            "question": "144. What will be the output of the following code?",
                            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
                            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                            "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                            "correct": "a"
                        },
                        {
                            "question": "145. What does the `System.out.println(\"FINAL\");` statement after the loop do?",
                            "code": "",
                            "a": "Prints the word \"FINAL\".",
                            "b": "Prints the value of `i`.",
                            "c": "Prints the word \"FINAL\" followed by a space.",
                            "d": "Prints the value of `i` followed by the word \"FINAL\".",
                            "correct": "a"
                        },
                        {
                            "question": "146. In the code provided, what will be the final output printed after the loop?",
                            "code": "",
                            "a": "BODY \n FINAL",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n FINAL",
                            "c": "BODY \n INCREMENT \n FINAL",
                            "d": "FINAL",
                            "correct": "a"
                        },
                        {
                            "question": "147. What will be the output of the following code?",
                            "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
                            "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                            "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                            "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                            "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                            "correct": "a"
                        },
                        {
                            "question": "148. What is the purpose of the final expression in the `for` loop?",
                            "code": "",
                            "a": "It defines the loop condition.",
                            "b": "It sets the initial value of the loop control variable.",
                            "c": "It specifies the loop body.",
                            "d": "It determines the number of loop iterations.",
                            "correct": "d"
                        },
                        {
                            "question": "149. In the code provided, how many times will the loop body be executed?",
                            "code": "",
                            "a": "3 times",
                            "b": "4 times",
                            "c": "5 times",
                            "d": "6 times",
                            "correct": "a"
                        },
                        
                            {
                                "question": "150. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
                                "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                                "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                                "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "correct": "a"
                            },
                            {
                                "question": "151. What will be the value of `i` after the loop completes execution?",
                                "code": "",
                                "a": "2",
                                "b": "3",
                                "c": "4",
                                "d": "5",
                                "correct": "b"
                            },
                            {
                                "question": "152. Which part of the `for` loop is executed after each iteration?",
                                "code": "",
                                "a": "Initialization expression",
                                "b": "Loop body",
                                "c": "Condition",
                                "d": "Increment expression",
                                "correct": "d"
                            },
                            {
                                "question": "153. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 3;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
                                "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                                "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                                "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "correct": "a"
                            },
                            {
                                "question": "154. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i;\n        for (i = 0, System.out.println(\"INITIALIZER\");\n             i < 2;\n             i++, System.out.println(\"INCREMENT\")) {\n            System.out.println(\"BODY\");\n        }\n        System.out.println(\"FINAL\");\n    }\n}",
                                "a": "INITIALIZER \n BODY \n INCREMENT \n BODY \n FINAL",
                                "b": "INITIALIZER \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "c": "BODY \n INCREMENT \n BODY \n INCREMENT \n FINAL",
                                "d": "BODY \n INCREMENT \n BODY \n INCREMENT \n BODY \n FINAL",
                                "correct": "a"
                            },
                            {
                                "question": "155. What does the `System.out.println(\"FINAL\");` statement after the loop do?",
                                "code": "",
                                "a": "Prints the word \"FINAL\".",
                                "b": "Prints the value of `i`.",
                                "c": "Prints the word \"FINAL\" followed by a space.",
                                "d": "Prints the value of `i` followed by the word \"FINAL\".",
                                "correct": "a"
                            },
                            {
                                "question": "156. In the code provided, what will be the final output printed after the loop?",
                                "code": "",
                                "a": "BODY \n FINAL",
                                "b": "INITIALIZER \n INCREMENT \n BODY \n FINAL",
                                "c": "BODY \n INCREMENT \n FINAL",
                                "d": "FINAL",
                                "correct": "a"
                            },
                            {
                                "question": "157. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
                                "a": "0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2",
                                "b": "0,0 1,1 2,2",
                                "c": "0,0 1,0 2,0 0,1 1,1 2,1 0,2 1,2 2,2",
                                "d": "0,0",
                                "correct": "a"
                            },
                            {
                                "question": "158. What is the purpose of the inner `for` loop in the code provided?",
                                "code": "",
                                "a": "It defines the loop condition for the outer loop.",
                                "b": "It initializes the loop control variable for the outer loop.",
                                "c": "It specifies the loop body for the outer loop.",
                                "d": "It generates the column values for the matrix pattern.",
                                "correct": "d"
                            },
                            {
                                "question": "159. In the code provided, how many times will the inner `for` loop execute in total?",
                                "code": "",
                                "a": "3 times",
                                "b": "6 times",
                                "c": "9 times",
                                "d": "12 times",
                                "correct": "c"
                            },
                            {
                                "question": "160. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 3; i++) {\n            for (int j = 0; j < 3; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
                                "a": "0,0 0,1 0,2 1,0 1,1 1,2 2,0 2,1 2,2",
                                "b": "0,0 1,1 2,2",
                                "c": "0,0 1,0 2,0 0,1 1,1 2,1 0,2 1,2 2,2",
                                "d": "0,0",
                                "correct": "a"
                            },
                            {
                                "question": "161. What will be the value of `i` and `j` when the inner `for` loop completes execution for the first time?",
                                "code": "",
                                "a": "i = 0, j = 0",
                                "b": "i = 1, j = 0",
                                "c": "i = 0, j = 1",
                                "d": "i = 1, j = 1",
                                "correct": "a"
                            },
                            {
                                "question": "162. What is the purpose of the outer `for` loop in the code provided?",
                                "code": "",
                                "a": "It defines the loop condition for the inner loop.",
                                "b": "It initializes the loop control variable for the inner loop.",
                                "c": "It specifies the loop body for the inner loop.",
                                "d": "It generates the row values for the matrix pattern.",
                                "correct": "d"
                            },
                            {
                                "question": "163. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
                                "a": "1,1 2,1 2,2 3,1 3,2 3,3",
                                "b": "1,1 2,2 3,3",
                                "c": "1,1 1,2 2,1 2,2 3,1 3,2 3,3",
                                "d": "1,1 2,1 3,1",
                                "correct": "a"
                            },
                            {
                                "question": "164. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
                                "a": "1,1 2,1 2,2 3,1 3,2 3,3",
                                "b": "1,1 2,2 3,3",
                                "c": "1,1 1,2 2,1 2,2 3,1 3,2 3,3",
                                "d": "1,1 2,1 3,1",
                                "correct": "a"
                            },
                            {
                                "question": "165. What will be the value of `i` and `j` when the inner `for` loop completes execution for the second time?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(i + \",\" + j + \" \");\n            }\n        }\n    }\n}",
                                "a": "i = 1, j = 1",
                                "b": "i = 2, j = 1",
                                "c": "i = 1, j = 2",
                                "d": "i = 2, j = 2",
                                "correct": "d"
                            },
                            {
                                "question": "166. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "1 \n 2 2 \n 3 3 3",
                                "b": "1 \n 1 2 \n 1 2 3",
                                "c": "1 \n 2 \n 3",
                                "d": "1 2 3",
                                "correct": "b"
                            },
                            {
                                "question": "167. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
                                "a": "1 2 3",
                                "b": "3 2 1",
                                "c": "1 1 1",
                                "d": "Prints nothing",
                                "correct": "a"
                            },
                            {
                                "question": "168. What is the purpose of the `if` block in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
                                "a": "To print the values of `i` and `j`.",
                                "b": "To terminate the inner loop early.",
                                "c": "To check if `i` is equal to `j` and print the value.",
                                "d": "To increment the value of `i` if `i` is equal to `j`.",
                                "correct": "c"
                            },
                            {
                                "question": "169. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i == j) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "170. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 3; j >= 1; j--) {\n                if (i + j == 4) {\n                    System.out.print(\"* \");\n                }\n            }\n        }\n    }\n}",
                                "a": "* * * *",
                                "b": "* * *",
                                "c": "* *",
                                "d": "*",
                                "correct": "b"
                            },
                            {
                                "question": "171. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i % 2 == 0) ? \"A\" : \"B\");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "B\nAA\nBBB\nAAAA\nBBBBB",
                                "b": "BBB\nAA\nB\nAAAA\nBBBBB",
                                "c": "BB\nA\nBBBB\nAAAA\nBBBBBB",
                                "d": "BBBB\nA\nBB\nAAA\nBBBBBB",
                                "correct": "a"
                            },
                            {
                                "question": "172. What is the purpose of the ternary operator (`? :`) in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print((i % 2 == 0) ? \"A\" : \"B\");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "To assign a value to `i`.",
                                "b": "To determine whether `i` is even or odd.",
                                "c": "To check if `i` is equal to `j` and print the value.",
                                "d": "To calculate the sum of `i` and `j`.",
                                "correct": "b"
                            },
                            {
                                "question": "173. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i > j) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "* * *\n* * *\n* * **",
                                "b": "* # #\n* * #\n* * * **",
                                "c": "* * *\n* * *\n* * #",
                                "d": "# # #\n* * #\n* * *",
                                "correct": "b"
                            },
                            {
                                "question": "174. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % j == 0) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
                                "a": "1 2 3 4",
                                "b": "1 2 3",
                                "c": "1 2 3 4",
                                "d": "1 2 3 4 1 2 3 4",
                                "correct": "a"
                            },
                            {
                                "question": "175. What is the purpose of the `%` operator in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % j == 0) {\n                    System.out.print(i + \" \");\n                }\n            }\n        }\n    }\n}",
                                "a": "To calculate the square root of `i`.",
                                "b": "To check if `i` is divisible by `j`.",
                                "c": "To calculate the product of `i` and `j`.",
                                "d": "To calculate the remainder when `i` is divided by `j`.",
                                "correct": "d"
                            },
                            {
                                "question": "176. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 5; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "5 4 3 2 1 \n 5 4 3 2 \n 5 4 3 \n 5 4 \n 5",
                                "b": "5 5 5 5 5 \n 4 4 4 4 \n 3 3 3 \n 2 2 \n 1",
                                "c": "5 \n 4 5 \n 3 4 5 \n 2 3 4 5 \n 1 2 3 4 5",
                                "d": "5 4 3 2 1 \n 4 3 2 1 \n 3 2 1 \n 2 1 \n 1",
                                "correct": "a"
                            },
                            {
                                "question": "177. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "* # * #\n   * # * #\n   * # * #\n   * # * #",
                                "b": "* * * *\n   * * * *\n   * * * *\n   * * * *",
                                "c": "* # * #\n   * # * #\n   * # * #\n   * # * #",
                                "d": "# # # #\n   # # # #\n   # # # #\n   # # # #",
                                "correct": "c"
                            },
                            {
                                "question": "178. What is the purpose of the logical operator `&&` in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "To check if both `i` and `j` are even.",
                                "b": "To check if either `i` or `j` is even.",
                                "c": "To invert the condition for the inner loop.",
                                "d": "To increment both `i` and `j` simultaneously.",
                                "correct": "a"
                            },
                            {
                                "question": "179. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 1; j <= 4; j++) {\n                if (i % 2 == 0 && j % 2 == 0) {\n                    System.out.print(\"# \");\n                } else {\n                    System.out.print(\"* \");\n                }\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "4 times",
                                "b": "6 times",
                                "c": "8 times",
                                "d": "16 times",
                                "correct": "c"
                            },
                            {
                                "question": "180. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = n; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "5 4 3 2 1\n   5 4 3 2\n   5 4 3\n   5 4\n   5",
                                "b": "1 2 3 4 5\n   2 3 4 5\n   3 4 5\n   4 5\n   5",
                                "c": "5 4 3 2 1\n   4 3 2 1\n   3 2 1\n   2 1\n   1",
                                "d": "5\n   5 4\n   5 4 3\n   5 4 3 2\n   5 4 3 2 1",
                                "correct": "a"
                            },
                            {
                                "question": "181. What is the purpose of the variable `n` in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            for (int j = n; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "To store the value of `i`.",
                                "b": "To store the value of `j`.",
                                "c": "To control the number of rows and columns in the pattern.",
                                "d": "To determine the number of iterations in the outer loop.",
                                "correct": "c"
                            },
                            {
                                "question": "182. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 2 3 4 5 6 7 8 9 10 11 12",
                                "b": "1 2 3 4 6 12",
                                "c": "1 2 3 4 5 6",
                                "d": "1 2 3 4 6",
                                "correct": "b"
                            },
                            {
                                "question": "183. What is the purpose of the `if` block in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
                                "a": "To print the divisors of the number `num`.",
                                "b": "To check if `i` is divisible by `num`.",
                                "c": "To increment the value of `num` if it's a divisor of `i`.",
                                "d": "To determine if `num` is prime or composite.",
                                "correct": "a"
                            },
                            {
                                "question": "184. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 12;\n        for (int i = 1; i <= num; i++) {\n            if (num % i == 0) {\n                System.out.print(i + \" \");\n            }\n        }\n    }\n}",
                                "a": "Depends on the value of `num`.",
                                "b": "1 time",
                                "c": "Number of divisors of `num`.",
                                "d": "Equal to `num`.",
                                "correct": "c"
                            },
                            {
                                "question": "185. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 5;\n        int y = x++;\n        System.out.println(x + \" \" + y);\n    }\n}",
                                "a": "6 5",
                                "b": "5 6",
                                "c": "5 5",
                                "d": "6 6",
                                "correct": "a"
                            },
                            {
                                "question": "186. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        int c = 30;\n        \n        if (++a > 10 && b++ < 20 || c-- > 30) {\n            System.out.println(a + \" \" + b + \" \" + c);\n        } else {\n            System.out.println(\"Nope\");\n        }\n    }\n}",
                                "a": "11 20 30",
                                "b": "11 21 30",
                                "c": "10 20 29",
                                "d": "Nope",
                                "correct": "a"
                            },
                            {
                                "question": "187. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
                                "a": "3 10",
                                "b": "2 10",
                                "c": "3 9",
                                "d": "2 9",
                                "correct": "d"
                            },
                            {
                                "question": "188. What is the purpose of the `--` operator in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
                                "a": "To increment the value of `a` before using it.",
                                "b": "To decrement the value of `a` after using it.",
                                "c": "To decrement the value of `b` before using it.",
                                "d": "To increment the value of `b` after using it.",
                                "correct": "b"
                            },
                            {
                                "question": "189. In the code provided, what is the value of `a` after the expression `a-- + --a` is evaluated?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = a-- + --a;\n        System.out.println(a + \" \" + b);\n    }\n}",
                                "a": "3",
                                "b": "4",
                                "c": "5",
                                "d": "6",
                                "correct": "a"
                            },
                            {
                                "question": "190. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
                                "a": "True",
                                "b": "False",
                                "correct": "b"
                            },
                            {
                                "question": "191. What is the purpose of the `&&` operator in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
                                "a": "To check if both `x` and `y` are equal to 10.",
                                "b": "To check if either `x` or `y` is equal to 10.",
                                "c": "To perform logical AND between the expressions.",
                                "d": "To perform logical OR between the expressions.",
                                "correct": "c"
                            },
                            {
                                "question": "192. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        \n        if (x++ > 10 && y-- < 5) {\n            System.out.println(\"True\");\n        } else {\n            System.out.println(\"False\");\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "0 times",
                                "d": "Depends on the values of `x` and `y`.",
                                "correct": "c"
                            },
                            {
                                "question": "193. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        if (p > 10 || q < 5) {\n            System.out.println(\"Success\");\n        } else {\n            System.out.println(\"Failure\");\n        }\n    }\n}",
                                "a": "Success",
                                "b": "Failure",
                                "correct": "a"
                            },
                            {
                                "question": "194. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int m = 8;\n        int n = 10;\n        \n        if (m > 5 && n > 10) {\n            System.out.println(\"Yes\");\n        } else {\n            System.out.println(\"No\");\n        }\n    }\n}",
                                "a": "Yes",
                                "b": "No",
                                "correct": "b"
                            },
                            {
                                "question": "195. What is the purpose of the `||` operator in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int m = 8;\n        int n = 10;\n        \n        if (m > 5 || n > 10) {\n            System.out.println(\"Yes\");\n        } else {\n            System.out.println(\"No\");\n        }\n    }\n}",
                                "a": "To perform logical AND between the expressions.",
                                "b": "To perform logical OR between the expressions.",
                                "c": "To check if both `m` and `n` are greater than 10.",
                                "d": "To check if either `m` or `n` is greater than 10.",
                                "correct": "b"
                            },
                            {
                                "question": "196. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        if (r > 15 || s > 40) {\n            System.out.println(\"High\");\n        } else {\n            System.out.println(\"Low\");\n        }\n    }\n}",
                                "a": "High",
                                "b": "Low",
                                "correct": "a"
                            },
                            {
                                "question": "197. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                "a": "1 2 3 4 5",
                                "b": "1 3 5",
                                "c": "2 4",
                                "d": "1",
                                "correct": "b"
                            },
                            {
                                "question": "198. What is the purpose of the `i++` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                "a": "To increment `i` by 1 after each iteration.",
                                "b": "To decrement `i` by 1 after each iteration.",
                                "c": "To increment `i` by 2 after each iteration.",
                                "d": "To decrement `i` by 2 after each iteration.",
                                "correct": "c"
                            },
                            {
                                "question": "199. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "5 times",
                                "correct": "b"
                            },
                            {
                                "question": "200. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 5; i >= 1; i--) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
                                "a": "1 2 3 4 5",
                                "b": "5 4 3 2 1",
                                "c": "5 4 3 2",
                                "d": "1",
                                "correct": "b"
                            },
                            {
                                "question": "201. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "1\n1 2\n1 2 3\n1 2 3 4\n1 2 3 4 5",
                                "b": "1\n2 1\n3 2 1\n4 3 2 1\n5 4 3 2 1",
                                "c": "1\n1 1\n1 1 1\n1 1 1 1\n1 1 1 1 1",
                                "d": "1\n2 2\n3 3 3\n4 4 4 4\n5 5 5 5 5",
                                "correct": "a"
                            },
                            {
                                "question": "202. What is the purpose of the inner loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "To generate the column values for a triangular pattern.",
                                "b": "To increment the value of `i` for each iteration.",
                                "c": "To calculate the factorial of `j`.",
                                "d": "To check if `i` is equal to `j`.",
                                "correct": "a"
                            },
                            {
                                "question": "203. In the code provided, how many times will the inner loop execute in total?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 1; j <= i; j++) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "5 times",
                                "b": "10 times",
                                "c": "15 times",
                                "d": "25 times",
                                "correct": "c"
                            },
                            {
                                "question": "204. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 4; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "4 3 2 1\n4 3 2\n4 3\n4",
                                "b": "1 2 3 4\n1 2 3\n1 2\n1",
                                "c": "4 4 4 4\n3 3 3\n2 2\n1",
                                "d": "4 3 2 1\n3 2 1\n2 1\n1",
                                "correct": "a"
                            },
                            {
                                "question": "205. What is the purpose of the outer loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 4; j >= i; j--) {\n                System.out.print(j + \" \");\n            }\n            System.out.println();\n        }\n    }\n}",
                                "a": "To generate the row values for a triangular pattern.",
                                "b": "To increment the value of `j` for each iteration.",
                                "c": "To calculate the factorial of `i`.",
                                "d": "To check if `i` is equal to `j`.",
                                "correct": "a"
                            },
                            {
                                "question": "206. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 1; j <= 3; j++) {\n                if (i + j == 4) {\n                    System.out.print(\"* \");\n                }\n            }\n        }\n    }\n}",
                                "a": "* * * *",
                                "b": "* * *",
                                "c": "* * * *",
                                "d": "*",
                                "correct": "b"
                            },
                            {
                                "question": "207. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
                                "a": "11 12 13",
                                "b": "14 13 12",
                                "c": "11 14 13",
                                "d": "14 15 12",
                                "correct": "a"
                            },
                            {
                                "question": "208. What is the purpose of the `++x` and `--y` statements in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
                                "a": "To increment `x` and `y` by 1 before using them.",
                                "b": "To increment `x` by 1 and decrement `y` by 1 before using them.",
                                "c": "To decrement `x` by 1 and increment `y` by 1 before using them.",
                                "d": "To decrement `x` and `y` by 1 before using them.",
                                "correct": "b"
                            },
                            {
                                "question": "209. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 15;\n        \n        for (int i = 0; i < 3; i++) {\n            if (x < y) {\n                System.out.print(++x + \" \");\n            } else {\n                System.out.print(--y + \" \");\n            }\n        }\n    }\n}",
                                "a": "2 times",
                                "b": "3 times",
                                "c": "4 times",
                                "d": "6 times",
                                "correct": "b"
                            },
                            {
                                "question": "210. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
                                "a": "4",
                                "b": "5",
                                "c": "6",
                                "d": "7",
                                "correct": "d"
                            },
                            {
                                "question": "211. What is the purpose of the `i % 2 == 0` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
                                "a": "To check if `i` is an even number.",
                                "b": "To check if `i` is an odd number.",
                                "c": "To check if `i` is divisible by 2.",
                                "d": "To check if `i` is greater than 2.",
                                "correct": "a"
                            },
                            {
                                "question": "212. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int num = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (i % 2 == 0) {\n                num++;\n            } else {\n                num--;\n            }\n        }\n        \n        System.out.println(num);\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "b"
                            },
                            {
                                "question": "213. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "5 4 3 2",
                                "b": "6 5 4 3",
                                "c": "5 5 5 5",
                                "d": "4 3 3 3",
                                "correct": "a"
                            },
                            {
                                "question": "214. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` and `b` are equal.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "a"
                            },
                            {
                                "question": "215. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 3;\n        \n        for (int i = 0; i < 4; i++) {\n            if (a > b) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "d"
                            },
                            {
                                "question": "216. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        int y = 6;\n        \n        for (int i = 0; i < 4; i++) {\n            if (x < y) {\n                x *= 2;\n            } else {\n                y /= 2;\n            }\n        }\n        \n        System.out.println(x + \" \" + y);\n    }\n}",
                                "a": "16 6",
                                "b": "2 3",
                                "c": "8 6",
                                "d": "4 3",
                                "correct": "c"
                            },
                            {
                                "question": "217. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "0 1 2 3 4 5",
                                "b": "0 1 2 3 4",
                                "c": "1 2 3 4 5",
                                "d": "0 1 2 3 4 6",
                                "correct": "b"
                            },
                            {
                                "question": "218. What is the purpose of the `i++` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "To increment `i` by 1 before using it.",
                                "b": "To increment `i` by 1 after using it.",
                                "c": "To decrement `i` by 1 before using it.",
                                "d": "To decrement `i` by 1 after using it.",
                                "correct": "b"
                            },
                            {
                                "question": "219. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 5; i++) {\n            System.out.print(i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "5 times",
                                "b": "6 times",
                                "c": "4 times",
                                "d": "1 time",
                                "correct": "a"
                            },
                            {
                                "question": "220. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
                                "a": "11 19 12 18 13 17",
                                "b": "11 20 12 19 13 18",
                                "c": "11 20 12 19 14 18",
                                "d": "11 21 12 20 13 19",
                                "correct": "a"
                            },
                            {
                                "question": "220. What is the purpose of the `a++ > 10 || b-- < 20` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than 10 or `b` is less than 20.",
                                "b": "To check if `a` is less than or equal to 10 and `b` is greater than or equal to 20.",
                                "c": "To check if `a` is greater than 10 and `b` is less than 20.",
                                "d": "To check if `a` is less than 10 or `b` is greater than 20.",
                                "correct": "a"
                            },
                            {
                                "question": "221. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 20;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a++ > 10 || b-- < 20) {\n                System.out.print(a + \" \" + b + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "222. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "7 8 9",
                                "b": "6 7 8",
                                "c": "7 8 10",
                                "d": "7 8 11",
                                "correct": "a"
                            },
                            {
                                "question": "223. What is the purpose of the `p > 10 && q < 5` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 10 and `q` is less than 5.",
                                "b": "To check if `p` is less than or equal to 10 and `q` is greater than or equal to 5.",
                                "c": "To check if `p` is greater than 10 or `q` is less than 5.",
                                "d": "To check if `p` is less than 10 or `q` is greater than 5.",
                                "correct": "a"
                            },
                            {
                                "question": "224. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "225. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r > 15 || s > 40) {\n                System.out.print(r-- + \" \");\n            } else {\n                System.out.print(s++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "19 18 17 16",
                                "b": "20 19 18 17",
                                "c": "30 31 32 33",
                                "d": "31 32 33 34",
                                "correct": "b"
                            },
                            {
                                "question": "226. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "10 9 8 7 6 5",
                                "b": "10 9 8 7 6",
                                "c": "9 8 7 6 5",
                                "d": "10 9 8 7",
                                "correct": "b"
                            },
                            {
                                "question": "227. What is the purpose of the `i--` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "To increment `i` by 1 after using it.",
                                "b": "To decrement `i` by 1 before using it.",
                                "c": "To increment `i` by 1 before using it.",
                                "d": "To decrement `i` by 1 after using it.",
                                "correct": "d"
                            },
                            {
                                "question": "228. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 10;\n        for (; i > 5; ) {\n            System.out.print(i-- + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "5 times",
                                "b": "6 times",
                                "c": "4 times",
                                "d": "1 time",
                                "correct": "b"
                            },
                            {
                                "question": "229. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "10 11 12",
                                "b": "9 10 11",
                                "c": "8 9 10",
                                "d": "7 8 9",
                                "correct": "d"
                            },
                            {
                                "question": "230. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` is equal to `b`.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "b"
                            },
                            {
                                "question": "231. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 10;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "a"
                            },
                            {
                                "question": "232. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "7 8 9",
                                "b": "6 7 8",
                                "c": "7 8 10",
                                "d": "7 8 11",
                                "correct": "a"
                            },
                            {
                                "question": "233. What is the purpose of the `p > 10 && q < 5` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 10 and `q` is less than 5.",
                                "b": "To check if `a` is less than or equal to 10 and `q` is greater than or equal to 5.",
                                "c": "To check if `p` is greater than 10 or `q` is less than 5.",
                                "d": "To check if `p` is less than 10 or `q` is greater than 5.",
                                "correct": "a"
                            },
                            {
                                "question": "234. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 15;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p > 10 && q < 5) {\n                System.out.print(p-- + \" \");\n            } else {\n                System.out.print(q++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "235. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 20;\n        int s = 30;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r > 15 || s > 40) {\n                System.out.print(r-- + \" \");\n            } else {\n                System.out.print(s++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "19 18 17 16",
                                "b": "20 19 18 17",
                                "c": "30 31 32 33",
                                "d": "31 32 33 34",
                                "correct": "b"
                            },
                            {
                                "question": "236. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
                                "a": "4 9 16 5",
                                "b": "4 9 5",
                                "c": "4 5 6",
                                "d": "4 9 16",
                                "correct": "a"
                            },
                            {
                                "question": "237. What is the purpose of the `x * x` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
                                "a": "To print the square of `x`.",
                                "b": "To print the value of `x`.",
                                "c": "To increment `x` by 1.",
                                "d": "To print the square root of `x`.",
                                "correct": "a"
                            },
                            {
                                "question": "238. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (; x < 5; ) {\n            System.out.print(x * x + \" \");\n            x++;\n        }\n        System.out.println(x);\n    }\n}",
                                "a": "2 times",
                                "b": "3 times",
                                "c": "4 times",
                                "d": "5 times",
                                "correct": "b"
                            },
                            {
                                "question": "239. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "8 7 6",
                                "b": "5 6 7 8",
                                "c": "8 7 6 5",
                                "d": "5 6 7",
                                "correct": "b"
                            },
                            {
                                "question": "240. What is the purpose of the `b > 10` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `b` is greater than 10.",
                                "b": "To check if `a` is greater than 10.",
                                "c": "To check if `b` is less than or equal to 10.",
                                "d": "To check if `a` is less than 10.",
                                "correct": "a"
                            },
                            {
                                "question": "241. In the code provided, how many times will the `else` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 8;\n        \n        while (a < 10) {\n            if (b > 10) {\n                System.out.print(a++ + \" \");\n            } else {\n                System.out.print(b-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "2 times",
                                "b": "3 times",
                                "c": "4 times",
                                "d": "1 time",
                                "correct": "b"
                            },
                            {
                                "question": "242. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "3 4",
                                "b": "6 5",
                                "c": "4 5",
                                "d": "5 6",
                                "correct": "a"
                            },
                            {
                                "question": "243. What is the purpose of the `p < 5 || q > 5` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is less than 5 or `q` is greater than 5.",
                                "b": "To check if `p` is greater than 5 or `q` is less than 5.",
                                "c": "To check if `p` is equal to 5 or `q` is greater than 5.",
                                "d": "To check if `p` is less than or equal to 5 or `q` is less than 5.",
                                "correct": "a"
                            },
                            {
                                "question": "244. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 3;\n        int q = 6;\n        \n        for (int i = 0; i < 2; i++) {\n            if (p < 5 || q > 5) {\n                System.out.print(p++ + \" \");\n            } else {\n                System.out.print(q-- + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "b"
                            },
                            {
                                "question": "245. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "8 7 6",
                                "b": "5 6 7",
                                "c": "8 7 6 5",
                                "d": "5 6 7 8",
                                "correct": "a"
                            },
                            {
                                "question": "246. What is the purpose of the `a % 2 == 0 && b % 2 != 0` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is even and `b` is odd.",
                                "b": "To check if `a` is odd and `b` is even.",
                                "c": "To check if both `a` and `b` are even.",
                                "d": "To check if both `a` and `b` are odd.",
                                "correct": "a"
                            },
                            {
                                "question": "247. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 8;\n        int b = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a % 2 == 0 && b % 2 != 0) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "b"
                            },
                            {
                                "question": "248. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 5) {\n            i++;\n        }\n    }\n}",
                                "a": "5 times",
                                "b": "6 times",
                                "c": "4 times",
                                "d": "1 time",
                                "correct": "a"
                            },
                            {
                                "question": "249. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "7 6 5",
                                "b": "8 7 6",
                                "c": "7 6 6",
                                "d": "8 7 7",
                                "correct": "a"
                            },
                            {
                                "question": "250. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` is equal to `b`.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "a"
                            },
                            {
                                "question": "251. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 7;\n        int b = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "252. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 10;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "9 8 8 9",
                                "b": "8 8 9 9",
                                "c": "9 9 8 8",
                                "d": "8 8 9 8",
                                "correct": "a"
                            },
                            {
                                "question": "253. What is the purpose of the `p-- > 5 && q++ < 8` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 10;\n        int q = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 5 and `q` is less than 8.",
                                "b": "To check if `p` is less than 5 or `q` is greater than 8.",
                                "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 8.",
                                "d": "To check if `p` is less than 5 and `q` is greater than 8.",
                                "correct": "a"
                            },
                            {
                                "question": "254. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 3) {\n            i++;\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "255. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 5;\n        int s = 8;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 7) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
                                "a": "7 7 7 7",
                                "b": "7 6 7 6",
                                "c": "6 7 5 7",
                                "d": "6 8 7 6",
                                "correct": "b"
                            },
                            {
                                "question": "256. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 3;\n        for (; i <= 6; i++) {\n            System.out.print(i * i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "9 16 25 36 7",
                                "b": "9 16 25 36 8",
                                "c": "9 16 25 36 9",
                                "d": "9 16 25 36 10",
                                "correct": "b"
                            },
                            {
                                "question": "257. What is the purpose of the `i++` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 3;\n        for (; i <= 6; i++) {\n            System.out.print(i * i + \" \");\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "To increment `i` by 1 before using it.",
                                "b": "To increment `i` by 1 after using it.",
                                "c": "To decrement `i` by 1 before using it.",
                                "d": "To decrement `i` by 1 after using it.",
                                "correct": "b"
                            },
                            {
                                "question": "258. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
                                "a": "3 times",
                                "b": "4 times",
                                "c": "5 times",
                                "d": "6 times",
                                "correct": "b"
                            },
                            {
                                "question": "259. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "7 8 9",
                                "b": "8 7 6",
                                "c": "7 7 7",
                                "d": "8 8 8",
                                "correct": "a"
                            },
                            {
                                "question": "260. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` and `b` are equal.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "a"
                            },
                            {
                                "question": "261. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 4;\n        int b = 7;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "c"
                            },
                            {
                                "question": "262. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 9;\n        int q = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "8 6 7 7",
                                "b": "8 5 7 6",
                                "c": "8 6 6 7",
                                "d": "8 7 6 7",
                                "correct": "a"
                            },
                            {
                                "question": "263. What is the purpose of the `p-- > 5 && q++ < 8` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 9;\n        int q = 5;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 8) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 5 and `q` is less than 8.",
                                "b": "To check if `p` is less than 5 or `q` is greater than 8.",
                                "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 8.",
                                "d": "To check if `p` is less than 5 and `q` is greater than 8.",
                                "correct": "a"
                            },
                            {
                                "question": "264. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "d"
                            },
                            {
                                "question": "265. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 4;\n        int s = 7;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 7) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
                                "a": "6 7 5 6",
                                "b": "6 6 4 6",
                                "c": "5 7 3 7",
                                "d": "5 8 3 7",
                                "correct": "a"
                            },
                            {
                                "question": "267. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        for (; i <= 4; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "1 4 9 16 5",
                                "b": "1 4 9 16 6",
                                "c": "1 4 9 16 7",
                                "d": "1 4 9 16 8",
                                "correct": "b"
                            },
                            {
                                "question": "268. What is the purpose of the `i++` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        for (; i <= 4; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "To increment `i` by 1 after using it.",
                                "b": "To increment `i` by 1 before using it.",
                                "c": "To decrement `i` by 1 before using it.",
                                "d": "To decrement `i` by 1 after using it.",
                                "correct": "a"
                            },
                            {
                                "question": "269. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        while (i < 5) {\n            i++;\n        }\n    }\n}",
                                "a": "2 times",
                                "b": "3 times",
                                "c": "4 times",
                                "d": "5 times",
                                "correct": "b"
                            },
                            {
                                "question": "270. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "6 7 8",
                                "b": "5 6 7",
                                "c": "6 6 6",
                                "d": "5 5 5",
                                "correct": "b"
                            },
                            {
                                "question": "271. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` and `b` are equal.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "b"
                            },
                            {
                                "question": "272. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "a"
                            },
                            {
                                "question": "273. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 6;\n        int q = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 4) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "5 4 4 5",
                                "b": "5 4 5 4",
                                "c": "5 4 5 5",
                                "d": "6 4 6 5",
                                "correct": "a"
                            },
                            {
                                "question": "274. What is the purpose of the `p-- > 5 && q++ < 4` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 6;\n        int q = 3;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 5 && q++ < 4) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 5 and `q` is less than 4.",
                                "b": "To check if `p` is less than 5 or `q` is greater than 4.",
                                "c": "To check if `p` is greater than or equal to 5 and `q` is less than or equal to 4.",
                                "d": "To check if `p` is less than 5 and `q` is greater than 4.",
                                "correct": "a"
                            },
                            {
                                "question": "275. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "d"
                            },
                            {
                                "question": "276. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int r = 3;\n        int s = 8;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 6) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
                                "a": "6 7 5 6",
                                "b": "6 8 4 7",
                                "c": "7 7 3 6",
                                "d": "7 8 3 7",
                                "correct": "a"
                            },
                            {
                                "question": "278. What will be the output of the following code?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        for (; i <= 3; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "4 9 4",
                                "b": "4 9 5",
                                "c": "4 4 4",
                                "d": "4 4 5",
                                "correct": "b"
                            },
                            {
                                "question": "279. What is the purpose of the `i++` statement inside the loop in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        for (; i <= 3; ) {\n            System.out.print(i * i + \" \");\n            i++;\n        }\n        System.out.println(i);\n    }\n}",
                                "a": "To increment `i` by 1 after using it.",
                                "b": "To increment `i` by 1 before using it.",
                                "c": "To decrement `i` by 1 before using it.",
                                "d": "To decrement `i` by 1 after using it.",
                                "correct": "a"
                            },
                            {
                                "question": "280. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i < 4) {\n            i++;\n        }\n    }\n}",
                                "a": "2 times",
                                "b": "3 times",
                                "c": "4 times",
                                "d": "5 times",
                                "correct": "b"
                            },
                            {
                                "question": "281. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "6 7 8",
                                "b": "5 6 7",
                                "c": "6 6 6",
                                "d": "5 5 5",
                                "correct": "b"
                            },
                            {
                                "question": "282. What is the purpose of the `a > b` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `a` is greater than `b`.",
                                "b": "To check if `b` is greater than `a`.",
                                "c": "To check if `a` and `b` are equal.",
                                "d": "To check if `a` is less than `b`.",
                                "correct": "b"
                            },
                            {
                                "question": "283. In the code provided, how many times will the `if` block be executed?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 6;\n        \n        for (int i = 0; i < 3; i++) {\n            if (a > b) {\n                System.out.print(a-- + \" \");\n            } else {\n                System.out.print(b++ + \" \");\n            }\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "a"
                            },
                            {
                                "question": "284. What does the following code print?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 5;\n        int q = 4;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 4 && q++ < 5) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "4 5 4 5",
                                "b": "4 4 5 5",
                                "c": "5 5 4 5",
                                "d": "5 4 5 4",
                                "correct": "a"
                            },
                            {
                                "question": "285. What is the purpose of the `p-- > 4 && q++ < 5` condition in the code provided?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int p = 5;\n        int q = 4;\n        \n        for (int i = 0; i < 3; i++) {\n            if (p-- > 4 && q++ < 5) {\n                System.out.print(p + \" \" + q + \" \");\n            }\n        }\n    }\n}",
                                "a": "To check if `p` is greater than 4 and `q` is less than 5.",
                                "b": "To check if `p` is less than 4 or `q` is greater than 5.",
                                "c": "To check if `p` is greater than or equal to 4 and `q` is less than or equal to 5.",
                                "d": "To check if `p` is less than 4 and `q` is greater than 5.",
                                "correct": "a"
                            },
                            {
                                "question": "286. In the code provided, how many times will the loop iterate?",
                                "code": "class P {\n    public static void main(String[] args) {\n        int i = 0;\n        for (; i < 4; i++) {\n            // loop body\n        }\n    }\n}",
                                "a": "1 time",
                                "b": "2 times",
                                "c": "3 times",
                                "d": "4 times",
                                "correct": "d"
                            },
                                {
                                    "question": "287. What does the following code print?",
                                    "code": "class P {\n    public static void main(String[] args) {\n        int r = 2;\n        int s = 7;\n        \n        for (int i = 0; i < 4; i++) {\n            if (r++ > 5 || s-- < 6) {\n                System.out.print(r + \" \" + s + \" \");\n            }\n        }\n    }\n}",
                                    "a": "6 6 4 6",
                                    "b": "6 7 4 5",
                                    "c": "7 7 3 6",
                                    "d": "7 8 3 5",
                                    "correct": "a"
                                },
                                    {
                                        "question": "288. What will be the output of the following code?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 2; j++) {\n                for (int k = 1; k <= 2; k++) {\n                    for (int l = 1; l <= 2; l++) {\n                        System.out.print(i * j * k * l + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                        "a": "1 2 2 4 2 4 4 8",
                                        "b": "1 2 4 8 2 4 8 16",
                                        "c": "1 2 2 4 1 2 2 4",
                                        "d": "1 2 4 8 1 2 4 8",
                                        "correct": "d"
                                    },
                                    {
                                        "question": "289. What is the purpose of the i * j * k * l statement inside the nested loops in the code provided?",
                                        "a": "To calculate the sum of i, j, k, and l.",
                                        "b": "To calculate the product of i, j, k, and l.",
                                        "c": "To calculate the difference between i, j, k, and l.",
                                        "d": "To calculate the quotient of i, j, k, and l.",
                                        "correct": "b"
                                    },
                                    {
                                        "question": "290. In the code provided, how many times will the innermost loop iterate?",
                                        "a": "2 times",
                                        "b": "4 times",
                                        "c": "8 times",
                                        "d": "16 times",
                                        "correct": "d"
                                    },
                                    {
                                        "question": "300. In the code provided, how many times will the if block inside the innermost loop be executed?",
                                        "a": "1 time",
                                        "b": "2 times",
                                        "c": "3 times",
                                        "d": "4 times",
                                        "correct": "d"
                                    },
                                    {
                                        "question": "301. What does the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 1; j <= 3; j++) {\n                for (int k = 1; k <= 2; k++) {\n                    for (int l = 1; l <= 3; l++) {\n                        if (i + j == k + l) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
                                        "a": "1 1 1 1 1 1 2 2 1 1 2 3",
                                        "b": "1 2 1 1 1 3 2 2 1 2 2 3",
                                        "c": "1 2 2 3 1 2 2 2 1 2 3 3",
                                        "d": "1 1 2 2 1 1 2 3 1 1 3 3",
                                        "correct": "b"
                                    },
                                    {
                                        "question": "302. What is the purpose of the i + j == k + l condition in the code provided?",
                                        "a": "To check if the sum of i and j is equal to the sum of k and l.",
                                        "b": "To check if the difference between i and j is equal to the difference between k and l.",
                                        "c": "To check if the product of i and j is equal to the product of k and l.",
                                        "d": "To check if the quotient of i and j is equal to the quotient of k and l.",
                                        "correct": "a"
                                    },
                                    {
                                        "question": "303. What does the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 4; k++) {\n                    for (int l = 4; l <= 5; l++) {\n                        if (i * j * k * l > 30) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
                                        "a": "2 2 3 4 2 2 3 5 2 2 4 4",
                                        "b": "2 3 4 5 2 3 4 5",
                                        "c": "1 2 3 4 2 3 4 5",
                                        "d": "1 1 3 4 1 1 4 5",
                                        "correct": "b"
                                    },
                                    {
                                        "question": "304. In the code provided, how many times will the innermost loop iterate?",
                                        "a": "2 times",
                                        "b": "3 times",
                                        "c": "4 times",
                                        "d": "5 times",
                                        "correct": "b"
                                    },
                                    {
                                        "question": "305. In the code provided, how many times will the if block inside the innermost loop be executed?",
                                        "a": "1 time",
                                        "b": "2 times",
                                        "c": "3 times",
                                        "d": "4 times",
                                        "correct": "d"
                                    },
                                    {
                                        "question": "306. What does the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 2; i++) {\n            for (int j = 2; j <= 3; j++) {\n                for (int k = 3; k <= 4; k++) {\n                    for (int l = 4; l <= 5; l++) {\n                        if (i * j * k * l > 20 && (i + j + k + l) % 3 == 0) {\n                            System.out.print(i + \" \" + j + \" \" + k + \" \" + l + \" \");\n                        }\n                    }\n                }\n            }\n        }\n    }\n}",
                                        "a": "1 2 3 4",
                                        "b": "1 2 3 5",
                                        "c": "2 2 3 4",
                                        "d": "2 2 3 5",
                                        "correct": "a"
                                    },
                                    {
                                        "question": "307. What does the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 5;\n        for (int i = 1; i <= 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "8",
                                        "b": "9",
                                        "c": "10",
                                        "d": "11",
                                        "correct": "d"
                                      },
                                      {
                                        "question": "308. What is the output of the following code?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i <= 3) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                        "a": "1 2",
                                        "b": "1 2 3",
                                        "c": "1 2 3 4",
                                        "d": "2 3 4",
                                        "correct": "b"
                                      },
                                      {
                                        "question": "309. In the following code, what will be the output if the initial value of `x` is 10?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        while (x > 0) {\n            System.out.print(x + \" \");\n            x -= 3;\n        }\n    }\n}",
                                        "a": "10 7 4 1",
                                        "b": "10 8 6 4",
                                        "c": "10 8 5 2",
                                        "d": "10 7 3",
                                        "correct": "a"
                                      },
                                      {
                                        "question": "310. What is the final value of `x` after the following code executes?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 0;\n        for (int i = 1; i <= 5; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "10",
                                        "b": "15",
                                        "c": "20",
                                        "d": "25",
                                        "correct": "b"
                                      },
                                      {
                                        "question": "311. What will the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        for (int i = 1; i <= 3; i++) {\n            x *= i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "2",
                                        "b": "4",
                                        "c": "6",
                                        "d": "12",
                                        "correct": "c"
                                      },
                                      {
                                        "question": "312. What is the output of the following code?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 2;\n        for (int i = 0; i < 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "2",
                                        "b": "3",
                                        "c": "5",
                                        "d": "7",
                                        "correct": "d"
                                      },
                                      {
                                        "question": "313. How many times will the following loop execute?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 0; i < 4; i++) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
                                        "a": "1 time",
                                        "b": "2 times",
                                        "c": "3 times",
                                        "d": "4 times",
                                        "correct": "d"
                                      },
                                      {
                                        "question": "314. What will be the final value of `x` after the following code executes?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        while (x <= 4) {\n            x++;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "3",
                                        "b": "4",
                                        "c": "5",
                                        "d": "6",
                                        "correct": "c"
                                      },
                                      {
                                        "question": "315. What will be the output of the following code?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int i = 1;\n        while (i < 4) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                        "a": "1 2",
                                        "b": "1 2 3",
                                        "c": "1 2 3 4",
                                        "d": "2 3 4",
                                        "correct": "b"
                                      },
                                      {
                                        "question": "316. What is the value of `x` after the following loop?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 10;\n        for (int i = 1; i <= 5; i++) {\n            x -= 2;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "0",
                                        "b": "2",
                                        "c": "4",
                                        "d": "8",
                                        "correct": "b"
                                      },
                                      {
                                        "question": "317. What does the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 1;\n        for (int i = 1; i < 4; i++) {\n            x *= i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "1",
                                        "b": "2",
                                        "c": "6",
                                        "d": "24",
                                        "correct": "c"
                                      },
                                      {
                                        "question": "318. What is the output of the following code?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int i = 2;\n        while (i <= 4) {\n            System.out.print(i + \" \");\n            i++;\n        }\n    }\n}",
                                        "a": "2 3",
                                        "b": "2 3 4",
                                        "c": "2 3 4 5",
                                        "d": "3 4 5",
                                        "correct": "b"
                                      },
                                      {
                                        "question": "319. In the following code, what will be the value of `x` after the loop?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 0;\n        for (int i = 1; i <= 3; i++) {\n            x += i;\n        }\n        System.out.print(x);\n    }\n}",
                                        "a": "3",
                                        "b": "4",
                                        "c": "6",
                                        "d": "9",
                                        "correct": "c"
                                      },
                                      {
                                        "question": "320. How many times will the loop in the following code execute?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i += 2) {\n            System.out.print(i + \" \");\n        }\n    }\n}",
                                        "a": "1 time",
                                        "b": "2 times",
                                        "c": "3 times",
                                        "d": "4 times",
                                        "correct": "c"
                                      },
                                      {
                                        "question": "321. What will the following code print?",
                                        "code": "class P {\n    public static void main(String[] args) {\n        int x = 3;\n        while (x > 0) {\n            x--;\n            System.out.print(x + \" \");\n        }\n    }\n}",
                                        "a": "2 1 0",
                                        "b": "3 2 1",
                                        "c": "2 1 0 -1",
                                        "d": "1 0 -1",
                                        "correct": "a"
                                      },
                                        {
                                            "question": "322. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                            "a": "Flag: true",
                                            "b": "Flag: false",
                                            "c": "none",
                                            "d": "not applicable",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "323. What is the purpose of the `i * j * k < 10` condition in the code provided?",
                                            "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                            "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                            "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                            "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "324. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
                                            "a": "A B C D E F G H I",
                                            "b": "A B C D E F G H J",
                                            "c": "A B C D E F G H K",
                                            "d": "A B C D E F G H L",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "325. In the code provided, how many times will the innermost loop iterate?",
                                            "a": "2 times",
                                            "b": "3 times",
                                            "c": "4 times",
                                            "d": "5 times",
                                            "correct": "d"
                                        },
                                        {
                                            "question": "326. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                            "a": "1 time",
                                            "b": "2 times",
                                            "c": "3 times",
                                            "d": "4 times",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "327. What will be the output of the following code?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k > 10) {\n                        count++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Count: \" + count);\n    }\n}",
                                            "a": "Count: 10",
                                            "b": "Count: 20",
                                            "c": "Count: 30",
                                            "d": "Count: 40",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "328. What is the purpose of the `i * j * k > 10` condition in the code provided?",
                                            "a": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                            "b": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                            "c": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                            "d": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "329. In the code provided, what is the data type of the `count` variable?",
                                            "a": "byte",
                                            "b": "short",
                                            "c": "int",
                                            "d": "long",
                                            "correct": "c"
                                        },
                                        {
                                            "question": "329. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    result += i / j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                            "a": "Result: 1.3666666666666667",
                                            "b": "Result: 1.511111111111111",
                                            "c": "Result: 1.6666666666666667",
                                            "d": "Result: 1.8222222222222222",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "330. In the code provided, what is the data type of the `result` variable?",
                                            "a": "float",
                                            "b": "double",
                                            "c": "int",
                                            "d": "long",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "331. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                            "a": "Flag: true",
                                            "b": "Flag: false",
                                            "c": "none",
                                            "d": "not applicable",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "332. What is the purpose of the `i * j * k < 10` condition in the code provided?",
                                            "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                            "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                            "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                            "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "333. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
                                            "a": "A B C D E F G H I",
                                            "b": "A B C D E F G H J",
                                            "c": "A B C D E F G H K",
                                            "d": "A B C D E F G H L",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "334. In the code provided, how many times will the innermost loop iterate?",
                                            "a": "2 times",
                                            "b": "3 times",
                                            "c": "4 times",
                                            "d": "5 times",
                                            "correct": "d"
                                        },
                                        {
                                            "question": "335. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                            "a": "1 time",
                                            "b": "2 times",
                                            "c": "3 times",
                                            "d": "4 times",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "336. What will be the output of the following code?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k > 10) {\n                        total++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                            "a": "Total: 10",
                                            "b": "Total: 20",
                                            "c": "Total: 30",
                                            "d": "Total: 40",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "337. What is the purpose of the `i * j * k > 10` condition in the code provided?",
                                            "a": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                            "b": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                            "c": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                            "d": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "338. In the code provided, what is the data type of the `total` variable?",
                                            "a": "byte",
                                            "b": "short",
                                            "c": "int",
                                            "d": "long",
                                            "correct": "c"
                                        },
                                        {
                                            "question": "339. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    result += i / j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                            "a": "Result: 1.3666666666666667",
                                            "b": "Result: 1.511111111111111",
                                            "c": "Result: 1.6666666666666667",
                                            "d": "Result: 1.8222222222222222",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "340. In the code provided, what is the data type of the `result` variable?",
                                            "a": "float",
                                            "b": "double",
                                            "c": "int",
                                            "d": "long",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "341. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                            "a": "Flag: true",
                                            "b": "Flag: false",
                                            "correct": "b"
                                        },
                                        {
                                            "question": "342. What is the purpose of the `i * j * k < 10` condition in the code provided?",
                                            "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                            "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                            "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                            "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "343. What does the following code print?",
                                            "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
                                            "a": "A B C D E F G H I",
                                            "b": "A B C D E F G H J",
                                            "c": "A B C D E F G H K",
                                            "d": "A B C D E F G H L",
                                            "correct": "a"
                                        },
                                        {
                                            "question": "345. In the code provided, how many times will the innermost loop iterate?",
                                            "a": "2 times",
                                            "b": "3 times",
                                            "c": "4 times",
                                            "d": "5 times",
                                            "correct": "d"
                                        },
                                        {
                                            "question": "346. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                            "a": "1 time",
                                            "b": "2 times",
                                            "c": "3 times",
                                            "d": "4 times",
                                            "correct": "a"
                                        },
                                        
                                            {
                                                "question": "347. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 2; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k % 2 == 0) {\n                        sum += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Sum: \" + sum);\n    }\n}",
                                                "a": "Sum: 40",
                                                "b": "Sum: 60",
                                                "c": "Sum: 80",
                                                "d": "Sum: 100",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "348. What is the purpose of the `i * j * k % 2 == 0` condition in the code provided?",
                                                "a": "To check if the product of `i`, `j`, and `k` is even.",
                                                "b": "To check if the product of `i`, `j`, and `k` is odd.",
                                                "c": "To check if the sum of `i`, `j`, and `k` is even.",
                                                "d": "To check if the sum of `i`, `j`, and `k` is odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "349. In the code provided, what is the data type of the `sum` variable?",
                                                "a": "byte",
                                                "b": "short",
                                                "c": "int",
                                                "d": "long",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "350. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (float i = 1.0f; i <= 5.0f; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    result += (i + j + k) / 3.0;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 30.0",
                                                "b": "Result: 40.0",
                                                "c": "Result: 50.0",
                                                "d": "Result: 60.0",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "351. In the code provided, what is the data type of the `result` variable?",
                                                "a": "float",
                                                "b": "double",
                                                "c": "int",
                                                "d": "long",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "352. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = false;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k < 10) {\n                        flag = true;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "353. What is the purpose of the `i * j * k < 10` condition in the code provided?",
                                                "a": "To check if the product of `i`, `j`, and `k` is less than 10.",
                                                "b": "To check if the product of `i`, `j`, and `k` is greater than 10.",
                                                "c": "To check if the sum of `i`, `j`, and `k` is less than 10.",
                                                "d": "To check if the sum of `i`, `j`, and `k` is greater than 10.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "354. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    System.out.print(character + \" \");\n                    character++;\n                }\n            }\n        }\n    }\n}",
                                                "a": "A B C D E F G H I",
                                                "b": "A B C D E F G H J",
                                                "c": "A B C D E F G H K",
                                                "d": "A B C D E F G H L",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "356. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "2 times",
                                                "b": "3 times",
                                                "c": "4 times",
                                                "d": "5 times",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "357. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                                "a": "1 time",
                                                "b": "2 times",
                                                "c": "3 times",
                                                "d": "4 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "358. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % j == 0 && j % k == 0) {\n                        result += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 15",
                                                "b": "Result: 33",
                                                "c": "Result: 57",
                                                "d": "Result: 75",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "359. What is the purpose of the `i % j == 0 && j % k == 0` condition in the code provided?",
                                                "a": "To check if both `i` is divisible by `j` and `j` is divisible by `k`.",
                                                "b": "To check if either `i` is divisible by `j` or `j` is divisible by `k`.",
                                                "c": "To check if both `i` is divisible by `j` or `j` is divisible by `k`.",
                                                "d": "To check if either `i` is divisible by `j` and `j` is divisible by `k`.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "360. What is the purpose of the `result` variable in the code provided?",
                                                "a": "To store the sum of `i`, `j`, and `k` whenever the condition is met.",
                                                "b": "To store the product of `i`, `j`, and `k` whenever the condition is met.",
                                                "c": "To store the quotient of `i`, `j`, and `k` whenever the condition is met.",
                                                "d": "To store the difference of `i`, `j`, and `k` whenever the condition is met.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "361. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double total = 0.0;\n        for (float i = 1.0f; i <= 3.0f; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    total += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 13.6",
                                                "b": "Total: 15.2",
                                                "c": "Total: 16.8",
                                                "d": "Total: 18.4",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "362. In the code provided, what is the data type of the `total` variable?",
                                                "a": "float",
                                                "b": "double",
                                                "c": "int",
                                                "d": "long",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "363. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int counter = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (byte j = 2; j <= 4; j++) {\n                for (short k = 3; k <= 5; k++) {\n                    if (i * j * k % 3 == 0) {\n                        counter++;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Counter: \" + counter);\n    }\n}",
                                                "a": "Counter: 9",
                                                "b": "Counter: 12",
                                                "c": "Counter: 15",
                                                "d": "Counter: 18",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "364. What is the purpose of the `i * j * k % 3 == 0` condition in the code provided?",
                                                "a": "To check if the product of `i`, `j`, and `k` is divisible by 3.",
                                                "b": "To check if the product of `i`, `j`, and `k` is not divisible by 3.",
                                                "c": "To check if the sum of `i`, `j`, and `k` is divisible by 3.",
                                                "d": "To check if the sum of `i`, `j`, and `k` is not divisible by 3.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "365. What is the purpose of the `counter` variable in the code provided?",
                                                "a": "To count the number of times the `if` condition is true.",
                                                "b": "To count the number of times the `if` condition is false.",
                                                "c": "To store the product of `i`, `j`, and `k` whenever the condition is met.",
                                                "d": "To store the sum of `i`, `j`, and `k` whenever the condition is met.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "366. What is the purpose of `(char) (character + i)` in the code provided?",
                                                "a": "To print the character `character` concatenated with `i`.",
                                                "b": "To print the character after incrementing its ASCII value by `i`.",
                                                "c": "To print the character before incrementing its ASCII value by `i`.",
                                                "d": "To print the character after decrementing its ASCII value by `i`.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "367. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "3 times",
                                                "b": "6 times",
                                                "c": "9 times",
                                                "d": "12 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "368. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 || j % 2 == 0 || k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 84",
                                                "b": "Total: 99",
                                                "c": "Total: 114",
                                                "d": "Total: 129",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "369. What is the purpose of the `i % 2 == 0 || j % 2 == 0 || k % 2 == 0` condition in the code provided?",
                                                "a": "To check if any of `i`, `j`, or `k` is even.",
                                                "b": "To check if all of `i`, `j`, and `k` are even.",
                                                "c": "To check if any of `i`, `j`, or `k` is odd.",
                                                "d": "To check if all of `i`, `j`, and `k` are odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "370. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 30.75",
                                                "b": "Result: 37.5",
                                                "c": "Result: 45.0",
                                                "d": "Result: 52.5",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "371. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (!(i * j * k % 2 == 0)) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "c": "none",
                                                "d": "not applicable",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "372. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H I",
                                                "b": "D E F H I J K",
                                                "c": "E F G I J K L",
                                                "d": "G H I K L M N",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "373. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
                                                "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
                                                "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
                                                "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
                                                "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "374. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "9 times",
                                                "b": "12 times",
                                                "c": "15 times",
                                                "d": "18 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "375. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                                "a": "6 times",
                                                "b": "9 times",
                                                "c": "12 times",
                                                "d": "15 times",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "376. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0 && (j + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 44",
                                                "b": "Total: 61",
                                                "c": "Total: 80",
                                                "d": "Total: 101",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "377. What is the purpose of the `(i + j) % 2 == 0 && (j + k) % 2 != 0` condition in the code provided?",
                                                "a": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is odd.",
                                                "b": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is even.",
                                                "c": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is even.",
                                                "d": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "378. What is the purpose of `(char) (character + i)` in the code provided?",
                                                "a": "To print the character `character` concatenated with `i`.",
                                                "b": "To print the character after incrementing its ASCII value by `i`.",
                                                "c": "To print the character before incrementing its ASCII value by `i`.",
                                                "d": "To print the character after decrementing its ASCII value by `i`.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "379. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "3 times",
                                                "b": "6 times",
                                                "c": "9 times",
                                                "d": "12 times",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "380. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 || j % 2 == 0 || k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 84",
                                                "b": "Total: 99",
                                                "c": "Total: 114",
                                                "d": "Total: 129",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "381. What is the purpose of the `i % 2 == 0 || j % 2 == 0 || k % 2 == 0` condition in the code provided?",
                                                "a": "To check if any of `i`, `j`, or `k` is even.",
                                                "b": "To check if all of `i`, `j`, and `k` are even.",
                                                "c": "To check if any of `i`, `j`, or `k` is odd.",
                                                "d": "To check if all of `i`, `j`, and `k` are odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "382. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 30.75",
                                                "b": "Result: 37.5",
                                                "c": "Result: 45.0",
                                                "d": "Result: 52.5",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "383. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (!(i * j * k % 2 == 0)) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "c": "none",
                                                "d": "not applicable",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "384. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H I",
                                                "b": "D E F H I J K",
                                                "c": "E F G I J K L",
                                                "d": "G H I K L M N",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "385. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
                                                "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
                                                "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
                                                "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
                                                "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "386. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "9 times",
                                                "b": "12 times",
                                                "c": "15 times",
                                                "d": "18 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "387. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                                "a": "6 times",
                                                "b": "9 times",
                                                "c": "12 times",
                                                "d": "15 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "386. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0 && (j + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 44",
                                                "b": "Total: 61",
                                                "c": "Total: 80",
                                                "d": "Total: 101",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "387. What is the purpose of the `(i + j) % 2 == 0 && (j + k) % 2 != 0` condition in the code provided?",
                                                "a": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is odd.",
                                                "b": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is even.",
                                                "c": "To check if the sum of `i` and `j` is even, and the sum of `j` and `k` is even.",
                                                "d": "To check if the sum of `i` and `j` is odd, and the sum of `j` and `k` is odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "388. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 3; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0 && j % 2 != 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 3.75",
                                                "b": "Result: 6.0",
                                                "c": "Result: 9.0",
                                                "d": "Result: 11.25",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "389. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 == 0) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "390. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H I",
                                                "b": "D E F H I J K",
                                                "c": "E F G I J K L",
                                                "d": "G H I K L M N",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "391. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
                                                "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
                                                "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
                                                "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
                                                "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "392. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "12 times",
                                                "b": "15 times",
                                                "c": "18 times",
                                                "d": "21 times",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "393. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                                "a": "6 times",
                                                "b": "9 times",
                                                "c": "12 times",
                                                "d": "15 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "394. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if ((i + j) % 2 != 0 && (j + k) % 2 == 0 && (i + k) % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 240",
                                                "b": "Total: 265",
                                                "c": "Total: 290",
                                                "d": "Total: 315",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "395. What is the purpose of the `(i + j) % 2 != 0 && (j + k) % 2 == 0 && (i + k) % 2 != 0` condition in the code provided?",
                                                "a": "To check if the sum of `i` and `j` is odd, the sum of `j` and `k` is even, and the sum of `i` and `k` is odd.",
                                                "b": "To check if the sum of `i` and `j` is even, the sum of `j` and `k` is odd, and the sum of `i` and `k` is even.",
                                                "c": "To check if the sum of `i` and `j` is odd, the sum of `j` and `k` is odd, and the sum of `i` and `k` is odd.",
                                                "d": "To check if the sum of `i` and `j` is even, the sum of `j` and `k` is even, and the sum of `i` and `k` is even.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "396. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 6; i++) {\n            for (double j = 2.0; j <= 7.0; j++) {\n                for (int k = 3; k <= 8; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 3.75",
                                                "b": "Result: 5.0",
                                                "c": "Result: 6.75",
                                                "d": "Result: 9.0",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "397. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if ((i + j) % 3 == 0 && (j + k) % 3 != 0 && (i + k) % 3 == 0) {\n                        flag = false;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "c": "none",
                                                "d": "not applicable",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "398. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 6; i++) {\n            for (int j = 2; j <= 7; j++) {\n                for (int k = 3; k <= 8; k++) {\n                    if (i % 3 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H I",
                                                "b": "D E F H I J K",
                                                "c": "E F G I J K L",
                                                "d": "G H I K L M N",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "399. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
                                                "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
                                                "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
                                                "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
                                                "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "400. In the code provided, how many times will the innermost loop iterate?",
                                                "a": "18 times",
                                                "b": "21 times",
                                                "c": "24 times",
                                                "d": "27 times",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "401. In the code provided, how many times will the `if` block inside the innermost loop be executed?",
                                                "a": "9 times",
                                                "b": "12 times",
                                                "c": "15 times",
                                                "d": "18 times",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "402. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if ((i + j) % 2 == 0) {\n                    }\n                    if ((j + k) % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 56",
                                                "b": "Total: 68",
                                                "c": "Total: 80",
                                                "d": "Total: 92",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "403. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 3; i++) {\n            for (double j = 2.0; j <= 4.0; j++) {\n                for (int k = 3; k <= 5; k++) {\n                    if (i % 2 == 0) {\n                        result += i * j / k;\n                    } else {\n                        break;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 0.0",
                                                "b": "Result: 2.0",
                                                "c": "Result: 4.0",
                                                "d": "Result: 6.0",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "404. What does the `break` statement in the code provided do?",
                                                "a": "It terminates the innermost loop and continues execution with the next statement after the loop.",
                                                "b": "It terminates the outermost loop and continues execution with the next statement after the loop.",
                                                "c": "It terminates all the loops and continues execution with the next statement after the loops.",
                                                "d": "It terminates the current method and continues execution with the next statement after the method.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "405. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k > 10) {\n                        break outer;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 15",
                                                "b": "Total: 36",
                                                "c": "Total: 55",
                                                "d": "Total: 66",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "406. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                "a": "To identify the different levels of nesting in the loops.",
                                                "b": "To create separate instances of the loops with different initial values.",
                                                "c": "To identify the exit points of the loops when using `break` statements.",
                                                "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "407. In the code provided, what is the purpose of the `if (j == 5) { break; }` statement?",
                                                "a": "To terminate the innermost loop when `j` is equal to 5.",
                                                "b": "To terminate the middle loop when `j` is equal to 5.",
                                                "c": "To skip the current iteration of the innermost loop when `j` is equal to 5.",
                                                "d": "To skip the current iteration of the middle loop when `j` is equal to 5.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "408. In the code provided, what is the purpose of the `if (i == 3) { break; }` statement?",
                                                "a": "To terminate the innermost loop when `i` is equal to 3.",
                                                "b": "To terminate the middle loop when `i` is equal to 3.",
                                                "c": "To skip the current iteration of the innermost loop when `i` is equal to 3.",
                                                "d": "To skip the current iteration of the middle loop when `i` is equal to 3.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "409. What will be the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 5; k++) {\n                    if (i * j * k == 24) {\n                        break outer;\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 96",
                                                "b": "Total: 132",
                                                "c": "Total: 180",
                                                "d": "Total: 216",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "410. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                "a": "To identify the different levels of nesting in the loops.",
                                                "b": "To create separate instances of the loops with different initial values.",
                                                "c": "To identify the exit points of the loops when using `break` statements.",
                                                "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "411. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                    }\n                    if (i % 2 != 0) {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 5.5",
                                                "b": "Result: 7.0",
                                                "c": "Result: 9.5",
                                                "d": "Result: 11.0",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "412. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        total += i + j + k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 60",
                                                "b": "Total: 96",
                                                "c": "Total: 120",
                                                "d": "Total: 156",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "418. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        System.out.print((char) (character + j) + \" \");\n                    } else {\n                        System.out.print((char) (character + k) + \" \");\n                    }\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H I",
                                                "b": "D E F H I J K",
                                                "c": "E F G I J K L",
                                                "d": "G H I K L M N",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "419. What is the purpose of `(char) (character + j)` and `(char) (character + k)` in the code provided?",
                                                "a": "To print the character after incrementing its ASCII value by `j` and `k`, respectively.",
                                                "b": "To print the character after decrementing its ASCII value by `j` and `k`, respectively.",
                                                "c": "To print the character after incrementing its ASCII value by `k` and `j`, respectively.",
                                                "d": "To print the character after decrementing its ASCII value by `k` and `j`, respectively.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "420. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 == 0 && k % 2 == 0) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 144",
                                                "b": "Total: 192",
                                                "c": "Total: 240",
                                                "d": "Total: 288",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "421. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        for (int i = 1; i <= 5; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 18.928571428571427",
                                                "b": "Result: 24.571428571428573",
                                                "c": "Result: 31.571428571428573",
                                                "d": "Result: 38.92857142857143",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "422. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        break middle;\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 312",
                                                "b": "Total: 504",
                                                "c": "Total: 624",
                                                "d": "Total: 726",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "423. What is the purpose of the label `outer` in the code provided?",
                                                "a": "To break out of the innermost loop when a certain condition is met.",
                                                "b": "To break out of the middle loop when a certain condition is met.",
                                                "c": "To break out of the outermost loop when a certain condition is met.",
                                                "d": "To skip the current iteration of the outermost loop when a certain condition is met.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "424. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    System.out.print((char) (character + j + k) + \" \");\n                }\n            }\n        }\n    }\n}",
                                                "a": "F G H J K L M N",
                                                "b": "I J K M N O P Q",
                                                "c": "K L M O P Q R S",
                                                "d": "M N O Q R S T U",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "425. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 87.0",
                                                "b": "Result: 96.0",
                                                "c": "Result: 104.0",
                                                "d": "Result: 108.0",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "426. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 != 0 && j % 2 == 0 && k % 2 != 0) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 348",
                                                "b": "Total: 504",
                                                "c": "Total: 624",
                                                "d": "Total: 756",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "427. What is the output of the following code?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k > 30.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 128.0",
                                                "b": "Result: 156.0",
                                                "c": "Result: 182.0",
                                                "d": "Result: 204.0",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "428. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 132",
                                                "b": "Total: 168",
                                                "c": "Total: 192",
                                                "d": "Total: 216",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "429. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        char character = 'A';\n        outer: for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 != 0 && j % 2 == 0 && k % 2 != 0) {\n                        break outer;\n                    }\n                    System.out.print((char) (character + i + j + k) + \" \");\n                }\n            }\n        }\n    }\n}",
                                                "a": "B C D F G H J K L",
                                                "b": "E F G H I J K L M",
                                                "c": "G H I J K L M N O",
                                                "d": "I J K L M N O P Q",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "430. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 48.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 94.0",
                                                "b": "Result: 102.0",
                                                "c": "Result: 118.0",
                                                "d": "Result: 126.0",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "431. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k == 36) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 288",
                                                "b": "Total: 336",
                                                "c": "Total: 384",
                                                "d": "Total: 432",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "432. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 5; i++) {\n            for (double j = 2.0; j <= 6.0; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i * j * k == 72.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 118.0",
                                                "b": "Result: 132.0",
                                                "c": "Result: 148.0",
                                                "d": "Result: 162.0",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "434. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 4; i++) {\n            for (int j = 2; j <= 5; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 48) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 168",
                                                "b": "Total: 192",
                                                "c": "Total: 216",
                                                "d": "Total: 240",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "435. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 54.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 142.0",
                                                "b": "Result: 156.0",
                                                "c": "Result: 172.0",
                                                "d": "Result: 186.0",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "436. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            for (int j = 2; j <= 6; j++) {\n                for (int k = 3; k <= 7; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        break;\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 336",
                                                "b": "Total: 396",
                                                "c": "Total: 456",
                                                "d": "Total: 516",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "437. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: -18.5",
                                                "b": "Result: -14.5",
                                                "c": "Result: -10.5",
                                                "d": "Result: -6.5",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "438. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "c": "none",
                                                "d": "not applicable",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "439. What is the purpose of the `break` statement with label `middle` in the code provided?",
                                                "code": "",
                                                "a": "To skip the current iteration of the middle loop.",
                                                "b": "To exit the middle loop when the condition is met.",
                                                "c": "To skip the remaining code in the innermost loop.",
                                                "d": "To terminate the outer loop when the condition is met.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "438. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 144",
                                                "b": "Total: 216",
                                                "c": "Total: 288",
                                                "d": "Total: 360",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "439. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
                                                "code": "",
                                                "a": "To skip the current iteration of the innermost loop when all variables are odd.",
                                                "b": "To terminate the innermost loop when all variables are odd.",
                                                "c": "To skip the current iteration of the middle loop when all variables are odd.",
                                                "d": "To terminate the middle loop when all variables are odd.",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "440. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 102",
                                                "b": "Total: 144",
                                                "c": "Total: 186",
                                                "d": "Total: 228",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "441. What is the purpose of the label `middle` in the code provided?",
                                                "code": "",
                                                "a": "To identify the different levels of nesting in the loops.",
                                                "b": "To create separate instances of the loops with different initial values.",
                                                "c": "To identify the exit points of the loops when using `break` statements.",
                                                "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "442. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                    }\n                    result += i * j / k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 9.75",
                                                "b": "Result: 13.75",
                                                "c": "Result: 18.25",
                                                "d": "Result: 23.25",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "442. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            for (double j = 2.0; j <= 5.0; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 54.0) {\n                        break outer;\n                    }\n                    result += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: 142.0",
                                                "b": "Result: 156.0",
                                                "c": "Result: 172.0",
                                                "d": "Result: 186.0",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "443. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 3; i++) {\n            outer: for (int j = 2; j <= 4; j++) {\n                for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        total += i + j + k;\n                        break outer;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 18",
                                                "b": "Total: 27",
                                                "c": "Total: 36",
                                                "d": "Total: 45",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "444. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0) {\n                        total += i + j + k;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 12",
                                                "b": "Total: 15",
                                                "c": "Total: 18",
                                                "d": "Total: 21",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "443. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                "code": "",
                                                "a": "To identify the different levels of nesting in the loops.",
                                                "b": "To create separate instances of the loops with different initial values.",
                                                "c": "To identify the exit points of the loops when using `break` statements.",
                                                "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "444. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                "a": "Result: -14.5",
                                                "b": "Result: -10.5",
                                                "c": "Result: -6.5",
                                                "d": "Result: -2.5",
                                                "correct": "a"
                                            },
                                            {
                                                "question": "445. What does the `break` statement in the code provided do?",
                                                "code": "",
                                                "a": "It exits the current loop and proceeds to the next iteration of the outer loop.",
                                                "b": "It exits the current loop and proceeds to the next iteration of the middle loop.",
                                                "c": "It exits the current loop and proceeds to the next iteration of the innermost loop.",
                                                "d": "It exits the current loop and terminates the entire loop structure.",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "446. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                "a": "Flag: true",
                                                "b": "Flag: false",
                                                "c": "none",
                                                "d": "not applicable",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "447. What is the purpose of the `break` statement with label `middle` in the code provided?",
                                                "code": "",
                                                "a": "To exit the innermost loop and continue with the next iteration of the middle loop.",
                                                "b": "To exit the middle loop and continue with the next iteration of the outer loop.",
                                                "c": "To skip the remaining code in the innermost loop and continue with the next iteration of the middle loop.",
                                                "d": "To terminate the middle loop and proceed with the next iteration of the outer loop.",
                                                "correct": "d"
                                            },
                                            {
                                                "question": "448. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 12) {\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 102",
                                                "b": "Total: 132",
                                                "c": "Total: 156",
                                                "d": "Total: 180",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "449. What is the purpose of the label `middle` in the code provided?",
                                                "code": "",
                                                "a": "To identify the different levels of nesting in the loops.",
                                                "b": "To create separate instances of the loops with different initial values.",
                                                "c": "To identify the exit points of the loops when using `break` statements.",
                                                "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                "correct": "c"
                                            },
                                            {
                                                "question": "450. What does the following code print?",
                                                "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                "a": "Total: 108",
                                                "b": "Total: 144",
                                                "c": "Total: 180",
                                                "d": "Total: 216",
                                                "correct": "b"
                                            },
                                            {
                                                "question": "451. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
                                                "code": "",
                                                "a": "To skip the current iteration of the innermost loop when all variables are odd.",
                                                "b": "To terminate the innermost loop when all variables are odd.",
                                                "c": "To skip the current iteration of the middle loop when all variables are odd.",
                                                "d": "To terminate the middle loop when all variables are odd.",
                                                "correct": "a"
                                            },
                                            
                                                {
                                                    "question": "452. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j * k < 10) {\n                        result += i + j * k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                    "a": "Result: 30",
                                                    "b": "Result: 45",
                                                    "c": "Result: 60",
                                                    "d": "Result: 75",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "453. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                    "a": "To identify the different levels of nesting in the loops.",
                                                    "b": "To create separate instances of the loops with different initial values.",
                                                    "c": "To identify the exit points of the loops when using `break` statements.",
                                                    "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                    "correct": "a"
                                                },
                                                {
                                                    "question": "454. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result += i * j / k;\n                    } else {\n                        result -= i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                    "a": "Result: -2.25",
                                                    "b": "Result: -0.75",
                                                    "c": "Result: 0.75",
                                                    "d": "Result: 2.25",
                                                    "correct": "b"
                                                },
                        
                                                {
                                                    "question": "455. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                    "a": "Flag: true",
                                                    "b": "Flag: false",
                                                    "c": "none",
                                                    "d": "not applicable",
                                                    "correct": "b"
                                                },
                                            
                                                {
                                                    "question": "456. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 8) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                    "a": "Total: 99",
                                                    "b": "Total: 108",
                                                    "c": "Total: 117",
                                                    "d": "Total: 126",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "457. What is the purpose of the label `middle` in the code provided?",
                                                    "a": "To identify the different levels of nesting in the loops.",
                                                    "b": "To create separate instances of the loops with different initial values.",
                                                    "c": "To identify the exit points of the loops when using `break` statements.",
                                                    "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                    "correct": "a"
                                                },
                                                {
                                                    "question": "458. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                    "a": "Total: 60",
                                                    "b": "Total: 90",
                                                    "c": "Total: 120",
                                                    "d": "Total: 150",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "459. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                    "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                    "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                    "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                    "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                    "correct": "a"
                                                },
                                                {
                                                    "question": "460. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24) {\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                    "a": "Total: 432",
                                                    "b": "Total: 540",
                                                    "c": "Total: 648",
                                                    "d": "Total: 756",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "461. What is the purpose of the label `middle` in the code provided?",
                                                    "a": "To identify the different levels of nesting in the loops.",
                                                    "b": "To create separate instances of the loops with different initial values.",
                                                    "c": "To identify the exit points of the loops when using `break` statements.",
                                                    "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                    "correct": "a"
                                                },
                                                {
                                                    "question": "462. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (double j = 2.0; j <= 5.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                    "a": "Result: -3.75",
                                                    "b": "Result: -1.25",
                                                    "c": "Result: 1.25",
                                                    "d": "Result: 3.75",
                                                    "correct": "b"
                                                },
                                            
                                                {
                                                    "question": "463. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break outer;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                    "a": "Flag: true",
                                                    "b": "Flag: false",
                                                    "correct": "b"
                                                },
                                               
                                                {
                                                    "question": "467. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                    "a": "Total: 72",
                                                    "b": "Total: 90",
                                                    "c": "Total: 108",
                                                    "d": "Total: 126",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "468. What is the purpose of the label `middle` in the code provided?",
                                                    "a": "To identify the different levels of nesting in the loops.",
                                                    "b": "To create separate instances of the loops with different initial values.",
                                                    "c": "To identify the exit points of the loops when using `break` statements.",
                                                    "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                    "correct": "a"
                                                },
                                                {
                                                    "question": "469. What does the following code print?",
                                                    "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                    "a": "Total: 54",
                                                    "b": "Total: 81",
                                                    "c": "Total: 108",
                                                    "d": "Total: 135",
                                                    "correct": "b"
                                                },
                                                {
                                                    "question": "470. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
                                                    "a": "To skip the current iteration of the innermost loop when all three variables are odd.",
                                                    "b": "To terminate the innermost loop when all three variables are odd.",
                                                    "c": "To skip the current iteration of the middle loop when all three variables are odd.",
                                                    "d": "To terminate the middle loop when all three variables are odd.",
                                                    "correct": "a"
                                                },
                                                
                                                    {
                                                        "question": "471. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 10) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: 28",
                                                        "b": "Result: 36",
                                                        "c": "Result: 44",
                                                        "d": "Result: 52",
                                                        "correct": "b"
                                                    },
                                                    {
                                                        "question": "472. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "473. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: -2.0",
                                                        "b": "Result: -1.5",
                                                        "c": "Result: -1.0",
                                                        "d": "Result: -0.5",
                                                        "correct": "b"
                                                    },
                                                  
                                                    {
                                                        "question": "474. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                        "a": "Flag: true",
                                                        "b": "Flag: false",
                                                        "c": "none",
                                                        "d": "not applicable",
                                                        "correct": "b"
                                                    },
                                                
                                                    {
                                                        "question": "475. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 8) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 99",
                                                        "b": "Total: 108",
                                                        "c": "Total: 117",
                                                        "d": "Total: 126",
                                                        "correct": "b"
                                                    },
                                                    {
                                                        "question": "476. What is the purpose of the label `middle` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "478. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 60",
                                                        "b": "Total: 90",
                                                        "c": "Total: 120",
                                                        "d": "Total: 150",
                                                        "correct": "b"
                                                    },
                                                    {
                                                        "question": "479. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                        "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                        "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                        "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                        "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "480. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k == 24) {\n                    }\n                    total += i * j * k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 432",
                                                        "b": "Total: 540",
                                                        "c": "Total: 648",
                                                        "d": "Total: 756",
                                                        "correct": "b"
                                                    },
                                                    {
                                                        "question": "481. What is the purpose of the label `middle` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "482. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 54",
                                                        "b": "Total: 81",
                                                        "c": "Total: 108",
                                                        "d": "Total: 135",
                                                        "correct": "b"
                                                    },
                                                    {
                                                        "question": "483. What is the purpose of the `if (i % 2 != 0 && j % 2 != 0 && k % 2 != 0)` statement?",
                                                        "a": "To skip the current iteration of the innermost loop when all three variables are odd.",
                                                        "b": "To terminate the innermost loop when all three variables are odd.",
                                                        "c": "To skip the current iteration of the middle loop when all three variables are odd.",
                                                        "d": "To terminate the middle loop when all three variables are odd.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "484. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: 18",
                                                        "b": "Result: 24",
                                                        "c": "Result: 30",
                                                        "d": "Result: 36",
                                                        "correct": "d"
                                                    },
                                                    {
                                                        "question": "485. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "486. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: -1.5",
                                                        "b": "Result: -0.75",
                                                        "c": "Result: 0.0",
                                                        "d": "Result: 0.75",
                                                        "correct": "a"
                                                    },
                                                    {
                                                        "question": "487. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                        "a": "Flag: true",
                                                        "b": "Flag: false",
                                                        "c": "none",
                                                        "d": "not applicable",
                                                        "correct": "b",
                                                    },
                                                    {
                                                        "question": "488. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 72",
                                                        "b": "Total: 90",
                                                        "c": "Total: 108",
                                                        "d": "Total: 126",
                                                        "correct": "b",
                                                    },
                                                    {
                                                        "question": "489. What is the purpose of the label `middle` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a",
                                                    },
                                                    {
                                                        "question": "490. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                        "a": "Total: 60",
                                                        "b": "Total: 90",
                                                        "c": "Total: 120",
                                                        "d": "Total: 150",
                                                        "correct": "b",
                                                    },
                                                    {
                                                        "question": "491. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                        "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                        "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                        "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                        "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                        "correct": "a",
                                                    },
                                                    {
                                                        "question": "492. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 20) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: 18",
                                                        "b": "Result: 24",
                                                        "c": "Result: 30",
                                                        "d": "Result: 36",
                                                        "correct": "d",
                                                    },
                                                    {
                                                        "question": "493. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                        "a": "To identify the different levels of nesting in the loops.",
                                                        "b": "To create separate instances of the loops with different initial values.",
                                                        "c": "To identify the exit points of the loops when using `break` statements.",
                                                        "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                        "correct": "a",
                                                    },
                                                    {
                                                        "question": "494. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                        "a": "Result: -2.5",
                                                        "b": "Result: -2.0",
                                                        "c": "Result: -1.5",
                                                        "d": "Result: -1.0",
                                                        "correct": "b",
                                                    },
                                                   
                                                    {
                                                        "question": "495. What does the following code print?",
                                                        "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                        "a": "Flag: true",
                                                        "b": "Flag: false",
                                                        "c": "none",
                                                        "d": "not applicable",
                                                        "correct": "b",
                                                    },
                                                    
                                                        {
                                                            "question": "496. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 8) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 72",
                                                            "b": "Total: 90",
                                                            "c": "Total: 108",
                                                            "d": "Total: 126",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "497. What is the purpose of the label `middle` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "498. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 60",
                                                            "b": "Total: 90",
                                                            "c": "Total: 120",
                                                            "d": "Total: 150",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "499. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "500. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 10) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 18",
                                                            "b": "Result: 24",
                                                            "c": "Result: 30",
                                                            "d": "Result: 36",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "501. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "502. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: -1.5",
                                                            "b": "Result: -0.75",
                                                            "c": "Result: 0.0",
                                                            "d": "Result: 0.75",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "503. What does the `break` statement in the code provided do?",
                                                            "a": "Terminates the innermost loop where it is used.",
                                                            "b": "Terminates the middle loop where it is used.",
                                                            "c": "Terminates the outermost loop where it is used.",
                                                            "d": "Skips the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "504. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break outer;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                            "a": "Flag: true",
                                                            "b": "Flag: false",
                                                            "c": "none",
                                                            "d": "not applicable",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "505. What is the purpose of the `break` statement with label `outer` in the code provided?",
                                                            "a": "To terminate the execution of the outermost loop.",
                                                            "b": "To terminate the execution of the innermost loop.",
                                                            "c": "To terminate the execution of the middle loop.",
                                                            "d": "To skip the rest of the current iteration of the outermost loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "506. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 72",
                                                            "b": "Total: 90",
                                                            "c": "Total: 108",
                                                            "d": "Total: 126",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "509. What is the purpose of the label `middle` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "507. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 60",
                                                            "b": "Total: 90",
                                                            "c": "Total: 120",
                                                            "d": "Total: 150",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "508. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "509. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 18",
                                                            "b": "Result: 24",
                                                            "c": "Result: 30",
                                                            "d": "Result: 36",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "510. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "511. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: -2.5",
                                                            "b": "Result: -2.0",
                                                            "c": "Result: -1.5",
                                                            "d": "Result: -1.0",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "512. What does the `break` statement in the code provided do?",
                                                            "a": "Terminates the innermost loop where it is used.",
                                                            "b": "Terminates the middle loop where it is used.",
                                                            "c": "Terminates the outermost loop where it is used.",
                                                            "d": "Skips the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "513. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 30) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                            "a": "Flag: true",
                                                            "b": "Flag: false",
                                                            "c": "none",
                                                            "d": "not applicable",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "514. What is the purpose of the `break` statement with label `middle` in the code provided?",
                                                            "a": "To terminate the execution of the middle loop.",
                                                            "b": "To terminate the execution of the innermost loop.",
                                                            "c": "To terminate the execution of the outermost loop.",
                                                            "d": "To skip the rest of the current iteration of the middle loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "515. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 8) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 72",
                                                            "b": "Total: 90",
                                                            "c": "Total: 108",
                                                            "d": "Total: 126",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "516. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j + k > 20) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 18",
                                                            "b": "Result: 24",
                                                            "c": "Result: 30",
                                                            "d": "Result: 36",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "517. What is the purpose of the `if (i * j + k > 20)` statement?",
                                                            "a": "To skip the current iteration of the innermost loop when the sum of variables meets the condition.",
                                                            "b": "To terminate the innermost loop when the sum of variables meets the condition.",
                                                            "c": "To skip the current iteration of the middle loop when the sum of variables meets the condition.",
                                                            "d": "To terminate the middle loop when the sum of variables meets the condition.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "518. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result += i * j / k;\n                    } else {\n                        result -= i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 0.75",
                                                            "b": "Result: 0.5",
                                                            "c": "Result: 0.25",
                                                            "d": "Result: 0.0",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "519. What does the `break` statement in the code provided do?",
                                                            "a": "Terminates the innermost loop where it is used.",
                                                            "b": "Terminates the middle loop where it is used.",
                                                            "c": "Terminates the outermost loop where it is used.",
                                                            "d": "Skips the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "520. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break inner;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                            "a": "Flag: true",
                                                            "b": "Flag: false",
                                                            "c": "none",
                                                            "d": "not applicable",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "521. What is the purpose of the `break` statement with label `inner` in the code provided?",
                                                            "a": "To terminate the innermost loop where it is used.",
                                                            "b": "To terminate the middle loop where it is used.",
                                                            "c": "To terminate the outermost loop where it is used.",
                                                            "d": "To skip the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "522. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 72",
                                                            "b": "Total: 90",
                                                            "c": "Total: 108",
                                                            "d": "Total: 126",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "523. What is the purpose of the label `middle` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "524. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        total += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 60",
                                                            "b": "Total: 90",
                                                            "c": "Total: 120",
                                                            "d": "Total: 150",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "525. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "526. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 18",
                                                            "b": "Result: 24",
                                                            "c": "Result: 30",
                                                            "d": "Result: 36",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "527. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "528. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 != 0) {\n                        result -= i * j / k;\n                    } else {\n                        result += i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: -2.5",
                                                            "b": "Result: -2.0",
                                                            "c": "Result: -1.5",
                                                            "d": "Result: -1.0",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "529. What does the `break` statement in the code provided do?",
                                                            "a": "Terminates the innermost loop where it is used.",
                                                            "b": "Terminates the middle loop where it is used.",
                                                            "c": "Terminates the outermost loop where it is used.",
                                                            "d": "Skips the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "530. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break middle;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                            "a": "Flag: true",
                                                            "b": "Flag: false",
                                                            "c": "none",
                                                            "d": "not applicable",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "531. What is the purpose of the `break` statement with label `middle` in the code provided?",
                                                            "a": "To terminate the execution of the middle loop.",
                                                            "b": "To terminate the execution of the innermost loop.",
                                                            "c": "To terminate the execution of the outermost loop.",
                                                            "d": "To skip the rest of the current iteration of the middle loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "532. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int total = 0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i + j + k == 9) {\n                    }\n                    total += i + j + k;\n                }\n            }\n        }\n        System.out.println(\"Total: \" + total);\n    }\n}",
                                                            "a": "Total: 72",
                                                            "b": "Total: 90",
                                                            "c": "Total: 108",
                                                            "d": "Total: 126",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "533. What is the purpose of the label `middle` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "534. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0) {\n                        result += i + j + k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 60",
                                                            "b": "Result: 90",
                                                            "c": "Result: 120",
                                                            "d": "Result: 150",
                                                            "correct": "b",
                                                        },
                                                        {
                                                            "question": "535. What is the purpose of the `if (i % 2 == 0 && j % 2 != 0 && k % 2 == 0)` statement?",
                                                            "a": "To skip the current iteration of the innermost loop when all three variables meet the specified conditions.",
                                                            "b": "To terminate the innermost loop when all three variables meet the specified conditions.",
                                                            "c": "To skip the current iteration of the middle loop when all three variables meet the specified conditions.",
                                                            "d": "To terminate the middle loop when all three variables meet the specified conditions.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "536. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        int result = 0;\n        outer: for (int i = 1; i <= 4; i++) {\n            middle: for (int j = 2; j <= 5; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j - k > 15) {\n                        result += i * j - k;\n                    } else {\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 18",
                                                            "b": "Result: 24",
                                                            "c": "Result: 30",
                                                            "d": "Result: 36",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "537. What is the purpose of the labels `outer`, `middle`, and `inner` in the code provided?",
                                                            "a": "To identify the different levels of nesting in the loops.",
                                                            "b": "To create separate instances of the loops with different initial values.",
                                                            "c": "To identify the exit points of the loops when using `break` statements.",
                                                            "d": "To differentiate between loops that use `break` statements and loops that don't.",
                                                            "correct": "c",
                                                        },
                                                        {
                                                            "question": "538. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        double result = 0.0;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (double j = 2.0; j <= 4.0; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (j % 2 == 0) {\n                        result += i * j / k;\n                    } else {\n                        result -= i * j / k;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
                                                            "a": "Result: 0.75",
                                                            "b": "Result: 0.5",
                                                            "c": "Result: 0.25",
                                                            "d": "Result: 0.0",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "539. What does the `break` statement in the code provided do?",
                                                            "a": "Terminates the innermost loop where it is used.",
                                                            "b": "Terminates the middle loop where it is used.",
                                                            "c": "Terminates the outermost loop where it is used.",
                                                            "d": "Skips the rest of the current iteration of the loop.",
                                                            "correct": "a",
                                                        },
                                                        {
                                                            "question": "540. What does the following code print?",
                                                            "code": "class P {\n    public static void main(String[] args) {\n        boolean flag = true;\n        outer: for (int i = 1; i <= 3; i++) {\n            middle: for (int j = 2; j <= 4; j++) {\n                inner: for (int k = 3; k <= 6; k++) {\n                    if (i * j * k > 40) {\n                        flag = false;\n                        break inner;\n                    }\n                }\n            }\n        }\n        System.out.println(\"Flag: \" + flag);\n    }\n}",
                                                            "a": "Flag: true",
                                                            "b": "Flag: false",
                                                            "c": "none",
                                                            "d": "not applicable",
                                                            "correct": "b",
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