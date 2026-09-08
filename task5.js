// Variables & Data Types (Questions 1-8)

// Q1: What is the difference between var, let, and const?
        // var is function-scoped and can be redeclared and reassigned. 
        // let and const are block-scoped. 
        // let can be reassigned, while const cannot be reassigned.




// Q2: Can you re-declare a variable with var? What about let and const?

    // Yes var allow redeclare. let and const do not allow redeclaration.
       

// Q3: What is the output of this code?

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

        // Ans : Assignment to constant variable. Because the const variable cannot be reassigned.

// Q4: What is the difference between declaring and initializing a variable?
        // Ans : Declaring means creating the variables with out assigning the values.
        //       Instializing means assigning the the values to variables for the first time. 



// Q5: What will be the output?
// 
// let a;
// console.log(a);

        // Ans : undefined


//Q6: What is hoisting? Give an example.

        // Ans : Hoisting means the prosses starts before executing the value.
        //          the output is undefined
        // console.log(a);
        // var a = 10;
        


//  Q7: What is the difference between null and undefined?
        // Ans : null means the variable has assiend by the empty value
                //  undefined means the the varible was created but  the value was not given.

// ### Q8: What will be the output?

// console.log(typeof null);      object
// console.log(typeof undefined); undefined
// console.log(typeof []);         object
// console.log(typeof {});         object


//  📌 Operators (Questions 9-14)

//  Q9: What is the difference between == and ===?
        // == checks equality after type conversion.
        // === checks value and data type without type conversion.

// Q10: What is the difference between ++i and i++?
        // ++i Increments first, then uses the value.
        // i++ Uses the values first, then incriment.


// ### Q11: What will be the output?
// 
        // let x = 10;
        // let y = "5";
        // console.log(x + y); 105
        // console.log(x - y); 5
        // console.log(x * y); 50 
        // console.log(x / y); 2


// ### Q12: What are logical operators? Explain with examples.

        //Ans : Javascript mainly has 3 logical operators
                // 1.&& 2.|| 3.!

                // 1.&& both values must be true
                // 2.|| any one value  must be true
                // 3.! Revese the boolean value


// ### Q13: What will be the output?

// console.log(5 > 3 && 10 > 5); True
// console.log(5 > 10 || 10 > 5); True
// console.log(!(5 > 3));          False


// Q14: What is the ternary operator? Give an example.
        // Ans : The ternary operator is a short way to write a simple if-else.



//  📌 Type Casting (Questions 15-17)

// Q15: What is the difference between implicit and explicit type casting?
            //Ans : Implicit type conversion :JavaScript automatically converts the type.
                    // Explicit type conversion :The programmer manually converts the type.

// ### Q16: What will be the output?

        // console.log(Number("123"));  123
        // console.log(Number("hello")); NaN
        // console.log(Number(true));      1
        // console.log(Number(false));     0
        // console.log(Boolean(0));        false
        // console.log(Boolean("hello"));   true


//  Q17: What is NaN? Give an example.
            //Ans : NaN is Not a Number, Javascript output when the wrong calculation or 
            //      invalid numeric conversion



// 📌 Conditional Statements (Questions 18-21)

// Q18: What is the difference between if-else and switch?
        // ANS : if-else means the out put was one action will like true or false
                    // swich means checking the value against the multiple pecific cases.


// Q19: What will be the output?
// 
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
//         //Ans :  Adult

//  Q20: What is nested if? Give an example.
        //Ans : one if statement has has inside anothor if statment that is called nested if

        // let age = 20;
        // let traing = true;

        // if (age >= 18) {
        // if (traing) {
        // console.log("Entry allowed");
        // }
        // }

//  Q21: Write a program to check if a number is even or odd using ternary operator.

        // let num = 15;
        // let result = num % 2 === 0 ? "Even" : "Odd";
        // console.log(result);
        

// ---

// ## 📌 Loops (Questions 22-25)

// Q22: What is the difference between while and do-while?
        //Ans : 1. while : The condition is checked before executing the loop.
                //2. dowhile : The loop excicute one time then the condtion will. 



// ### Q23: What will be the output?

// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
            // Ans :   1
            //         2
            //         3
            //         4
            //         5


// Q24: What is the difference between for-of and for-in?
            // Ans : for of means what is inside the keys 
                        //for-in means what is the types of keys 

// Q25: Write a program to find sum of numbers from 1 to 100.

        // let sum = 0;
        // for (let i = 0; i <= 100; i++ ) {
        //     sum = sum + i;
        // }
        //     console.log(sum);
            
// ## 📌 Arrays (Questions 26-27)

// ### Q26: What is the difference between slice and splice?
           // 
        //    Slice is not modify the original Array and its used extract portion of the array. 
        //    Splice is modify the original arry ex : add remove and any modifications.


// ### Q27: What will be the output?

// let arr = [1, 2, 3];
// arr.push(4);            1 2 3 4

// arr.pop();              1 2 3

// arr.unshift(0);         0 1 3 4

// arr.shift();            1 2 3
// console.log(arr);       1 2 3


// ---

//  📌 Functions (Questions 28-30)

//  Q28: What is the difference between function declaration and function expression?

            // Ans : A function declaration defines a named function directly,
            //      while a function expression stores a function inside a variable.

// Q29: What is an arrow function? Give an example.

                // Ans : const add = (a, b) => a + b;

                //         console.log(add(10, 20));


// Q30: What will be the output?
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);

// Ans : Hello


