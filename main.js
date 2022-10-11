// DAY 1: Given two integer arrays a , b, both of length >= 1, create a program that returns true if the 
// sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

function compareSquareAndCube(a,b) {
    return a.reduce((acc,c) => c**2, 0) > b.reduce((acc,c) => c**3, 0)
}

console.log(compareSquareandCube(([1,2,3], [3,5,6])))

// DAY 2: Return a new array consisting of elements which are multiples of their own input array (length >1). 
// Some cases:
// [22, -6, 32, 82, 9, 25] => [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr) {
    return arr.filter((element, index)=> e % i === 0)
}

// DAY 3: Given an array of integers as strings and SVGAnimatedNumberList, return the sum of the array values as if all were numbers.
// Return your answer as a number. 

function sumOfValues(arr) {
    return arr.reduce((acc,c) => acc + c, 0)
}

console.log(sumsOfValues([1,2,3,'piece of text']))

// DAY 4: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return n.split().reverse();
  }

//DAY 5: Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return n.toString().split('').reverse().map(Number);
  }

//DAY 6: Timmy & Sarah think they are in love but they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. 
// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 != 0) {
      return true 
    } else if (flower1 % 2 != 0 && flower2 % 2 === 0) {
      return true
    } else {
      return false
    }
  }

  //DAY 7: In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times. 
  // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

  function move (position, roll) {
    return Number((roll * 2) + position)
  }
  

//DAY 8: Wilson primes satisfy the following condition. Let P represent a prime number.
// Then,((P-1)! + 1) / (P * P) should give a whole number. Your task is to create a function that returns true if the given number is a Wilson prime

function amIWilson(P) {
  const factorial = x => x <= 1 ? 1 : x * factorial(x - 1);
 if((factorial(P - 1) + 1) / (P * P) % 1 === 0) {
  return true
 } else {
  return false 
 }
}

//DAY 9: Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  let stringConverted = string.toString()
  return stringConverted.split(' ')
}

//DAY 10: Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
  var finalDec = parseInt(bin, 2);
  return finalDec
}

// DAY 11: Given a number n, return the number of positive odd numbers below n.

function oddCount(n) {
  let arrayRange = Array.from(new Array(n), (x, i) => i + 1);
  let rangeMap = arrayRange.map(arrayRange % 2 !== 0) 
  return rangeMap.length 
}

oddCount()


//DAY 12: Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
  let reversedStr = str.split(' ').reverse().join(' ');
  return reversedStr;
}
//Note: Instead of toString() method, the join() method ensures there's no commas.

//DAY 13: Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

function multArray(num){
  return num.reduce((a, b)=> a * b, 1);
}

//Day 14: In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
// Result should be separated by comma and space.

// Example
// geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'

function geometricSequenceElements(a, r, n){
  var res = [a];
  for (var i = 0; i < n - 1; i++) {
     res.push(res[i]*r);
  }
  return res.join(', ');
}

//Day 15: Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

function typeValidation(variable, type) {
  return typeof variable === type; 
}

//Day 16: Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

var breakChocolate = function(n, m) {
  return (n*m === 0) ? 0 : n * m - 1;
 };

//Day 17: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

//Day 18: Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
// For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
// If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.

var breakChocolate = function(n, m) {
  if(n === 0 || m === 0) return 0
  return n*m - 1;
 };

//  Day 19: The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.
//  Write a function which takes an integer array and returns its Stanton measure.
//  Examples:
//  The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
//  The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.

function stantonMeasure(arr) {
  const count = n => arr.filter(x => x === n).length;
  return count(count(1));
}

// Day 20: We want an array, but not just any old array, an array with contents.
// Write a function that produces an array with the numbers 0 to N-1 in it.
// For example, the following code will result in an array containing the numbers 0 to 4:
// arr(5) // => [0,1,2,3,4]
// Note: The parameter is optional. So you have to give it a default value.

function arr(n){
  var newArr = [];
  for(var i = 0; i < n; i++){
    newArr.push(i);
  }
  return newArr;
}

//Day  21: Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).

function bonusTime(salary, bonus) {
  return bonus ? `£${10 * salary}` : `£${salary}`;
}

//Day 22: After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if ( days >= 7 ) {
    return 50;
  }
  else if ( days >= 3 ) {
    return 20;
  }
  else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

//Day 22: Obtain sum of all elements in two arrays with integers only included in each arrays.


function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}

//Day 23: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(num) {
  if(num % 2 === 0 ) {
    return num * 8
  } else {
    return num * 9
  }
}

// Day 24: While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive(health) {
  if(health > 0) {
    return true
  } else if(health < 0) {
    return false
  } else {
    return false
  }
}

//Day 25: Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
  let meanScore = (s1 + s2 + s3)/3;
  if( meanScore >= 90 && meanScore <= 100){
    return 'A';
  } else if( meanScore >= 80 && meanScore < 90) {
    return 'B'
   } else if( meanScore >= 70 && meanScore < 80) {
    return 'C'
   } else if( meanScore >= 60 && meanScore < 70) {
    return 'D'
   } else {
    return 'F'
  }
}
//Day 26: Given the triangle of consecutive odd numbers:

//            1
//         3     5
//      7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//Day 27: Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}

//Day 28: Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

  function greet(name) {
    let statement = `Hello, ${name} how are you doing today?`
    return statement
  }
  
//Day 29: Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
// Example:
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], 

  var orderedCount = function (text) {
    return Array.from(new Set(text)).map(c => [c, text.match(new RegExp(c, 'g')).length]);
  }

//Day 30: Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

// Day 31: Write a function that finds the sum of all its arguments.
// eg:
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
  let sumArgument = Array.prototype.slice.call(arguments).reduce(function(a,b) {
    return a + b;
  },0);
    return sumArgument
}

//Day 32: Write a function which calculates the average of the numbers in a given list. Note: Empty arrays should return 0.

function findAverage(array) {
  let sumOfArray = array.reduce((acc, c) => acc + c, 0);
  let solution = (sumOfArray/array.length);
  return solution;
}

//Day 33: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//Day 34: YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
// Task
// Create a function that takes in a list of button inputs and returns the final state.
// Examples
// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like,Like]) => Nothing
// likeOrDislike([Dislike,Like]) => Like
// likeOrDislike([Like,Dislike,Dislike]) => Nothing
// Notes
// If no button is currently active, return Nothing.
// If the list is empty, return Nothing.

//Day 35: The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

//Day 35: Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5
// Try to do it without using if statements!

function arithmetic(a, b, operator){
  switch(operator) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
  }
}

//Day 36: Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function squareArea(A){
  var circum = 4 * A;
  var radius = circum / (2 * Math.PI);
  var area = Math.pow(radius, 2);
  return Math.round(area*100)/100
}

//Day 39: This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29

function evaporator(content, evap_per_day, threshold){ 
  var days = 0;
  var gas = 100;
    while(gas >= threshold){
      gas -= gas * evap_per_day / 100;
      days++;
  }
    return days;
  }

//Day 40: Task: Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained 

function expressionMatter(a, b, c) {
  return Math.max(
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + b * c,
    a * b + c,
  );
}

//Day 41: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
  var result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

//Day 42: Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}