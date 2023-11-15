// let colors = ['red', 'blue', 'green'];
// let shoppingList = ['cereal', 'cheese', 'ice'];
// let myCollection = [12, 'dog', true, null, NaN];
// let shoppingList = ['cheddar cheese', '2% milk'];
// shoppingList[1] = 'Sorvetin';
// shoppingList[2] = 'Paper Towel';
// //To add to the end:
// shoppingList[shoppingList.length] = 'Ketchup';
// shoppingList[shoppingList.length] = 'Potatoes';
// let topSongs = [
//     'First Time Ever I Saw Your Face',
//     'God Only Knows',
//     'A Day In The Life',
//     'Life On Mars'
// ];

// topSongs.push('Caipirinha, agua de coco');
// topSongs.push('true');
// topSongs.pop()
// let fruits = ['apple', 'banana'];
// let veggies = ['aspargus', 'brussel sprouts'];
// let meats = ['steak', 'chicken'];

// console.log(fruits.concat(veggies));

// let allFood = fruits.concat(veggies, meats);
//Includes array ex:
// let ingridients = [
//     'water',
//     'corn starch',
//     'flour',
//     'cheese',
//     'brown sugar',
//     'shrimp',
//     'eel',
//     'butter'
// ]
// if (ingridients.includes('Melon')) {
//     console.log('tem agua ai mano');
// }
// else {
//     console.log(`I couldn't find the items you are looking for!`)
// }
// let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

// if (letters) {
//     console.log(letters.reverse())
// }
// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'toirtose'];

// let swimmers = animals.slice(0, 3);
// let mammals = animals.slice(2, 4);
// let reptiles = animals.slice(4, 6); 

// let people = ['zandra', 'antonia', 'abrunael', 'xavier', 'duda']

// if (people) {
//     console.log(people.sort())
// }
// const color = [
//     ['red', 'Crismon'],
//     ['orange', 'dark orange'],
//     ['yellow', 'golden rod'],
//     ['green', 'olive'],
//     ['blue', 'navy blue'],
//     ['purple', 'orchid']
// ]
// if (color) {
//     console.log(color[5][1])
// }
// else {
//     console.log('If your color dont show up try again!')
// }
const people = ['Greg', 'Mary', 'Devon', 'James'];
people.splice(0, 1);
people.splice(3, 1);
people.unshift("Matt")
people.push("Gabriel");
people.slice(0, 2)
people.indexOf("Mary");
people.indexOf("foo")
people.splice(2, 1, "Elizabeth", "Artie");

let withBob = people
let bob = withBob.concat()