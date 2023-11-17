const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    avgGoodSleep: '2:13',
    workoutsThisWeek: '5 of 7'
};

let data = { a: 1 + 1, }
const numbers = {
    100: 'one hundred',
    16: 'sixteen',
    '76 trombones': 'great song!'
};
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

let mysteryColor = 'yellow';

const userReviews = {};
userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;
userReviews['queenBee49'] += 2;
userReviews.mrSmith78++;

const student = {
    firstName: 'Gabriel',
    lastName: 'Oliveira',
    strengths: ['Ciencias', 'Ed.fisica'],
    exams: {
        midterm: 92,
        final: 88
    }
};
const avg = (student.exams.midterm + student.exams.final) / 2;

const shoppingCart = [
    {
        product: 'jenga classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    },
];
const game = {
    player1: {
        username: 'blue',
        playingAs: 'X'
    },
    player2: {
        username: 'muffins',
        playingAs: '0'
    },
    board: [['0', null, 'X'],
    ['X', 0, 'X'],
    [null, '0', 'X']]
};

let nums = [1, 2, 3];
let mystery = [1, 2, 3];

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};
//Wrong way
// if (user.notifications === [])

if (!user.notifications.length) {
    console.log('NO NEW NOTIFICATIONS!');

}

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
};
programming.languages.push('Go')
programming.difficulty = 7
delete programming.jokes;
programming.isFun = true;