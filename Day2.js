//global scope//
// let name ="himanshu"
// // function show(){
    
// //     console.log(name);
// // }
// // show();
// // //block scope
// // {
// //     let city="dehli"
// //     console.log(city);
// // }
// // let a =10;
// // // function outer(){
// // //     let b=20;
// // //     console.log(a);
// // //       console.log(b);
// // // }
// // // outer();
// // // lexical chaining
// // function outer (){
// //     let username ="hi";
// //     function inner(){
// //         console.log(username);
// //     }
// //     inner();
// // }
// // outer();
// // // ex2
// // function a(){
// //     let x=10;
// //     function b(){
// //         let y=20;
// //         function c(){
// //             console.log(x);
// //             console.log(y);
// //         }
// //         c();
// //     }
// //     b();
// // }
// // a();
// // console.log(x);
// // clouser
// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer();

// counter(); 
// // counter(); 
// counter(); 
// let a =10;
// function outer(){
//     let b=20;
//     return function middle(){
//         let c=20;
//         return function inner(){
//             console .log (a);
//              console .log (b);
//               console .log (c);
//         }
//     }
// }
// const x = outer();
// const y=x();
// y();
// let x=1;
// const result =(function(a,b)){
//     return a+b;
// })(10,20)



// }
// function calculate(a,b,operation){
//     return operation(a,b);
// }
// function add (x,y){
//     return x+y;

// }
// console.log(calculate(20,76,add));
// const nums = [1, 2, 3, 12];
// const result = nums.map(num => num * 2);
// console.log(result);
// const products = [
//     {id:1, name:"mobile", price:15000},
//     {id:2, name:"pen", price:15},
//     {id:3, name:"bottle", price:150},
//     {id:4, name:"tv", price:150000},
//     {id:5, name:"laptop", price:150000},
//     {id:6, name:"book", price:150},
//     {id:7, name:"table", price:200000}
// ];

// const Products = products.map(product => ({
//     name: product.name,
//     price: product.price
// }));

// console.log(Products);
// const results = [10, 24, 34, 6.7, 445];
// const filteredResults = results.filter(num => num <= 30);
// console.log(filteredResults);
// const names = ["ram", "himanshu", "sahil", "sania", "sejal", "gyan", "mohit", "ramesh"];

// const sNames = names.filter(name => name.startsWith("s"));

// console.log(sNames);
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sum);
const arr = [10, 20, 30, 40, 50, 100, 70, 31];

const max = arr.reduce((a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
});

console.log(max);
const word=["My","name","is","Himanshu"]
const sat = word.reduce((s,t)=>s+" "+t);
console.log(sat);