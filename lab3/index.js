var http = require("http");
const EmployeeModule = require('./Employee'); // Importing the Employee module
console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    // Handle non-GET requests
    if (req.method !== 'GET') {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        return res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    }

    // Handle the root URL
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end("<h1>Welcome to Lab Exercise 03</h1>");
    }

    // Handle the /employee URL
    if (req.url === '/employee') {
        const employees = EmployeeModule.getAllEmployees();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(employees));
    }

    // Handle the /employee/names URL
    if (req.url === '/employee/names') {
        const names = EmployeeModule.getEmployeeNames();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(names.sort()));
    }

    // Handle the /employee/totalsalary URL
    if (req.url === '/employee/totalsalary') {
        const totalSalary = EmployeeModule.getTotalSalary();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ total_salary: totalSalary }));
    }

    // Handle 404 error
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
