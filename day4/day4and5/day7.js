// const promise = new Promise((resolve, reject) => {
//     resolve("data found");
// });

// // how to use promise
// promise.then((data) => {
//     console.log(data);
// });
// const result =("https://dummyjson.com/products")
// console.log(result);
// const promise=new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("sucess")
//     }else{
//         reject("failed")
//     }
// })
// promise.then((data)=>{
//     console.log(data);
    
// }).catch((error)=>{
//     console.log(error);
// })
 const result = fetch("https://jsonplaceholder.typicode.com/users")
    // .then((data) => {
    //     return data.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((error) => {
    //     console.log("Error:", error);
    // });
//     console.log(result.data);
// Promise.resolve(10)
// .them((num)=>{
//     return num*2;
// })
// .them((num)=>{
//     return num-5;3
// })
// Login()
// .then(getU)
Promise.resolve()
// .then(()=>{
//     console.log("step 1")
// })
// .then(()=>{
//     console.log("step 2")
//     throw new Error("bubm fAT GAYA")
// })
// .then(()=>{
//     console.log("step 3")
// })
// .catch((err)=>{
//     console.log(err.message)
// })
// .then(()=>{
//     console.log("step 4")
// // })
// Promise.all([
//     Promise.resolve("milk"),
//      Promise.resolve("suger"),
//       Promise.resolve("curd"),
//        Promise.resolve("tea"),
// ]).then(console.log )

// Promise.allSettled([
//     Promise.resolve("milk"),
//      Promise.reject("suger"),
//       Promise.resolve("curd"),
//        Promise.reject("tea"),
// ]).then(console.log )

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Ram");
//     }, 3000);
// });

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Shyam");
//     }, 1000);
// });

// Promise.race([p1, p2])
//     .then((result) => {
//         console.log(result);
//     });


    const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error 1");
    }, 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Success");
    }, 2000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error 3");
    }, 500);
});

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

function getusers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"ram"
            })
        },2000)
    })
}

getusers().then((user)=>{
    console.log(user)
})
///
function fetchUser