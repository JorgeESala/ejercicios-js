/*
Exercise #3 (sugerencia reduce() )
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

function sumAllElements( array ){
    const initialValue = 0;
    const sum =  array.reduce( (accumulator , currentValue) => 
    accumulator + currentValue,
    initialValue );

    return sum;
}

function multiplyAllElements( array ){
    const initialValue = 1;

    const product = array.reduce( (accumulator , currentValue) => 
    accumulator * currentValue,
    initialValue );

    return product;
}

const numbers = [1,2,3,4];
const sum = sumAllElements(numbers);
const product = multiplyAllElements(numbers);
console.log( `The sum of all elements is ${sum}
The product of all elements is ${product}` );