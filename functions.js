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
} function numberCompare(a, b) {
    if (a === b) {
        return 'Numbers are equal';
    } else if (a > b) {
        return 'First is greater';
    }
    return 'Second is greater';
}

function singleLetterCount(str1, letter) {
    let finalCount = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i].toLowerCase() === letter.toLowerCase()) {
            finalCount++;
        }
    }
    return finalCount;
}

function multipleLetterCount(str) {
    str = str.toLowerCase();
    let finalObj = {};
    for (let i = 0; i < str.length; i++) {
        if (finalObj[str[i]] === undefined) {
            finalObj[str[i]] = 1;
        } else {
            finalObj[str[i]]++;
        }
    }
    return finalObj;
}

function arrayManipulation(arr, command, position, val) {
    if (command === 'remove') {
        if (position === 'end') {
            return arr.pop();
        }
        return arr.shift();
    }
    else if (command === 'add') {
        if (position === 'end') {
            arr.push(val)
            return arr;
        }
        arr.unshift(val)
        return arr;
    }
}

function isPalindrome(str) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();

}
function RPS() {

    function determineComputer(num) {
        if (num <= .33) return "rock";
        else if (num <= .66) return "paper";
        return "scissor";
    }

    let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
    let computerChoice = determineComputer(Math.random());


    let answers = ["rock", "paper", "scissor"];

    if (!userChoice || answers.indexOf(userChoice) === -1) {
        return "Please select a valid option";
    }

    if (userChoice === computerChoice) return "Tie!";

    if (userChoice === "rock" && computerChoice === "paper") {
        return "You lose, computer picked " + computerChoice;
    }
    if (userChoice === "paper" && computerChoice === "scissor") {
        return "You lose, computer picked " + computerChoice;
    }
    if (userChoice === "scissor" && computerChoice === "rock") {
        return "You lose, computer picked " + computerChoice;
    }

    return "You win! Computer picked " + computerChoice;
}