const quizData = [
    
    {
        question:  "1.What is the output for given code?",
        code: `class A 
    {
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static void test() 
        {
            System.out.println("from test");
        }
    }`,
        a: "from main",
        b: "from test",
        c: "from main\nfrom test",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "What is the output for given code?",
        code: `class B
    {
        public static void test() 
        {
            System.out.println("from test");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    }`,
        a: "from test",
        b: "from main",
        c: "from main\nfrom test",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "2.What is the output for given code?",
        code: `class C
    {
        public static void test1() 
        {
            System.out.println("from test1");
        }
    
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static void test2() 
        {
            System.out.println("from test2");
        }
    }`,
        a: "from test1\nfrom test2",
        b: "from main",
        c: "from main\nfrom test2\nfrom test1",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "3.What is the output for given code?",
        code: `class D 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            System.out.println("main end");
        }
    
        public static void test()
        {
            System.out.println("from test");
        }
    }`,
        a: "main begin\nmain end\nfrom test",
        b: "Compile time error",
        c: "main begin\nfrom test\nmain end",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "4.What is the output for given code?",
        code: `class E 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            System.out.println("---------");
            test();
            System.out.println("---------");
            test();
            System.out.println("---------");
            test();
            System.out.println("main end");
        }
    
        public static void test()
        {
            System.out.println("from test");
        }
    }`,
        a: "main begin\nfrom test\n---------\nfrom test\n---------\nfrom test\n---------\nfrom test\nmain end",
        b: "Compile time error",
        c: "main begin\n---------\n---------\n---------\nmain end\nfrom test",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "5.What is the output for given code?",
        code: `class F 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            test();
            test();
            test();
            System.out.println("main end");
        }
    
        public static void test()
        {
            System.out.println("from test");
            System.out.println("from test");
            System.out.println("from test");
            System.out.println("from test");
        }
    }`,
        a: "main begin\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test",
        b: "Compile time error",
        c: "main begin\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nmain end",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "6.What is the output for given code?",
        code: `class F 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            test();
            test();
            test();
            System.out.println("main end");
        }
    
        public static void test()
        {
            System.out.println("from test");
            System.out.println("from test");
            System.out.println("from test");
            System.out.println("from test");
        }
    }`,
        a: "main begin\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test",
        b: "Compile time error",
        c: "main begin\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nfrom test\nmain end",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "7.What is the output for given code?",
        code: `class G
    {
        public static void main(String[] args) 
        {
            int i = 10;
            System.out.println("main begin:" + i);
            test();
            System.out.println("main end:" + i);
        }
    
        public static void test()
        {
            int i = 20;
            System.out.println("from test:" + i);
        }
    }`,
        a: "main begin:10\nmain end:10",
        b: "main begin:10\nfrom test:20\nmain end:10",
        c: "main begin:10\nfrom test:20",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "8.What is the output for given code?",
        code: `class H
    {
        public static void main(String[] args) 
        {
            System.out.println("main");
        }
    
        public static void test()
        {
            System.out.println("test" );
        }
    
        System.out.println("end");
    }`,
        a: "Compile Time Error",
        b: "main\nend",
        c: "main\ntest\nend",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "9.What is the output for given code?",
        code: `class I 
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test1();
            System.out.println("--------");
            test2();
            System.out.println("main end");
        }
    
        public static void test1()
        {
            System.out.println("from test1");
        }
    
        public static void test2()
        {
            System.out.println("from test2");
        }
    }`,
        a: "Compile Time Error",
        b: "main begin\nfrom test1\n--------\nfrom test2\nmain end",
        c: "main begin\n--------\nmain end",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "10.What is the output for given code?",
        code: `class J
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test1();
            System.out.println("--------");
            test2();
            System.out.println("main end");
        }
    
        public static void test1()
        {
            System.out.println("from test1 begin");
            test2();
            System.out.println("from test1 end");
        }
    
        public static void test2()
        {
            System.out.println("from test2");
        }
    }`,
        a: "Compile Time Error",
        b: "main begin\nfrom test1 begin\nfrom test2\n--------\nfrom test2\nmain end",
        c: "main begin\nfrom test1 begin\nfrom test2\nfrom test1 end\n--------\nfrom test2\nmain end",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "11.What is the output for given code?",
        code: `class K
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test1();
            System.out.println("--------");
            test2();
            System.out.println("main end");
        }
    
        public static void test1()
        {
            System.out.println("from test1 begin");
            test2();
            System.out.println("from test1 end");
        }
    
        public static void test2()
        {
            System.out.println("from test2 begin");
            test1();
            System.out.println("from test2 end");
        }
    }`,
        a: "Compile Time Error",
        b: "Run Time Error",
        c: "main begin\nfrom test1 begin\nfrom test2 begin\nfrom test1 end\n--------\nfrom test2 begin\nfrom test2 end\nmain end",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "12.What is the output for given code?",
        code: `class L 
    {
        public static void main(String[] args) 
        {
            System.out.println("main");
            return;
        }
    }`,
        a: "Compile Time Error",
        b: "Run Time Error",
        c: "main",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "13.What is the output for given code?",
        code: `class M
    {
        public static void main(String[] args) 
        {
            System.out.println("main");
            return 200;
        }
    }`,
        a: "Compile Time Error",
        b: "Run Time Error",
        c: "main",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "14.What is the output for given code?",
        code: `class N
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            return;
            System.out.println("main end");
        }
    }`,
        a: "Compile Time Error",
        b: "Run Time Error",
        c: "main begin\nmain end",
        d: "None of the above",
        correct: "a",
    },
    {
        question:  "15.What is the output for given code?",
        code: `class O
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            if(true)
            {
                System.out.println("if block");        
                return;
            }
            System.out.println("main end");
        }
    }`,
        a: "Compile Time Error",
        b: "main begin\nif block",
        c: "main begin\nmain end",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "16.What is the output for given code?",
        code: `class P
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            System.out.println("main end");
        }
    
        public static void test()
        {
            System.out.println("test begin");
            if(true)
            {
                System.out.println("if block");        
                return;
            }
            System.out.println("test end");
        }
    }`,
        a: "main begin\ntest begin\nif block\nmain end",
        b: "main begin\ntest begin\ntest end\nmain end",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "17.What is the output for given code?",
        code: `class Q 
    {
        public static void main(String[] args) 
        {
            System.out.println("Hello World!");
            return 100;
        }
    }`,
        a: "Hello World",
        b: "Run Time Error",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "18.What is the output for given code?",
        code: `class R 
    {
        static public void main(String[] args) 
        {
            System.out.println("Hello World!");
        }
    }`,
        a: "Hello World",
        b: "Run Time Error",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "19.What is the output for given code?",
        code: `class S 
    {
        public void static main(String[] args) 
        {
            System.out.println("Hello World!");
        }
    }`,
        a: "Hello World",
        b: "Run Time Error",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "20.What is the output for given code?",
        code: `class T 
    {
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static int test()
        {
            System.out.println("from test");
        }
    }`,
        a: "from main\nfrom test",
        b: "Compile time error",
        c: "from main",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "21.What is the output for given code?",
        code: `class U
    {
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return;
        }
    }`,
        a: "from main\nfrom test",
        b: "Compile time error",
        c: "from main",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "22.What is the output for given code?",
        code: `class V
    {
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return false;
        }
    }`,
        a: "from main\nfrom test",
        b: "Compile time error",
        c: "from main",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "23.What is the output for given code?",
        code: `class W
    {
        public static void main(String[] args) 
        {
            System.out.println("from main");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "from main\nfrom test",
        b: "Compile time error",
        c: "from main",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "24.What is the output for given code?",
        code: `class X
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            test();
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\nmain end",
        b: "Compile time error",
        c: "main begin\nfrom test",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "25.What is the output for given code?",
        code: `class Y
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            int i = test();
            System.out.println("in the main:" + i);
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\nin the main:0\nmain end",
        b: "Compile time error",
        c: "main begin\nfrom test\nin the main:100\nmain end",
        d: "None of the above",
        correct: "c",
    },
    
    {
        question:  "26.What is the output for given code?",
        code: `class Z
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            boolean i = test();
            System.out.println("in the main:" + i);
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\nin the main:false\nmain end",
        b: "Compile time error",
        c: "main begin\nfrom test\nin the main:100\nmain end",
        d: "None of the above",
        correct: "b",
    },
    
    {
        question:  "27.What is the output for given code?",
        code: `class Z1
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            System.out.println("in the main:" + test());
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\nin the main:100",
        b: "Compile time error",
        c: "main begin\nfrom test\nin the main:100\nmain end",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question:  "28.What is the output for given code?",
        code: `class Z2
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            System.out.println(test() + " in the main:");
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\n100 in the main\nmain end",
        b: "Compile time error",
        c: "main begin\nfrom test\nin the main:100\nmain end",
        d: "None of the above",
        correct: "a",
    },
    
    {
        question: "23.What is the output for given code?",
        code: `class Z3
    {
        public static void main(String[] args) 
        {
            System.out.println("main begin");
            int i = 10 + test();
            System.out.println("----------------");
            System.out.println(test() + " in the main@a");
            System.out.println("----------------");
            System.out.println(i + test() + " in the main@b");
            System.out.println("----------------");
            System.out.println(i + test() + test() + " in the main@c");
            System.out.println("----------------");
            System.out.println("@d:" + i + test() + test() + test());
            System.out.println("main end");
        }
    
        public static int test()
        {
            System.out.println("from test");
            return 100;
        }
    }`,
        a: "main begin\nfrom test\n----------------\nfrom test\n100 in the main@a\n----------------\nfrom test\n210 in the main@b\n----------------\nfrom test\nfrom test\n310 in the main@c\n----------------\nfrom test\nfrom test\nfrom test\nmain end",
        b: "main begin\nfrom test\n----------------\nfrom test\n100 in the main@a\n----------------\nfrom test\n210 in the main@b\n----------------\nfrom test\nfrom test\n310 in the main@c\n----------------\nfrom test\nfrom test\nfrom test\n@d:110100100100\nmain end",
        c: "Compile Time Error",
        d: "None of the above",
        correct: "a",
    },
    {
        question : "24.What is the output for given code?",
        code : "class Z4 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        byte b1 = test();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static byte test() {\n        System.out.println(\"from test\");\n        return 100;\n    }\n}",
         a : "main begin\nfrom test\nmain end:100",
         b : "main begin\nfrom test\nmain end:0",
         c : "Compile Time Error",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "25.What is the output for given code?",
         code : "class Z5 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        double b1 = test();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static double test() {\n        System.out.println(\"from test\");\n        return 1.5;\n    }\n}",
         a : "main begin\nfrom test\nmain end:15",
         b : "main begin\nfrom test\nmain end:1.5",
         c : "Compile Time Error",
         d : "None of the above",
         correct : "b"
    },
    {
         question : "26.What is the output for given code?",
         code : "class Z6 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        boolean b1 = test();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static boolean test() {\n        System.out.println(\"from test\");\n        return true;\n    }\n}",
         a : "main begin\nfrom test\nmain end:true",
         b : "main begin\nfrom test\nmain end:false",
         c : "Compile Time Error",
         d : "None of the above",
         correct : "a"
    },
    {
         question: "27.What is the output for given code?",
         code : "class Z7 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        char b1 = test();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static char test() {\n        System.out.println(\"from test\");\n        return '$';\n    }\n}",
         a : "Compile time error",
         b : "Run Time Error",
         c : "main begin\nfrom test\nmain end:$",
         d : "None of the above",
         correct : "c"
    },
    {
         question : "28.What is the output for given code?",
         code : "class Z8 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static int test1() {\n        System.out.println(\"from test1\");\n        int i;\n        return i;\n    }\n}",
         a : "Compile time error",
         b : "Run Time Error",
         c : "main begin\nfrom test\nmain end:0",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "29.What is the output for given code?",
         code : "class Z9 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static int test1() {\n        System.out.println(\"from test1\");\n        int i = 100;\n        return i;\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test\nmain end:100",
         c : "None",
         d : "None of the above",
         correct : "b"
    },
    {
        question: "30.What is the output for given code?",
         code : "class Z10 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static int test1() {\n        System.out.println(\"from test1\");\n        return test2();\n    }\n    public static int test2() {\n        System.out.println(\"from test2\");\n        return 200;\n    }\n}",
         a : "main begin\nfrom test1\nfrom test2\nmain end:200",
         b : "main begin\nfrom test1\nfrom test2\nmain end:0",
         c : "None",
         d : "None of the above",
         correct : "a"
    },
    {
         question: "31.What is the output for given code?",
         code : "class Z11 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static int test1() {\n        System.out.println(\"from test1\");\n        return 100 + 300;\n    }\n}",
         a : "main begin\nfrom test1\nmain end:100 + 300",
         b : "main begin\nfrom test1\nmain end:400",
         c : "None",
         d : "None of the above",
         correct : "b"
    },
    {
         question : "32.What is the output for given code?",
         code : "class Z12 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static String test1() {\n        System.out.println(\"from test1\");\n        return \"Hello\";\n    }\n}",
         a : "main begin\nfrom test1\nmain end:Hello",
         b : "main begin\nfrom test1\nmain end:",
         c : "None",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "33.What is the output for given code?",
         code : "class Z13 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String b1 = test1();\n        System.out.println(\"main end:\" + b1);\n    }\n    public static String test1() {\n        System.out.println(\"from test1\");\n        String str = \"hello to all\";\n        return str;\n    }\n}",
         a : "main begin\nfrom test1\nmain end:hello to all",
         b : "main begin\nfrom test1\nmain end: hello to all",
         c : "None",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "34.What is the output for given code?",
         code : "class Z14 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
         a : "Compile time error",
         b : "main begin\nmain end\nfrom test",
         c : "main begin\nmain end",
         d : "None of the above",
         correct : "c"
    },
    {
         question : "35.What is the output for given code?",
         code : "class Z15 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test();\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
         a : "Compile time error",
         b : "main begin\nmain end\nfrom test",
         c : "main begin\nfrom test\nmain end",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "36.What is the output for given code?",
         code : "class Z16 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(true);\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
         a : "Compile time error",
         b : "main begin\nmain end\nfrom test",
         c : "main begin\nfrom test\nmain end",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "37.What is the output for given code?",
         code : "class Z17 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test\");\n    }\n}",
         a : "Compile time error",
         b : "main begin\nmain end\nfrom test",
         c : "main begin\nfrom test\nmain end",
         d : "None of the above",
        correct : "b"
    },
    {
         question : "38.What is the output for given code?",
         code : "class Z18 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test:200\nfrom test:30\nmain end:",
         c : "main begin\nfrom test:200\nfrom test:30",
         d : "None of the above",
         correct : "b"
    },
    {
         question : "39.What is the output for given code?",
         code : "class Z19 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nmain end:200\nfrom test:200",
         c : "main begin\nfrom test:200\nmain end:200",
         d : "None of the above",
         correct : "a"
    },
    {
         question: "40.What is the output for given code?",
         code : "class Z20 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test:200\nfrom test:30\nmain end:",
         c : "main begin\nfrom test:200\nfrom test:30",
         d : "None of the above",
         correct : "b"
    },
    {
         question : "41.What is the output for given code?",
         code : "class Z21 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test:200\nmain end:",
         c : "main begin\nfrom test:200",
         d : "None of the above",
         correct : "a"
    },
    {
         question : "42.What is the output for given code?",
         code : "class Z22 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4.5);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test:200\nmain end:",
         c : "main begin\nfrom test:200",
         d : "None of the above",
         correct : "a"
    },
    {
         question: "43.What is the output for given code?",
         code : "class Z23 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
         a : "Compile time error",
         b : "main begin\nfrom test:200\nmain end:",
         c : "main begin\nfrom test:200",
         d : "None of the above",
         correct : "c"
    },
    
        {
             question : "44.What is the output for given code?",
             code : "class Z24 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(200, 4);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i + \", \" + j);\n    }\n}",
             a : "main begin\nfrom test:200, 4\nmain end:",
             b : "main begin\nfrom test:200\nmain end:",
             c : "main begin\nfrom test: 200\nmain end:",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "45.What is the output for given code?",
             code : "class Z25 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int i) {\n        System.out.println(\"from test:\");\n    }\n}",
             a : "main begin\nmain end\nfrom test",
             b : "Compile time error",
             c : "main begin\nmain end",
             d : "None of the above",
             correct : "b"
        },
        {
             question : "46.What is the output for given code?",
             code : "class Z26 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, double i) {\n        System.out.println(\"from test:\");\n    }\n}",
             a : "main begin\nmain end\nfrom test",
             b : "Compile time error",
             c : "main begin\nmain end",
             d : "None of the above",
             correct : "b"
        },
        {
             question : "47.What is the output for given code?",
             code : "class Z27 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        double i;\n        System.out.println(\"from test:\");\n    }\n}",
             a : "main begin\nmain end\nfrom test",
             b : "Compile time error",
             c : "main begin\nmain end",
             d : "None of the above",
             correct : "b"
        },
        {
             question : "48.What is the output for given code?",
             code : "class Z28 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, 20, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\");\n    }\n}",
             a : "main begin\nmain end\nfrom test",
             b : "Compile time error",
             c : "main begin\nfrom test\nmain end",
             d : "None of the above",
             correct : "b"
        },
        {
             question : "49.What is the output for given code?",
             code : "class Z29 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, false, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\");\n    }\n}",
             a : "main begin\nmain end\nfrom test",
             b : "Compile time error",
             c : "main begin\nfrom test\nmain end",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "50.What is the output for given code?",
             code : "class Z30 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, false, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, boolean j, int k) {\n        System.out.println(\"from test:\" + i);\n        System.out.println(\"from test:\" + j);\n        System.out.println(\"from test:\" + k);\n    }\n}",
             a : "main begin\nfrom test:10\nfrom test:false\nfrom test:30\nmain end:",
             b : "Compile time error",
             c : "main begin\nfrom test:false\nfrom test:10\nfrom test:30\nmain end",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "51.What is the output for given code?",
             code : "class Z31 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x;\n        test(x);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
             a : "main begin\nfrom test:0\nmain end:",
             b : "Compile time error",
             c : "main begin\nmain end",
             d: "None of the above",
             correct : "b"
        },
        {
             question : "52.What is the output for given code?",
             code : "class Z32 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x = 30;\n        test(x);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
             a : "main begin\nfrom test:30\nmain end:",
             b : "Compile time error",
             c : "main begin\nmain end",
             d : "None of the above",
             correct : "a"
        },
        {
             question :"53.What is the output for given code?",
             code : "class Z33 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x;\n        test(x = 10);\n        System.out.println(\"main end:\" + x);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n    }\n}",
             a : "main begin\nfrom test:10\nmain end:",
             b : "Compile time error",
             c : "main begin\nmain end",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "54.What is the output for given code?",
             code : "class Z34 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i;\n        test(i = 10);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
             a : "main begin\nfrom test:10\nmain end:10",
             b : "Compile time error",
             c : "main begin\nfrom test:10\nmain end:30",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "55.What is the output for given code?",
             code : "class Z35 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 1;\n        test(i + 20);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
             a : "main begin\nfrom test:21\nmain end:1",
             b : "Compile time error",
             c : "main begin\nfrom test:21\nmain end:30",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "56.What is the output for given code?",
             code : "class Z36 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int x = 1;\n        test(x + 20);\n        System.out.println(\"main end:\" + x);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
             a : "main begin\nfrom test:21\nmain end:1",
             b : "Compile time error",
             c : "main begin\nfrom test:21\nmain end:30",
             d : "None of the above",
             correct : "a"
        },
        {
             question : "57.What is the output for given code?",
             code : "class Z37 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 1;\n        test(i);\n        System.out.println(\"main end:\" + i);\n    }\n    public static void test(int i) {\n        System.out.println(\"from test:\" + i);\n        i = 30;\n    }\n}",
             a : "main begin\nfrom test:1\nmain end:30",
             b : "Compile time error",
             c : "main begin\nfrom test:1\nmain end:1",
             d : "None of the above",
             correct : "c"
        },
        {
             question : "58.What is the output for given code?",
             code : "class Z38 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        test(10, 20, 30);\n        System.out.println(\"main end:\");\n    }\n    public static void test(int i, int j) {\n        System.out.println(\"from test:\" + i + \", \" + j);\n    }\n}",
             a : "main begin\nfrom test:10, 20\nmain end:",
             b : "Compile time error",
             c : "main begin\nfrom test:10\nmain end:",
             d : "None of the above",
             correct : "b"
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