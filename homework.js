var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
  if (n<=1){
    return 1;
  }

  var fn = fibonacci(n - 1) + fibonacci(n - 2);

  return(fn);

};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
  let isDone = false;

  while (!isDone){
    isDone = true;
    for (var i = 1; i < array.length; i++){
      if(array[i+1] > array[i])
      {
        isDone = false;
        let tempAr = array[i - 1];
        array[i-1] = array[i];
        array[i] = tempAr;
      }
    }
  }
  return(array);
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  
  let results = n;

  if(results === 0 || results === 1){
    return(1);
  }

  while(n > 1){
    n--;
    results *= n;
  }

  return(results);

  
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let i = 0;

  while(i < n){
    let tempPop = array[0];
    array.pop();
    array.push(tempPop);
    i++;
  }

  return(array);
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
