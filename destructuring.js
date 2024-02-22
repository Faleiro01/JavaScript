const students = [
    {name: 'Drake', gpa: 4.6},
    {name: 'Henrietta', gpa: 4.4},
    {name: 'Tung', gpa: 4.0},
    {name: 'Harry', gpa: 3.8},
    {name: 'Ant', gpa: 3.2}

];
const [topStudent, secondBest, , fourth] = students;
const [first, ...losers] = students;

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream';

// let temp = delicious;
// delicious = disgusting;
// disgusting = temp;

// let both =[delicious, disgusting];
// [disgusting, delicious] = both;

[delicious, disgusting] = [disgusting, delicious];

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})