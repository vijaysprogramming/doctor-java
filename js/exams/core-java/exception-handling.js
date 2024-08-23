const quizData = [
    
    
        {
            "question": 1,
            "code": `public class M1 {
        public static void main(String[] args) {
            int i = 10 / 0;
            int j = Integer.parseInt("abc");
            String s1 = null;
            int k = s1.length();
            int[] elements = new int[5];
            int m = elements[200];
            Object obj1 = new Integer(90);
            String str = (String) obj1;
            main(null);
            int[] array = new int[999999999];
        }
    }`,
            "a": "NumberFormatException",
            "b": "NullPointerException",
            "c": "ClassCastException",
            "d": "ArithmeticException",
            "correct": "d"
        },
        {
            "question": 2,
            "code": `public class M2 {
        public static void main(String[] args) {
            try {
                Class.forName("");
            } catch(ClassNotFoundException ex) {
                ex.printStackTrace();
            }
        }
    }`,
            "a": "ArithmeticException",
            "b": "ClassNotFoundException",
            "c": "ClassCastException",
            "d": "NullPointerException",
            "correct": "b"
        },
        {
            "question": 3,
            "code": `import java.io.FileReader;
    import java.io.IOException;
    public class M4 {
        public static void main(String[] args) {
            try {
                FileReader f2 = new FileReader("");
            } catch(IOException ex) {
            }
        }
    }`,
            "a": "ArithmeticException",
            "b": "ClassNotFoundException",
            "c": "ClassCastException",
            "d": "NullPointerException",
            "e": "None of the above",
            "correct": "e"
        },
        {
            "question": 4,
            "code": `import java.sql.DriverManager;
    import java.sql.SQLException;
    public class M5 {
        public static void main(String[] args) {
            try {
                DriverManager.getConnection("");
            } catch(SQLException ex) {
            }
        }
    }`,
            "a": "ArithmeticException",
            "b": "ClassNotFoundException",
            "c": "ClassCastException",
            "d": "No output",
            "e": "None of the above",
            "correct": "e"
        },
        {
            "question": 5,
            "code": `public class M6 {
        public static void main(String[] args) {
            try {
                Thread.sleep(10000);
            } catch(InterruptedException ex) {
            }
        }
    }`,
            "a": "ArithmeticException",
            "b": "ClassNotFoundException",
            "c": "ClassCastException",
            "d": "No output",
            "e": "None of the above",
            "correct": "e"
        },
        {
            "question": 6,
            "code": `import java.text.ParseException;
    import java.text.SimpleDateFormat;
    public class M7 {
        public static void main(String[] args) {
            SimpleDateFormat sd = null;
            try {
                sd.parse("");
            } catch(ParseException ex) {
            }
        }
    }`,
            "a": "ArithmeticException",
            "b": "ClassNotFoundException",
            "c": "NullPointerException",
            "d": "ClassCastException",
            "e": "None of the above",
            "correct": "c"
        },
        {
            "question": 7,
            "code": `package com.lara2;
    public class M1 {
        public static void main(String[] args) {
            System.out.println("main begin");
            System.out.println("-------");
            System.out.println("---------");
            String s1 = null;
            System.out.println("---------");
            Object obj1 = new Integer(40);
            System.out.println("main end");
        }
    }`,
            "a": "main begin<br>-------<br>---------<br>main end",
            "b": "NullPointerException",
            "c": "Compile Time Error",
            "correct": "a"
        },
        {
            "question": 8,
            "code": `package com.lara2;
    public class M2 {
        public static void main(String[] args) {
            System.out.println("main begin");
            System.out.println("-------");
            int[] elements = new int[999999999];
            System.out.println("-------");
            System.out.println("main end");
        }
    }`,
            "a": "main begin<br>-------<br>---------<br>main end",
            "b": "NullPointerException",
            "c": "ArrayIndexOutOfBoundsException",
            "d": "StackOverFlowError",
            "e": "None of the above",
            "correct": "e"
        },
        {
            "question": 9,
            "code": `package com.lara2;
    public class M3 {
        public static void main(String[] args) {
            System.out.println("main begin");
            try {
                System.out.println(1);
                main(null);
                System.out.println(2);
            } catch(StackOverflowError err) {
                System.out.println(3);
            }
            System.out.println("main end");
        }
    }`,
            "a": "yes",
            "b": "no",
            "correct": "a"
        },
        {
            "question": 10,
            "code": `package com.lara2;
    public class M4 {
        public static void main(String[] args) {
            System.out.println("main begin");
            try {
                System.out.println(1);
                int[] elements = new int[999999999];
                System.out.println(2);
            } catch(OutOfMemoryError err) {
                System.out.println(3);
            }
            System.out.println("main end");
        }
    }`,
            "a": "OutOfMemoryError",
            "b": "main begin<br>1<br>3<br>main end",
            "c": "ArrayIndexOutOfBoundsException",
            "correct": "b"
        },
        {
            "question": 11,
            "code": `package com.lara1;
    public class M1 {
        int test1() {
            return 10;
        }        
        int test2(boolean flag) {
            return 10;
        }
        int test3(boolean flag) {
            if(flag) {
                return 10;
            }
            return 20;
        }
        int test4(boolean flag) {
            if(flag) {
                return 10;
            } else {
                return 20;
            }
        }        
        int test7(boolean flag) {
            if(flag) {
                return 20;
            } else {
            }
            return 10;
        }        
        int test8(boolean flag) {
            if(flag) {
            } else {
                return 20;
            }
            return 10;
        }                
    }`,
            "a": "yes",
            "b": "no",
            "correct": "a"
        },
        {
            "question": 12,
            "code": `package com.lara1;
    public class M2 {
        int test1() {
            try {
                //some statements
            } catch(ArithmeticException ex) {
                //some statements
            }
            return 10;
        }
        int test2() {
            try {
                //some statements
                return 20;
            } catch(ArithmeticException ex) {
                //some statements
            }
            return 10;
        }
    }`,
            "a": "no",
            "b": "yes",
            "correct": "b"
        },
        {
            "question": 13,
            "code": `package com.lara1;
    public class M3 {
        int test1() {
            try {
                //some statements
            } catch(ArithmeticException ex) {
                //some statements
            } catch(NullPointerException ex) {
                //some statements
            }
            return 10;
        }
        int test2() {
            try {
                //some statements
                return 10;
            } catch(ArithmeticException ex) {
                //some statements
            } catch(NullPointerException ex) {
                //some statements
            }
            return 20;
        }
        int test3() {
            try {
                //some statements                        
            } catch(ArithmeticException ex) {
                //some statements
                return 10;
            } catch(NullPointerException ex) {
                //some statements
            }
            return 20;
        }
        int test4() {
            try {
                //some statements                        
            } catch(ArithmeticException ex) {
                //some statements
                return 10;
            } catch(NullPointerException ex) {
                //some statements
                return 5;
            }
            return 20;
        }
        int test5() {
            try {
                //some statements                        
            } catch(ArithmeticException ex) {
                //some statements
            } catch(NullPointerException ex) {
                //some statements
                return 5;
            }
            return 20;
        }        
    }`,
            "a": "yes",
            "b": "no",
            "correct": "a",
        },
        {
            "question": 14,
            "code": `package com.lara1;
    public class M4 {
        int test1() {
            try {
                //some statements
                return 20;
            } catch(ArithmeticException ex) {
                //some statements
            } finally {
                //some statments
            }
            return 10;
        }
        int test3() {
            try {
                //some statements                        
            } catch(ArithmeticException ex) {
                //some statements
                return 20;
            } finally {
                //some statments
            }
            return 10;
        }
        int test4() {
            try {
                //some statements                        
            } catch(ArithmeticException ex) {
                //some statements                        
            } finally {
                //some statments
                return 20;
            }
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": 15,
            "code": `class H {
        void test1() throws NullPointerException {
        }
    }
    class I extends H {
        void test2() throws ClassCastException {
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": 16,
            "code": `public class AgeIsNegativeException extends ArithmeticException {
        public AgeIsNegativeException() {
        }
        public AgeIsNegativeException(String msg) {
            super(msg);
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "a"
        },
        {
            "question": 17,
            "code": `public class B {
        public static void main(String[] args) {
            System.out.println(1);
            if(true) {
                throw new ArithmeticException();
            }
            System.out.println(2);
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": 18,
            "code": `public class C {
        public static void main(String[] args) {
            System.out.println(1);
            if(true) {
                throw new ArithmeticException("some message");
            }
            System.out.println(2);
        }
    }`,
            "a": "yes",
            "b": "no",
            "c": "Not applicable",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": 19,
            "code": `import java.util.Scanner;
    public class D {
        public static void main(String[] args) {
            System.out.println(1);
            Scanner sc = new Scanner(System.in);
            System.out.println("enter age");
            int age = sc.nextInt();
            if(age <= 0) {
                throw new ArithmeticException("age should be greater than 0");
            }
            System.out.println(2); 
        }
    }`,
            "a": "1<br>enter age<br>-23<br>2",
            "b": "1<br>enter age<br>-23<br>Exception in thread \"main\" java.lang.ArithmeticException: age should be greater than 0<br>at com.lara5.D.main(D.java:13)",
            "c": "Compile Time Error",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": 20,
            "code": `import java.util.Scanner;
    public class E {
        public static void main(String[] args) {
            System.out.println(1);
            Scanner sc = new Scanner(System.in);
            System.out.println("enter age");
            int age = sc.nextInt();
            if(age <= 0) {
                throw new AgeIsNegativeException("age should be greater than 0");
            }
            System.out.println(2);
        }
    }
    class AgeIsNegativeException extends ArithmeticException {
        public AgeIsNegativeException() {
        }
        public AgeIsNegativeException(String msg) {
            super(msg);
        }
    }`,
            "a": "1<br>enter age<br>64<br>2",
            "b": "1<br>enter age<br>64<br>Exception in thread \"main\" java.lang.ArithmeticException: age should be greater than 0<br>at com.lara5.D.main(D.java:13)",
            "c": "Compile Time Error",
            "d": "Not applicable",
            "correct": "a"
        },
        
            {
                "question": 21,
                "code": `public class F {
            public static void main(String[] args) {
                System.out.println(1);
                try {
                    System.out.println(2);
                    if (true) {
                        throw new ArithmeticException();
                    }
                    System.out.println(3);
                } catch (ArithmeticException ex) {
                    System.out.println(4);
                }
                System.out.println(5);
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            {
                "question": 22,
                "code": `public class G {
            public static void main(String[] args) {
                System.out.println(1);
                try {
                    System.out.println(2);
                    int i = 10 / 0;
                    System.out.println(3);
                } catch (ArithmeticException ex) {
                    System.out.println(4);
                    throw new ArithmeticException(ex.getMessage());
                }
                System.out.println(5);
            }
        }`,
                "a": "1<br>2<br>4<br>ArithmeticException: / by zero",
                "b": "1<br>2<br>4<br>Exception in thread \"main\" java.lang.ArithmeticException: / by zero<br>at com.lara5.G.main(G.java:15)",
                "c": "1<br>2<br>4",
                "d": "Not applicable",
                "correct": "b"
            },
            {
                "question": 23,
                "code": `class H {
            void test() throws RuntimeException {
            }
        }
        class I extends H {
            void test() throws Exception {
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "b"
            },
            {
                "question": 24,
                "code": `class H {
            void test() {
            }
        }
        class I extends H {
            void test() throws IOException {
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "b"
            },
            {
                "question": 25,
                "code": `class H {
            void test() throws Throwable {
            }
        }
        class I extends H {
            void test() throws Exception {
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "b"
            },
            {
                "question": 26,
                "code": `class H {
            void test() throws RuntimeException {
            }
        }
        class I extends H {
            void test() throws NullPointerException {
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            {
                "question": 27,
                "code": `public class M1 {
            public static void main(String[] args) throws ClassNotFoundException {
                Class.forName("");
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            {
                "question": 28,
                "code": `public class M2 {
            public static void main(String[] args) {
                try {
                    test();
                } catch (ClassNotFoundException ex) {
                }
            }
            static void test() throws ClassNotFoundException {
                Class.forName("");
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            {
                "question": 29,
                "code": `public class M3 {
            public static void main(String[] args) throws ClassNotFoundException {
                test();
            }
            static void test() throws ClassNotFoundException {
                Class.forName("");
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            {
                "question": 30,
                "code": `public class M4 {
            public static void main(String[] args) throws ClassNotFoundException {
                test1();
            }
            static void test1() throws ClassNotFoundException {
                test2();
            }
            static void test2() throws ClassNotFoundException {
                Class.forName("");
            }
        }`,
                "a": "yes",
                "b": "no",
                "c": "Not applicable",
                "d": "None of the above",
                "correct": "a"
            },
            
                    {
                
                        "question": "21",
                        "code": "public class F {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            if (true) {\n                throw new ArithmeticException();\n            }\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
                        "question": "22",
                        "code": "public class G {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            int i = 10 / 0;\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n            throw new ArithmeticException(ex.getMessage());\n        }\n        System.out.println(5);\n    }\n}",
                        "a": "1<br>2<br>4<br>ArithmeticException: / by zero<br>",
                        "b": "1<br>2<br>4<br>Exception in thread \"main\" java.lang.ArithmeticException: / by zero<br>at com.lara5.G.main(G.java:15)<br>",
                        "c": "1<br>2<br>",
                        "d": "Not applicable<br>",
                        "correct": "b"
                    },
                    {
                        "question": "23",
                        "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "b"
                    },
                    {
                        "question": "24",
                        "code": "class H {\n    void test() {\n    }\n}\n\nclass I extends H {\n    void test() throws IOException {\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "b"
                    },
                    {
                        "question": "25",
                        "code": "class H {\n    void test() throws Throwable {\n    }\n}\n\nclass I extends H {\n    void test() throws Exception {\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "b"
                    },
                    {
                        "question": "26",
                        "code": "class H {\n    void test() throws RuntimeException {\n    }\n}\n\nclass I extends H {\n    void test() throws NullPointerException {\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
                        "question": "27",
                        "code": "public class M1 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
                        "question": "28",
                        "code": "public class M2 {\n    public static void main(String[] args) {\n        try {\n            test();\n        } catch (ClassNotFoundException ex) {\n        }\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
                        "question": "29",
                        "code": "public class M3 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test();\n    }\n    static void test() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
                        "question": "30",
                        "code": "public class M4 {\n    public static void main(String[] args) throws ClassNotFoundException {\n        test1();\n    }\n    static void test1() throws ClassNotFoundException {\n        test2();\n    }\n    static void test2() throws ClassNotFoundException {\n        Class.forName(\"\");\n    }\n}",
                        "a": "yes<br>",
                        "b": "no<br>",
                        "c": "None of the above<br>",
                        "d": "Not applicable<br>",
                        "correct": "a"
                    },
                    {
    
        
            "question": "31",
            "code": "public class M5 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        int i = 10 / 0;\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "b"
        },
        {
            "question": "32",
            "code": "public class M6 {\n    public static void main(String[] args) throws ArithmeticException {\n        test1();\n    }\n    static void test1() throws ArithmeticException {\n        test2();\n    }\n    static void test2() throws ArithmeticException {\n        int i = 10 / 0;\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "b"
        },
        {
            "question": "33",
            "code": "import java.sql.DriverManager;\n\npublic class M7 {\n    public static void main(String[] args) throws Exception {\n        test1();\n    }\n    static void test1() throws Exception {\n        test2();\n    }\n    static void test2() throws Exception {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "b"
        },
        {
            "question": "34",
            "code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M8 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        try {\n            Class.forName(\"\");\n            DriverManager.getConnection(\"\");\n            Thread.sleep(230);\n        } catch (SQLException ex) {\n        } catch (ClassNotFoundException ex) {\n        } catch (InterruptedException ex) {\n        }\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "35",
            "code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M9 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        test2();\n    }\n    static void test2() {\n        try {\n            Class.forName(\"\");\n            DriverManager.getConnection(\"\");\n            Thread.sleep(230);\n        } catch (Exception ex) {\n        }\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "36",
            "code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M10 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        try {\n            test2();\n        } catch (ClassNotFoundException ex) {\n        } catch (SQLException ex) {\n        } catch (InterruptedException ex) {\n        }\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "37",
            "code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M11 {\n    public static void main(String[] args) {\n        test1();\n    }\n    static void test1() {\n        try {\n            test2();\n        } catch (Exception ex) {\n        }\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "38",
            "code": "import java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class M12 {\n    public static void main(String[] args) throws ClassNotFoundException, SQLException, InterruptedException {\n        test1();\n    }\n    static void test1() throws ClassNotFoundException, SQLException, InterruptedException {\n        test1();\n    }\n    static void test2() throws ClassNotFoundException, SQLException, InterruptedException {\n        Class.forName(\"\");\n        DriverManager.getConnection(\"\");\n        Thread.sleep(230);\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "b"
        },
        {
            "question": "39",
            "code": "public class M13 {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"done\");\n            int i = 10;\n            i++;\n            i += 2000;\n        } catch (ArithmeticException ex) {\n        }\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "40",
            "code": "public class M14 {\n    public static void main(String[] args) {\n        try {\n            System.out.println(\"done\");\n            int i = 10;\n            i++;\n            i += 2000;\n        } catch (ClassNotFoundException ex) {\n        }\n    }\n}",
            "a": "yes<br>",
            "b": "no<br>",
            "c": "None of the above<br>",
            "d": "Not applicable<br>",
            "correct": "a"
        },
        {
            "question": "41",
            "code": "package com.lara;\nimport java.util.Scanner;\n\npublic class M26 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        } catch (NumberFormatException ex) {\n            System.out.println(5);\n        }\n        System.out.println(6);\n    }\n}",
            "a": "1<br>NumberFormatException<br>",
            "b": "1<br>2<br>3<br>5<br>",
            "c": "Compile Time Error<br>",
            "d": "None<br>",
            "correct": "a"
        },
        {
            
            
                    "question": "42",
                    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M27 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (ArithmeticException ex) {\n            System.out.println(4);\n        }\n        System.out.println(6);\n    }\n}",
                    "a": "1<br>NumberFormatException<br>",
                    "b": "1<br>AithmeticException<br>",
                    "c": "Compile Time Error<br>",
                    "d": "None<br>",
                    "correct": "b"
                },
                {
                    "question": "43",
                    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M28 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);  ////risky 2\n            System.out.println(3);\n            int[] elements = new int[10];\n            int m = elements[i];\n            System.out.println(4);\n        } catch (ArithmeticException ex) {\n            System.out.println(5);\n        } catch (NumberFormatException ex1) {\n            System.out.println(6);\n        } catch (ArrayIndexOutOfBoundsException ex1) {\n            System.out.println(7);\n        }\n        System.out.println(8);\n    }\n}",
                    "a": "1<br>6<br>8<br>",
                    "b": "1<br>2<br>3<br>7<br>8<br>",
                    "c": "Compile Time Error<br>",
                    "d": "None<br>",
                    "correct": "a"
                },
                {
                    "question": "44",
                    "code": "package com.lara;\n\npublic class M29 {\n    public static void main(String[] args) {\n        try {\n        } catch (NumberFormatException ex) {\n        }\n        try {\n        } catch (NumberFormatException ex) {\n        }\n    }\n}",
                    "a": "NumberFormatException<br>",
                    "b": "NullPointerException<br>",
                    "c": "Compile Time Error<br>",
                    "d": "No output<br>",
                    "correct": "d"
                },
                {
                    "question": "45",
                    "code": "package com.lara;\n\npublic class M30 {\n    public static void main(String[] args) {\n        try {\n        } catch (ArrayIndexOutOfBoundsException ex) {\n        } catch (NullPointerException ex) {\n        }\n    }\n}",
                    "a": "ArrayIndexOutOfBoundsException<br>",
                    "b": "NullPointerException<br>",
                    "c": "Compile Time Error<br>",
                    "d": "No output<br>",
                    "correct": "d"
                },
                {
                    "question": "46",
                    "code": "package com.lara;\n\nimport java.util.Scanner;\n\npublic class M31 {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        System.out.println(\"enter some thing\");\n        String s1 = sc.next();\n        try {\n            System.out.println(1);\n            int i = Integer.parseInt(s1);\n            System.out.println(2);\n            int k = i / (i - 9);\n            System.out.println(3);\n        } catch (NumberFormatException ex) {\n            System.out.println(4);\n        } finally {\n            System.out.println(5);\n        }\n        System.out.println(6);\n    }\n}",
                    "a": "1<br>2<br>3<br>5<br>6<br>",
                    "b": "1<br>4<br>5<br>6<br>",
                    "c": "1<br>2<br>5<br>AirthmeticException<br>",
                    "d": "None<br>",
                    "correct": "a"
                },
                {
                    "question": "47",
                    "code": "package com.lara;\n\npublic class M32 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        int i = 10 / 0;\n        try {\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n    }\n}",
                    "a": "1<br>4<br>",
                    "b": "1<br>AithmeticException<br>",
                    "c": "Compile Time Error<br>",
                    "d": "None<br>",
                    "correct": "c"
                },
                {
                    "question": "48",
                    "code": "package com.lara;\n\npublic class M33 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            return;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                    "a": "1<br>2<br>",
                    "b": "1<br>2<br>5<br>",
                    "c": "1<br>2<br>4<br>5<br>",
                    "d": "1<br>2<br>4<br>",
                    "correct": "d"
                },
                {
                    "question": "49",
                    "code": "package com.lara;\n\npublic class M34 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            int i = 10 / 0;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n            return;\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                    "a": "1<br>2<br>3<br>4<br>",
                    "b": "1<br>2<br>3<br>",
                    "c": "1<br>2<br>3<br>4<br>",
                    "d": "none<br>",
                    "correct": "b"
                },
                {
                    "question": "50",
                    "code": "package com.lara;\n\npublic class M35 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        if (true) {\n            return;\n        }\n        try {\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                    "a": "1<br>4<br>",
                    "b": "1<br>2<br>4<br>5<br>",
                    "c": "1<br>",
                    "d": "none<br>",
                    "correct": "a"
                },
                
                        {
                            "question": "51",
                            "code": "package com.lara;\n\npublic class M36 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(2);\n            System.exit(0);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                            "a": "Compile Time Error<br>",
                            "b": "1<br>2<br>",
                            "c": "1<br>2<br>4<br>",
                            "d": "none<br>",
                            "correct": "c"
                        },
                        {
                            "question": "52",
                            "code": "package com.lara;\n\npublic class M37 {\n    public static void main(String[] args) {\n        System.out.println(1);\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n            System.exit(0);\n        } finally {\n            System.out.println(4);\n        }\n        System.out.println(5);\n    }\n}",
                            "a": "1<br>1<br>3<br>",
                            "b": "1<br>1<br>3<br>4<br>",
                            "c": "1<br>1<br>3<br>5<br>",
                            "d": "none<br>",
                            "correct": "a"
                        },
                        {
                            "question": "53",
                            "code": "package com.lara;\n\npublic class M1 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 10 / 0;\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "Compile Time Error<br>",
                            "c": "Run Time Exception<br>",
                            "d": "None<br>",
                            "correct": "c"
                        },
                        {
                            "question": "54",
                            "code": "package com.lara;\n\npublic class M1 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = 10 / 0;\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "Compile Time Error<br>",
                            "c": "ArithmeticException<br>",
                            "d": "None<br>",
                            "correct": "c"
                        },
                        {
                            "question": "55",
                            "code": "package com.lara;\n\npublic class M2 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int i = Integer.parseInt(\"90R\");\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "ArithmeticException<br>",
                            "d": "Compile Time Error<br>",
                            "e": "None<br>",
                            "correct": "b"
                        },
                        {
                            "question": "56",
                            "code": "package com.lara;\n\npublic class M3 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String s1 = null;\n        int i = s1.length();\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "Compile Time Error<br>",
                            "d": "NullPointerException<br>",
                            "e": "None<br>",
                            "correct": "d"
                        },
                        {
                            "question": "57",
                            "code": "package com.lara;\n\npublic class M4 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int[] elements = new int[5];\n        int i = elements[10];\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "Compile Time Error<br>",
                            "d": "NullPointerException<br>",
                            "e": "None<br>",
                            "correct": "e"
                        },
                        {
                            "question": "58",
                            "code": "package com.lara;\n\npublic class M5 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = new Object();\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "ClassCastException<br>",
                            "d": "NullPointerException<br>",
                            "e": "None<br>",
                            "correct": "c"
                        },
                        {
                            "question": "59",
                            "code": "package com.lara;\n\npublic class M6 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = \"abc\";\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "ClassCastException<br>",
                            "d": "NullPointerException<br>",
                            "e": "None<br>",
                            "correct": "e"
                        },
                        {
                            "question": "60",
                            "code": "package com.lara;\n\npublic class M7 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        Object obj = new Integer(\"90\");\n        String s1 = (String) obj;\n        System.out.println(\"main end\");\n    }\n}",
                            "a": "main begin<br>main end<br>",
                            "b": "NumberFormatException<br>",
                            "c": "ClassCastException<br>",
                            "d": "NullPointerException<br>",
                            "e": "None<br>",
                            "correct": "c"
                        },
                        
                            {
                                "question": "62. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M8 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        String s1 = \"hello\";\n        String s2 = s1.substring(2, 10);\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\nmain end",
                                "b": "StringIndexOutOfBoundsException",
                                "c": "ClassCastException",
                                "d": "NullPointerException",
                                "correct": "b"
                            },
                            {
                                "question": "63. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M9 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        int[] elements = new int[999999999];\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\nmain end",
                                "b": "ArrayIndexOutOfBoundsException",
                                "c": "OutOfMemoryError",
                                "d": "NullPointerException",
                                "correct": "c"
                            },
                            {
                                "question": "64. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M10 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        main(null);\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\nmain end",
                                "b": "StackOverFlowError",
                                "c": "OutOfMemoryError",
                                "d": "NullPointerException",
                                "correct": "b"
                            },
                            {
                                "question": "65. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M11 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        main(args);\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\nmain end",
                                "b": "StackOverFlowError",
                                "c": "OutOfMemoryError",
                                "d": "NullPointerException",
                                "correct": "b"
                            },
                            {
                                "question": "66. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M12 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(3);\n        }\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\n1\n3\nmain end",
                                "b": "ArithmeticException",
                                "c": "NumberFormatException",
                                "d": "NullPointerException",
                                "correct": "a"
                            },
                            {
                                "question": "67. What will be the output of the program?",
                                "code": "package com.lara;\n\npublic class M13 {\n    public static void main(String[] args) {\n        System.out.println(\"main begin\");\n        try {\n            System.out.println(1);\n            int i = 10 / 0;\n            System.out.println(2);\n        } catch (ArithmeticException ex) {\n            System.out.println(\"from catch:\" + ex);\n        }\n        System.out.println(\"main end\");\n    }\n}",
                                "a": "main begin\n1\nfrom catch : / by zero\nmain end",
                                "b": "ArithmeticException",
                                "c": "NumberFormatException",
                                "d": "main begin\n1\nfrom catch:java.lang.ArithmeticException: / by zero\nmain end",
                                "correct": "d"
                            },
                            {
                                "question": "68. What will be the output of the program?",
                                "code": "public class Foo {\n    public static void main(String[] args) {\n        try {\n            return;\n        } finally {\n            System.out.println(\"Finally\");\n        }\n    }\n}",
                                "a": "finally",
                                "b": "compilation fail",
                                "c": "the code run with no output",
                                "d": "An exception is thrown at runtime.",
                                "correct": "a"
                            },
                            {
                                "question": "69. What will be the output of the program?",
                                "code": "try {\n    int x = 0;\n    int y = 5 / x;\n} catch (Exception e) {\n    System.out.println(\"Exception\");\n} catch (ArithmeticException ae) {\n    System.out.println(\"Arithmetic Exception\");\n}\nSystem.out.println(\"finished\");",
                                "a": "finished",
                                "b": "Exception",
                                "c": "Compilation fail",
                                "d": "Arithmetic Exception",
                                "correct": "c"
                            },
                            {
                                "question": "70. What will be the output of the program?",
                                "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {\n        throw new Error();\n    }\n}",
                                "a": "ABCD",
                                "b": "compilation fail",
                                "c": "C is printing before exiting with an error message.",
                                "d": "BC is printed before exiting with an error message.",
                                "correct": "d"
                            },
                            {
                                "question": "71. What will be the output of the program?",
                                "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (RuntimeException ex) {\n            System.out.print(\"B\");\n        } catch (Exception ex1) {\n            System.out.print(\"C\");\n        } finally {\n            System.out.print(\"D\");\n        }\n        System.out.print(\"E\");\n    }\n    public static void badMethod() {\n        throw new RuntimeException();\n    }\n}",
                                "a": "BD",
                                "b": "BCD",
                                "c": "BDE",
                                "d": "BCDE",
                                "correct": "d"
                            },
                            {
                                "question": "72. What will be the output of the program?",
                                "code": "public class RTExcept {\n    public static void throwit() {\n        System.out.print(\"throwit \");\n        throw new RuntimeException();\n    }\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"hello \");\n            throwit();\n        } catch (Exception re) {\n            System.out.print(\"caught \");\n        } finally {\n            System.out.print(\"finally \");\n        }\n        System.out.println(\"after \");\n    }\n}",
                                "a": "hello throwit caught",
                                "b": "hello throwit caught",
                                "c": "hello throwit RuntimeException caught after",
                                "d": "hello throwit caught finally after",
                                "correct": "d"
                            },
                            {
                                "question": "73. What will be the output of the program?",
                                "code": "public class Test {\n    public static void aMethod() throws Exception {\n        try {\n            throw new Exception();\n        } finally {\n            System.out.print(\"finally \");\n        }\n    }\n    public static void main(String[] args) {\n        try {\n            aMethod();\n        } catch (Exception e) {\n            System.out.print(\"exception \");\n        }\n        System.out.print(\"finished\");\n    }\n}",
                                "a": "finally",
                                "b": "exception finished",
                                "c": "finally exception finished",
                                "d": "Compilation fails",
                                "correct": "b"
                            },
                            {
                                "question": "74. What will be the output of the program?",
                                "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {}\n}",
                                "a": "AC",
                                "b": "BC",
                                "c": "ACD",
                                "d": "ABCD",
                                "correct": "c"
                            },
                            {
                                "question": "75. What will be the output of the program?",
                                "code": "public class X {\n    public static void main(String[] args) {\n        try {\n            badMethod();\n            System.out.print(\"A\");\n        } catch (Exception ex) {\n            System.out.print(\"B\");\n        } finally {\n            System.out.print(\"C\");\n        }\n        System.out.print(\"D\");\n    }\n    public static void badMethod() {\n        throw new RuntimeException();\n    }\n}",
                                "a": "AB",
                                "b": "BC",
                                "c": "ABC",
                                "d": "BCD",
                                "correct": "d"
                            },
                            {
                                "question": "76. What will be the output of the program?",
                                "code": "public class MyProgram {\n    public static void main(String[] args) {\n        try {\n            System.out.print(\"Hello world \");\n        } finally {\n            System.out.println(\"Finally executing \");\n        }\n    }\n}",
                                "a": "Nothing. The program will not compile because no exceptions are specified.",
                                "b": "Nothing. The program will not compile because no catch clauses are specified.",
                                "c": "Hello world.",
                                "d": "Hello world Finally executing",
                                "correct": "d"
                            },
                            {
                                "question": "77. What will be the output of the program?",
                                "code": "class Exc0 extends Exception { }\nclass Exc1 extends Exc0 { }\npublic class Test {\n    public static void main(String[] args) {\n        try {\n            throw new Exc1();\n        } catch (Exc0 e0) {\n            System.out.println(\"Ex0 caught\");\n        } catch (Exception e) {\n            System.out.println(\"exception caught\");\n        }\n    }\n}",
                                "a": "Ex0 caught",
                                "b": "exception caught",
                                "c": "Compilation fails because of an error at line 2.",
                                "d": "Compilation fails because of an error at line 9.",
                                "correct": "a"
                            },
                            {
                                "question": "78. Predict the output of following Java program",
                                "code": "class Main {\n   public static void main(String[] args) {\n      try {\n         throw 10;\n      } catch(int e) {\n         System.out.println(\"Got the Exception \" + e);\n      }\n  }\n}",
                                "a": "Got the Exception 10",
                                "b": "Got The Exception 0",
                                "c": "Compilation Fail",
                                "d": "None",
                                "correct": "c"
                            },
                            {
                                "question": "79. What will be the output of the program?",
                                "code": "class Test extends Exception { }\nclass Main {\n   public static void main(String[] args) {\n      try {\n         throw new Test();\n      } catch(Test t) {\n         System.out.println(\"Got the Test Exception\");\n      } finally {\n         System.out.println(\"Inside finally block \");\n      }\n  }\n}",
                                "a": "Got the Test Exception\nInside finally block",
                                "b": "Got the Test Exception",
                                "c": "Inside finally block",
                                "d": "Compiler Error",
                                "correct": "a"
                            },
                            {
                                "question": "80. Output of following Java program?",
                                "code": "class Main {\n   public static void main(String[] args) {\n      int x = 0;\n      int y = 10;\n      int z = y / x;\n  }\n}",
                                "a": "Compilation Error",
                                "b": "compiles and runs fine",
                                "c": "Compiles fine but throws ArithmeticException",
                                "correct": "c"
                            },
                            {
                                "question": "81. What will be the output of the program?",
                                "code": "class Base extends Exception { }\nclass Derived extends Base { }\npublic class Main {\n  public static void main(String[] args) {\n   try {\n       throw new Derived();\n    } catch(Base b) {\n       System.out.println(\"Caught base class exception\");\n    } catch(Derived d) {\n       System.out.println(\"Caught derived class exception\");\n    }\n  }\n}",
                                "a": "Caught base class exception",
                                "b": "Caught derived class exception",
                                "c": "Compiler Error because derived is not throwable",
                                "d": "Compiler Error because base class exception is caught before derived class",
                                "correct": "a"
                            },
                            {
                                "question": "82. Output of following Java program?",
                                "code": "class Test {\n    public static void main(String[] args) {\n        try {\n            int a = 0;\n            System.out.println(\"a = \" + a);\n            int b = 20 / a;\n            System.out.println(\"b = \" + b);\n        } catch(ArithmeticException e) {\n            System.out.println(\"Divide by zero error\");\n        } finally {\n            System.out.println(\"inside the finally block\");\n        }\n    }\n}",
                                "a": "Compile error",
                                "b": "Divide by zero error",
                                "c": "a = 0\nDivide by zero error\ninside the finally block",
                                "d": "a = 0",
                                "correct": "c"
                            },
                            {
                                "question": "83. What will be the output of the program?",
                                "code": "class Test {\n    public static void main(String[] args) {\n        try {\n            int a[]= {1, 2, 3, 4};\n            for (int i = 1; i <= 4; i++) {\n                System.out.println(\"a[\" + i + \"]=\" + a[i] + \"n\");\n            }\n        } catch (Exception e) {\n            System.out.println(\"error = \" + e);\n        } catch (ArrayIndexOutOfBoundsException e) {\n            System.out.println(\"ArrayIndexOutOfBoundsException\");\n        }\n    }\n}",
                                "a": "Compiler error",
                                "b": "Run time error",
                                "c": "ArrayIndexOutOfBoundsException",
                                "d": "Error Code is printed",
                                "correct": "c"
                            },
                            {
                                "question": "95. When do exceptions in Java arise in the code sequence?",
                                "code": "",
                                "a": "Run Time",
                                "b": "Compilation fail",
                                "c": "Can occur any time",
                                "d": "None",
                                "correct": "a"
                            },
                            {
                                "question": "96. Which of these keywords is not a part of exception handling?",
                                "code": "",
                                "a": "try",
                                "b": "finally",
                                "c": "thrown",
                                "d": "catch",
                                "correct": "c"
                            },
                            {
                                "question": "97. Which of these keywords must be used to monitor for exceptions?",
                                "code": "",
                                "a": "try",
                                "b": "finally",
                                "c": "throw",
                                "d": "catch",
                                "correct": "a"
                            },
                            {
                                "question": "98. Which of these keywords must be used to handle the exception thrown by the try block in some rational manner?",
                                "code": "",
                                "a": "try",
                                "b": "finally",
                                "c": "throw",
                                "d": "catch",
                                "correct": "d"
                            },
                            {
                                "question": "99. Which of these keywords is used to manually throw an exception?",
                                "code": "",
                                "a": "try",
                                "b": "finally",
                                "c": "throw",
                                "d": "catch",
                                "correct": "c"
                            },
                            {
                                "question": "100. Which of these is a superclass of all exceptional type classes?",
                                "code": "",
                                "a": "String",
                                "b": "RunTimeException",
                                "c": "Throwable",
                                "d": "Cachable",
                                "correct": "c"
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
