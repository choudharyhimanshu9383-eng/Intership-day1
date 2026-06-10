
// Q1 Predict Output

let a = 10;

function outer() {
    let a = 20;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();

// Output: 20
// Q2 Predict Output

let count = 1;

function test() {
    console.log(count);
    let count = 2;
}

test();

// Output: ReferenceError
// Q3 Create a nested function structure of 4 levels and print variables from all parent scopes

function level1() {
    let a = 1;

    function level2() {
        let b = 2;

        function level3() {
            let c = 3;

            function level4() {
                let d = 4;

                console.log(a);
                console.log(b);
                console.log(c);
                console.log(d);
            }

            level4();
        }

        level3();
    }

    level2();
}

level1();

/*
Output:
1
2
3
4
*/
// Q4 Write a function that returns another function and demonstrates lexical scope

function outer() {
    let name = "Ram";

    return function () {
        console.log(name);
    };
}

let result = outer();
result();

// Output: Ram
// Q5 Predict Output

var x = 100;

function a() {
    console.log(x);
    var x = 50;
}

a();

// Output: undefined
// Q6 Create a function where a child function can access grandparent variables

function grandparent() {
    let money = 1000;

    function parent() {

        function child() {
            console.log(money);
        }

        child();
    }

    parent();
}

grandparent();

// Output: 1000
// Q7 Predict Output

let name = "Ram";

function show() {
    let name = "Mohan";

    return function () {
        console.log(name);
    };
}

show()();

// Output: Mohan
// Q8 Create a 3-level nested function and access all variables inside the innermost function

function one() {
    let a = 10;

    function two() {
        let b = 20;

        function three() {
            let c = 30;

            console.log(a);
            console.log(b);
            console.log(c);
        }

        three();
    }

    two();
}

one();

//
Output:
10
20
30//

// Q9 Can a parent access a child variable?

function parent() {

    function child() {
        let x = 10;
    }

    child();

    // console.log(x); // Error
}

parent();

// Parent cannot access child variables.
// Q10 Create a private variable using lexical scope

function secret() {
    let password = "12345";

    return function () {
        console.log(password);
    };
}

let showPassword = secret();
showPassword();

// Output: 12345
// Q26 Create calculate(a,b,operation)

function calculate(a, b, operation) {
    return operation(a, b);
}

function add(a, b) {
    return a + b;
}

console.log(calculate(10, 5, add));

// Output: 15
// Q27 Create your own custom HOF named repeat()

function repeat(times, fn) {
    for (let i = 1; i <= times; i++) {
        fn();
    }
}

function sayHello() {
    console.log("Hello");
}

repeat(5, sayHello);
// Q28 Create a logger HOF

function logger(fn) {
    return function () {
        console.log("[INFO]");
        fn();
    };
}

function login() {
    console.log("User Logged In");
}

let result = logger(login);
result();

/*
Output:
[INFO]
User Logged In
*/

// Q30 Count how many times another function was called

function countCalls(fn) {
    let count = 0;

    return function () {
        count++;
        console.log("Called:", count);
        fn();
    };
}

function hello() {
    console.log("Hello");
}

let h = countCalls(hello);

h();
h();
h();
// Q31 Return names using map()

const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const names = users.map(user => user.name);

console.log(names);

/*
Output:
["Ram","Mohan","Amit"]
*/
// Q32 Convert into squares using map()

const arr = [1, 2, 3, 4, 5];

const result = arr.map(num => num * num);

console.log(result);

/*
Output:
[1,4,9,16,25]
*/
// Q33 Create array of product names

const products = [
    { name: "Laptop" },
    { name: "Mouse" },
    { name: "Keyboard" }
];

const names = products.map(product => product.name);

console.log(names);

/*
Output:
["Laptop","Mouse","Keyboard"]
*/

// Q34 Filter all even numbers

const arr = [1, 2, 3, 4, 5, 6];

const even = arr.filter(num => num % 2 === 0);

console.log(even);

// Output: [2,4,6]
// Q35 Filter users whose age is greater than 25

const users = [
    { name: "Ram", age: 25 },
    { name: "Mohan", age: 30 },
    { name: "Amit", age: 22 }
];

const result = users.filter(user => user.age > 25);

console.log(result);

// Q11 Create a Counter Closure

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let c = counter();

c();
c();
c();

/*
Output:
1
2
3
*/
// Q12 Create a Reverse Counter

function reverseCounter() {
    let count = 10;

    return function() {
        console.log(count);
        count--;
    };
}

let rc = reverseCounter();

rc();
rc();
rc();

/*
Output:
10
9
8
*/

// Q13 Create a Closure-based Bank Account

function bankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
        },

        withdraw(amount) {
            balance -= amount;
        },

        checkBalance() {
            console.log(balance);
        }
    };
}

let account = bankAccount();

account.deposit(500);
account.withdraw(200);
account.checkBalance();

/*
Output:
1300
*/

// Q14 Create a Closure that Remembers Username Forever

function createUser(username) {
    return function() {
        console.log(username);
    };
}

let user = createUser("Ram");

user();

// Output: Ram
// Q15 Create a Closure-based Login Attempt Tracker

function loginTracker() {
    let attempts = 0;

    return function() {
        attempts++;

        if (attempts >= 3) {
            console.log("Account Locked");
        } else {
            console.log("Wrong Password");
        }
    };
}

let login = loginTracker();

login();
login();
login();

/*
Output:
Wrong Password
Wrong Password
Account Locked
*/
// Q16 Build a Closure that Stores a Secret Password
function secretPassword() {
    let password = "admin123";

    return {
        getPassword() {
            return password;
        }
    };
}

let obj = secretPassword();

console.log(obj.getPassword());

// Output: admin123