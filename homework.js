var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  let x = 0;
  let y = 1;
  let z;
  while(n>0){
    z = y;
    y = y + x;
    x = z;
    n = n - 1;
  }
  return x;
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let min = array[0];
  let pos = 0;
  let x =[];
  for(let i = 0; i < array.length; i++){
    if(min>array[i]){
      min = array[i];
      pos=i;
    }
    let rem = array.splice(pos, 1);
    x.push(rem);
  }
  return x;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  let x = 0;
  for(let i = 1; i<(n+1);i++){
    x = x + i;
  }
  return x;
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  for(let i = 0;i<n;i++){
    let x = array.shift();
    array.push(x);
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
  if(bracketsString.length%2!==0){
    return false;
  }else{

  }
};
