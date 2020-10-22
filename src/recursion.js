/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
let factorial = function(n) {
     if(n === 0) {
        return 1;
     }else if (n < 0)
     {return null   
     }
    
    return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
let sum = function(array) {
let sum = array.reduce((add,current) => {return add + current}, 0) 
let total = 0;

let sum = (array) => (array.length === 0) ? 0 : array[0] + sum(array.slice(1))

    return total;
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
let isEven = function(array) {
  // acount for negative integers
  if (array.length === 0) return 0;
    let  sum = 0;
    for (var i=0; i<array.length; i++){
      if (array[i] instanceof Array) {     
        sum += arraySum(array[i]);
      } else {
        sum += array[i];
      }
    }
    return sum;
  }
  

// 4. Check if a number is even.
let isEven = function(n) {
  if (n < 0) {
    n = Math.abs(n)
  }
  if (n === 0) return true;
  if (n === 1) return false;
  return isEven(n - 2);
};


// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
let sumBelow = function(n) {
  let interger = n < 0 ? true : false;
  

  let sum = 0;
if (n === 0) return 0;
  return n > 0 ? n-1 + sumBelow(n-1) : n+1 + sumBelow(n+1);
}

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//This happens only once at the end of all the recursive calls 
let range = function(x, y) { //recursive call (create the call stack)
  let  inter = true;
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
    inter = false;
    //x,y, happens only once at he end of all the recursive calls
  }
  if (x === y) return [];
  if (x+1 === y) return [];

 // clean up what happens at the end of every recursive call
  let array = range(x, y-1);
  array.push(y-1);
  return inter ? array : array.reverse();
};


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
let exponent = function(base, exp) {
  let isNeg = false;
  if (exp < 0) {
    isNeg = true;
    exp *= -1;
  }
  if (exp === 0) return 1;
  let  res = base * exponent(base, exp-1);
  return !isNeg ? res : 1/res;
};
  
  
  
// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
let powerOfTwo = function(n) {
      if (n < 1) {
        return false;
    } else if (n === 1) {
        return true;
    } return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
let reverse = function(str) {
  if(str === "") {
    return "";
  }else{
    return reverse(str.substr(1)) + str.charAt(0); //have to study this a little more.
    }
   };

// 10. Write a function that determines if a string is a palindrome.
let palindrome = function(string) {
  if (array.length === 1) return [array[0]];
  let list = reverseArr(array.slice(1, array.length));
  list.push(array[0]);
  return list;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
let modulo = function(x, y) {
  if (y === 0) { return NaN; }

    if (x < 0) { return -modulo(-x, y); }

    if (y < 0) { return modulo(x, -y); } //These two lines I haven't fully comprehended!

    if (x < y) { return x; }

    return modulo(x -y, y); //Have no IDEA what this line means, but it works!
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
let multiply = function(x, y) {
  if(y > 0) {
    return(x + multiply(x, y-1));
  }
  else if(y < 0) {
    return - multiply(x, -y);
  }
  return 0;
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
let divide = function(x, y) {
  let Neg = false;
  if (x < 0) {
    Neg = !Neg;
    x = -x;
  }
  if (y < 0) {
    Neg = !Neg;
    y = -y;
  }
  if (y === 0) return NaN;
  if (x === 0) return 0;
  if (x === y) return 1;
  if (x < y) return 0;
  let res = divide(x-y, y) + 1;
  return Neg ? -res : res;  //I had to get this part of the answer working with others--have to study ":" a little more.
};


// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
let gcd = function(x, y) {
  if(x < 0 || y < 0) return null;
  if(x === y) return x;
  if(x > y) return gcd(x-y, y);
  if(x < y) return gcd(x, y-x);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
let compareStr = function(str1, str2) {
  if(str1.length != 0 && str2.length != 0) return false;
  if(str1.length === 0 && str2.length === 0) return true;
  return compareStr(str1.substring(1), str2.substring(1)); //look up substring
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

/*The substring() is an inbuilt function in JavaScript which returns a part of the given string from start index to end index. The indexing starts from zero. It is used to return a portion of the string, starting at the specified index and extending for a given number of characters afterward.*/

let createArray = function(str) {
  if(str.length === 1) return [str[0]]; //group helped with this code--need to understand this
  let letterList = createArray(str.substring(1)); //
  letterList.unshift(str[0]);
  return letterList;
};

// 17. Reverse the order of an array
let reverseArr = function(array) {
  if (string.length === 0) return true;
  if (string.length === 1) return true;
  if (string.charAt(0).toLowerCase() !== string.charAt(string.length-1).toLowerCase()) {
    return false;
  }
  let str = string.substring(1, string.length-1);
  return palindrome(str);
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]

/*The concat() method is used to join two or more strings. This method does not change the existing strings, but returns a new string containing the text of the joined strings.*/
/*returns the value along w/the length of the array, then your loop will always iterate over every element in the array.*/

let buildList = function(value, length) {
  if (length === 0) { //if length is = 0, return nada
    return [];
  }
  return [value].concat(buildList(value, length -1)); 
};



// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
