const quizData = 
[
    {
        question: "01. By default, how many threads are involved in the foreground execution?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "02. In which package is the Thread class available?",
        code: "select the correct option",
        a: "java.threads",
        b: "java.lang",
        c: "java.io",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "03. Thread is a concrete class.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "04. We can create an object of the Thread class.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "05. Which method of the Thread class do we need to override to incorporate a thread task?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "06. Which method of the Thread class do we need to call to execute a new thread in the separate thread execution context?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "07. Which method of the Thread class do we need to call to register a new thread with the thread scheduler?",
        code: "select the correct option",
        a: "start",
        b: "task",
        c: "run",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "08. In which package is the Runnable interface available?",
        code: "select the correct option",
        a: "java.lang",
        b: "java.io",
        c: "java.threads",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "09. How many methods are available in the Runnable interface?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "no methods",
        correct: "a"
    },
    {
        question: "10. Is the Runnable interface a marker interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "11. Is the Runnable interface a functional interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "12. Which method is available in the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "13. Which method do we have to implement while developing a subclass to the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "14. How many ways are there to develop child threads in Java programming language?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "3",
        d: "no methods",
        correct: "b"
    },
    {
        question: "15. In which method do we have to implement the thread task while developing a child thread by using the Runnable interface?",
        code: "select the correct option",
        a: "start",
        b: "thread",
        c: "run",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "16. Which reference type should we supply to the constructor of the Thread class while developing a thread by making use of the Runnable interface?",
        code: "select the correct option",
        a: "ThreadLocal",
        b: "Number",
        c: "Runnable",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "17. Is the start() method available in the Runnable interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "18. Can we call the start() method from a class which is a subclass of the Runnable interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "19. Can we call the start() method from a class which is a subclass of the Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "20. Can we call the start() method from the Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "21. What happens if the main thread is calling the run() method from the child thread instead of the start() method?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Compilation and Running both success and child thread will be allocated to execute run() method",
        d: "Compilation and Running both success and main thread will be executing run() method",
        correct: "d"
    },
    {
        question: "22. If the main thread is calling the run() method from the child thread instead of the start() method, then will the child be registering with the thread scheduler?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "23. Is it possible to call the run() method more than once in the same thread reference?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "24. Is it possible to call the start() method more than once in the same thread reference?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "25. What happens if the start() method is called more than once on the same thread reference?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Executing more than one time",
        correct: "b"
    },
    {
        question: "24. What happens if the run() method is called more than once on the same thread reference?",
        code: "select the correct option",
        a: "Compilation error",
        b: "Runtime Error",
        c: "Executing more than one time",
        correct: "c"
    },
    {
        question: "26. Does an unhandled exception object affect only the current thread?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "27. Does an unhandled exception object affect all the running threads of the current execution?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "28. If the main thread receives an unhandled exception, will the main thread only terminate from the execution?",
        code: "select the correct option",
        a: "yes",
        b: "no",c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "29. If the main thread receives an unhandled exception, will all the threads of the current execution terminate?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "30. If a child thread receives an unhandled exception, will all the threads of the current execution terminate?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "31. If a child thread receives an unhandled exception, will the main thread terminate from the execution?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "32. Is currentThread() a static method in the Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "33. Does currentThread() return a reference to the thread which executes the currentThread() method?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "34. Which t1 refers to the main thread? (Assume A is a subclass of Thread and B is a subclass of Runnable)",
        code: "select the correct option",
        a: "A t1 = new A()",
        b: "B t1 = new B()",
        c: "Thread t1 = Thread.currentThread()",
        d: "Thread t1 = B.currentThread()",
        correct: "c"
    },
    {
        question: "35. Is it possible to define more than one thread for class A, if A is a subclass of Thread class?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "36. Is it possible to define more than one thread for class B, if B is a subclass of Runnable interface?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "37. How many minimum number of objects are required to class A to define 2 threads? (Assume A is a subclass of Thread)",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "we can't define multiple threads to the same class",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "38. How many minimum number of objects are required to class A to define 2 threads? (Assume A is a subclass of Runnable)",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "we can't define multiple threads to the same class",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "39. Does every thread have a unique id?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "40. What is the data type of the id of a thread?",
        code: "select the correct option",
        a: "int",
        b: "long",
        c: "double",
        d: "String",
        correct: "b"
    },
    {
        question: "41. How to change a thread ID?",
        code: "select the correct option",
        a: "set()",
        b: "setId()",
        c: "setThreadId()",
        d: "we can't change",
        correct: "d"
    },
    {
        question: "42. How to read a thread ID?",
        code: "select the correct option",
        a: "get()",
        b: "getId()",
        c: "getThreadId()",
        d: "we can't read",
        correct: "b"
    },
    {
        question: "43. What is the default name for the main thread?",
        code: "select the correct option",
        a: "main",
        b: "initiator",
        c: "parent",
        d: "no name",
        correct: "a"
    },
    {
        question: "44. What is the default name for the 1st child thread?",
        code: "select the correct option",
        a: "main",
        b: "thread-0",
        c: "thread-1",
        d: "thread-2",
        correct: "b"
    },
    {
        question: "45. What is the default name for the 2nd child thread?",
        code: "select the correct option",
        a: "main",
        b: "thread-0",
        c: "thread-1",
        d: "thread-2",
        correct: "c"
    },
    {
        question: "46. Is it possible to change the name of the main thread?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "47. How to change the default name of a thread?",
        code: "select the correct option",
        a: "setName()",
        b: "setThreadName()",
        c: "we can't change",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "48. Is it possible to choose a name for a child thread while creating it?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "49. What is the maximum priority for threads?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "50. What is the minimum priority in case of threads?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "51. What is the normal priority in case of threads?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "52. What is the value of Thread.MIN_PRIORITY?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "53. What is the value of Thread.NORM_PRIORITY?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "54. What is the value of Thread.MAX_PRIORITY?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "55. What is the default priority of a main thread?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "56. What is the default priority of a child thread?",
        code: "select the correct option",
        a: "1",
        b: "5",
        c: "10",
        d: "its a priority of its parent thread.",
        correct: "d"
    },
    {
        question: "57. What is the datatype of a priority?",
        code: "select the correct option",
        a: "int",
        b: "long",
        c: "double",
        d: "String",
        correct: "a"
    },
    {
        question: "58. How to read the priority of a thread?",
        code: "select the correct option",
        a: "get()",
        b: "getPriority()",
        c: "getP()",
        d: "getInt()",
        correct: "b"
    },
    {
        question: "59. How to change the priority of a thread?",
        code: "select the correct option",
        a: "set()",
        b: "setPriority()",
        c: "setP()",
        d: "setInt()",
        correct: "b"
    },
    {
        question: "60. Is it possible to change the priority of a main thread?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "61. If a child is depending on parent thread life, then the child is called as?",
        code: "select the correct option",
        a: "deamon",
        b: "user",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "62. If a child is not depending on parent thread life, then the child is called as?",
        code: "select the correct option",
        a: "deamon",
        b: "user",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "63. Deamon is a thread which is depending on its parent.",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "64. Deamon is a thread which is not depending on its parent.",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "65. User thread is a thread which is depending on its parent.",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "66. User thread is a thread which is not depending on its parent.",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "67. What is the default type of a thread in Java?",
        code: "select the correct option",
        a: "deamon",
        b: "user",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "68. Which type of a thread is created while developing with the Thread class?",
        code: "select the correct option",
        a: "deamon",
        b: "user",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "69. Which type of a thread is created while developing with the Runnable interface?",
        code: "select the correct option",
        a: "deamon",
        b: "user",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "70. How to read a daemon status?",
        code: "select the correct option",
        a: "getDeamon()",
        b: "isDeamon()",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "71. How to change a thread from daemon to user (or) from user to daemon?",
        code: "select the correct option",
        a: "setDeamon()",
        b: "changeDeamon()",
        c: "we can't change",
        correct: "c"
    },
    {
        question: "72. When can we change a thread from daemon to user (or) from user to daemon?",
        code: "select the correct option",
        a: "before start()",
        b: "after start()",
        c: "we can't change",
        correct: "a"
    },
    {
        question: "73. Is it possible to change a main thread to a daemon?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "74. Is sleep() method in Thread class static?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "75. What is the argument data type of the sleep method in Thread class?",
        code: "select the correct option",
        a: "int",
        b: "long",
        c: "float",
        d: "double",
        correct: "b"
    },
    {
        question: "76. Which checked exception is required for sleep method in Thread class?",
        code: "select the correct option",
        a: "ArithmaticException",
        b: "NumberFormatException",
        c: "InterruptedException",
        d: "double",
        correct: "c"
    },
    {
        question: "77. Which checked exception is required for join method in Thread class?",
        code: "select the correct option",
        a: "ArithmaticException",
        b: "NumberFormatException",
        c: "InterruptedException",
        d: "double",
        correct: "c"
    },
    {
        question: "78. How to tell the parent to wait till child execution gets over?",
        code: "select the correct option",
        a: "through sleep()",
        b: "through join()",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "79. Is it possible to interrupt a thread which is under sleep?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "80. Is it possible to interrupt a thread which is under join?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "81. method is used to interrupt a thread while it is under sleep?",
        code: "select the correct option",
        a: "interrupt()",
        b: "makeStop()",
        c: "stopInterrupt()",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "82. Which method is used to interrupt a thread while it is under join?",
        code: "select the correct option",
        a: "interrupt()",
        b: "makeStop()",
        c: "stopInterrupt()",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "83. How many maximum locks will be for one object?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "it depends on how many superclasses are there?",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "84. How many maximum locks will be for one class?",
        code: "select the correct option",
        a: "1",
        b: "2",
        c: "it depends on how many superclasses are there?",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "85. Which lock is required while accessing a synchronized and non-static method?",
        code: "select the correct option",
        a: "class lock",
        b: "object lock",
        c: "no lock is required",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "86. Which lock is required while accessing a synchronized and static method?",
        code: "select the correct option",
        a: "class lock",
        b: "object lock",
        c: "no lock is required",
        d: "not applicable",
        correct: "a"
    },
    {
        question: "87. Which lock is required while accessing a non-synchronized and static method?",
        code: "select the correct option",
        a: "class lock",
        b: "object lock",
        c: "no lock is required",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "88. Which lock is required while accessing a non-synchronized and non-static method?",
        code: "select the correct option",
        a: "class lock",
        b: "object lock",
        c: "no lock is required",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "89. To access a synchronized and non-static method on a1, which lock is required?",
        code: "select the correct option",
        a: "object lock of any object",
        b: "object lock of an object which is referred by a1",
        c: "object lock of an object which is referred by thread reference",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "90. Assume a1 is a type of A class and it is pointing to an object of A class. To access a synchronized and non-static method on a1, which lock is required?",
        code: "select the correct option",
        a: "object lock of any object",
        b: "object lock of an object which is referred by a1",
        c: "object lock of an object which is referred by thread reference",
        d: "class lock of A class",
        correct: "b"
    },
    {
        question: "91. Assume a1 is a type of A class and it is pointing to an object of A class. To access a synchronized and static method on a1, which lock is required?",
        code: "select the correct option",
        a: "object lock of any object",
        b: "object lock of an object which is referred by a1",
        c: "object lock of an object which is referred by thread reference",
        d: "class lock of A class",
        correct: "d"
    },
    {
        question: "92. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any non-static and non-synchronized method on a1 simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "93. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any non-static and non-synchronized different methods on a1 simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "94. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any synchronized and non-static methods on a1 simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "95. Assume a1 is a type of A class and it is pointing to an object of A class. Is it possible for two threads to access any synchronized and non-static different methods on a1 simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "96. Assume a1 is a type of A class and it is pointing to an object of A class and a2 is a type of A class and it is pointing to another object of the same A class. Assume A class contains synchronized and non-static test1() method. Is it possible for one thread to access a1.test1() and another thread to access a2.test1() simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "97. Assume a1 is a type of A class and it is pointing to an object of A class and a2 is a type of A class and it is pointing to another object of the same A class. Assume A class contains synchronized and non-static test1() and test2() methods. Is it possible for one thread to access a1.test1() and another thread to access a2.test2() simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "98. Assume a1 is a type of A class and it is pointing to an object of A class. Assume A class contains synchronized and non-static test1() and test2() methods. Is it possible for one thread to access a1.test1() and another thread to access a1.test2() simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "99. Assume A class containing static and synchronized test1() method. Is it possible, two threads accessing A.test1() simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "100. Assume A class containing static and synchronized test1() and test2() methods. Is it possible, one thread accessing A.test1() and another thread accessing A.test2() simultaneously?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "101. While a thread is entering into a synchronized and non-static method on a1 pointing object, should it require the object lock of an object which is referred to by a1?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "102. If a thread requires the object lock of the current object to enter into a synchronized block, what could be the mutex for the synchronized block?",
        code: "select the correct option",
        a: "Runnable reference",
        b: "Thread reference",
        c: "this",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "103. If t1 thread is holding the object lock of a1 and looking for the object lock of a2, and t2 thread is holding the object lock of a2 and looking for the object lock of a1, then which thread will execute first?",
        code: "select the correct option",
        a: "t1",
        b: "t2",
        c: "dead lock",
        d: "not applicable",
        correct: "c"
    },
    {
        question: "104. In which class is the wait() method developed?",
        code: "select the correct option",
        a: "Thread",
        b: "Object",
        c: "ThreadLocal",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "105. In which class is the notify() method developed?",
        code: "select the correct option",
        a: "Thread",
        b: "Object",
        c: "ThreadLocal",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "106. In which class is the notifyAll() method developed?",
        code: "select the correct option",
        a: "Thread",
        b: "Object",
        c: "ThreadLocal",
        d: "not applicable",
        correct: "b"
    },
    {
        question: "107. Does the String class have the wait() method?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "108. Does the Thread class have the notify() method?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "109. Should a thread require the object lock of t1 to call t1.wait()?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "110. Should a thread require the object lock of t1 to call t1.notify()?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",   
        correct: "a"
    },
    {
        question: "111. Should a thread require the object lock of t2 to call t1.notifyAll()?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "112. If a thread holding the object lock of t1 is trying to call t2.wait(), where t1 and t2 are referring to different objects, will the thread go to the waiting state?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "113. Which checked exception is required to call the wait() method?",
        code: "select the correct option",
        a: "ClassNotFoundException",
        b: "SQLException",
        c: "InterruptedException",
        d: "double",
        correct: "c"
    },
    {
        question: "114. The main thread is about to call a1.wait() in the main method by choosing a synchronized block. What could be the mutex for the synchronized block?",
        code: "select the correct option",
        a: "this",
        b: "main thread reference",
        c: "a1",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "115. The child thread is about to call wait() in the run method by choosing a synchronized block. What could be the mutex for the synchronized block?",
        code: "select the correct option",
        a: "this",
        b: "main thread reference",
        c: "a1",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "116. The main thread is about to call a1.notify() in the main method by choosing a synchronized block. What could be the mutex for the synchronized block?",
        code: "select the correct option",
        a: "this",
        b: "main thread reference",
        c: "a1",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "117. The child thread is about to call notifyAll() in the run method by choosing a synchronized block. What could be the mutex for the synchronized block?",
        code: "select the correct option",
        a: "this",
        b: "main thread reference",
        c: "a1",
        d: "none of the above",
        correct: "c"
    },
    {
        question: "118. There are two objects. t1 is referring to one object and t2 is referring to another object. If a child thread went into waiting by calling wait on t1, how can the child thread be released from waiting?",
        code: "select the correct option",
        a: "someone has to call t1.notify()",
        b: "someone has to call t2.notifyAll()",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "119. There are two objects. t1 is referring to one object and t2 is referring to another object. If some child threads went into waiting by calling wait on t1, how can all child threads be released from waiting?",
        code: "select the correct option",
        a: "someone has to call t1.notify()",
        b: "someone has to call t2.notifyAll()",
        c: "someone has to call t1.notifyAll()",
    
        d: "none of the above",
        correct: "c"
    },
    {
        question: "120. While a thread is going to the wait stage, does it release the owned lock?",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "121. While a thread is calling join, does it release the owned lock?",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "123. While a thread is calling sleep, does it release the owned lock?",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "124. ThreadLocal maintains a value local to a particular thread.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
    },
    {
        question: "125. If the same ThreadLocal object is used by two different threads and the first thread sets a value as 10 while the second thread has not set a value yet, what could be the value while reading by the second thread?",
        code: "select the correct option",
        a: "10",
        b: "0",
        c: "null",
        d: "exception",
        correct: "c"
    },
    {
        question: "126.Is it possible to stop all the threads that are under one group by using the group reference?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "127. ThreadGroup is used for grouping any number of and any type of threads.",
        code: "select the correct option",
        a: "true",
        b: "false",
        c: "not applicable",
        d: "none of the above",
        correct: "b"
    },
    {
        question: "128. What is the state of a thread after calling the sleep method?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "NEW",
        
        correct: "b"
    },
    {
        question: "129. What is the state of a thread after calling the wait method?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "NEW",
    
        correct: "a"
    },
    {
        question: "130. What is the state of a thread after calling the join method?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "NEW",
        
        correct: "a"
    },
    {
        question: "131. What is the state of a thread after calling the start method while executing the run method?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "NEW",
    
        correct: "c"
    },
    {
        question: "132. What is the state of a thread before calling the start method?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "NEW",

        correct: "d"
    },
    {
        question: "133. What is the state of a thread while it is in a deadlock?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        
        d: "BLOCKED",
        correct: "d"
    },
    {
        question: "134. What is the state of a thread once its execution is over?",
        code: "select the correct option",
        a: "WAITING",
        b: "TIMED_WAITING",
        c: "RUNNABLE",
        d: "TERMINATED",
        correct: "d"
    },
    {
        question: "135. Does yield() request the current thread to give a chance to other threads?",
        code: "select the correct option",
        a: "yes",
        b: "no",
        c: "not applicable",
        d: "none of the above",
        correct: "a"
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
