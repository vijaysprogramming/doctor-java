const quizData = [

{
question:  "1.What is the output for given code?",
code: `class A 
{

public static void main(String[] args) 

{

int i = 0;

if(i++ == 0)

{

i ++;

}

System.out.println("main:" + i);

}

}
}`,
a: "Compile Time Error",
b: "2",
c: "3",
d: "5",
correct: "b",
},

{
question:  "2.What is the output for given code?",
code: `class B 
{
public static void main(String[] args) 
{
int i = 0;
if(i++ == 0)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:1<br>main:3",
b: "main:0",
c: "main:1",
d: "None of the above",
correct: "a",
},
{
question:  "3.What is the output for given code?",
code: `class C
{
public static void main(String[] args) 
{
int i = 0;
if(i++ == 1)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:1<br>main:3",
b: "main:0",
c: "main:1",
d: "None of the above",
correct: "b",
},
{
question:  "4.What is the output for given code?",
code: `class D
{
public static void main(String[] args)
{
int i = 0;
if(true || i++ == 1)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:1<br>main:3",
b: "if block:0<br>main:2",
c: "main:0",
d: "None of the above",
correct: "a",
},
{
question:  "5.What is the output for given code?",
code: `class E
{
public static void main(String[] args)
{
int i = 0;
if(i++ == 0 || i++ == 1)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:1<br>main:3",
b: "if block:0<br>main:2",
c: "if block:1<br>main:2",
d: "None of the above",
correct: "a",
},
{
question:  "6.What is the output for given code?",
code: `class F
{
public static void main(String[] args)
{
int i = 0;
if(i++ == 1 || i++ == 1)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:0<br>main:3",
b: "if block:1<br>main:4",
c: "if block:2<br>main:4",
d: "None of the above",
correct: "b",
},
{
question:  "7.What is the output for given code?",
code: `class G
{
public static void main(String[] args)
{
int i = 0;
if(i++ == 1 || i++ == 2)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "main:2",
b: "main:0",
c: "main:1",
d: "None of the above",
correct: "c",
},
{
question:  "8.What is the output for given code?",
code: `class H
{
public static void main(String[] args)
{
int i = 0;
if(false && i++ == 0)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:1<br>main:3",
b: "main:0",
c: "main:1",
d: "None of the above",
correct: "b",
},
{
question:  "9.What is the output for given code?",
code: `class I
{
public static void main(String[] args)
{
int i = 0;
if(i++ == 0 && i++ == 0)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:2<br>main:5",
b: "main:0",
c: "main:2",
d: "None of the above",
correct: "c",
},
{
question:  "10.What is the output for given code?",
code: `class J
{
public static void main(String[] args)
{
int i = 0;
if(i++ == 0 && i++ == 1)
{
System.out.println("if block:" + i++);
i++;
}
System.out.println("main:" + i);
}
}`,
a: "if block:2<br>main:4",
b: "main:1",
c: "main:2",
d: "None of the above",
correct: "a",
},
{
question:  "11.What is the output for given code?",
code: `class K 
{
public static void main(String[] args) 
{
System.out.println(true);
System.out.println(!true);
System.out.println(true || true);
System.out.println(true || false);
System.out.println(false || false);
System.out.println(false || true);
System.out.println(true && true);
System.out.println(true && false);
System.out.println(false && false);
System.out.println(false && true);
}
}`,
a: "true<br>false<br>true<br>true<br>false<br>true<br>true<br>false<br>false<br>false",
b: "true<br>false<br>true<br>true<br>true<br>true<br>true<br>false<br>false<br>false",
c: "true<br>false<br>true<br>true<br>false<br>true<br>true<br>false<br>false<br>true",
d: "None of the above",
correct: "a",
},
{
question:  "12.What is the output for given code?",
code: `class L 
{
public static void main(String[] args) 
{
int i = 0;
System.out.println(true || (i++ == 0));
System.out.println(i);
}
}`,
a: "true<br>1",
b: "true<br>0",
c: "Compile Time Error",
d: "None of the above",
correct: "a",
},
{
question:  "13.What is the output for given code?",
code: `class M
{
public static void main(String[] args) 
{
int i = 0;
System.out.println(false || (i++ == 0));
System.out.println(i);
}
}`,
a: "false<br>1",
b: "true<br>0",
c: "true<br>1",
d: "None of the above",
correct: "b",
},
{
question:  "14.What is the output for given code?",
code: `class N
{
public static void main(String[] args) 
{
int i = 0;
System.out.println(false && (i++ == 0));
System.out.println(i);
}
}`,
a: "false<br>0",
b: "false<br>1",
c: "true<br>1",
d: "None of the above",
correct: "a",
},
{
question:  "15.What is the output for given code?",
code: `class O
{
public static void main(String[] args) 
{
int i = 0;
System.out.println(true && (i++ == 0));
System.out.println(i);
}
}`,
a: "0",
b: "true<br>0",
c: "true<br>1",
d: "None of the above",
correct: "c",
},
{
question:  "16.What is the output for given code?",
code: `class A 
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if block");
}
else
{
System.out.println("else block");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block<br>main end",
b: "main begin<br>else block<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "17.What is the output for given code?",
code: `class B
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block");
}
else
{
System.out.println("else block");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block<br>main end",
b: "main begin<br>else block<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "18.What is the output for given code?",
code: `class C
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block");
}
else
System.out.println("else block");
System.out.println("main end");
}
}`,
a: "main begin<br>else block<br>main end",
b: "main begin<br>if block<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "19.What is the output for given code?",
code: `class D
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if block");
}
else
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
System.out.println("main end");
}
}`,
a: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
b: "main begin<br>if block<br>main end",
c: "main begin<br>if block<br>else block stmt2<br>else block stmt3<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "20.What is the output for given code?",
code: `class E
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block");
}
else
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
System.out.println("main end");
}
}`,
a: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
b: "main begin<br>if block<br>main end",
c: "main begin<br>if block<br>else block stmt2<br>else block stmt3<br>main end",
d: "None of the above",
correct: "a",
},,
{
question:  "21.What is the output for given code?",
code: `class F
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block");
}
else
System.out.println("else block");
System.out.println("main end");
}
}`,
a: "main begin<br>else block<br>main end",
b: "main begin<br>main end",
c: "main begin<br>if block<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "22.What is the output for given code?",
code: `class G
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block stmt1");
System.out.println("if block stmt2");
System.out.println("if block stmt3");
}
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "23.What is the output for given code?",
code: `class H
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if block stmt1");
System.out.println("if block stmt2");
System.out.println("if block stmt3");
}
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "24.What is the output for given code?",
code: `class I
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if block stmt1");
System.out.println("if block stmt2");
System.out.println("if block stmt3");
}
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "25.What is the output for given code?",
code: `class J
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if block stmt1");
System.out.println("if block stmt2");
System.out.println("if block stmt3");
}
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
b: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question: "26.What is the output for given code?",
code: `class K
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if block stmt1");
System.out.println("if block stmt2");
System.out.println("if block stmt3");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if block stmt1<br>if block stmt2<br>if block stmt3<br>main end",
b: "main begin<br>main end",
c: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
d: "None of the above",
correct: "a",
},

{
question:  "27.What is the output for given code?",
code: `class L
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if-block");
}
System.out.println("some thing");
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end:");
}
}`,
a: "main begin<br>if-block<br>some thing<br>main end",
b: "Compile Time Error",
c: "None of the above",
d: "None of the above",
correct: "b",
},
{
question:  "28.What is the output for given code?",
code: `class M
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false);
{
System.out.println("if-block");
}
System.out.println("main end:");
}
}`,
a: "main begin<br>if-block<br>main end",
b: "Compile Time Error",
c: "main begin<br>main end:",
d: "None of the above",
correct: "c",
},
{
question:  "29.What is the output for given code?",
code: `class N
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true);
{
System.out.println("if-block");
}
else
{
System.out.println("else block stmt1");
System.out.println("else block stmt2");
System.out.println("else block stmt3");
}
System.out.println("main end:");
}
}`,
a: "main begin<br>if-block<br>main end",
b: "Compile Time Error",
c: "main begin<br>else block stmt1<br>else block stmt2<br>else block stmt3<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "30.What is the output for given code?",
code: `class O
{
public static void main(String[] args) 
{
System.out.println("main begin");
{
System.out.println("block1-stmt1");
System.out.println("block1-stmt2");
System.out.println("block1-stmt3");
System.out.println("block1-stmt4");
}
System.out.println("some thing");
{
System.out.println("block2-stmt1");
System.out.println("block2-stmt2");
System.out.println("block2-stmt3");
System.out.println("block2-stmt4");
}
System.out.println("main end:");
}
}`,
a: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing<br>block2-stmt1<br>block2-stmt2<br>block2-stmt3<br>block2-stmt4<br>main end:",
b: "Compile Time Error",
c: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "31.What is the output for given code?",
code: `class P
{
public static void main(String[] args) 
{
System.out.println("main begin");
{
int i = 10;
System.out.println("block1-stmt1");
System.out.println("block1-stmt2");
System.out.println("block1-stmt3");
System.out.println("block1-stmt4");
}
System.out.println("some thing:" + i);
{
System.out.println("block2-stmt1");
System.out.println("block2-stmt2");
System.out.println("block2-stmt3");
System.out.println("block2-stmt4");
}
System.out.println("main end:");
}
}`,
a: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing<br>block2-stmt1<br>block2-stmt2<br>block2-stmt3<br>block2-stmt4<br>main end:",
b: "Compile Time Error",
c: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing:10<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "32.What is the output for given code?",
code: `class Q
{
public static void main(String[] args) 
{
System.out.println("main begin");
int i = 10;
{ 
i = i + 20;
System.out.println("block1-stmt1");
System.out.println("block1-stmt2");
System.out.println("block1-stmt3");
System.out.println("block1-stmt4");
}
System.out.println("some thing:" + i);
{
i = i + 30;
System.out.println("block2-stmt1");
System.out.println("block2-stmt2");
System.out.println("block2-stmt3");
System.out.println("block2-stmt4");
}
System.out.println("main end:" + i);
}
}`,
a: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing:30<br>main end:",
b: "Compile Time Error",
c: "main begin<br>block1-stmt1<br>block1-stmt2<br>block1-stmt3<br>block1-stmt4<br>some thing:30<br>block2-stmt1<br>block2-stmt2<br>block2-stmt3<br>block2-stmt4<br>main end:60",
d: "None of the above",
correct: "c",
},
{
question:  "33.What is the output for given code?",
code: `class A 
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
System.out.println("main end");
}
}`,
a: "Compile Time Error",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>if1 begin<br>if1 end<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "34.What is the output for given code?",
code: `class B
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(true)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>if2 body<br>if1 end<br>main end",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>if1 begin<br>if1 end<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "35.What is the output for given code?",
code: `class C
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if1 begin");
if(true)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>if2 body<br>if1 end<br>main end",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "36.What is the output for given code?",
code: `class D
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{ 
if(true)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
} 
}
System.out.println("main end");
}
}`,
a: "main begin<br>if2 body<br>main end",
b: "main begin<br>else2-body<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "37.What is the output for given code?",
code: `class E
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
if(true)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
} 
System.out.println("main end");
}
}`,
a: "main begin<br>if2 body<br>main end",
b: "main begin<br>else2-body<br>main end",
c: "main begin<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "38.What is the output for given code?",
code: `class F
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
if(true) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>main end",
b: "main begin<br>else2-body<br>main end",
c: "main begin<br>if2 body<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "39.What is the output for given code?",
code: `class G
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
if(true) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>main end",
b: "main begin<br>main end",
c: "main begin<br>if2 body<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "40.What is the output for given code?",
code: `class H
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>main end",
b: "main begin<br>main end",
c: "main begin<br>if2 body<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "41.What is the output for given code?",
code: `class I
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
else
{
System.out.println("else1-body");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>if2 body<br>if1 end<br>main end",
b: "main begin<br>main end",
c: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "42.What is the output for given code?",
code: `class J
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
else
{
System.out.println("else1-body");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>if2 body<br>if1 end<br>main end",
b: "main begin<br>else1-body<br>main end",
c: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "43.What is the output for given code?",
code: `class K
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if1 begin");
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
System.out.println("if1 end");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>if2 body<br>if1 end<br>main end",
b: "main begin<br>else1-body<br>main end",
c: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "44.What is the output for given code?",
code: `class L
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
}
else 
System.out.println("else1-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>if2 body<br>main end",
b: "main begin<br>else2-body<br>main end",
c: "main begin<br>else1-body<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "45.What is the output for given code?",
code: `class M
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>if2 body<br>main end",
b: "main begin<br>else2-body<br>main end",
c: "main begin<br>else1-body<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "46.What is the output for given code?",
code: `class N
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>if2 body<br>main end",
b: "main begin<br>else1-body<br>main end",
c: "main begin<br>else2-body<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "47.What is the output for given code?",
code: `class O
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
if(true) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>else1-body<br>main end",
b: "main begin<br>if2 body<br>main end",
c: "main begin<br>else2-body<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "48.What is the output for given code?",
code: `class P
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
if(false) 
System.out.println("if2 body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body"); 
System.out.println("main end");
}
}`,
a: "main begin<br>else1-body<br>main end",
b: "main begin<br>if2 body<br>main end",
c: "main begin<br>else2-body<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "49.What is the output for given code?",
code: `class Q 
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body begin");
if(true)
{
System.out.println("if3 body");
}
else
{
System.out.println("else3-body");
}
System.out.println("if2 body end");
}
else
{
System.out.println("else2-body");
}
System.out.println("if1 end");
}
else
{
System.out.println("else1-body");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
b: "None of the above",
c: "main begin<br>if2 body begin<br>if3 body<br>if2 body end<br>if1 end<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "50.What is the output for given code?",
code: `class R 
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body begin");
if(true)
{
System.out.println("if3 body");
}
else 
System.out.println("else3-body"); 
System.out.println("if2 body end");
}
else 
System.out.println("else2-body");
System.out.println("if1 end");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "None of the above",
b: "None of the above",
c: "main begin<br>if2 body begin<br>if3 body<br>if2 body end<br>if1 end<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "51.What is the output for given code?",
code: `class S
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{
System.out.println("if2 body begin");
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
System.out.println("if2 body end");
}
else 
System.out.println("else2-body");
System.out.println("if1 end");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "Compile Time Error",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>if2 body begin<br>if3 body<br>if2 body end<br>if1 end<br>main end",
d: "None of the above",
correct: "b",
},
{
question:  "52.What is the output for given code?",
code: `class T
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
{ 
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
}
else 
System.out.println("else2-body");
System.out.println("if1 end");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "Compile Time Error",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>if2 body begin<br>if3 body<br>if2 body end<br>if1 end<br>main end",
d: "None of the above",
correct: "b",
},
{
question: "52.What is the output for given code?",
code: `class U
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if1 begin");
if(false)
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body");
System.out.println("if1 end");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "Compile Time Error",
b: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
c: "main begin<br>if1 begin<br>if3 body<br>if1 end<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "53.What is the output for given code?",
code: `class V
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
if(false)
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body");
}
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>main end",
b: "main begin<br>else3-body<br>else2-body<br>else1 end<br>main end",
c: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "54.What is the output for given code?",
code: `class W
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true) 
if(false)
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>main end",
b: "main begin<br>else3-body<br>else2-body<br>else1 end<br>main end",
c: "main begin<br>if1 begin<br>else2-body<br>if1 end<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "55.What is the output for given code?",
code: `class X
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true) 
if(false)
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>main end",
b: "Compile Time Error",
c: "main begin<br>else2-body<br>else1 end<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "56.What is the output for given code?",
code: `class Y
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false) 
if(true)
if(true)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>else1 end<br>main end",
b: "Compile Time Error",
c: "main begin<br>else1 end<br>main end",
d: "None of the above",
correct: "a",
},
{
question:  "57.What is the output for given code?",
code: `class Z
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false) 
if(false)
if(false)
System.out.println("if3 body");
else 
System.out.println("else3-body"); 
else 
System.out.println("else2-body"); 
else 
System.out.println("else1-body");
System.out.println("main end");
}
}`,
a: "main begin<br>else2-body<br>else1 end<br>main end",
b: "Compile Time Error",
c: "main begin<br>else1 end<br>main end",
d: "None of the above",
correct: "c",
},
{
question:  "58.What is the output for given code?",
code: `class A 
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(true)
{
System.out.println("if-body");
}
else
{
System.out.println("else begin");
if(true)
{
System.out.println("else if body");
}
System.out.println("else end");
}
System.out.println("main end");
}
}`,
a: "main begin<br>if-body<br>main end",
b: "main begin<br>if-body",
c: "None of the above",
d: "None of the above",
correct: "a",
},
{
question:  "59.What is the output for given code?",
code: `class B
{
public static void main(String[] args) 
{
System.out.println("main begin");
if(false)
{
System.out.println("if-body");
}
else
{
System.out.println("else begin");
if(true)
{
System.out.println("else if body");
}
System.out.println("else end");
}
System.out.println("main end");
}
}`,
a: "main begin<br>else begin<br>else if body<br>else end",
b: "main begin<br>else begin<br>else if body<br>else end<br>main end",
c: "Compile Time Error",
d: "None of the above",
correct: "b",
},
{
"question": "60. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity60 {\n    public static void main(String[] args) {\n        int a = 7, b = 12, c = 10;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (c % 2 == 0) {\n            System.out.print(\"c is even\");\n        } else {\n            System.out.print(\"None of them are even\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "c is even",
"d": "None of them are even",
"correct": "d"
},
{
"question": "61. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity61 {\n    public static void main(String[] args) {\n        int x = 12, y = 18;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > x) {\n            System.out.print(\"y > x\");\n        } else if (x == y) {\n            System.out.print(\"x and y are equal\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x > y",
"b": "y > x",
"c": "x and y are equal",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "62. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity62 {\n    public static void main(String[] args) {\n        int num1 = 20, num2 = 16;\n        if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
"a": "Divisible by 5",
"b": "Divisible by 4",
"c": "Neither divisible by 4 nor by 5",
"d": "No output",
"correct": "b"
},
{
"question": "63. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity63 {\n    public static void main(String[] args) {\n        int a = 6, b = 15, c = 9;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (c % 3 == 0) {\n            System.out.print(\"c is divisible by 3\");\n        } else {\n            System.out.print(\"None of them are divisible by 3\");\n        }\n    }\n}",
"a": "a is divisible by 3",
"b": "b is divisible by 3",
"c": "c is divisible by 3",
"d": "None of them are divisible by 3",
"correct": "b"
},
{
"question": "64. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity64 {\n    public static void main(String[] args) {\n        int x = 10, y = 15, z = 12;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x > y",
"b": "y > z",
"c": "z > x",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "65. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity65 {\n    public static void main(String[] args) {\n        int num1 = 18, num2 = 25;\n        if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
"a": "Divisible by 4",
"b": "Divisible by 5",
"c": "Neither divisible by 4 nor by 5",
"d": "No output",
"correct": "a"
},
{
"question": "66. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity66 {\n    public static void main(String[] args) {\n        int a = 7, b = 12, c = 10;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (c % 2 == 0) {\n            System.out.print(\"c is even\");\n        } else {\n            System.out.print(\"None of them are even\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "c is even",
"d": "None of them are even",
"correct": "d"
},
{
"question": "67. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity67 {\n    public static void main(String[] args) {\n        int x = 12, y = 18;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > x) {\n            System.out.print(\"y > x\");\n        } else if (x == y) {\n            System.out.print(\"x and y are equal\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x > y",
"b": "y > x",
"c": "x and y are equal",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "68. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity68 {\n    public static void main(String[] args) {\n        int num1 = 20, num2 = 16;\n        if (num1 % 5 == 0) {\n            System.out.print(\"Divisible by 5\");\n        } else if (num1 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else if (num2 % 4 == 0) {\n            System.out.print(\"Divisible by 4\");\n        } else {\n            System.out.print(\"Neither divisible by 4 nor by 5\");\n        }\n    }\n}",
"a": "Divisible by 5",
"b": "Divisible by 4",
"c": "Neither divisible by 4 nor by 5",
"d": "No output",
"correct": "b"
},
{
"question": "69. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity69 {\n    public static void main(String[] args) {\n        int a = 6, b = 15, c = 9;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (c % 3 == 0) {\n            System.out.print(\"c is divisible by 3\");\n        } else {\n            System.out.print(\"None of them are divisible by 3\");\n        }\n    }\n}",
"a": "a is divisible by 3",
"b": "b is divisible by 3",
"c": "c is divisible by 3",
"d": "None of them are divisible by 3",
"correct": "b"
},
{
"question": "70. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity70 {\n    public static void main(String[] args) {\n        int x = 10, y = 15, z = 12;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x > y",
"b": "y > z",
"c": "z > x",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "71. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity71 {\n    public static void main(String[] args) {\n        int x = 9, y = 18;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is even",
"b": "y is even",
"c": "x is divisible by 3",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "72. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity72 {\n    public static void main(String[] args) {\n        int a = 8, b = 13;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "a is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "73. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity73 {\n    public static void main(String[] args) {\n        int a = 15, b = 24;\n        if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else if (b % 3 == 0) {\n            System.out.print(\"b is divisible by 3\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is divisible by 3",
"b": "b is divisible by 3",
"c": "a is even",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "74. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity74 {\n    public static void main(String[] args) {\n        int x = 20, y = 25, z = 15;\n        if (x > y) {\n            System.out.print(\"x > y\");\n        } else if (y > z) {\n            System.out.print(\"y > z\");\n        } else if (z > x) {\n            System.out.print(\"z > x\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x > y",
"b": "y > z",
"c": "z > x",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "75. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity75 {\n    public static void main(String[] args) {\n        int num1 = 30, num2 = 45;\n        if (num1 % 5 == 0) {\n            System.out.print(\"num1 is divisible by 5\");\n        } else if (num1 % 3 == 0) {\n            System.out.print(\"num1 is divisible by 3\");\n        } else if (num2 % 5 == 0) {\n            System.out.print(\"num2 is divisible by 5\");\n        } else {\n            System.out.print(\"Neither num1 nor num2 are divisible by 5 or 3\");\n        }\n    }\n}",
"a": "num1 is divisible by 5",
"b": "num1 is divisible by 3",
"c": "num2 is divisible by 5",
"d": "Neither num1 nor num2 are divisible by 5 or 3",
"correct": "a"
},
{
"question": "76. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity76 {\n    public static void main(String[] args) {\n        int a = 12, b = 16;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "a is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "77. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity77 {\n    public static void main(String[] args) {\n        int x = 14, y = 21;\n        if (x % 7 == 0) {\n            System.out.print(\"x is divisible by 7\");\n        } else if (y % 7 == 0) {\n            System.out.print(\"y is divisible by 7\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is divisible by 7",
"b": "y is divisible by 7",
"c": "x is divisible by 3",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "78. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity78 {\n    public static void main(String[] args) {\n        int a = 24, b = 36;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "a is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "79. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity79 {\n    public static void main(String[] args) {\n        int x = 11, y = 22;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is even",
"b": "y is even",
"c": "x is divisible by 3",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "80. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity80 {\n    public static void main(String[] args) {\n        int a = 18, b = 20;\n        if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else if (b % 5 == 0) {\n            System.out.print(\"b is divisible by 5\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is divisible by 5",
"b": "b is divisible by 5",
"c": "a is even",
"d": "None of the conditions are true",
"correct": "c"
},
{
"question": "81. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity81 {\n    public static void main(String[] args) {\n        int a = 10, b = 20;\n        if (a > b) {\n            System.out.print(\"a is greater than b\");\n        } else if (a < b) {\n            System.out.print(\"a is less than b\");\n        } else {\n            System.out.print(\"a is equal to b\");\n        }\n    }\n}",
"a": "a is greater than b",
"b": "a is less than b",
"c": "a is equal to b",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "82. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity82 {\n    public static void main(String[] args) {\n        int x = 8, y = 12;\n        if (x % 4 == 0) {\n            System.out.print(\"x is divisible by 4\");\n        } else if (y % 4 == 0) {\n            System.out.print(\"y is divisible by 4\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is divisible by 4",
"b": "y is divisible by 4",
"c": "x is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "83. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity83 {\n    public static void main(String[] args) {\n        int num = 25;\n        if (num % 5 == 0) {\n            System.out.print(\"num is divisible by 5\");\n        } else if (num % 10 == 0) {\n            System.out.print(\"num is divisible by 10\");\n        } else if (num % 2 == 0) {\n            System.out.print(\"num is even\");\n        } else {\n            System.out.print(\"num is not divisible by 5 or 10\");\n        }\n    }\n}",
"a": "num is divisible by 5",
"b": "num is divisible by 10",
"c": "num is even",
"d": "num is not divisible by 5 or 10",
"correct": "a"
},
{
"question": "84. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity84 {\n    public static void main(String[] args) {\n        int x = 30, y = 25;\n        if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else if (y > 20) {\n            System.out.print(\"y is greater than 20\");\n        } else {\n            System.out.print(\"Neither x nor y is greater than 20\");\n        }\n    }\n}",
"a": "x is greater than 20",
"b": "y is greater than 20",
"c": "Neither x nor y is greater than 20",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "85. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity85 {\n    public static void main(String[] args) {\n        int a = 22, b = 44;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "a is divisible by 5",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "86. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity86 {\n    public static void main(String[] args) {\n        int x = 10, y = 12, z = 15;\n        if (x % 5 == 0) {\n            System.out.print(\"x is divisible by 5\");\n        } else if (y % 5 == 0) {\n            System.out.print(\"y is divisible by 5\");\n        } else if (z % 5 == 0) {\n            System.out.print(\"z is divisible by 5\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is divisible by 5",
"b": "y is divisible by 5",
"c": "z is divisible by 5",
"d": "None of the conditions are true",
"correct": "c"
},
{
"question": "87. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity87 {\n    public static void main(String[] args) {\n        int a = 50, b = 60;\n        if (a % 10 == 0) {\n            System.out.print(\"a is divisible by 10\");\n        } else if (b % 10 == 0) {\n            System.out.print(\"b is divisible by 10\");\n        } else if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else {\n            System.out.print(\"Neither a nor b are divisible by 10 or 5\");\n        }\n    }\n}",
"a": "a is divisible by 10",
"b": "b is divisible by 10",
"c": "a is divisible by 5",
"d": "Neither a nor b are divisible by 10 or 5",
"correct": "a"
},
{
"question": "88. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity88 {\n    public static void main(String[] args) {\n        int x = 22, y = 27;\n        if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else if (y % 3 == 0) {\n            System.out.print(\"y is divisible by 3\");\n        } else if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is divisible by 3",
"b": "y is divisible by 3",
"c": "x is even",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "89. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity89 {\n    public static void main(String[] args) {\n        int a = 45, b = 50;\n        if (a % 5 == 0) {\n            System.out.print(\"a is divisible by 5\");\n        } else if (b % 5 == 0) {\n            System.out.print(\"b is divisible by 5\");\n        } else if (a % 10 == 0) {\n            System.out.print(\"a is divisible by 10\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is divisible by 5",
"b": "b is divisible by 5",
"c": "a is divisible by 10",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "90. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity90 {\n    public static void main(String[] args) {\n        int x = 14, y = 18;\n        if (x % 2 == 0) {\n            System.out.print(\"x is even\");\n        } else if (y % 2 == 0) {\n            System.out.print(\"y is even\");\n        } else if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is even",
"b": "y is even",
"c": "x is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "91. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity91 {\n    public static void main(String[] args) {\n        int a = 8, b = 16;\n        if (a == 8) {\n            System.out.print(\"a is 8\");\n        } else if (b == 16) {\n            System.out.print(\"b is 16\");\n        } else {\n            System.out.print(\"Neither a is 8 nor b is 16\");\n        }\n    }\n}",
"a": "a is 8",
"b": "b is 16",
"c": "Neither a is 8 nor b is 16",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "92. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity92 {\n    public static void main(String[] args) {\n        int x = 25, y = 50;\n        if (x % 5 == 0) {\n            System.out.print(\"x is divisible by 5\");\n        } else if (y % 5 == 0) {\n            System.out.print(\"y is divisible by 5\");\n        } else if (x % 10 == 0) {\n            System.out.print(\"x is divisible by 10\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "x is divisible by 5",
"b": "y is divisible by 5",
"c": "x is divisible by 10",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "93. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity93 {\n    public static void main(String[] args) {\n        int a = 7, b = 14;\n        if (a % 7 == 0) {\n            System.out.print(\"a is divisible by 7\");\n        } else if (b % 7 == 0) {\n            System.out.print(\"b is divisible by 7\");\n        } else {\n            System.out.print(\"Neither a nor b is divisible by 7\");\n        }\n    }\n}",
"a": "a is divisible by 7",
"b": "b is divisible by 7",
"c": "Neither a nor b is divisible by 7",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "94. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity94 {\n    public static void main(String[] args) {\n        int x = 10, y = 20, z = 30;\n        if (x > y) {\n            System.out.print(\"x is greater than y\");\n        } else if (y > z) {\n            System.out.print(\"y is greater than z\");\n        } else {\n            System.out.print(\"z is the greatest\");\n        }\n    }\n}",
"a": "x is greater than y",
"b": "y is greater than z",
"c": "z is the greatest",
"d": "None of the conditions are true",
"correct": "c"
},
{
"question": "95. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity95 {\n    public static void main(String[] args) {\n        int a = 12, b = 15;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else {\n            System.out.print(\"Neither a nor b is even\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "Neither a nor b is even",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "96. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity96 {\n    public static void main(String[] args) {\n        int x = 6, y = 9;\n        if (x % 3 == 0) {\n            System.out.print(\"x is divisible by 3\");\n        } else if (y % 3 == 0) {\n            System.out.print(\"y is divisible by 3\");\n        } else {\n            System.out.print(\"Neither x nor y is divisible by 3\");\n        }\n    }\n}",
"a": "x is divisible by 3",
"b": "y is divisible by 3",
"c": "Neither x nor y is divisible by 3",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "97. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity97 {\n    public static void main(String[] args) {\n        int a = 9, b = 18;\n        if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else if (b % 2 == 0) {\n            System.out.print(\"b is even\");\n        } else if (a % 3 == 0) {\n            System.out.print(\"a is divisible by 3\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is even",
"b": "b is even",
"c": "a is divisible by 3",
"d": "None of the conditions are true",
"correct": "c"
},
{
"question": "98. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity98 {\n    public static void main(String[] args) {\n        int a = 4, b = 12, c = 20;\n        if (a < b) {\n            System.out.print(\"a is less than b\");\n        } else if (b < c) {\n            System.out.print(\"b is less than c\");\n        } else {\n            System.out.print(\"a is not less than b and b is not less than c\");\n        }\n    }\n}",
"a": "a is less than b",
"b": "b is less than c",
"c": "a is not less than b and b is not less than c",
"d": "None of the conditions are true",
"correct": "b"
},
{
"question": "99. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity99 {\n    public static void main(String[] args) {\n        int x = 50, y = 25;\n        if (x > y) {\n            System.out.print(\"x is greater than y\");\n        } else if (x < y) {\n            System.out.print(\"x is less than y\");\n        } else {\n            System.out.print(\"x is equal to y\");\n        }\n    }\n}",
"a": "x is greater than y",
"b": "x is less than y",
"c": "x is equal to y",
"d": "None of the conditions are true",
"correct": "a"
},
{
"question": "100. What is the output of the following Java code?",
"code": "public class IfElseIfComplexity100 {\n    public static void main(String[] args) {\n        int a = 7, b = 14;\n        if (a % 7 == 0) {\n            System.out.print(\"a is divisible by 7\");\n        } else if (b % 7 == 0) {\n            System.out.print(\"b is divisible by 7\");\n        } else if (a % 2 == 0) {\n            System.out.print(\"a is even\");\n        } else {\n            System.out.print(\"None of the conditions are true\");\n        }\n    }\n}",
"a": "a is divisible by 7",
"b": "b is divisible by 7",
"c": "a is even",
"d": "None of the conditions are true",
"correct": "a"
},

{
"question": "101. What is the output of the following Java code?",
"code": "public class NestedIfElse101 {\n    public static void main(String[] args) {\n        int x = 15, y = 10;\n        if (x > y) {\n            if (x > 20) {\n                System.out.print(\"x is greater than 20\");\n            } else {\n                System.out.print(\"x is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 20",
"b": "x is not greater than 20",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "b"
},
{
"question": "102. What is the output of the following Java code?",
"code": "public class NestedIfElse102 {\n    public static void main(String[] args) {\n        int num1 = 10, num2 = 15;\n        if (num1 > num2) {\n            if (num1 > 5) {\n                System.out.print(\"num1 is greater than 5\");\n            } else {\n                System.out.print(\"num1 is not greater than 5\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 5",
"b": "num1 is not greater than 5",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "c"
},
{
"question": "103. What is the output of the following Java code?",
"code": "public class NestedIfElse103 {\n    public static void main(String[] args) {\n        int x = 18, y = 20;\n        if (x > y) {\n            if (x > 15) {\n                System.out.print(\"x is greater than 15\");\n            } else {\n                System.out.print(\"x is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 15",
"b": "x is not greater than 15",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "104. What is the output of the following Java code?",
"code": "public class NestedIfElse104 {\n    public static void main(String[] args) {\n        int num1 = 12, num2 = 10;\n        if (num1 > num2) {\n            if (num1 > 15) {\n                System.out.print(\"num1 is greater than 15\");\n            } else {\n                System.out.print(\"num1 is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 15",
"b": "num1 is not greater than 15",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "b"
},
{
"question": "105. What is the output of the following Java code?",
"code": "public class NestedIfElse105 {\n    public static void main(String[] args) {\n        int x = 25, y = 30;\n        if (x > y) {\n            if (x > 20) {\n                System.out.print(\"x is greater than 20\");\n            } else {\n                System.out.print(\"x is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 20",
"b": "x is not greater than 20",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "106. What is the output of the following Java code?",
"code": "public class NestedIfElse106 {\n    public static void main(String[] args) {\n        int num1 = 22, num2 = 18;\n        if (num1 > num2) {\n            if (num1 > 20) {\n                System.out.print(\"num1 is greater than 20\");\n            } else {\n                System.out.print(\"num1 is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 20",
"b": "num1 is not greater than 20",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "a"
},
{
"question": "107. What is the output of the following Java code?",
"code": "public class NestedIfElse107 {\n    public static void main(String[] args) {\n        int x = 15, y = 12;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 10",
"b": "x is not greater than 10",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "a"
},
{
"question": "108. What is the output of the following Java code?",
"code": "public class NestedIfElse108 {\n    public static void main(String[] args) {\n        int num1 = 18, num2 = 22;\n        if (num1 > num2) {\n            if (num1 > 20) {\n                System.out.print(\"num1 is greater than 20\");\n            } else {\n                System.out.print(\"num1 is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 20",
"b": "num1 is not greater than 20",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "c"
},
{
"question": "109. What is the output of the following Java code?",
"code": "public class NestedIfElse109 {\n    public static void main(String[] args) {\n        int x = 5, y = 8;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 10",
"b": "x is not greater than 10",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "110. What is the output of the following Java code?",
"code": "public class NestedIfElse110 {\n    public static void main(String[] args) {\n        int num1 = 8, num2 = 5;\n        if (num1 > num2) {\n            if (num1 > 10) {\n                System.out.print(\"num1 is greater than 10\");\n            } else {\n                System.out.print(\"num1 is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 10",
"b": "num1 is not greater than 10",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "b"
},

{
"question": "111. What is the output of the following Java code?",
"code": "public class NestedIfElse111 {\n    public static void main(String[] args) {\n        int a = 8, b = 12;\n        if (a > b) {\n            if (a > 10) {\n                System.out.print(\"a is greater than 10\");\n            } else {\n                System.out.print(\"a is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"a is not greater than b\");\n        }\n    }\n}",
"a": "a is greater than 10",
"b": "a is not greater than 10",
"c": "a is not greater than b",
"d": "None of the above",
"correct": "c"
},
{
"question": "112. What is the output of the following Java code?",
"code": "public class NestedIfElse112 {\n    public static void main(String[] args) {\n        int num = 25;\n        if (num % 2 == 0) {\n            if (num > 20) {\n                System.out.print(\"num is even and greater than 20\");\n            } else {\n                System.out.print(\"num is even but not greater than 20\");\n            }\n        } else {\n            System.out.print(\"num is odd\");\n        }\n    }\n}",
"a": "num is even and greater than 20",
"b": "num is even but not greater than 20",
"c": "num is odd",
"d": "None of the above",
"correct": "a"
},
{
"question": "113. What is the output of the following Java code?",
"code": "public class NestedIfElse113 {\n    public static void main(String[] args) {\n        int num = 5;\n        if (num > 10) {\n            if (num % 2 == 0) {\n                System.out.print(\"num is even\");\n            } else {\n                System.out.print(\"num is odd\");\n            }\n        } else {\n            System.out.print(\"num is not greater than 10\");\n        }\n    }\n}",
"a": "num is even",
"b": "num is odd",
"c": "num is not greater than 10",
"d": "None of the above",
"correct": "c"
},
{
"question": "114. What is the output of the following Java code?",
"code": "public class NestedIfElse114 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 20) {\n            if (x < 40) {\n                System.out.print(\"x is between 20 and 40\");\n            } else {\n                System.out.print(\"x is 40 or more\");\n            }\n        } else {\n            System.out.print(\"x is 20 or less\");\n        }\n    }\n}",
"a": "x is between 20 and 40",
"b": "x is 40 or more",
"c": "x is 20 or less",
"d": "None of the above",
"correct": "a"
},
{
"question": "115. What is the output of the following Java code?",
"code": "public class NestedIfElse115 {\n    public static void main(String[] args) {\n        int num = 18;\n        if (num > 15) {\n            if (num % 3 == 0) {\n                System.out.print(\"num is divisible by 3\");\n            } else {\n                System.out.print(\"num is not divisible by 3\");\n            }\n        } else {\n            System.out.print(\"num is 15 or less\");\n        }\n    }\n}",
"a": "num is divisible by 3",
"b": "num is not divisible by 3",
"c": "num is 15 or less",
"d": "None of the above",
"correct": "a"
},
{
"question": "116. What is the output of the following Java code?",
"code": "public class NestedIfElse116 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 0) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is positive and even\");\n            } else {\n                System.out.print(\"x is positive and odd\");\n            }\n        } else {\n            System.out.print(\"x is zero or negative\");\n        }\n    }\n}",
"a": "x is positive and even",
"b": "x is positive and odd",
"c": "x is zero or negative",
"d": "None of the above",
"correct": "b"
},
{
"question": "117. What is the output of the following Java code?",
"code": "public class NestedIfElse117 {\n    public static void main(String[] args) {\n        int a = 20, b = 15;\n        if (a >= b) {\n            if (a == b) {\n                System.out.print(\"a is equal to b\");\n            } else {\n                System.out.print(\"a is greater than b\");\n            }\n        } else {\n            System.out.print(\"a is less than b\");\n        }\n    }\n}",
"a": "a is equal to b",
"b": "a is greater than b",
"c": "a is less than b",
"d": "None of the above",
"correct": "b"
},
{
"question": "118. What is the output of the following Java code?",
"code": "public class NestedIfElse118 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num % 2 == 0) {\n            if (num % 4 == 0) {\n                System.out.print(\"num is divisible by 4\");\n            } else {\n                System.out.print(\"num is not divisible by 4\");\n            }\n        } else {\n            System.out.print(\"num is odd\");\n        }\n    }\n}",
"a": "num is divisible by 4",
"b": "num is not divisible by 4",
"c": "num is odd",
"d": "None of the above",
"correct": "a"
},
{
"question": "119. What is the output of the following Java code?",
"code": "public class NestedIfElse119 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x < 10) {\n            if (x == 0) {\n                System.out.print(\"x is zero\");\n            } else {\n                System.out.print(\"x is less than 10 but not zero\");\n            }\n        } else {\n            System.out.print(\"x is 10 or more\");\n        }\n    }\n}",
"a": "x is zero",
"b": "x is less than 10 but not zero",
"c": "x is 10 or more",
"d": "None of the above",
"correct": "a"
},
{
"question": "120. What is the output of the following Java code?",
"code": "public class NestedIfElse120 {\n    public static void main(String[] args) {\n        int num = 17;\n        if (num % 2 != 0) {\n            if (num > 15) {\n                System.out.print(\"num is an odd number greater than 15\");\n            } else {\n                System.out.print(\"num is an odd number 15 or less\");\n            }\n        } else {\n            System.out.print(\"num is an even number\");\n        }\n    }\n}",
"a": "num is an odd number greater than 15",
"b": "num is an odd number 15 or less",
"c": "num is an even number",
"d": "None of the above",
"correct": "a"
},

{
"question": "121. What is the output of the following Java code?",
"code": "public class NestedIfElse121 {\n    public static void main(String[] args) {\n        int x = 18, y = 20;\n        if (x > y) {\n            if (x > 15) {\n                System.out.print(\"x is greater than 15\");\n            } else {\n                System.out.print(\"x is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 15",
"b": "x is not greater than 15",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "122. What is the output of the following Java code?",
"code": "public class NestedIfElse122 {\n    public static void main(String[] args) {\n        int num1 = 15, num2 = 18;\n        if (num1 > num2) {\n            if (num1 > 12) {\n                System.out.print(\"num1 is greater than 12\");\n            } else {\n                System.out.print(\"num1 is not greater than 12\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 12",
"b": "num1 is not greater than 12",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "c"
},
{
"question": "123. What is the output of the following Java code?",
"code": "public class NestedIfElse123 {\n    public static void main(String[] args) {\n        int x = 5, y = 8;\n        if (x > y) {\n            if (x > 8) {\n                System.out.print(\"x is greater than 8\");\n            } else {\n                System.out.print(\"x is not greater than 8\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 8",
"b": "x is not greater than 8",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "124. What is the output of the following Java code?",
"code": "public class NestedIfElse124 {\n    public static void main(String[] args) {\n        int num1 = 8, num2 = 5;\n        if (num1 > num2) {\n            if (num1 > 6) {\n                System.out.print(\"num1 is greater than 6\");\n            } else {\n                System.out.print(\"num1 is not greater than 6\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 6",
"b": "num1 is not greater than 6",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "a"
},
{
"question": "125. What is the output of the following Java code?",
"code": "public class NestedIfElse125 {\n    public static void main(String[] args) {\n        int x = 18, y = 15;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 10",
"b": "x is not greater than 10",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "a"
},
{
"question": "126. What is the output of the following Java code?",
"code": "public class NestedIfElse126 {\n    public static void main(String[] args) {\n        int num1 = 15, num2 = 18;\n        if (num1 > num2) {\n            if (num1 > 8) {\n                System.out.print(\"num1 is greater than 8\");\n            } else {\n                System.out.print(\"num1 is not greater than 8\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 8",
"b": "num1 is not greater than 8",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "c"
},
{
"question": "127. What is the output of the following Java code?",
"code": "public class NestedIfElse127 {\n    public static void main(String[] args) {\n        int x = 5, y = 8;\n        if (x > y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 10",
"b": "x is not greater than 10",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "c"
},
{
"question": "128. What is the output of the following Java code?",
"code": "public class NestedIfElse128 {\n    public static void main(String[] args) {\n        int num1 = 8, num2 = 5;\n        if (num1 > num2) {\n            if (num1 > 6) {\n                System.out.print(\"num1 is greater than 6\");\n            } else {\n                System.out.print(\"num1 is not greater than 6\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 6",
"b": "num1 is not greater than 6",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "a"
},
{
"question": "129. What is the output of the following Java code?",
"code": "public class NestedIfElse129 {\n    public static void main(String[] args) {\n        int x = 18, y = 15;\n        if (x > y) {\n            if (x > 12) {\n                System.out.print(\"x is greater than 12\");\n            } else {\n                System.out.print(\"x is not greater than 12\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
"a": "x is greater than 12",
"b": "x is not greater than 12",
"c": "x is not greater than y",
"d": "None of the above",
"correct": "a"
},
{
"question": "130. What is the output of the following Java code?",
"code": "public class NestedIfElse130 {\n    public static void main(String[] args) {\n        int num1 = 15, num2 = 18;\n        if (num1 > num2) {\n            if (num1 > 8) {\n                System.out.print(\"num1 is greater than 8\");\n            } else {\n                System.out.print(\"num1 is not greater than 8\");\n            }\n        } else {\n            System.out.print(\"num1 is not greater than num2\");\n        }\n    }\n}",
"a": "num1 is greater than 8",
"b": "num1 is not greater than 8",
"c": "num1 is not greater than num2",
"d": "None of the above",
"correct": "c"
},

{
    "question": "131. What is the output of the following Java code?",
    "code": "public class NestedIfElse131 {\n    public static void main(String[] args) {\n        int x = 10, y = 5;\n        if (x > y) {\n            if (x > 12) {\n                System.out.print(\"x is greater than 12\");\n            } else {\n                System.out.print(\"x is not greater than 12\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 12",
    "b": "x is not greater than 12",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "b"
},
{
    "question": "132. What is the output of the following Java code?",
    "code": "public class NestedIfElse132 {\n    public static void main(String[] args) {\n        int x = 7, y = 7;\n        if (x > y) {\n            if (x > 5) {\n                System.out.print(\"x is greater than 5\");\n            } else {\n                System.out.print(\"x is not greater than 5\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is not greater than 5",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "c"
},
{
    "question": "133. What is the output of the following Java code?",
    "code": "public class NestedIfElse133 {\n    public static void main(String[] args) {\n        int x = 4, y = 10;\n        if (x < y) {\n            if (x < 5) {\n                System.out.print(\"x is less than 5\");\n            } else {\n                System.out.print(\"x is not less than 5\");\n            }\n        } else {\n            System.out.print(\"x is not less than y\");\n        }\n    }\n}",
    "a": "x is less than 5",
    "b": "x is not less than 5",
    "c": "x is not less than y",
    "d": "None of the above",
    "correct": "a"
},
{
    "question": "134. What is the output of the following Java code?",
    "code": "public class NestedIfElse134 {\n    public static void main(String[] args) {\n        int x = 12, y = 20;\n        if (x < y) {\n            if (x < 15) {\n                System.out.print(\"x is less than 15\");\n            } else {\n                System.out.print(\"x is not less than 15\");\n            }\n        } else {\n            System.out.print(\"x is not less than y\");\n        }\n    }\n}",
    "a": "x is less than 15",
    "b": "x is not less than 15",
    "c": "x is not less than y",
    "d": "None of the above",
    "correct": "a"
},
{
    "question": "135. What is the output of the following Java code?",
    "code": "public class NestedIfElse135 {\n    public static void main(String[] args) {\n        int num1 = 9, num2 = 12;\n        if (num1 < num2) {\n            if (num1 < 10) {\n                System.out.print(\"num1 is less than 10\");\n            } else {\n                System.out.print(\"num1 is not less than 10\");\n            }\n        } else {\n            System.out.print(\"num1 is not less than num2\");\n        }\n    }\n}",
    "a": "num1 is less than 10",
    "b": "num1 is not less than 10",
    "c": "num1 is not less than num2",
    "d": "None of the above",
    "correct": "a"
},
{
    "question": "136. What is the output of the following Java code?",
    "code": "public class NestedIfElse136 {\n    public static void main(String[] args) {\n        int x = 25, y = 30;\n        if (x < y) {\n            if (x < 20) {\n                System.out.print(\"x is less than 20\");\n            } else {\n                System.out.print(\"x is not less than 20\");\n            }\n        } else {\n            System.out.print(\"x is not less than y\");\n        }\n    }\n}",
    "a": "x is less than 20",
    "b": "x is not less than 20",
    "c": "x is not less than y",
    "d": "None of the above",
    "correct": "b"
},
{
    "question": "137. What is the output of the following Java code?",
    "code": "public class NestedIfElse137 {\n    public static void main(String[] args) {\n        int x = 14, y = 14;\n        if (x == y) {\n            if (x > 10) {\n                System.out.print(\"x is greater than 10\");\n            } else {\n                System.out.print(\"x is not greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is not equal to y\");\n        }\n    }\n}",
    "a": "x is greater than 10",
    "b": "x is not greater than 10",
    "c": "x is not equal to y",
    "d": "None of the above",
    "correct": "a"
},
{
    "question": "138. What is the output of the following Java code?",
    "code": "public class NestedIfElse138 {\n    public static void main(String[] args) {\n        int num1 = 6, num2 = 8;\n        if (num1 < num2) {\n            if (num1 > 5) {\n                System.out.print(\"num1 is greater than 5\");\n            } else {\n                System.out.print(\"num1 is not greater than 5\");\n            }\n        } else {\n            System.out.print(\"num1 is not less than num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 5",
    "b": "num1 is not greater than 5",
    "c": "num1 is not less than num2",
    "d": "None of the above",
    "correct": "a"
},
{
    "question": "139. What is the output of the following Java code?",
    "code": "public class NestedIfElse139 {\n    public static void main(String[] args) {\n        int x = 16, y = 14;\n        if (x > y) {\n            if (x > 20) {\n                System.out.print(\"x is greater than 20\");\n            } else {\n                System.out.print(\"x is not greater than 20\");\n            }\n        } else {\n            System.out.print(\"x is not greater than y\");\n        }\n    }\n}",
    "a": "x is greater than 20",
    "b": "x is not greater than 20",
    "c": "x is not greater than y",
    "d": "None of the above",
    "correct": "b"
},
{
    "question": "140. What is the output of the following Java code?",
    "code": "public class NestedIfElse140 {\n    public static void main(String[] args) {\n        int num1 = 20, num2 = 20;\n        if (num1 == num2) {\n            if (num1 > 15) {\n                System.out.print(\"num1 is greater than 15\");\n            } else {\n                System.out.print(\"num1 is not greater than 15\");\n            }\n        } else {\n            System.out.print(\"num1 is not equal to num2\");\n        }\n    }\n}",
    "a": "num1 is greater than 15",
    "b": "num1 is not greater than 15",
    "c": "num1 is not equal to num2",
    "d": "None of the above",
    "correct": "a"
},

    {
        "question": "141. What is the output of the following Java code?",
        "code": "public class NestedElseIf141 {\n    public static void main(String[] args) {\n        int num = 15;\n        if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else {\n            System.out.print(\"num is less than or equal to 10\");\n        }\n    }\n}",
        "a": "num is greater than 20",
        "b": "num is greater than 10",
        "c": "num is less than or equal to 10",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "142. What is the output of the following Java code?",
        "code": "public class NestedElseIf142 {\n    public static void main(String[] args) {\n        int value = 25;\n        if (value > 30) {\n            System.out.print(\"value is greater than 30\");\n        } else if (value > 20) {\n            System.out.print(\"value is greater than 20\");\n        } else if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else {\n            System.out.print(\"value is less than or equal to 10\");\n        }\n    }\n}",
        "a": "value is greater than 30",
        "b": "value is greater than 20",
        "c": "value is greater than 10",
        "d": "value is less than or equal to 10",
        "correct": "b"
    },
    {
        "question": "143. What is the output of the following Java code?",
        "code": "public class NestedElseIf143 {\n    public static void main(String[] args) {\n        int number = 12;\n        if (number > 15) {\n            System.out.print(\"number is greater than 15\");\n        } else if (number > 10) {\n            System.out.print(\"number is greater than 10\");\n        } else {\n            System.out.print(\"number is less than or equal to 10\");\n        }\n    }\n}",
        "a": "number is greater than 15",
        "b": "number is greater than 10",
        "c": "number is less than or equal to 10",
        "d": "None of the above",
        "correct": "b"
    },
    {
        "question": "144. What is the output of the following Java code?",
        "code": "public class NestedElseIf144 {\n    public static void main(String[] args) {\n        int val = 22;\n        if (val > 25) {\n            System.out.print(\"val is greater than 25\");\n        } else if (val > 20) {\n            System.out.print(\"val is greater than 20\");\n        } else if (val > 15) {\n            System.out.print(\"val is greater than 15\");\n        } else {\n            System.out.print(\"val is less than or equal to 15\");\n        }\n    }\n}",
        "a": "val is greater than 25",
        "b": "val is greater than 20",
        "c": "val is greater than 15",
        "d": "val is less than or equal to 15",
        "correct": "c"
    },
    {
        "question": "145. What is the output of the following Java code?",
        "code": "public class NestedElseIf145 {\n    public static void main(String[] args) {\n        int num = 8;\n        if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else if (num > 5) {\n            System.out.print(\"num is greater than 5\");\n        } else if (num > 2) {\n            System.out.print(\"num is greater than 2\");\n        } else {\n            System.out.print(\"num is less than or equal to 2\");\n        }\n    }\n}",
        "a": "num is greater than 10",
        "b": "num is greater than 5",
        "c": "num is greater than 2",
        "d": "num is less than or equal to 2",
        "correct": "b"
    },
    {
        "question": "146. What is the output of the following Java code?",
        "code": "public class NestedElseIf146 {\n    public static void main(String[] args) {\n        int value = 4;\n        if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else if (value > 8) {\n            System.out.print(\"value is greater than 8\");\n        } else if (value > 6) {\n            System.out.print(\"value is greater than 6\");\n        } else {\n            System.out.print(\"value is less than or equal to 6\");\n        }\n    }\n}",
        "a": "value is greater than 10",
        "b": "value is greater than 8",
        "c": "value is greater than 6",
        "d": "value is less than or equal to 6",
        "correct": "d"
    },
    {
        "question": "147. What is the output of the following Java code?",
        "code": "public class NestedElseIf147 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else if (x > 15) {\n            System.out.print(\"x is greater than 15\");\n        } else if (x > 10) {\n            System.out.print(\"x is greater than 10\");\n        } else {\n            System.out.print(\"x is less than or equal to 10\");\n        }\n    }\n}",
        "a": "x is greater than 20",
        "b": "x is greater than 15",
        "c": "x is greater than 10",
        "d": "x is less than or equal to 10",
        "correct": "b"
    },
    {
        "question": "148. What is the output of the following Java code?",
        "code": "public class NestedElseIf148 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else {\n            System.out.print(\"num is less than or equal to 10\");\n        }\n    }\n}",
        "a": "num is greater than 20",
        "b": "num is greater than 15",
        "c": "num is greater than 10",
        "d": "num is less than or equal to 10",
        "correct": "c"
    },
    {
        "question": "149. What is the output of the following Java code?",
        "code": "public class NestedElseIf149 {\n    public static void main(String[] args) {\n        int val = 22;\n        if (val > 30) {\n            System.out.print(\"val is greater than 30\");\n        } else if (val > 25) {\n            System.out.print(\"val is greater than 25\");\n        } else if (val > 20) {\n            System.out.print(\"val is greater than 20\");\n        } else {\n            System.out.print(\"val is less than or equal to 20\");\n        }\n    }\n}",
        "a": "val is greater than 30",
        "b": "val is greater than 25",
        "c": "val is greater than 20",
        "d": "val is less than or equal to 20",
        "correct": "c"
    },
    {
        "question": "150. What is the output of the following Java code?",
        "code": "public class NestedElseIf150 {\n    public static void main(String[] args) {\n        int num = 8;\n        if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else if (num > 5) {\n            System.out.print(\"num is greater than 5\");\n        } else if (num > 2) {\n            System.out.print(\"num is greater than 2\");\n        } else {\n            System.out.print(\"num is less than or equal to 2\");\n        }\n    }\n}",
        "a": "num is greater than 10",
        "b": "num is greater than 5",
        "c": "num is greater than 2",
        "d": "num is less than or equal to 2",
        "correct": "b"
    },

{
"question": "151. What is the output of the following Java code?",
"code": "public class NestedElseIf151 {\n    public static void main(String[] args) {\n        int value = 30;\n        if (value > 35) {\n            System.out.print(\"value is greater than 35\");\n        } else if (value > 25) {\n            System.out.print(\"value is greater than 25\");\n        } else if (value > 20) {\n            System.out.print(\"value is greater than 20\");\n        } else {\n            System.out.print(\"value is less than or equal to 20\");\n        }\n    }\n}",
"a": "value is greater than 35",
"b": "value is greater than 25",
"c": "value is greater than 20",
"d": "value is less than or equal to 20",
"correct": "b"
},
{
"question": "152. What is the output of the following Java code?",
"code": "public class NestedElseIf152 {\n    public static void main(String[] args) {\n        int num = 14;\n        if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else {\n            System.out.print(\"num is less than or equal to 10\");\n        }\n    }\n}",
"a": "num is greater than 20",
"b": "num is greater than 15",
"c": "num is greater than 10",
"d": "num is less than or equal to 10",
"correct": "c"
},
{
"question": "153. What is the output of the following Java code?",
"code": "public class NestedElseIf153 {\n    public static void main(String[] args) {\n        int x = 23;\n        if (x > 30) {\n            System.out.print(\"x is greater than 30\");\n        } else if (x > 25) {\n            System.out.print(\"x is greater than 25\");\n        } else if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else {\n            System.out.print(\"x is less than or equal to 20\");\n        }\n    }\n}",
"a": "x is greater than 30",
"b": "x is greater than 25",
"c": "x is greater than 20",
"d": "x is less than or equal to 20",
"correct": "c"
},
{
"question": "154. What is the output of the following Java code?",
"code": "public class NestedElseIf154 {\n    public static void main(String[] args) {\n        int val = 10;\n        if (val > 15) {\n            System.out.print(\"val is greater than 15\");\n        } else if (val > 12) {\n            System.out.print(\"val is greater than 12\");\n        } else if (val > 10) {\n            System.out.print(\"val is greater than 10\");\n        } else {\n            System.out.print(\"val is less than or equal to 10\");\n        }\n    }\n}",
"a": "val is greater than 15",
"b": "val is greater than 12",
"c": "val is greater than 10",
"d": "val is less than or equal to 10",
"correct": "d"
},
{
"question": "155. What is the output of the following Java code?",
"code": "public class NestedElseIf155 {\n    public static void main(String[] args) {\n        int num = 18;\n        if (num > 25) {\n            System.out.print(\"num is greater than 25\");\n        } else if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else {\n            System.out.print(\"num is less than or equal to 15\");\n        }\n    }\n}",
"a": "num is greater than 25",
"b": "num is greater than 20",
"c": "num is greater than 15",
"d": "num is less than or equal to 15",
"correct": "c"
},
{
"question": "156. What is the output of the following Java code?",
"code": "public class NestedElseIf156 {\n    public static void main(String[] args) {\n        int value = 5;\n        if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else if (value > 8) {\n            System.out.print(\"value is greater than 8\");\n        } else if (value > 6) {\n            System.out.print(\"value is greater than 6\");\n        } else {\n            System.out.print(\"value is less than or equal to 6\");\n        }\n    }\n}",
"a": "value is greater than 10",
"b": "value is greater than 8",
"c": "value is greater than 6",
"d": "value is less than or equal to 6",
"correct": "d"
},
{
"question": "157. What is the output of the following Java code?",
"code": "public class NestedElseIf157 {\n    public static void main(String[] args) {\n        int x = 33;\n        if (x > 35) {\n            System.out.print(\"x is greater than 35\");\n        } else if (x > 30) {\n            System.out.print(\"x is greater than 30\");\n        } else if (x > 25) {\n            System.out.print(\"x is greater than 25\");\n        } else {\n            System.out.print(\"x is less than or equal to 25\");\n        }\n    }\n}",
"a": "x is greater than 35",
"b": "x is greater than 30",
"c": "x is greater than 25",
"d": "x is less than or equal to 25",
"correct": "b"
},
{
"question": "158. What is the output of the following Java code?",
"code": "public class NestedElseIf158 {\n    public static void main(String[] args) {\n        int num = 9;\n        if (num > 12) {\n            System.out.print(\"num is greater than 12\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else if (num > 8) {\n            System.out.print(\"num is greater than 8\");\n        } else {\n            System.out.print(\"num is less than or equal to 8\");\n        }\n    }\n}",
"a": "num is greater than 12",
"b": "num is greater than 10",
"c": "num is greater than 8",
"d": "num is less than or equal to 8",
"correct": "c"
},
{
"question": "159. What is the output of the following Java code?",
"code": "public class NestedElseIf159 {\n    public static void main(String[] args) {\n        int value = 27;\n        if (value > 30) {\n            System.out.print(\"value is greater than 30\");\n        } else if (value > 25) {\n            System.out.print(\"value is greater than 25\");\n        } else if (value > 20) {\n            System.out.print(\"value is greater than 20\");\n        } else {\n            System.out.print(\"value is less than or equal to 20\");\n        }\n    }\n}",
"a": "value is greater than 30",
"b": "value is greater than 25",
"c": "value is greater than 20",
"d": "value is less than or equal to 20",
"correct": "b"
},
{
"question": "160. What is the output of the following Java code?",
"code": "public class NestedElseIf160 {\n    public static void main(String[] args) {\n        int num = 21;\n        if (num > 25) {\n            System.out.print(\"num is greater than 25\");\n        } else if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else {\n            System.out.print(\"num is less than or equal to 15\");\n        }\n    }\n}",
"a": "num is greater than 25",
"b": "num is greater than 20",
"c": "num is greater than 15",
"d": "num is less than or equal to 15",
"correct": "b"
},
{
"question": "161. What is the output of the following Java code?",
"code": "public class NestedElseIf161 {\n    public static void main(String[] args) {\n        int value = 7;\n        if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else if (value > 5) {\n            System.out.print(\"value is greater than 5\");\n        } else if (value > 3) {\n            System.out.print(\"value is greater than 3\");\n        } else {\n            System.out.print(\"value is less than or equal to 3\");\n        }\n    }\n}",
"a": "value is greater than 10",
"b": "value is greater than 5",
"c": "value is greater than 3",
"d": "value is less than or equal to 3",
"correct": "b"
},

{
"question": "162. What is the output of the following Java code?",
"code": "public class NestedElseIf162 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else if (x > 15) {\n            System.out.print(\"x is greater than 15\");\n        } else if (x > 10) {\n            System.out.print(\"x is greater than 10\");\n        } else {\n            System.out.print(\"x is less than or equal to 10\");\n        }\n    }\n}",
"a": "x is greater than 20",
"b": "x is greater than 15",
"c": "x is greater than 10",
"d": "x is less than or equal to 10",
"correct": "b"
},
{
"question": "163. What is the output of the following Java code?",
"code": "public class NestedElseIf163 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else {\n            System.out.print(\"num is less than or equal to 10\");\n        }\n    }\n}",
"a": "num is greater than 20",
"b": "num is greater than 15",
"c": "num is greater than 10",
"d": "num is less than or equal to 10",
"correct": "c"
},
{
"question": "164. What is the output of the following Java code?",
"code": "public class NestedElseIf164 {\n    public static void main(String[] args) {\n        int val = 22;\n        if (val > 30) {\n            System.out.print(\"val is greater than 30\");\n        } else if (val > 25) {\n            System.out.print(\"val is greater than 25\");\n        } else if (val > 20) {\n            System.out.print(\"val is greater than 20\");\n        } else {\n            System.out.print(\"val is less than or equal to 20\");\n        }\n    }\n}",
"a": "val is greater than 30",
"b": "val is greater than 25",
"c": "val is greater than 20",
"d": "val is less than or equal to 20",
"correct": "c"
},
{
"question": "165. What is the output of the following Java code?",
"code": "public class NestedElseIf165 {\n    public static void main(String[] args) {\n        int num = 8;\n        if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else if (num > 5) {\n            System.out.print(\"num is greater than 5\");\n        } else if (num > 2) {\n            System.out.print(\"num is greater than 2\");\n        } else {\n            System.out.print(\"num is less than or equal to 2\");\n        }\n    }\n}",
"a": "num is greater than 10",
"b": "num is greater than 5",
"c": "num is greater than 2",
"d": "num is less than or equal to 2",
"correct": "c"
},
{
"question": "166. What is the output of the following Java code?",
"code": "public class NestedElseIf166 {\n    public static void main(String[] args) {\n        int value = 4;\n        if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else if (value > 8) {\n            System.out.print(\"value is greater than 8\");\n        } else if (value > 6) {\n            System.out.print(\"value is greater than 6\");\n        } else {\n            System.out.print(\"value is less than or equal to 6\");\n        }\n    }\n}",
"a": "value is greater than 10",
"b": "value is greater than 8",
"c": "value is greater than 6",
"d": "value is less than or equal to 6",
"correct": "d"
},
{
"question": "167. What is the output of the following Java code?",
"code": "public class NestedElseIf167 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x > 20) {\n            System.out.print(\"x is greater than 20\");\n        } else if (x > 15) {\n            System.out.print(\"x is greater than 15\");\n        } else if (x > 10) {\n            System.out.print(\"x is greater than 10\");\n        } else {\n            System.out.print(\"x is less than or equal to 10\");\n        }\n    }\n}",
"a": "x is greater than 20",
"b": "x is greater than 15",
"c": "x is greater than 10",
"d": "x is less than or equal to 10",
"correct": "b"
},
{
"question": "168. What is the output of the following Java code?",
"code": "public class NestedElseIf168 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 20) {\n            System.out.print(\"num is greater than 20\");\n        } else if (num > 15) {\n            System.out.print(\"num is greater than 15\");\n        } else if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else {\n            System.out.print(\"num is less than or equal to 10\");\n        }\n    }\n}",
"a": "num is greater than 20",
"b": "num is greater than 15",
"c": "num is greater than 10",
"d": "num is less than or equal to 10",
"correct": "c"
},
{
"question": "169. What is the output of the following Java code?",
"code": "public class NestedElseIf169 {\n    public static void main(String[] args) {\n        int val = 22;\n        if (val > 30) {\n            System.out.print(\"val is greater than 30\");\n        } else if (val > 25) {\n            System.out.print(\"val is greater than 25\");\n        } else if (val > 20) {\n            System.out.print(\"val is greater than 20\");\n        } else {\n            System.out.print(\"val is less than or equal to 20\");\n        }\n    }\n}",
"a": "val is greater than 30",
"b": "val is greater than 25",
"c": "val is greater than 20",
"d": "val is less than or equal to 20",
"correct": "c"
},
{
"question": "170. What is the output of the following Java code?",
"code": "public class NestedElseIf170 {\n    public static void main(String[] args) {\n        int num = 8;\n        if (num > 10) {\n            System.out.print(\"num is greater than 10\");\n        } else if (num > 5) {\n            System.out.print(\"num is greater than 5\");\n        } else if (num > 2) {\n            System.out.print(\"num is greater than 2\");\n        } else {\n            System.out.print(\"num is less than or equal to 2\");\n        }\n    }\n}",
"a": "num is greater than 10",
"b": "num is greater than 5",
"c": "num is greater than 2",
"d": "num is less than or equal to 2",
"correct": "c"
},
{
"question": "171. What is the output of the following Java code?",
"code": "public class NestedElseIf171 {\n    public static void main(String[] args) {\n        int value = 4;\n        if (value > 10) {\n            System.out.print(\"value is greater than 10\");\n        } else if (value > 8) {\n            System.out.print(\"value is greater than 8\");\n        } else if (value > 6) {\n            System.out.print(\"value is greater than 6\");\n        } else {\n            System.out.print(\"value is less than or equal to 6\");\n        }\n    }\n}",
"a": "value is greater than 10",
"b": "value is greater than 8",
"c": "value is greater than 6",
"d": "value is less than or equal to 6",
"correct": "d"
},

{
"question": "172. What is the output of the following Java code?",
"code": "public class NestedElseIf172 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x < 10) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is even\");\n            } else {\n                System.out.print(\"x is odd\");\n            }\n        } else {\n            System.out.print(\"x is 10 or more\");\n        }\n    }\n}",
"a": "x is even",
"b": "x is odd",
"c": "x is 10 or more",
"d": "None of the above",
"correct": "b"
},
{
"question": "173. What is the output of the following Java code?",
"code": "public class NestedElseIf173 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x < 10) {\n            System.out.print(\"x is less than 10\");\n        } else if (x < 20) {\n            System.out.print(\"x is less than 20\");\n        } else {\n            System.out.print(\"x is 20 or more\");\n        }\n    }\n}",
"a": "x is less than 10",
"b": "x is less than 20",
"c": "x is 20 or more",
"d": "None of the above",
"correct": "b"
},
{
"question": "174. What is the output of the following Java code?",
"code": "public class NestedElseIf174 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 25) {\n            if (x > 35) {\n                System.out.print(\"x is greater than 35\");\n            } else {\n                System.out.print(\"x is greater than 25 but not greater than 35\");\n            }\n        } else {\n            System.out.print(\"x is 25 or less\");\n        }\n    }\n}",
"a": "x is greater than 35",
"b": "x is greater than 25 but not greater than 35",
"c": "x is 25 or less",
"d": "None of the above",
"correct": "b"
},
{
"question": "175. What is the output of the following Java code?",
"code": "public class NestedElseIf175 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 10) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is even and greater than 10\");\n            } else {\n                System.out.print(\"x is odd and greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is 10 or less\");\n        }\n    }\n}",
"a": "x is even and greater than 10",
"b": "x is odd and greater than 10",
"c": "x is 10 or less",
"d": "None of the above",
"correct": "c"
},
{
"question": "176. What is the output of the following Java code?",
"code": "public class NestedElseIf176 {\n    public static void main(String[] args) {\n        int x = 22;\n        if (x >= 20) {\n            if (x < 25) {\n                System.out.print(\"x is between 20 and 25\");\n            } else {\n                System.out.print(\"x is 25 or more\");\n            }\n        } else {\n            System.out.print(\"x is less than 20\");\n        }\n    }\n}",
"a": "x is between 20 and 25",
"b": "x is 25 or more",
"c": "x is less than 20",
"d": "None of the above",
"correct": "a"
},
{
"question": "177. What is the output of the following Java code?",
"code": "public class NestedElseIf177 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is even and greater than 10\");\n            } else {\n                System.out.print(\"x is odd and greater than 10\");\n            }\n        } else {\n            System.out.print(\"x is 10 or less\");\n        }\n    }\n}",
"a": "x is even and greater than 10",
"b": "x is odd and greater than 10",
"c": "x is 10 or less",
"d": "None of the above",
"correct": "a"
},
{
"question": "178. What is the output of the following Java code?",
"code": "public class NestedElseIf178 {\n    public static void main(String[] args) {\n        int x = 19;\n        if (x >= 20) {\n            if (x % 2 == 0) {\n                System.out.print(\"x is even and 20 or more\");\n            } else {\n                System.out.print(\"x is odd and 20 or more\");\n            }\n        } else {\n            System.out.print(\"x is less than 20\");\n        }\n    }\n}",
"a": "x is even and 20 or more",
"b": "x is odd and 20 or more",
"c": "x is less than 20",
"d": "None of the above",
"correct": "c"
},
{
"question": "179. What is the output of the following Java code?",
"code": "public class NestedElseIf179 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 25) {\n            if (x > 35) {\n                System.out.print(\"x is greater than 35\");\n            } else if (x > 30) {\n                System.out.print(\"x is greater than 30 but not greater than 35\");\n            } else {\n                System.out.print(\"x is greater than 25 but 30 or less\");\n            }\n        } else {\n            System.out.print(\"x is 25 or less\");\n        }\n    }\n}",
"a": "x is greater than 35",
"b": "x is greater than 30 but not greater than 35",
"c": "x is greater than 25 but 30 or less",
"d": "x is 25 or less",
"correct": "c"
},
{
"question": "180. What is the output of the following Java code?",
"code": "public class NestedElseIf180 {\n    public static void main(String[] args) {\n        int x = 6;\n        if (x >= 5) {\n            if (x < 10) {\n                System.out.print(\"x is between 5 and 10\");\n            } else {\n                System.out.print(\"x is 10 or more\");\n            }\n        } else {\n            System.out.print(\"x is less than 5\");\n        }\n    }\n}",
"a": "x is between 5 and 10",
"b": "x is 10 or more",
"c": "x is less than 5",
"d": "None of the above",
"correct": "a"
},

{
"question": "181. What is the output of the following Java code?",
"code": "public class LogicalOperators191 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is greater than 5 and less than 10",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "182. What is the output of the following Java code?",
"code": "public class LogicalOperators192 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is greater than 10 or less than 5",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "183. What is the output of the following Java code?",
"code": "public class LogicalOperators193 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
"a": "num is not greater than 5",
"b": "num is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "184. What is the output of the following Java code?",
"code": "public class LogicalOperators194 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
"a": "x is greater than 5 and less than 10",
"b": "x is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "185. What is the output of the following Java code?",
"code": "public class LogicalOperators195 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
"a": "num is greater than 10 or less than 5",
"b": "num is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "186. What is the output of the following Java code?",
"code": "public class LogicalOperators196 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
"a": "x is not greater than 5",
"b": "x is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "187. What is the output of the following Java code?",
"code": "public class LogicalOperators197 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is greater than 5 and less than 10",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "188. What is the output of the following Java code?",
"code": "public class LogicalOperators198 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is greater than 10 or less than 5",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "189. What is the output of the following Java code?",
"code": "public class LogicalOperators199 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
"a": "num is not greater than 5",
"b": "num is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "190. What is the output of the following Java code?",
"code": "public class LogicalOperators200 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
"a": "x is greater than 5 and less than 10",
"b": "x is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "191. What is the output of the following Java code?",
"code": "public class LogicalOperators206 {\n    public static void main(String[] args) {\n        int num = 15;\n        if (num < 20 && num > 10) {\n            System.out.print(\"num is between 10 and 20\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is between 10 and 20",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "192. What is the output of the following Java code?",
"code": "public class LogicalOperators207 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x < 5 || x > 10) {\n            System.out.print(\"x is out of range\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is out of range",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "193. What is the output of the following Java code?",
"code": "public class LogicalOperators208 {\n    public static void main(String[] args) {\n        int num = 25;\n        if (num < 20 && num % 2 == 0) {\n            System.out.print(\"num is less than 20 and even\");\n        } else {\n            System.out.print(\"num is either not less than 20 or not even\");\n        }\n    }\n}",
"a": "num is less than 20 and even",
"b": "num is either not less than 20 or not even",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "194. What is the output of the following Java code?",
"code": "public class LogicalOperators209 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (!(x > 5) || x == 5) {\n            System.out.print(\"x is 5 or less\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
"a": "x is 5 or less",
"b": "x is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "195. What is the output of the following Java code?",
"code": "public class LogicalOperators210 {\n    public static void main(String[] args) {\n        int num = 9;\n        if (num >= 10 && num % 2 == 0) {\n            System.out.print(\"num is 10 or greater and even\");\n        } else {\n            System.out.print(\"num is less than 10 or not even\");\n        }\n    }\n}",
"a": "num is 10 or greater and even",
"b": "num is less than 10 or not even",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "199. What is the output of the following Java code?",
"code": "public class LogicalOperators211 {\n    public static void main(String[] args) {\n        int x = 11;\n        if (x > 10 && x % 2 == 1) {\n            System.out.print(\"x is greater than 10 and odd\");\n        } else {\n            System.out.print(\"x is 10 or less or even\");\n        }\n    }\n}",
"a": "x is greater than 10 and odd",
"b": "x is 10 or less or even",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "200. What is the output of the following Java code?",
"code": "public class LogicalOperators212 {\n    public static void main(String[] args) {\n        int num = 15;\n        if (num > 10 && num < 20) {\n            System.out.print(\"num is between 10 and 20\");\n        } else if (num >= 20 || num < 10) {\n            System.out.print(\"num is outside the range\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
"a": "num is between 10 and 20",
"b": "num is outside the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "201. What is the output of the following Java code?",
"code": "public class LogicalOperators213 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x < 10 && x % 2 == 0) {\n            System.out.print(\"x is less than 10 and even\");\n        } else {\n            System.out.print(\"x is either not less than 10 or not even\");\n        }\n    }\n}",
"a": "x is less than 10 and even",
"b": "x is either not less than 10 or not even",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "202. What is the output of the following Java code?",
"code": "public class LogicalOperators214 {\n    public static void main(String[] args) {\n        int num = 8;\n        if (num > 5 || num == 8) {\n            System.out.print(\"num is either greater than 5 or equal to 8\");\n        } else {\n            System.out.print(\"num is less than or equal to 5 and not equal to 8\");\n        }\n    }\n}",
"a": "num is either greater than 5 or equal to 8",
"b": "num is less than or equal to 5 and not equal to 8",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "203. What is the output of the following Java code?",
"code": "public class LogicalOperators215 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (!(x > 5) && x % 2 == 0) {\n            System.out.print(\"x is 4 or less and even\");\n        } else {\n            System.out.print(\"x is greater than 5 or not even\");\n        }\n    }\n}",
"a": "x is 4 or less and even",
"b": "x is greater than 5 or not even",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "204. What is the output of the following Java code?",
"code": "public class LogicalOperators216 {\n    public static void main(String[] args) {\n        int num = 20;\n        if (num % 2 == 0 && num < 30) {\n            System.out.print(\"num is even and less than 30\");\n        } else {\n            System.out.print(\"num is either odd or 30 or greater\");\n        }\n    }\n}",
"a": "num is even and less than 30",
"b": "num is either odd or 30 or greater",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "205. What is the output of the following Java code?",
"code": "public class LogicalOperators217 {\n    public static void main(String[] args) {\n        int x = 2;\n        if (x > 0 && x < 5 || x == 2) {\n            System.out.print(\"x is between 1 and 5 or x is 2\");\n        } else {\n            System.out.print(\"x is out of range\");\n        }\n    }\n}",
"a": "x is between 1 and 5 or x is 2",
"b": "x is out of range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "206. What is the output of the following Java code?",
"code": "public class LogicalOperators218 {\n    public static void main(String[] args) {\n        int num = 13;\n        if (num > 10 && num % 2 == 1) {\n            System.out.print(\"num is greater than 10 and odd\");\n        } else if (num <= 10 || num % 2 == 0) {\n            System.out.print(\"num is 10 or less or even\");\n        } else {\n            System.out.print(\"num is neither greater than 10 nor odd\");\n        }\n    }\n}",
"a": "num is greater than 10 and odd",
"b": "num is 10 or less or even",
"c": "num is neither greater than 10 nor odd",
"d": "Not applicable",
"correct": "a"
},
{
"question": "207. What is the output of the following Java code?",
"code": "public class LogicalOperators219 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0 || x > 10) {\n            System.out.print(\"x is either 0 or greater than 10\");\n        } else {\n            System.out.print(\"x is between 1 and 10\");\n        }\n    }\n}",
"a": "x is either 0 or greater than 10",
"b": "x is between 1 and 10",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "208. What is the output of the following Java code?",
"code": "public class LogicalOperators220 {\n    public static void main(String[] args) {\n        int num = 22;\n        if (num % 2 == 0 || num > 25) {\n            System.out.print(\"num is even or greater than 25\");\n        } else {\n            System.out.print(\"num is odd and 25 or less\");\n        }\n    }\n}",
"a": "num is even or greater than 25",
"b": "num is odd and 25 or less",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "209. What is the output of the following Java code?",
"code": "public class LogicalOperators221 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x < 10 && (x % 2 == 0 || x % 3 == 0)) {\n            System.out.print(\"x is less than 10 and divisible by 2 or 3\");\n        } else {\n            System.out.print(\"x is not less than 10 or not divisible by 2 or 3\");\n        }\n    }\n}",
"a": "x is less than 10 and divisible by 2 or 3",
"b": "x is not less than 10 or not divisible by 2 or 3",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "210. What is the output of the following Java code?",
"code": "public class LogicalOperators222 {\n    public static void main(String[] args) {\n        int num = 17;\n        if (num > 15 && num < 25 || num % 2 == 0) {\n            System.out.print(\"num is between 15 and 25 or even\");\n        } else {\n            System.out.print(\"num is either less than or equal to 15 or greater than or equal to 25 and odd\");\n        }\n    }\n}",
"a": "num is between 15 and 25 or even",
"b": "num is either less than or equal to 15 or greater than or equal to 25 and odd",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "211. What is the output of the following Java code?",
"code": "public class LogicalOperators223 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (!(x < 5) || x % 2 != 0) {\n            System.out.print(\"x is 5 or more or odd\");\n        } else {\n            System.out.print(\"x is less than 5 and even\");\n        }\n    }\n}",
"a": "x is 5 or more or odd",
"b": "x is less than 5 and even",
"c": "None of the above",
"d": "Not applicable",
"correct": "b"
},
{
"question": "212. What is the output of the following Java code?",
"code": "public class LogicalOperators224 {\n    public static void main(String[] args) {\n        int num = 30;\n        if (num > 25 && (num % 3 == 0 || num % 5 == 0)) {\n            System.out.print(\"num is greater than 25 and divisible by 3 or 5\");\n        } else {\n            System.out.print(\"num is 25 or less or not divisible by 3 or 5\");\n        }\n    }\n}",
"a": "num is greater than 25 and divisible by 3 or 5",
"b": "num is 25 or less or not divisible by 3 or 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "213. What is the output of the following Java code?",
"code": "public class LogicalOperators213 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
"a": "num is greater than 10 or less than 5",
"b": "num is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "214. What is the output of the following Java code?",
"code": "public class LogicalOperators214 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
"a": "x is not greater than 5",
"b": "x is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "215. What is the output of the following Java code?",
"code": "public class LogicalOperators215 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is greater than 5 and less than 10",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "216. What is the output of the following Java code?",
"code": "public class LogicalOperators216 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is greater than 10 or less than 5",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "217. What is the output of the following Java code?",
"code": "public class LogicalOperators217 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
"a": "num is not greater than 5",
"b": "num is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "218. What is the output of the following Java code?",
"code": "public class LogicalOperators218 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
"a": "x is greater than 5 and less than 10",
"b": "x is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "219. What is the output of the following Java code?",
"code": "public class LogicalOperators219 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
"a": "num is greater than 10 or less than 5",
"b": "num is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "220. What is the output of the following Java code?",
"code": "public class LogicalOperators220 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
"a": "x is not greater than 5",
"b": "x is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "221. What is the output of the following Java code?",
"code": "public class LogicalOperators221 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is greater than 5 and less than 10",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "222. What is the output of the following Java code?",
"code": "public class LogicalOperators222 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is greater than 10 or less than 5",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "223. What is the output of the following Java code?",
"code": "public class LogicalOperators223 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
"a": "num is not greater than 5",
"b": "num is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "224. What is the output of the following Java code?",
"code": "public class LogicalOperators224 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
"a": "x is greater than 5 and less than 10",
"b": "x is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "225. What is the output of the following Java code?",
"code": "public class LogicalOperators225 {\n    public static void main(String[] args) {\n        int num = 12;\n        if (num > 10 || num < 5) {\n            System.out.print(\"num is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"num is within the range\");\n        }\n    }\n}",
"a": "num is greater than 10 or less than 5",
"b": "num is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "226. What is the output of the following Java code?",
"code": "public class LogicalOperators226 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (!(x > 5)) {\n            System.out.print(\"x is not greater than 5\");\n        } else {\n            System.out.print(\"x is greater than 5\");\n        }\n    }\n}",
"a": "x is not greater than 5",
"b": "x is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "227. What is the output of the following Java code?",
"code": "public class LogicalOperators227 {\n    public static void main(String[] args) {\n        int num = 7;\n        if (num > 5 && num < 10) {\n            System.out.print(\"num is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"num is not in the range\");\n        }\n    }\n}",
"a": "num is greater than 5 and less than 10",
"b": "num is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "228. What is the output of the following Java code?",
"code": "public class LogicalOperators228 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x > 10 || x < 5) {\n            System.out.print(\"x is greater than 10 or less than 5\");\n        } else {\n            System.out.print(\"x is within the range\");\n        }\n    }\n}",
"a": "x is greater than 10 or less than 5",
"b": "x is within the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "229. What is the output of the following Java code?",
"code": "public class LogicalOperators229 {\n    public static void main(String[] args) {\n        int num = 3;\n        if (!(num > 5)) {\n            System.out.print(\"num is not greater than 5\");\n        } else {\n            System.out.print(\"num is greater than 5\");\n        }\n    }\n}",
"a": "num is not greater than 5",
"b": "num is greater than 5",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "230. What is the output of the following Java code?",
"code": "public class LogicalOperators230 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 5 && x < 10) {\n            System.out.print(\"x is greater than 5 and less than 10\");\n        } else {\n            System.out.print(\"x is not in the range\");\n        }\n    }\n}",
"a": "x is greater than 5 and less than 10",
"b": "x is not in the range",
"c": "None of the above",
"d": "Not applicable",
"correct": "a"
},
{
"question": "232. What will be the output of the following Java program?",
"code": "class J401 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "else2",
"d": "Not applicable",
"correct": "c"
},
{
"question": "233. What is the output of the following Java code?",
"code": "class J402 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "else2",
"d": "Not applicable",
"correct": "b"
},
{
"question": "234. What will be the output of the following Java program?",
"code": "class J403 {\n    public static void main(String[] args) {\n        if (true)\n            if (true)\n                System.out.println(\"inner if\");\n            else if (false)\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "Not applicable",
"d": "No output",
"correct": "a"
},
{
"question": "235. What is the output of the following Java code?",
"code": "class J404 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (true)\n                System.out.println(\"else1\");\n        else\n            System.out.println(\"else2\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "Not applicable",
"d": "No output",
"correct": "b"
},
{
"question": "236. What will be the output of the following Java program?",
"code": "class J405 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (false)\n                System.out.println(\"else1\");\n            else\n                System.out.println(\"else2\");\n        else\n            System.out.println(\"else3\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "else2",
"d": "else3",
"correct": "c"
},
{
"question": "237. What is the output of the following Java code?",
"code": "class J406 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else if (true)\n                System.out.println(\"else1\");\n            else\n                System.out.println(\"else2\");\n        else\n            System.out.println(\"else3\");\n    }\n}",
"a": "inner if",
"b": "else1",
"c": "else2",
"d": "else3",
"correct": "b"
},
{
"question": "238. What will be the output of the following Java program?",
"code": "class J407 {\n    public static void main(String[] args) {\n        if (true)\n            if (false)\n                System.out.println(\"inner if\");\n            else\n                if (true)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
"a": "inner if",
"b": "inner else",
"c": "inner else2",
"d": "Not applicable",
"correct": "b"
},
{
"question": "239. What is the output of the following Java code?",
"code": "class J408 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (true)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
"a": "inner if",
"b": "inner else",
"c": "inner else2",
"d": "outer else",
"correct": "d"
},
{
"question": "240. What will be the output of the following Java program?",
"code": "class J409 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (false)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            System.out.println(\"outer else\");\n    }\n}",
"a": "inner if",
"b": "inner else",
"c": "inner else2",
"d": "outer else",
"correct": "d"
},
{
"question": "241. What is the output of the following Java code?",
"code": "class J410 {\n    public static void main(String[] args) {\n        if (false)\n            if (true)\n                System.out.println(\"inner if\");\n            else\n                if (false)\n                    System.out.println(\"inner else\");\n                else\n                    System.out.println(\"inner else2\");\n        else\n            if (true)\n                System.out.println(\"outer else\");\n    }\n}",
"a": "inner if",
"b": "inner else",
"c": "inner else2",
"d": "outer else",
"correct": "d"
},
{
"question": "242. What is the output of the following Java code?",
"code": "class L411 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from last else if",
"d": "Not applicable",
"correct": "a"
},
{
"question": "243. What is the output of the following Java code?",
"code": "class L412 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from last else if",
"d": "Not applicable",
"correct": "a"
},
{
"question": "244. What is the output of the following Java code?",
"code": "class L413 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from last else if",
"d": "Not applicable",
"correct": "b"
},
{
"question": "245. What is the output of the following Java code?",
"code": "class L414 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else if (true) {\n            System.out.println(\"from last else if\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from last else if",
"d": "Not applicable",
"correct": "c"
},
{
"question": "246. What is the output of the following Java code?",
"code": "class L415 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from else\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from else",
"c": "from nested else",
"d": "Not applicable",
"correct": "a"
},
{
"question": "247. What is the output of the following Java code?",
"code": "class L416 {\n    public static void main(String[] args) {\n        if (true) {\n            if (true) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
"a": "from inner if",
"b": "from inner else",
"c": "from outer else",
"d": "Not applicable",
"correct": "a"
},
{
"question": "248. What is the output of the following Java code?",
"code": "class L417 {\n    public static void main(String[] args) {\n        if (false) {\n            if (true) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
"a": "from inner if",
"b": "from inner else",
"c": "from outer else",
"d": "Not applicable",
"correct": "c"
},
{
"question": "249. What is the output of the following Java code?",
"code": "class L418 {\n    public static void main(String[] args) {\n        if (false) {\n            if (false) {\n                System.out.println(\"from inner if\");\n            } else {\n                System.out.println(\"from inner else\");\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
"a": "from inner if",
"b": "from inner else",
"c": "from outer else",
"d": "Not applicable",
"correct": "c"
},
{
"question": "250. What is the output of the following Java code?",
"code": "class L419 {\n    public static void main(String[] args) {\n        if (true) {\n            if (false) {\n                System.out.println(\"from inner if\");\n            } else {\n                if (true) {\n                    System.out.println(\"from inner else\");\n                } else {\n                    System.out.println(\"from nested else\");\n                }\n            }\n        } else {\n            System.out.println(\"from outer else\");\n        }\n    }\n}",
"a": "from inner if",
"b": "from inner else",
"c": "from nested else",
"d": "from outer else",
"correct": "b"
},
                            

{
"question": "251. What is the output of the following Java code?",
"code": "class L438 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "a"
},
{
"question": "252. What is the output of the following Java code?",
"code": "class L439 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "b"
},
{
"question": "253. What is the output of the following Java code?",
"code": "class L440 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "c"
},
{
"question": "254. What is the output of the following Java code?",
"code": "class L441 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "from nested else",
"d": "No output",
"correct": "a"
},
{
"question": "255. What is the output of the following Java code?",
"code": "class L442 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "Compilation error",
"d": "No output",
"correct": "d"
},
{
"question": "256. What is the output of the following Java code?",
"code": "class L443 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "257. What is the output of the following Java code?",
"code": "class L444 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "258. What is the output of the following Java code?",
"code": "class L445 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            } else {\n                System.out.println(\"from nested else\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "from nested else",
"d": "No output",
"correct": "c"
},
{
"question": "259. What is the output of the following Java code?",
"code": "class L446 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "a"
},
{
"question": "260. What is the output of the following Java code?",
"code": "class L447 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (true) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "b"
},
{
"question": "261. What is the output of the following Java code?",
"code": "class L448 {\n    public static void main(String[] args) {\n        if (false) {\n            System.out.println(\"from if\");\n        } else if (false) {\n            System.out.println(\"from else if\");\n        } else {\n            System.out.println(\"from else\");\n        }\n    }\n}",
"a": "from if",
"b": "from else if",
"c": "from else",
"d": "No output",
"correct": "c"
},
{
"question": "262. What is the output of the following Java code?",
"code": "class L449 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (false) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "263. What is the output of the following Java code?",
"code": "class L450 {\n    public static void main(String[] args) {\n        if (true) {\n            System.out.println(\"from if\");\n        } else {\n            if (true) {\n                System.out.println(\"from nested if\");\n            }\n        }\n    }\n}",
"a": "from if",
"b": "from nested if",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "264. What is the output of the following Java code?",
"code": "class L451 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 8\");\n        }\n    }\n}",
"a": "x is greater than 5",
"b": "x is greater than 8",
"c": "x is not greater than 8",
"d": "No output",
"correct": "a"
},
{
"question": "265. What is the output of the following Java code?",
"code": "class L452 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 8\");\n        }\n    }\n}",
"a": "x is greater than 5",
"b": "x is greater than 8",
"c": "x is not greater than 8",
"d": "No output",
"correct": "a"
},

{
"question": "266. What is the output of the following Java code?",
"code": "class L453 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
"a": "a is less than 10",
"b": "a is less than 20",
"c": "a is 20 or more",
"d": "No output",
"correct": "a"
},
{
"question": "267. What is the output of the following Java code?",
"code": "class L454 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
"a": "a is less than 10",
"b": "a is less than 20",
"c": "a is 20 or more",
"d": "No output",
"correct": "b"
},
{
"question": "268. What is the output of the following Java code?",
"code": "class L455 {\n    public static void main(String[] args) {\n        int a = 25;\n        if (a < 10) {\n            System.out.println(\"a is less than 10\");\n        } else if (a < 20) {\n            System.out.println(\"a is less than 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
"a": "a is less than 10",
"b": "a is less than 20",
"c": "a is 20 or more",
"d": "No output",
"correct": "c"
},
{
"question": "269. What is the output of the following Java code?",
"code": "class L456 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5 && a < 15) {\n            System.out.println(\"a is between 5 and 15\");\n        } else {\n            System.out.println(\"a is not between 5 and 15\");\n        }\n    }\n}",
"a": "a is between 5 and 15",
"b": "a is not between 5 and 15",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "270. What is the output of the following Java code?",
"code": "class L457 {\n    public static void main(String[] args) {\n        int a = 20;\n        if (a > 15 || a < 10) {\n            System.out.println(\"a is either greater than 15 or less than 10\");\n        } else {\n            System.out.println(\"a is between 10 and 15\");\n        }\n    }\n}",
"a": "a is either greater than 15 or less than 10",
"b": "a is between 10 and 15",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "271. What is the output of the following Java code?",
"code": "class L458 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5) {\n            if (a < 15) {\n                System.out.println(\"a is between 5 and 15\");\n            }\n        }\n    }\n}",
"a": "a is between 5 and 15",
"b": "No output",
"c": "Compilation error",
"d": "Runtime error",
"correct": "a"
},
{
"question": "272. What is the output of the following Java code?",
"code": "class L459 {\n    public static void main(String[] args) {\n        int a = 30;\n        if (a > 25) {\n            System.out.println(\"a is greater than 25\");\n        } else if (a > 20) {\n            System.out.println(\"a is greater than 20\");\n        } else {\n            System.out.println(\"a is 20 or less\");\n        }\n    }\n}",
"a": "a is greater than 25",
"b": "a is greater than 20",
"c": "a is 20 or less",
"d": "No output",
"correct": "a"
},
{
"question": "273. What is the output of the following Java code?",
"code": "class L460 {\n    public static void main(String[] args) {\n        int a = 20;\n        if (a > 25) {\n            System.out.println(\"a is greater than 25\");\n        } else if (a > 15) {\n            System.out.println(\"a is greater than 15\");\n        } else {\n            System.out.println(\"a is 15 or less\");\n        }\n    }\n}",
"a": "a is greater than 25",
"b": "a is greater than 15",
"c": "a is 15 or less",
"d": "No output",
"correct": "b"
},
{
"question": "274. What is the output of the following Java code?",
"code": "class L461 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a == 10) {\n            System.out.println(\"a is 10\");\n        } else if (a != 10) {\n            System.out.println(\"a is not 10\");\n        } else {\n            System.out.println(\"Invalid value\");\n        }\n    }\n}",
"a": "a is 10",
"b": "a is not 10",
"c": "Invalid value",
"d": "No output",
"correct": "a"
},
{
"question": "275. What is the output of the following Java code?",
"code": "class L462 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a != 10) {\n            System.out.println(\"a is not 10\");\n        } else {\n            System.out.println(\"a is 10\");\n        }\n    }\n}",
"a": "a is 10",
"b": "a is not 10",
"c": "Invalid value",
"d": "No output",
"correct": "a"
},
{
"question": "276. What is the output of the following Java code?",
"code": "class L463 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a > 5 && a < 10) {\n            System.out.println(\"a is between 5 and 10\");\n        } else if (a == 10) {\n            System.out.println(\"a is 10\");\n        } else {\n            System.out.println(\"a is not in the range\");\n        }\n    }\n}",
"a": "a is between 5 and 10",
"b": "a is 10",
"c": "a is not in the range",
"d": "No output",
"correct": "b"
},
{
"question": "277. What is the output of the following Java code?",
"code": "class L464 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a < 10) {\n            if (a > 0) {\n                System.out.println(\"a is positive and less than 10\");\n            }\n        }\n    }\n}",
"a": "a is positive and less than 10",
"b": "No output",
"c": "Compilation error",
"d": "Runtime error",
"correct": "a"
},
{
"question": "278. What is the output of the following Java code?",
"code": "class L465 {\n    public static void main(String[] args) {\n        int a = 30;\n        if (a < 25) {\n            System.out.println(\"a is less than 25\");\n        } else {\n            System.out.println(\"a is 25 or more\");\n        }\n    }\n}",
"a": "a is less than 25",
"b": "a is 25 or more",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "279. What is the output of the following Java code?",
"code": "class L466 {\n    public static void main(String[] args) {\n        int a = 5;\n        if (a % 2 == 0) {\n            System.out.println(\"a is even\");\n        } else {\n            System.out.println(\"a is odd\");\n        }\n    }\n}",
"a": "a is even",
"b": "a is odd",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "280. What is the output of the following Java code?",
"code": "class L467 {\n    public static void main(String[] args) {\n        int a = 4;\n        if (a % 2 == 0) {\n            System.out.println(\"a is even\");\n        } else {\n            System.out.println(\"a is odd\");\n        }\n    }\n}",
"a": "a is even",
"b": "a is odd",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "281. What is the output of the following Java code?",
"code": "class L468 {\n    public static void main(String[] args) {\n        int a = 7;\n        if (a > 10) {\n            System.out.println(\"a is greater than 10\");\n        } else if (a == 7) {\n            System.out.println(\"a is 7\");\n        } else {\n            System.out.println(\"a is not greater than 10 and not 7\");\n        }\n    }\n}",
"a": "a is greater than 10",
"b": "a is 7",
"c": "a is not greater than 10 and not 7",
"d": "No output",
"correct": "b"
},
{
"question": "282. What is the output of the following Java code?",
"code": "class L469 {\n    public static void main(String[] args) {\n        int a = 10;\n        if (a < 5 || a > 15) {\n            System.out.println(\"a is out of range\");\n        } else {\n            System.out.println(\"a is within range\");\n        }\n    }\n}",
"a": "a is out of range",
"b": "a is within range",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "283. What is the output of the following Java code?",
"code": "class L470 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a <= 10) {\n            System.out.println(\"a is 10 or less\");\n        } else if (a <= 20) {\n            System.out.println(\"a is between 10 and 20\");\n        } else {\n            System.out.println(\"a is greater than 20\");\n        }\n    }\n}",
"a": "a is 10 or less",
"b": "a is between 10 and 20",
"c": "a is greater than 20",
"d": "No output",
"correct": "b"
},
{
"question": "284. What is the output of the following Java code?",
"code": "class L471 {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 10;\n        if (a < b) {\n            System.out.println(\"a is less than b\");\n        } else {\n            System.out.println(\"a is not less than b\");\n        }\n    }\n}",
"a": "a is less than b",
"b": "a is not less than b",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "285. What is the output of the following Java code?",
"code": "class L472 {\n    public static void main(String[] args) {\n        int a = 12;\n        int b = 8;\n        if (a > b) {\n            if (a % 2 == 0) {\n                System.out.println(\"a is even and greater than b\");\n            } else {\n                System.out.println(\"a is odd and greater than b\");\n            }\n        }\n    }\n}",
"a": "a is even and greater than b",
"b": "a is odd and greater than b",
"c": "a is even and less than b",
"d": "No output",
"correct": "a"
},
{
"question": "286. What is the output of the following Java code?",
"code": "class L473 {\n    public static void main(String[] args) {\n        int a = 18;\n        if (a < 15) {\n            System.out.println(\"a is less than 15\");\n        } else if (a < 20) {\n            System.out.println(\"a is between 15 and 20\");\n        } else {\n            System.out.println(\"a is 20 or more\");\n        }\n    }\n}",
"a": "a is less than 15",
"b": "a is between 15 and 20",
"c": "a is 20 or more",
"d": "No output",
"correct": "b"
},
{
"question": "287. What is the output of the following Java code?",
"code": "class L474 {\n    public static void main(String[] args) {\n        int a = 5;\n        int b = 7;\n        if (a > b) {\n            System.out.println(\"a is greater than b\");\n        } else if (a < b) {\n            System.out.println(\"a is less than b\");\n        } else {\n            System.out.println(\"a is equal to b\");\n        }\n    }\n}",
"a": "a is greater than b",
"b": "a is less than b",
"c": "a is equal to b",
"d": "No output",
"correct": "b"
},
{
"question": "288. What is the output of the following Java code?",
"code": "class L475 {\n    public static void main(String[] args) {\n        int a = 12;\n        int b = 12;\n        if (a == b) {\n            System.out.println(\"a is equal to b\");\n        } else {\n            System.out.println(\"a is not equal to b\");\n        }\n    }\n}",
"a": "a is equal to b",
"b": "a is not equal to b",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "289. What is the output of the following Java code?",
"code": "class L476 {\n    public static void main(String[] args) {\n        int a = 4;\n        if (a >= 5) {\n            System.out.println(\"a is 5 or more\");\n        } else {\n            System.out.println(\"a is less than 5\");\n        }\n    }\n}",
"a": "a is 5 or more",
"b": "a is less than 5",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "290. What is the output of the following Java code?",
"code": "class L477 {\n    public static void main(String[] args) {\n        int a = 8;\n        if (a % 2 == 0) {\n            if (a % 4 == 0) {\n                System.out.println(\"a is divisible by 4\");\n            } else {\n                System.out.println(\"a is divisible by 2 but not by 4\");\n            }\n        } else {\n            System.out.println(\"a is not divisible by 2\");\n        }\n    }\n}",
"a": "a is divisible by 4",
"b": "a is divisible by 2 but not by 4",
"c": "a is not divisible by 2",
"d": "No output",
"correct": "a"
},
{
"question": "291. What is the output of the following Java code?",
"code": "class L478 {\n    public static void main(String[] args) {\n        int a = 9;\n        if (a % 3 == 0) {\n            System.out.println(\"a is divisible by 3\");\n        } else {\n            System.out.println(\"a is not divisible by 3\");\n        }\n    }\n}",
"a": "a is divisible by 3",
"b": "a is not divisible by 3",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "292. What is the output of the following Java code?",
"code": "class L479 {\n    public static void main(String[] args) {\n        int a = 14;\n        if (a % 2 == 0 && a % 7 == 0) {\n            System.out.println(\"a is divisible by both 2 and 7\");\n        } else {\n            System.out.println(\"a is not divisible by both 2 and 7\");\n        }\n    }\n}",
"a": "a is divisible by both 2 and 7",
"b": "a is not divisible by both 2 and 7",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "293. What is the output of the following Java code?",
"code": "class L480 {\n    public static void main(String[] args) {\n        int a = 2;\n        int b = 5;\n        if (a + b == 7) {\n            System.out.println(\"Sum is 7\");\n        } else {\n            System.out.println(\"Sum is not 7\");\n        }\n    }\n}",
"a": "Sum is 7",
"b": "Sum is not 7",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "294. What is the output of the following Java code?",
"code": "class L481 {\n    public static void main(String[] args) {\n        int a = 6;\n        int b = 2;\n        if (a / b == 3) {\n            System.out.println(\"Division result is 3\");\n        } else {\n            System.out.println(\"Division result is not 3\");\n        }\n    }\n}",
"a": "Division result is 3",
"b": "Division result is not 3",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "295. What is the output of the following Java code?",
"code": "class L482 {\n    public static void main(String[] args) {\n        int a = 3;\n        int b = 2;\n        if (a * b == 6) {\n            System.out.println(\"Multiplication result is 6\");\n        } else {\n            System.out.println(\"Multiplication result is not 6\");\n        }\n    }\n}",
"a": "Multiplication result is 6",
"b": "Multiplication result is not 6",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "296. What is the output of the following Java code?",
"code": "class L483 {\n    public static void main(String[] args) {\n        int a = 15;\n        if (a % 5 == 0) {\n            System.out.println(\"a is divisible by 5\");\n        } else {\n            System.out.println(\"a is not divisible by 5\");\n        }\n    }\n}",
"a": "a is divisible by 5",
"b": "a is not divisible by 5",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "297. What is the output of the following Java code?",
"code": "class L484 {\n    public static void main(String[] args) {\n        int a = 8;\n        if (a % 2 != 0) {\n            System.out.println(\"a is odd\");\n        } else {\n            System.out.println(\"a is even\");\n        }\n    }\n}",
"a": "a is odd",
"b": "a is even",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "298. What is the output of the following Java code?",
"code": "class L485 {\n    public static void main(String[] args) {\n        int a = 7;\n        if (a > 10 && a < 20) {\n            System.out.println(\"a is between 10 and 20\");\n        } else {\n            System.out.println(\"a is not in the range\");\n        }\n    }\n}",
"a": "a is between 10 and 20",
"b": "a is not in the range",
"c": "Compilation error",
"d": "No output",
"correct": "b"
},
{
"question": "299. What is the output of the following Java code?",
"code": "class L486 {\n    public static void main(String[] args) {\n        int a = 13;\n        if (a % 2 == 1) {\n            System.out.println(\"a is odd\");\n        } else {\n            System.out.println(\"a is even\");\n        }\n    }\n}",
"a": "a is odd",
"b": "a is even",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},
{
"question": "300. What is the output of the following Java code?",
"code": "class L487 {\n    public static void main(String[] args) {\n        int a = 6;\n        if (a % 3 == 0 && a % 2 == 0) {\n            System.out.println(\"a is divisible by both 3 and 2\");\n        } else {\n            System.out.println(\"a is not divisible by both 3 and 2\");\n        }\n    }\n}",
"a": "a is divisible by both 3 and 2",
"b": "a is not divisible by both 3 and 2",
"c": "Compilation error",
"d": "No output",
"correct": "a"
},

{
    "question": "301. What is the output of the following Java code?",
    "code": "class L463 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 15",
    "c": "x is greater than 8",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "302. What is the output of the following Java code?",
    "code": "class L464 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 15",
    "c": "x is greater than 8",
    "d": "Not applicable",
    "correct": "c"
},
{
    "question": "303. What is the output of the following Java code?",
    "code": "class L465 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is not greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is not greater than 5",
    "c": "x is greater than 8",
    "d": "Not applicable",
    "correct": "d"
},
{
    "question": "304. What is the output of the following Java code?",
    "code": "class L466 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (\n\nx > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 15\");\n        } else {\n            System.out.println(\"x is not greater than 5, 15, or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 15",
    "c": "x is not greater than 5 or 15",
    "d": "Not applicable",
    "correct": "d"
},
{
    "question": "305. What is the output of the following Java code?",
    "code": "class L467 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "Not applicable",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "306. What is the output of the following Java code?",
    "code": "class L468 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "Not applicable",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "307. What is the output of the following Java code?",
    "code": "class L469 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "No output",
    "d": "Not applicable",
    "correct": "c"
},
{
    "question": "308. What is the output of the following Java code?",
    "code": "class L470 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "No output",
    "c": "Not applicable",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "309. What is the output of the following Java code?",
    "code": "class L471 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "No output",
    "c": "Not applicable",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": "310. What is the output of the following Java code?",
    "code": "class L472 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 5 or 8",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "311. What is the output of the following Java code?",
    "code": "class L473 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 5 or 8",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "312. What is the output of the following Java code?",
    "code": "class L474 {\n    public static void main(String[] args) {\n        int x = 4;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 8) {\n            System.out.println(\"x is greater than 8\");\n        } else {\n            System.out.println(\"x is not greater than 5 or 8\");\n        }\n    }\n}",
    "a": "x is greater than 5",
    "b": "x is greater than 8",
    "c": "x is not greater than 5 or 8",
    "d": "Not applicable",
    "correct": "c"
},

    {
        "question": "313. What is the output of the following Java code?",
        "code": "class L475 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x < 10) {\n            System.out.println(\"x is less than 10\");\n        } else if (x == 12) {\n            System.out.println(\"x is equal to 12\");\n        } else {\n            System.out.println(\"x is neither less than 10 nor equal to 12\");\n        }\n    }\n}",
        "a": "x is less than 10",
        "b": "x is equal to 12",
        "c": "x is neither less than 10 nor equal to 12",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "314. What is the output of the following Java code?",
        "code": "class L476 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x > 0) {\n            System.out.println(\"x is positive\");\n        } else if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else {\n            System.out.println(\"x is negative\");\n        }\n    }\n}",
        "a": "x is positive",
        "b": "x is zero",
        "c": "x is negative",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "315. What is the output of the following Java code?",
        "code": "class L477 {\n    public static void main(String[] args) {\n        int x = -5;\n        if (x < 0) {\n            System.out.println(\"x is negative\");\n        } else if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else {\n            System.out.println(\"x is positive\");\n        }\n    }\n}",
        "a": "x is negative",
        "b": "x is zero",
        "c": "x is positive",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "316. What is the output of the following Java code?",
        "code": "class L478 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is odd\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is odd",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "317. What is the output of the following Java code?",
        "code": "class L479 {\n    public static void main(String[] args) {\n        int x = 17;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is odd\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is odd",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "318. What is the output of the following Java code?",
        "code": "class L480 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 20) {\n            System.out.println(\"x is less than 20\");\n        }\n    }\n}",
        "a": "x is less than 20",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "319. What is the output of the following Java code?",
        "code": "class L481 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x > 25) {\n            System.out.println(\"x is greater than 25\");\n        }\n    }\n}",
        "a": "x is greater than 25",
        "b": "No output",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "320. What is the output of the following Java code?",
        "code": "class L482 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x < 5) {\n            System.out.println(\"x is less than 5\");\n        } else if (x == 10) {\n            System.out.println(\"x is equal to 10\");\n        } else {\n            System.out.println(\"x is neither less than 5 nor equal to 10\");\n        }\n    }\n}",
        "a": "x is less than 5",
        "b": "x is equal to 10",
        "c": "x is neither less than 5 nor equal to 10",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "321. What is the output of the following Java code?",
        "code": "class L483 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x == 10) {\n            System.out.println(\"x is equal to 10\");\n        } else if (x == 15) {\n            System.out.println(\"x is equal to 15\");\n        } else {\n            System.out.println(\"x is neither 10 nor 15\");\n        }\n    }\n}",
        "a": "x is equal to 10",
        "b": "x is equal to 15",
        "c": "x is neither 10 nor 15",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "322. What is the output of the following Java code?",
        "code": "class L484 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        }\n    }\n}",
        "a": "x is greater than 15",
        "b": "x is greater than 10",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "323. What is the output of the following Java code?",
        "code": "class L485 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x > 20) {\n            System.out.println(\"x is greater than 20\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is not greater than 15\");\n        }\n    }\n}",
        "a": "x is greater than 20",
        "b": "x is greater than 15",
        "c": "x is not greater than 15",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "324. What is the output of the following Java code?",
        "code": "class L486 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is 5 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 5",
        "c": "x is 5 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "325. What is the output of the following Java code?",
        "code": "class L487 {\n    public static void main(String[] args) {\n        int x = 6;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else {\n            System.out.println(\"x is 5 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 5",
        "c": "x is 5 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "326. What is the output of the following Java code?",
        "code": "class L488 {\n    public static void main(String[] args) {\n        int x = 14;\n        if (x > 10) {\n            System.out.println(\"x is greater than 10\");\n        } else if (x > 15) {\n            System.out.println(\"x is greater than 15\");\n        } else {\n            System.out.println(\"x is 10 or less\");\n        }\n    }\n}",
        "a": "x is greater than 10",
        "b": "x is greater than 15",
        "c": "x is 10 or less",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "327. What is the output of the following Java code?",
        "code": "class L489 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x >= 20) {\n            System.out.println(\"x is 20 or more\");\n        } else {\n            System.out.println(\"x is less than 20\");\n        }\n    }\n}",
        "a": "x is 20 or more",
        "b": "x is less than 20",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "328. What is the output of the following Java code?",
        "code": "class L490 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (x > 5) {\n            System.out.println(\"x is greater than 5\");\n        } else if (x > 2) {\n            System.out.println(\"x is greater than 2\");\n        } else {\n            System.out.println(\"x is 2 or less\");\n        }\n    }\n}",
        "a": "x is greater than 5",
        "b": "x is greater than 2",
        "c": "x is 2 or less",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "329. What is the output of the following Java code?",
        "code": "class L491 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x < 5) {\n            System.out.println(\"x is less than 5\");\n        } else if (x < 10) {\n            System.out.println(\"x is less than 10\");\n        } else {\n            System.out.println(\"x is 10 or more\");\n        }\n    }\n}",
        "a": "x is less than 5",
        "b": "x is less than 10",
        "c": "x is 10 or more",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "330. What is the output of the following Java code?",
        "code": "class L492 {\n    public static void main(String[] args) {\n        int x = 13;\n        if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else if (x % 2 == 0) {\n            System.out.println(\"x is divisible by 2\");\n        } else {\n            System.out.println(\"x is not divisible by 2 or 3\");\n        }\n    }\n}",
        "a": "x is divisible by 3",
        "b": "x is divisible by 2",
        "c": "x is not divisible by 2 or 3",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "331. What is the output of the following Java code?",
        "code": "class L493 {\n    public static void main(String[] args) {\n        int x = 6;\n        if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is not divisible by 2 or 3\");\n        }\n    }\n}",
        "a": "x is even",
        "b": "x is divisible by 3",
        "c": "x is not divisible by 2 or 3",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "332. What is the output of the following Java code?",
        "code": "class L494 {\n    public static void main(String[] args) {\n        int x = 9;\n        if (x % 2 != 0) {\n            System.out.println(\"x is odd\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is neither odd nor divisible by 3\");\n        }\n    }\n}",
        "a": "x is odd",
        "b": "x is divisible by 3",
        "c": "x is neither odd nor divisible by 3",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "333. What is the output of the following Java code?",
        "code": "class L495 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x == 5) {\n            System.out.println(\"x is 5\");\n        } else if (x != 5) {\n            System.out.println(\"x is not 5\");\n        } else {\n            System.out.println(\"x is something else\");\n        }\n    }\n}",
        "a": "x is 5",
        "b": "x is not 5",
        "c": "x is something else",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "334. What is the output of the following Java code?",
        "code": "class L496 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0) {\n            System.out.println(\"x is zero\");\n        } else if (x != 0) {\n            System.out.println(\"x is not zero\");\n        } else {\n            System.out.println(\"x is something else\");\n        }\n    }\n}",
        "a": "x is zero",
        "b": "x is not zero",
        "c": "x is something else",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "335. What is the output of the following Java code?",
        "code": "class L497 {\n    public static void main(String[] args) {\n        int x = 11;\n        if (x % 5 == 0) {\n            System.out.println(\"x is divisible by 5\");\n        } else if (x % 2 == 0) {\n            System.out.println(\"x is even\");\n        } else {\n            System.out.println(\"x is not divisible by 5 or even\");\n        }\n    }\n}",
        "a": "x is divisible by 5",
        "b": "x is even",
        "c": "x is not divisible by 5 or even",
        "d": "Not applicable",
        "correct": "c"
    },
    {
        "question": "336. What is the output of the following Java code?",
        "code": "class L498 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x % 4 == 0) {\n            System.out.println(\"x is divisible by 4\");\n        } else {\n            System.out.println(\"x is not divisible by 4\");\n        }\n    }\n}",
        "a": "x is divisible by 4",
        "b": "x is not divisible by 4",
        "c": "Not applicable",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "337. What is the output of the following Java code?",
        "code": "class L499 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x % 6 == 0) {\n            System.out.println(\"x is divisible by 6\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is not divisible by 3 or 6\");\n        }\n    }\n}",
        "a": "x is divisible by 6",
        "b": "x is divisible by 3",
        "c": "x is not divisible by 3 or 6",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "338. What is the output of the following Java code?",
        "code": "class L500 {\n    public static void main(String[] args) {\n        int x = 2;\n        if (x == 1) {\n            System.out.println(\"x is 1\");\n        } else if (x == 2) {\n            System.out.println(\"x is 2\");\n        } else {\n            System.out.println(\"x is neither 1 nor 2\");\n        }\n    }\n}",
        "a": "x is 1",
        "b": "x is 2",
        "c": "x is neither 1 nor 2",
        "d": "Not applicable",
        "correct": "b"
    },
    {
        "question": "339. What is the output of the following Java code?",
        "code": "class L501 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x % 4 == 0) {\n            System.out.println(\"x is divisible by 4\");\n        } else if (x % 5 == 0) {\n            System.out.println(\"x is divisible by 5\");\n        } else {\n            System.out.println(\"x is not divisible by 4 or 5\");\n        }\n    }\n}",
        "a": "x is divisible by 4",
        "b": "x is divisible by 5",
        "c": "x is not divisible by 4 or 5",
        "d": "Not applicable",
        "correct": "a"
    },
    {
        "question": "340. What is the output of the following Java code?",
        "code": "class L502 {\n    public static void main(String[] args) {\n        int x = 21;\n        if (x % 7 == 0) {\n            System.out.println(\"x is divisible by 7\");\n        } else if (x % 3 == 0) {\n            System.out.println(\"x is divisible by 3\");\n        } else {\n            System.out.println(\"x is neither divisible by 7 nor 3\");\n        }\n    }\n}",
        "a": "x is divisible by 7",
        "b": "x is divisible by 3",
        "c": "x is neither divisible by 7 nor 3",
        "d": "Not applicable",
        "correct": "a"
    },
    
{
"question": "341. What is the output of the following Java code?",
"code": "class L501 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n    }\n}",
"a": "x is greater than 5",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "b"
},
{
"question": "342. What is the output of the following Java code?",
"code": "class L502 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        System.out.println(\"Outside if\");\n    }\n}",
"a": "x is greater than 5",
"b": "Outside if",
"c": "Compilation error",
"d": "x is greater than 5, Outside if",
"correct": "d"
},
{
"question": "343. What is the output of the following Java code?",
"code": "class L503 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 5);\n        System.out.println(\"x is greater than 5\");\n    }\n}",
"a": "x is greater than 5",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "a"
},
{
"question": "344. What is the output of the following Java code?",
"code": "class L504 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 5)\n            System.out.println(\"x is 5\");\n    }\n}",
"a": "x is 5",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "c"
},
{
"question": "345. What is the output of the following Java code?",
"code": "class L505 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 10)\n            System.out.println(\"x is 10\");\n    }\n}",
"a": "x is 10",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "c"
},
{
"question": "346. What is the output of the following Java code?",
"code": "class L506 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x)\n            System.out.println(\"x is true\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is true",
"c": "No output",
"d": "Compilation error",
"correct": "d"
},
{
"question": "347. What is the output of the following Java code?",
"code": "class L507 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x < 15)\n            System.out.println(\"x is less than 15\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is less than 15",
"c": "No output",
"d": "Not applicable",
"correct": "b"
},
{
"question": "348. What is the output of the following Java code?",
"code": "class L508 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x > 8)\n            System.out.println(\"x is greater than 8\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is greater than 8",
"c": "No output",
"d": "Not applicable",
"correct": "a"
},
{
"question": "349. What is the output of the following Java code?",
"code": "class L509 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x > 15)\n            System.out.println(\"x is greater than 15\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is greater than 15",
"c": "No output",
"d": "Not applicable",
"correct": "a"
},
{
"question": "350. What is the output of the following Java code?",
"code": "class L510 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            System.out.println(\"Outside if\");\n    }\n}",
"a": "x is greater than 5",
"b": "Outside if",
"c": "Compilation error",
"d": "x is greater than 5, Outside if",
"correct": "a"
},
{
"question": "351. What is the output of the following Java code?",
"code": "class L511 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            System.out.println(\"Still inside if\");\n        System.out.println(\"Outside if\");\n    }\n}",
"a": "x is greater than 5, Still inside if, Outside if",
"b": "x is greater than 5, Outside if",
"c": "Compilation error",
"d": "x is greater than 5",
"correct": "b"
},
{
"question": "352. What is the output of the following Java code?",
"code": "class L512 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n            else\n            System.out.println(\"x is not greater than 5\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is not greater than 5",
"c": "Compilation error",
"d": "Not applicable",
"correct": "a"
},
{
"question": "353. What is the output of the following Java code?",
"code": "class L513 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else\n            System.out.println(\"x is not greater than 5\");\n            System.out.println(\"Outside else\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is not greater than 5, Outside else",
"c": "Compilation error",
"d": "Not applicable",
"correct": "b"
},
{
"question": "354. What is the output of the following Java code?",
"code": "class L514 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x = 5)\n            System.out.println(\"x is 5\");\n    }\n}",
"a": "x is 5",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "c"
},
{
"question": "355. What is the output of the following Java code?",
"code": "class L515 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x = 10)\n            System.out.println(\"x is 10\");\n    }\n}",
"a": "x is 10",
"b": "No output",
"c": "Compilation error",
"d": "Not applicable",
"correct": "c"
},
{
"question": "356. What is the output of the following Java code?",
"code": "class L516 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x)\n            System.out.println(\"x is true\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is true",
"c": "No output",
"d": "Compilation error",
"correct": "d"
},
{
"question": "357. What is the output of the following Java code?",
"code": "class L517 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5)\n            System.out.println(\"x is greater than 5\");\n        else if (x < 15)\n            System.out.println(\"x is less than 15\");\n    }\n}",
"a": "x is greater than 5",
"b": "x is less than 15",
"c": "No output",
"d": "Not applicable",
"correct": "b"
},

{
    "question": "358. What is the output of the following Java code?",
    "code": "class L518 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x > 10)\n            System.out.println(\"x is greater than 10\");\n        else\n            System.out.println(\"x is 10 or less\");\n    }\n}",
    "a": "x is greater than 10",
    "b": "x is 10 or less",
    "c": "Compilation error",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "359. What is the output of the following Java code?",
    "code": "class L519 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n    }\n}",
    "a": "x is zero",
    "b": "x is non-zero",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "360. What is the output of the following Java code?",
    "code": "class L520 {\n    public static void main(String[] args) {\n        int x = -5;\n        if (x > 0)\n            System.out.println(\"x is positive\");\n        else if (x < 0)\n            System.out.println(\"x is negative\");\n        else\n            System.out.println(\"x is zero\");\n    }\n}",
    "a": "x is positive",
    "b": "x is negative",
    "c": "x is zero",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": "361. What is the output of the following Java code?",
    "code": "class L521 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else\n            System.out.println(\"x is odd\");\n    }\n}",
    "a": "x is even",
    "b": "x is odd",
    "c": "No output",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": "362. What is the output of the following Java code?",
    "code": "class L522 {\n    public static void main(String[] args) {\n        int x = 10;\n        if (x > 5 && x < 15)\n            System.out.println(\"x is between 5 and 15\");\n        else\n            System.out.println(\"x is out of range\");\n    }\n}",
    "a": "x is between 5 and 15",
    "b": "x is out of range",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "363. What is the output of the following Java code?",
    "code": "class L523 {\n    public static void main(String[] args) {\n        int x = 20;\n        if (x < 15 || x > 25)\n            System.out.println(\"x is outside the range of 15 to 25\");\n        else\n            System.out.println(\"x is within the range\");\n    }\n}",
    "a": "x is outside the range of 15 to 25",
    "b": "x is within the range",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "364. What is the output of the following Java code?",
    "code": "class L524 {\n    public static void main(String[] args) {\n        int x = 5;\n        if (x > 0)\n            if (x % 2 == 0)\n                System.out.println(\"x is positive and even\");\n            else\n                System.out.println(\"x is positive and odd\");\n        else\n            System.out.println(\"x is non-positive\");\n    }\n}",
    "a": "x is positive and even",
    "b": "x is positive and odd",
    "c": "x is non-positive",
    "d": "Not applicable",
    "correct": "b"
},
{
    "question": "365. What is the output of the following Java code?",
    "code": "class L525 {\n    public static void main(String[] args) {\n        int x = 10;\n        int y = 5;\n        if (x > y)\n            System.out.println(\"x is greater than y\");\n        else if (x < y)\n            System.out.println(\"x is less than y\");\n        else\n            System.out.println(\"x is equal to y\");\n    }\n}",
    "a": "x is greater than y",
    "b": "x is less than y",
    "c": "x is equal to y",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "366. What is the output of the following Java code?",
    "code": "class L526 {\n    public static void main(String[] args) {\n        int x = 12;\n        if (x % 3 == 0 && x % 4 == 0)\n            System.out.println(\"x is divisible by 3 and 4\");\n        else\n            System.out.println(\"x is not divisible by 3 and 4\");\n    }\n}",
    "a": "x is divisible by 3 and 4",
    "b": "x is not divisible by 3 and 4",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "367. What is the output of the following Java code?",
    "code": "class L527 {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 3 == 0)\n            System.out.println(\"x is divisible by 3\");\n    }\n}",
    "a": "x is divisible by 5, x is divisible by 3",
    "b": "x is divisible by 5",
    "c": "x is divisible by 3",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "368. What is the output of the following Java code?",
    "code": "class L528 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n        else\n            System.out.println(\"x is unknown\");\n    }\n}",
    "a": "x is zero",
    "b": "x is non-zero",
    "c": "x is unknown",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "369. What is the output of the following Java code?",
    "code": "class L529 {\n    public static void main(String[] args) {\n        int x = 8;\n        if (x % 4 == 0)\n            System.out.println(\"x is divisible by 4\");\n        else\n            System.out.println(\"x is not divisible by 4\");\n    }\n}",
    "a": "x is divisible by 4",
    "b": "x is not divisible by 4",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "370. What is the output of the following Java code?",
    "code": "class L530 {\n    public static void main(String[] args) {\n        int x = 25;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        else\n            System.out.println(\"x is not divisible by 5\");\n    }\n}",
    "a": "x is divisible by 5",
    "b": "x is not divisible by 5",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "371. What is the output of the following Java code?",
    "code": "class L531 {\n    public static void main(String[] args) {\n        int x = 18;\n        if (x % 2 == 0)\n            if (x % 3 == 0)\n                System.out.println(\"x is divisible by both 2 and 3\");\n            else\n                System.out.println(\"x is divisible by 2 but not 3\");\n        else\n            System.out.println(\"x is not divisible by 2\");\n    }\n}",
    "a": "x is divisible by both 2 and 3",
    "b": "x is divisible by 2 but not 3",
    "c": "x is not divisible by 2",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "372. What is the output of the following Java code?",
    "code": "class L532 {\n    public static void main(String[] args) {\n        int x = 7;\n        if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n        else\n            System.out.println(\"x is even\");\n    }\n}",
    "a": "x is odd",
    "b": "x is even",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "373. What is the output of the following Java code?",
    "code": "class L533 {\n    public static void main(String[] args) {\n        int x = 30;\n        if (x % 2 == 0 && x % 3 == 0)\n            System.out.println(\"x is divisible by 2 and 3\");\n        else\n            System.out.println(\"x is not divisible by 2 and 3\");\n    }\n}",
    "a": "x is divisible by 2 and 3",
    "b": "x is not divisible by 2 and 3",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "374. What is the output of the following Java code?",
    "code": "class L534 {\n    public static void main(String[] args) {\n        int x = 50;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 10 == 0)\n            System.out.println(\"x is divisible by 10\");\n    }\n}",
    "a": "x is divisible by 5, x is divisible by 10",
    "b": "x is divisible by 5",
    "c": "x is divisible by 10",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "375. What is the output of the following Java code?",
    "code": "class L535 {\n    public static void main(String[] args) {\n        int x = 14;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n        else\n            System.out.println(\"x is unknown\");\n    }\n}",
    "a": "x is even",
    "b": "x is odd",
    "c": "x is unknown",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "376. What is the output of the following Java code?",
    "code": "class L536 {\n    public static void main(String[] args) {\n        int x = 3;\n        if (x > 0)\n            System.out.println(\"x is positive\");\n        if (x % 2 != 0)\n            System.out.println(\"x is odd\");\n    }\n}",
    "a": "x is positive, x is odd",
    "b": "x is positive",
    "c": "x is odd",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "377. What is the output of the following Java code?",
    "code": "class L537 {\n    public static void main(String[] args) {\n        int x = -10;\n        if (x < 0)\n            System.out.println(\"x is negative\");\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n    }\n}",
    "a": "x is negative, x is even",
    "b": "x is negative",
    "c": "x is even",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "378. What is the output of the following Java code?",
    "code": "class L538 {\n    public static void main(String[] args) {\n        int x = 100;\n        if (x % 10 == 0)\n            System.out.println(\"x is divisible by 10\");\n        if (x % 25 == 0)\n            System.out.println(\"x is divisible by 25\");\n    }\n}",
    "a": "x is divisible by 10, x is divisible by 25",
    "b": "x is divisible by 10",
    "c": "x is divisible by 25",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "379. What is the output of the following Java code?",
    "code": "class L539 {\n    public static void main(String[] args) {\n        int x = 0;\n        if (x == 0)\n            System.out.println(\"x is zero\");\n        else if (x != 0)\n            System.out.println(\"x is non-zero\");\n    }\n}",
    "a": "x is zero",
    "b": "x is non-zero",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "380. What is the output of the following Java code?",
    "code": "class L540 {\n    public static void main(String[] args) {\n        int x = 45;\n        if (x % 5 == 0)\n            System.out.println(\"x is divisible by 5\");\n        if (x % 9 == 0)\n            System.out.println(\"x is divisible by 9\");\n    }\n}",
    "a": "x is divisible by 5",
    "b": "x is divisible by 9",
    "c": "x is divisible by 5, x is divisible by 9",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "381. What is the output of the following Java code?",
    "code": "class L541 {\n    public static void main(String[] args) {\n        int x = 2;\n        if (x < 0)\n            System.out.println(\"x is negative\");\n        else if (x > 0)\n            System.out.println(\"x is positive\");\n        else\n            System.out.println(\"x is zero\");\n    }\n}",
    "a": "x is positive",
    "b": "x is negative",
    "c": "x is zero",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "382. What is the output of the following Java code?",
    "code": "class L542 {\n    public static void main(String[] args) {\n        int x = 22;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else\n            System.out.println(\"x is odd\");\n    }\n}",
    "a": "x is even",
    "b": "x is odd",
    "c": "No output",
    "d": "Not applicable",
    "correct": "a"
},
{
    "question": "383. What is the output of the following Java code?",
    "code": "class L543 {\n    public static void main(String[] args) {\n        int x = 11;\n        if (x % 2 == 0)\n            System.out.println(\"x is even\");\n        else if (x % 3 == 0)\n            System.out.println(\"x is divisible by 3\");\n        else\n            System.out.println(\"x is neither even nor divisible by 3\");\n    }\n}",
    "a": "x is even",
    "b": "x is divisible by 3",
    "c": "x is neither even nor divisible by 3",
    "d": "Not applicable",
    "correct": "c"
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