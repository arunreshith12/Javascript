//=====TASK 1========//

    // var name = "Arun";
    // let age = 25;
    // const city = "Kanniyakumari";
    // var college = "St Hindu College"

//Print all values//

    // console.log(name);
    // console.log(age);
    // console.log(city);
    // console.log(college);

//Chage var value//

    // name = "Reshith";
    // console.log(name);

//Chang let value//

    // age = 30;
    // console.log(age);

//Try changing the const value.//

// city = "Nagercoil";
// console.log(city);

//Try redeclaring each variable and observe what happens.//

    // var name = "Arun Reshith";
    // console.log(name);

// let age = 45;
// console.log(age);

// const city = "Chennai";
// console.log(city);


//======Task 2 — Printing Statements===========//

// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()

    // console.log("Hai Iam Arun Reshith !!");

    // alert("This is the alert ");

    // let con = confirm("Do you confirm for that??");
    // console.log(con);

    // let username = prompt("Enter your name??");
    // console.log(username);

    // document.writeln("Hello all")

//====Task 3 — User Details===//

// Name
// Age
// City
// Qualification

    // let studentName = prompt("Enter your name");
    // let studentAge = prompt("Enter your age");
    // let studentCity = prompt("Enter your city");
    // let qualification = prompt("Enter your qualification");

    // console.log("Name:", studentName);
    // console.log("Age:", studentAge);
    // console.log("City:", studentCity);
    // console.log("Qualification:", qualification);


// 🟡 Data Type Tasks
// Task 4 — Find Data Types
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.

        // let language = "JavaScript";
        // let number = 100;
        // let decimal = 99.5;
        // let valueTrue = true;
        // let valueFalse = false;
        // let undefinedValue = undefined;
        // let nullValue = null;


        // console.log(language, typeof language);

        // console.log(number, typeof number);

        // console.log(decimal, typeof decimal);

        // console.log(valueTrue, typeof valueTrue);

        // console.log(valueFalse, typeof valueFalse);

        // console.log(undefinedValue, typeof undefinedValue);

        // console.log(nullValue, typeof nullValue);


// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
// Second student
// Last student
// Total students
// Use only:
// array[index]
// array.length


    // let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

    // console.log("First student:", students[0]);

    // console.log("Second student:", students[1]);

    // console.log("Last student:", students[students.length - 1]);

    // console.log("Total students:", students.length);


// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// Employee name
// Age
// Role
// First skill
// Last qualification
// Working status
// This follows the same array-inside-object structure from your notes.


        // let employee = {
        //     name: "Arun",
        //     age: 25,
        //     role: "Automation Tester",
        //     skills: ["JavaScript", "Playwright", "HTML", "CSS"],
        //     isWorking: true,
        //     qualification: ["B.E", "Automation Testing"]
        // };

        // console.log("Employee Name:", employee.name);

        // console.log("Age:", employee.age);

        // console.log("Role:", employee.role);

        // console.log("First Skill:", employee.skills[0]);

        // console.log(
        //     "Last Qualification:",
        //     employee.qualification[employee.qualification.length - 1]
        // );

        // console.log("Working Status:", employee.isWorking);


// 🔵 Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation


        // let a = 20;
        // let b = 5;

    // console.log("Addition:", a + b);

    // console.log("Subtraction:", a - b);

    // console.log("Multiplication:", a * b);

    // console.log("Division:", a / b);

    // console.log("Modulus:", a % b);

    // console.log("Exponentiation:", a ** b);


// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.


        // let shirt = 999;
        // let pant = 1499;
        // let shoes = 1999;
        // let bag = 799;

        // let totalPrice = shirt + pant + shoes + bag;

        // console.log("Total Price:", totalPrice);

// Task 9 — Increment & Decrement
// Find the output without running the code first.

// A
// let a = 10;

// let b = a++;

// console.log(a); 11
// console.log(b); 10

// B
// let a = 10; 

// let b = ++a; 

// console.log(a); 11
// console.log(b); 11

// C
// let a = 10;
// let b = a--;

// console.log(a); 9
// console.log(b); 10

// D
// let a = 10;
// let b = --a;

// console.log(a); 9
// console.log(b); 9

// 🟣 Assignment Operator Tasks
// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.

        // let num1 = 10;
        // num1 += 5;
        // console.log("num += 5:", num1);

        // let num2 = 10;
        // num2 -= 3;
        // console.log("num -= 3:", num2);


        // let num3 = 10;
        // num3 *= 2;
        // console.log("num *= 2:", num3);


        // let num4 = 10;
        // num4 /= 4;
        // console.log("num /= 4:", num4);

        // let num5 = 10;
        // num5 %= 3;
        // console.log("num %= 3:", num5);


        // let num6 = 10;
        // num6 **= 2;
        // console.log("num **= 2:", num6);


// 🔴 Comparison Operator Tasks
// Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
// Task 11 — Find Output
// Predict the result:
// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 >= 10);
// console.log(10 <= 9);

// console.log(5 == "5");
// console.log(5 === "5");

// console.log(10 != "10");
// console.log(10 !== "10");


        // console.log(10 > 5);
        // Output: true

        // console.log(10 < 5);
        // Output: false

        // console.log(10 >= 10);
        // Output: true

        // console.log(10 <= 9);

        // console.log(5 == "5");
        // Output: true

        // console.log(5 === "5");
        // Output: false

        // console.log(10 != "10");
        // Output: false

        // console.log(10 !== "10");
        // Output: true



// 🟠 Logical Operator Tasks
// Task 12 — AND
// Find the output:
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true && true);
// // Output: true

// console.log(true && false);
// // Output: false

// console.log(false && true);
// // Output: false

// console.log(false && false);
// // Output: false



// Task 13 — OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(true || true);
// Output: true

// console.log(true || false);
// Output: true

// console.log(false || true);
// Output: true

// console.log(false || false);
// Output: false


// Task 14 — NOT
// console.log(!true);
// console.log(!false);
// console.log(!(5 > 10));
// console.log(!(10 > 5));


    // console.log(!true);
    // Output: false

    // console.log(!false);
    // Output: true

    // console.log(!(5 > 10));
    // Output: true

    // console.log(!(10 > 5));
    // Output: false


// 🔥 Task 15 — Combination
// Find the output without executing:
// console.log(5 == "5" && !(5 === 5) || 6 > 7);

// console.log(10 > 5 && 8 < 12 || 4 === "4");

// console.log(7 === 7 && 10 != "10" || 5 >= 5);

// console.log(15 < 10 || 20 > 15 && 5 == "5");
// These follow the same comparison + logical style in your code.


// console.log(5 == "5" && !(5 === 5) || 6 > 7);
// Output: false

// console.log(10 > 5 && 8 < 12 || 4 === "4");
// Output: true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);
// Output: true

// console.log(15 < 10 || 20 > 15 && 5 == "5");
// Output: true


// 🟤 Ternary Operator Tasks
// Task 16 — Voting
// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"

        // let votingAge = 20;

        // let votingResult =
        //     votingAge >= 18
        //         ? "Eligible to vote"
        //         : "Not eligible";

        // console.log(votingResult);



// Task 17 — Password
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"

        // let password = true;

        // let loginResult =
        //     password
        //         ? "Login successful"
        //         : "Wrong password";

        // console.log(loginResult);



// 🟢 Concatenation & Template String

// Task 18 — User Introduction
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// Using +
// Using template literals `${}`
// Your notes cover both approaches.


        // let nameValue = "Naveen";
        // let ageValue = 25;
        // let cityValue = "Trichy";

        // console.log(
        //     "My name is " + nameValue +
        //     ". I am " + ageValue +
        //     " years old. I live in " + cityValue + "."
        // );

        // console.log(
        //     `My name is ${nameValue}. I am ${ageValue} years old. I live in ${cityValue}.`
        // );




// 🔵 Type Casting Tasks
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.


        // let stringValue1 = String(100);

        // console.log(stringValue1);
        // console.log(typeof stringValue1);

        // let stringValue2 = String(true);

        // console.log(stringValue2);
        // console.log(typeof stringValue2);

        // let stringValue3 = String(undefined);

        // console.log(stringValue3);
        // console.log(typeof stringValue3);

        // let stringValue4 = String(null);

        // console.log(stringValue4);
        // console.log(typeof stringValue4);

        // let stringValue5 = String([1, 2]);

        // console.log(stringValue5);
        // console.log(typeof stringValue5);


// Task 20 — Number Conversion
// Predict the output:
// console.log(Number()); 0
// console.log(Number("")); 0
// console.log(Number("123")); 123
// console.log(Number("a1")); NaN
// console.log(Number(true)); 1
// console.log(Number(false)); 0
// console.log(Number(undefined)); NaN
// console.log(Number(null)); 0
// Your notes specifically cover these conversions.

// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());     false
// console.log(Boolean(""));    false
// console.log(Boolean("hello")); true
// console.log(Boolean(123));      true
// console.log(Boolean(true));     true 
// console.log(Boolean(false));    false 
// console.log(Boolean(undefined)); false
// console.log(Boolean(null)); false
// console.log(Boolean([]));   true
// console.log(Boolean({}));       true



// 🔴 Flow Control Tasks
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else

        //     let voteAge = Number(prompt("Enter your age"));

        // if (voteAge >= 18) {

        //     console.log("You can vote");

        // } else {

        //     console.log("You can't vote");

        // }






// Task 23 — Positive or Negative
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.

        // let checkNumber = Number(prompt("Enter a number"));

        // if (checkNumber > 0) {

        //     console.log("Positive");

        // } else if (checkNumber < 0) {

        //     console.log("Negative");

        // } else {

        //     console.log("Zero");

        // }


// Task 24 — Grade System
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.

        // let marks = Number(prompt("Enter your marks"));

        // if (marks >= 90 && marks <= 100) {

        //     console.log("A Grade");

        // } else if (marks >= 80 && marks <= 89) {

        //     console.log("B Grade");

        // } else if (marks >= 70 && marks <= 79) {

        //     console.log("C Grade");

        // } else if (marks >= 60 && marks <= 69) {

        //     console.log("D Grade");

        // } else if (marks < 60) {

        //     console.log("Fail");

        // } else {

        //     console.log("Invalid marks");

        // }



// 🟣 Nested If Task
// Task 25 — Job Eligibility
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// This is based directly on the nested-if structure in your code.


        // let jobAge = Number(prompt("Enter your age"));
        // let jobHeight = Number(prompt("Enter your height"));
        // let jobWeight = Number(prompt("Enter your weight"));

        // if (jobAge >= 18) {

        //     if (jobHeight >= 160) {

        //         if (jobWeight >= 60) {

        //             console.log("Congratulations! You are selected");

        //         } else {

        //             console.log("Not selected - Weight should be 60 or above");

        //         }

        //     } else {

        //         console.log("Not selected - Height should be 160 cm or above");

        //     }

        // } else {

        //     console.log("Not selected - Age should be 18 or above");

        // }




// 🟡 Switch Tasks
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go


        // let trafficLight = prompt("Enter traffic light color");

        // switch (trafficLight) {

        //     case "red":
        //         console.log("Stop");
        //         break;

        //     case "yellow":
        //         console.log("Ready");
        //         break;

        //     case "green":
        //         console.log("Go");
        //         break;

        //     default:
        //         console.log("Invalid color");

        // }





// Task 27 — Day
// Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// default → Invalid day

        // let day = 1;

        // switch (day) {

        //     case 1:
        //         console.log("Monday");
        //         break;

        //     case 2:
        //         console.log("Tuesday");
        //         break;

        //     case 3:
        //         console.log("Wednesday");
        //         break;

        //     case 4:
        //         console.log("Thursday");
        //         break;

        //     case 5:
        //         console.log("Friday");
        //         break;

        //     case 6:
        //         console.log("Saturday");
        //         break;

        //     case 7:
        //         console.log("Sunday");
        //         break;

        //     default:
        //         console.log("Invalid day");

        // }







        // 🏆 FINAL MINI PROJECT
        // Task 28 — Student Result System
        // Create a small Student Result System using everything you've learned.
        // Step 1 — Get user details
        // Name
        // Age
        // City
        // Step 2 — Get marks
        // Tamil
        // English
        // Maths
        // Step 3 — Calculate
        // Total
        // Average
        // Step 4 — Check result
        // Use if / else if / else:
        // 90+ → A
        // 80+ → B
        // 70+ → C
        // 60+ → D
        // Below 60 → Fail
        // Step 5 — Check voting
        // Age >= 18
        // Step 6 — Display
        // Use a template string:
        // Name: Naveen
        // Age: 22
        // City: Trichy
        // Total: 250
        // Average: 83.33
        // Grade: B
        // Voting: Eligible


        let resultName = prompt("Enter your name");

        let resultAge = Number(
            prompt("Enter your age")
        );

        let resultCity = prompt("Enter your city");


        let tamilMark = Number(
            prompt("Enter Tamil mark")
        );

        let englishMark = Number(
            prompt("Enter English mark")
        );

        let mathsMark = Number(
            prompt("Enter Maths mark")
        );



        let total = tamilMark + englishMark + mathsMark;

        console.log("Total:", total);


        let average = total / 3;

        console.log("Average:", average);


        let grade;

        if (average >= 90) {

            grade = "A";

        } else if (average >= 80) {

            grade = "B";

        } else if (average >= 70) {

            grade = "C";

        } else if (average >= 60) {

            grade = "D";

        } else {

            grade = "Fail";

        }




        let votingStatus;

        if (resultAge >= 18) {

            votingStatus = "Eligible";

        } else {

            votingStatus = "Not Eligible";

        }

        console.log(`


        Name    : ${resultName}
        Age     : ${resultAge}
        City    : ${resultCity}

        Tamil   : ${tamilMark}
        English : ${englishMark}
        Maths   : ${mathsMark}

        Total   : ${total}
        Average : ${average.toFixed(2)}
        Grade   : ${grade}
        Voting  : ${votingStatus}

        `);

















