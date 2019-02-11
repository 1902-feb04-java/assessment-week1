var homework = {};
module.exports = homework;

/*
  1. Return the nth fibonacci number

  f(0) = 0
  f(1) = 1
  f(10) = 55
*/
homework.fibonacci = function(n){
    let ans = 0;  //our answer that we will return
    if (n <= 1){
      return 1;
      // using recursive function, we need a stopping point.
    }
    ans = fibonacci(n-1) + fibonacci(n-2);  //call itself and add
    return ans;
};

/*
  2. Sort array of integers

  f([2,4,5,1,3,1]) = [1,1,2,3,4,5]

  Don't use the Array sort() method... that would be lame.
*/
homework.sort = function(array) {
    // use double for loop in order to traverse whole array
    // until everything is sorted
    for(let i =0 ; i < array.length; i++){
      for(let j=1; j < array.length; j++){
        if(array[j-1] > arrray [j]){
          let temp = array[j-1];  //empty first pos.
          array[j-1] = array[j];  //place "smaller value" in first pos.
          array[j] = temp;        // place "bigger value" in second pos.
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
    let ans = 0; //our answer

    // Factorials only work with non-negatives
    if(n<0){
      return -1;
    }

    // Since we know 0! = 1 
    else if(n===0){
      return 1
    }

    //Again, we use recursion to have factorial invoke itself.
    else{
        ans = n * factorial(n-1);
        return ans;
    }
};

/*
  4. Rotate left

  Given array, rotate left n times and return array

  f([1,2,3,4,5], 1) = [2,3,4,5,1]
  f([1,2,3,4,5], 6) = [2,3,4,5,1]
  f([1,2,3,4,5], 3) = [4,5,1,2,3]

*/

homework.rotateLeft = function(array, n) {
    // we will shift() and push() the first element of the array, n times
    for( let i = 0; i<n; i++){
      let ourEle = array.shift();
      array.push(ourEle);
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
    if( (bracketsString.charAt(0)) !== ( '(' || '{' || '{' ) ){
        return 0;
      }
};
