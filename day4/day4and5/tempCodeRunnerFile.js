
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