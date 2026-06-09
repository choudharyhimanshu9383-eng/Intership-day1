// 1. Create a variable using const and store your college name. Print it.
const collegeName = "Geeta University";
console.log(collegeName);

// 2. Create a variable using let and update its value three times.
let count = 10;
count = 20;
count = 30;
count = 40;
console.log(count);

// 3. Create a block using {} and show that a variable declared with let cannot be accessed outside it.
{
    let message = "Hello";
    console.log(message);
}

// 4. Swap two numbers using array destructuring.
let a = 10, b = 20;
[a, b] = [b, a];
console.log(a, b);

// 5. Arrow function to return cube of a number.
const cube = num => num ** 3;
console.log(cube(3));

// 6. Arrow function to check even or odd.
const checkEvenOdd = num => num % 2 === 0 ? "Even" : "Odd";
console.log(checkEvenOdd(7));

// 7. Arrow function to find maximum of three numbers.
const maxNum = (a, b, c) => Math.max(a, b, c);
console.log(maxNum(10, 50, 30));

// 8. Array destructuring.
const nums = [10, 20, 30, 40, 50];
const [first, second, ...remaining] = nums;
console.log(first);
console.log(second);
console.log(remaining);

// 9. Function using template literals.
const userInfo = (name, age) =>
    `Hello ${name}, you are ${age} years old.`;
console.log(userInfo("Ram", 25));

// 10. Generate URL dynamically using template literals.
const id = 101;
const url = `/api/users/${id}`;
console.log(url);

// 11. Destructure all properties.
const student = {
    name: "Ram",
    age: 25,
    course: "MERN"
};

const { name, age, course } = student;
console.log(name, age, course);

// 12. Rename course to technology while destructuring.
const { course: technology } = student;
console.log(technology);

// 13. Function with default parameter.
const createUser = (name, role = "Student") => {
    return `${name} is a ${role}`;
};
console.log(createUser("Ram"));
console.log(createUser("Shyam", "Admin"));

// 14. Calculator function with default operator '+'.
const calculator = (a, b, operator = "+") => {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return a / b;
        default: return "Invalid Operator";
    }
};
console.log(calculator(10, 5));

// 15. Sum of unlimited numbers using Rest Operator.
const sum = (...numbers) =>
    numbers.reduce((total, num) => total + num, 0);

console.log(sum(10, 20, 30, 40));

// 16. Largest number using Rest Operator.
const largest = (...numbers) => Math.max(...numbers);
console.log(largest(10, 50, 25, 80, 40));

// 17. Merge two arrays using Spread Operator.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
///18. Copy an array using Spread Operator and add one extra value
const arr = [10, 20, 30];
const newArr = [...arr, 40];

console.log(newArr);
///19. Copy an object and update only the email property
const user = {
    name: "Ram",
    email: "ram@gmail.com"
};

const updatedUser = {
    ...user,
    email: "newram@gmail.com"
};

console.log(updatedUser);
//20. Create a product object and add discount using Spread Operator
const product = {
    name: "Laptop",
    price: 50000
};

const updatedProduct = {
    ...product,
    discount: 10
};

console.log(updatedProduct);
//21. Use map() to return only names
const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

//22. Use filter() to get users whose age is greater than 24
const result = users.filter(user => user.age > 24);

console.log(result);
//23. Use reduce() to calculate total age
const totalAge = users.reduce((sum, user) => sum + user.age, 0);

console.log(totalAge);
//24. Create createInvoice(customerName, amount)
const createInvoice = (customerName, amount) => {
    return `Invoice: Customer ${customerName} has to pay ${amount}`;
};
//25Mini Challenge
console.log(createInvoice("Ram", 5000));
const student = {
    name: "Ram",
    marks: [80, 90, 70, 85]
};

const {
    name,
    marks
} = student;

const total = marks.reduce((sum, mark) => sum + mark, 0);
const average = total / marks.length;

console.log(`Student: ${name}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average}`);
