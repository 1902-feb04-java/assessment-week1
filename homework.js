var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  let index = 1, temp, num =0;
  // for loop to get the fib number at nth index
  for(; n >= 0;){
    // add numbers together decreasing from nth index
    temp = index;
    index += num;
    num = temp;
    n--;
  } 
  return num;
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let check = false;
  while(!check){
    // if array is already sorted exit while loop; when for loop is done exit while
    check = true;
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i+1]){
        // switch array elements
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        // set check to false for the entire array iteration
        check = false;
      }
    }
  }
  return array;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  let fact;
  // check if nth number is 0 or 1, both cases return a 1
  if (n === 0 || n === 1){
    return 1;
  }
  // get the factorial using recursion
  return fact = n * factorial(n-1);
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let u =0;
  for(; u < n;){
    // store first element in temp
    let temp = array[0];
    // use shift to remove first element and shift all others to a lower index
    array.shift();
    // push removed element to the end of the array.
    array.push(temp);
    u++;
  }
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
