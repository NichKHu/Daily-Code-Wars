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

//Day 43: You love coffee and want to know what beans you can afford to buy it.

// The first argument to your search function will be a number which represents your budget.

// The second argument will be an array of coffee bean prices.

// Your 'search' function should return the stores that sell coffee within your budget.

// The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.

let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')

//Day 44: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

//Day 45: Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order

function inAscOrder(arr) {
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i+1]) {
      return false; 
    }
  }
  return true;
}

//Day 46: Write a function/proc/lambda called _ that always returns 5.

// Sounds easy right? Just bear in mind that you can only use the following characters:

// ~!@#$%^&*()-_+=[]\{}|:;"'<,>.?/`

_=()=>(''=='')+(''=='')+(''=='')+(''=='')+(''=='')

//Day 47: Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

// Write a function that takes a number n as a parameter and return an array containing n shades of grey in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with '#010101', '#020202', etc. (using lower case letters).

// Examples:

// n =  1:    ["#010101"]
// n = 10:    ["#010101", "#020202", "#030303", "#040404", "#050505", "#060606", "#070707", "#080808", "#090909", "#0a0a0a"]
// As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, or #555555.

// Black: #000000 and white: #ffffff are not accepted values.

// When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

function shadesOfGrey(n) {
  var shades = []
  
  for (var i = 1; i <= Math.min(n, 254); i++) {
    var grey = ('0' + i.toString(16)).slice(-2)
    shades.push('#' + grey + grey + grey)
  }
  
  return shades
}

//Day 48: Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)
(the dedicated builtin(s) functionalities are deactivated)

reverse = function(array) {
  var newArr = [];
  for (var i = array.length-1; i>=0; i--){
    newArr.push(array[i]);
  }
  return newArr;
  }

//Day 49: A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results. In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped: "not picking" --> "pot nicking" 
//Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example. A "word" in the context of this kata can contain any of the letters A through Z in upper or lower case, and the numbers 0 to 9. Though spoonerisms are about letters in words in the domain of written and spoken language, numbers are included in the inputs for the random test cases and they require no special treatment.
//NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

function spoonerize(words) {
  let word = words.split(' ')
  return [word[1][0] + word[0].slice(1), word[0][0] + word[1].slice(1)].join(' ')
}

//Day 50: The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

//Day 51: Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.
// EXAMPLES

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
// //0 survivors                4 survivors
// //return true


// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
// //2 survivors  (16 damage)   2 survivors (6 damage)
// //return false

// attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
// //1 survivors                3 survivors 
// //return true

function hasSurvived(attackers, defenders){
  const length = attackers.length > defenders.length ? attackers.length : defenders.length
  let totalSurvivors = 0
  for (let i = 0; i < length; i++) {
    let attacker = attackers[i] ?? 0
    let defender = defenders[i] ?? 0
    if (defender - attacker > 0) {
      totalSurvivors += 1
    } else if (defender - attacker < 0) {
      totalSurvivors += -1
    }
  }
  const attackPower = attackers.reduce((accum, soldier) => {
    return accum += soldier
  }, 0)
  const defendPower = defenders.reduce((accum, soldier) => {
    return accum += soldier
  }, 0)
  return totalSurvivors !== 0 ? (totalSurvivors > 0) : (defendPower >= attackPower)
}

//Day 52: Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.

function numberJoy(n) {
  var s = n.toString().split('').reduce((s,v) => s + +v, 0);
  var sr = +s.toString().split('').reverse().join('');
  return s * sr == n;
}

//Day 53: A high school has a strange principal. On the first day, he has his students perform an odd opening day ceremony:

There are number of lockers "n" and number of students "n" in the school. The principal asks the first student to go to every locker and open it. Then he has the second student go to every second locker and close it. The third goes to every third locker and, if it is closed, he opens it, and if it is open, he closes it. The fourth student does this to every fourth locker, and so on. After the process is completed with the "n"th student, how many lockers are open?

The task is to write a function which gets any number as an input and returns the number of open lockers after last sudent complets his activity. So input of the function is just one number which shows number of lockers and number of students. For example if there are 1000 lockers and 1000 students in school then input is 1000 and function returns number of open lockers after 1000th student completes his action.

The given input is always an integer greater than or equal to zero that is why there is no need for validation.

function numOfOpenLockers(n) {
  return Math.floor(Math.sqrt(n));
}

//Day 54: Your job is to list all of the numbers up to 2 ** n - 1 that contain a 1 at the same places/bits as the binary representation of b.b will be 1,2,4,8,etc.
For example: solution(4,2) would return [2,3,6,7,10,11,14,15].
The binary numbers from 1 to 16 are:
8 4 2 1 (place)
0 0 0 1
0 0 1 0
0 0 1 1
0 1 0 0
0 1 0 1
0 1 1 0
0 1 1 1
1 0 0 0
1 0 0 1
1 0 1 0
1 0 1 1
1 1 0 0
1 1 0 1
1 1 1 0
1 1 1 1

The numbers with a 1 in the 2's place are 2,3,6,7,10,11,14,and 15
Other examples:
solution(0,1) = []
solution(6,8) = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31, 40, 41, 42, 43, 44, 45, 46, 47, 56, 57, 58, 59, 60, 61, 62, 63]
If b = 0,return empty list.

const solution = (n, b) =>
  Array.from({length: 2**n},(_,index) => index).filter(element => element & b)


//Day 54: The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

[This is writen in pseudocode]
if(number is even) number = number / 2
if(number is odd) number = 3*number + 1
#Task

Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);

//Day 55: Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

function findShort(s){
	var arr = s.split(' ');
	var smallest = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if(arr[i].length < smallest.length){
			smallest = arr[i];
		}
	}
	return smallest.length;
}

//Day 56: Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113


function hexHash(code){
  return code.split('').map(c=>c.charCodeAt())
  .map(n=>n.toString(16))
  .join('')
  .split('')
  .filter(c=>'123456789'.includes(c))
  .map(d=>parseInt(d))
  .reduce((a, b)=>a+b, 0)
}

//Day 57: The Math.min function has stopped working, so we have to use our own function. We are off to a good start, but this function doesn't seem to handle everything properly. Add in the proper checks to return NaN for anything that isn't an actual number, except treat null like 0.

Note: This min function need not handle more than two arguments.

function min(a, b){
  a === null && (a = 0);
  b === null && (b = 0);
  if (isNaN(a) || isNaN(b)) { return NaN; }
  return (a < b) ? a : b;
}

//Day 58: Prince Arthas needs your help! Mal'ganis has spread an infection amongst the Stratholme citizens, and we must help Arthas prevent this infection from spreading to other parts of the Kingdom.

You will receive a string s as input: Each "word" represents a house, and each letter represents a citizen. All infected citizens are represented as "i" or "I" in s. You must eradicate them, and their neighbors. If an infected citizen appears after or before a space, you should not delete the space, but keep in mind that the distance from "house" to "house" (word to word) has to have only one whitespace.

EXAMPLES:

"STRING"                       -> "STG"
"1i2 33 i4i5 i555ii5"          -> "33 5"
"It is a bit chilly"           -> "a cly"
"Pineapple pizza is delicious" -> "eapple za deus"
"It is not there"              -> "not there"

function purifyTheStratholme(s) {
  let result = [];
  for (let i of s.split(' ')) {
    if (i.replace(/.?i+.?/gi,'') === '') {
      continue
    }
    result.push(i.replace(/.?i+.?/gi,''));
  }
  return result.join(' ');
}

//Day 59: Oh No!

The song sheets have been dropped in the snow and the lines of each verse have become all jumbled up.

Task
You have to write a comparator function which can sort the lines back into their correct order, otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree.

var comparator = function(a,b) {
  const pos = ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];
  return pos.indexOf(a.split(' ')[0]) - pos.indexOf(b.split(' ')[0]);
}

//Day 60: Take a list of n numbers a1, a2, a3, ..., aN to start with.

Arithmetic mean (or average) is the sum of these numbers divided by n.

Geometric mean (or average) is the product of these numbers taken to the nth root.

Example
List of numbers: 1, 3, 9, 27, 81

n = 5
Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
Task
You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.

const geo_mean = (a, n) => {
  const m = n * (a.length + 1) - a.reduce((s, n) => s + n, 0);
  return Math.pow(m * a.reduce((p, n) => p * n, 1), 1 / (a.length + 1));
};

//Day 61: Grinch wants to spoil Christmas for JavaScript programmers. For that, he devised a hellish plan: pollute their Date prototype so that Christmas never happens. He wants to change method getDate of Date so that it returns 26 for Date objects that represent 25th of December but works correctly for all other days of the year.

However, Grinch does not know how to do that. Can you help him?

Date.prototype.getDate = function getGrinchDate() {
  let [day, month, date] = this.toString().split(" ");
  return month == 'Dec' && date == 25 ? 26 : +date;
};

//Day 62: 

// The Coins of Ter
// Ter is a small country, located between Brelnam and the Orange juice ocean. It uses many different coins and bills for payment. However, one day, the leaders of Ter decide that there are too many small coins. Therefore, they ban the small coins. But no one knows which coins they'll ban, so they ask you to provide a tool that can recalculate a price. After all, if one does not have a 1 Terrek bill and can only give a 2 Terrek bill, one needs to adjust the oddly priced items.

// Task
// Write a function adjust, that takes a two integers: the lowest currency unit that's still allowed, and the price/debt that needs to get adjusted. All prices are going up, and debts are remitted. The lowest currency will always be positive.

// In other words:adjust takes two integers, b and n, and returns the smallest number k, such that n <= k and k % b == 0 .

// Examples
// adjust( 3, 0 ) ===  0
// adjust( 3, 1 ) ===  3
// adjust( 3, -2) ===  0
// adjust( 3, -4) === -3
// adjust( 3, 3 ) ===  3
// adjust( 3, 6 ) ===  6
// adjust( 3, 7 ) ===  9

function adjust(coin, price){
  while(price%coin) price++;
  return price
}

//Day 63: Scheme Reference

// Your challenge: create a function that interprets simple scheme-like math commands and returns the value resulting from the operation. We will only be working with the four main math operators (+ - * /). The main difference between these commands and actual scheme commands is that scheme commands only accept two arguments while these commands accept infinitely many arguments so as to avoid having to nest functions with like operators.

// Input: string, such as '(+ 4 3)'
// Output: number
// Constraints: 0-15 arguments, numbers from -15 to 15 (when dividing, those will never be 0)
// Edge Cases: don't forget that no arguments results in either 0 or 1 for +/- and * respectively
// Syntax consists of an open parenthesis, a math operator, a space, space-separated arguments, and a close parenthesis. Example: (+ 3 4). All inputs will be valid.

// If no arguments are provided, return the following (You won't get '(/)'):

// '(+)'         // 0
// '(-)'         // 0
// '(*)'         // 1
// Examples of valid commands:

// '(+ 3 4)'     // 7
// '(- 3 4)'     // -1
// '(* 3 4)'     // 12
// '(/ 3 4)'     // 0.75
// '(+ 4 4 -4)'  // 4

function scheme(cmd) {
  const formatted = cmd.replace(')', '').replace('(', '');
  const [operation, ...rest] = formatted.split(' ');

  switch(operation) {
      case '+': {
        return rest.reduce((acc, el) => acc = acc + Number(el), 0);
      }
      case '*': {
        return rest.reduce((acc, el) => acc = acc * Number(el), 1);
      }
      case '/': {
        return rest.reduce((acc, el, index) => acc = Number(index === 0 ? el : acc / el),  1);
      }
      default: {
        return rest.reduce((acc, el, index) => acc = Number(index === 0 ? el : acc - el), 0);
      }
  }
}

//Day 64: 
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  return str.endsWith(ending);
}


//Day 65: Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

// flatten([1,2,3]) // => [1,2,3]
// flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
// flatten([[[1,2,3]]]) // => [[1,2,3]]

var flatten = function (lol){
  return [].concat.apply([],lol);
}

/Day 66: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

const invert = array => array.map(num => -num);