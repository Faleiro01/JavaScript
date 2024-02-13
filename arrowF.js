//anonymous function 
// arr.map(function (x) {
//     return x * 2
// });

//function declaration
function greet() {

}

// function expression 
const add = function (x, y) {
    return x + y;
};

//arrow functions

const att = (x, y) => {
    return x + y;
};

const result = [2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});

// ARROW FUNCTIONS SHORTCUTS

[1, 2, 3, 4, 5].forEach(n => {
    console.log(n * 10);
});

const greeta = () => {
    console.log('hiiii');
};

const legacy = [1, 2, 3, 4, 5, 6, 7, 8].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

//
const test = [1, 2, 3, 4, 5, 6].map((n) => {
    if (n % 2 === 0) {
        return 'even'
    }
    return 'odd'
})

// shorter way of this ^ down here!!

const testSimplify = [1, 4, 56, 567, 876, 54, 456].map((n) => n % 2 === 0 ? 'even' : 'odd');

//

const dailyRainTotals = [
    [1.2, 0.37, 7],
    [0.9, 0.68, 0.3],
    [5, 0.23, 1.68]
];

//opt 1
// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//         return sum + inchesOfRain;
//     });
// });

// or opt 2

dailyRainTotals.map((hourlyRainTotals) =>
    hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain)
);

//******************************** */
//***ARROW FUNCTION GOTCHA*** */
//******************************** */

const makeMath = (num) => ({
    square : num * num,
    double : num * 2
});


//Arrow functions can only be used as shorthand for anonymous functions expressions//
//Must put parentheses around parameters if there are 0 or 2+ parameters//
//They do not make their own (this.) only regular functions

//EXCERCISE ARROW FUNCTIONS

const timesTwo = (arr) => arr.map((val) => val * 2);

//

function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

 const squareAndFindEvens = numbers => numbers.map(val  => val ** 2).filter(square => square % 2 === 0);
   
  