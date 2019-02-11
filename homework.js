var homework = {};
//module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if (n > 1)
  {
    return homework.fibonacci(n-1) + homework.fibonacci(n-2);
  }
  else if (n === 1)
  {
    return 1;
  }
  else {
    return 0;
  }
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  
  for (let x = 0; x < array.length; x++)
  {
    for (let y = x+1; y < array.length; y++)
    {
      if (array[x] > array[y])
      {
        let hold;
        hold = array[y];
        array[y] = array[x];
        array[x] = hold;
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
  if (n <= 1)
  {
    return 1;
  }
  return n * homework.factorial(n-1);
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  for (let x = 0; x < n; x++)
  {
    let hold = array.shift();
    array.push(hold);
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
