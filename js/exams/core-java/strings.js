const quizData = [
    {
        question: "1. what is the output",
        code: `class M1
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        System.out.println(s1);
        String s2 = new String("hello");
        System.out.println(s2);
    }
}`,
        a: "hello <br> hello",
        b: "hello",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "2. what is the output",
        code: `class M2
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        String s2 = "hello";
        System.out.println(s1 == s2);
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "3. what is the output",
        code: `class M3
{
    public static void main(String[] args)
    {
        String s1 = new String("hello");
        String s2 = new String("hello");
        System.out.println(s1 == s2);
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "4. what is the output",
        code: `class M4
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        String s2 = "Hello";
        String s3 = new String("hello");
        String s4 = new String("hello");
        System.out.println(s3.equals(s4));
    }
}`,
        a: "true",
        b: "false",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "5. what is the output",
        code: `class M5
{
    public static void main(String[] args)
    {
        String s1 = "hello";
        int i = s1.length();
        System.out.println(i);
        System.out.println(s1.length());
    }
}`,
        a: "5 <br> 5",
        b: "4 <br> 4",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "6. what is the output",
        code: `class M6
{
    public static void main(String[] args)
    {
        String s1 = "a c";
        String s2 = " a c ";
        System.out.println(s1.length());
        System.out.println(s2.length());
    }
}`,
        a: "5 <br> 3",
        b: "3 <br> 5",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "7. what is the output",
        code: `class M7
{
    public static void main(String[] args)
    {
        String s1 = "Hi India";
        String s2 = "Hi "India";
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "Hi India <br> Hi \"India\"",
        b: "Hi India <br> Hi India",
        c: "Compilation error",
        d: "none",
        correct: "c",
    },
    {
        question: "8. what is the output",
        code: `class M8
{
    public static void main(String[] args)
    {
        String s1 = "Hi India";
        String s2 = "Hi \"India\"";
        System.out.println(s1.length());
        System.out.println(s2.length());
    }
}`,
        a: "10 <br> 8",
        b: "8 <br> 10",
        c: "Compilation error",
        d: "none",
        correct: "b",
    },
    {
        question: "9. what is the output",
        code: `class M9
{
    public static void main(String[] args)
    {
        String s1 = "hello n hello";
        String s2 = "hello \n hello";
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "hello n hello <br> hello <br> hello",
        b: "hello n hello <br> hello",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "10. what is the output",
        code: `class M10
{
    public static void main(String[] args)
    {
        String s1 = "abc \ xyz";
        System.out.println(s1);
    }
}`,
        a: "Yes",
        b: "No",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "11. what is the output",
        code: `class M11
{
    public static void main(String[] args)
    {
        String s1 = "hello \\ xyz";
        System.out.println(s1);
    }
}`,
        a: "Yes",
        b: "No",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "12. what is the output",
        code: `class M12
{
    public static void main(String[] args)
    {
        String path = "D:\\JDK8.0\\bin";
        System.out.println(path);
    }
}`,
        a: "D:\\JDK8.0\\bin",
        b: "runtime error",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "13. what is the output",
        code: `class M13
{
    public static void main(String[] args)
    {
        String path = "D:\\JDK8.0\\bin";
        System.out.println(path);
    }
}`,
        a: "D:\\JDK8.0\\bin",
        b: "runtime error",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "14. what is the output",
        code: `class M14
{
    public static void main(String[] args)
    {
        String path = "D:/JDK8.0/bin";
        System.out.println(path);
    }
}`,
        a: "Compilation error",
        b: "runtime error",
        c: "D:/JDK8.0/bin",
        d: "none",
        correct: "c",
    },
    {
        question: "15. what is the output",
        code: `class M15
{
    public static void main(String[] args)
    {
        String s1 = "abc";
        s1 = s1 + "xyz";
        System.out.println(s1);
    }
}`,
        a: "Compilation error",
        b: "runtime error",
        c: "abcxyz",
        d: "abc + xyz",
        correct: "c",
    },
    {
        question: "16. what is the output",
        code: `class M16
{
    public static void main(String[] args)
    {
        String s1 = "abc";
        String s2 = null;
        String s3 = s1 + s2;
        String s4 = s2 + s1;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}`,
        a: "abc <br> null <br> abcnull <br> nullabc",
        b: "abc <br> null <br> abcnull <br> abcnull",
        c: "Compilation error",
        d: "null <br> abc <br> abcnull <br> nullabc",
        correct: "a"
    },
    {
        question: "17. what is the output",
        code: `class M17
{
    public static void main(String[] args)
    {
        String s1 = null;
        String s2 = s1 + null;
        String s3 = null + s1;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}`,
        a: "null <br> null <br> nullnull",
        b: "null <br> nullnull <br> nullnull",
        c: "Compilation error",
        d: "none",
        correct: "a"
    },
    {
        question: "18. what is the output..",
        code: `class M18
{
    public static void main(String[] args)
    {
        String s1 = null + null;
        System.out.println(s1);
    }
}`,
        a: "nullnull",
        b: "null + null",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "19. what is the output",
        code: `class M19
{
    public static void main(String[] args)
    {
        String s1 = "abc" + 5 + 6;
        String s2 = 5 + "abc" + 6;
        String s3 = 5 + 6 + "abc";
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
    }
}`,
        a: "abc56 <br> 5abc6 <br> 11abc",
        b: "abc11 <br> 5abc6 <br> 11abc",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "20. what is the output",
        code: `class M20
{
    public static void main(String[] args)
    {
        String s1 = null + null;
        String s2 = 5 + 9;
        String s3 = null + "";
        String s4 = "" + null;
        System.out.println(s1);
        System.out.println(s2);
        System.out.println(s3);
        System.out.println(s4);
    }
}`,
        a: "nullnull <br> 14 <br> null <br> null",
        b: "Compilation error",
        c: "runtime error",
        d: "none",
        correct: "a",
    },
    {
        question: "21. what is the output",
        code: `class M21
{
    public static void main(String[] args)
    {
        String s1 = null;
        System.out.println(s1.length());
    }
}`,
        a: "yes",
        b: "no",
        c: "none",
        d: "none",
        correct: "b",
    },
    {
        question: "22. what is the output",
        code: `class M22
{
    public static void main(String[] args)
    {
        String s1 = NULL;
        System.out.println("Hello World!"s1.length());
    }
}`,
        a: "yes",
        b: "no",
        c: "none",
        d: "none",
        correct: "b",
    },
    {
        question: "23. what is the output",
        code: `class M23
{
    public static void main(String[] args)
    {
        String s1 = "null";
        System.out.println(s1.length());
    }
}`,
        a: "4",
        b: "NullPointerException",
        c: "Compilation error",
        d: "none",
        correct: "a"
    },
    {
        question: "24. what is the output",
        code: `class M24
{
    public static void main(String[] args)
    {
        String s1 = "xyz";
        System.out.println(s1);
        s1.concat("hello");
        System.out.println(s1);
    }
}`,
        a: "xyz <br> xyz",
        b: "xyzxyz",
        c: "Compilation error",
        d: "none",
        correct: "a",
    },
    {
        question: "25. what is the output",
        code: `class M25
{
    public static void main(String[] args)
    {
        String s1 = "xyz";
        System.out.println(s1);
        String s2 = s1.concat("hello");
        System.out.println(s1);
        System.out.println(s2);
    }
}`,
        a: "xyzxyz <br> xyzhello",
        b: "xyz <br> xyz <br> xyz <br> hello",
        c: "xyz <br> xyz <br> xyzhello",
        d: "Compilation error",
        correct: "a",
    },
    
        {
            question: "26. what is the output",
            code: `package StringBuffer;
    
    public class S1 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer();
    
            sb.append("hello");
    
            sb.append("test");
    
            sb.append("123");
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "true <br> true",
            b: "false <br> false",
            c: "true <br> false",
            d: "false <br> true",
            correct: "a",
        },
        {
            question: "27. what is the output",
            code: `package StringBuffer;
    
    public class S13 {
    
        public static void main(String[] args) {
    
            StringBuilder sb = new StringBuilder("hellotoall");
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "Compilation error",
            b: "123",
            c: "hellotest123",
            d: "hellotoall",
            correct: "d",
        },
        {
            question: "28. what is the output",
            code: `package StringBuffer;
    
    public class S3 {
    
        public static void main(String[] args) {
    
            StringBuffer sb1 = new StringBuffer();
    
            sb1.append("hello");
    
            System.out.println(sb1.length());
    
            System.out.println(sb1.capacity());
    
        }
    
    }`,
            a: "5 <br> 16",
            b: "5 <br> 34",
            c: "5 <br> 32",
            d: "Compilation error",
            correct: "a",
        },
        {
            question: "29. what is the output",
            code: `package StringBuffer;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer();
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "16 <br> 0 <br> --------------------- <br> 18 <br> 34",
            b: "16 <br> 0 <br> --------------------- <br> 18 <br> 32",
            c: "18 <br> 34 <br> --------------------- <br> 16 <br> 0",
            d: "16 <br> 0 <br> --------------------- <br> 18 <br> 34",
            correct: "d",
        },
        {
            question: "30. what is the output",
            code: `package StringBuffer;
    
    public class S5 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer(2000);
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "2000 <br> 0 <br> --------------------- <br> 18 <br> 2000",
            b: "2000 <br> 1 <br> --------------------- <br> 18 <br> 2000",
            c: "Compilation error",
            d: "none",
            correct: "a",
        },
        {
            question: "31. what is the output",
            code: `package StringBuffer;
    
    public class S6 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("test");
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
            System.out.println("---------------------");
    
            sb.trimToSize();
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "16 <br> 4 <br> --------------------- <br> 22 <br> 44 <br> --------------------- <br> 22 <br> 22",
            b: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 22",
            c: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 44",
            d: "none",
            correct: "a",
        },
        {
            question: "32. what is the output",
            code: `package StringBuffer;
    
    public class S7 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("test");
    
            System.out.println(sb.capacity());
    
            System.out.println(sb.length());
    
            System.out.println("---------------------");
    
            sb.append("123456789987654321");
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
            System.out.println("---------------------");
    
            sb.trimToSize();
    
            System.out.println(sb.length());
    
            System.out.println(sb.capacity());
    
        }
    
    }`,
            a: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 22",
            b: "16 <br> 4 <br> --------------------- <br> 22 <br> 44 <br> --------------------- <br> 22 <br> 22",
            c: "20 <br> 4 <br> --------------------- <br> 22 <br> 42 <br> --------------------- <br> 22 <br> 44",
            d: "none",
            correct: "a",
        },
        {
            question: "33. what is the output",
            code: `package StringBuffer;
    
    public class S8 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("test");
    
            System.out.println(sb);
    
            sb.reverse();
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "tset",
            b: "test <br> tset",
            c: "Compilation error",
            d: "none",
            correct: "b",
        },
        {
            question: "34. what is the output",
            code: `package StringBuffer;
    
    public class S9 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("test");
    
            System.out.println(sb);
    
            sb.deleteCharAt(2);
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "test <br> tet",
            b: "tet",
            c: "Compilation error",
            d: "none",
            correct: "a",
        },
        {
            question: "35. what is the output",
            code: `package StringBuffer;
    
    public class S10 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("hellotoall");
    
            System.out.println(sb);
    
            sb.delete(2, 6);
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "hellotoall <br> hetoall",
            b: "hellotoall <br> heloall",
            c: "hellotoall <br> heoall",
            d: "Compilation error",
            correct: "a",
        },
        {
            question: "36. what is the output",
            code: `package StringBuffer;
    
    public class S11 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("hellotoall");
    
            System.out.println(sb);
    
            sb.delete(2, 30);
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "hellotoall <br> hel",
            b: "StringIndexOutOfBoundsException",
            c: "Compilation error",
            d: "hellotoall <br> he",
            correct: "b",
        },
        {
            question: "37. what is the output",
            code: `package StringBuffer;
    
    public class S12 {
    
        public static void main(String[] args) {
    
            StringBuffer sb = new StringBuffer("hellotoall");
    
            System.out.println(sb);
    
            sb.delete(20, 30);
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "hellotoall",
            b: "StringIndexOutOfBoundsException",
            c: "Compilation error",
            d: "none",
            correct: "b",
        },
        {
            question: "38. vwhat is the output",
            code: `package StringBuffer;
    
    public class S13 {
    
        public static void main(String[] args) {
    
            StringBuilder sb = new StringBuilder("hellotoall");
    
            System.out.println(sb);
    
        }
    
    }`,
            a: "hellotoall",
            b: "No output",
            c: "Compilation error",
            d: "StringOutOfBoundsException",
            correct: "a",
        },
        {
            question: "39 .what is the output",
            code: `package formatter;
    
    public class S1 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            String s2 = String.format("==> %s", s1);
    
            System.out.println(s1);
    
            System.out.println(s2);
    
        }
    
    }`,
            a: "hello==> hello",
            b: "hello <br> ==> hello",
            c: "Compilation error",
            d: "none",
            correct: "b",
        },
        {
            question: "40. what is the output",
            code: `package formatter;
    
    public class S2 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            String s2 = String.format("==> %s <==", s1);
    
            System.out.println(s1);
    
            System.out.println(s2);
    
        }
    
    }`,
            a: "hello <br> ==> hello <==",
            b: "hello==> hello <==",
            c: "Compilation error",
            d: "none",
            correct: "a",
        },

        {
            question: "41. what is the output",
            code: `package formatter;
    
    public class S3 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            String s2 = String.format(" (%s) and (%d) ans (%f)", s1, 100, 4.5);
    
            System.out.println(s1);
    
            System.out.println(s2);
    
        }
    
    }`,
            a: "hello <br> (hello) and (100) ans (4.500000)",
            b: "hello (hello) and (100) ans (4.500000)",
            c: "Compilation error",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "42. what is the output",
            code: `package formatter;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            int i = 100;
    
            double d  = 2.5;
    
            char ch = 'k';
    
            boolean b = true;
    
            System.out.printf("i value is %d ", i);
    
            System.out.printf("j value is %f ", d);
    
            System.out.printf("b value is %b ", b);
    
            System.out.printf("s1 value is %s ", s1);
    
            System.out.printf("ch value is %c ", ch);
    
        }
    
    }`,
            a: "i value is 100 <br> j value is 2.5 <br> b value is true <br> s1 value is hello <br> ch value is k",
            b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
            c: "Compilation error",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "43. what is the output",
            code: `package formatter;
    
    public class S5 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            int i = 100;
    
            double d  = 2.5;
    
            char ch = 'k';
    
            boolean b = true;
    
            System.out.printf("i value is %d ", i);
    
            System.out.printf("\nj value is %f ", d);
    
            System.out.printf("\nb value is %b ", b);
    
            System.out.printf("\ns1 value is %s ", s1);
    
            System.out.printf("\nch value is %c ", ch);
    
        }
    
    }`,
            a: "i value is 100 <br> <br> j value is 2.5 <br> <br> b value is true <br> <br> s1 value is hello <br> <br> ch value is k",
            b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
            c: "Compilation error",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "44. what is the output",
            code: `package formatter;
    
    public class S6 {
    
        public static void main(String[] args) {
    
            String s1 = "hello";
    
            int i = 100;
    
            double d  = 2.5;
    
            char ch = 'k';
    
            boolean b = true;
    
            System.out.printf("i value is %s ", i);
    
            System.out.printf("\nj value is %s ", d);
    
            System.out.printf("\nb value is %s ", b);
    
            System.out.printf("\ns1 value is %s ", s1);
    
            System.out.printf("\nch value is %s ", ch);
    
        }
    
    }`,
            a: "i value is 100 <br> <br> j value is 2.5 <br> <br> b value is true <br> <br> s1 value is hello <br> <br> ch value is k",
            b: "i value is 100j value is 2.5b value is trues1 value is helloch value is k",
            c: "Compilation error",
            d: "not applicable",
            correct: "c",
        },
        {
            question: "45. what is the output",
            code: `package formatter;
    
    public class S7 {
    
        public static void main(String[] args) {
    
            double d  = 2.5;
    
            System.out.printf("\nj value is %d ", d);
    
        }
    
    }`,
            a: "Yes",
            b: "No",
            c: "none",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "46. what is the output",
            code: `package formatter;
    
    public class S8 {
    
        public static void main(String[] args) {
    
            int i = 100;
    
            double j  = 2.5;
    
            System.out.printf("i value is %d and j value is %f",i, j);
    
        }
    
    }`,
            a: "Compilation error",
            b: "i value is 100 and d value is 2.500000",
            c: "i value is 100 and d value is 2.5",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "47. what is the output",
            code: `package formatter;
    
    public class S9 {
    
        public static void main(String[] args) {
    
            int i = 100;
    
            double j = 2.5;
    
            System.out.printf("j value is %2$f and j value is %1$d",i, j);
    
        }
    
    }`,
            a: "j value is 2.500000 and j value is 100",
            b: "j value is 2.5 and j value is 100",
            c: "Compilation error",
            d: "None",
            correct: "a",
        },
        {
            question: "48. what is the output",
            code: `package formatter;
    
    public class S10 {
    
        public static void main(String[] args) {
    
            int num = 123456;
    
            String s1 = String.format("num is (%d)", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "123456",
            b: "(123456)",
            c: "num is (123456)",
            d: "Compilation error",
            correct: "c",
        },
        {
            question: "49. what is the output",
            code: `package formatter;
    
    public class S11 {
    
        public static void main(String[] args) {
    
            int num = 123456;
    
            String s1 = String.format("num is (%020d)", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "num is (0000000000000,123456)",
            b: "num is (0000000000000123456)",
            c: "num is (0000000000000123,456)",
            d: "Compilation error",
            correct: "b",
        },
        {
            question: "50. what is the output",
            code: `package formatter;
    
    public class S12 {
    
        public static void main(String[] args) {
    
            int num = 123456;
    
            String s1 = String.format("num is (%-20d)", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "num is (123456)",
            b: "num is (123456              )",
            c: "Compilation error",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "51. what is the output",
            code: `package formatter;
    
    public class S13 {
    
        public static void main(String[] args) {
    
            int num = 123456;
    
            String s1 = String.format("num is (%-020d)", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "Yes",
            b: "No",
            c: "none",
            d: "not applicable",
            correct: "b",
        },
        {
            question: "52. what is the output",
            code: `package formatter;
    
    public class S14 {
    
        public static void main(String[] args) {
    
            int num = 123456;
    
            String s1 = String.format("num is (%0,20d)", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "num is (0000000000000,123456)",
            b: "num is (0000000000000123456)",
            c: "num is (0000000000000123,456)",
            d: "Compilation error",
            correct: "d",
        },
        {
            question: "53. what is the output",
            code: `package formatter;
    
    public class S15 {
    
        public static void main(String[] args) {
    
            int num = -123456;
    
            String s1 = String.format("num is %(d", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "Compilation error",
            b: "num is (123456)",
            c: "123456",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "54. what is the output",
            code: `package formatter;
    
    public class S16 {
    
        public static void main(String[] args) {
    
            double num = 1234.5678;
    
            String s1 = String.format("num is %.3f", num);
    
            System.out.println(s1);
    
        }
    
    }`,
            a: "num is 1234.568",
            b: "num is 1234.567",
            c: "num is 12345.678",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "55. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S1 {
    
        public static void main(String[] args) {
    
            String src = "hello and hello and hello Again and Again";
    
            String regex = "and";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "6:and <br> 16:and <br> 32:and",
            b: "Compilation error",
            c: "and <br> and <br> and",
            d: "6: <br> 16: <br> 32: ",
            correct: "a",
        },
        {
            question: "56. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S2 {
    
        public static void main(String[] args) {
    
            String src = "hello and hello and hello Again and Again";
    
            String regex = "hello";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "hello <br> hello <br> hello",
            b: "0:hello <br> 10:hello <br> 20:hello",
            c: "0: <br> 10: <br> 20: ",
            d: "Compilation error",
            correct: "b",
        },
        {
            question: "57. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S3 {
    
        public static void main(String[] args) {
    
            String src = "hello and hello and hello Again and Again";
    
            String regex = "a";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "6:a <br> 16:a <br> 28:a <br> 32:a <br> 38:a",
            b: "Compilation error",
            c: "6: <br> 16: <br> 28: <br> 32: <br> 38: ",
            d: "not applicable",
            correct: "a",
        },
        {
            question: "58. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            String src = "hello and hello and hello Again and Again";
    
            String regex = "[ali]";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "Compilation error",
            b: "No output",
            c: "2:l <br> 3:l <br> 6:a <br> 12:l <br> 13:l <br> 16:a <br> 22:l <br> 23:l <br> 28:a <br> 29:i <br> 32:a <br> 38:a <br> 39:i",
            d: "not applicable",
            correct: "c",
        },
        {
            question: "59. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            String src = "java8, java10,     java11,        java12,         oracle18";
    
            String regex = "\\s";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "6: <br> 14: <br> 15: <br> 16: <br> 17: <br> 18: <br> 26: <br> 27: <br> 28: <br> 29: <br> 30: <br> 31: <br> 32: <br> 33: <br> 41: <br> 42: <br> 43: <br> 44: <br> 45: <br> 46: <br> 47: <br> 48: <br> 49:",
            b: "6: <br> 14: <br> 26: <br> 41: ",
            c: "Compilation error",
            d: "None",
            correct: "a",
        },
        {
            question: "60. what is the output",
            code: `package regularExpression;
    
    import java.util.regex.Matcher;
    
    import java.util.regex.Pattern;
    
    public class S4 {
    
        public static void main(String[] args) {
    
            String src = "java8, java10,     java11,        java12,         oracle18";
    
            String regex = "\\s+";
    
            Pattern pattern = Pattern.compile(regex);
    
            Matcher matches = pattern.matcher(src);
    
            while(matches.find()) {
    
                System.out.println(matches.start() + ":" + matches.group());
    
            }
    
        }
    
    }`,
            a: "6: <br> 14: <br> 15: <br> 16: <br> 17: <br> 18: <br> 26: <br> 27: <br> 28: <br> 29: <br> 30: <br> 31: <br> 32: <br> 33: <br> 41: <br> 42: <br> 43: <br> 44: <br> 45: <br> 46: <br> 47: <br> 48: <br> 49:",
            b: "6: <br> 14: <br> 26: <br> 41: ",
            c: "Compilation error",
            d: "None",
            correct: "b",
        },
        
            {
                question: "61. what is the output",
                code: `package regularExpression;
        
        import java.util.regex.Matcher;
        
        import java.util.regex.Pattern;
        
        public class S5{
        
                public static void main(String[] args) {
        
                        String src = "java8, java10,     java11,        java12,         oracle18";
        
                        String regex = "\\d";
        
                        Pattern pattern = Pattern.compile(regex);
        
                        Matcher matches = pattern.matcher(src);
        
                        while(matches.find()) {
        
                                System.out.println(matches.start() + ":" + matches.group());
        
                        }
        
                }
        
        }`,
                a: "4:8 <br> 11:10 <br> 23:11 <br> 38:12 <br> 56:18",
                b: "Compilation error",
                c: "4:8 <br> 11:1 <br> 12:0 <br> 23:1 <br> 24:1 <br> 38:1 <br> 39:2 <br> 56:1 <br> 57:8",
                d: "None",
                correct: "a",
            },
            {
                question: "62. what is the output",
                code: `package regularExpression;
        
        import java.util.regex.Matcher;
        
        import java.util.regex.Pattern;
        
        public class S5{
        
                public static void main(String[] args) {
        
                        String src = "java8, java10,     java11,        java12,         oracle18";
        
                        String regex = "\\d+";
        
                        Pattern pattern = Pattern.compile(regex);
        
                        Matcher matches = pattern.matcher(src);
        
                        while(matches.find()) {
        
                                System.out.println(matches.start() + ":" + matches.group());
        
                        }
        
                }
        
        }`,
                a: "4:8 <br> 11:10 <br> 23:11 <br> 38:12 <br> 56:18",
                b: "Compilation error",
                c: "4:8 <br> 11:1 <br> 12:0 <br> 23:1 <br> 24:1 <br> 38:1 <br> 39:2 <br> 56:1 <br> 57:8",
                d: "None",
                correct: "a",
            },
            {
                question: "63. what is the output",
                code: `package regularExpression;
        
        import java.util.regex.Matcher;
        
        import java.util.regex.Pattern;
        
        public class S6 {
        
                public static void main(String[] args) {
        
                        String src = "java@java.com";
        
                        String regex = "@";
        
                        Pattern pattern = Pattern.compile(regex);
        
                        Matcher matches = pattern.matcher(src);
        
                        while(matches.find()) {
        
                                System.out.println(matches.start() + ":" + matches.group());
        
                        }
        
                }
        
        }`,
                a: "Compilation error",
                b: "4:@",
                c: "4:",
                d: "@",
                correct: "b",
            },
            {
                question: "64. what is the output",
                code: `package regularExpression;
        
        import java.util.regex.Matcher;
        
        import java.util.regex.Pattern;
        
        public class S6 {
        
                public static void main(String[] args) {
        
                        String src = "java@java.com";
        
                        String regex = ".";
        
                        //String regex = "@";
        
                        Pattern pattern = Pattern.compile(regex);
        
                        Matcher matches = pattern.matcher(src);
        
                        System.out.println(matches.find());
        
                }
        
        }`,
                a: "true",
                b: "false",
                c: "not applicable",
                d: "None",
                correct: "a",
            },
            {
                question: "65. what is the output",
                code: `package regularExpression;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date();
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Tue Dec 17 14:07:34 IST 2019",
                b: "Thu Jan 01 05:30:00 IST 1970",
                c: "Compilation error",
                d: "No output",
                correct: "a",
            },
            {
                question: "66. what is the output",
                code: `package regularExpression;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date(0);
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Tue Dec 17 14:07:34 IST 2019",
                b: "Thu Jan 01 05:30:00 IST 1970",
                c: "Compilation error",
                d: "No output",
                correct: "b",
            },
            {
                question: "67. what is the output",
                code: `package regularExpression;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date(1000*60*24);
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Tue Dec 17 14:07:34 IST 2019",
                b: "Thu Jan 01 05:30:00 IST 1970",
                c: "Fri Jan 02 05:30:00 IST 1970",
                correct: "c",
            },
            {
                question: "68. what is the output",
                code: `package regularExpression;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date(-1000*60*60*24);
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Wed Dec 31 05:30:00 IST 1969",
                b: "Thu Jan 01 05:30:00 IST 1970",
                c: "Fri Jan 02 05:30:00 IST 1970",
                correct: "a",
            },
            {
                question: "69. what is the output",
                code: `package regularExpression;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Compilation error",
                b: "Tue Dec 17 14:14:38 IST 2019",
                c: "Fri Jan 02 05:30:00 IST 1970",
                correct: "b",
            },
            {
                question: "70. what is the output",
                code: `package regularExpression;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        cal.add(Calendar.DATE, 20);
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Mon Jan 06 14:18:12 IST 2020",
                b: "Fri Dec 20 14:14:38 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "71. what is the output",
                code: `package regularExpression;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        cal.add(Calendar.MONTH, -5);
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Mon Jan 06 14:18:12 IST 2020",
                b: "Fri Dec 20 14:14:38 IST 2019",
                c: "Wed Jul 17 14:20:28 IST 2019",
                d: "None",
                correct: "c",
            },
            {
                question: "72. what is the output",
                code: `package regularExpression;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        cal.add(Calendar.YEAR, 10);
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                }
        
        }`,
                a: "Mon Dec 17 14:21:55 IST 2029",
                b: "Fri Dec 20 14:14:38 IST 2019",
                c: "Wed Jul 17 14:20:28 IST 2019",
                d: "None",
                correct: "a",
            },
            {
                question: "73. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                        DateFormat df = DateFormat.getInstance();
        
                        String s1 = df.format(date);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 AM",
                b: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 PM",
                c: "Tue Dec 17 14:24:18 IST 2020 <br> 12/17/19 2:24 PM",
                d: "None",
                correct: "a",
            },
            {
                question: "74. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                        DateFormat df = DateFormat.getDateInstance(DateFormat.SHORT);
        
                        String s1 = df.format(date);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "Tue Dec 17 14:24:18 IST 2019 <br> 12/17/19 2:24 AM",
                b: "Tue Dec 17 14:27:13 IST 2019 <br> 12/17/19",
                c: "Tue Dec 17 14:27:13 IST 2019 <br> 12/17/20",
                d: "None",
                correct: "b",
            },
            {
                question: "75. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Calendar cal = Calendar.getInstance();
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                        DateFormat df = DateFormat.getDateInstance(DateFormat.LONG);
        
                        String s1 = df.format(date);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "Tue Dec 17 14:28:33 IST 2019 <br> December 17, 2019",
                b: "Mon 14:28:33 IST 2020 <br> December 17, 2020",
                c: "Tue Dec 17 14:28:33 IST 2018 <br> December 17, 2018",
                d: "None",
                correct: "a",
            },
            {
                question: "76. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.text.ParseException;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {                
        
                        Calendar cal = Calendar.getInstance();
        
                        Date date = cal.getTime();
        
                        System.out.println(date);
        
                        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);
        
                        String s1 = df.format(date);
        
                        System.out.println(s1);
        
                        
        
                        try {
        
                                Date date2 = df.parse(s1);
        
                                System.out.println(date2);
        
                        }
        
                        catch(ParseException ex) {
        
                                ex.printStackTrace();
        
                        }
        
                }
        
        }`,
                a: "Tue Dec 17 14:32:08 IST 2019 <br> Tuesday, December 17, 2019 <br> Tue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 14:32:08 IST 2019 <br> Tue Dec 17 00:00:00 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "77. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.text.ParseException;
        
        import java.text.SimpleDateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date();
        
                        System.out.println(date);
        
                        SimpleDateFormat sdf = new SimpleDateFormat("dd----MM----YY");
        
                        String s1 = sdf.format(date);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
                b: "Tue Dec 17 14:37:40 <br> 17----Dec----2019",
                c: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
                d: "None",
                correct: "a",
            },
            {
                question: "78. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.text.ParseException;
        
        import java.text.SimpleDateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        Date date = new Date();
        
                        System.out.println(date);
        
                        SimpleDateFormat sdf = new SimpleDateFormat("dd----MMM----YYYY");
        
                        String s1 = sdf.format(date);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "Tue Dec 17 14:37:40 IST 2019 <br> 17----Dec----2019",
                b: "Tue Dec 17 14:37:40 <br> 17----Dec----2019",
                c: "Compilation error",
                d: "None",
                correct: "c",
            },
            {
                question: "79. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.text.NumberFormat;
        
        import java.text.ParseException;
        
        import java.text.SimpleDateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        double num = 4.56787887;
        
                        System.out.println(num);
        
                        NumberFormat nf = NumberFormat.getInstance();
        
                        String s1 = nf.format(num);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "4.56787887 <br> 4.568",
                b: "4.56787887 <br> 4.56877",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "80. what is the output",
                code: `package regularExpression;
        
        import java.text.DateFormat;
        
        import java.text.NumberFormat;
        
        import java.text.ParseException;
        
        import java.text.SimpleDateFormat;
        
        import java.util.Calendar;
        
        import java.util.Date;
        
        import java.util.Locale;
        
        public class S7 {
        
                public static void main(String[] args) {
        
                        double num = 423654778954.56787887;
        
                        System.out.println(num);
        
                        NumberFormat nf = NumberFormat.getCurrencyInstance(Locale.UK);
        
                        String s1 = nf.format(num);
        
                        System.out.println(s1);
        
                }
        
        }`,
                a: "4.236547789545679E11 <br> $423,654,778,954.57",
                b: "4.236547789545679E11 <br> £423,654,778,954.57",
                c: "Compilation error",
                d: "None",
                correct: "b",
            },
            {
                question: "81. what is the output",
                code: "package regularExpression;\n\nimport java.text.DateFormat;\nimport java.util.Calendar;\nimport java.util.Date;\nimport java.util.Locale;\n\npublic class S7 {\n\n    public static void main(String[] args) {\n\n        Calendar cal = Calendar.getInstance();\n        Date date = cal.getTime();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL, Locale.FRANCE);\n        String s1 = df.format(date);\n        System.out.println(s1);\n\n    }\n}\n",
                a: "Tue Dec 17 14:49:54 IST 2019\nmardi 17 décembre 2019",
                b: "Tue Dec 17 14:49:54 IST 2019\n 17 décembre 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "82. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.util.Date;\n\npublic class S1 {\n\n    public static void main(String[] args) {\n\n        Date date = new Date();\n        System.out.println(date);\n\n    }\n}\n",
                a: "Today's date",
                b: "Tomorrow's date",
                c: "Yesterday's date",
                d: "None",
                correct: "a",
            },
            {
                question: "83. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S2 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance();\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 15:24:16 IST 2019\nDec 17, 2019\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 15:24:16 IST 2019\n17-Dec-2019\nTue Dec 17 00:00:00 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "84. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S3 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.SHORT);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 16:28:12 IST 2019\n12/17/2019\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 16:28:12 IST 2019\nDec/17/19\nTue Dec 17 00:00:00 IST 2019",
                c: "Tue Dec 17 16:28:12 IST 2019\n12/17/19\nTue Dec 17 00:00:00 IST 2019",
                d: "None",
                correct: "c",
            },
            {
                question: "85. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S4 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.MEDIUM);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 16:24:52 IST 2019\nDecember 17, 2019\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 16:27:28 IST 2019\nDec 17, 2019\nTue Dec 17 00:00:00 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "86. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S5 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.LONG);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 16:24:52 IST 2019\nDecember 17, 2019\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 16:24:52 IST 2019\n17, December, 2019\nTue Dec 17 00:00:00 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "a",
            },
            {
                question: "87. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.DateFormat;\nimport java.text.ParseException;\nimport java.util.Date;\n\npublic class S6 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        DateFormat df = DateFormat.getDateInstance(DateFormat.FULL);\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 16:23:37 IST 2019\nDecember 17, 2019, Tuesday\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 16:23:37 IST 2019\nTuesday, December 17, 2019\nTue Dec 17 00:00:00 IST 2019",
                c: "Compilation error",
                d: "None",
                correct: "b",
            },
            {
                question: "88. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.ParseException;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\n\npublic class S7 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        SimpleDateFormat df = new SimpleDateFormat(\"dd-MM-yyyy\");\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 15:35:54 IST 2019\n17-12-2019\nTue Dec 17 00:00:00 IST 2019",
                b: "Tue Dec 17 15:35:54 IST 2019\n17-Dec--2019\nTue Dec 17 00:00:00 IST 2019",
                c: "Tue Dec 17 15:35:54 IST 2019\n17-Dec--19Tue Dec 17 00:00:00 IST 2019",
                d: "None",
                correct: "a",
            },
            {
                question: "89. what is the output",
                code: "package dateAndNumberFormats;\n\nimport java.text.ParseException;\nimport java.text.SimpleDateFormat;\nimport java.util.Date;\n\npublic class S8 {\n\n    public static void main(String[] args) throws ParseException {\n\n        Date date = new Date();\n        System.out.println(date);\n        SimpleDateFormat df = new SimpleDateFormat(\"yyyy.MM.dd G 'at' HH:mm:ss z\");\n        String s1 = df.format(date);\n        System.out.println(s1);\n        Date d2 = df.parse(s1);\n        System.out.println(d2);\n\n    }\n}\n",
                a: "Tue Dec 17 15:39:38 IST 2019\n2019.12.17 AD at 15:39:38 IST\nTue Dec 17 15:39:38 IST 2019",
                b: "Tue Dec 17 15:39:38 IST 2019\n2019.12.17 AD at 15:39:38 GMT\nTue Dec 17 15:39:38 IST 2019",
                c: "Compilation error",
                d: "None",
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
