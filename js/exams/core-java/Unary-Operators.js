const quizData = [
    
    {
        question:  "1.What is the output for given code?",
        code: `class A 

{

public static void main(String[] args) 

{

int i = 1;

System.out.println(i ++);

System.out.println(i);

System.out.println(i);

}

}
}`,
        a: "2<br>2<br>2",
        b: "1<br>2<br>2",
        c: "3<br>2<br>2",
        d: "5<br>2<br>2",
        correct: "b",
    },

    
    {
        question: "2.What is the output for given code?",
        code: `class B 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            System.out.println(i ++);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
        a: "0<br>1<br>1<br>1<br>1",
        b: "0<br>2<br>2<br>2<br>2",
        c: "1<br>1<br>1<br>1<br>1",
        d: "6<br>1<br>1<br>1<br>1",
        correct: "a",
    },
    
    {
        question: "3.What is the output for given code?",
        code: `class C 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            System.out.println(i --);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
        a: "4<br>4<br>4<br>4<br>4<br>4",
        b: "5<br>4<br>3<br>2<br>1<br>0",
        c: "5<br>4<br>4<br>4<br>4<br>4",
        d: "5<br>4<br>4<br>6<br>4<br>4",
        correct: "c",
    },
    
    {
        question: "4.What is the output for given code?",
        code: `class D 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "0<br>1",
        b: "1<br>0",
        c: "1<br>1",
        d: "1<br>3",
        correct: "b",
    },
    
    {
        question: "5.What is the output for given code?",
        code: `class E 
    {
        public static void main(String[] args) 
        {
            int i = 10;
            int j = i --;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "9<br>10",
        b: "10<br>9",
        c: "9<br>9",
        d: "9<br>8",
        correct: "a",
    },
    
    {
        question: "6.What is the output for given code?",
        code: `class F 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a: "0<br>1",
        b: "1<br>0",
        c: "1<br>1",
        d: "1<br>5",
        correct: "c",
    },
    {
        question: "7.What is the output for given code?",
        code: `class G 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "4<br>9",
        b : "9<br>4",
        c : "4<br>10",
        d : "9<br>3",
        correct : "a"
    },
    {
         question : "8.What is the output for given code?",
          code : `class H 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i + i ++ + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>2",
         b : "2<br>4",
         c : "2<br>2",
         d : "3<br>2",
          correct : "b"
    },
    {
        question : "9.What is the output for given code?",
        code : `class I 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i + i -- + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a : "3<br>16",
        b : "5<br>16",
        c : "4<br>15",
        d : "4<br>16",
        correct : "a"
    },
    {
         question : "10.What is the output for given code?",
          code : `class J 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i ++ + i ++ + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "2<br>6",
        b : "3<br>6",
        c : "4<br>5",
        d : "4<br>6",
        correct : "b"
    },
    {
         question : "11.What is the output for given code?",
         code : `class K 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = i -- + i -- + i -- + i;
            System.out.println(i); 
            System.out.println(j); 
        }
    }`,
        a : "2<br>16",
        b : "3<br>16",
        c : "2<br>14",
        d : "4<br>6",
         correct : "a"
    },
    {
         question : "12.What is the output for given code?",
         code: `class L 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = i ++ + i + i ++ + i + i -- + i + i -- + i + i -- + i + i ++ + i + i + i ++ + i ++ + i -- + i -- + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
        a : "0<br>10",
        b : "10<br>0",
        c : "0<br>11",
        d : "4<br>6",
        correct : "c"
    },
    {
        question : "13.What is the output for given code?",
        code : `class M 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            i = i++;
            System.out.println(i);
        }
    }`,
         a: "1",
         b : "2",
         c : "0",
         d : "5",
         correct : "c.What is the output for given code?"
    },
    {
         question : "14.What is the output for given code?",
         code : `class N 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            i = i --;
            System.out.println(i);
        }
    }`,
         a : "4",
         b : "5",
         c : "6",
         c : "0",
         correct : "b"
    },
    {
        question : "15.What is the output for given code?",
        code : `class O 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            System.out.println(++ i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
         a: "1<br>1<br>1<br>1<br>1",
         b: "1<br>2<br>2<br>2<br>2",
         c: "5<br>4<br>4<br>4<br>4<br>4",
         d: "5<br>4<br>4<br>6<br>4<br>4",
        "correct": "b"
    },
    {
         question : "16.What is the output for given code?",
         code : `class P 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            System.out.println(-- i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
            System.out.println(i);
        }
    }`,
         a : "5<br>4<br>4<br>4<br>4",
         b : "4<br>4<br>4<br>4<br>4",
         c: "5<br>4<br>4<br>4<br>4<br>4",
         d: "5<br>4<br>4<br>6<br>4<br>4",
        "correct": "b"
    },
    {
         question : "17.What is the output for given code?",
         code : `class Q 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = ++ i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "1<br>2",
         b : "1<br>1",
         c : "1<br>3",
         d : "1<br>8",
        "correct": "b"
    },
    {
         question : "18.What is the output for given code?",
         code : `class R 
    {
        public static void main(String[] args) 
        {
            int i = 5;
            int j = -- i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>4",
         b : "4<br>3",
         c : "4<br>6",
         d : "4<br>7",
         correct : "a"
    },
    {
         question : "19.What is the output for given code?",
         code : `class S 
    {
        public static void main(String[] args) 
        {
            int i = 0;
            int j = ++ i + i + ++ i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "4<br>4",
         b : "2<br>3",
         c : "2<br>4",
         d : "2<br>8",
         correct : "c"
    },
    {
         question : "20.What is the output for given code?",
         code : `class T
    {
        public static void main(String[] args) 
        {
            int i = 1;
            int j = ++ i + i + -- i + i;
            System.out.println(i);
            System.out.println(j);
        }
    }`,
         a : "1<br>6",
         b : "2<br>6",
         c : "2<br>5",
    },
    {
        "question": "21. What is the value of `x` after executing the following Java code?",
        "code": "int x = 5;\nx = ++x + x--;",
        "a": "10",
        "b": "11",
        "c": "12",
        "d": "13",
        "correct": "b"
    },
    {
        "question": "22. What is the value of `a` after the following code is executed?",
        "code": "int a = 8;\na = a++ + ++a - a-- + --a;",
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "11",
        "correct": "a"
    },
    {
        "question": "23. What will be the value of `x` after the code is executed?",
        "code": "int x = 3;\nx = x++ + ++x - x-- + --x;",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "6",
        "correct": "b"
    },
    {
        "question": "24. Given the following code snippet:",
        "code": "int num = 7;\nnum = num++ + ++num - num-- + --num;",
        "a": "7",
        "b": "8",
        "c": "9",
        "d": "10",
        "correct": "a"
    },
    {
        "question": "25. What will be the output of the following Java code?",
        "code": "int x = 4;\nint y = x++ + ++x - --x - x--;\nSystem.out.println(y);",
        "a": "1",
        "b": "2",
        "c": "3",
        "d": "4",
        "correct": "a"
    },
    {
        "question": "26. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 10;\ncounter = counter-- + --counter + counter++ - ++counter;",
        "a": "10",
        "b": "9",
        "c": "11",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "27. What will be the value of `result` after executing the code below?",
        "code": "int result = 6;\nresult = result++ + ++result - result-- + --result;",
        "a": "6",
        "b": "7",
        "c": "8",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "28. What is the value of `value` after executing the following code?",
        "code": "int value = 15;\nvalue = value++ - --value + value-- + ++value;",
        "a": "15",
        "b": "16",
        "c": "17",
        "d": "18",
        "correct": "a"
    },
    {
        "question": "29. Given the code snippet:",
        "code": "int num = 5;\nnum = num++ - num-- + ++num - --num;",
        "a": "5",
        "b": "4",
        "c": "3",
        "d": "6",
        "correct": "b"
    },
    {
        "question": "30. What will be the output of the following Java code?",
        "code": "int a = 7;\nint b = 3;\nint result = a-- - --a + ++b + b++;\nSystem.out.println(result);",
        "a": "12",
        "b": "11",
        "c": "10",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "31. After the code is executed, what will be the value of `x`?",
        "code": "int x = 10;\nx = x-- - --x + ++x - x++;",
        "a": "10",
        "b": "9",
        "c": "11",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "32. What is the output of the following Java code?",
        "code": "int value = 6;\nvalue = value-- + ++value - value++ - --value;\nSystem.out.println(value);",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "8",
        "correct": "a"
    },
    {
        "question": "33. Given the code snippet:",
        "code": "int num = 4;\nnum = num++ + num-- - --num + ++num;",
        "a": "4",
        "b": "5",
        "c": "3",
        "d": "6",
        "correct": "a"
    },
    {
        "question": "34. What will be the value of `result` after executing the code below?",
        "code": "int result = 8;\nresult = result++ + --result - result-- + ++result;",
        "a": "8",
        "b": "7",
        "c": "6",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "35. What is the output of the following Java code?",
        "code": "int x = 5;\nint y = 3;\nint z = x-- + --y - x++;\nSystem.out.println(z);",
        "a": "4",
        "b": "5",
        "c": "3",
        "d": "6",
        "correct": "b"
    },
    {
        "question": "36. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 7;\ncounter = counter++ - --counter + counter-- - ++counter;",
        "a": "7",
        "b": "8",
        "c": "6",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "37. What will be the value of `value` after executing the following code?",
        "code": "int value = 12;\nvalue = value++ + ++value - --value + value--;",
        "a": "13",
        "b": "14",
        "c": "12",
        "d": "15",
        "correct": "c"
    },
    {
        "question": "38. Given the code snippet:",
        "code": "int num = 9;\nnum = num++ - ++num + num-- - --num;",
        "a": "9",
        "b": "8",
        "c": "10",
        "d": "7",
        "correct": "b"
    },
    {
        "question": "39. What will be the output of the following Java code?",
        "code": "int a = 4;\nint b = 2;\nint result = a++ - ++b + b-- + --a;\nSystem.out.println(result);",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "2",
        "correct": "b"
    },
    {
        "question": "40. After the code is executed, what will be the value of `x`?",
        "code": "int x = 6;\nx = x++ + --x - x-- + ++x;",
        "a": "6",
        "b": "7",
        "c": "5",
        "d": "8",
        "correct": "a"
    },
    {
        "question": "41. What is the output of the following Java code?",
        "code": "int value = 10;\nvalue = value-- - --value + value++ + ++value;\nSystem.out.println(value);",
        "a": "10",
        "b": "9",
        "c": "8",
        "d": "11",
        "correct": "a"
    },
    {
        "question": "42. Given the code snippet:",
        "code": "int num = 6;\nnum = num-- + ++num - --num - num++;",
        "a": "7",
        "b": "6",
        "c": "5",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "43. What will be the value of `result` after executing the code below?",
        "code": "int result = 9;\nresult = result++ - --result + ++result - result--;",
        "a": "10",
        "b": "9",
        "c": "8",
        "d": "11",
        "correct": "b"
    },
    {
        "question": "44. What is the output of the following Java code?",
        "code": "int x = 8;\nint y = 4;\nint z = x-- + ++y - y-- - --x;\nSystem.out.println(z);",
        "a": "7",
        "b": "6",
        "c": "8",
        "d": "5",
        "correct": "a"
    },
    {
        "question": "45. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 5;\ncounter = counter++ + --counter - ++counter - counter--;",
        "a": "5",
        "b": "4",
        "c": "6",
        "d": "3",
        "correct": "a"
    },
    {
        "question": "46. What will be the value of `value` after executing the following code?",
        "code": "int value = 7;\nvalue = value-- - ++value + value++ - --value;",
        "a": "8",
        "b": "7",
        "c": "6",
        "d": "9",
        "correct": "b"
    },
    {
        "question": "47. Given the code snippet:",
        "code": "int num = 10;\nnum = num++ - num-- + --num - ++num;",
        "a": "10",
        "b": "9",
        "c": "11",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "48. What will be the output of the following Java code?",
        "code": "int a = 5;\nint b = 3;\nint result = a-- + ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "5",
        "b": "6",
        "c": "4",
        "d": "3",
        "correct": "a"
    },
    {
        "question": "49. After the code is executed, what will be the value of `x`?",
        "code": "int x = 12;\nx = x++ - x-- + ++x - --x;",
        "a": "11",
        "b": "10",
        "c": "12",
        "d": "9",
        "correct": "b"
    },
    {
        "question": "50. What is the output of the following Java code?",
        "code": "int value = 8;\nvalue = value++ + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "8",
        "b": "9",
        "c": "7",
        "d": "10",
        "correct": "a"
    },
    {
        "question": "51. What will be the value of `y` after executing the code below?",
        "code": "int y = 10;\ny = y++ - --y + ++y - y--;",
        "a": "10",
        "b": "9",
        "c": "8",
        "d": "11",
        "correct": "b"
    },
    {
        "question": "52. What is the output of the following Java code?",
        "code": "int a = 3;\nint b = 2;\nint c = a++ - --b + b++ - --a;\nSystem.out.println(c);",
        "a": "1",
        "b": "2",
        "c": "0",
        "d": "3",
        "correct": "a"
    },
    {
        "question": "53. Given the code snippet:",
        "code": "int num = 5;\nnum = num-- + ++num - --num + num++;",
        "a": "6",
        "b": "5",
        "c": "4",
        "d": "7",
        "correct": "b"
    },
    {
        "question": "54. What will be the value of `x` after executing the code below?",
        "code": "int x = 7;\nx = x-- - --x + x++ - ++x;",
        "a": "7",
        "b": "6",
        "c": "8",
        "d": "9",
        "correct": "a"
    },
    {
        "question": "55. What is the output of the following Java code?",
        "code": "int p = 4;\nint q = 2;\nint r = p++ - --q + q-- + --p;\nSystem.out.println(r);",
        "a": "3",
        "b": "4",
        "c": "2",
        "d": "5",
        "correct": "b"
    },
    {
        "question": "56. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 11;\ncounter = counter++ + --counter - counter-- + ++counter;",
        "a": "11",
        "b": "12",
        "c": "10",
        "d": "13",
        "correct": "a"
    },
    {
        "question": "57. What will be the value of `value` after executing the following code?",
        "code": "int value = 15;\nvalue = value++ - ++value + --value - value++;",
        "a": "14",
        "b": "15",
        "c": "13",
        "d": "16",
        "correct": "b"
    },
    {
        "question": "58. Given the code snippet:",
        "code": "int num = 14;\nnum = num-- - ++num + num-- - --num;",
        "a": "14",
        "b": "13",
        "c": "12",
        "d": "15",
        "correct": "b"
    },
    {
        "question": "59. What will be the output of the following Java code?",
        "code": "int a = 6;\nint b = 4;\nint result = a++ + --b - b-- + --a;\nSystem.out.println(result);",
        "a": "7",
        "b": "6",
        "c": "8",
        "d": "9",
        "correct": "b"
    },
    {
        "question": "60. After the code is executed, what will be the value of `x`?",
        "code": "int x = 9;\nx = x++ - x-- + --x - ++x;",
        "a": "8",
        "b": "9",
        "c": "7",
        "d": "10",
        "correct": "b"
    },
    {
        "question": "61. What is the output of the following Java code?",
        "code": "int value = 13;\nvalue = value++ + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "13",
        "b": "14",
        "c": "12",
        "d": "15",
        "correct": "a"
    },
    {
        "question": "62. Given the code snippet:",
        "code": "int num = 8;\nnum = num++ + --num - num-- + ++num;",
        "a": "8",
        "b": "7",
        "c": "9",
        "d": "6",
        "correct": "a"
    },
    {
        "question": "63. What will be the value of `result` after executing the code below?",
        "code": "int result = 16;\nresult = result++ + --result - result-- + ++result;",
        "a": "16",
        "b": "15",
        "c": "17",
        "d": "18",
        "correct": "a"
    },
    {
        "question": "64. What is the output of the following Java code?",
        "code": "int x = 10;\nint y = 5;\nint z = x++ - --y + y-- + --x;\nSystem.out.println(z);",
        "a": "8",
        "b": "7",
        "c": "9",
        "d": "6",
        "correct": "a"
    },
    {
        "question": "65. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 19;\ncounter = counter++ - --counter + ++counter - counter--;",
        "a": "19",
        "b": "18",
        "c": "20",
        "d": "17",
        "correct": "a"
    },
    {
        "question": "66. What will be the value of `value` after executing the following code?",
        "code": "int value = 20;\nvalue = value-- + ++value - value++ + --value;",
        "a": "19",
        "b": "20",
        "c": "18",
        "d": "21",
        "correct": "b"
    },
    {
        "question": "67. Given the code snippet:",
        "code": "int num = 13;\nnum = num-- - ++num + num-- - --num;",
        "a": "14",
        "b": "13",
        "c": "12",
        "d": "15",
        "correct": "b"
    },
    {
        "question": "68. What will be the output of the following Java code?",
        "code": "int a = 17;\nint b = 10;\nint result = a++ - --b + b-- + --a;\nSystem.out.println(result);",
        "a": "17",
        "b": "16",
        "c": "15",
        "d": "18",
        "correct": "b"
    },
    {
        "question": "69. After the code is executed, what will be the value of `x`?",
        "code": "int x = 18;\nx = x++ - x-- + ++x - --x;",
        "a": "17",
        "b": "16",
        "c": "18",
        "d": "19",
        "correct": "b"
    },
    {
        "question": "70. What is the output of the following Java code?",
        "code": "int value = 14;\nvalue = value++ + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "14",
        "b": "13",
        "c": "15",
        "d": "16",
        "correct": "a"
    },
    {
        "question": "51. What is the output of the following Java code?",
        "code": "int x = 20;\nint y = 7;\nint z = x-- + --y - y++ - ++x;\nSystem.out.println(z);",
        "a": "20",
        "b": "21",
        "c": "19",
        "d": "22",
        "correct": "c"
    },
    {
        "question": "52. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 9;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "8",
        "b": "9",
        "c": "10",
        "d": "7",
        "correct": "b"
    },
    {
        "question": "53. What will be the value of `value` after executing the code below?",
        "code": "int value = 13;\nvalue = value++ + --value - ++value + value--;",
        "a": "14",
        "b": "13",
        "c": "12",
        "d": "15",
        "correct": "a"
    },
    {
        "question": "54. Given the code snippet:",
        "code": "int num = 22;\nnum = num++ + num-- - --num + ++num;",
        "a": "22",
        "b": "23",
        "c": "24",
        "d": "21",
        "correct": "c"
    },
    {
        "question": "55. What will be the output of the following Java code?",
        "code": "int a = 10;\nint b = 6;\nint result = a++ + ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "10",
        "b": "9",
        "c": "11",
        "d": "8",
        "correct": "b"
    },
    {
        "question": "56. After the code is executed, what will be the value of `x`?",
        "code": "int x = 24;\nx = x++ - --x + ++x - x++;",
        "a": "25",
        "b": "24",
        "c": "26",
        "d": "23",
        "correct": "b"
    },
    {
        "question": "57. What is the output of the following Java code?",
        "code": "int value = 14;\nvalue = value-- + ++value - value++ + --value;\nSystem.out.println(value);",
        "a": "14",
        "b": "13",
        "c": "15",
        "d": "12",
        "correct": "a"
    },
    {
        "question": "58. Given the code snippet:",
        "code": "int num = 26;\nnum = num-- - ++num + --num - num++;",
        "a": "25",
        "b": "24",
        "c": "26",
        "d": "23",
        "correct": "a"
    },
    {
        "question": "59. What will be the value of `result` after executing the code below?",
        "code": "int result = 14;\nresult = result++ + --result - result-- + ++result;",
        "a": "14",
        "b": "13",
        "c": "12",
        "d": "15",
        "correct": "a"
    },
    {
        "question": "60. What is the output of the following Java code?",
        "code": "int x = 18;\nint y = 4;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "19",
        "b": "18",
        "c": "17",
        "d": "16",
        "correct": "b"
    },
    {
        "question": "61. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 11;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "11",
        "b": "10",
        "c": "12",
        "d": "9",
        "correct": "b"
    },
    {
        "question": "62. What will be the value of `value` after executing the following code?",
        "code": "int value = 15;\nvalue = value-- + --value - ++value + value++;",
        "a": "15",
        "b": "14",
        "c": "16",
        "d": "13",
        "correct": "d"
    },
    {
        "question": "63. Given the code snippet:",
        "code": "int num = 28;\nnum = num++ + num-- - --num + ++num;",
        "a": "29",
        "b": "28",
        "c": "30",
        "d": "27",
        "correct": "b"
    },
    {
        "question": "64. What will be the output of the following Java code?",
        "code": "int a = 12;\nint b = 8;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "3",
        "b": "4",
        "c": "5",
        "d": "2",
        "correct": "a"
    },
    {
        "question": "65. After the code is executed, what will be the value of `x`?",
        "code": "int x = 30;\nx = x-- - --x + ++x - x++;",
        "a": "31",
        "b": "30",
        "c": "32",
        "d": "29",
        "correct": "d"
    },
    {
        "question": "66. What is the output of the following Java code?",
        "code": "int value = 16;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "16",
        "b": "15",
        "c": "14",
        "d": "17",
        "correct": "b"
    },
    {
        "question": "67. Given the code snippet:",
        "code": "int num = 32;\nnum = num-- - ++num + --num - num++;",
        "a": "31",
        "b": "30",
        "c": "33",
        "d": "29",
        "correct": "b"
    },
    {
        "question": "68. What will be the value of `result` after executing the code below?",
        "code": "int result = 16;\nresult = result++ - --result + result-- - ++result;",
        "a": "16",
        "b": "15",
        "c": "14",
        "d": "17",
        "correct": "c"
    },
    {
        "question": "69. What is the output of the following Java code?",
        "code": "int x = 20;\nint y = 5;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "20",
        "b": "19",
        "c": "18",
        "d": "21",
        "correct": "b"
    },
    {
        "question": "70. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 13;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "13",
        "b": "14",
        "c": "12",
        "d": "15",
        "correct": "c"
    },
    {
        "question": "71. What will be the value of `value` after executing the following code?",
        "code": "int value = 18;\nvalue = value-- + --value - value++ + ++value;",
        "a": "18",
        "b": "17",
        "c": "16",
        "d": "19",
        "correct": "b"
    },
    {
        "question": "72. Given the code snippet:",
        "code": "int num = 34;\nnum = num++ + num-- - --num + ++num;",
        "a": "34",
        "b": "33",
        "c": "35",
        "d": "32",
        "correct": "a"
    },
    {
        "question": "73. What will be the output of the following Java code?",
        "code": "int a = 14;\nint b = 7;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "4",
        "correct": "b"
    },
    {
        "question": "74. After the code is executed, what will be the value of `x`?",
        "code": "int x = 36;\nx = x-- - --x + ++x - x++;",
        "a": "36",
        "b": "35",
        "c": "34",
        "d": "37",
        "correct": "b"
    },
    {
        "question": "75. What is the output of the following Java code?",
        "code": "int value = 20;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "20",
        "b": "19",
        "c": "18",
        "d": "21",
        "correct": "b"
    },
    {
        "question": "76. Given the code snippet:",
        "code": "int num = 38;\nnum = num-- - ++num + --num - num++;",
        "a": "37",
        "b": "36",
        "c": "39",
        "d": "35",
        "correct": "b"
    },
    {
        "question": "77. What will be the value of `result` after executing the code below?",
        "code": "int result = 18;\nresult = result++ - --result + result-- - ++result;",
        "a": "18",
        "b": "17",
        "c": "16",
        "d": "19",
        "correct": "b"
    },
    {
        "question": "78. What is the output of the following Java code?",
        "code": "int x = 22;\nint y = 6;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "21",
        "b": "22",
        "c": "23",
        "d": "20",
        "correct": "d"
    },
    {
        "question": "79. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 15;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "15",
        "b": "14",
        "c": "16",
        "d": "13",
        "correct": "b"
    },
    {
        "question": "80. What will be the value of `value` after executing the following code?",
        "code": "int value = 24;\nvalue = value-- + --value - value++ + ++value;",
        "a": "25",
        "b": "24",
        "c": "23",
        "d": "26",
        "correct": "b"
    },
    {
        "question": "81. Given the code snippet:",
        "code": "int num = 40;\nnum = num++ + num-- - --num + ++num;",
        "a": "40",
        "b": "41",
        "c": "42",
        "d": "39",
        "correct": "a"
    },
    {
        "question": "82. What will be the output of the following Java code?",
        "code": "int a = 16;\nint b = 8;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "8",
        "b": "7",
        "c": "6",
        "d": "9",
        "correct": "c"
    },
    {
        "question": "83. After the code is executed, what will be the value of `x`?",
        "code": "int x = 42;\nx = x-- - --x + ++x - x++;",
        "a": "42",
        "b": "41",
        "c": "40",
        "d": "43",
        "correct": "b"
    },
    {
        "question": "84. What is the output of the following Java code?",
        "code": "int value = 26;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "26",
        "b": "25",
        "c": "24",
        "d": "27",
        "correct": "b"
    },
    {
        "question": "85. Given the code snippet:",
        "code": "int num = 44;\nnum = num-- - ++num + --num - num++;",
        "a": "43",
        "b": "42",
        "c": "45",
        "d": "41",
        "correct": "b"
    },
    {
        "question": "86. What will be the value of `result` after executing the code below?",
        "code": "int result = 26;\nresult = result++ - --result + result-- - ++result;",
        "a": "26",
        "b": "25",
        "c": "24",
        "d": "27",
        "correct": "a"
    },
    {
        "question": "87. What is the output of the following Java code?",
        "code": "int x = 24;\nint y = 5;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "23",
        "b": "24",
        "c": "25",
        "d": "22",
        "correct": "a"
    },
    {
        "question": "88. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 17;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "17",
        "b": "16",
        "c": "18",
        "d": "15",
        "correct": "b"
    },
    {
        "question": "89. What will be the value of `value` after executing the following code?",
        "code": "int value = 28;\nvalue = value-- + --value - value++ + ++value;",
        "a": "28",
        "b": "27",
        "c": "26",
        "d": "29",
        "correct": "b"
    },
    {
        "question": "90. Given the code snippet:",
        "code": "int num = 46;\nnum = num++ + num-- - --num + ++num;",
        "a": "47",
        "b": "46",
        "c": "45",
        "d": "48",
        "correct": "b"
    },
    {
        "question": "91. What will be the output of the following Java code?",
        "code": "int a = 18;\nint b = 9;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "9",
        "b": "8",
        "c": "7",
        "d": "10",
        "correct": "b"
    },
    {
        "question": "92. After the code is executed, what will be the value of `x`?",
        "code": "int x = 48;\nx = x-- - --x + ++x - x++;",
        "a": "48",
        "b": "47",
        "c": "46",
        "d": "49",
        "correct": "a"
    },
    {
        "question": "93. What is the output of the following Java code?",
        "code": "int value = 30;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "30",
        "b": "29",
        "c": "28",
        "d": "31",
        "correct": "a"
    },
    {
        "question": "94. Given the code snippet:",
        "code": "int num = 50;\nnum = num-- - ++num + --num - num++;",
        "a": "49",
        "b": "48",
        "c": "51",
        "d": "47",
        "correct": "b"
    },
    {
        "question": "95. What will be the value of `result` after executing the code below?",
        "code": "int result = 30;\nresult = result++ - --result + result-- - ++result;",
        "a": "30",
        "b": "29",
        "c": "28",
        "d": "31",
        "correct": "b"
    },
    {
        "question": "96. What is the output of the following Java code?",
        "code": "int x = 26;\nint y = 4;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "25",
        "b": "26",
        "c": "27",
        "d": "24",
        "correct": "a"
    },
    {
        "question": "97. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 19;\ncounter = counter-- - --counter + ++counter - counter++;",
        "a": "19",
        "b": "18",
        "c": "20",
        "d": "17",
        "correct": "a"
    },
    {
        "question": "98. What will be the value of `value` after executing the following code?",
        "code": "int value = 32;\nvalue = value-- + --value - value++ + ++value;",
        "a": "32",
        "b": "31",
        "c": "30",
        "d": "33",
        "correct": "a"
    },
    {
        "question": "99. Given the code snippet:",
        "code": "int num = 52;\nnum = num++ + num-- - --num + ++num;",
        "a": "52",
        "b": "53",
        "c": "54",
        "d": "51",
        "correct": "a"
    },
    {
        "question": "100. What will be the output of the following Java code?",
        "code": "int a = 20;\nint b = 10;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "10",
        "b": "9",
        "c": "8",
        "d": "11",
        "correct": "b"
    },
    {
        "question": "101. What is the output of the following Java code?",
        "code": "int x = 10;\nint y = 5;\nint z = x-- + --y - y++ - ++x;\nSystem.out.println(z);",
        "a": "9",
        "b": "10",
        "c": "11",
        "d": "8",
        "correct": "a"
    },
    {
        "question": "102. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 15;\ncounter = counter-- + --counter - ++counter - counter--;\n",
        "a": "14",
        "b": "15",
        "c": "16",
        "d": "13",
        "correct": "a"
    },
    {
        "question": "103. What will be the value of `value` after executing the code below?",
        "code": "int value = 20;\nvalue = value-- - --value + value++ - ++value;\n",
        "a": "19",
        "b": "20",
        "c": "18",
        "d": "21",
        "correct": "a"
    },
    {
        "question": "104. Given the code snippet:",
        "code": "int num = 25;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "26",
        "b": "25",
        "c": "24",
        "d": "27",
        "correct": "b"
    },
    {
        "question": "105. What will be the output of the following Java code?",
        "code": "int a = 15;\nint b = 8;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "5",
        "b": "6",
        "c": "7",
        "d": "4",
        "correct": "b"
    },
    {
        "question": "106. After the code is executed, what will be the value of `x`?",
        "code": "int x = 12;\nx = x-- - --x + ++x - x++;\n",
        "a": "11",
        "b": "12",
        "c": "10",
        "d": "13",
        "correct": "a"
    },
    {
        "question": "107. What is the output of the following Java code?",
        "code": "int value = 17;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "16",
        "b": "17",
        "c": "18",
        "d": "15",
        "correct": "c"
    },
    {
        "question": "108. Given the code snippet:",
        "code": "int num = 22;\nnum = num-- - ++num + --num - num++;\n",
        "a": "21",
        "b": "22",
        "c": "23",
        "d": "20",
        "correct": "b"
    },
    {
        "question": "109. What will be the value of `result` after executing the code below?",
        "code": "int result = 19;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "18",
        "b": "19",
        "c": "17",
        "d": "20",
        "correct": "c"
    },
    {
        "question": "110. What is the output of the following Java code?",
        "code": "int x = 13;\nint y = 6;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "11",
        "b": "12",
        "c": "13",
        "d": "10",
        "correct": "a"
    },
    {
        "question": "111. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 18;\ncounter = counter-- - --counter + ++counter - counter--;\n",
        "a": "17",
        "b": "18",
        "c": "19",
        "d": "16",
        "correct": "a"
    },
    {
        "question": "112. What will be the value of `value` after executing the following code?",
        "code": "int value = 23;\nvalue = value-- + --value - value++ + ++value;\n",
        "a": "22",
        "b": "23",
        "c": "21",
        "d": "24",
        "correct": "b"
    },
    {
        "question": "113. Given the code snippet:",
        "code": "int num = 30;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "30",
        "b": "31",
        "c": "29",
        "d": "32",
        "correct": "a"
    },
    {
        "question": "114. What will be the output of the following Java code?",
        "code": "int a = 20;\nint b = 9;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "10",
        "b": "9",
        "c": "8",
        "d": "11",
        "correct": "c"
    },
    {
        "question": "115. After the code is executed, what will be the value of `x`?",
        "code": "int x = 33;\nx = x-- - --x + ++x - x++;\n",
        "a": "32",
        "b": "33",
        "c": "31",
        "d": "34",
        "correct": "c"
    },
    {
        "question": "116. What is the output of the following Java code?",
        "code": "int value = 22;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "23",
        "b": "22",
        "c": "21",
        "d": "24",
        "correct": "a"
    },
    {
        "question": "117. Given the code snippet:",
        "code": "int num = 34;\nnum = num-- - ++num + --num - num++;\n",
        "a": "33",
        "b": "34",
        "c": "32",
        "d": "35",
        "correct": "c"
    },
    {
        "question": "118. What will be the value of `result` after executing the code below?",
        "code": "int result = 21;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "21",
        "b": "20",
        "c": "19",
        "d": "22",
        "correct": "c"
    },
    {
        "question": "119. What is the output of the following Java code?",
        "code": "int x = 15;\nint y = 7;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "14",
        "b": "15",
        "c": "16",
        "d": "13",
        "correct": "a"
    },
    {
        "question": "120. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 20;\ncounter = counter-- - --counter + ++counter - counter--;\n",
        "a": "19",
        "b": "20",
        "c": "21",
        "d": "18",
        "correct": "a"
    },
    {
        "question": "121. What will be the value of `value` after executing the following code?",
        "code": "int value = 25;\nvalue = value-- + --value - value++ + ++value;\n",
        "a": "26",
        "b": "25",
        "c": "24",
        "d": "27",
        "correct": "b"
    },
    {
        "question": "122. Given the code snippet:",
        "code": "int num = 40;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "41",
        "b": "40",
        "c": "39",
        "d": "42",
        "correct": "b"
    },
    {
        "question": "123. What will be the output of the following Java code?",
        "code": "int a = 25;\nint b = 11;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "13",
        "b": "12",
        "c": "11",
        "d": "14",
        "correct": "a"
    },
    {
        "question": "124. After the code is executed, what will be the value of `x`?",
        "code": "int x = 42;\nx = x-- - --x + ++x - x++;\n",
        "a": "41",
        "b": "42",
        "c": "43",
        "d": "40",
        "correct": "a"
    },
    {
        "question": "125. What is the output of the following Java code?",
        "code": "int value = 28;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "29",
        "b": "28",
        "c": "27",
        "d": "30",
        "correct": "a"
    },
    {
        "question": "126. Given the code snippet:",
        "code": "int num = 45;\nnum = num-- - ++num + --num - num++;\n",
        "a": "44",
        "b": "43",
        "c": "46",
        "d": "42",
        "correct": "a"
    },
    {
        "question": "127. What will be the value of `result` after executing the code below?",
        "code": "int result = 28;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "27",
        "b": "26",
        "c": "25",
        "d": "29",
        "correct": "b"
    },
    {
        "question": "128. What is the output of the following Java code?",
        "code": "int x = 18;\nint y = 8;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "18",
        "b": "19",
        "c": "20",
        "d": "17",
        "correct": "d"
    },
    {
        "question": "129. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 23;\ncounter = counter-- - --counter + ++counter - counter--;\n",
        "a": "22",
        "b": "23",
        "c": "24",
        "d": "21",
        "correct": "b"
    },
    {
        "question": "130. What will be the value of `value` after executing the following code?",
        "code": "int value = 32;\nvalue = value-- + --value - value++ + ++value;\n",
        "a": "31",
        "b": "32",
        "c": "30",
        "d": "33",
        "correct": "a"
    },
    {
        "question": "131. Given the code snippet:",
        "code": "int num = 50;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "49",
        "b": "50",
        "c": "51",
        "d": "48",
        "correct": "b"
    },
    {
        "question": "132. What will be the output of the following Java code?",
        "code": "int a = 30;\nint b = 12;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "15",
        "b": "14",
        "c": "13",
        "d": "16",
        "correct": "b"
    },
    {
        "question": "133. After the code is executed, what will be the value of `x`?",
        "code": "int x = 55;\nx = x-- - --x + ++x - x++;\n",
        "a": "54",
        "b": "55",
        "c": "53",
        "d": "56",
        "correct": "c"
    },
    {
        "question": "134. What is the output of the following Java code?",
        "code": "int value = 33;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "32",
        "b": "33",
        "c": "31",
        "d": "34",
        "correct": "b"
    },
    {
        "question": "135. Given the code snippet:",
        "code": "int num = 60;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "61",
        "b": "60",
        "c": "59",
        "d": "62",
        "correct": "b"
    },
    {
        "question": "136. What will be the value of `result` after executing the code below?",
        "code": "int result = 33;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "32",
        "b": "31",
        "c": "30",
        "d": "34",
        "correct": "a"
    },
    {
        "question": "137. What is the output of the following Java code?",
        "code": "int x = 21;\nint y = 7;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);",
        "a": "20",
        "b": "21",
        "c": "22",
        "d": "19",
        "correct": "c"
    },
    {
        "question": "138. After executing the following code, what will be the value of `counter`?",
        "code": "int counter = 26;\ncounter = counter-- - --counter + ++counter - counter--;\n",
        "a": "25",
        "b": "26",
        "c": "27",
        "d": "24",
        "correct": "a"
    },
    {
        "question": "139. What will be the value of `value` after executing the following code?",
        "code": "int value = 35;\nvalue = value-- + --value - value++ + ++value;\n",
        "a": "34",
        "b": "35",
        "c": "33",
        "d": "36",
        "correct": "a"
    },
    {
        "question": "140. Given the code snippet:",
        "code": "int num = 85;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "86",
        "b": "85",
        "c": "84",
        "d": "87",
        "correct": "b"
    },
    {
        "question": "141. What will be the output of the following Java code?",
        "code": "int a = 35;\nint b = 13;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);",
        "a": "19",
        "b": "18",
        "c": "17",
        "d": "20",
        "correct": "c"
    },
    {
        "question": "142. After the code is executed, what will be the value of `x`?",
        "code": "int x = 70;\nx = x-- - --x + ++x - x++;\n",
        "a": "69",
        "b": "70",
        "c": "68",
        "d": "71",
        "correct": "c"
    },
    {
        "question": "143. What is the output of the following Java code?",
        "code": "int value = 38;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);",
        "a": "37",
        "b": "38",
        "c": "36",
        "d": "39",
        "correct": "c"
    },
    {
        "question": "144. Given the code snippet:",
        "code": "int num = 75;\nnum = num++ + num-- - --num + ++num;\n",
        "a": "76",
        "b": "75",
        "c": "74",
        "d": "77",
        "correct": "b"
    },
    {
        "question": "145. What will be the value of `result` after executing the code below?",
        "code": "int result = 38;\nresult = result++ - --result + result-- - ++result;\n",
        "a": "37",
        "b": "36",
        "c": "35",
        "d": "39",
        "correct": "a"
    },
    
        {
            "question": "166. What will be the value of `value` after executing the following code?",
            "code": "int value = 50;\nvalue = value-- + --value - value++ + ++value;\n",
            "a": "49",
            "b": "50",
            "c": "48",
            "d": "51",
            "correct": "a"
        },
        {
            "question": "167. Given the code snippet:",
            "code": "int num = 115;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "116",
            "b": "115",
            "c": "114",
            "d": "117",
            "correct": "b"
        },
        {
            "question": "168. What will be the output of the following Java code?",
            "code": "int a = 50;\nint b = 16;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "34",
            "b": "33",
            "c": "32",
            "d": "35",
            "correct": "c"
        },
        {
            "question": "169. After the code is executed, what will be the value of `x`?",
            "code": "int x = 120;\nx = x-- - --x + ++x - x++;\n",
            "a": "119",
            "b": "120",
            "c": "118",
            "d": "121",
            "correct": "c"
        },
        {
            "question": "170. What is the output of the following Java code?",
            "code": "int value = 52;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "51",
            "b": "52",
            "c": "50",
            "d": "53",
            "correct": "b"
        },
        {
            "question": "171. Given the code snippet:",
            "code": "int num = 125;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "126",
            "b": "125",
            "c": "124",
            "d": "127",
            "correct": "b"
        },
        {
            "question": "172. What will be the output of the following Java code?",
            "code": "int a = 55;\nint b = 17;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "38",
            "b": "37",
            "c": "36",
            "d": "39",
            "correct": "a"
        },
        {
            "question": "173. After the code is executed, what will be the value of `x`?",
            "code": "int x = 130;\nx = x-- - --x + ++x - x++;\n",
            "a": "129",
            "b": "130",
            "c": "128",
            "d": "131",
            "correct": "c"
        },
        {
            "question": "174. What is the output of the following Java code?",
            "code": "int value = 54;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "53",
            "b": "54",
            "c": "52",
            "d": "55",
            "correct": "d"
        },
        {
            "question": "175. Given the code snippet:",
            "code": "int num = 135;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "136",
            "b": "135",
            "c": "134",
            "d": "137",
            "correct": "b"
        },
        {
            "question": "176. What will be the value of `result` after executing the code below?",
            "code": "int result = 54;\nresult = result++ - --result + result-- - ++result;\n",
            "a": "53",
            "b": "52",
            "c": "51",
            "d": "55",
            "correct": "c"
        },
        {
            "question": "177. What is the output of the following Java code?",
            "code": "int x = 35;\nint y = 11;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
            "a": "23",
            "b": "22",
            "c": "21",
            "d": "24",
            "correct": "a"
        },
        {
            "question": "178. After executing the following code, what will be the value of `counter`?",
            "code": "int counter = 40;\ncounter = counter-- - --counter + ++counter - counter--;\n",
            "a": "39",
            "b": "40",
            "c": "41",
            "d": "38",
            "correct": "a"
        },
        {
            "question": "179. What will be the value of `value` after executing the following code?",
            "code": "int value = 60;\nvalue = value-- + --value - value++ + ++value;\n",
            "a": "59",
            "b": "60",
            "c": "58",
            "d": "61",
            "correct": "a"
        },
        {
            "question": "180. Given the code snippet:",
            "code": "int num = 145;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "146",
            "b": "145",
            "c": "144",
            "d": "147",
            "correct": "b"
        },
        {
            "question": "181. What will be the output of the following Java code?",
            "code": "int a = 60;\nint b = 18;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "42",
            "b": "41",
            "c": "40",
            "d": "43",
            "correct": "a"
        },
        {
            "question": "182. After the code is executed, what will be the value of `x`?",
            "code": "int x = 150;\nx = x-- - --x + ++x - x++;\n",
            "a": "149",
            "b": "150",
            "c": "148",
            "d": "151",
            "correct": "c"
        },
        {
            "question": "183. What is the output of the following Java code?",
            "code": "int value = 62;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "61",
            "b": "62",
            "c": "60",
            "d": "63",
            "correct": "a"
        },
        {
            "question": "184. Given the code snippet:",
            "code": "int num = 155;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "156",
            "b": "155",
            "c": "154",
            "d": "157",
            "correct": "b"
        },
        {
            "question": "185. What will be the value of `result` after executing the code below?",
            "code": "int result = 62;\nresult = result++ - --result + result-- - ++result;\n",
            "a": "61",
            "b": "60",
            "c": "59",
            "d": "63",
            "correct": "b"
        },
        {
            "question": "186. What is the output of the following Java code?",
            "code": "int x = 40;\nint y = 12;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
            "a": "28",
            "b": "27",
            "c": "26",
            "d": "29",
            "correct": "b"
        },
        {
            "question": "187. After executing the following code, what will be the value of `counter`?",
            "code": "int counter = 45;\ncounter = counter-- - --counter + ++counter - counter--;\n",
            "a": "44",
            "b": "45",
            "c": "46",
            "d": "43",
            "correct": "a"
        },
        {
            "question": "188. What will be the value of `value` after executing the following code?",
            "code": "int value = 65;\nvalue = value-- + --value - value++ + ++value;\n",
            "a": "64",
            "b": "65",
            "c": "63",
            "d": "66",
            "correct": "a"
        },
        {
            "question": "189. Given the code snippet:",
            "code": "int num = 165;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "166",
            "b": "165",
            "c": "164",
            "d": "167",
            "correct": "b"
        },
        {
            "question": "190. What is the output of the following Java code?",
            "code": "int a = 65;\nint b = 19;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "44",
            "b": "43",
            "c": "42",
            "d": "45",
            "correct": "b"
        },
        {
            "question": "191. After the code is executed, what will be the value of `x`?",
            "code": "int x = 170;\nx = x-- - --x + ++x - x++;\n",
            "a": "169",
            "b": "170",
            "c": "168",
            "d": "171",
            "correct": "c"
        },
        {
            "question": "192. What is the output of the following Java code?",
            "code": "int value = 67;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
            "a": "66",
            "b": "67",
            "c": "65",
            "d": "68",
            "correct": "b"
        },
        {
            "question": "193. Given the code snippet:",
            "code": "int num = 175;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "176",
            "b": "175",
            "c": "174",
            "d": "177",
            "correct": "b"
        },
        {
            "question": "194. What will be the value of `result` after executing the code below?",
            "code": "int result = 67;\nresult = result++ - --result + result-- - ++result;\n",
            "a": "66",
            "b": "65",
            "c": "64",
            "d": "68",
            "correct": "c"
        },
        {
            "question": "195. What is the output of the following Java code?",
            "code": "int x = 45;\nint y = 13;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
            "a": "34",
            "b": "33",
            "c": "32",
            "d": "35",
            "correct": "b"
        },
        {
            "question": "196. After executing the following code, what will be the value of `counter`?",
            "code": "int counter = 50;\ncounter = counter-- - --counter + ++counter - counter--;\n",
            "a": "49",
            "b": "50",
            "c": "51",
            "d": "48",
            "correct": "a"
        },
        {
            "question": "197. What will be the value of `value` after executing the following code?",
            "code": "int value = 70;\nvalue = value-- + --value - value++ + ++value;\n",
            "a": "69",
            "b": "70",
            "c": "68",
            "d": "71",
            "correct": "a"
        },
        {
            "question": "198. Given the code snippet:",
            "code": "int num = 185;\nnum = num++ + num-- - --num + ++num;\n",
            "a": "186",
            "b": "185",
            "c": "184",
            "d": "187",
            "correct": "b"
        },
        {
            "question": "199. What will be the output of the following Java code?",
            "code": "int a = 70;\nint b = 20;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
            "a": "49",
            "b": "48",
            "c": "47",
            "d": "50",
            "correct": "c"
        },
        {
            "question": "200. After the code is executed, what will be the value of `x`?",
            "code": "int x = 190;\nx = x-- - --x + ++x - x++;\n",
            "a": "189",
            "b": "190",
            "c": "188",
            "d": "191",
            "correct": "c"
        },
        
            {
                "question": "201. What is the output of the following Java code?",
                "code": "int value = 72;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                "a": "71",
                "b": "72",
                "c": "70",
                "d": "73",
                "correct": "a"
            },
            {
                "question": "202. Given the code snippet:",
                "code": "int num = 195;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "196",
                "b": "195",
                "c": "194",
                "d": "197",
                "correct": "b"
            },
            {
                "question": "203. What will be the value of `result` after executing the code below?",
                "code": "int result = 72;\nresult = result++ - --result + result-- - ++result;\n",
                "a": "71",
                "b": "70",
                "c": "69",
                "d": "73",
                "correct": "c"
            },
            {
                "question": "204. What is the output of the following Java code?",
                "code": "int x = 50;\nint y = 14;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
                "a": "38",
                "b": "37",
                "c": "36",
                "d": "39",
                "correct": "b"
            },
            {
                "question": "205. After executing the following code, what will be the value of `counter`?",
                "code": "int counter = 55;\ncounter = counter-- - --counter + ++counter - counter--;\n",
                "a": "54",
                "b": "55",
                "c": "56",
                "d": "53",
                "correct": "a"
            },
            {
                "question": "206. What will be the value of `value` after executing the following code?",
                "code": "int value = 75;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "74",
                "b": "75",
                "c": "73",
                "d": "76",
                "correct": "a"
            },
            {
                "question": "207. Given the code snippet:",
                "code": "int num = 205;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "206",
                "b": "205",
                "c": "204",
                "d": "207",
                "correct": "b"
            },
            {
                "question": "208. What will be the output of the following Java code?",
                "code": "int a = 75;\nint b = 21;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                "a": "52",
                "b": "51",
                "c": "50",
                "d": "53",
                "correct": "b"
            },
            {
                "question": "209. After the code is executed, what will be the value of `x`?",
                "code": "int x = 210;\nx = x-- - --x + ++x - x++;\n",
                "a": "209",
                "b": "210",
                "c": "208",
                "d": "211",
                "correct": "c"
            },
            {
                "question": "210. What is the output of the following Java code?",
                "code": "int value = 77;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                "a": "76",
                "b": "77",
                "c": "75",
                "d": "78",
                "correct": "b"
            },
            {
                "question": "211. Given the code snippet:",
                "code": "int num = 215;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "216",
                "b": "215",
                "c": "214",
                "d": "217",
                "correct": "b"
            },
            {
                "question": "212. What will be the value of `result` after executing the code below?",
                "code": "int result = 77;\nresult = result++ - --result + result-- - ++result;\n",
                "a": "76",
                "b": "75",
                "c": "74",
                "d": "78",
                "correct": "c"
            },
            {
                "question": "213. What is the output of the following Java code?",
                "code": "int x = 55;\nint y = 15;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
                "a": "42",
                "b": "41",
                "c": "40",
                "d": "43",
                "correct": "a"
            },
            {
                "question": "214. After executing the following code, what will be the value of `counter`?",
                "code": "int counter = 60;\ncounter = counter-- - --counter + ++counter - counter--;\n",
                "a": "59",
                "b": "60",
                "c": "61",
                "d": "58",
                "correct": "a"
            },
            {
                "question": "215. What will be the value of `value` after executing the following code?",
                "code": "int value = 80;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "79",
                "b": "80",
                "c": "78",
                "d": "81",
                "correct": "a"
            },
            {
                "question": "216. Given the code snippet:",
                "code": "int num = 225;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "226",
                "b": "225",
                "c": "224",
                "d": "227",
                "correct": "b"
            },
            {
                "question": "217. What will be the output of the following Java code?",
                "code": "int a = 80;\nint b = 22;\nint result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                "a": "55",
                "b": "54",
                "c": "53",
                "d": "56",
                "correct": "c"
            },
            {
                "question": "218. After executing the following code, what will be the value of `x`?",
                "code": "int x = 230;\nx = x-- - --x + ++x - x++;\n",
                "a": "229",
                "b": "230",
                "c": "228",
                "d": "231",
                "correct": "c"
            },
            {
                "question": "219. What is the output of the following Java code?",
                "code": "int value = 82;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                "a": "81",
                "b": "82",
                "c": "80",
                "d": "83",
                "correct": "b"
            },
            {
                "question": "220. Given the code snippet:",
                "code": "int num = 235;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "236",
                "b": "235",
                "c": "234",
                "d": "237",
                "correct": "b"
            },
            {
                "question": "221. What will be the value of `result` after executing the code below?",
                "code": "int result = 82;\nresult = result++ - --result + result-- - ++result;\n",
                "a": "81",
                "b": "80",
                "c": "79",
                "d": "83",
                "correct": "c"
            },
            {
                "question": "222. What is the output of the following Java code?",
                "code": "int x = 60;\nint y = 16;\nint z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
                "a": "44",
                "b": "43",
                "c": "42",
                "d": "45",
                "correct": "b"
            },
            {
                "question": "223. After executing the following code, what will be the value of `counter`?",
                "code": "int counter = 65;\ncounter = counter-- - --counter + ++counter - counter--;\n",
                "a": "64",
                "b": "65",
                "c": "66",
                "d": "63",
                "correct": "a"
            },
            {
                "question": "224. What will be the value of `value` after executing the following code?",
                "code": "int value = 85;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "84",
                "b": "85",
                "c": "83",
                "d": "86",
                "correct": "a"
            },
            {
                "question": "225. Given the code snippet:",
                "code": "int num = 245;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "246",
                "b": "245",
                "c": "244",
                "d": "247",
                "correct": "b"
            },
            {
                "question": "226. What will be the output of the following Java code?",
                "code": "byte num = 60;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "61",
                "b": "60",
                "c": "59",
                "d": "62",
                "correct": "b"
            },
            {
                "question": "227. What will be the value of `result` after executing the code below?",
                "code": "short result = 60;\nresult = (short)(result++ - --result + result-- - ++result);\n",
                "a": "59",
                "b": "58",
                "c": "57",
                "d": "61",
                "correct": "c"
            },
            {
                "question": "228. What is the output of the following Java code?",
                "code": "byte x = 20;\nbyte y = 6;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                "a": "14",
                "b": "13",
                "c": "12",
                "d": "15",
                "correct": "a"
            },
            {
                "question": "229. After executing the following code, what will be the value of `counter`?",
                "code": "short counter = 25;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                "a": "24",
                "b": "25",
                "c": "26",
                "d": "23",
                "correct": "a"
            },
            {
                "question": "230. What will be the value of `value` after executing the code below?",
                "code": "long value = 70;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "69",
                "b": "70",
                "c": "68",
                "d": "71",
                "correct": "a"
            },
            {
                "question": "231. Given the code snippet:",
                "code": "float num = 22.5f;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "23.5",
                "b": "22.5",
                "c": "21.5",
                "d": "24.5",
                "correct": "b"
            },
            {
                "question": "232. What is the output of the following Java code?",
                "code": "double a = 30.5;\ndouble b = 10.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                "a": "20.5",
                "b": "19.5",
                "c": "18.5",
                "d": "21.5",
                "correct": "b"
            },
            {
                "question": "233. After the code is executed, what will be the value of `x`?",
                "code": "float x = 40.7f;\nx = x-- - --x + ++x - x++;\n",
                "a": "39.7",
                "b": "40.7",
                "c": "38.7",
                "d": "41.7",
                "correct": "c"
            },
            {
                "question": "234. What is the output of the following Java code?",
                "code": "long value = 55;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                "a": "54",
                "b": "55",
                "c": "53",
                "d": "56",
                "correct": "b"
            },
            {
                "question": "235. Given the code snippet:",
                "code": "float num = 18.5f;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "19.5",
                "b": "18.5",
                "c": "17.5",
                "d": "20.5",
                "correct": "b"
            },
            {
                "question": "236. What will be the value of `result` after executing the code below?",
                "code": "double result = 12.5;\nresult = result++ - --result + result-- - ++result;\n",
                "a": "11.5",
                "b": "10.5",
                "c": "9.5",
                "d": "13.5",
                "correct": "c"
            },
            {
                "question": "237. What is the output of the following Java code?",
                "code": "byte x = 10;\nbyte y = 5;\nbyte z = x-- - --y + y++ - ++x;\nSystem.out.println(z);\n",
                "a": "6",
                "b": "5",
                "c": "4",
                "d": "7",
                "correct": "c"
            },
            {
                "question": "238. After executing the following code, what will be the value of `counter`?",
                "code": "short counter = 15;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                "a": "14",
                "b": "15",
                "c": "16",
                "d": "13",
                "correct": "a"
            },
            {
                "question": "239. What will be the value of `value` after executing the code below?",
                "code": "long value = 50;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "49",
                "b": "50",
                "c": "48",
                "d": "51",
                "correct": "a"
            },
            {
                "question": "240. Given the code snippet:",
                "code": "float num = 14.2f;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "15.2",
                "b": "14.2",
                "c": "13.2",
                "d": "16.2",
                "correct": "b"
            },
            {
                "question": "241. What will be the output of the following Java code?",
                "code": "double a = 30.5;\ndouble b = 10.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                "a": "20.5",
                "b": "19.5",
                "c": "18.5",
                "d": "21.5",
                "correct": "b"
            },
            {
                "question": "242. After the code is executed, what will be the value of `x`?",
                "code": "float x = 40.7f;\nx = x-- - --x + ++x - x++;\n",
                "a": "39.7",
                "b": "40.7",
                "c": "38.7",
                "d": "41.7",
                "correct": "c"
            },
            {
                "question": "243. What is the output of the following Java code?",
                "code": "long value = 55;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                "a": "54",
                "b": "55",
                "c": "53",
                "d": "56",
                "correct": "b"
            },
            {
                "question": "244. Given the code snippet:",
                "code": "byte num = 60;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "61",
                "b": "60",
                "c": "59",
                "d": "62",
                "correct": "b"
            },
            {
                "question": "245. What will be the value of `result` after executing the code below?",
                "code": "short result = 60;\nresult = (short)(result++ - --result + result-- - ++result);\n",
                "a": "59",
                "b": "58",
                "c": "57",
                "d": "61",
                "correct": "c"
            },
            {
                "question": "246. What is the output of the following Java code?",
                "code": "byte x = 20;\nbyte y = 6;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                "a": "14",
                "b": "13",
                "c": "12",
                "d": "15",
                "correct": "a"
            },
            {
                "question": "247. After executing the following code, what will be the value of `counter`?",
                "code": "short counter = 25;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                "a": "24",
                "b": "25",
                "c": "26",
                "d": "23",
                "correct": "a"
            },
            {
                "question": "248. What will be the value of `value` after executing the code below?",
                "code": "long value = 70;\nvalue = value-- + --value - value++ + ++value;\n",
                "a": "69",
                "b": "70",
                "c": "68",
                "d": "71",
                "correct": "a"
            },
            {
                "question": "249. Given the code snippet:",
                "code": "float num = 22.5f;\nnum = num++ + num-- - --num + ++num;\n",
                "a": "23.5",
                "b": "22.5",
                "c": "21.5",
                "d": "24.5",
                "correct": "b"
            },
            {
                "question": "250. What will be the output of the following Java code?",
                "code": "double a = 70.5;\ndouble b = 24.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                "a": "46.5",
                "b": "45.5",
                "c": "44.5",
                "d": "47.5",
                "correct": "c"
            },
            
                {
                    "question": "251. After the code is executed, what will be the value of `x`?",
                    "code": "float x = 80.7f;\nx = x-- - --x + ++x - x++;\n",
                    "a": "79.7",
                    "b": "80.7",
                    "c": "78.7",
                    "d": "81.7",
                    "correct": "c"
                },
                {
                    "question": "252. What is the output of the following Java code?",
                    "code": "long value = 85;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                    "a": "84",
                    "b": "85",
                    "c": "83",
                    "d": "86",
                    "correct": "b"
                },
                {
                    "question": "253. Given the code snippet:",
                    "code": "byte num = 90;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                    "a": "91",
                    "b": "90",
                    "c": "89",
                    "d": "92",
                    "correct": "b"
                },
                {
                    "question": "254. What will be the value of `result` after executing the code below?",
                    "code": "double result = 90.5;\nresult = result++ - --result + result-- - ++result;\n",
                    "a": "89.5",
                    "b": "88.5",
                    "c": "87.5",
                    "d": "91.5",
                    "correct": "c"
                },
                {
                    "question": "255. What is the output of the following Java code?",
                    "code": "byte x = 30;\nbyte y = 7;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                    "a": "21",
                    "b": "20",
                    "c": "19",
                    "d": "22",
                    "correct": "b"
                },
                {
                    "question": "256. After executing the following code, what will be the value of `counter`?",
                    "code": "short counter = 35;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                    "a": "34",
                    "b": "35",
                    "c": "36",
                    "d": "33",
                    "correct": "a"
                },
                {
                    "question": "257. What will be the value of `value` after executing the code below?",
                    "code": "long value = 90;\nvalue = value-- + --value - value++ + ++value;\n",
                    "a": "89",
                    "b": "90",
                    "c": "88",
                    "d": "91",
                    "correct": "a"
                },
                {
                    "question": "258. Given the code snippet:",
                    "code": "float num = 27.5f;\nnum = num++ + num-- - --num + ++num;\n",
                    "a": "28.5",
                    "b": "27.5",
                    "c": "26.5",
                    "d": "29.5",
                    "correct": "b"
                },
                {
                    "question": "259. What will be the output of the following Java code?",
                    "code": "double a = 90.5;\ndouble b = 28.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                    "a": "62.5",
                    "b": "61.5",
                    "c": "60.5",
                    "d": "63.5",
                    "correct": "b"
                },
                {
                    "question": "260. After the code is executed, what will be the value of `x`?",
                    "code": "float x = 100.7f;\nx = x-- - --x + ++x - x++;\n",
                    "a": "99.7",
                    "b": "100.7",
                    "c": "98.7",
                    "d": "101.7",
                    "correct": "c"
                },
                {
                    "question": "261. What is the output of the following Java code?",
                    "code": "long value = 95;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                    "a": "94",
                    "b": "95",
                    "c": "93",
                    "d": "96",
                    "correct": "b"
                },
                {
                    "question": "262. Given the code snippet:",
                    "code": "byte num = 100;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                    "a": "101",
                    "b": "100",
                    "c": "99",
                    "d": "102",
                    "correct": "b"
                },
                {
                    "question": "263. What will be the value of `result` after executing the code below?",
                    "code": "short result = 100;\nresult = (short)(result++ - --result + result-- - ++result);\n",
                    "a": "99",
                    "b": "98",
                    "c": "97",
                    "d": "101",
                    "correct": "c"
                },
                {
                    "question": "264. What is the output of the following Java code?",
                    "code": "byte x = 40;\nbyte y = 8;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                    "a": "30",
                    "b": "29",
                    "c": "28",
                    "d": "31",
                    "correct": "b"
                },
                {
                    "question": "265. After executing the following code, what will be the value of `counter`?",
                    "code": "short counter = 45;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                    "a": "44",
                    "b": "45",
                    "c": "46",
                    "d": "43",
                    "correct": "a"
                },
                {
                    "question": "266. What will be the value of `value` after executing the code below?",
                    "code": "long value = 100;\nvalue = value-- + --value - value++ + ++value;\n",
                    "a": "99",
                    "b": "100",
                    "c": "98",
                    "d": "101",
                    "correct": "a"
                },
                {
                    "question": "267. Given the code snippet:",
                    "code": "float num = 32.5f;\nnum = num++ + num-- - --num + ++num;\n",
                    "a": "33.5",
                    "b": "32.5",
                    "c": "31.5",
                    "d": "34.5",
                    "correct": "b"
                },
                {
                    "question": "268. What will be the output of the following Java code?",
                    "code": "double a = 100.5;\ndouble b = 30.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                    "a": "70.5",
                    "b": "69.5",
                    "c": "68.5",
                    "d": "71.5",
                    "correct": "b"
                },
                {
                    "question": "269. After the code is executed, what will be the value of `x`?",
                    "code": "float x = 110.7f;\nx = x-- - --x + ++x - x++;\n",
                    "a": "109.7",
                    "b": "110.7",
                    "c": "108.7",
                    "d": "111.7",
                    "correct": "c"
                },
                {
                    "question": "270. What is the output of the following Java code?",
                    "code": "long value = 105;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                    "a": "104",
                    "b": "105",
                    "c": "103",
                    "d": "106",
                    "correct": "b"
                },
                {
                    "question": "271. Given the code snippet:",
                    "code": "byte num = 110;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                    "a": "111",
                    "b": "110",
                    "c": "109",
                    "d": "112",
                    "correct": "b"
                },
                {
                    "question": "272. What will be the value of `result` after executing the code below?",
                    "code": "double result = 110.5;\nresult = result++ - --result + result-- - ++result;\n",
                    "a": "109.5",
                    "b": "108.5",
                    "c": "107.5",
                    "d": "110.5",
                    "correct": "a"
                },
                {
                    "question": "273. What is the output of the following Java code?",
                    "code": "byte x = 50;\nbyte y = 10;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                    "a": "40",
                    "b": "39",
                    "c": "38",
                    "d": "41",
                    "correct": "b"
                },
                {
                    "question": "274. After executing the following code, what will be the value of `counter`?",
                    "code": "short counter = 55;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                    "a": "54",
                    "b": "55",
                    "c": "56",
                    "d": "53",
                    "correct": "a"
                },
                {
                    "question": "275. What will be the value of `value` after executing the code below?",
                    "code": "long value = 110;\nvalue = value-- + --value - value++ + ++value;\n",
                    "a": "109",
                    "b": "110",
                    "c": "108",
                    "d": "111",
                    "correct": "a"
                },
                {
                            "question": "276. Given the code snippet:",
                            "code": "float num = 37.5f;\nnum = num++ + num-- - --num + ++num;\n",
                            "a": "38.5",
                            "b": "37.5",
                            "c": "36.5",
                            "d": "39.5",
                            "correct": "b"
                        },
                        {
                            "question": "277. What will be the output of the following Java code?",
                            "code": "double a = 110.5;\ndouble b = 32.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                            "a": "77.5",
                            "b": "76.5",
                            "c": "75.5",
                            "d": "78.5",
                            "correct": "b"
                        },
                        {
                            "question": "278. After the code is executed, what will be the value of `x`?",
                            "code": "float x = 120.7f;\nx = x-- - --x + ++x - x++;\n",
                            "a": "119.7",
                            "b": "120.7",
                            "c": "118.7",
                            "d": "121.7",
                            "correct": "c"
                        },
                        {
                            "question": "279. What is the output of the following Java code?",
                            "code": "long value = 115;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                            "a": "114",
                            "b": "115",
                            "c": "113",
                            "d": "116",
                            "correct": "b"
                        },
                        {
                            "question": "280. Given the code snippet:",
                            "code": "byte num = 120;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                            "a": "121",
                            "b": "120",
                            "c": "119",
                            "d": "122",
                            "correct": "b"
                        },
                        {
                            "question": "281. What will be the value of `result` after executing the code below?",
                            "code": "double result = 120.5;\nresult = result++ - --result + result-- - ++result;\n",
                            "a": "119.5",
                            "b": "118.5",
                            "c": "117.5",
                            "d": "121.5",
                            "correct": "c"
                        },
                        {
                            "question": "282. What is the output of the following Java code?",
                            "code": "byte x = 60;\nbyte y = 10;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                            "a": "49",
                            "b": "48",
                            "c": "47",
                            "d": "50",
                            "correct": "b"
                        },
                        {
                            "question": "283. After executing the following code, what will be the value of `counter`?",
                            "code": "short counter = 65;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                            "a": "64",
                            "b": "65",
                            "c": "66",
                            "d": "63",
                            "correct": "a"
                        },
                        {
                            "question": "284. What will be the value of `value` after executing the code below?",
                            "code": "long value = 120;\nvalue = value-- + --value - value++ + ++value;\n",
                            "a": "119",
                            "b": "120",
                            "c": "118",
                            "d": "121",
                            "correct": "a"
                        },
                        {
                            "question": "285. Given the code snippet:",
                            "code": "float num = 42.5f;\nnum = num++ + num-- - --num + ++num;\n",
                            "a": "43.5",
                            "b": "42.5",
                            "c": "41.5",
                            "d": "44.5",
                            "correct": "b"
                        },
                        {
                            "question": "286. What will be the output of the following Java code?",
                            "code": "double a = 120.5;\ndouble b = 36.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                            "a": "83.5",
                            "b": "82.5",
                            "c": "81.5",
                            "d": "84.5",
                            "correct": "b"
                        },
                        {
                            "question": "287. After the code is executed, what will be the value of `x`?",
                            "code": "float x = 130.7f;\nx = x-- - --x + ++x - x++;\n",
                            "a": "129.7",
                            "b": "130.7",
                            "c": "128.7",
                            "d": "131.7",
                            "correct": "c"
                        },
                        {
                            "question": "288. What is the output of the following Java code?",
                            "code": "long value = 125;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                            "a": "124",
                            "b": "125",
                            "c": "123",
                            "d": "126",
                            "correct": "b"
                        },
                        {
                            "question": "289. Given the code snippet:",
                            "code": "byte num = 130;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                            "a": "131",
                            "b": "130",
                            "c": "129",
                            "d": "132",
                            "correct": "b"
                        },
                        {
                            "question": "290. What will be the value of `result` after executing the code below?",
                            "code": "double result = 130.5;\nresult = result++ - --result + result-- - ++result;\n",
                            "a": "129.5",
                            "b": "128.5",
                            "c": "127.5",
                            "d": "131.5",
                            "correct": "c"
                        },
                        {
                            "question": "291. What is the output of the following Java code?",
                            "code": "byte x = 70;\nbyte y = 11;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                            "a": "58",
                            "b": "57",
                            "c": "56",
                            "d": "59",
                            "correct": "b"
                        },
                        {
                            "question": "292. After executing the following code, what will be the value of `counter`?",
                            "code": "short counter = 75;\ncounter = (short)(counter-- - --counter + ++counter - counter--);\n",
                            "a": "74",
                            "b": "75",
                            "c": "76",
                            "d": "73",
                            "correct": "a"
                        },
                        {
                            "question": "293. What will be the value of `value` after executing the code below?",
                            "code": "long value = 130;\nvalue = value-- + --value - value++ + ++value;\n",
                            "a": "129",
                            "b": "130",
                            "c": "128",
                            "d": "131",
                            "correct": "a"
                        },
                        {
                            "question": "294. Given the code snippet:",
                            "code": "float num = 47.5f;\nnum = num++ + num-- - --num + ++num;\n",
                            "a": "48.5",
                            "b": "47.5",
                            "c": "46.5",
                            "d": "49.5",
                            "correct": "b"
                        },
                        {
                            "question": "295. What will be the output of the following Java code?",
                            "code": "double a = 130.5;\ndouble b = 40.5;\ndouble result = a++ - ++b - b-- + --a;\nSystem.out.println(result);\n",
                            "a": "89.5",
                            "b": "88.5",
                            "c": "87.5",
                            "d": "90.5",
                            "correct": "b"
                        },
                        {
                            "question": "296. After the code is executed, what will be the value of `x`?",
                            "code": "float x = 140.7f;\nx = x-- - --x + ++x - x++;\n",
                            "a": "139.7",
                            "b": "140.7",
                            "c": "138.7",
                            "d": "141.7",
                            "correct": "c"
                        },
                        {
                            "question": "297. What is the output of the following Java code?",
                            "code": "long value = 135;\nvalue = value-- + --value - value++ + ++value;\nSystem.out.println(value);\n",
                            "a": "134",
                            "b": "135",
                            "c": "133",
                            "d": "136",
                            "correct": "b"
                        },
                        {
                            "question": "298. Given the code snippet:",
                            "code": "byte num = 140;\nnum = (byte)(num++ + num-- - --num + ++num);\n",
                            "a": "141",
                            "b": "140",
                            "c": "139",
                            "d": "142",
                            "correct": "b"
                        },
                        {
                            "question": "299. What will be the value of `result` after executing the code below?",
                            "code": "double result = 140.5;\nresult = result++ - --result + result-- - ++result;\n",
                            "a": "139.5",
                            "b": "138.5",
                            "c": "137.5",
                            "d": "141.5",
                            "correct": "c"
                        },
                        {
                            "question": "300. What is the output of the following Java code?",
                            "code": "byte x = 80;\nbyte y = 12;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                            "a": "67",
                            "b": "66",
                            "c": "65",
                            "d": "68",
                            "correct": "b"
                        },
                        {
                            "question": "300. What is the output of the following Java code?",
                            "code": "byte x = 80;\nbyte y = 12;\nbyte z = (byte)(x-- - --y + y++ - ++x);\nSystem.out.println(z);\n",
                            "a": "68",
                            "b": "67",
                            "c": "66",
                            "d": "69",
                            "correct": "b"
                        },
                        {
                            "question": "351. What is the output of the following Java code?",
                            "code": "int a = 260;\nint b = 10;\nint result = a-- - ++b + b-- - --a;\nSystem.out.println(result);\n",
                            "a": "249",
                            "b": "248",
                            "c": "247",
                            "d": "250",
                            "correct": "b"
                        },
                        {
                            "question": "352. After the code is executed, what will be the value of `counter`?",
                            "code": "int counter = 265;\ncounter = counter-- - ++counter - counter++ - --counter;\n",
                            "a": "265",
                            "b": "264",
                            "c": "266",
                            "d": "263",
                            "correct": "b"
                        },
                        {
                            "question": "353. What will be the value of `value` after executing the code below?",
                            "code": "int value = 270;\nvalue = value-- - value++ + ++value - --value;\n",
                            "a": "270",
                            "b": "269",
                            "c": "268",
                            "d": "271",
                            "correct": "b"
                        },
                        {
                            "question": "354. Given the code snippet:",
                            "code": "int num = 275;\nnum = num-- - num++ + num-- - num++;\n",
                            "a": "275",
                            "b": "274",
                            "c": "273",
                            "d": "276",
                            "correct": "a"
                        },
                        {
                            "question": "355. What will be the value of `result` after executing the code below?",
                            "code": "int result = 280;\nresult = result-- - result++ + ++result - --result;\n",
                            "a": "280",
                            "b": "279",
                            "c": "278",
                            "d": "281",
                            "correct": "c"
                        },
                        {
                            "question": "356. What is the output of the following Java code?",
                            "code": "int x = 285;\nint y = 5;\nint z = x-- + --y - y++ + ++x;\nSystem.out.println(z);\n",
                            "a": "286",
                            "b": "285",
                            "c": "284",
                            "d": "287",
                            "correct": "a"
                        },
                        {
                            "question": "357. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 290;\ncounter = counter-- + --counter - counter++ - ++counter;\n",
                            "a": "290",
                            "b": "289",
                            "c": "291",
                            "d": "288",
                            "correct": "b"
                        },
                        {
                            "question": "358. What will be the value of `value` after executing the code below?",
                            "code": "int value = 295;\nvalue = value-- - ++value - value++ - --value;\n",
                            "a": "295",
                            "b": "294",
                            "c": "293",
                            "d": "296",
                            "correct": "b"
                        },
                        {
                            "question": "359. Given the code snippet:",
                            "code": "int num = 300;\nnum = num-- - num++ + num-- - num++;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "301",
                            "correct": "a"
                        },
                        {
                            "question": "360. What is the output of the following Java code?",
                            "code": "int x = 5;\nint y = 10;\nint z = ++x * y-- - x++ / --y;\nSystem.out.println(z);\n",
                            "a": "46",
                            "b": "48",
                            "c": "50",
                            "d": "52",
                            "correct": "b"
                        },
                        {
                            "question": "361. After executing the following code, what will be the value of `result`?",
                            "code": "int result = 15;\nresult = ++result - result-- + --result - result++;\n",
                            "a": "15",
                            "b": "14",
                            "c": "16",
                            "d": "13",
                            "correct": "a"
                        },
                        {
                            "question": "362. What will be the value of `num` after executing the following code?",
                            "code": "int num = 20;\nnum = num++ - ++num + num-- - --num;\n",
                            "a": "20",
                            "b": "21",
                            "c": "22",
                            "d": "23",
                            "correct": "b"
                        },
                        {
                            "question": "363. What is the result of the following Java code?",
                            "code": "int a = 7;\nint b = 3;\nint result = a++ * --b - ++a / b--;\nSystem.out.println(result);\n",
                            "a": "18",
                            "b": "19",
                            "c": "20",
                            "d": "21",
                            "correct": "a"
                        },
                        {
                            "question": "364. Given the code snippet, what will be the final value of `x`?",
                            "code": "int x = 100;\nx = x++ - --x + x++ - ++x;\n",
                            "a": "100",
                            "b": "101",
                            "c": "102",
                            "d": "103",
                            "correct": "b"
                        },
                        {
                            "question": "365. What will be the output of the following Java code?",
                            "code": "int x = 50;\nint y = 25;\nint z = --x + y++ - ++x - y--;\nSystem.out.println(z);\n",
                            "a": "50",
                            "b": "51",
                            "c": "52",
                            "d": "53",
                            "correct": "a"
                        },
                        {
                            "question": "366. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 40;\ncounter = --counter + counter++ - ++counter - counter--;\n",
                            "a": "40",
                            "b": "41",
                            "c": "42",
                            "d": "43",
                            "correct": "a"
                        },
                        {
                            "question": "367. What will be the final value of `value` after the following code executes?",
                            "code": "int value = 35;\nvalue = value++ - --value + value-- - ++value;\n",
                            "a": "34",
                            "b": "35",
                            "c": "36",
                            "d": "37",
                            "correct": "b"
                        },
                        {
                            "question": "368. What is the output of the following Java code?",
                            "code": "int a = 90;\nint b = 5;\nint result = --a - b++ + ++a - --b;\nSystem.out.println(result);\n",
                            "a": "91",
                            "b": "92",
                            "c": "93",
                            "d": "94",
                            "correct": "b"
                        },
                        {
                            "question": "369. After executing the following code, what will be the value of `num`?",
                            "code": "int num = 150;\nnum = num-- - ++num + num++ - --num;\n",
                            "a": "150",
                            "b": "151",
                            "c": "152",
                            "d": "153",
                            "correct": "a"
                        },
                        {
                            "question": "370. What will be the result of the following Java code?",
                            "code": "int x = 25;\nint y = 50;\nint z = y-- - x++ + --x - ++y;\nSystem.out.println(z);\n",
                            "a": "50",
                            "b": "51",
                            "c": "52",
                            "d": "53",
                            "correct": "a"
                        },
                        {
                            "question": "371. What will be the output of the following Java code?",
                            "code": "int a = 10;\nint b = 20;\nint result = ++a * b-- - a++ / --b;\nSystem.out.println(result);\n",
                            "a": "220",
                            "b": "230",
                            "c": "240",
                            "d": "250",
                            "correct": "b"
                        },
                        {
                            "question": "372. After executing the following code, what will be the value of `result`?",
                            "code": "int result = 50;\nresult = result-- - ++result + result-- - --result;\n",
                            "a": "49",
                            "b": "50",
                            "c": "51",
                            "d": "52",
                            "correct": "a"
                        },
                        {
                            "question": "373. What will be the value of `num` after executing the following code?",
                            "code": "int num = 60;\nnum = ++num - num++ + num-- - --num;\n",
                            "a": "60",
                            "b": "61",
                            "c": "62",
                            "d": "63",
                            "correct": "a"
                        },
                        {
                            "question": "374. What is the output of the following Java code?",
                            "code": "int x = 8;\nint y = 3;\nint result = x++ * --y - ++x / y--;\nSystem.out.println(result);\n",
                            "a": "22",
                            "b": "24",
                            "c": "26",
                            "d": "28",
                            "correct": "b"
                        },
                        {
                            "question": "375. Given the following code, what will be the final value of `value`?",
                            "code": "int value = 45;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "44",
                            "b": "45",
                            "c": "46",
                            "d": "47",
                            "correct": "a"
                        },
                        {
                            "question": "376. What will be the output of this Java code?",
                            "code": "int a = 100;\nint b = 50;\nint result = --a - b++ + ++a - --b;\nSystem.out.println(result);\n",
                            "a": "100",
                            "b": "101",
                            "c": "102",
                            "d": "103",
                            "correct": "b"
                        },
                        {
                            "question": "377. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 30;\ncounter = ++counter - counter++ + --counter - counter--;\n",
                            "a": "30",
                            "b": "31",
                            "c": "32",
                            "d": "33",
                            "correct": "a"
                        },
                        {
                            "question": "378. What will be the final value of `num` after the code executes?",
                            "code": "int num = 75;\nnum = num++ - --num + num++ - ++num;\n",
                            "a": "75",
                            "b": "76",
                            "c": "77",
                            "d": "78",
                            "correct": "a"
                        },
                        {
                            "question": "379. What is the result of the following Java code?",
                            "code": "int x = 120;\nint y = 15;\nint z = ++x - y++ + x-- - --y;\nSystem.out.println(z);\n",
                            "a": "120",
                            "b": "121",
                            "c": "122",
                            "d": "123",
                            "correct": "a"
                        },
                        {
                            "question": "380. After the following code executes, what will be the value of `result`?",
                            "code": "int result = 90;\nresult = result-- - ++result + result-- - ++result;\n",
                            "a": "90",
                            "b": "91",
                            "c": "92",
                            "d": "93",
                            "correct": "a"
                        },
                        {
                            "question": "381. What will be the output of the following Java code?",
                            "code": "int a = 15;\nint b = 25;\nint result = ++a - b-- + ++b - --a;\nSystem.out.println(result);\n",
                            "a": "0",
                            "b": "1",
                            "c": "2",
                            "d": "3",
                            "correct": "a"
                        },
                        {
                            "question": "382. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 50;\nvalue = value++ - --value + ++value - value--;\n",
                            "a": "50",
                            "b": "51",
                            "c": "52",
                            "d": "53",
                            "correct": "a"
                        },
                        {
                            "question": "383. What will be the final value of `num` after executing this code?",
                            "code": "int num = 85;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "84",
                            "b": "85",
                            "c": "86",
                            "d": "87",
                            "correct": "a"
                        },
                        {
                            "question": "384. What is the result of the following Java code?",
                            "code": "int x = 100;\nint y = 50;\nint z = x-- + --y - ++x - y++;\nSystem.out.println(z);\n",
                            "a": "100",
                            "b": "101",
                            "c": "102",
                            "d": "103",
                            "correct": "a"
                        },
                        {
                            "question": "385. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 200;\ncounter = --counter - counter++ + ++counter - counter--;\n",
                            "a": "200",
                            "b": "201",
                            "c": "202",
                            "d": "203",
                            "correct": "a"
                        },
                        {
                            "question": "386. What will be the final value of `result` after this code executes?",
                            "code": "int result = 120;\nresult = result++ - --result + ++result - result--;\n",
                            "a": "120",
                            "b": "121",
                            "c": "122",
                            "d": "123",
                            "correct": "a"
                        },
                        {
                            "question": "387. What is the output of the following Java code?",
                            "code": "int a = 60;\nint b = 30;\nint result = a-- - ++b + --a - b++;\nSystem.out.println(result);\n",
                            "a": "60",
                            "b": "61",
                            "c": "62",
                            "d": "63",
                            "correct": "a"
                        },
                        {
                            "question": "388. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 90;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "90",
                            "b": "91",
                            "c": "92",
                            "d": "93",
                            "correct": "a"
                        },
                        {
                            "question": "389. What will be the final value of `num` after executing this code?",
                            "code": "int num = 50;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "49",
                            "b": "50",
                            "c": "51",
                            "d": "52",
                            "correct": "a"
                        },
                        {
                            "question": "390. What is the result of the following Java code?",
                            "code": "int x = 75;\nint y = 25;\nint z = x++ - --y + ++x - y--;\nSystem.out.println(z);\n",
                            "a": "75",
                            "b": "76",
                            "c": "77",
                            "d": "78",
                            "correct": "a"
                        },
                        {
                            "question": "391. What will be the output of the following Java code?",
                            "code": "int a = 45;\nint b = 30;\nint result = a++ - --b + ++a - b--;\nSystem.out.println(result);\n",
                            "a": "46",
                            "b": "47",
                            "c": "48",
                            "d": "49",
                            "correct": "b"
                        },
                        {
                            "question": "392. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 80;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "80",
                            "b": "81",
                            "c": "82",
                            "d": "83",
                            "correct": "a"
                        },
                        {
                            "question": "393. What will be the final value of `num` after executing this code?",
                            "code": "int num = 40;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "39",
                            "b": "40",
                            "c": "41",
                            "d": "42",
                            "correct": "a"
                        },
                        {
                            "question": "394. What is the result of the following Java code?",
                            "code": "int x = 55;\nint y = 10;\nint z = x-- + --y - ++x - y++;\nSystem.out.println(z);\n",
                            "a": "54",
                            "b": "55",
                            "c": "56",
                            "d": "57",
                            "correct": "a"
                        },
                        {
                            "question": "395. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 95;\ncounter = counter-- - ++counter + --counter - counter++;\n",
                            "a": "95",
                            "b": "96",
                            "c": "97",
                            "d": "98",
                            "correct": "a"
                        },
                        {
                            "question": "396. What will be the final value of `result` after this code executes?",
                            "code": "int result = 110;\nresult = ++result - result-- + --result - result++;\n",
                            "a": "110",
                            "b": "111",
                            "c": "112",
                            "d": "113",
                            "correct": "a"
                        },
                        {
                            "question": "397. What is the output of the following Java code?",
                            "code": "int a = 65;\nint b = 15;\nint result = a++ - --b + ++a - b--;\nSystem.out.println(result);\n",
                            "a": "65",
                            "b": "66",
                            "c": "67",
                            "d": "68",
                            "correct": "b"
                        },
                        {
                            "question": "398. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 120;\nvalue = ++value - value-- + --value - value++;\n",
                            "a": "119",
                            "b": "120",
                            "c": "121",
                            "d": "122",
                            "correct": "a"
                        },
                        {
                            "question": "399. What will be the final value of `num` after executing this code?",
                            "code": "int num = 30;\nnum = --num - num++ + ++num - num--;\n",
                            "a": "29",
                            "b": "30",
                            "c": "31",
                            "d": "32",
                            "correct": "a"
                        },
                        {
                            "question": "400. What is the result of the following Java code?",
                            "code": "int x = 85;\nint y = 5;\nint z = x-- - --y + ++x - y++;\nSystem.out.println(z);\n",
                            "a": "85",
                            "b": "86",
                            "c": "87",
                            "d": "88",
                            "correct": "a"
                        },
                        {
                            "question": "401. What will be the output of the following Java code?",
                            "code": "int a = 75;\nint b = 25;\nint result = --a - b++ + ++a - --b;\nSystem.out.println(result);\n",
                            "a": "74",
                            "b": "75",
                            "c": "76",
                            "d": "77",
                            "correct": "a"
                        },
                        {
                            "question": "402. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 150;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "403. What is the final value of `num` after executing this code?",
                            "code": "int num = 100;\nnum = num++ - ++num - --num + num++;\n",
                            "a": "100",
                            "b": "99",
                            "c": "98",
                            "d": "97",
                            "correct": "b"
                        },
                        {
                            "question": "404. What will be the output of the following Java code?",
                            "code": "int x = 125;\nint y = 10;\nint z = ++x - y-- + x++ - --y;\nSystem.out.println(z);\n",
                            "a": "124",
                            "b": "125",
                            "c": "126",
                            "d": "127",
                            "correct": "c"
                        },
                        {
                            "question": "405. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 200;\ncounter = counter-- - ++counter + --counter - counter++;\n",
                            "a": "200",
                            "b": "199",
                            "c": "198",
                            "d": "197",
                            "correct": "a"
                        },
                        {
                            "question": "406. What is the result of the following Java code?",
                            "code": "int result = 90;\nresult = --result - result++ + ++result - result--;\n",
                            "a": "90",
                            "b": "89",
                            "c": "88",
                            "d": "87",
                            "correct": "a"
                        },
                        {
                            "question": "407. What will be the final value of `num` after executing this code?",
                            "code": "int num = 60;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "60",
                            "b": "59",
                            "c": "58",
                            "d": "57",
                            "correct": "b"
                        },
                        {
                            "question": "408. What is the output of the following Java code?",
                            "code": "int a = 95;\nint b = 15;\nint result = a-- - --b + ++a - b++;\nSystem.out.println(result);\n",
                            "a": "95",
                            "b": "96",
                            "c": "97",
                            "d": "98",
                            "correct": "b"
                        },
                        {
                            "question": "409. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 220;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "220",
                            "b": "219",
                            "c": "218",
                            "d": "217",
                            "correct": "a"
                        },
                        {
                            "question": "410. What will be the final value of `num` after executing this code?",
                            "code": "int num = 50;\nnum = num-- - --num + ++num - num++;\n",
                            "a": "50",
                            "b": "49",
                            "c": "48",
                            "d": "47",
                            "correct": "b"
                        },
                        {
                            "question": "411. What is the output of the following Java code?",
                            "code": "int a = 120;\nint b = 30;\nint result = a-- - --b + ++a - b++;\nSystem.out.println(result);\n",
                            "a": "120",
                            "b": "121",
                            "c": "122",
                            "d": "123",
                            "correct": "b"
                        },
                        {
                            "question": "412. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 175;\ncounter = counter++ - --counter + ++counter - counter--;\n",
                            "a": "175",
                            "b": "174",
                            "c": "173",
                            "d": "172",
                            "correct": "a"
                        },
                        {
                            "question": "413. What is the final value of `num` after executing this code?",
                            "code": "int num = 80;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "80",
                            "b": "79",
                            "c": "78",
                            "d": "77",
                            "correct": "b"
                        },
                        {
                            "question": "414. What will be the output of the following Java code?",
                            "code": "int x = 150;\nint y = 25;\nint z = ++x - y-- + x++ - --y;\nSystem.out.println(z);\n",
                            "a": "150",
                            "b": "151",
                            "c": "152",
                            "d": "153",
                            "correct": "b"
                        },
                        {
                            "question": "415. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 225;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "225",
                            "b": "224",
                            "c": "223",
                            "d": "222",
                            "correct": "a"
                        },
                        {
                            "question": "416. What is the result of the following Java code?",
                            "code": "int result = 105;\nresult = --result - result++ + ++result - result--;\n",
                            "a": "105",
                            "b": "104",
                            "c": "103",
                            "d": "102",
                            "correct": "a"
                        },
                        {
                            "question": "417. What will be the final value of `num` after executing this code?",
                            "code": "int num = 95;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "95",
                            "b": "94",
                            "c": "93",
                            "d": "92",
                            "correct": "b"
                        },
                        {
                            "question": "418. What is the output of the following Java code?",
                            "code": "int a = 140;\nint b = 35;\nint result = a++ - --b + ++a - b++;\nSystem.out.println(result);\n",
                            "a": "140",
                            "b": "141",
                            "c": "142",
                            "d": "143",
                            "correct": "b"
                        },
                        {
                            "question": "419. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 250;\ncounter = counter-- - --counter + ++counter - counter++;\n",
                            "a": "250",
                            "b": "249",
                            "c": "248",
                            "d": "247",
                            "correct": "a"
                        },
                        {
                            "question": "420. What will be the final value of `num` after executing this code?",
                            "code": "int num = 70;\nnum = num-- - --num + ++num - num++;\n",
                            "a": "70",
                            "b": "69",
                            "c": "68",
                            "d": "67",
                            "correct": "b"
                        },
                        {
                            "question": "421. What is the output of the following Java code?",
                            "code": "int a = 45;\nint b = 55;\nint result = --a - ++b + a++ - b--;\nSystem.out.println(result);\n",
                            "a": "44",
                            "b": "45",
                            "c": "46",
                            "d": "47",
                            "correct": "c"
                        },
                        {
                            "question": "422. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 300;\ncounter = counter-- - --counter + ++counter - counter--;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "297",
                            "correct": "a"
                        },
                        {
                            "question": "423. What will be the final value of `num` after executing this code?",
                            "code": "int num = 125;\nnum = ++num - num-- + --num - num++;\n",
                            "a": "125",
                            "b": "124",
                            "c": "123",
                            "d": "122",
                            "correct": "b"
                        },
                        {
                            "question": "424. What is the result of the following Java code?",
                            "code": "int a = 90;\nint b = 10;\nint result = ++a - b-- + a++ - --b;\nSystem.out.println(result);\n",
                            "a": "90",
                            "b": "91",
                            "c": "92",
                            "d": "93",
                            "correct": "b"
                        },
                        {
                            "question": "425. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 150;\nvalue = value-- - --value + ++value - value++;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "426. What is the output of the following Java code?",
                            "code": "int x = 110;\nint y = 20;\nint z = x-- - --y + ++x - y++;\nSystem.out.println(z);\n",
                            "a": "110",
                            "b": "111",
                            "c": "112",
                            "d": "113",
                            "correct": "b"
                        },
                        {
                            "question": "427. What will be the final value of `counter` after executing this code?",
                            "code": "int counter = 80;\ncounter = counter++ - --counter + ++counter - counter--;\n",
                            "a": "80",
                            "b": "79",
                            "c": "78",
                            "d": "77",
                            "correct": "b"
                        },
                        {
                            "question": "428. What is the output of the following Java code?",
                            "code": "int a = 95;\nint b = 25;\nint result = --a - ++b + a++ - b--;\nSystem.out.println(result);\n",
                            "a": "95",
                            "b": "96",
                            "c": "97",
                            "d": "98",
                            "correct": "a"
                        },
                        {
                            "question": "429. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 200;\nvalue = ++value - value-- + --value - value++;\n",
                            "a": "200",
                            "b": "199",
                            "c": "198",
                            "d": "197",
                            "correct": "a"
                        },
                        {
                            "question": "430. What will be the final value of `num` after executing this code?",
                            "code": "int num = 55;\nnum = --num - num++ + ++num - num--;\n",
                            "a": "55",
                            "b": "54",
                            "c": "53",
                            "d": "52",
                            "correct": "b"
                        },
                        {
                            "question": "431. What is the output of the following Java code?",
                            "code": "int a = 60;\nint b = 40;\nint result = a-- - ++b + --a - b++;\nSystem.out.println(result);\n",
                            "a": "60",
                            "b": "59",
                            "c": "58",
                            "d": "57",
                            "correct": "c"
                        },
                        {
                            "question": "432. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 350;\ncounter = ++counter - counter-- + --counter - counter++;\n",
                            "a": "350",
                            "b": "349",
                            "c": "348",
                            "d": "347",
                            "correct": "a"
                        },
                        {
                            "question": "433. What will be the final value of `num` after executing this code?",
                            "code": "int num = 275;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "275",
                            "b": "274",
                            "c": "273",
                            "d": "272",
                            "correct": "b"
                        },
                        {
                            "question": "434. What is the result of the following Java code?",
                            "code": "int a = 85;\nint b = 15;\nint result = ++a - b++ + a-- - --b;\nSystem.out.println(result);\n",
                            "a": "85",
                            "b": "86",
                            "c": "87",
                            "d": "88",
                            "correct": "b"
                        },
                        {
                            "question": "435. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 125;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "125",
                            "b": "124",
                            "c": "123",
                            "d": "122",
                            "correct": "a"
                        },
                        {
                            "question": "436. What is the output of the following Java code?",
                            "code": "int x = 300;\nint y = 50;\nint z = x++ - --y + ++x - y++;\nSystem.out.println(z);\n",
                            "a": "300",
                            "b": "301",
                            "c": "302",
                            "d": "303",
                            "correct": "b"
                        },
                        {
                            "question": "437. What will be the final value of `counter` after executing this code?",
                            "code": "int counter = 80;\ncounter = counter-- - --counter + ++counter - counter++;\n",
                            "a": "80",
                            "b": "79",
                            "c": "78",
                            "d": "77",
                            "correct": "b"
                        },
                        {
                            "question": "438. What is the output of the following Java code?",
                            "code": "int a = 45;\nint b = 55;\nint result = --a - ++b + a++ - b--;\nSystem.out.println(result);\n",
                            "a": "45",
                            "b": "46",
                            "c": "47",
                            "d": "48",
                            "correct": "b"
                        },
                        {
                            "question": "439. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 300;\nvalue = ++value - value-- + --value - value++;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "297",
                            "correct": "a"
                        },
                        {
                            "question": "440. What will be the final value of `num` after executing this code?",
                            "code": "int num = 150;\nnum = num-- - --num + ++num - num++;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "441. What is the output of the following Java code?",
                            "code": "int a = 90;\nint b = 30;\nint result = a++ - --b + ++a - b--;\nSystem.out.println(result);\n",
                            "a": "90",
                            "b": "91",
                            "c": "92",
                            "d": "93",
                            "correct": "b"
                        },
                        {
                            "question": "442. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 200;\ncounter = --counter - counter++ + ++counter - counter--;\n",
                            "a": "200",
                            "b": "199",
                            "c": "198",
                            "d": "197",
                            "correct": "a"
                        },
                        {
                            "question": "443. What will be the final value of `num` after executing this code?",
                            "code": "int num = 350;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "350",
                            "b": "349",
                            "c": "348",
                            "d": "347",
                            "correct": "b"
                        },
                        {
                            "question": "444. What is the result of the following Java code?",
                            "code": "int x = 70;\nint y = 20;\nint z = --x + y++ - ++x - y--;\nSystem.out.println(z);\n",
                            "a": "70",
                            "b": "71",
                            "c": "72",
                            "d": "73",
                            "correct": "c"
                        },
                        {
                            "question": "445. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 400;\nvalue = ++value - value-- + --value - value++;\n",
                            "a": "400",
                            "b": "399",
                            "c": "398",
                            "d": "397",
                            "correct": "a"
                        },
                        {
                            "question": "446. What is the output of the following Java code?",
                            "code": "int a = 120;\nint b = 60;\nint result = a-- - ++b + --a - b++;\nSystem.out.println(result);\n",
                            "a": "120",
                            "b": "121",
                            "c": "122",
                            "d": "123",
                            "correct": "b"
                        },
                        {
                            "question": "447. What will be the final value of `counter` after executing this code?",
                            "code": "int counter = 500;\ncounter = counter++ - --counter + ++counter - counter--;\n",
                            "a": "500",
                            "b": "499",
                            "c": "498",
                            "d": "497",
                            "correct": "a"
                        },
                        {
                            "question": "448. What is the output of the following Java code?",
                            "code": "int a = 150;\nint b = 50;\nint result = ++a - b-- + a++ - --b;\nSystem.out.println(result);\n",
                            "a": "150",
                            "b": "151",
                            "c": "152",
                            "d": "153",
                            "correct": "b"
                        },
                        {
                            "question": "449. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 225;\nvalue = value++ - --value + ++value - value--;\n",
                            "a": "225",
                            "b": "224",
                            "c": "223",
                            "d": "222",
                            "correct": "a"
                        },
                        {
                            "question": "450. What will be the final value of `num` after executing this code?",
                            "code": "int num = 100;\nnum = num-- - --num + ++num - num++;\n",
                            "a": "100",
                            "b": "99",
                            "c": "98",
                            "d": "97",
                            "correct": "a"
                        },
                        {
                            "question": "451. What is the output of the following Java code?",
                            "code": "int a = 40;\nint b = 10;\nint result = ++a - b-- + --a - ++b;\nSystem.out.println(result);\n",
                            "a": "41",
                            "b": "42",
                            "c": "43",
                            "d": "44",
                            "correct": "b"
                        },
                        {
                            "question": "452. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 150;\ncounter = counter-- + ++counter - counter++ - --counter;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "453. What will be the final value of `num` after executing this code?",
                            "code": "int num = 300;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "297",
                            "correct": "a"
                        },
                        {
                            "question": "454. What is the result of the following Java code?",
                            "code": "int x = 80;\nint y = 20;\nint z = --x - y++ + ++x - y--;\nSystem.out.println(z);\n",
                            "a": "80",
                            "b": "81",
                            "c": "82",
                            "d": "83",
                            "correct": "c"
                        },
                        {
                            "question": "455. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 175;\nvalue = ++value - value-- + --value - value++;\n",
                            "a": "175",
                            "b": "174",
                            "c": "173",
                            "d": "172",
                            "correct": "a"
                        },
                        {
                            "question": "456. What is the output of the following Java code?",
                            "code": "int a = 225;\nint b = 25;\nint result = a-- - ++b + --a - b++;\nSystem.out.println(result);\n",
                            "a": "225",
                            "b": "224",
                            "c": "223",
                            "d": "222",
                            "correct": "b"
                        },
                        {
                            "question": "457. What will be the final value of `counter` after executing this code?",
                            "code": "int counter = 400;\ncounter = ++counter - counter-- + ++counter - counter++;\n",
                            "a": "400",
                            "b": "399",
                            "c": "398",
                            "d": "397",
                            "correct": "a"
                        },
                        {
                            "question": "458. What is the output of the following Java code?",
                            "code": "int a = 90;\nint b = 15;\nint result = --a - ++b + a++ - b--;\nSystem.out.println(result);\n",
                            "a": "90",
                            "b": "91",
                            "c": "92",
                            "d": "93",
                            "correct": "c"
                        },
                        {
                            "question": "459. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 275;\nvalue = value++ - --value + ++value - value--;\n",
                            "a": "275",
                            "b": "274",
                            "c": "273",
                            "d": "272",
                            "correct": "a"
                        },
                        {
                            "question": "460. What will be the final value of `num` after executing this code?",
                            "code": "int num = 125;\nnum = num-- - --num + ++num - num++;\n",
                            "a": "125",
                            "b": "124",
                            "c": "123",
                            "d": "122",
                            "correct": "a"
                        },
                        {
                            "question": "461. What is the output of the following Java code?",
                            "code": "int x = 50;\nint y = 30;\nint result = x++ - --y + ++x - y--;\nSystem.out.println(result);\n",
                            "a": "51",
                            "b": "50",
                            "c": "52",
                            "d": "49",
                            "correct": "a"
                        },
                        {
                            "question": "462. After executing the following code, what will be the value of `result`?",
                            "code": "int result = 100;\nresult = --result - result++ + ++result - result--;\n",
                            "a": "100",
                            "b": "99",
                            "c": "98",
                            "d": "101",
                            "correct": "a"
                        },
                        {
                            "question": "463. What is the output of the following Java code?",
                            "code": "int a = 55;\nint b = 10;\nint c = 5;\nint result = --a - ++b + --c + b--;\nSystem.out.println(result);\n",
                            "a": "55",
                            "b": "54",
                            "c": "53",
                            "d": "52",
                            "correct": "b"
                        },
                        {
                            "question": "464. What will be the final value of `counter` after executing this code?",
                            "code": "int counter = 180;\ncounter = counter-- - --counter + ++counter - counter++;\n",
                            "a": "180",
                            "b": "179",
                            "c": "178",
                            "d": "177",
                            "correct": "a"
                        },
                        {
                            "question": "465. What is the result of the following Java code?",
                            "code": "int a = 65;\nint b = 20;\nint result = ++a - b-- + --a - ++b;\nSystem.out.println(result);\n",
                            "a": "65",
                            "b": "64",
                            "c": "63",
                            "d": "66",
                            "correct": "d"
                        },
                        {
                            "question": "466. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 300;\nvalue = value-- - --value + ++value - value++;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "297",
                            "correct": "a"
                        },
                        {
                            "question": "467. What will be the output of the following Java code?",
                            "code": "int x = 70;\nint y = 25;\nint z = --x + ++y - x++ - y--;\nSystem.out.println(z);\n",
                            "a": "70",
                            "b": "69",
                            "c": "68",
                            "d": "67",
                            "correct": "b"
                        },
                        {
                            "question": "468. After executing the following code, what will be the value of `result`?",
                            "code": "int result = 220;\nresult = result-- + --result - ++result - result++;\n",
                            "a": "220",
                            "b": "219",
                            "c": "218",
                            "d": "217",
                            "correct": "a"
                        },
                        {
                            "question": "469. What is the output of the following Java code?",
                            "code": "int a = 75;\nint b = 15;\nint result = --a - b++ + ++a - --b;\nSystem.out.println(result);\n",
                            "a": "75",
                            "b": "74",
                            "c": "73",
                            "d": "76",
                            "correct": "d"
                        },
                        {
                            "question": "470. What will be the final value of `num` after executing this code?",
                            "code": "int num = 400;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "400",
                            "b": "399",
                            "c": "398",
                            "d": "397",
                            "correct": "a"
                        },
                        {
                            "question": "471. What is the output of the following Java code?",
                            "code": "int x = 10;\nint y = 20;\nint z = x-- + ++y - --x + y++;\nSystem.out.println(z);\n",
                            "a": "30",
                            "b": "31",
                            "c": "29",
                            "d": "32",
                            "correct": "a"
                        },
                        {
                            "question": "472. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 400;\ncounter = --counter - counter++ + ++counter - counter--;\n",
                            "a": "400",
                            "b": "399",
                            "c": "398",
                            "d": "397",
                            "correct": "a"
                        },
                        {
                            "question": "473. What is the result of the following Java code?",
                            "code": "int a = 120;\nint b = 60;\nint result = --a - ++b + b-- - a++;\nSystem.out.println(result);\n",
                            "a": "118",
                            "b": "117",
                            "c": "119",
                            "d": "116",
                            "correct": "a"
                        },
                        {
                            "question": "474. What will be the final value of `value` after executing this code?",
                            "code": "int value = 150;\nvalue = value++ - --value + ++value - value--;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "475. What is the output of the following Java code?",
                            "code": "int x = 125;\nint y = 35;\nint z = ++x - y-- + ++y - x++;\nSystem.out.println(z);\n",
                            "a": "126",
                            "b": "125",
                            "c": "127",
                            "d": "124",
                            "correct": "b"
                        },
                        {
                            "question": "476. After executing the following code, what will be the value of `result`?",
                            "code": "int result = 180;\nresult = result-- - ++result + --result - result++;\n",
                            "a": "180",
                            "b": "179",
                            "c": "178",
                            "d": "177",
                            "correct": "a"
                        },
                        {
                            "question": "477. What will be the final value of `num` after executing this code?",
                            "code": "int num = 200;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "200",
                            "b": "199",
                            "c": "198",
                            "d": "197",
                            "correct": "a"
                        },
                        {
                            "question": "478. What is the output of the following Java code?",
                            "code": "int a = 85;\nint b = 25;\nint result = --a + ++b - a-- - b++;\nSystem.out.println(result);\n",
                            "a": "84",
                            "b": "85",
                            "c": "83",
                            "d": "82",
                            "correct": "b"
                        },
                        {
                            "question": "479. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 225;\ncounter = ++counter - counter-- + --counter - counter++;\n",
                            "a": "225",
                            "b": "224",
                            "c": "223",
                            "d": "226",
                            "correct": "a"
                        },
                        {
                            "question": "480. What will be the final value of `value` after executing this code?",
                            "code": "int value = 300;\nvalue = value++ - --value + ++value - value--;\n",
                            "a": "300",
                            "b": "299",
                            "c": "298",
                            "d": "297",
                            "correct": "a"
                        },
                        {
                            "question": "481. What is the output of the following Java code?",
                            "code": "int a = 10;\nint b = 20;\nint result = a-- + --b - ++a + b++;\nSystem.out.println(result);\n",
                            "a": "20",
                            "b": "19",
                            "c": "21",
                            "d": "22",
                            "correct": "a"
                        },
                        {
                            "question": "482. After executing the following code, what will be the value of `count`?",
                            "code": "int count = 350;\ncount = count++ - --count + ++count - count--;\n",
                            "a": "350",
                            "b": "349",
                            "c": "348",
                            "d": "347",
                            "correct": "a"
                        },
                        {
                            "question": "483. What will be the result of the following Java code?",
                            "code": "int x = 500;\nint y = 50;\nint result = --x - y++ + ++y - x++;\nSystem.out.println(result);\n",
                            "a": "451",
                            "b": "450",
                            "c": "452",
                            "d": "449",
                            "correct": "a"
                        },
                        {
                            "question": "484. What is the final value of `value` after executing this code?",
                            "code": "int value = 100;\nvalue = ++value - value-- + ++value - --value;\n",
                            "a": "100",
                            "b": "101",
                            "c": "102",
                            "d": "99",
                            "correct": "b"
                        },
                        {
                            "question": "485. What will be the output of the following Java code?",
                            "code": "int a = 75;\nint b = 25;\nint result = a++ - --b + b++ - --a;\nSystem.out.println(result);\n",
                            "a": "50",
                            "b": "49",
                            "c": "51",
                            "d": "48",
                            "correct": "a"
                        },
                        {
                            "question": "486. After executing the following code, what will be the value of `num`?",
                            "code": "int num = 400;\nnum = num-- - ++num + --num - num++;\n",
                            "a": "400",
                            "b": "399",
                            "c": "398",
                            "d": "397",
                            "correct": "a"
                        },
                        {
                            "question": "487. What will be the final value of `result` after executing this code?",
                            "code": "int result = 150;\nresult = --result + result++ - ++result - result--;\n",
                            "a": "150",
                            "b": "149",
                            "c": "148",
                            "d": "147",
                            "correct": "a"
                        },
                        {
                            "question": "488. What is the output of the following Java code?",
                            "code": "int a = 225;\nint b = 35;\nint result = a-- - --b + ++b - a++;\nSystem.out.println(result);\n",
                            "a": "225",
                            "b": "224",
                            "c": "226",
                            "d": "223",
                            "correct": "a"
                        },
                        {
                            "question": "489. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 500;\ncounter = --counter - counter++ + ++counter - counter--;\n",
                            "a": "500",
                            "b": "499",
                            "c": "498",
                            "d": "497",
                            "correct": "a"
                        },
                        {
                            "question": "490. What will be the final value of `value` after executing this code?",
                            "code": "int value = 600;\nvalue = value-- - ++value + --value - value++;\n",
                            "a": "600",
                            "b": "599",
                            "c": "598",
                            "d": "597",
                            "correct": "a"
                        },
                        {
                            "question": "491. What is the output of the following Java code?",
                            "code": "int a = 10;\nint b = 5;\nint result = ++a - b-- + a++ - --b;\nSystem.out.println(result);\n",
                            "a": "11",
                            "b": "10",
                            "c": "12",
                            "d": "9",
                            "correct": "b"
                        },
                        {
                            "question": "492. After executing the following code, what will be the value of `value`?",
                            "code": "int value = 15;\nvalue = --value - value++ + ++value - value--;\n",
                            "a": "14",
                            "b": "15",
                            "c": "16",
                            "d": "13",
                            "correct": "a"
                        },
                        {
                            "question": "493. What will be the output of the following Java code?",
                            "code": "int x = 30;\nint y = 40;\nint result = x++ - --y + ++x - y++;\nSystem.out.println(result);\n",
                            "a": "30",
                            "b": "31",
                            "c": "32",
                            "d": "29",
                            "correct": "b"
                        },
                        {
                            "question": "494. What is the final value of `counter` after executing the code below?",
                            "code": "int counter = 80;\ncounter = ++counter - counter-- + --counter - counter++;\n",
                            "a": "80",
                            "b": "79",
                            "c": "81",
                            "d": "78",
                            "correct": "b"
                        },
                        {
                            "question": "495. What will be the result of the following Java code?",
                            "code": "int a = 50;\nint b = 60;\nint result = --a - b++ + ++b - a--;\nSystem.out.println(result);\n",
                            "a": "49",
                            "b": "48",
                            "c": "50",
                            "d": "47",
                            "correct": "b"
                        },
                        {
                            "question": "496. After executing the following code, what will be the value of `num`?",
                            "code": "int num = 100;\nnum = num++ - --num + ++num - num--;\n",
                            "a": "100",
                            "b": "99",
                            "c": "101",
                            "d": "98",
                            "correct": "a"
                        },
                        {
                            "question": "497. What will be the output of the following Java code?",
                            "code": "int a = 120;\nint b = 30;\nint result = --a - ++b + b-- - a++;\nSystem.out.println(result);\n",
                            "a": "90",
                            "b": "89",
                            "c": "91",
                            "d": "92",
                            "correct": "a"
                        },
                        {
                            "question": "498. What is the final value of `value` after executing the code below?",
                            "code": "int value = 200;\nvalue = value-- - ++value + --value - value++;\n",
                            "a": "200",
                            "b": "199",
                            "c": "201",
                            "d": "198",
                            "correct": "a"
                        },
                        {
                            "question": "499. What will be the result of the following Java code?",
                            "code": "int x = 150;\nint y = 25;\nint result = x-- - --y + ++x - y++;\nSystem.out.println(result);\n",
                            "a": "125",
                            "b": "126",
                            "c": "127",
                            "d": "124",
                            "correct": "b"
                        },
                        {
                            "question": "500. After executing the following code, what will be the value of `counter`?",
                            "code": "int counter = 300;\ncounter = --counter - counter++ + ++counter - counter--;\n",
                            "a": "300",
                            "b": "299",
                            "c": "301",
                            "d": "298",
                            "correct": "a"
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
