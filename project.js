// ======================================================
// EMPLOYEE MANAGEMENT SYSTEM
// ======================================================


// ======================================================
// 1. GLOBAL VARIABLES
// ======================================================

// API URL
const API_URL = "https://dummyjson.com/users";


// Main employee array
let employees = [];


// Current department filter
let selectedDepartment = "All";


// Current search text
let searchText = "";


// 2. DOM ELEMENTS

const employeeContainer =
    document.getElementById("employeeContainer");

const employeeCount =
    document.getElementById("employeeCount");

const totalSalary =
    document.getElementById("totalSalary");

const averageSalary =
    document.getElementById("averageSalary");

const highestSalary =
    document.getElementById("highestSalary");

const highestEmployee =
    document.getElementById("highestEmployee");

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const employeeForm =
    document.getElementById("employeeForm");

const sortSelect =
    document.getElementById("sortSelect");

const statusMessage =
    document.getElementById("statusMessage");


// 3. FETCH EMPLOYEES

function fetchEmployees() {

    statusMessage.innerText =
        "Loading employees...";

    statusMessage.style.backgroundColor =
        "#e0f2fe";

    statusMessage.style.color =
        "#0369a1";


    fetch(API_URL)

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "API request failed"
                );

            }

            return response.json();

        })

        .then(data => {

            console.log("API Data:", data);


            
            employees = data.users.map(user => {

                const {
                    id,
                    firstName,
                    lastName,
                    age,
                    email,
                    phone,
                    image,
                    company
                } = user;


                return {

                    id: id,

                    name:
                        `${firstName} ${lastName}`,

                    age: age,

                    email: email,

                    phone: phone,

                    department:
                        company?.department ||
                        getRandomDepartment(),

                    image: image,
                    salary:
                        generateSalary(age)

                };

            });


            displayEmployees();


            statusMessage.innerText =
                "Employee data loaded successfully.";

            statusMessage.style.backgroundColor =
                "#dcfce7";

            statusMessage.style.color =
                "#166534";


            setTimeout(() => {

                statusMessage.style.display =
                    "none";

            }, 3000);

        })

        .catch(error => {

            console.error(error);


            statusMessage.innerText =
                "Unable to load employee data. Please try again.";

            statusMessage.style.backgroundColor =
                "#fee2e2";

            statusMessage.style.color =
                "#991b1b";

        })

        .finally(() => {

            console.log(
                "API request completed."
            );

        });

}


// 4. GENERATE DEMO SALARY

function generateSalary(age) {

    // Salary based on age for demo purpose

    if (age >= 40) {

        return 90000;

    }

    if (age >= 30) {

        return 70000;

    }

    return 50000;

}


// 5. RANDOM DEPARTMENT

function getRandomDepartment() {

    const departments = [
        "IT",
        "HR",
        "Finance",
        "Marketing"
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            departments.length
        );


    return departments[randomIndex];

}


// 6. DISPLAY EMPLOYEES

function displayEmployees(employeeList = getFilteredEmployees()) {

    employeeContainer.innerHTML = "";


    if (employeeList.length === 0) {

        employeeContainer.innerHTML = `
            <div class="no-data">
                No employees found.
            </div>
        `;

        updateEmployeeCount(employeeList);

        calculateSalary(employeeList);

        return;

    }



    employeeList.forEach(employee => {

        const card =
            document.createElement("div");

        card.classList.add("employee-card");



        const {
            id,
            name,
            age,
            email,
            phone,
            department,
            image,
            salary
        } = employee;


        card.innerHTML = `

            <img
                src="${image || "https://via.placeholder.com/300"}"
                alt="${name}"
                class="employee-image"
            >

            <div class="employee-info">

                <h3>${name}</h3>

                <p>
                    <strong>Age:</strong>
                    ${age}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${phone || "Not available"}
                </p>

                <p>
                    <strong>Department:</strong>
                    <span class="department">
                        ${department}
                    </span>
                </p>

                <p>
                    <strong>Salary:</strong>
                    ₹${salary.toLocaleString("en-IN")}
                </p>

                <button
                    class="delete-button"
                    data-id="${id}"
                >
                    Delete
                </button>

            </div>

        `;


        employeeContainer.appendChild(card);


        const deleteButton =
            card.querySelector(".delete-button");


        deleteButton.addEventListener(
            "click",
            () => deleteEmployee(id)
        );

    });


    updateEmployeeCount(employeeList);


    calculateSalary(employeeList);


    displayHighestSalary(employeeList);

}


// ======================================================
// 7. GET FILTERED EMPLOYEES
// ======================================================

function getFilteredEmployees() {

    // Start with all employees
    let result = [...employees];


    // ================= SEARCH =================

    if (searchText.trim() !== "") {

        result = result.filter(employee => {

            return employee.name
                .toLowerCase()
                .includes(
                    searchText
                        .toLowerCase()
                        .trim()
                );

        });

    }


    // ================= DEPARTMENT =================

    if (selectedDepartment !== "All") {

        result = result.filter(employee => {

            return employee.department ===
                selectedDepartment;

        });

    }


    // ================= SORT =================

    result = sortEmployees(result);


    return result;

}


// ======================================================
// 8. SEARCH EMPLOYEES
// ======================================================

function searchEmployees() {

    // Get input value
    searchText =
        searchInput.value;


    // Display matching employees
    displayEmployees();

}


// ======================================================
// 9. DEPARTMENT FILTER
// ======================================================

function filterDepartment(department) {

    // Store selected department
    selectedDepartment =
        department;


    // Display filtered employees
    displayEmployees();

}


// ======================================================
// 10. UPDATE EMPLOYEE COUNT
// ======================================================

function updateEmployeeCount(employeeList) {

    // array.length
    employeeCount.innerText =
        employeeList.length;

}


// ======================================================
// 11. CALCULATE SALARY
// ======================================================

function calculateSalary(employeeList) {

    // If no employees
    if (employeeList.length === 0) {

        totalSalary.innerText = "₹0";

        averageSalary.innerText = "₹0";

        highestSalary.innerText = "₹0";

        return;

    }


    // reduce() calculates total salary

    const total =
        employeeList.reduce(
            (sum, employee) => {

                return sum + Number(employee.salary);

            },
            0
        );


    // Average salary

    const average =
        total / employeeList.length;


    // Display total salary

    totalSalary.innerText =
        `₹${total.toLocaleString("en-IN")}`;


    // Display average salary

    averageSalary.innerText =
        `₹${Math.round(average).toLocaleString("en-IN")}`;

}


// ======================================================
// 12. HIGHEST SALARY EMPLOYEE
// ======================================================

function displayHighestSalary(employeeList) {

    if (employeeList.length === 0) {

        highestEmployee.innerHTML =
            "No employee data";

        highestSalary.innerText =
            "₹0";

        return;

    }


    // reduce() to find highest salary

    const highest =
        employeeList.reduce(
            (max, employee) => {

                return employee.salary > max.salary
                    ? employee
                    : max;

            }
        );


    // Display highest salary amount

    highestSalary.innerText =
        `₹${highest.salary.toLocaleString("en-IN")}`;


    // Display employee

    highestEmployee.innerHTML = `

        <div class="highest-card">

            <img
                src="${highest.image || "https://via.placeholder.com/100"}"
                alt="${highest.name}"
            >

            <div>

                <h3>
                    ${highest.name}
                </h3>

                <p>
                    Department:
                    ${highest.department}
                </p>

                <p>
                    Salary:
                    <strong>
                        ₹${highest.salary.toLocaleString("en-IN")}
                    </strong>
                </p>

            </div>

        </div>

    `;

}


// 13. ADD EMPLOYEE

function addEmployee(event) {

    // Stop form refresh
    event.preventDefault();


    // Get values

    const name =
        document.getElementById("name")
            .value
            .trim();


    const age =
        Number(
            document.getElementById("age")
                .value
        );


    const email =
        document.getElementById("email")
            .value
            .trim();


    const department =
        document.getElementById("department")
            .value;


    const salary =
        Number(
            document.getElementById("salary")
                .value
        );


    // Validate
    const isValid =
        validateEmployee(
            name,
            age,
            email,
            department,
            salary
        );


    // Don't add if validation fails
    if (!isValid) {

        return;

    }


    // Create employee object

    const newEmployee = {

        // Date.now() creates unique ID
        id: Date.now(),

        name: name,

        age: age,

        email: email,

        department: department,

        salary: salary,

        phone: "Not available",

        // Default image
        image:
            "https://i.pravatar.cc/300"

    };


    // Spread operator
    // Create a new array with employee

    employees = [
        ...employees,
        newEmployee
    ];


    // Display updated employees

    displayEmployees();


    // Clear form

    clearForm();


    // Success message

    showStatus(
        "Employee added successfully.",
        "success"
    );

}


// 14. VALIDATE EMPLOYEE

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    // Clear previous errors

    clearErrors();


    let valid = true;


    // ================= NAME =================

    if (name === "") {

        document.getElementById(
            "nameError"
        ).innerText =
            "❌ Please enter employee name";

        valid = false;

    }


    // ================= AGE =================

    if (age <= 18 || isNaN(age)) {

        document.getElementById(
            "ageError"
        ).innerText =
            "❌ Age must be greater than 18";

        valid = false;

    }


    // ================= EMAIL =================

    if (email === "") {

        document.getElementById(
            "emailError"
        ).innerText =
            "❌ Please enter employee email";

        valid = false;

    }


    // ================= DEPARTMENT =================

    if (department === "") {

        document.getElementById(
            "departmentError"
        ).innerText =
            "❌ Please select department";

        valid = false;

    }


    // ================= SALARY =================

    if (salary <= 0 || isNaN(salary)) {

        document.getElementById(
            "salaryError"
        ).innerText =
            "❌ Please enter valid salary";

        valid = false;

    }


    return valid;

}


// 15. CLEAR ERRORS

function clearErrors() {

    document.getElementById(
        "nameError"
    ).innerText = "";

    document.getElementById(
        "ageError"
    ).innerText = "";

    document.getElementById(
        "emailError"
    ).innerText = "";

    document.getElementById(
        "departmentError"
    ).innerText = "";

    document.getElementById(
        "salaryError"
    ).innerText = "";

}


// 16. CLEAR FORM

function clearForm() {

    employeeForm.reset();

    clearErrors();

}


// 17. DELETE EMPLOYEE

function deleteEmployee(id) {


    employees =
        employees.filter(
            employee => employee.id !== id
        );



    displayEmployees();


    // Show message

    showStatus(
        "Employee deleted successfully.",
        "success"
    );

}


// 18. SORT EMPLOYEES

function sortEmployees(employeeList) {

    // Make a copy using spread operator

    const sorted =
        [...employeeList];


    const sortValue =
        sortSelect.value;



    if (sortValue === "nameAsc") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    // ================= NAME DESC =================

    else if (sortValue === "nameDesc") {

        sorted.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );

    }


    // ================= AGE ASC =================

    else if (sortValue === "ageAsc") {

        sorted.sort(
            (a, b) =>
                a.age - b.age
        );

    }


    // ================= AGE DESC =================

    else if (sortValue === "ageDesc") {

        sorted.sort(
            (a, b) =>
                b.age - a.age
        );

    }


    // ================= SALARY ASC =================

    else if (sortValue === "salaryAsc") {

        sorted.sort(
            (a, b) =>
                a.salary - b.salary
        );

    }


    // ================= SALARY DESC =================

    else if (sortValue === "salaryDesc") {

        sorted.sort(
            (a, b) =>
                b.salary - a.salary
        );

    }


    return sorted;

}


// 19. STATUS MESSAGE

function showStatus(
    message,
    type
) {

    statusMessage.innerText =
        message;


    statusMessage.style.display =
        "block";


    if (type === "success") {

        statusMessage.style.backgroundColor =
            "#dcfce7";

        statusMessage.style.color =
            "#166534";

    }


    else {

        statusMessage.style.backgroundColor =
            "#fee2e2";

        statusMessage.style.color =
            "#991b1b";

    }


    // Hide after 3 seconds

    setTimeout(() => {

        statusMessage.style.display =
            "none";

    }, 3000);

}


// 20. DATE AND TIME

function updateDateTime() {

    // Create Date object

    const now = new Date();


    // ================= DATE =================

    const date =
        now.toLocaleDateString(
            "en-IN",
            {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );


    // ================= TIME =================

    const time =
        now.toLocaleTimeString(
            "en-IN",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );


    document.getElementById(
        "currentDate"
    ).innerText =
        `Today: ${date}`;


    document.getElementById(
        "currentTime"
    ).innerText =
        `Time: ${time}`;

}


// Update date/time immediately
updateDateTime();


// Update every second
setInterval(
    updateDateTime,
    1000
);


// 21. SEARCH BUTTON EVENT

searchButton.addEventListener(
    "click",
    searchEmployees
);


// 22. SEARCH WHILE TYPING

searchInput.addEventListener(
    "input",
    searchEmployees
);


// 23. DEPARTMENT BUTTON EVENTS

const departmentButtons =
    document.querySelectorAll(
        ".department-btn"
    );


departmentButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                // Remove active class
                departmentButtons.forEach(
                    btn =>
                        btn.classList.remove(
                            "active"
                        )
                );


                // Add active class
                button.classList.add(
                    "active"
                );


                // Get department
                const department =
                    button.dataset.department;


                // Filter
                filterDepartment(
                    department
                );

            }
        );

    }
);


// 24. SORT EVENT

sortSelect.addEventListener(
    "change",
    () => {

        displayEmployees();

    }
);


// 25. FORM SUBMIT EVENT

employeeForm.addEventListener(
    "submit",
    addEmployee
);


// 26. EXTRA ARRAY METHODS DEMONSTRATION

// These examples demonstrate some concepts
// requested in the final task.


// ================= MAP =================

function demonstrateMap() {

    const employeeNames =
        employees.map(
            employee => employee.name
        );

    console.log(
        "Employee Names:",
        employeeNames
    );

}


// ================= FIND =================

function findEmployee(id) {

    const employee =
        employees.find(
            employee =>
                employee.id === id
        );


    return employee;

}


// ================= SOME =================

function checkSalary() {

    const hasHighSalary =
        employees.some(
            employee =>
                employee.salary > 90000
        );


    console.log(
        "Has employee salary above 90000:",
        hasHighSalary
    );

}


// ================= EVERY =================

function checkEmployeeAges() {

    const allAdults =
        employees.every(
            employee =>
                employee.age > 18
        );


    console.log(
        "Are all employees above 18:",
        allAdults
    );

}


// 27. START APPLICATION

fetchEmployees();