// console.log("Hello World!")

// let matrix = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ];
// for (let i = 0; i < matrix.length; i++) {
//     let subArr = matrix[i];

//     for (let j = 0; j < subArr.length; j++) {
//         console.log(subArr[j]);
//     }
// };
// let colors = ['red', ' blue', 'cyan', 'yellow'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

// for (let color of colors) {
//     console.log(color)
// }

// for (let char of "PURPLE RAIN!") {
//     console.log(char)
// }

// const dog = {
//     name: 'Pluto',
//     age: 3,
//     color: 'white and brown'
// }

// for (let prop in dog) {
//     console.log(`${prop}=>${dog[prop]}`)
// }
// for (let key in colors) {
//     console.log(key)
// }

//Do not use for...of with objects use for...in

//DEBUGGING
// "uioashdiuyhas
// function hello() {
//     3 @4
//     3 + ; 4
//     //Syntax error
//     //Reference error
//     function sayHi() {
//         let greeting = 'hi!';
//     }

//     sayHi();
//     greeting;
//Type error
// 5();
// "hello".splice();

// const dog = {
//     first: "Rusty"
// }
// dog.last.toUpperCase();

//explanation
// function hasEnoughMoneyToBuy(price, qty, balance) {
//RIGHT APROACH ===> const subtotal = Math.round(price * qty * 100) / 100;
//     const subtotal = price * qty;
//     console.log("subtotal:", subtotal);
//     console.log("balance:", balance);
//     if (subtotal <= balance) {
//         return 'YOU HAVE ENOUGH MONEY!'
//     }
//     return 'SORRY, YOU NEED MORE MONEY TO BUY THAT'
// }
//NOT ENOUGH MONEY 
// hasEnoughMoneyToBuy(50.5, 10, 300)
// hasEnoughMoneyToBuy(200.3, 5, 600.9)

//ENOUGH MONEY
// hasEnoughMoneyToBuy(10, 6, 60)
// hasEnoughMoneyToBuy(30, 3, 100)
// hasEnoughMoneyToBuy(200.3, 3, 600.9)

//hasEnoughMoneyToBuy(200.3, 3, 600.9) It is not enough money
//because the subtotal is 600.90000001
//your balance is 600.900000

//ANOTHER EXAMPLE of the use of console.log
// let grades = [99, 98, 76, 54, 66, 90, 81];
// let sum = 0;
// debugger;
// for // Wrong aproach
//     //(let i = 0; i <= grades.length; i++)
//     //Right aproach 
//     (let i = 0; i <= grades.length; i++) {
//     sum += grades[i];
//     console.log("i", i);
//     console.log("grande", grades[i]);
//     console.log("sum", sum)
// }
// let avg = sum / grades.length;



// try {
//     console.log("Inside try");
//     functionThatDoesNotExist();
// } catch (e) {
//     console.log(e);
//     console.log("oh no error!")
// } finally {
//     console.log("Inside finally!")
// }

// console.log("did we make it?");

// console.log("Before the error")
// throw "I am the error haha";
// console.log("after  the error")
try {
    throw "I am the error haha";
} catch (e) {
    console.log("There was an error...", e)
}