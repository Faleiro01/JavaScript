function greet() {
    console.log("Hi!! I love you!")
}

// function diss() {
//     console.log("You are the worst :(")
// }

// let funcs = [greet, diss]

// const myFunc = function add(x, y) {
//     return x * y;
// }

// function giveBirth() {
//     console.log("Giving birth!!!")
//     return function cry() {
//         return "WAHHHHH"
//     }
// }

// function makeMultiplyFunc(num) {
//     return function mult(x) {
//         return num * x;
//     }
// }

// function repeatThreeTimes(func) {
//     func();
//     func();
//     func();
// }

// function repeat(num, func) {
//     for (let i = 0; i <= num; i++) {
//         func();
//     }
// }

//SINGLE THREAD

// console.log("Hello")
// alert("Im an alert!")
// console.log("heyhey")

//setTimeout

console.log("wait 3 sec...")
setTimeout(greet, 3000)

//setTimeout(function, miliseconds)

// setInterval(greet, 5000) // <=== repeat every 5sec