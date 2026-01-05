/*
Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.
Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
*/

function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    /*for null or undefined it  should be always false */
   if(obj == null || classFunction == null) return false;
   if(obj.__proto__ === classFunction.prototype) return true;
   return checkIfInstanceOf(obj.__proto__, classFunction)
};

/**
 * NOTE:
 * In JavaScript, `instanceof` checks whether an object’s prototype chain
 * includes a given constructor’s prototype.
 *
 * - `null` and `undefined` are not objects and have no prototype chain.
 * - Therefore, they can never be an instance of anything.
 * - Any combination like (null, null), (undefined, undefined),
 *   (null, Object), or (undefined, Object) should always return false.
**/
