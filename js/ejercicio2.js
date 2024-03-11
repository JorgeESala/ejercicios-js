/*
Exercise #2 (sugerencia map() )
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/
function doubleArrayNumbers( array ){
    return array.map( element => element*2 );
}
const nums = [1,2,3,4,5]
console.log( doubleArrayNumbers(nums) );