//================ TASK 1 ===================//

    // for (let i = 1; i <= 10; i++) {
    //     console.log(i);
    // }


//================ TASK 2 ===================//

        // for (let i = 10; i >= 1; i--) {
        //     console.log(i);
        // }



//================ TASK 3 ===================//

    // for (let i = 1; i <= 20; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //     }
    // }


//================ TASK 4 ===================//
        // for (let i = 1; i <= 20; i++) {
        //     if (i % 2 !== 0) {
        //         console.log(i);
        //     }
        // }

//================ TASK 5 ===================//
    // let number = Number(prompt("Enter a number:"));

    // for (let i = 1; i <= 10; i++) {
    //     console.log(number + " x " + i + " = " + (number * i));
    // }

//================ TASK 6 ===================//
    // let i = 10;

    // while (i >= 1) {
    //     console.log(i);
    //     i--;
    // }


//================ TASK 7 ===================//
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log(sum);


//================ TASK 8 ===================//
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



//================ TASK 9 ===================//

//  OUTPUT :10

// REASON:A do...while loop always executes the code block at least once.


//================ TASK 10 ===================//

    // let name = "javascript";

    // for (let character of name) {
    //     console.log(character);
    // }


//================ TASK 11 ===================//

    // let fruits = ["apple", "orange", "banana", "mango", "grapes"];

    // for (let fruit of fruits) {
    //     console.log(fruit);
    // }


//================ TASK 12 ===================//

    // let students = ["Arun", "Priya", "Naveen", "Kumar", "Divya"];

    // for (let student of students) {
    //     console.log("Student: " + student);
    // }

//================ TASK 13 ===================//

    // let employee = {
    //     name: "Arun",
    //     age: 25,
    //     role: "Developer",
    //     city: "Chennai"
    // };

    // for (let key in employee) {
    //     console.log(key, employee[key]);
    // }

//================ TASK 14 ===================//

// let product = {
//     productName: "Laptop",
//     price: 50000,
//     brand: "Dell",
//     category: "Electronics",
//     stock: 10
// };

// for (let key in product) {
//     console.log(key, product[key]);
// }

//================ TASK 15 ===================//

// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// welcome();
// welcome();
// welcome();


//================ TASK 16 ===================//

// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Naveen");
// greet("Arun");
// greet("Priya");


//================ TASK 17 ===================//

    // function student(name, age, department) {
    //     console.log("Name:", name);
    //     console.log("Age:", age);
    //     console.log("Department:", department);
    //     console.log("----------------");
    // }

    // student("Arun", 25, "IT");
    // student("Priya", 24, "HR");
    // student("Naveen", 26, "Testing");

//================ TASK 18 ===================//

    // function add(a, b) {
    //     return a + b;
    // }

    // let result = add(10, 20);

    // console.log(result);


//================ TASK 19 ===================//

        // function salary(amount) {
    //     return amount;
    // }

    // let employeeSalary = salary(50000);

    // console.log(employeeSalary);


//================ TASK 20 ===================//

    // function bonus(salary, bonusAmount) {
    //     return salary + bonusAmount;
    // }

    // let total = bonus(50000, 5000);

    // console.log("Total Salary:", total);


//================ TASK 21 ===================//

    // function employee(name, role = "Developer") {
    //     console.log("Name:", name);
    //     console.log("Role:", role);
    // }

    // employee("Arun");
    // employee("Priya", "Designer");


//================ TASK 22 ===================//

    // function square(number) {
    //     return number * number;
    // }

    // console.log(square(2));
    // console.log(square(3));
    // console.log(square(4));
    // console.log(square(5));
    // console.log(square(6));


//================ TASK 23 ===================//

    // let calculate = function(a, b) {
    //     return a + b;
    // };

    // let result = calculate(10, 20);

    // console.log(result);


//================ TASK 24 ===================//

    // let multiply = (a, b) => {
    //     return a * b;
    // };

    // console.log(multiply(10, 5));


//================ TASK 25 ===================//

    // function test() {

    //     if (true) {

    //         var a = 10;
    //         let b = 20;
    //         const c = 30;

    //         console.log(a);
    //         console.log(b);
    //         console.log(c);
    //     }

    //     console.log(a);
    //     console.log(b);
    //     console.log(c);
    // }

    // test();

    // ANSWER :

            // var a   Accessible because var is function-scoped.
            // let b   Not accessible because let is block-scoped.
            // const c  Not accessible because const is block-scoped.


//================ TASK 26 ===================//

// console.log(a);

// var a = 10;

  //Answer :
            // The declaration of var a is hoisted to the top, but its value is assigned later.

//================ TASK 27 ===================//

// Predict:
// console.log(b);

// let b = 20;
// let is hoisted but cannot be accessed before its declaration because of the Temporal Dead Zone

//================ TASK 28 ===================//

// console.log(c);

// const c = 30;

        // const, like let, cannot be accessed before its declaration.

//================ TASK 29 ===================//
    // 1.
    // (function() {
    //     console.log("Welcome to JavaScript");
    // })();

    // 2.
    // (function(product, discount) {
    //     console.log(product + " has a " + discount + "% discount");
    // })("Laptop", 20);

//================ TASK 30 ===================//

// function welcome() {
//     console.log("Welcome");
// }

// function execute(callback) {
//     callback();
// }

// execute(welcome);

//OUT PUT :
    // Welcome

    //welcome  → Callback
    //execute  → Higher-Order Function

//================ TASK 31 ===================//

// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }

// let result = cashback();

// for (let value of result) {
//     console.log(value);
// }
//================ TASK 32 ===================//

// Employee Data

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 26,
        department: "Testing",
        role: "Automation Tester",
        salary: 45000
    }
];


// 1. for...of
// Print every employee

console.log("EMPLOYEE INFORMATION");

for (let employee of employees) {
    console.log(employee.name);
    console.log(employee.age);
    console.log(employee.department);
    console.log(employee.role);
    console.log(employee.salary);
    console.log("----------------");
}


// 2. for...in
// Print keys and values

console.log("KEYS AND VALUES");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}


// 3 & 4. Function with Parameters
// Display employee information

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}

console.log("DISPLAY USING FUNCTION");

for (let employee of employees) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}


// 5. Return
// Function returns employee salary

function getSalary(employee) {
    return employee.salary;
}

console.log("EMPLOYEE SALARIES");

for (let employee of employees) {

    let salary = getSalary(employee);

    console.log(employee.name + " Salary:", salary);
}


// 6. Condition
// Check salary >= 40000

console.log("SALARY CHECK");

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}


// 7. Arrow Function
// Calculate annual salary

let annualSalary = (salary) => {
    return salary * 12;
};

console.log("ANNUAL SALARY");

for (let employee of employees) {

    console.log(
        employee.name + ": " + annualSalary(employee.salary)
    );
}


// 8. Generator
// Employee Benefits

function* benefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

console.log("EMPLOYEE BENEFITS");

let employeeBenefits = benefits();

for (let benefit of employeeBenefits) {
    console.log(benefit);
}