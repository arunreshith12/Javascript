// ========Task 1=========
// let name = "Arun";
// let department = "Computer Science";

// // Five subject marks
// let mark1 = 85;
// let mark2 = 90;
// let mark3 = 78;
// let mark4 = 88;
// let mark5 = 92;


// // Function to calculate student result
// function calculateResult() {

//     // Calculate total marks
//     let total = mark1 + mark2 + mark3 + mark4 + mark5;

//     // Calculate average
//     let average = total / 5;

//     // Check Pass or Fail
//     let result;

//     if (average >= 50) {
//         result = "PASS";
//     } else {
//         result = "FAIL";
//     }

//     // Assign grade
//     let grade;

//     if (average >= 90) {
//         grade = "A";
//     } else if (average >= 75) {
//         grade = "B";
//     } else if (average >= 60) {
//         grade = "C";
//     } else if (average >= 50) {
//         grade = "D";
//     } else {
//         grade = "Fail";
//     }


//     // Display result
//     console.log("===== STUDENT RESULT =====");
//     console.log("Name:", name);
//     console.log("Department:", department);
//     console.log("Total Marks:", total);
//     console.log("Average:", average);
//     console.log("Result:", result);
//     console.log("Grade:", grade);
// }


// // Call the function
// calculateResult();



// //==========Task 2=============//

// // Employee object
// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };


// // Function to calculate salary
// function calculateSalary(employee) {

//     // Get basic salary
//     let basicSalary = employee.salary;

//     // Initially bonus is 0
//     let bonus = 0;


//     // If experience is 5 or more
//     if (employee.experience >= 5) {

//         // 15% bonus
//         bonus = basicSalary * 0.15;

//     }

//     // If experience is 2 or more
//     else if (employee.experience >= 2) {

//         // 10% bonus
//         bonus = basicSalary * 0.10;
//     }


//     // Calculate final salary
//     let finalSalary = basicSalary + bonus;


//     // Display details
//     console.log("===== EMPLOYEE SALARY =====");
//     console.log("Name:", employee.name);
//     console.log("Role:", employee.role);
//     console.log("Basic Salary:", basicSalary);
//     console.log("Bonus:", bonus);
//     console.log("Final Salary:", finalSalary);
// }


// // Call function
// calculateSalary(employee);





// ====================Task 3==================
// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];

// // 1. Products above ₹2,000
// let expensiveProducts = products.filter(product => product.price > 2000);

// console.log("Products above ₹2,000:");
// console.log(expensiveProducts);


// // 2. Only electronics
// let electronics = products.filter(product => product.category === "electronics");

// console.log("Electronics:");
// console.log(electronics);


// // 3. First product below ₹1,000
// let cheapProduct = products.find(product => product.price < 1000);

// console.log("First product below ₹1,000:");
// console.log(cheapProduct);


// // 4. Total price of all products
// let totalPrice = products.reduce((total, product) => {
//     return total + product.price;
// }, 0);

// console.log("Total Price:", totalPrice);


// // 5. Any product above ₹50,000?
// let hasExpensiveProduct = products.some(product => product.price > 50000);

// console.log("Any product above ₹50,000?", hasExpensiveProduct);


// // 6. Every product above ₹500?
// let allAbove500 = products.every(product => product.price > 500);

// console.log("Every product above ₹500?", allAbove500);


// ====================Task 4==================
// let employees = [
//     {
//         id: 101,
//         name: "Kavin",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Arun",
//         role: "Backend Developer",
//         salary: 55000
//     },
//     {
//         id: 103,
//         name: "Priya",
//         role: "UI Designer",
//         salary: 45000
//     },
//     {
//         id: 104,
//         name: "Dinesh",
//         role: "Full Stack Developer",
//         salary: 70000
//     },
//     {
//         id: 105,
//         name: "Meena",
//         role: "Tester",
//         salary: 35000
//     },
//     {
//         id: 106,
//         name: "Karthi",
//         role: "DevOps Engineer",
//         salary: 60000
//     }
// ];


// // 1. Display all employee names

// let employeeNames = employees.map(employee => employee.name);

// console.log("Employee Names:");
// console.log(employeeNames);


// // 2. Employees earning above ₹40,000

// let highSalaryEmployees = employees.filter(employee => employee.salary > 40000);

// console.log("Employees earning above ₹40,000:");
// console.log(highSalaryEmployees);


// // 3. Find employee with ID 103

// let employee103 = employees.find(employee => employee.id === 103);

// console.log("Employee with ID 103:");
// console.log(employee103);


// // 4. Calculate total salary

// let totalSalary = employees.reduce((total, employee) => {
//     return total + employee.salary;
// }, 0);

// console.log("Total Salary:", totalSalary);


// // 5. Find highest-paid employee

// let highestPaid = employees.reduce((highest, employee) => {
//     return employee.salary > highest.salary ? employee : highest;
// });

// console.log("Highest Paid Employee:");
// console.log(highestPaid);


// // 6. Sort highest salary to lowest

// let sortedEmployees = [...employees].sort((a, b) => {
//     return b.salary - a.salary;
// });

// console.log("Salary High to Low:");
// console.log(sortedEmployees);


// // 7. Create array containing only names

// let namesOnly = employees.map(employee => employee.name);

// console.log("Names Only:");
// console.log(namesOnly);


// ====================Task 5==================

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];


// // Function to calculate cart
// function calculateCart(cart) {

//     // Calculate total cart value
//     let total = cart.reduce((sum, item) => {

//         // Item total = price × quantity
//         let itemTotal = item.price * item.quantity;

//         console.log(
//             item.name,
//             "Item Total:",
//             itemTotal
//         );

//         return sum + itemTotal;

//     }, 0);


//     // Calculate discount
//     let discount = 0;

//     if (total > 50000) {
//         discount = total * 0.10;
//     }


//     // Final amount
//     let finalAmount = total - discount;


//     console.log("Total Cart Value:", total);
//     console.log("Discount:", discount);
//     console.log("Final Payable Amount:", finalAmount);
// }


// // Call function
// calculateCart(cart);

// ====================Task 6 ==================

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];


// // 1. Display all student names

// let studentNames = students.map(student => student.name);

// console.log("Student Names:");
// console.log(studentNames);


// // 2. Students who scored above 80

// let above80 = students.filter(student => student.mark > 80);

// console.log("Students above 80:");
// console.log(above80);


// // 3. Find student named Priya

// let priya = students.find(student => student.name === "Priya");

// console.log("Priya:");
// console.log(priya);


// // 4. Calculate average mark

// let totalMarks = students.reduce((total, student) => {
//     return total + student.mark;
// }, 0);

// let averageMark = totalMarks / students.length;

// console.log("Average Mark:", averageMark);


// // 5. Check whether anyone failed

// let anyoneFailed = students.some(student => student.mark < 50);

// console.log("Anyone Failed?", anyoneFailed);


// // 6. Check whether everyone scored above 40

// let everyoneAbove40 = students.every(student => student.mark > 40);

// console.log("Everyone above 40?", everyoneAbove40);


// // 7. Sort students by marks

// let sortedStudents = [...students].sort((a, b) => {
//     return b.mark - a.mark;
// });

// console.log("Students sorted by marks:");
// console.log(sortedStudents);


// ====================Task 7 ==================

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// // 1. Numbers × 2

// let doubled = numbers.map(number => number * 2);

// console.log("Numbers × 2:");
// console.log(doubled);


// // 2. Even numbers

// let evenNumbers = numbers.filter(number => number % 2 === 0);

// console.log("Even Numbers:");
// console.log(evenNumbers);


// // 3. Numbers greater than 15

// let greaterThan15 = numbers.filter(number => number > 15);

// console.log("Numbers greater than 15:");
// console.log(greaterThan15);


// // 4. First number greater than 20

// let firstGreater20 = numbers.find(number => number > 20);

// console.log("First number greater than 20:");
// console.log(firstGreater20);


// // 5. Total of all numbers

// let total = numbers.reduce((sum, number) => {
//     return sum + number;
// }, 0);

// console.log("Total:", total);


// // 6. Any number greater than 40?

// let anyGreater40 = numbers.some(number => number > 40);

// console.log("Any number greater than 40?", anyGreater40);


// // 7. Every number positive?

// let allPositive = numbers.every(number => number > 0);

// console.log("Every number positive?", allPositive);


// // 8. Sort highest to lowest

// let descending = [...numbers].sort((a, b) => b - a);

// console.log("Highest to Lowest:");
// console.log(descending);


// ====================Task 8 ==================

// // Ask user to enter a sentence
// let sentence = prompt("Enter a sentence:");


// // 1. Total characters

// console.log("Total Characters:", sentence.length);


// // 2. Uppercase

// console.log("Uppercase:", sentence.toUpperCase());


// // 3. Lowercase

// console.log("Lowercase:", sentence.toLowerCase());


// // 4. Contains JavaScript?

// console.log(
//     "Contains JavaScript:",
//     sentence.includes("JavaScript")
// );


// // 5. First character

// console.log("First Character:", sentence[0]);


// // 6. Last character

// console.log(
//     "Last Character:",
//     sentence[sentence.length - 1]
// );


// // 7. Number of words

// let words = sentence.trim().split(" ");

// console.log("Number of Words:", words.length);


// // 8. Replace JavaScript with Python

// let replacedSentence = sentence.replace("JavaScript", "Python");

// console.log("Replaced Sentence:", replacedSentence);


// // 9. Convert sentence into array

// let sentenceArray = sentence.split(" ");

// console.log("Sentence Array:", sentenceArray);



// ==================== Final Task ==================

// // ==========================================
// // EMPLOYEE DATA
// // ==========================================

// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },

//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },

//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];


// // ==========================================
// // 1. EMPLOYEE LIST
// // ==========================================

// console.log("===== ALL EMPLOYEES =====");

// employees.forEach(employee => {
//     console.log(employee);
// });


// // ==========================================
// // 2. SEARCH EMPLOYEE BY NAME
// // ==========================================

// function searchEmployee(name) {

//     let employee = employees.find(
//         employee => employee.name.toLowerCase() === name.toLowerCase()
//     );

//     console.log("===== SEARCH RESULT =====");
//     console.log(employee);
// }

// searchEmployee("Arun");


// // ==========================================
// // 3. DEPARTMENT FILTER
// // ==========================================

// function filterDepartment(department) {

//     let result = employees.filter(
//         employee => employee.department === department
//     );

//     console.log("===== DEPARTMENT FILTER =====");
//     console.log(result);
// }

// filterDepartment("IT");


// // ==========================================
// // 4. SALARY FILTER
// // ==========================================

// let salaryAbove50000 = employees.filter(
//     employee => employee.salary > 50000
// );

// console.log("===== SALARY ABOVE ₹50,000 =====");
// console.log(salaryAbove50000);


// // ==========================================
// // 5. TOTAL COMPANY SALARY
// // ==========================================

// let totalSalary = employees.reduce(
//     (total, employee) => total + employee.salary,
//     0
// );

// console.log("===== TOTAL COMPANY SALARY =====");
// console.log("₹" + totalSalary);


// // ==========================================
// // 6. HIGHEST SALARY
// // ==========================================

// let highestSalaryEmployee = employees.reduce(
//     (highest, employee) => {

//         if (employee.salary > highest.salary) {
//             return employee;
//         }

//         return highest;
//     }
// );

// console.log("===== HIGHEST SALARY =====");
// console.log(highestSalaryEmployee);


// // ==========================================
// // 7. EMPLOYEES WITH MORE THAN 3 YEARS
// // ==========================================

// let experiencedEmployees = employees.filter(
//     employee => employee.experience > 3
// );

// console.log("===== EXPERIENCE ABOVE 3 YEARS =====");
// console.log(experiencedEmployees);


// // ==========================================
// // 8. SORT LOW → HIGH
// // ==========================================

// let salaryLowToHigh = [...employees].sort(
//     (a, b) => a.salary - b.salary
// );

// console.log("===== SALARY LOW → HIGH =====");
// console.log(salaryLowToHigh);


// // ==========================================
// // 9. SORT HIGH → LOW
// // ==========================================

// let salaryHighToLow = [...employees].sort(
//     (a, b) => b.salary - a.salary
// );

// console.log("===== SALARY HIGH → LOW =====");
// console.log(salaryHighToLow);


// // ==========================================
// // 10. STATISTICS
// // ==========================================

// let numberOfEmployees = employees.length;

// let averageSalary = totalSalary / numberOfEmployees;

// console.log("===== EMPLOYEE STATISTICS =====");

// console.log("Total Employees:", numberOfEmployees);

// console.log("Total Salary:", "₹" + totalSalary);

// console.log(
//     "Highest Salary:",
//     "₹" + highestSalaryEmployee.salary
// );

// console.log(
//     "Average Salary:",
//     "₹" + Math.round(averageSalary)
// );
