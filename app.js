// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }
// // function throwDice() {
// //     rollDie()
// //     rollDie()
// //     rollDie()
// //     rollDie()
// //     rollDie()
// //     rollDie( )
// // }
//  function greet(nickname){
//     console.log(`Hi there ${nickname}!`)
//  }
//  function throwDice(numRolls){
//     for (let i = 0; i < numRolls; i++){
//         rollDie()
//     }
//  }
// function square (num) {
//     console.log(num * num);
// }

// function sum(x, y) {
//     console.log(x + y);
// }
// function divide(a,b){
//     console.log(a / b);
// }

//***Return ***/

// function add(x, y) {
//     return x + y;
// }
// function square (x) {
//     console.log(`Here is you answer: ${x * x}!`);
// }

// function isPurple(color){
//     if(color.toLowerCase === 'yellow'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color){
//     return color.toLowerCase() === 'purple';
// }
// function containsPurple(arr){
//      for (let color of arr){
//         if(color === 'purple' || color === 'magenta'){
//             return true;
//         }
//      }
//      return false;
// }







//Practice isValidPassword //

// function isValidPassword(password, username){
//     if (password.length < 8){
//          return console.log('Password is too short!')
//     }
//    if (password.indexOf(' ') !== -1){
//         return console.log('Password cannot contain spaces!')
//     }
//     if (password.indexOf(username) !== -1){
//         return console.log('Password cannot contain username!')
//     }
//         return console.log(`You've been logged in!`)
//     }

//Short way of doing it! //

    // function isValidPassword(password, username){
    //   const tooShort = password.length < 8;
    //    const containSpace = password.indexOf(' ') !== -1;
    //    const tooSimilar = password.indexOf(username) !== -1;
    //    if( tooShort || containSpace || tooSimilar) return false;
    //    return true;
    // }
  
        // function isValidPassword(password, username){
    //   const tooShort = password.length < 8;
    //    const containSpace = password.indexOf(' ') !== -1;
    //    const tooSimilar = password.indexOf(username) !== -1;
    //    return !tooShort && !containSpace && !tooSimilar;
    // }
  

    // function getAverage (arr){
    //     let sum = 0;
    //     for (let i = 0; i < arr.length; i++){
    //         sum += arr[i];
    //     }
    //     let res = sum / arr.length;
    //     return res;
    // }

    // function getAverage (arr){
    //     let sum = 0;
    //     for (let num of arr) {
    //         sum += num;
    //     }
    //     let res = sum / arr.length;
    //     console.log(`Your answer will be ${res}`);
    //      }


    // function isPangram (sentence) {
    //     let lowerCased = sentence.toLowerCase();
    //     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    //         if (lowerCased.indexOf(char) === -1){
    //             return console.log('Try again!');
    //         }
    //     }
    //     return console.log(`You've got it right, congrats!`);
    // }
   
    // function isPangram (sentence) {
    //     let lowerCased = sentence.toLowerCase();
    //     for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    //         if (!lowerCased.includes(char)){
    //             return console.log('Try again!');
    //         }
    //     }
    //     return console.log(`You've got it right, congrats!`);
    // }

    // function pick(arr){
    //   const idx = Math.floor(Math.random() * arr.length);
    //   return arr[idx];
    // }
    
// 1

    // function getCard(){
    //     const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    //    const idx = Math.floor(Math.random() * values.length);
    //    const value = values[idx];
    
    //    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
    //    const suitsIdx = Math.floor(Math.random() * suits.length);
    //    const suit = suits[suitsIdx];
    //    return console.log(`Value: ${value}, Suits: ${suit}`);
    // }

// 2

//     function getCard(){
//         const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
//        const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
// return {value: pick(values), suit: pick(suits)};
//     }

//Excercise 

// function difference (x,y){
//    return console.log(x - y);
// }
// function product (x,y){
//     return console.log(x * y);
//  }

//  function weekDays (num){
// let days = {1: "sunday", 2: "monday", 3: "tuesday", 4:'wednesday', 5: 'thursday', 6:'fiday', 7: 'saturday'}
// return days[num];

//  }

//  function lastElement (arr){
//     return arr[arr.length-1];
//  }

//  function numberCompare (n1,n2){
//     if (n1 === n2){
//         return console.log('Numbers are equal');
//     }
//     if (n1 > n2 ) {
//         return console.log('First is greater');
//     }
//     if (n1 < n2) {
//         return console.log('Second is greater');
//     }
//  }

//  function singleLetterCount (word, letter){
//     let finalCount = 0;
//     for(let i=0; i< word.length; i++){
//         if(word[i].toLowerCase() === letter.toLowerCase()){
//             finalCount++;
//         }
//     }
//     return finalCount;
//  }

//  function multipleLetterCount(str){
//     str = str.toLowerCase();
//     let finalObj = {};
//     for (let i=0; i< str.length; i++){
//         if (finalObj[str[i]] === undefined){
//             finalObj[str[i]] = 1;

//         }else {
//             finalObj[str[i]] ++;
//         }
//     }
//     return finalObj;
//  }

//  function arrayManipulation(array, command, location, value){
//     if(command === 'remove'){
//         if(location === 'end'){
//             return array.pop();
//         }
//         return array.shift();
//     }
//     else if (command === 'add'){
//         if(position === 'end'){
//            array.push(value);
//            return array;
//         }
//         array.unshift(value)
//         return array;
//     }
//  }
//  function isPalindrome(str){
//      for(let i =0; i<str.length/2; i++){
//       if(str[i].toLowerCase() !== str[str.length-1-i].toLowerCase()){
//         return false;
//       }
//     }
//     return true;
//   }

//   function RPS (){

//     function determineComputer(choice){
//         if (choice <= .33) return 'rock';
//         else if (choice <= .66) return 'paper';
//         return 'scissors';
//     }
//     let userChoice = prompt('Choose between Rock, Paper or Scissors');
//     let computerChoice = determineComputer(Math.random());
//     let answer = ['rock', 'paper', 'scissors'];

//     if(!userChoice || answer.indexOf(userChoice) === -1){
//        return console.log('Please select a valid option!');
//     }
//     if(userChoice === computerChoice) return console.log('tie!')

//     if (userChoice ==='rock' && computerChoice === 'paper'){
//        return console.log(`Machine wins! ${computerChoice}`)
//     }
//     if (userChoice ==='paper' && computerChoice === 'scissors'){
//        return console.log(`Machine wins! ${computerChoice}`)
//     }
//     if (userChoice ==='scissors' && computerChoice === 'rock'){
//        return console.log(`Machine wins! ${computerChoice}`)
//     }
//     return console.log(`You win! computer picked ${computerChoice}.`)
//   }

//   function multipleThree(number){
//     for(let i = 3; i < number; i++){}
// }

// function multipleFive(number){
//     for(let i = 5; i < number; i++){}
// }

// function fizzBuzz(n) {
    
//     for (let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0)
//            console.log('FizzBuzz');
//         if (i % 3 === 0 && i % 5 !== 0)
//            console.log('Fizz');
//                     if (i % 3 !== 0 && i % 5 === 0)
//             console.log('Buzz');
//                     if (i % 3 !== 0 && i % 5 !== 0)
//             console.log(i);
//     }
    
// };
