var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  let num_a = 1;
  let num_b = 0;
  let temp;

  while (n> 0){
    temp = num_a;
    num_a = num_a + num_b;
    num_b = temp;
    n = n - 1;
  }
  return num_b;
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  for(let i = 0; i < array.length; i++){
    
    let min_index = i;
    for(let j = i + 1; j < array.length; j++){
      if(array[j] < array[min_index]){
       min_index = j;
      }
    }
    var temp = array[i];
    array[i] = array[min_index];
    array[min_index] = temp;
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
  let result = n;
  if (n === 0 || n === 1) 
    return 1; 
  while (n > 1) { 
    n = n - 1;
    result = result * n;
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
  let temp;
  for(let i=1; i <= n; i++){
    for(let j=0; j < array.length; j++){
      temp = array[0];
      if(j !=0){
      array[j-1] = array[j];
      }
    }
    array[array.length-1] = temp;  
  }

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
