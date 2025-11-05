const findSum = function(array) {
  let result = array.reduce((a,b) => a + b, 0)
  
  return result
};

const findFrequency = function(array) {
  let tallyObj = {};
  let result = {};
  let most = 0;
  let least = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (tallyObj[array[i]]) {
      tallyObj[array[i]] += 1;
    } else {
      tallyObj[array[i]] = 1;
    }
  }
  
  for (let key in tallyObj) {
    if (tallyObj[key] > most) {
      most = tallyObj[key]
      result.most = key;
    } else {
      least = tallyObj[key]
      result.least = key;
    }
  }
  
  return result;
};

const isPalindrome = function(str) {
  let lowerCaseStr = str.toLowerCase();
  let revStr = lowerCaseStr.split("").reverse().join("");
  
 if (lowerCaseStr !== revStr) {
     return false;
     };
  return true
};

const largestPair = function(array) {
  let result = 0;
  
  for(let i = 0; i < array.length; i++) {
    if (array[i] * array[i+1] > result) {
      result = array[i] * array[i+1]
    }
  }
  return result;
};

const removeParenth = function(str) {
  const strArray = str.split("")
  let firstHalf = [];
  let lastHalf = [];
 
  for(let i = 0; i < strArray.indexOf("("); i++) {
    firstHalf.push(strArray[i]);
  }
 
  for(let j = (strArray.indexOf(")") + 1); j < strArray.length; j++) {
    lastHalf.push(strArray[j]);
  }
 
  return firstHalf.concat(lastHalf).join("");
};

const scoreScrabble = function(str) {
  let total = 0;
  const pointSystem = {
    1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
    2: ["d", "g"],
    3: ["b", "c", "m", "p"],
    4: ["f", "h", "v", "w", "y"],
    5: ["k"],
    8: ["j", "x"],
    10: ["q", "z"],
  };

  for (const char of str) {
    for (const key in pointSystem) {
      if (pointSystem[key].includes(char)) {
        total += Number(key);
      }
    }
  }

  return total;
};
