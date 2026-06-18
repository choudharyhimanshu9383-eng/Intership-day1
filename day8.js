// async function
//      greet(){
//     return"hiii";
// }
//  const result=greet();
//  console.log(result);
//  const Promise = promise.resolve("himanshu")
//  async function getData(){
//     const result=promise;
//     comsole.log(result);
//  }
//  console.log(getData());-->error
// const promise = Promise.resolve("himanshu");

// async function getData() {
//     const result = await promise;
//     console.log(result);
// }

// getData();=>output---.himanshu
// async function getUser() {
//     return Promise.resolve({
//         name: "himanshu"
//     });
// }

// getUser().then(user => {
//     console.log(user.name);
// });

//  login()
//  .then(getUser)
//  .then(getOrder)
//  .then(getpayment)
//  .then(orderDone)
async function processOrder() {
    const user = await login();
    const order = await getUser(user);
    const payment = await getOrder(order);
    const result = await getPayment(payment);

    orderDone(result);
}

processOrder();
///////////////////////////////////////////////////
//error handling in ashnc awiat
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getData();
///sequential excution//
const user=await getuser()
const orders=await getorders()
const payment= await getpayemnt()

const [user,orders,payemnt]=await Promise.all([
    getuser(),
    getorders(),
    getpayemnt()
])

//top level await
function fetchData() {
    return Promise.resolve("Hello Himanshu");
}

const data = await fetchData();

console.log(data);
//Async iteration->Jab values time lekar aati hain (Promises, API calls, streams), tab async iteration use karte hain.
async function* numbers() {
    yield Promise.resolve(10);
    yield Promise.resolve(20);
    yield Promise.resolve(30);
}

async function show() {
    for await (const num of numbers()) {
        console.log(num);
    }
}

show();
//nromal iteration ->Jab data pehle se available ho, tab normal loop use karte hain.
const arr = [10, 20, 30];

for (const num of arr) {
    console.log(num);
}
//use both iteration code->
async function* fetchUsers() {
    yield "User 1";
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield "User 2";
    await new Promise(resolve => setTimeout(resolve, 1000));

    yield "User 3";
}

async function run() {
    for await (const user of fetchUsers()) {
        console.log(user);
    }
}

run();
