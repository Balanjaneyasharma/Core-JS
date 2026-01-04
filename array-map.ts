/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 

*/
function mapUsingReduce(arr: number[], fn: (n: number, i: number) => number): number[] {
    return arr.reduce((acc, curr, index) => {
        acc.push(fn(curr, index));
        return acc;
    }, [])
};

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let result = [];
    arr.forEach((element, index) => {
        result.push(fn(element, index));
    });
    return result;
};
