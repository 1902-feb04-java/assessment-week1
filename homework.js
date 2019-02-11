var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function fib(n){
  if (n===0){
    return 0;
  }
  else if (n===1){
    return 1;
  }
  else if (n>1){
    return fib(n-1)+fib(n-2);
  }
  else{
    return null;
  }
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  // bubble sort
  let sortedArray = [];
  let arrayClone = array.slice(0);

  for (let j = 0; j<array.length; j++){
    let minIndex = -1;
    let minValue = Infinity;
    for (let i = 0; i<arrayClone.length; i++){
      let value = arrayClone[i];
      if (value<minValue){
        minIndex = i;
        minValue = value;
      }
    }
    // add the smallest index to sortedArray, and remove it from arrayClone
    sortedArray.push(arrayClone.splice(minIndex,1)[0]);
  }
  return sortedArray;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function fac(n){
  if (n===0 || n===1){
    return 1;
  }
  else if (n>1){
    return n*fac(n-1);
  }
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let newArray = [];
  for (let i = 0; i<array.length; i++){
    newArray.push(array[(i+n) % array.length]);
  }
  return newArray;
};

/*
  Bonus: Balanced Brackets

  A bracket is any one of the following: (, ), {, }, [, or ]

  The following are balanced brackets:
    ()
    ()()
    (())
    ({[]})

  The following are NOT balanced brackets:
  (
  )
  (()
  ([)]

  Return true if balanced
  Return false if not balanced
*/
homework.balancedBrackets = function balance(bracketsString){
  let targetChar = null;
  let openingIndex = -1;
  for (let i = 0; i<bracketsString.length; i++){
    let char = bracketsString[i];
    if (char==="("){
      targetChar = ")";
      openingIndex = i;
      break;
    }
    else if (char==="{"){
      targetChar = "}";
      openingIndex = i;
      break;
    }
    else if (char==="["){
      targetChar = "]";
      openingIndex = i;
      break;
    }
    // if you encounter a closing bracket before a beginning bracket, not balanced
    else if (char === ")" || char === "}" || char === "]"){
      return false;
    }
  }
  if (targetChar === null){
    // parsed through without finding any opening brackets
    return true;
  }
  for (let i = bracketsString.length-1; i>=0; i--){
    if (bracketsString[i] === targetChar){
      // if you found the matching bracket, remove matching brackets and test string again
      // Needs to be done with slices and joining
      //bracketsString.splice(openingIndex,1);
      //bracketsString.splice(i-1,1);
      return balance(bracketsString);
    }
  }
  return false;
};
