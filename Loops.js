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
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
    console.log(guess);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);