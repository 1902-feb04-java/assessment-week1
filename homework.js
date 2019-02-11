var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if (n===0) {
    return 0;
  } else {
    let fib = 1;
    let lastFib = 0;
    let newFib;
    for (i=1; i < n; i++) {
      newFib = fib + lastFib; //1 
      lastFib = fib;
      fib = newFib;
    }  
    return fib;
  } 
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let length = array.length;
  console.log(length);
  for (i=0; i<length; i++) {
    if (array[i] > array[i+1] && array[i] > array[length-1]) {
      let newEnd = array.shift()
      array.push(newEnd);
    }
  };
  return array;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  let factor = (n>0) ? n : 1 ;
  if (n>0) {
    factor = factor * homework.factorial(n-1);
  } else { 
    return 1;
  };
  
  return factor; 
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let arrayLast;
  for (i=0; i<n; i++) {
    arrayLast = array.shift();
    array.push(arrayLast);
  }
  console.log(array);
  return array;
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

};
