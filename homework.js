var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  let fibs = [0,1];
  for (let i=2;i<=n;i++) {
    fibs.push(fibs[i-1] + fibs[i-2]);
  }
  return fibs[n];
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  for (let i=1; i<array.length; i++) {
    for (let j=i; j>0 && array[j-1] > array[j]; j--) {
      let temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
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
  let running_product = 1;
  for (i=1;i<=n;i++) {
    running_product = running_product * i;
  }
  return running_product;
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  for (i=1; i<= n%array.length; i++) {
    array.push(array.shift());
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