//Async Function Basics
//LEVEL 1 (Q1-Q10)
//1.Q1. Create an async function that returns "Hello World"
async function main() {
    return "Hello World";
}

main().then(console.log);
//2.
async function getUser() {
    return {
        id: 1,
        name: "Himanshu",
        age: 20
    };
}

getUser().then(console.log);
//3.
async function getProducts() {
    return ["Laptop", "Mobile", "Headphones"];
}

getProducts().then(console.log);
//4.
async function getCurrentDate() {
    return new Date();
}

getCurrentDate().then(console.log);
//5.
async function getRandomNumber() {
    return Math.floor(Math.random() * 1000);
}

getRandomNumber().then(console.log);
//6.
async function getStudent() {
    return {
        rollNo: 101,
        name: "Rahul",
        course: "B.Tech AI & ML"
    };
}

getStudent().then(console.log);
//7.
async function getCompany() {
    return {
        name: "chatGPT",
        location: "USA",
        employees: 5000
    };
}

getCompany().then(console.log);
//9.
async function getTotalAmount() {
    return 25000;
}

getTotalAmount().then(console.log);
//10.
async function testPromise() {
    return "Success";
}

console.log(testPromise()); 

console.log(testPromise() instanceof Promise); 
//LEVEL 2 (Q11–Q20) — Await Basics
//1.
function getUser() {
    return Promise.resolve({
        id: 1,
        name: "Himanshu"
    });
}

async function displayUser() {
    const user = await getUser();
    console.log(user);
}

displayUser();
//2.
function getProduct() {
    return Promise.resolve({
        id: 101,
        name: "Laptop"
    });
}

async function displayProduct() {
    const product = await getProduct();
    console.log(product);
}

displayProduct();
//3.
function getOrders() {
    return Promise.resolve([
        "Order 1",
        "Order 2",
        "Order 3"
    ]);
}

async function displayOrders() {
    const orders = await getOrders();
    console.log(orders);
}

displayOrders();
//4.
function getPayment() {
    return Promise.resolve({
        amount: 5000,
        status: "Success"
    });
}

async function displayPayment() {
    const payment = await getPayment();
    console.log(payment);
}

displayPayment();
//5.
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("Start");

    await wait(2000);

    console.log("End");
}

run();
//6.
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printNumbers() {
    console.log(1);

    await wait(1000);

    console.log(2);

    await wait(1000);

    console.log(3);
}

printNumbers();
//LEVEL 3 (Q21–Q30) — Async + Try Catch
//1.
async function generateError() {
    throw new Error("kuch galthua hai bhai!");
}

async function run() {
    try {
        await generateError();
    } catch (error) {
        console.log(error.message);
    }
}

run();
//2.
async function login(username, password) {
    if (username !== "admin" || password !== "1234") {
        throw new Error("Invalid Login");
    }
    return "Login ho gaya hai";
}

async function validateLogin() {
    try {
        const result = await login("admin", "1111");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

validateLogin();
//3.= <doudt>
//4.= <doudt>
//8.
async function atmWithdraw(balance, amount) {
    if (amount > balance) {
        throw new Error("Transaction Failed");
    }

    return `Please collect ₹${amount}`;
}

async function atm() {
    try {
        const result = await atmWithdraw(10000, 3000);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

atm();
//7.
async function validatePassword(password) {
    if (password.length < 8) {
        throw new Error("Password must be at least 8 characters");
    }

    return "Password Accepted";
}

async function checkPassword() {
    try {
        const result = await validatePassword("password123");
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

checkPassword();
//LEVEL 4 (Q31–Q35) — Sequential Execution 
//1.
async function login() {
    return "Login Successful";
}

async function getUser() {
    return { id: 1, name: "Himanshu" };
}

async function getOrders() {
    return ["Laptop", "Mouse"];
}

async function payment() {
    return "Payment Successful";
}

async function processOrder() {
    const loginResult = await login();
    console.log(loginResult);

    const user = await getUser();
    console.log(user);

    const orders = await getOrders();
    console.log(orders);

    const paymentResult = await payment();
    console.log(paymentResult);
}

processOrder();
//2.
async function selectMovie() {
    return "Movie Selected";
}

async function chooseSeat() {
    return "Seat Selected";
}

async function makePayment() {
    return "Payment Completed";
}

async function bookTicket() {
    return "Ticket Booked";
}

async function movieBooking() {
    console.log(await selectMovie());
    console.log(await chooseSeat());
    console.log(await makePayment());
    console.log(await bookTicket());
}

movieBooking();
//4.
async function searchTrain() {
    return "Train Found";
}

async function selectSeat() {
    return "Seat Selected";
}

async function payFare() {
    return "Fare Paid";
}

async function generateTicket() {
    return "Ticket Generated";
}

async function trainBooking() {
    console.log(await searchTrain());
    console.log(await selectSeat());
    console.log(await payFare());
    console.log(await generateTicket());
}

trainBooking();
//3.
async function placeOrder() {
    return "Food Ordered";
}

async function prepareFood() {
    return "Food Prepared";
}

async function assignDelivery() {
    return "Delivery Partner Assigned";
}

async function deliverFood() {
    return "Food Delivered";
}

async function foodDelivery() {
    console.log(await placeOrder());
    console.log(await prepareFood());
    console.log(await assignDelivery());
    console.log(await deliverFood());
}

foodDelivery();
//LEVEL 5 (Q36–Q40) — Promise.all + Async/Await
//1.
async function getUsers() {
    return ["User1", "User2"];
}

async function getProducts() {
    return ["Laptop", "Mobile"];
}

async function getOrders() {
    return ["Order1", "Order2"];
}

async function fetchAllData() {
    const [users, products, orders] = await Promise.all([
        getUsers(),
        getProducts(),
        getOrders()
    ]);

    console.log(users);
    console.log(products);
    console.log(orders);
}

fetchAllData();
//40.
function downloadFile(fileName) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`${fileName} Downloaded`);
        }, 2000);
    });
}

async function downloadAllFiles() {
    const files = await Promise.all([
        downloadFile("File1.pdf"),
        downloadFile("File2.pdf"),
        downloadFile("File3.pdf")
    ]);

    console.log(files);
}

downloadAllFiles();
//LEVEL 6 (Q41–Q44)
//
function api1() {
    return Promise.resolve("API 1 Success");
}

function api2() {
    return Promise.resolve("API 2 Success");
}

function api3() {
    return Promise.resolve("API 3 Success");
}

function api4() {
    return Promise.reject("API 4 Failed");
}

function api5() {
    return Promise.reject("API 5 Failed");
}

async function getResults() {
    const results = await Promise.allSettled([
        api1(),
        api2(),
        api3(),
        api4(),
        api5()
    ]);

    console.log(results);
}

getResults();
//2.
function getUsers() {
    return Promise.resolve("Users Loaded");
}

function getOrders() {
    return Promise.resolve("Orders Loaded");
}

function getProducts() {
    return Promise.reject("Products Service Down");
}

function getReports() {
    return Promise.resolve("Reports Loaded");
}

async function loadAdminDashboard() {
    const results = await Promise.allSettled([
        getUsers(),
        getOrders(),
        getProducts(),
        getReports()
    ]);

    results.forEach((result, index) => {
        console.log(`Module ${index + 1}:`, result);
    });
}

loadAdminDashboard();
//4.
function processStudent(student) {
    return new Promise((resolve, reject) => {
        if (student.marks >= 40) {
            resolve(`${student.name} Passed`);
        } else {
            reject(`${student.name} Failed`);
        }
    });
}

async function processResults() {
    const students = [
        { name: "Rahul", marks: 80 },
        { name: "Aman", marks: 25 },
        { name: "Priya", marks: 70 },
        { name: "Neha", marks: 30 }
    ];

    const results = await Promise.allSettled(
        students.map(processStudent)
    );

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("", result.value);
        } else {
            console.log("", result.reason);
        }
    });
}

processResults();