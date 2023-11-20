// function grumpus() {
//     console.log('ughh');
//     console.log('For the last time');
//     console.log('Leave me alone!!!');
// }

// grumpus();
// grumpus();
// grumpus();

// for (let i = 0; i < 50; i++) {
//     grumpus()
// }
// function rollDie() {
//     let roll = Math.floor(Math.random() * 7);
//     console.log(`Rolled: ${roll}`);
// }
// function throwDice() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();

// }

// function greet(nickname) {
//     console.log(`Hi, ${nickname}!`);
// }

// function square(num) {
//     console.log(num * num);
// }

// function sum(x, y) {
//     console.log(x + y);
// }

// function divide(a, b) {
//     console.log(a / b);
// }

// function add(x, y) {
//     return x + y;
// }

// function square(x) {
//     console.log('GOOD JOB');
//     return x * x;
// }
// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     if (color.toLowerCase() === 'purple') {
//         return true;
//     }
//     return false;
// }
// function isPurple(color) {
//     return color() === 'purple';
// }

// function isValidPassword(nick, passw) {
//     if (passw.length < 8) {
//         return false;
//     }
//     if (passw.indexOf(' ') !== -1) {
//         return false;
//     }
//     if (passw.indexOf(nick) !== -1) {
//         return false;
//     }
//     return true;
// }
// function avg(arr) {
//     let total = 0;
//     for (let num of arr) {
//         total += num;
//     }
//     let res = total / arr.length;
//     return res;
// }

// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCased.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return false;
// }

// function pick(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function getCard() {
//     const values = [
//         '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'

//     ];
//     const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
//     return { value: pick(values), suit: pick(suits) };
// }

function difference(a, b) {
    return a - b;
}
function product(a, b) {
    return a * b;
}

function daysOfTheWeek(num) {
    let dates = {

        'sunday': 1,
        'monday': 2,
        'tuesday': 3,
        'wednesday': 4,
        'thursday': 5,
        'friday': 6,
        'saturday': 7
    };

    return dates[num];
}
function lastElement(arr) {
    return arr[arr.length - 1];
}