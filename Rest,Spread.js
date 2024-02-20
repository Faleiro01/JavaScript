// function sum (){
//     const args = Array.from(arguments);
//     return args.reduce((sum,val) => {
//         return sum + val;
//     });
// }
//Does not work// down below

// const max = () => {
//     console.log(arguments);
// };

const max = function () {
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => {
        return currVal > max ? currVal : max;
    });
}
//-------------------------------------------------------------

function sum(...nums) {
    return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
};

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents: [parent1, parent2],
        children: kids.length ? kids : 0
    };
}

const filterByType = (type, ...vals) => {
    return vals.filter((v) => typeof v === type);
};

const nums = [4, 5, 88, 123, 0.92, 34];
Math.max(nums)//NaN
Math.max(...nums)//123


const pallete = ['lavender berry', 'sunflower yellow', 'orchid orange'];


//Ways of making a copy of an array
// const palleteCopy = pallete.slice(); 

const palleteCopy = [...pallete];

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['guatemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];
const withCaffeine = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey'];

const vowels = 'aeiou';
const vowelArr = [...vowels, 'sometimes y'];


//when object

const tea = {
    type: 'oolong',
    name: 'winter sprout',
    origin: 'taiwan'
};

const teaData = {
    steepTime: '30s',
    brewTemp: 175,
    origin: 'japan'
};

const tea2 = { ...tea };

const teaTin = { ...tea, price: 22.99 };

//const newTea = {...tea, name: 'golden frost'};
const newTea = { name: 'golden fronst', ...tea }; //overwrites name because of order

const fullTea = { ...tea, ...teaData };

const colors = ['red', 'orange', 'blue'];
const dummyObj = { ...colors, ...'cat' }//also overwrites because of order 




//ES2015 REST AND SPREAD EXCERCISE!!

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 })

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyVal = (obj, key, val) => {

    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}

    const removeKey = (obj, key) =>{

        let newObj = { ...obj }
    delete newObj[key]
    return newObj;
    }

    const combine = (obj1, obj2) => {
        return { ...obj1, ...obj2 };
      }

      const update = (obj, key, val) => {

      
        let newObj = { ...obj }
        newObj[key] = val;
        return newObj;
      }