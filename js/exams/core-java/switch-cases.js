const quizData = [
    {
        question: "What will be the output of the following code if executed?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int day = 3;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default:
                System.out.println("Other day");
        }
    }
}`,
        a: 'Monday<br>Tuesday<br>Wednesday<br>Thursday<br>Other day<br>',
        b: 'Monday<br>Tuesday<br>Wednesday<br>Thursday<br>',
        c: 'Compile Time Error<br>',
        d: 'None<br>',
        correct: 'b',
    },
    {
        question: "What will be the output of the above code if executed with grade as 'B'?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("Excellent");
                break;
            case 'B':
                System.out.println("Good");
                break;
            case 'C':
                System.out.println("Average");
                break;
            default:
                System.out.println("Fail");
        }
    }
}`,
        a: 'Excellent',
        b: 'Good',
        c: 'Average',
        d: 'Fail',
        correct: 'b',
    },
    {
        question: "What will be the output of the above code if executed with num as 4?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 5;
        switch (num) {
            case 1:
            case 3:
            case 5:
                System.out.println("Odd");
                break;
            case 2:
            case 4:
            case 6:
                System.out.println("Even");
                break;
            default:
                System.out.println("Other");
        }
    }
}`,
        a: 'Odd',
        b: 'Even',
        c: 'Other',
        correct: 'b',
    },
    {
        question: "What will be the output of the above code if executed with month as 'March'?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        String month = "January";
        switch (month) {
            case "January":
                System.out.println("First month of the year");
                break;
            case "February":
                System.out.println("Second month of the year");
                break;
            case "March":
                System.out.println("Third month of the year");
                break;
            default:
                System.out.println("Other month");
        }
    }
}`,
        a: 'First month of the year',
        b: 'Second month of the year',
        c: 'Third month of the year',
        d: 'Other month',
        correct: 'c',
    },
    {
        question: 5,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 10:
                System.out.println("Value is 10");
            case 20:
                System.out.println("Value is 20");
            default:
                System.out.println("Value is neither 10 nor 20");
        }
    }
}`,
        a: 'Value is 10<br>',
        b: 'Value is 20<br>',
        c: 'Value is neither 10 nor 20<br>',
        d: 'Both Value is 10 and Value is 20<br>',
        correct: 'd',
    },
    {
        question: 6,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int choice = 3;
        switch (choice) {
            case 1:
                System.out.println("Choice 1");
                break;
            case 2:
                System.out.println("Choice 2");
                break;
            case 3:
                System.out.println("Choice 3");
                break;
            case 4:
                System.out.println("Choice 4");
                break;
            default:
                System.out.println("Invalid choice");
        }
    }
}`,
        a: 'Choice 1<br>',
        b: 'Choice 2<br>',
        c: 'Choice 3<br>',
        d: 'Invalid choice<br>',
        correct: 'd',
    },
    {
        question: 7,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int number = 10;
        switch (number) {
            case 5:
                System.out.println("Value is 5");
            case 10:
                System.out.println("Value is 10");
            case 15:
                System.out.println("Value is 15");
            default:
                System.out.println("Value is not recognized");
        }
    }
}`,
        a: 'Value is 5<br>',
        b: 'Value is 10<br>',
        c: 'Value is 15<br>',
        d: 'Value is not recognized<br>',
        correct: 'b',
    },
    {
        question: 8,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int choice = 2;
        switch (choice) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
            case 3:
                System.out.println("Three");
                break;
            default:
                System.out.println("Other");
        }
    }
}`,
        a: 'One<br>',
        b: 'Two<br>',
        c: 'Three<br>',
        d: 'Two Three<br>',
        correct: 'd',
    },
    {
        question: 9,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("Value is 1");
                break;
            case 2:
                System.out.println("Value is 2");
                break;
            default:
                System.out.println("Value is not recognized");
        }
    }
}`,
        a: 'Value is 1<br>',
        b: 'Value is 2<br>',
        c: 'Value is not recognized<br>',
        correct: 'b',
    },
    {
        question: 10,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int value = 7;
        switch (value) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 7:
                System.out.println("Value is 7");
                break;
            case 9:
                System.out.println("Value is 9");
                break;
            default:
                System.out.println("Value is not recognized");
        }
    }
}`,
        a: 'Value is 5<br>',
        b: 'Value is 7<br>',
        c: 'Value is 9<br>',
        d: 'Value is not recognized<br>',
        correct: 'b',
    },
    {
    question: 11,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int day = 5;
        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            default:
                System.out.println("Other day");
        }
    }
}`,
        a: 'Monday<br>',
        b: 'Tuesday<br>',
        c: 'Other day<br>',
        d: 'Compilation error<br>',
        correct: 'c',
    },
    {
        question: 12,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        double number = 3.14;
        switch (number) {
            case 1.0:
                System.out.println("One");
                break;
            case 3.14:
                System.out.println("Pi");
                break;
            default:
                System.out.println("Other");
        }
    }
}`,
        a: 'One<br>',
        b: 'Pi<br>',
        c: 'Other<br>',
        d: 'Compilation error<br>',
        correct: 'b',
    },
    {
        question: 13,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        String fruit = "Apple";
        switch (fruit) {
            case "Apple":
                System.out.println("Red fruit");
                break;
            case "Banana":
                System.out.println("Yellow fruit");
                break;
            default:
                System.out.println("Unknown fruit");
        }
    }
}`,
        a: 'Red fruit<br>',
        b: 'Yellow fruit<br>',
        c: 'Unknown fruit<br>',
        d: 'Compilation error<br>',
        correct: 'a',
    },
    {
        question: 14,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                break;
            default:
                System.out.println("Value is not recognized");
        }
    }
}`,
        a: 'Value is 5<br>',
        b: 'Value is 10<br>',
        c: 'Value is 5Value is 10<br>',
        d: 'Compilation error<br>',
        correct: 'c',
    },
    {
        question: 15,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 3;
        switch (num) {
            case 1:
            case 2:
            case 3:
                System.out.println("Small number");
            case 4:
            case 5:
            case 6:
                System.out.println("Medium number");
            default:
                System.out.println("Large number");
        }
    }
}`,
        a: 'Small number<br>',
        b: 'Medium number<br>',
        c: 'Small numberMedium number<br>',
        d: 'Small numberMedium numberLarge number<br>',
        correct: 'd',
    },
    {
        question: 16,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        char grade = 'A';
        switch (grade) {
            case 'A':
                System.out.println("Excellent");
            case 'B':
                System.out.println("Good");
            case 'C':
                System.out.println("Average");
            default:
                System.out.println("Fail");
        }
    }
}`,
        a: 'Excellent<br>',
        b: 'ExcellentGoodAverageFail<br>',
        c: 'ExcellentGood<br>',
        d: 'Compilation error<br>',
        correct: 'b',
    },
    {
        question: 17,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int value = 4;
        switch (value) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
        }
    }
}`,
        a: 'One<br>',
        b: 'Two<br>',
        c: 'Three<br>',
        d: 'Compilation error<br>',
        correct: 'd',
    },
    {
        question: 18,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 10:
                System.out.println("Value is 10");
            case 20:
                System.out.println("Value is 20");
                break;
            default:
                System.out.println("Other value");
        }
    }
}`,
        a: 'Value is 10<br>',
        b: 'Value is 20<br>',
        c: 'Value is 10Value is 20<br>',
        d: 'Other value<br>',
        correct: 'c',
    },
    {
        question: 19,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        String day = "Monday";
        switch (day) {
            case "Monday":
                System.out.println("First day of the week");
                break;
            case "Tuesday":
                System.out.println("Second day of the week");
                break;
        }
    }
}`,
        a: 'First day of the week<br>',
        b: 'Second day of the week<br>',
        c: 'Compilation error<br>',
        d: 'No output<br>',
        correct: 'a',
    },
    {
        question: 20,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 1;
        switch (x) {
            case 1:
                System.out.println("Value is 1");
            case 2:
                System.out.println("Value is 2");
                break;
            case 3:
                System.out.println("Value is 3");
        }
    }
}`,
        a: 'Value is 1<br>',
        b: 'Value is 2<br>',
        c: 'Value is 1Value is 2<br>',
        d: 'Compilation error<br>',
        correct: 'c',
    },
    {
        question: 21,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 1;
        switch (x) {
            case 1:
                System.out.println("Value is 1");
            case 2:
                System.out.println("Value is 2");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'Value is 1<br>',
        b: 'Value is 1Value is 2<br>',
        c: 'Value is 1Value is 2Default case<br>',
        d: 'Compilation error<br>',
        correct: 'c',
    },
    {
        question: 22,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 5;
        switch (num) {
            case 1:
                System.out.println("One");
            case 5:
                System.out.println("Five");
            case 10:
                System.out.println("Ten");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One<br>',
        b: 'Five<br>',
        c: 'OneFive<br>',
        d: 'OneFiveTenDefault case<br>',
        correct: 'd',
    },
    {
        question: 23,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 5;
        switch (x) {
            default:
                System.out.println("Default case");
            case 1:
                System.out.println("Value is 1");
            case 2:
                System.out.println("Value is 2");
        }
    }
}`,
        a: 'Default case<br>',
        b: 'Default caseValue is 1<br>',
        c: 'Default caseValue is 1Value is 2<br>',
        d: 'Compilation error<br>',
        correct: 'c',
    },
    {
        question: 24,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 10;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 10:
                System.out.println("Ten");
            case 100:
                System.out.println("Hundred");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One<br>',
        b: 'Ten<br>',
        c: 'TenHundredDefault case<br>',
        d: 'TenHundred<br>',
        correct: 'c',
    },
    {
        question: 25,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int value = 4;
        switch (value) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
        }
    }
}`,
        a: 'One<br>',
        b: 'Two<br>',
        c: 'Three<br>',
        d: 'No output<br>',
        correct: 'd',
    },
    {
        question: 26,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 10;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            default:
                System.out.println("Default case");
            case 10:
                System.out.println("Ten");
                break;
            case 100:
                System.out.println("Hundred");
        }
    }
}`,
        a: 'One<br>',
        b: 'Default case<br>',
        c: 'Ten<br>',
        d: 'Default caseTen<br>',
        correct: 'd',
    },
    {
        question: 27,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        char grade = 'B';
        switch (grade) {
            case 'A':
                System.out.println("A Grade");
            case 'B':
                System.out.println("B Grade");
            case 'C':
                System.out.println("C Grade");
            default:
                System.out.println("Default Grade");
        }
    }
}`,
        a: 'A Grade<br>',
        b: 'B Grade<br>',
        c: 'B GradeC GradeDefault Grade<br>',
        d: 'B GradeC Grade<br>',
        correct: 'c',
    },
    {
        question: 28,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 3;
        switch (x) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
            case 4:
                System.out.println("Four");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One<br>',
        b: 'Two<br>',
        c: 'Three<br>',
        d: 'ThreeFourDefault case<br>',
        correct: 'd',
    },
    {
        question: 29,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 10;
        switch (num) {
            case 10:
                System.out.println("Value is 10");
                break;
            case 20:
                System.out.println("Value is 20");
                break;
        }
    }
}`,
        a: 'Value is 10<br>',
        b: 'Value is 20<br>',
        c: 'No output<br>',
        d: 'Compilation error<br>',
        correct: 'a',
    },
    {
        question: 30,
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        for (int i = 0; i < 3; i++) {
            switch (x) {
                case 5:
                    System.out.println("Value is 5");
                    break;
                case 10:
                    System.out.println("Value is 10");
                    break;
                default:
                    System.out.println("Other value");
            }
        }
    }
}`,
        a: 'Value is 5<br>',
        b: 'Value is 10<br>',
        c: 'Other value<br>',
        d: 'Value is 10Value is 10Value is 10<br>',
        correct: 'd',
    },
    {
        question: 31,
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int i = 0;
        while (i < 3) {
            int num = 2;
            switch (num) {
                case 1:
                    System.out.println("One");
                    break;
                case 2:
                    System.out.println("Two");
                    break;
                default:
                    System.out.println("Other");
            }
            i++;
        }
    }
}
}`,
        a: ' One',
        b: 'Two',
        c: 'TwoTwoTwo',
        d: 'TwoOther',
        correct: 'C',
    },
    {
        question: "What will be the output of the following code if executed?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int i = 0;
        do {
            int x = 5;
            switch (x) {
                case 3:
                    System.out.println("Three");
                    break;
                case 5:
                    System.out.println("Five");
                    break;
                default:
                    System.out.println("Other");
            }
            i++;
        } while (i < 2);
    }
}`,
        a: 'Three',
        b: 'Five',
        c: 'Other',
        d: 'FiveFive',
        correct: 'd',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 7;
        if (num > 5) {
            switch (num) {
                case 6:
                    System.out.println("Six");
                    break;
                case 7:
                    System.out.println("Seven");
                    break;
                default:
                    System.out.println("Other");
            }
        } else {
            System.out.println("Less than or equal to 5");
        }
    }
}`,
        a: 'Six',
        b: 'Seven',
        c: 'Less than or equal to 5',
        d: 'Other',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 5;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                break;
            default:
                System.out.println("Other value");
        }
        System.out.println("Outside switch");
    }
}`,
        a: 'Value is 5\nOutside switch',
        b: 'Value is 10\nOutside switch',
        c: 'Value is 5',
        d: 'Compilation error',
        correct: 'a',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 4;
        switch (num) {
            case 2:
                System.out.println("Two");
                break;
            case 4:
                System.out.println("Four");
            case 6:
                System.out.println("Six");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'Four',
        b: 'FourSixDefault case',
        c: 'FourSix',
        d: 'Compilation error',
        correct: 'b'
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                continue;
            default:
                System.out.println("Other value");
        }
    }
}`,
        a: 'Value is 5',
        b: 'Value is 10',
        c: 'Compilation error',
        d: 'No output',
        correct: 'c',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        String result = (x > 5) ? "Greater than 5" : switch (x) {
            case 5:
                yield "Equal to 5";
            case 10:
                yield "Equal to 10";
            default:
                yield "Other value";
        };
        System.out.println(result);
    }
}`,
        a: 'Greater than 5',
        b: 'Equal to 5',
        c: 'Equal to 10',
        d: 'Other value',
        correct: 'a',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Default case',
        d: 'Compilation error',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 1;
        switch (x) {
            case 1:
                System.out.println("One");
            case 2:
                System.out.println("Two");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'OneTwo',
        d: 'OneTwoDefault case',
        correct: 'd',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 3;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'No output',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Three',
        d: 'Compilation error',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 3;
        switch (x) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
            case 4:
                System.out.println("Four");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Three',
        d: 'ThreeFourDefault case',
        correct: 'd',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int value = 5;
        switch (value) {
            case 1:
                System.out.println("One");
                break;
            case 5:
                System.out.println("Five");
            case 10:
                System.out.println("Ten");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Five',
        c: 'FiveTenDefault case',
        d: 'Compilation error',
        correct: 'c',
    }, 
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 7;
        if (num > 5) {
            switch (num) {
                case 6:
                    System.out.println("Six");
                    break;
                case 7:
                    System.out.println("Seven");
                    break;
                default:
                    System.out.println("Other");
            }
        } else {
            System.out.println("Less than or equal to 5");
        }
    }
}`,
        a: 'Six',
        b: 'Seven',
        c: 'Less than or equal to 5',
        d: 'Other',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 5;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                break;
            default:
                System.out.println("Other value");
        }
        System.out.println("Outside switch");
    }
}`,
        a: 'Value is 5\nOutside switch',
        b: 'Value is 10\nOutside switch',
        c: 'Value is 5',
        d: 'Compilation error',
        correct: 'a',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 4;
        switch (num) {
            case 2:
                System.out.println("Two");
                break;
            case 4:
                System.out.println("Four");
            case 6:
                System.out.println("Six");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'Four',
        b: 'FourSixDefault case',
        c: 'FourSix',
        d: 'Compilation error',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                continue;
            default:
                System.out.println("Other value");
        }
    }
}`,
        a: 'Value is 5',
        b: 'Value is 10',
        c: 'Compilation error',
        d: 'No output',
        correct: 'c',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        String result = (x > 5) ? "Greater than 5" : switch (x) {
            case 5:
                yield "Equal to 5";
            case 10:
                yield "Equal to 10";
            default:
                yield "Other value";
        };
        System.out.println(result);
    }
}`,
        a: 'Greater than 5',
        b: 'Equal to 5',
        c: 'Equal to 10',
        d: 'Other value',
        correct: 'a',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Default case',
        d: 'Compilation error',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 1;
        switch (x) {
            case 1:
                System.out.println("One");
            case 2:
                System.out.println("Two");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'OneTwo',
        d: 'OneTwoDefault case',
        correct: 'd',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 3;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'No output',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
                break;
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Three',
        d: 'Compilation error',
        correct: 'b',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int x = 3;
        switch (x) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:
                System.out.println("Three");
            case 4:
                System.out.println("Four");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Two',
        c: 'Three',
        d: 'ThreeFourDefault case',
        correct: 'd',
    },
    {
        question: "What will be the output of the following code?",
        code: `public class SwitchExample {
    public static void main(String[] args) {
        int value = 5;
        switch (value) {
            case 1:
                System.out.println("One");
                break;
            case 5:
                System.out.println("Five");
            case 10:
                System.out.println("Ten");
            default:
                System.out.println("Default case");
        }
    }
}`,
        a: 'One',
        b: 'Five',
        c: 'FiveTenDefault case',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int num = 3;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            default:
                System.out.println("Default case");
            case 2:
                System.out.println("Two");
        }
    }
}
}`,
        a: 'One',
        b: 'Default case',
        c: ' Two',
        d: 'Default caseTwo',
        correct: 'd',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int num = 1;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            default:
                System.out.println("Default case");
        }
        System.out.println("Outside switch");
    }
}
}`,
        a: ' One<br>Outside switch',
        b: 'Default case Two<br>Outside switch',
        c: 'one',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int x = 7;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
            case 7:
                System.out.println("Value is 7");
                break;
        }
    }
}
`,
        a: 'Value is 5',
        b: 'Value is 10',
        c: 'Value is 7',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int x = 10;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 10:
                System.out.println("Value is 10");
                continue;
            default:
                System.out.println("Other value");
        }
    }
}
`,
        a: 'Value is 5',
        b: 'Value is 10',
        c: 'Compilation error',
        d: 'No output',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int x = 6;
        switch (x) {
            case 5:
                System.out.println("Value is 5");
                break;
            case 6:
                System.out.println("Value is 6");
            case 7:
                System.out.println("Value is 7");
                break;
            default:
                System.out.println("Other value");
        }
    }
}
`,
        a: 'Value is 5',
        b: 'Value is 6',
        c: 'Value is 7',
        d: 'Value is 6Value is 7',
        correct: 'd',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int num = 5;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 5:
                System.out.println("Five");
            case 10:
                System.out.println("Ten");
                break;
            default:
                System.out.println("Other value");
        }
    }
}
`,
        a: 'One',
        b: 'Five',
        c: 'FiveTen',
        d: 'FiveTenOther value',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int x = 3;
        switch (x) {
            case 1:
                System.out.println("One");
                break;
            default:
                System.out.println("Default case");
            case 2:
                System.out.println("Two");
        }
    }
}
`,
        a: 'One',
        b: 'Default case',
        c: 'Two',
        d: 'Default caseTwo',
        correct: 'd',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int x = 5;
        switch (x) {
            case 1:
                System.out.println("One");
                break;
            case 5:
                System.out.println("Five");
            case 10:
                System.out.println("Ten");
                break;
            default:
                System.out.println("Other value");
        }
        System.out.println("Outside switch");
    }
}
`,
        a: 'One<br>Outside switch',
        b: 'Five<br>Outside switch',
        c: 'FiveTen<br>Outside switch',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the above code?",
        code: `java
public class SwitchExample {
    public static void main(String[] args) {
        int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
            case 3:
                System.out.println("Three");
            default:
                System.out.println("Default case");
        }
        System.out.println("Outside switch");
    }
}
`,
        a: 'One<br>Outside switch',
        b: 'Two<br>Three<br>Default case<br>Outside switch',
        c: 'Two<br>Three<br>Outside switch',
        d: 'Compilation error',
        correct: 'c',
    },
    {
        question: "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Hello World 123 3.14 true\");\n        while(scanner.hasNext()) {\n            if(scanner.hasNextInt()) {\n                System.out.println(scanner.nextInt());\n            } else if(scanner.hasNextDouble()) {\n                System.out.println(scanner.nextDouble());\n            } else if(scanner.hasNextBoolean()) {\n                System.out.println(scanner.nextBoolean());\n            } else {\n                System.out.println(scanner.next());\n            }\n        }\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Hello World 123 3.14 true",
         d : "123 3.14 true",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a number: \");\n        int num = scanner.nextInt();\n        System.out.println(\"You entered: \" + num);\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Enter a number: [User Input] You entered: [User Input]",
         d : "Enter a number: [User Input]<br>You entered: [User Input]",
         correct : "c",
    },
    {
         question: "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"123 456 789\");\n        int sum = 0;\n        while(scanner.hasNextInt()) {\n            sum += scanner.nextInt();\n        }\n        System.out.println(\"Sum: \" + sum);\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Sum: 1368",
         d : "Sum: 45",
         correct : "d",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Hello\\nWorld\\n123\");\n        while(scanner.hasNextLine()) {\n            System.out.println(scanner.nextLine());\n        }\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Hello World 123",
         d : "Hello\\nWorld\\n123",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"3.14 2.71 1.61\");\n        double product = 1.0;\n        while(scanner.hasNextDouble()) {\n            product *= scanner.nextDouble();\n        }\n        System.out.println(\"Product: \" + product);\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Product: 13.9286824",
         d : "Product: 13.9286824 2.71 1.61",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a sentence: \");\n        String sentence = scanner.nextLine();\n        System.out.println(\"You entered: \" + sentence);\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Enter a sentence: [User Input] You entered: [User Input]",
         d : "Enter a sentence: [User Input]<br>You entered: [User Input]",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"true false true\");\n        while(scanner.hasNextBoolean()) {\n            System.out.println(scanner.nextBoolean());\n        }\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "true false true",
         d : "true\\nfalse\\ntrue",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"Java Programming\\nIs Fun\");\n        System.out.println(scanner.next());\n        System.out.println(scanner.nextLine());\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Java Programming<br>Is Fun",
         d : "Java\\nProgramming Is Fun",
         correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        System.out.print(\"Enter a word: \");\n        String word = scanner.next();\n        System.out.println(\"You entered: \" + word);\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "Enter a word: [User Input] You entered: [User Input]",
         d : "Enter a word: [User Input]<br>You entered: [User Input]",
        correct : "c",
    },
    {
         question : "What will be the output of the following code?",
         code : "java\nimport java.util.Scanner;\n\npublic class ScannerExample {\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(\"A quick brown fox jumps\");\n        while(scanner.hasNext()) {\n            System.out.print(scanner.next().toUpperCase() + \" \");\n        }\n        scanner.close();\n    }\n}",
         a : "Compile-time error",
         b : "Runtime error",
         c : "A QUICK BROWN FOX JUMPS",
         d : "A quick brown fox jumps",
         correct : "c",
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
