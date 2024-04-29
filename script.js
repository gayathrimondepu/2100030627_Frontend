// script.js

const employees = [
    { id: 1, firstName: "Sam", lastName: "Adam", department: "IT", salary: 100000 },
    { id: 2, firstName: "John", lastName: "Jacob", department: "Sales", salary: 90000 }
    // Add more employees here if needed
];

function displayEmployees() {
    const tableBody = document.getElementById('employeeTableBody');
    tableBody.innerHTML = ''; // Clear previous content

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.id}</td>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.department}</td>
            <td>$${employee.salary.toFixed(2)}</td>
        `;
        tableBody.appendChild(row);
    });

    // Get the newly added employee details from local storage
    const newEmployee = JSON.parse(localStorage.getItem('newEmployee'));

    // Add newly added employee to the table if present
    if (newEmployee) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${newEmployee.id}</td>
            <td>${newEmployee.firstName}</td>
            <td>${newEmployee.lastName}</td>
            <td>${newEmployee.department}</td>
            <td>$${parseFloat(newEmployee.salary).toFixed(2)}</td>
        `;
        tableBody.appendChild(newRow);

        // Clear the stored new employee details from local storage
        localStorage.removeItem('newEmployee');
    }
}

// Function to add a new employee
function addEmployee() {
    // Get form input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const department = document.getElementById('department').value;
    const salary = document.getElementById('salary').value;

    // Check if any input field is empty
    if (!firstName || !lastName || !department || !salary) {
        alert('Please fill in all fields');
        return;
    }

    // Create a new employee object
    const newEmployee = {
        id: employees.length + 1, // Assuming you have an employees array
        firstName: firstName,
        lastName: lastName,
        department: department,
        salary: parseFloat(salary)
    };

    // Add new employee to employees array
    employees.push(newEmployee);

    // Redirect to employees.html with query parameters
    window.location.href = `employees.html?message=Employee added successfully&firstName=${firstName}&lastName=${lastName}&department=${department}&salary=${salary}`;
}


// Function to redirect to Add Employee form page
function redirectToAddEmployeeForm() {
    window.location.href = 'addEmployee.html';
}

// Function to handle edit employee action
function editEmployee(employeeId) {
    // Add logic to edit employee
    console.log("Editing employee with ID:", employeeId);
}

// Function to handle delete employee action
function deleteEmployee(employeeId) {
    // Add logic to delete employee
    console.log("Deleting employee with ID:", employeeId);
}

// Function to navigate to the home.html page
function showHome() {
    window.location.href = 'index.html';
}

// Function to navigate to the employees.html page
function showEmployees() {
    window.location.href = 'employees.html';
}

// Display employees when the page loads
displayEmployees();
