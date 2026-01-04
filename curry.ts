/**
 * @param {number} a
 * @param {number} b 
 * @returns number
 */
const multiply = (a, b) => {
    return a*b;
};

/**
 * @param {(...args) => number} fn 
 * @returns {(...args => any)}
 */
const curry = (fn) => {
    return function curried(...args)  {
        if(args.length >= fn.length) {
            return fn(...args);
        } 
        return (...nextArgs) => curried(...args, ...nextArgs);
    }
}

const multiplier = (...args) => {
    if(!args?.length) return;
    if(args?.length === 1) return args[0];

    return args.reduce((acc,curr) => {
        return acc = acc*curr
    },1)

}
console.log(multiplier(12,1,2,12323234,5645645,454545,4545));

/**
 * sum(1)(2)(3)....(n)
 */

const sum = (a) => (b) =>  b ? sum(a + b) : a;
console.log(sum(1)(2))
