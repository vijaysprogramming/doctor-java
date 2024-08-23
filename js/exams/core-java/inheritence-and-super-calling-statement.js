const quizData = [
    
        {
            question: "1- constructors are inheriting to sub class",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "2- initialization blocks are inheriting to sub class",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "b",
        },
        {
            question: "3- super class constructor not inheriting to subclass. subclass constructor calling super class constructor.",
            code: "select the correct option",
            a: "yes",
            b: "no",
            c: "not applicable",
            d: "none of the above",
            correct: "a",
        },
        
            {
                question: "4-",
                code: "package src;\n\nclass A\n{\n    int i;\n}\n\nclass B extends A\n{\n    int j;\n    public static void main(String[] args)\n    {\n        B b1 = new B();\n        System.out.println(b1.i);\n        System.out.println(b1.j);\n    }\n}",
                a: "0\n0",
                b: "Compilation Error",
                c: "Run Time Error",
                d: "None",
                correct: "a",
            },
            {
                question: "5-",
                code: "package src;\n\nclass C\n{\n    void test1()\n    {\n        System.out.println(\"from test1\");\n    }\n}\n\nclass D extends C\n{\n    void test2()\n    {\n        System.out.println(\"from test2\");\n    }\n    public static void main(String[] args)\n    {\n        D d1 = new D();\n        d1.test1();\n        d1.test2();\n    }\n}",
                a: "from test1\nfrom test2",
                b: "from test2\nfrom test1",
                c: "Run Time Error",
                d: "Compilation Error",
                correct: "a",
            },
            {
                question: "6-",
                code: "package src;\n\nclass E\n{\n    static int i;\n}\n\nclass F extends E\n{\n    static int j;\n    public static void main(String[] args)\n    {\n        System.out.println(F.i);\n        System.out.println(F.j);\n    }\n}",
                a: "Compilation Error",
                b: "0\n0",
                c: "Run Time Error",
                d: "None",
                correct: "b",
            },
            {
                question: "7-",
                code: "package src;\n\nclass G\n{\n    static void test1()\n    {\n        System.out.println(\"G-test1\");\n    }\n}\n\nclass H extends G\n{\n    static void test2()\n    {\n        System.out.println(\"H-test2\");\n    }\n    public static void main(String[] args)\n    {\n        H.test1();\n        H.test2();\n    }\n}",
                a: "H-test1\nG-test2",
                b: "G-test1\nH-test2",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "8-",
                code: "package src;\n\nclass I\n{\n    static int m;\n    int n;\n    static void test1()\n    {\n        System.out.println(\"from test1\");\n    }\n    void test2()\n    {\n        System.out.println(\"from test2\");\n    }\n}\n\nclass J extends I\n{\n    public static void main(String[] args)\n    {\n        System.out.println(J.m);\n        J.test1();\n        J ref = new J();\n        System.out.println(ref.n);\n        ref.test2();\n    }\n}",
                a: "Compilation Error",
                b: "from test1\n0\nfrom test2\n0",
                c: "0\nfrom test1\n0\nfrom test2",
                d: "Runtime Error",
                correct: "c",
            },
            {
                question: "9-",
                code: "package src;\n\nclass K\n{\n    K()\n    {\n        super();\n        System.out.println(\"K()\");\n    }\n}\n\nclass L extends K\n{\n    L()\n    {\n        super();\n        System.out.println(\"L()\");\n    }\n    public static void main(String[] args)\n    {\n        L obj = new L();\n    }\n}",
                a: "Compilation Error",
                b: "K()\nL()",
                c: "L()\nK()",
                d: "None",
                correct: "b",
            },
            {
                question: "10-",
                code: "package src;\n\nclass M\n{\n    M()\n    {\n        System.out.println(\"M()\");\n    }\n}\n\nclass N extends M\n{\n    N()\n    {\n        System.out.println(\"N()\");\n    }\n}\n\nclass O extends N\n{\n    public static void main(String[] args)\n    {\n        M m1 = new M();\n        System.out.println(\"---------\");\n        N n1 = new N();\n        System.out.println(\"---------\");\n        O o1 = new O();\n        System.out.println(\"---------\");\n    }\n}",
                a: "M()\n---------\nM()\nN()\n---------\nM()\nN()\n---------",
                b: "Compilation Error",
                c: "None",
                d: "None",
                correct: "a",
            },
            {
                question: "11-",
                code: "package src;\n\nclass A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n}\n\nclass P extends C\n{\n    P()\n    {\n        System.out.println(\"P()\");\n    }\n    public static void main(String[] args)\n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        P p1 = new P();\n        System.out.println(\"---------\");\n    }\n}",
                a: "---------\n---------\n---------\nP()\n---------",
                b: "A()\n---------\nA()\nB()\n---------\nA()\nB()\nC()\n---------\nA()\nB()\nC()\nP()\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "12-",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super();\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass Q extends C\n{\n    Q()\n    {\n        System.out.println(\"Q()\");\n    }\n    Q(int i)\n    {\n        super();\n        System.out.println(\"Q(int)\");\n    }\n    public static void main(String[] args)\n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        Q q1 = new Q();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        Q q2 = new Q(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "A()\n---------\nA()\nB()\n---------\nA()\nB()\nC()\n---------\nA()\nB()\nC()\nQ()\n---------\nA(int)\n---------\nA()\nB(int)\n---------\nA()\nB()\nC(int)\n---------\nA()\nB()\nC()\nQ(int)\n---------",
                b: "A()\n---------\nB()\n---------\nC()\n---------\nQ()\n---------\nA(int)\n---------\nB(int)\n---------\nC(int)\n---------\nQ(int)\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "a",
            },
            {
                question: 13,
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        super(10);\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super(i);\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass R extends C \n{\n    R()\n    {\n        super(20);\n        System.out.println(\"R()\");\n    }\n    R(int i)\n    {\n        super(200);\n        System.out.println(\"R(int)\");\n    }\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        R r1 = new R();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        R r2 = new R(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "Compilation Error",
                b: "A()\n---------\nA(int)\nB()\n---------\nA(int)\nB()\nC()\n---------\nA()\nB(int)\nC(int)\nR()\n---------\nA(int)\n---------\nA()\nB(int)\n---------\nA()\nB(int)\nC(int)\n---------\nA()\nB(int)\nC(int)\nR(int)\n---------",
                c: "None",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "14",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        this();\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        super(10);\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        this();\n        System.out.println(\"B(int)\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        this(90);\n        System.out.println(\"C()\");\n    }\n    C(int i)\n    {\n        super(i);\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass S extends C \n{\n    S()\n    {\n        this(90);\n        System.out.println(\"S()\");\n    }\n    S(int i)\n    {\n        super(200);\n        System.out.println(\"S(int)\");\n    }\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"---------\");\n        B b1 = new B();\n        System.out.println(\"---------\");\n        C c1 = new C();\n        System.out.println(\"---------\");\n        S s1 = new S();\n        System.out.println(\"---------\");\n        A a2 = new A(10);\n        System.out.println(\"---------\");\n        B b2 = new B(10);\n        System.out.println(\"---------\");\n        C c2 = new C(20);\n        System.out.println(\"---------\");\n        S s2 = new S(30);\n        System.out.println(\"---------\");\n    }\n}",
                a: "A()\n---------\nA()\nA(int)\nB()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nC()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\nS()\n---------\nA()\nA(int)\n---------\nA()\nA(int)\nB()\nB(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\n---------",
                b: "A()\n---------\nA()\nA(int)\nB()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nC()\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\nS()\n---------\nA()\nA(int)\n---------\nA()\nA(int)\nB()\nB(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\n---------\nA()\nA(int)\nB()\nB(int)\nC(int)\nS(int)\n---------",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b",
            },
            {
                question: "15",
                code: "class A\n{\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass T extends A\n{\n    T(int i)\n    {\n        System.out.println(\"T(int)\");\n    }\n    public static void main(String[] args) \n    {\n        T t1 = new T(90);\n        System.out.println(\"done\");\n    }\n}",
                a: "Compilation Error",
                b: "T(int)\ndone",
                c: "A(int)\nT(int)",
                d: "None",
                correct: "c"
            },
            {
                question: "16",
                code: "class A\n{\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n}\n\nclass U extends A\n{\n    U(int i)\n    {\n        super(i);\n        System.out.println(\"U(int)\");\n    }\n    public static void main(String[] args) \n    {\n        U u1 = new U(90);\n        System.out.println(\"done\");\n    }\n}",
                a: "Compilation Error",
                b: "A(int)\nU(int)\ndone",
                c: "U(int)\nA(int)\ndone",
                d: "None",
                correct: "b"
            },
            {
                question: "17",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass V\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        A a2 = new A();\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()",
                b: "A()\nA-IIB\n----------\nA()\nA-IIB",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b"
            },
            {
                question: "18",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    {\n        System.out.println(\"B-IIB1\");\n    }\n    {\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n    }\n}\n\nclass W\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        A a2 = new A();\n        System.out.println(\"----------\");\n        B b1 = new B();\n        System.out.println(\"----------\");\n        B b2 = new B();\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2",
                b: "A()\nA-IIB\n----------\nA()\nA-IIB\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2",
                c: "Compilation Error",
                d: "Runtime Error",
                correct: "b"
            },
           
            {
                question: "19",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        this();\n        System.out.println(\"B(int)\");\n    }\n    {\n        System.out.println(\"B-IIB1\");\n    }\n    {\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n    }\n}\n\nclass X\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        A a2 = new A();\n        System.out.println(\"----------\");\n        B b1 = new B();\n        System.out.println(\"----------\");\n        B b2 = new B();\n        System.out.println(\"----------\");\n        A a3 = new A(20);\n        System.out.println(\"----------\");\n        A a4 = new A(30);\n        System.out.println(\"----------\");\n        B b3 = new B(40);\n        System.out.println(\"----------\");\n        B b4 = new B(60);\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA-IIB\nA(int)\n----------\nA-IIB\nA(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)",
                b: "A-IIB\nA()\n----------\nA()\nA-IIB\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA(int)\nA-IIB\n----------\nA(int)\nA-IIB\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\n----------\nA()\nA-IIB\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)",
                c: "Compilation Error",
                 d: "None",
                correct: "a",
            },
            {
                question: "20",
                code: "class A\n{\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    A(int i)\n    {\n        System.out.println(\"A(int)\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    B(int i)\n    {\n        this();\n        System.out.println(\"B(int)\");\n    }\n    {\n        System.out.println(\"B-IIB1\");\n    }\n    {\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n        System.out.println(\"B-IIB2\");\n    }\n}\n\nclass C extends B\n{\n    C()\n    {\n        super(90);\n        System.out.println(\"C()\");\n    }\n    {\n        System.out.println(\"C-IIB\");\n    }\n    C(int i)\n    {\n        this();\n        System.out.println(\"C(int)\");\n    }\n}\n\nclass Y\n{\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        System.out.println(\"----------\");\n        B b1 = new B();\n        System.out.println(\"----------\");\n        A a2 = new A(20);\n        System.out.println(\"----------\");\n        B b2 = new B(40);\n        System.out.println(\"----------\");\n        C c1 = new C();\n        System.out.println(\"----------\");\n        C c2 = new C(20);\n        System.out.println(\"----------\");\n    }\n}",
                a: "A-IIB\nA()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA-IIB\nA(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\nC(int)\n----------",
                b: "A-IIB\nA()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA-IIB\nA(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\nC(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\n----------",
                c: "A-IIB\nA()\n----------\nA-IIB\nA(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\n----------\nA-IIB\nA()\nB-IIB1\nB-IIB2\nB-IIB2\nB-IIB2\nB()\nB(int)\nC-IIB\nC()\nC(int)\n----------",
                d: "None",
                correct: "a",
            },
            {
                question: "21",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z extends C\n{\n    static\n    {\n        System.out.println(\"Z-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main\");\n    }\n}",
                a: "main\nA-SIB\nB-SIB\nC-SIB\nZ-SIB",
                b: "A-SIB\nB-SIB\nC-SIB\nZ-SIB\nmain",
                c: "Compilation Error",
                d: "None",
                correct: "b",
            },
            {
                question: "22",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z1\n{\n    static\n    {\n        System.out.println(\"Z1-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        A a1 = new A();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Compilation Error",
                b: "Z1-SIB\nmain begin\nmain end\nA-SIB",
                c: "Z1-SIB\nmain begin\nA-SIB\nmain end",
                d: "None",
                correct: "c",
            },
            {
                question: "23",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z2\n{\n    static\n    {\n        System.out.println(\"Z2-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        A a1 = new A();\n        System.out.println(\"-----------\");\n        B b1 = new B();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Z2-SIB\nmain begin\nA-SIB\n-----------\nB-SIB\nmain end",
                b: "Z2-SIB\nmain begin\nA-SIB\nB-SIB\n-----------\nmain end",
                c: "Compilation Error",
                d: "None",
                correct: "a",
            },
            
            {
                question: "24",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z3\n{\n    static\n    {\n        System.out.println(\"Z3-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        B b1 = new B();\n        System.out.println(\"-----------\");\n        A a1 = new A();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Z3-SIB\nmain begin\nA-SIB\n-----------\nB-SIB\nmain end",
                b: "Z3-SIB\nmain begin\nA-SIB\nB-SIB\n-----------\nmain end",
                c: "None",
                correct: "b"
            },
            {
                question: "25",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z4\n{\n    static\n    {\n        System.out.println(\"Z4-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        B b1 = new B();\n        System.out.println(\"-----------\");\n        C c1 = new C();\n        System.out.println(\"-----------\");\n        A a1 = new A();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Z4-SIB\nmain begin\nA-SIB\nB-SIB\n-----------\nA-SIB\nB-SIB\nC-SIB\n-----------\nmain end",
                b: "Z4-SIB\nmain begin\nB-SIB\n-----------\nC-SIB\n-----------\nA-SIB\nmain end",
                c: "Z4-SIB\nmain begin\nA-SIB\nB-SIB\n-----------\nC-SIB\n-----------\nmain end",
                d: "None",
                correct: "c",
            },
            {
                question: "26",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n}\n\nclass Z5\n{\n    static\n    {\n        System.out.println(\"Z5-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        C c1 = new C();\n        System.out.println(\"-----------\");\n        B b1 = new B();\n        System.out.println(\"-----------\");\n        A a1 = new A();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Z5-SIB\nmain begin\nA-SIB\nB-SIB\nC-SIB\n-----------\n-----------\nmain end",
                b: "Z5-SIB\nmain begin\nA-SIB\n-----------\nB-SIB\n-----------\nC-SIB\nmain end",
                c: "Z5-SIB\nmain begin\nA-SIB\n-----------\nA-SIB\nB-SIB\n-----------\nA-SIB\nB-SIB\nC-SIB\nmain end",
                d: "Compilation error",
                correct: "c",
            },
            {
                question: "27",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    {\n        System.out.println(\"B-IIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    {\n        System.out.println(\"C-IIB\");\n    }\n}\n\nclass Z6\n{\n    static\n    {\n        System.out.println(\"Z6-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        C c1 = new C();\n        System.out.println(\"-----------\");\n        B b1 = new B();\n        System.out.println(\"-----------\");\n        A a1 = new A();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Z6-SIB\nmain begin\nA-SIB\nB-SIB\nC-SIB\nA-IIB\nA()\nB-IIB\nB()\nC-IIB\nC()\n-----------\nA-IIB\nA()\nB-IIB\nB()\n-----------\nA-IIB\nA()\nmain end",
                b: "Z6-SIB\nmain begin\nA-IIB\nA()\n-----------\nA-IIB\nA()\nB-IIB\nB()\n-----------\nA-SIB\nB-SIB\nC-SIB\nA-IIB\nA()\nB-IIB\nB()\nC-IIB\nC()\nmain end",
                c: "Compilation Error",
                d: "None",
                correct: "a",
            },
            {
                question: "28",
                code: "class A\n{\n    static\n    {\n        System.out.println(\"A-SIB\");\n    }\n    A()\n    {\n        System.out.println(\"A()\");\n    }\n    {\n        System.out.println(\"A-IIB\");\n    }\n}\n\nclass B extends A\n{\n    static\n    {\n        System.out.println(\"B-SIB\");\n    }\n    B()\n    {\n        System.out.println(\"B()\");\n    }\n    {\n        System.out.println(\"B-IIB\");\n    }\n}\n\nclass C extends B\n{\n    static\n    {\n        System.out.println(\"C-SIB\");\n    }\n    C()\n    {\n        System.out.println(\"C()\");\n    }\n    {\n        System.out.println(\"C-IIB\");\n    }\n}\n\nclass Z7\n{\n    static\n    {\n        System.out.println(\"Z7-SIB\");\n    }\n    public static void main(String[] args) \n    {\n        System.out.println(\"main begin\");\n        A a1 = new A();\n        System.out.println(\"-----------\");\n        B b1 = new B();\n        System.out.println(\"-----------\");\n        C c1 = new C();\n        System.out.println(\"main end\");\n    }\n}",
                a: "Compilation Error",
                b: "Z7-SIB\nmain begin\nA()\nA-IIB\nA-SIB\n-----------\nB-SIB\nA-IIB\nA()\nB-IIB\nB()\n-----------\nC-SIB\nA-IIB\nA()\nB-IIB\nB()\nC-IIB\nC()\nmain end",
                c: "Z7-SIB\nmain begin\nA-SIB\nA-IIB\nA()\n-----------\nB-SIB\nA-IIB\nA()\nB-IIB\nB()\n-----------\nC-SIB\nA-IIB\nA()\nB-IIB\nB()\nC-IIB\nC()\nmain end",
                correct: "c",
            },
            {
                question: "29",
                code: "class A\n{\n    int i;\n    void test1()\n    {\n        System.out.println(\"A-test1\");\n    }\n}\n\nclass B extends A \n{\n    void test2()\n    {\n        System.out.println(\"B-test2\");\n        System.out.println(i);\n        test1();\n    }\n    public static void main(String[] args) \n    {\n        B b1 = new B();\n        b1.test2();\n    }\n}",
                a: "A-test2\n0\nB-test2",
                b: "B-test2\n0\nA-test1",
                c: "Compilation Error",
                d: "Runtime Error",
                e: "None",
                correct: "b",
            },
            {
                question: "30",
                code: "class A\n{\n    int i;\n    void test1()\n    {\n        System.out.println(\"A-test1\");\n    }\n}\n\nclass C\n{\n    A obj;\n    void test2()\n    {\n        System.out.println(\"C-test2\");\n        System.out.println(i);\n        test1();\n    }\n    public static void main(String[] args) \n    {\n        C c1 = new C();\n        c1.test2();\n    }\n}",
                a: "Compilation Error",
                b: "Runtime Error",
                c: "C-test2\n0\nA-test1",
                d: "None",
                correct: "a",
            },
            {
                question: "31",
                code: "class A\n{\n    int i;\n    void test1()\n    {\n        System.out.println(\"A-test1\");\n    }\n}\n\nclass D\n{\n    A obj;\n    void test2()\n    {\n        System.out.println(\"D-test2\");\n        System.out.println(obj.i);\n        obj.test1();\n    }\n    public static void main(String[] args) \n    {\n        D d1 = new D();\n        d1.test2();\n    }\n}",
                a: "D-test2\n0\nA-test1",
                b: "D-test2\nException in thread \"main\" java.lang.NullPointerException\n        at D.test2(D.java:15)\n        at D.main(D.java:21)",
                c: "A-test1\n0\nD-test2",
                d: "Compilation error",
                correct: "b",
            },
            {
                question: "32",
                code: "class A\n{\n    int i;\n    void test1()\n    {\n        System.out.println(\"A-test1\");\n    }\n}\n\nclass E\n{\n    A obj = new A();\n    void test2()\n    {\n        System.out.println(\"E-test2\");\n        System.out.println(obj.i);\n        obj.test1();\n    }\n    public static void main(String[] args) \n    {\n        E e1 = new E();\n        e1.test2();\n    }\n}",
                a: "E-test2\n0\nA-test1",
                b: "A-test1\n0\nE-test2",
                c: "Compilation Error",
                correct: "a"
            },
            {
                question: "33",
                code: "class A\n{\n    int i;\n    void test1()\n    {\n        System.out.println(\"A-test1\");\n    }\n}\n\nclass F\n{\n    A obj;\n    F(A obj)\n    {\n        this.obj = obj;\n    }\n    void test2()\n    {\n        System.out.println(\"F-test2\");\n        System.out.println(obj.i);\n        obj.test1();\n    }\n    public static void main(String[] args) \n    {\n        A a1 = new A();\n        F f1 = new F(a1);\n        f1.test2();\n        F f2 = new F(new A());\n        f2.test2();\n    }\n}",
                a: "Compilation Error",
                b: "F-test2\nA-test1\nF-test2\nA-test1",
                c: "F-test2\n0\nA-test1\nF-test2\n0\nA-test1",
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
