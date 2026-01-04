/*
A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.
*/

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    return arr.reduce((resultArr: MultiDimensionalArray, ele) => {
        if(Array.isArray(ele) && n > 0) {
            resultArr.push(...flat(ele, n-1))
        } else {
            resultArr.push(ele)
        }
        return resultArr;
    }, [])
};
