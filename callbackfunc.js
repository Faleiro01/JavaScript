// function greet() {
//     console.log("Hi!! I love you!")
// }

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

// console.log("wait 3 sec...")
// setTimeout(greet, 3000)

//setTimeout(function, miliseconds)

// setInterval(greet, 5000) // <=== repeat every 5sec
// anonymous function
// function doubleDiss() {
//     greet()
//     greet()
// }

// greet()
// setTimeout(doubleDiss, 3000)
// greet()

// setTimeout(function () {
//     greet()
//     greet()
//     greet()
//     greet()
//     greet()
// }, 5000)
// function doTwice(func) {
//     func();
//     func();
// }

// doTwice(function () {
//     console.log("STOP BOTHERING ME!");
//     console.log("Please go away!")
// })

// const funcs = [function () { }, function () { }]
// const printOne = function () {
//     console.log(1)
// }

//EXCERCISE
let counter = 4;
const countDown = setInterval(function () {
    console.log(counter);
    counter--
    if (counter === 0) {
        console.log("DONE!!");
        clearInterval(countDown);
    }
}, 1000);

function randomGame() {
    let num;
    let times = 0;
    let timer = setInterval(function () {
        num = Math.random();
        times++
        if (num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " try/tries.");
        }
    }, 1000)
}