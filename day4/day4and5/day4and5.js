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
            console.log("📧 Email Sent");
            resolve(order);
        }, 1000);
    });
}

// Track Order
function trackOrder(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("🚚 Order Out For Delivery");
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
    console.log("✅ Final Result:");
    console.log(result);
})
.catch((error) => {
    console.log("❌ Error:", error);
});