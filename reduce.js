const nums = [2, 5, 6, 8, 12, 1];

// nums.reduce(function(accumulator, currentVal){
//     console.log(`Accumulator is ${accumulator}`);
//     console.log(`CurrentVal is ${currentVal}`);
//     let updatedSum = accumulator + currentVal;
//     console.log(`UpdatedValue is ${updatedSum}`);
//     console.log('==================')
//     return updatedSum;

//     //the 0 of }, 0) means where the accumulator starts!!
// }, 0)

// shorter way

const total = nums.reduce(function(accumulator, currentVal){
    return accumulator + currentVal;
}, 0);

nums.reduce(function(accumulator, currentVal){
    if(currentVal > accumulator){
        return currentVal
    }
    return accumulator;
})

nums.reduce(function(accumulator, currentVal){
    if(currentVal < accumulator){
        return currentVal
    }
    return accumulator;
})

const people = [
    {name: 'Jimbo', age: 15},
    {name: 'Allison', age: 16},
    {name: 'Juan', age: 15},
    {name: 'Bertha', age: 17},
    {name: 'monty', age: 16},
    {name: 'Jess', age: 14}
];

const ages = people.reduce(function(accum, current){
const age = current.age;
if(accum[age] == null){
    accum[age] = 1;
} else {
    accum[age] += 1;
}
return accum;
}, {})