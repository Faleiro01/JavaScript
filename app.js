const double = [1,2,3,4,5,6];

const doubleValues = function(arr){
    let doubles = [];
    arr.forEach(function(val) {
        doubles.push(val * 2);
    });
    return doubles;
}

const onlyEven = function(arr){
    let doubles = [];
    arr.forEach(function(val) {
        if(val % 2 === 0){
        doubles.push(val);
        }
    });
    return doubles;
}
const names = ['colt', 'joseph', 'tim', 'test'];

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }

  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }

  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
//map
  
function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  
  function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }
  
  function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }
  
  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
  // filter
  
  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }
  
  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
  
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }
  
  