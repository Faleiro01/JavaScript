//shortHand
function makePerson (first, last, age){
    return{
        first,
        last,
        age,
        isAlive : true
    };
}

const mathStuff = {
    x : 200,
    add(a,b){
        return a + b;
    },
    square(a){
        return a * a;
    },
    multiply: (a,b) => {
        return a * b;
    }
};
// function makeColor (name, hex) {
//     const color = {};
//     color[name] = hex;
//     color[hex] = name;
//     return color;
// }

// function makeColor(name, hex){
//     return {
//         [name] : hex,
//         [hex] : name
//     };
// }





//Excercise

// function createInstructor(firstName, LastName){
//     return {
//         firstName,
//         LastName
//     }
// };

// let favoriteNumber = 42;

// const instructor = {
//   firstName: "Colt",
//   [favoriteNumber]: "That is my favorite!"
// }

// const instructor = {
//     firstName: "Colt",
//     sayHi () {
//       return "Hi!"
//     },
//     sayBye () {
//       return this.firstName + " says bye!";
//     }
//   }

function createAnimal(species, verb, noise){
    return {
      species,
      [verb](){
        return noise;
      }
    }
  }