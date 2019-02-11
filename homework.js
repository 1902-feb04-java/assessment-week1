var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function fib(n) {
  if(n<= 1) return 1;
  return fib(n-2)+ fib(n-1);

};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.

*/
homework.sort = function(array) {
   for(let i = 0; i<array.length; i++)
    {
      let temp = array[i];
      let previous = i-1;
      while(previous >= 0 && array[previous]> temp)
      {
        array[previous+1] = array[previous];
        previous -= 1;
      }
      array[previous+1] = temp;
    }
    return array;
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function fac(n){
    if(n <= 1) return 1;
    return n * fac(n-1);
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let temp = [];
    for(let i = 0; i< n; i++)
    {
     temp.push(array.shift());
    }
    return array.concat(temp);
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
  //A regex check would probably be better, but I don't know that very well
  let open = 0;
  let close = 0;
  for(let i = 0; i<bracketsString.length; i++)
  {
    if(bracketsString[i] == '(' || bracketsString[i] == '{' || bracketsString[i] == '[')
    {
      open += 1;
    }
    if(bracketsString[i] == ')' || bracketsString[i] == '}' || bracketsString[i] == ']')
    {
      close += 1;
    }
  }
  return open === close; //This does not correctly match the type of brackets, so '([)]' would return true
};
