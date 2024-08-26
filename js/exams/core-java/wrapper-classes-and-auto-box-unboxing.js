const quizData = [
    
    
        {
            "question": "1.Select the correct option",
            "code": "class M1 {\n    public static void main(String[] args) {\n        int i = 10;\n        Integer obj1 = new Integer(i);\n        Integer obj2 = Integer.valueOf(i);\n        int j = obj1.intValue();\n        int k = obj2.intValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "done",
            "b": "Compilation Error",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "2.Select the correct option",
            "code": "class M2 {\n    public static void main(String[] args) {\n        Double obj1 = new Double(5.5);\n        Double obj2 = Double.valueOf(5.5);\n        double d1 = obj1.doubleValue();\n        double d2 = obj2.doubleValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "3.Select the correct option",
            "code": "class M3 {\n    public static void main(String[] args) {\n        Character obj1 = new Character('a');\n        Character obj2 = Character.valueOf('a');\n        char c1 = obj1.charValue();\n        char c2 = obj2.charValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "4.Select the correct option",
            "code": "class M4 {\n    public static void main(String[] args) {\n        boolean flag = false;\n        Boolean b1 = new Boolean(flag);\n        Boolean b2 = Boolean.valueOf(flag);\n        boolean i = b1.booleanValue();\n        boolean j = b2.booleanValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "5.Select the correct option",
            "code": "class M5 {\n    public static void main(String[] args) {\n        String s1 = \"10\";\n        Integer obj1 = new Integer(s1);\n        Integer obj2 = Integer.valueOf(s1);\n        int i = obj1.intValue();\n        int j = obj2.intValue();\n        System.out.println(i);\n        System.out.println(j);\n    }\n}",
            "a": "Compilation Error",
            "b": "10\n10",
            "c": "0\n0",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": "6.Select the correct option",
            "code": "class M6 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        Double obj1 = new Double(s1);\n        Double obj2 = Double.valueOf(s1);\n        double d1 = obj1.doubleValue();\n        double d2 = obj2.doubleValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "b"
        },
        {
            "question": "7.Select the correct option",
            "code": "class M7 {\n    public static void main(String[] args) {\n        String s1 = \"true\";\n        Boolean obj1 = new Boolean(s1);\n        Boolean obj2 = Boolean.valueOf(s1);\n        boolean b1 = obj1.booleanValue();\n        boolean b2 = obj2.booleanValue();\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "8.Select the correct option",
            "code": "class M8 {\n    public static void main(String[] args) {\n        String s1 = \"10\";\n        int i = Integer.parseInt(s1);\n        double j = Double.parseDouble(s1);\n        System.out.println(i);\n        System.out.println(j);\n    }\n}",
            "a": "Compilation Error",
            "b": "10\n10",
            "c": "10\n10.0",
            "d": "None of the above",
            "correct": "c"
        },
        {
            "question": "9.Select the correct option",
            "code": "class M9 {\n    public static void main(String[] args) {\n        int i = 10;\n        double j = 1.5;\n        String s1 = Integer.toString(i);\n        String s2 = Double.toString(j);\n        System.out.println(s1);\n        System.out.println(s2);\n    }\n}",
            "a": "Compilation Error",
            "b": "10\n1.5",
            "c": "10\n15.0",
            "d": "None of the above",
            "correct": "b"
        },
        {
            "question": "10.Select the correct option",
            "code": "class M10 {\n    public static void main(String[] args) {\n        String s1 = \"10r\";\n        int i = Integer.parseInt(s1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "Compilation Error",
            "b": "NumberFormatException",
            "c": "10r\ndone",
            "d": "None",
            "correct": "b"
        },
        {
            "question": "11.Select the correct option",
            "code": "class M11 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        int i = Integer.parseInt(s1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "NumberFormatException",
            "b": "10.5\ndone",
            "c": "Compilation Error",
            "d": "None",
            "correct": "a"
        },
        {
            "question": "12.Select the correct option",
            "code": "class M12 {\n    public static void main(String[] args) {\n        String s1 = \"10.5\";\n        double i = Double.parseDouble(s1);\n        System.out.println(\"done\");\n    }\n}",
            "a": "NumberFormatException",
            "b": "10.5\ndone",
            "c": "Compilation Error",
            "d": "done",
            "correct": "d"
        },
        {
            "question": "13.Select the correct option",
            "code": "class M13 {\n    public static void main(String[] args) {\n        String s1 = \"xyz\";\n        boolean flag = Boolean.parseBoolean(s1);\n        System.out.println(flag);\n    }\n}",
            "a": "NumberFormatException",
            "b": "false",
            "c": "true",
            "d": "Compilation Error",
            "correct": "b"
        },
        {
            "question": "14.Select the correct option",
            "code": "class M14 {\n    public static void main(String[] args) {\n        Integer obj = new Integer(90);\n        int i = obj;\n        System.out.println(\"done\");\n    }\n}",
            "a": "done",
            "b": "Compilation Error",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "15.Select the correct option",
            "code": "class M15 {\n    public static void main(String[] args) {\n        int i = 10;\n        Integer obj1 = i;\n        Integer obj2 = 20;\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        {
            "question": "16.Select the correct option",
            "code": "class M16 {\n    static void test(int i) {\n        System.out.println(\"test(int)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"------------\");\n        Integer obj = new Integer(90);\n        test(obj);\n    }\n}",
            "a": "test(int)\n------------\ntest(int)",
            "b": "test(int)\ntest(int)\n------------",
            "c": "------------\ntest(int)\ntest(int)",
            "d": "None",
            "correct": "a"
        },
        {
            "question": "17.Select the correct option",
            "code": "class M17 {\n    static void test(Integer i) {\n        System.out.println(\"test(Integer)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"------------\");\n        Integer obj = new Integer(90);\n        test(obj);\n    }\n}",
            "a": "test(Integer)\ntest(Integer)\n------------",
            "b": "------------\ntest(Integer)\ntest(Integer)",
            "c": "test(Integer)\n------------\ntest(Integer)",
            "d": "None",
            "correct": "a"
        },
        {
            "question": "18.Select the correct option",
            "code": "class M18 {\n    static void test(double j) {\n        System.out.println(\"test(double)\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        System.out.println(\"done\");\n        int i = 200;\n        test(i);\n    }\n}",
            "a": "Compilation Error",
            "b": "test(double)\ndone\ntest(double)",
            "c": "test(double)\ntest(double)\ndone",
            "d": "None",
            "correct": "b"
        },
        {
            "question": "19.Select the correct option",
            "code": "class M19 {\n    public static void main(String[] args) {\n        int i = 10;\n        double j = 10.5;\n        j = i;\n        Double obj1 = new Double(20);\n        Integer obj2 = new Integer(20);\n        obj1 = obj2;\n        System.out.println(\"done\");\n    }\n}",
            "a": "Compilation Error",
            "b": "NumberFormatException",
            "c": "done",
            "d": "None",
            "correct": "a"
        },
        {
            "question": "20.Select the correct option",
            "code": "class M20 {\n    public static void main(String[] args) {\n        Double obj1 = new Double(20);\n        Integer obj2 = new Integer(20);\n        Number obj3 = obj1;\n        Number obj4 = obj2;\n        System.out.println(\"done\");\n    }\n}",
            "a": "Yes",
            "b": "No",
            "c": "None of the above",
            "d": "Not applicable",
            "correct": "a"
        },
        
            {
                "question": "21.Select the correct option",
                "code": "class M21 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
                "a": "Yes",
                "b": "No",
                "c": "None",
                "d": "Not applicable",
                "correct": "b"
            },
            {
                "question": "22.Select the correct option",
                "code": "class M22 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Byte obj) {\n        System.out.println(\"test1(Byte)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
                "a": "test1(Byte)\ndone",
                "b": "done\ntest1(Byte)",
                "c": "None",
                "d": "Not applicable",
                "correct": "c"
            },
            {
                "question": "23.Select the correct option",
                "code": "class M23 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Byte obj) {\n        System.out.println(\"test1(Byte)\");\n    }\n    static void test1(double d1) {\n        System.out.println(\"test1(double)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
                "a": "done\ntest1(double)",
                "b": "test1(double)\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "b"
            },
            {
                "question": "24.Select the correct option",
                "code": "class M24 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Number obj) {\n        System.out.println(\"test1(Number)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
                "a": "test1(Number)\ndone",
                "b": "test1(Integer)\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "25.Select the correct option",
                "code": "class M25 {\n    static void test1(Integer obj) {\n        System.out.println(\"test1(Integer)\");\n    }\n    static void test1(Object obj) {\n        System.out.println(\"test1(Object)\");\n    }\n    public static void main(String[] args) {\n        byte b1 = 10;\n        test1(b1);\n        System.out.println(\"done\");\n    }\n}",
                "a": "test1(Integer)\ndone",
                "b": "test1(Object)\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "b"
            },
            {
                "question": "26.Select the correct option",
                "code": "class M26 {\n    static void test(int ... args) {\n        System.out.println(\"var arg\");\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10);\n        System.out.println(\"done\");\n    }\n}",
                "a": "var arg\nvar arg\nvar arg\nvar arg\ndone",
                "b": "Compile time error",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "27.Select the correct option",
                "code": "class M27 {\n    static void test(int ... args) {\n        System.out.println(\"var arg:\" + args.length);\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10, 5);\n        test(40, 10, 5, 45, 100);\n        System.out.println(\"done\");\n    }\n}",
                "a": "var arg:0\nvar arg:1\nvar arg:2\nvar arg:3\nvar arg:5\ndone",
                "b": "var arg\nvar arg\nvar arg\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "28.Select the correct option",
                "code": "class M28 {\n    static void test(int ... args) {\n        for(int value : args) {\n            System.out.println(value);\n        }\n        System.out.println(\"------------\");\n    }\n    public static void main(String[] args) {\n        test();\n        test(1);\n        test(2, 4);\n        test(40, 10, 5);\n        test(40, 10, 5, 45, 100);\n        System.out.println(\"done\");\n    }\n}",
                "a": "------------\n1\n------------\n2\n4\n------------\n40\n10\n5\n------------\n40\n10\n5\n45\n100\n------------\ndone",
                "b": "------------\n1\n2\n4\n40\n10\n5\n40\n10\n5\n45\n100\n------------\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "29.Select the correct option",
                "code": "class M29 {\n    public static void main(String ... args) {\n        System.out.println(\"Hello World!\");\n    }\n}",
                "a": "Yes",
                "b": "No",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "30.Select the correct option",
                "code": "class M30 {\n    public static void test(String x, double ... y) {\n        System.out.println(x);\n        for(double value : y) {\n            System.out.println(value);\n        }\n        System.out.println(\"--------\");\n    }\n    public static void main(String[] args) {\n        test(\"abc\");\n        test(\"abc\", 4.5);\n        test(\"abc\", 4.5, 50.0);\n        test(\"abc\", 4.5, 50.0, 2.3);\n        System.out.println(\"done\");\n    }\n}",
                "a": "--------\nabc\n--------\nabc\n4.5\n--------\nabc\n4.5\n50.0\n--------\nabc\n4.5\n50.0\n2.3\ndone",
                "b": "abc\n--------\nabc\n4.5\n--------\nabc\n4.5\n50.0\n--------\nabc\n4.5\n50.0\n2.3\n--------\ndone",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "31.Select the correct option",
                "code": "class M31 {\n    public static void test(double ... y, String x) {\n    }\n}",
                "a": "Yes",
                "b": "No",
                "c": "None",
                "d": "Not applicable",
                "correct": "b"
            },
            {
                "question": "32.Select the correct option",
                "code": "class M32 {\n    public static void test(double ... y) {\n    }\n    public static void test(double[] z) {\n    }\n}",
                "a": "Yes",
                "b": "No",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            {
                "question": "39.Select the correct option",
                "code": "class M34 {\n    public static void test(byte b1) {\n        System.out.println(\"byte\");\n    }\n    public static void test(double b1) {\n        System.out.println(\"double\");\n    }\n    public static void test(Byte b1) {\n        System.out.println(\"Byte\");\n    }\n    public static void test(Integer b1) {\n        System.out.println(\"Integer\");\n    }\n    public static void test(Number b1) {\n        System.out.println(\"Number\");\n    }\n    public static void test(Object b1) {\n        System.out.println(\"Object\");\n    }\n    public static void main(String[] args) {\n        test(10);\n        test(10.5);\n        test((byte)10);\n        test(10);\n        test((Number)10);\n        test((Object)10);\n    }\n}",
                "a": "byte\ndouble\nByte\nInteger\nNumber\nObject",
                "b": "byte\ndouble\nByte\nNumber\nObject",
                "c": "None",
                "d": "Not applicable",
                "correct": "a"
            },
            
                {
                    "question": "40.For primitive byte data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "byte",
                    "b": "Byte",
                    "c": "BYTE",
                    "d": "None",
                    "correct": "b"
                },
                {
                    "question": "41.For primitive short data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "Short",
                    "b": "SHORT",
                    "c": "short",
                    "d": "None",
                    "correct": "a"
                },
                {
                    "question": "43.For primitive int data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "Int",
                    "b": "Integer",
                    "c": "integer",
                    "d": "int",
                    "correct": "b"
                },
                {
                    "question": "44.For primitive long data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "long",
                    "b": "LONG",
                    "c": "Long",
                    "d": "None",
                    "correct": "c"
                },
                {
                    "question": "45.For primitive float data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "Float",
                    "b": "FLOAT",
                    "c": "float",
                    "d": "None",
                    "correct": "a"
                },
                {
                    "question": "46.For primitive double data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "DOUBLE",
                    "b": "Double",
                    "c": "double",
                    "d": "None",
                    "correct": "b"
                },
                {
                    "question": "47.For primitive char data type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "Char",
                    "b": "Character",
                    "c": "char",
                    "d": "character",
                    "e": "None",
                    "correct": "b"
                },
                {
                    "question": "48.For primitive boolean type what is the corresponding wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "boolean",
                    "b": "BOOLEAN",
                    "c": "Boolean",
                    "d": "None",
                    "correct": "c"
                },
                {
                    "question": "49.All wrapper classes are available in………..",
                    "code": "Select The Correct Answer",
                    "a": "java.util",
                    "b": "java.awt",
                    "c": "java.lang",
                    "d": "None",
                    "correct": "c"
                },
                {
                    "question": "50Is it possible to develop a sub class to wrapper class?",
                    "code": "Select The Correct Answer",
                    "a": "Yes",
                    "b": "No",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "51.All wrapper classes are not eligible to serialization?",
                    "code": "Select The Correct Answer",
                    "a": "True",
                    "b": "False",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "52.Wrapper classes accepts only objects?",
                    "code": "Select The Correct Answer",
                    "a": "True",
                    "b": "False",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "53.Is it possible to convert a string into int primitive if string contains characters?",
                    "code": "Select The Correct Answer",
                    "a": "Yes",
                    "b": "No",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "54.What is the special allowed in case of converting string to double primitive or float primitive?",
                    "code": "Select The Correct Answer",
                    "a": ".(dot)",
                    "b": "_(Underscore)",
                    "c": "*(star)",
                    "d": "None",
                    "correct": "a"
                },
                {
                    "question": "55.While converting string to boolean primitive which is other than true what you will get as output?",
                    "code": "Select The Correct Answer",
                    "a": "Exception",
                    "b": "false",
                    "c": "none",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "56.Inside a character class parse method is not available",
                    "code": "Select The Correct Answer",
                    "a": "True",
                    "b": "False",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "b"
                },
                {
                    "question": "57.Auto boxing and auto unboxing introduced in which version?",
                    "code": "Select The Correct Answer",
                    "a": "JDK1.4",
                    "b": "JDK1.3",
                    "c": "JDK1.5",
                    "d": "Not applicable",
                    "correct": "c"
                },
                {
                    "question": "58.Every wrapper class can upcast to number or object?",
                    "code": "Select The Correct Answer",
                    "a": "True",
                    "b": "False",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "a"
                },
                {
                    "question": "60.We can use method arguments as variable number of arguments?",
                    "code": "Select The Correct Answer",
                    "a": "Yes",
                    "b": "No",
                    "c": "None",
                    "d": "Not applicable",
                    "correct": "a"
                },
                {
                    "question": "61.What is the order of execution?",
                    "code": "Select The Correct Answer",
                    "a": "i, iii, ii",
                    "b": "i, ii, iii",
                    "c": "iii, ii, i",
                    "d": "ii, i, iii",
                    "correct": "b"
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