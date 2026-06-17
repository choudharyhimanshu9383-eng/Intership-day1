/////NTERVIEW OUTPUT ROUND (BONUS)///
//1.
Promise.resolve("A")
.then(console.log);

console.log("B");
///output=>B
//A
//2.
console.log("A");

Promise.resolve()
.then(()=>{
    console.log("B");
});

console.log("C");
///output=>A
//C
//B
//3.
Promise.resolve(10)
.then(num => num * 2)
.then(num => num + 5)
.then(console.log);
///output=>25
//4.
Promise.resolve()
.then(()=>{
    throw new Error("Boom");
})
.catch(err => console.log(err.message));
//0utput=>boom
//5.
Promise.resolve()
.then(()=>{
    return Promise.resolve(100);
})
.then(console.log);
//output=>100
//6.
Promise.resolve()
.then(()=>{
    console.log("A");
})
.then(()=>{
    console.log("B");
});
//0utput=>A
//B.
Promise.all([
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
])
.then(console.log);
///output=>[1, 2, 3]
//10.
console.log("Start");

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
//output=>start
//end
//promise
//9.
Promise.all([
    Promise.resolve(1),
    Promise.reject("Failed"),
    Promise.resolve(3)
])
.catch(console.log);
//output=>Failed//
//7.
console.log("Start");

Promise.resolve()
.then(()=>{
    console.log("A");
    return Promise.resolve("B");
})
.then(console.log);

console.log("End");
//output=>start
//end
//a
//b
///LEVEL 8 (Q40) FINAL BOSS🙄////
// Login
function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: 101, name: "Himanshu" });
        }, 1000);
    });
}

// Fetch User
function fetchUser(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...user,
                email: "himanshu@gmail.com"
            });
        }, 1000);
    });
}

// Fetch Restaurants
function fetchRestaurants(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                user,
                restaurant: "Pizza Hut"
            });
        }, 1000);
    });
}

// Fetch Menu
function fetchMenu(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...data,
                item: "Veg Pizza",
                price: 299
            });
        }, 1000);
    });
}

// Place Order
function placeOrder(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...data,
                orderId: "ORD123"
            });
        }, 1000);
    });
}

// Process Payment
function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...order,
                paymentStatus: "Success"
            });
        }, 1000);
    });
}

// Generate Invoice
function generateInvoice(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...order,
                invoice: "INV456"
            });
        }, 1000);
    });
}

// Send Email
function sendEmail(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Email Sent");
            resolve(order);
        }, 1000);
    });
}

// Track Order
function trackOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(" Order Out For Delivery");
            resolve(order);
        }, 1000);
    });
}

// Deliver Order
function deliverOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...order,
                status: "Delivered"
            });
        }, 1000);
    });
}

// Promise Chain
login()
.then(fetchUser)
.then(fetchRestaurants)
.then(fetchMenu)
.then(placeOrder)
.then(processPayment)
.then(generateInvoice)
.then(sendEmail)
.then(trackOrder)
.then(deliverOrder)
.then((result) => {
    console.log(" Final Result:");
    console.log(result);
})
.catch((error) => {
    console.log(" Error:", error);
});
////LEVEL 7 (Q39)
//39-A=>
    const server1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server1 Response");
    }, 5000);
});

const server2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server2 Response");
    }, 2000);
});

const server3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server3 Response");
    }, 1000);
});

Promise.race([server1, server2, server3])
.then((result) => {
    console.log(result);
});
//B=>
    const server1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server1 Failed");
    }, 1000);
});

const server2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server2 Failed");
    }, 2000);
});

const server3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Server3 Success");
    }, 3000);
});

Promise.any([server1, server2, server3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
//LEVEL 6 (Q36 - Q38)//
//36=>
   const p1 = Promise.resolve("User Data");
const p2 = Promise.resolve("Products Data");
const p3 = Promise.resolve("Orders Data");

const p4 = Promise.reject("Payment API Failed");
const p5 = Promise.reject("Email API Failed");

Promise.allSettled([p1, p2, p3, p4, p5])
.then((results) => {
    console.log(results);
}); 
//LEVEL 5 (Q31 - Q35)  Promise.all()//
//31.Fetch User, Orders, Products using Promise.all//
function getUser() {
    return Promise.resolve(" User Data");
}

function getOrders() {
    return Promise.resolve(" Orders Data");
}

function getProducts() {
    return Promise.resolve(" Products Data");
}

Promise.all([
    getUser(),
    getOrders(),
    getProducts()
])
.then((results) => {
    console.log(results);
});
//32.5 Promises with Different Delays
const p1 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 1"), 5000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 2"), 4000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 3"), 3000)
);

const p4 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 4"), 2000)
);

const p5 = new Promise(resolve =>
    setTimeout(() => resolve("Promise 5"), 1000)
);

Promise.all([p1, p2, p3, p4, p5])
.then((result) => {
    console.log(result);
});
//33. One Promise Rejects
const p1 = Promise.resolve("Success 1");
const p2 = Promise.reject(" Failed");
const p3 = Promise.resolve("Success 3");

Promise.all([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
//34.Dashboard Loader
function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(" Users Loaded");
        }, 2000);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(" Orders Loaded");
        }, 3000);
    });
}

function getRevenue() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(" Revenue Loaded");
        }, 1000);
    });
}

Promise.all([
    getUsers(),
    getOrders(),
    getRevenue()
])
.then((data) => {

    console.log("Dashboard Ready");
    console.log(data);

});
//35.35: Parallel File Downloader
function downloadFile(fileName, time) {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(`${fileName} Downloaded`);
        }, time);

    });
}

Promise.all([
    downloadFile("HTML.pdf", 3000),
    downloadFile("CSS.pdf", 4000),
    downloadFile("ml.pdf", 2000),
    downloadFile("Python.pdf", 3000)
])
.then((files) => {

    console.log("All Files Downloaded");
    console.log(files);

});
//lEVEL 4 (Q26 - Q30) Callback → Promise Conversion
//26.
//Convert callback based greeting function into Promise
function greet(name, callback) {
    setTimeout(() => {
        callback(`Hello ${name}`);
    }, 1000);
}

greet("Himanshu", (msg) => {
    console.log(msg);
});
//27.
//Convert callback based calculator into Promise
function add(a, b, callback) {
    callback(a + b);
}

add(10, 20, (result) => {
    console.log(result);
});
//28.
//Convert callback based login into Promise.
function login(username, password, callback) {

    setTimeout(() => {

        if (password === "43331") {
            callback("Login Success");
        } else {
            callback("Login Fail");
        }

    }, 1000);

}

login("Himanshu", "43331", (msg) => {
    console.log(msg);
});
//29.
//Convert callback based file download simulation into Promise
function downloadFile(file, pdf) {

    setTimeout(() => {
        pdf(`${file} Downloaded`);
    }, 2000);

}

downloadFile("J.pdf", (msg) => {
    console.log(msg);
});
//30.
//Convert callback based weather API simulation into Promise
function getWeather(city, callback) {

    setTimeout(() => {

        callback({
            city,
            temp: 35
        });

    }, 1000);

}

getWeather("Delhi", (data) => {
    console.log(data);
});
//LEVEL 1 (Q1-Q10)Promise Fundamentals
//1.
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello World");
    }, 2000);
});

promise.then(console.log);
//2.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Server Down");
    }, 3000);
});

promise.catch(console.log);
//3.
const promise = new Promise((resolve, reject) => {

    const success = Math.random() > 0.5;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }

});

promise
.then(console.log)
.catch(console.log);
//4.
function checkAge(age) {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("Eligible");
        } else {
            reject("Not Eligible");
        }

    });

}

checkAge(20)
.then(console.log)
.catch(console.log);
//5.
function validatePassword(password) {

    return new Promise((resolve, reject) => {

        if (password.length >= 8) {
            resolve("Strong Password");
        } else {
            reject("Password Too Short");
        }

    });

}

validatePassword("12345678")
.then(console.log)
.catch(console.log);
//6.
function validateEmail(email) {

    return new Promise((resolve, reject) => {

        if (email.includes("@")) {
            resolve("Valid Email");
        } else {
            reject("Invalid Email");
        }

    });

}

validateEmail("test@gmail.com")
.then(console.log)
.catch(console.log);
//7.
function withdraw(balance, amount) {

    return new Promise((resolve, reject) => {

        if (balance >= amount) {
            resolve(`Withdrawn ₹${amount}`);
        } else {
            reject("Insufficient Balance");
        }

    });

}

withdraw(5000, 2000)
.then(console.log)
.catch(console.log);
//8.
function atmTransaction(pin) {

    return new Promise((resolve, reject) => {

        if (pin === 1234) {
            resolve("Transaction Successful");
        } else {
            reject("Invalid PIN");
        }

    });

}

atmTransaction(1234)
.then(console.log)
.catch(console.log);
//9.
const userPromise = new Promise((resolve) => {

    resolve({
        id: 1,
        name: "Himanshu",
        role: "Student"
    });

});

userPromise.then((user) => {
    console.log(user);
});
//10.
const promise = new Promise((resolve, reject) => {

    reject({
        code: 500,
        message: "Internal Server Error"
    });

});

promise.catch((error) => {
    console.log(error);
});
//LEVEL 3 (Q21-Q25)
//21.
Promise.resolve("Start")
  .then((data) => {
    console.log(data);
    throw new Error("Something went wrong!");
  })
  .catch((error) => {
    console.log("Caught:", error.message);
  });
  //22.
  Promise.resolve()
  .then(() => {
    console.log("Step 1");
  })
  .then(() => {
    console.log("Step 2");
  })
  .then(() => {
    console.log("Step 3");
    throw new Error("Error in Step 3");
  })
  .then(() => {
    console.log("Step 4");
  })
  .then(() => {
    console.log("Step 5");
  })
  .catch((error) => {
    console.log("Caught:", error.message);
  });
  //23.
  Promise.resolve()
  .then(() => {
    console.log("Step 1");
  })
  .then(() => {
    console.log("Step 2");
    throw new Error("Error occurred");
  })
  .catch((error) => {
    console.log("Catch:", error.message);
  });
  //24.
  Promise.resolve()
  .then(() => {
    console.log("Step 1");
    throw new Error("Oops!");
  })
  .catch((error) => {
    console.log("Caught:", error.message);

    // Recovery value
    return "Recovered";
  })
  .then((data) => {
    console.log("Continue:", data);
  });
  //25.
    Promise.resolve()
  .then(() => {
    throw new Error("First Error");
  })
  .catch((error) => {
    console.log("Catch 1:", error.message);
  })
  .catch((error) => {
    console.log("Catch 2:", error.message);
  });
  //level-2//
  //16.
  Promise.resolve()
.then(() => {
    console.log("Choose Food");
    return "Pizza";
})
.then((food) => {
    console.log(food, "Added to Cart");
    return "Address Selected";
})
.then((address) => {
    console.log(address);
    return "Payment Successful";
})
.then((payment) => {
    console.log(payment);
    return "Order Confirmed";
})
.then((order) => {
    console.log(order);
});
//17.
Promise.resolve()
.then(() => {
    console.log("Application Submitted");
    return "Documents Uploaded";
})
.then((docs) => {
    console.log(docs);
    return "Application Reviewed";
})
.then((review) => {
    console.log(review);
    return "Fee Paid";
})
.then((fee) => {
    console.log(fee);
    return "Admission Confirmed";
})
.then((admission) => {
    console.log(admission);
});
//20.Promise.resolve(0)
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log(num);
    return num + 1;
})
.then((num) => {
    console.log("Final Value:", num);
});