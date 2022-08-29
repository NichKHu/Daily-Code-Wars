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

//Day 9: Write a function to split a string and convert it into an array of words.

function stringToArray(string){
  let stringConverted = string.toString()
  return stringConverted.split(' ')
}