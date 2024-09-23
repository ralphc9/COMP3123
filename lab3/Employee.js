//TODO - Create Employee Module here and export to use in index.js

class Employee {
    constructor(id, firstName, lastName, email, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.salary = salary;
    }
}

let employees = [
    new Employee(1, "Pritesh", "Patel", "pritesh@gmail.com", 5000),
    new Employee(2, "Krish", "Lee", "krish@gmail.com", 4000),
    new Employee(3, "Racks", "Jacson", "racks@gmail.com", 5500),
    new Employee(4, "Denial", "Roast", "denial@gmail.com", 9000)
];

const getAllEmployees = () => {
    return employees;
};

const getEmployeeById = (id) => {
    return employees.find(employee => employee.id === id);
};

const addEmployee = (employee) => {
    employees.push(employee);
};

const updateEmployee = (id, updatedInfo) => {
    const employee = getEmployeeById(id);
    if (employee) {
        Object.assign(employee, updatedInfo);
    }
};

const deleteEmployee = (id) => {
    employees = employees.filter(employee => employee.id !== id);
};

// New method to get employee names
const getEmployeeNames = () => {
    return employees.map(emp => `${emp.firstName} ${emp.lastName}`);
};

// New method to get total salary
const getTotalSalary = () => {
    return employees.reduce((total, emp) => total + emp.salary, 0);
};

module.exports = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeNames,
    getTotalSalary
};
