// 1.What is a variable in JavaScript?
// variable is a named container in memory used to store data values.

// 2.What are the three keywords used to create variables?
//  var, let, and const.

// 3.Write the syntax to create a variable using var.
// var UserName = Arun  ;

// 4.Write the syntax to create a variable using let.
// let UserAge = 28;

// 5.Write the syntax to create a variable using const.
// const UserBirthday = March;

// 6.What is declaration?
//  Declaration is creating a variable using a keyword without necessarily assigning it a value.

// 7.What is initialization?
// Initialization is assigning a value to a variable for the very first time.

// 8. What is reassignment?
// Reassignment is giving a new value to an already initialized variable.

// 9.What is redeclaration?
// Redeclaration is declaring a variable again with the exact same name within the same scope.

// 10.Which keyword allows redeclaration?
//   var

// 11.Which keyword allows reassignment?
//     var and let.

// 12. Which keyword requires initialization when declared?
//     const.

// 13.Identify the declaration and initialization: `let age = 25;`
//     let age is the declaration, and = 25 is the initialization.

// 14. What is the value of a? `var a = 100; console.log(a);`
//     100.

// 15.Change the value of this variable to 200: `let number = 100;`
//     let number = 200;

// 16.  What will be the output? `var a = 10; console.log(a);`
//      10.

// 17. What will be the output? `var a = 10; a = 20; console.log(a);`
//     20.

// 18. What will be the output? `var a = 10; var a = 30; console.log(a);`
//     30.

// 19. Write a var variable named name with the value "John".
//     `var name = "John";`

// 20. Create a var variable named price with the value 500.
//     var price = 500;

// 21. Reassign price from 500 to 1000.
//     price = 1000;

// 22. What will be the output? `var x = 50; x = 100; console.log(x);`
//     100`.

// 23. Can a var variable be reassigned?
//     Yes.

// 24. Can a var variable be redeclared?
//     Yes.

// 25. Write an example of var redeclaration.
//     `var x = 10; var x = 20;

// 26. Create a let variable named age with the value 25.
//     let age = 25;`

// 27. What will be the output? `let age = 20; age = 30; console.log(age);`
//     30`.

// 28. Can a let variable be reassigned?
//     Yes.

// 29. Can a let variable be redeclared?
//     No.

// 30. Find the error: `let name = "John"; let name = "David";`
//     It will throw a `SyntaxError` because a `let` variable cannot be redeclared in the same scope.

// 31. Create a let variable called city and assign "Chennai".
//     let city = "Chennai";`

// 32. Change the value of city to "Salem".
//     city = "Salem";`

// 33. What will be the output? `let x = 10; x = 50; console.log(x);`
//     50`.

// 34. Write a let variable called salary with the value 25000.
//     let salary = 25000;`

// 35. Reassign salary to 30000.
//     salary = 30000;`

// 36. Create a const variable called pi with the value 3.14.
//     const pi = 3.14;`

// 37. Can a const variable be reassigned?
//     No.

// 38. Can a const variable be redeclared?
//     No.

// 39. What is wrong with this code? `const age; age = 25;`
//     A `const` declaration must be initialized with a value at the time it is declared.

// 40. What happens here? `const price = 500; price = 1000;`
//     It will throw a `TypeError` because you cannot reassign a constant variable.

// 41.  Create a const variable called country with the value "India".
//      const country = "India";`

// 42. What will be the output? `const x = 100; console.log(x);`
//     100.

// 43. Which keyword should you use if the value should not be reassigned?
//     const.

// 44. What is the difference between let and const?
//     let allows you to reassign its value later, whereas `const` does not.

// 45. What is the difference between var and const?
//     var allows both redeclaration and reassignment, whereas `const` allows neither.

// 46. Write JavaScript code to print Hello World using console.log().
//     console.log("Hello World");

// 47. Write JavaScript code to print the number 500 using console.log().
//     console.log(500);

// 48. What is the purpose of console.warn()?
//     It outputs a warning message to the web console.

// 49. What is the purpose of console.error()?
//      It outputs an error message to the web console.

// 50. What is the purpose of each? alert()', `prompt()`, `confirm()`, `document.writeln()`, `console.log()
//     alert() shows a message popup, prompt() asks for user input, confirm() asks for an OK/Cancel true/false response, document.writeln() writes text directly to the HTML document, console.log()` prints messages to the console for debugging.


// ==============================PRACTICAL===============================//


// 1. Create a variable for student name, age, and mark and print all three.

const StudentName = "Arun";
console.log(StudentName);

var StudeentAge ="29"
console.log(StudeentAge);

let StudentMark = "90%"
console.log(StudentMark);



//2.Ask the user's name using prompt() and display it using alert().
let userName = prompt("What is your Name?");
alert(userName)


// 3. Ask the user's age using prompt() and print it using console.log().

let userAge = prompt("What is your age?");

    console.log(userAge);

// 4.Ask the user a question using confirm().

let result = "Did you passed all exams?";
 
confirm(result)



//5. Ask the user's name and display it on the webpage using document.writeln().

let UserName = prompt("What is your full name?");

document.writeln(UserName)

End of the day



    












