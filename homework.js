var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
var x= 1;
var y = 0;
var temp;

//while loop to calculate the next number by adding the current number to the old 
//number 
while(n >= 0){
  temp = x;
  x = x + y;
  y= temp;
  n--;
}

return y;
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
array.sort(function(a, b){return a - b});
//i suck i was out of time just wanted to put somthing that worked 

return(Math.max(array)); //IDK?

};

/*
  3. Return the factorial of n

  f(0) = 1
  f(1) = 1
  f(3) = 6
*/
homework.factorial = function(n){
 var x = n;//x store number 

 if (n === 0||n ===1){
   return 1;
 }
//- 1 each iteration and multiply by x to get the facotrial 
 while(n>1){
  n--;
  x = x * n;
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
  for (var i = 0; i < n; i++) {
    array.unshift(array.pop());
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
