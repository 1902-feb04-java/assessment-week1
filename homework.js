var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
if (n <=1) return 1;
return fibonacci(n-1) + fibonacci(n+2);
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
let tempArray = [];
for (i = 0; i <array.length; i++) {
  for (j = 0; j <array.length; j++){
    if (array[j] > array[i]){
      tempArray = array[j];
      array[j]= array[j+1];
      array[j+1] = tempArray;
    }
  }// what I'm doing here is comparing two consecutive indices and moving it behind if [j] is larger than [i]
}
};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
  let temp = n;
  if (n <= 1) return 1;
  while (n>1){
    n--;
    temp *= n;
  }
  return temp;
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/
homework.rotateLeft = function(array, n) {
  let tempArray = array;
  for (let i = 0; i <n; i++){
    tempArray.push(tempArray[0]);
    tempArray.shift();
  }
  return tempArray;

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
  let revStr = bracketsString.split('').reverse().join('');
  return revStr === bracketsString;
};
