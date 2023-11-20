// for (let i = 10; i <= 100; i += 10) {
//     console.log('hello:', i);
// }
// for (let i = 1; i <= 20; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);

// }
// for (let i = 200; i >= 0; i -= 25) {
//     console.log(i)
// }
// const animals = ['lions', 'tigers', 'bears'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }
// const examScores = [98, 77, 84, 91, 57, 66];
// for (let i = 0; i < examScores.length; i++) {
//     console.log(i, examScores[i]);
// }
// const myStudents = [
//     {
//         firstName: 'Zeus',
//         grade: 86

//     },
//     {
//         firstName: 'Artemis',
//         grade: 97

//     },
//     {
//         firstName: 'Hera',
//         grade: 72

//     },
//     {
//         firstName: 'Apollo',
//         grade: 90

//     },
// ];
// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     console.log(`${student.firstName} scored ${student.grade}`);

// }
// const word = 'stressed';
// for (let i = word.length - 1; i >= 0; i--) {
//     console.log(word[i]);
// }
// let total = 0;
// for (let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     total += student.grade;

//     console.log(total / myStudents.length);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log('OUTER LOP:', i);
//     for (let j = 10; j >= 0; j -= 2) {
//         console.log('Inner loop', j);
//     }
// }
// const gameBoard = [
//     [4, 32, 8, 4],
//     [64, 8, 32, 2],
//     [8, 32, 16, 4],
//     [2, 8, 4, 2]
// ];
// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++) {
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }
// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }
// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while (guess !== target) {
//     console.log(guess);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);

//while(some condition)
//in the loop, update or attempt to make that condition
//false

// let subReddits = ['soccer', 'popheads', 'cringe', 'books'];

// for (let i = 0; i < subReddits.length; i++) {
//     console.log(subReddits[i]);
// }

// for (let sub of subReddits) {
//     console.log(sub);
// }
// for (let char of 'cockadoodledoo') {
//     console.log(char.toLocaleUpperCase());
// }
//

// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for (let j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for (let row of magicSquare) {
//     let sum = 0;
//     for (let num of row) {
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//     console.log(`${words1[i]}${words2[i]}`);
// }

// const movieReviews = {
//     Arrival: 9.5,
//     Alien: 9,
//     Amelie: 8,
//     'In Bruges': 9,
//     Amadeus: 10,
//     'Kill Bill': 8,
//     'Little Miss Sunshine': 8.5,
//     Coraline: 7.5
// };
// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// }
// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings) {
//     total += r;
// }
// let avg = total / ratings.length;
// console.log(avg);
// Excercise 1
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// let start = 0;
// while (start <= 10) {
//     console.log(start);
//     start++;
// }
// for (let i = 2; i <= 20; i += 2) {
//     console.log(i);
// }
// let start = 1;
// while (start <= 21) {
//     console.log(start);
//     start += 2
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }