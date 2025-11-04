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
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
