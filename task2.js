// JavaScript Tasks
// 🟢 Task 1 — var, let, const

// Create three variables:
// var → student name
// let → student age
// const → college name
// var StudentName = "Arun";
// let StudentAge = 29;
// const College = "St Hindu College"


// Requirements:
// Print all three values.
// console.log(StudentName,StudentAge,College);


// Change the var value.
//  var StudentName = "Reshith";
 
// Change the let value.
// let StudentAge = 30;

// Try changing the const value and observe the error.

//       const College ="Scott College"==

// Try redeclaring the var variable.

//      var StudentName = "Arun Reshith"
//      console.log(StudentName);


// Try redeclaring the let variable and observe the error.
// let StudentAge = 45;
// console.log(StudentAge);


// 🟢 Task 2 — User Information
// Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy
// Answer
        // let username = prompt("Enter your name?")
        // console.log("Name: "+username);

        // let userAge = prompt("Enter your age?")
        // console.log("Age: "+userAge);
 
        // let userCity = prompt("Enter your city?");
        // console.log("City: "+userCity);

// 🟢 Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().
        // let userName = prompt("What is your name?");
        // alert("Wellcome " + userName + "!");


// 🟢 Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26

    // let birthYear = prompt("What is your birth year?");
    // console.log("Birth Year: " + birthYear);

    // let userAge = 2026 - Number(birthYear);
    //  console.log("Age: "+userAge);


// 🔵 Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.

        // console.log(typeof "Hello");
        // console.log(typeof 100);
        // console.log(typeof 25.5);
        // console.log(typeof true);
        // console.log(typeof false);
        // console.log(typeof undefined);
        // console.log(typeof null);



// Task 6 — Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent

// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent

        // let studerntInfo = {
        //     name : "Arun Reshith",
        //     age  : 28,
        //     city :"Kanyakumari",
        //     qualification : "BA English",
        //     isStudent  : true
        // };



        // console.log(studerntInfo);
        // console.log(studerntInfo.name);
        // console.log(studerntInfo.age);
        // console.log(studerntInfo.qualification);
        // console.log(studerntInfo.isStudent);



// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya

// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// Hint:
// array.length
// array.length - 1

        // let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"]

        // console.log(fruits[0]);
        // console.log(fruits[1]);
        // console.log(fruits[fruits.length-1]);
        // console.log(fruits.length);



// 🟡 Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.

        // let a = 20;
        // let b =5;

        // console.log("Addition: ", a+b);
        // console.log("Subtraction: ",a-b);
        // console.log("Multiplication: ",a*b);
        // console.log("Division: ",a/b);
        // console.log("Modulus: ",a%b);
        // console.log("Exponentiation: ",a**b);


// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497

        // let Shirt = 999;
        // let Pant  = 1499;
        // let Shoes = 1999;

        // let total = Shirt + Pant + Shoes;

        // console.log(total);


// Task 10 — Simple Marks Calculation
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// Total marks
// Average marks


    // let tamil = 80;
    // let english = 75;
    // let maths = 90;

    // let total = tamil + english + maths;

    // let average = total / 3;

    // console.log("Total Mark: ",total);
    // console.log("Average Marks: ",average);
    
    
// 🟠 Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);
// Write your expected output first, then run it.


        // let a = 10;
        // let b = a++;

        // console.log(a); 11
        // console.log(b); 10
        


// Task 12 — Pre Increment
// Predict the output:
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

        // let a = 10;     11
        // let b = ++a;    11

        // console.log(a); 11
        // console.log(b); 11
        
        

// Task 13 — Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);  

        // let a = 20;
        // let b = a--;

        // console.log(a); 19
        // console.log(b); 20



// Task 14 — Pre Decrement
// Predict:
// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);


        // let a = 20;
        // let b = --a;

        // console.log(a);19
        // console.log(b);19


// 🔴 Challenge Tasks
// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// Students should write the answer first and then verify it.


        // let a = 5;

        // let b = a++;

        // let c = ++a;

        // let d = b--;

        // console.log(a); 7

        // console.log(b);4

        // console.log(c);7
        // console.log(d);5



// Task 16 — Assignment Operators
// Given:
// let num = 10;
// Perform each operation separately:
// +=
// -=
// *=
// /=
// %=
// **=
// Example:
// num += 5;
// console.log(num);

        // let num = 10;

        // num += 5;
        // console.log(num);

        // num -= 5;
        // console.log(num);

        // num *= 8;
        // console.log(num);

        // num /= 7;
        // console.log(num);

        // num %= 4;
        // console.log(num);

        // num **= 9;
        // console.log(num);


// 🏆 Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College

// Array
// Store 5 favorite subjects.

// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent

// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object


        // let name = "Arun";
        // let age = 28;
        // let city = "Nagercoil"
        // let college = "St Hindu College"

        // let subjects = ["Tamil","English","Maths","Science","Social"]   

        // let studentProfile ={
        //     name : name,
        //     age  : age,
        //     city : city,
        //     subjects: subjects,
        //     isStudent : true
        // };

        // console.log("Student Name: ",studentProfile.name);
        // console.log("Student Age: ",studentProfile.age);
        // console.log("City: ",studentProfile.city);
        // console.log("First Subject: ",studentProfile.subjects[0]);
        // console.log("Last Subject: ",studentProfile.subjects[studentProfile.subjects.length - 1]);
        // console.log("Total Subject: ",studentProfile.subjects.length);
        // console.log("Compleate Object: ",studentProfile);




// 🔥 Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// Restriction: Use only the concepts you have taught so far:
// var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.


        // let num1 = Number(prompt("Enter first number:"));
        // let num2 = Number(prompt("Enter second number:"));


        // let addition = num1 + num2;
        // let subtraction = num1 - num2;
        // let multiplication = num1 * num2;
        // let division = num1 / num2;
        // let modulus = num1 % num2;
        // let power = num1 ** num2;

        // console.log("Addition:", addition);
        // console.log("Subtraction:", subtraction);
        // console.log("Multiplication:", multiplication);
        // console.log("Division:", division);
        // console.log("Modulus:", modulus);
        // console.log("Power:", power);


        
        
        
        
        














        














 


        

        




