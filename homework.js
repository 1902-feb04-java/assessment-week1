var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if(n === 0) {
    return 0;
  }
  if(n === 1 || n === 2) {
    return 1;
  }
  return (fibonacci(n-1) + fibonacci(n-2));
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let sortedArray = array;
  for(let i = 0; i < sortedArray.length - 1; i++) {
    if(sortedArray[i] > sortedArray[i+1]) {
      let j = i + 1;
      while(sortedArray[j] < sortedArray[j-1]) {
        let temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
        j--;
      }
    }
  }
  return sortedArray;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  if(n === 0 || n === 1) {
    return 1;
  }
  let result = n;
  let i = n - 1;
  while(i !== 0) {
    result *= i;
    i--;
  }
  return result;
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  arrayRotatedLeft = array
  for(let i = 0; i < n; i++) {
    let firstElement = arrayRotatedLeft.shift();
    arrayRotatedLeft.push(firstElement);
  }
  return arrayRotatedLeft;
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
homework.balancedBrackets = function(bracketsString){
  if(bracketsString.length % 2 !== 0) {
    return false;
  }
  let j = bracketsString.length / 2;
  for(let i = j - 1; i >= 0; i--) {
    if(bracketsString[i] !== bracketsString[j]) {
      return false;
    }
    j++;
  }
  return true;
};
