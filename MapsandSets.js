const myMap = new Map();
myMap.set(7, 'seven');
myMap.set('7', 'seven string');

const empty = [];
myMap.set(empty, 'empty array!');
myMap.set(true, 'trueeee!');

myMap.get(7);

const bandData = [
    [3, '3 Doors Down'],
    ['three', 'three dog night'],
    ['nine', 'nine inch nails'],
    ['four', 'the four seasons'],
    [41, 'sum 41']
];

const bandMap = new Map(bandData);

bandMap.set(182, 'Blink-182').set('twenty', 'Matchbox twenty');

// bandMap.forEach((val, key) => {
//     console.log(key + '=>' + val);

// });

for (let [key, value] of bandMap) {
    console.log(key, '=', value); 
}

// excercise

{1,2,3,4}

"ref"
0: {Array(3) => true}
1: {Array(3) => false}
const hasDuplicate = arr => new Set(arr).size !== arr.length

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }