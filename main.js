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