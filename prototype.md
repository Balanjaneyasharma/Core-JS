# JavaScript Prototype Inheritance

This document explains **prototype-based inheritance in JavaScript** in a clear and beginner-friendly way, covering:

- `prototype`
- `__proto__`
- `[[Prototype]]`
- Prototype chain
- Why `null` has no prototype
- How inheritance actually works internally

---

## 1. Inheritance in JavaScript (Core Idea)

JavaScript does **not** use classical inheritance (like Java or C++).
It uses **prototype-based inheritance**.

- Objects inherit from **other objects**
- Every object has an internal reference called `[[Prototype]]`
- Property access follows a **prototype chain**

---

## 2. What is `[[Prototype]]`?

- `[[Prototype]]` is an **internal hidden reference**
- It points to another object
- JavaScript uses it for property lookup

You can access it using:

```js
obj.__proto__
```
__proto__ is legacy but useful for understanding.

---

## 3. What is __proto__?

- Exists on all JavaScript objects
- Points to the object it inherits from
- Represents the runtime inheritance link

Example
```
const obj = {};
obj.__proto__ === Object.prototype; // true
```
Memory Diagram
```
obj
 └─ [[Prototype]] ───► Object.prototype
                          └─ [[Prototype]] ───► null
```
---

## 4. What is prototype?

- Exists only on constructor functions
- Used as the prototype for objects created using new

Example
```
function Person() {}
Person.prototype // an object
```

---

## 5. Relationship Between prototype and __proto__
```
function Person() {}
const p = new Person();
```
Key Rule
```
p.__proto__ === Person.prototype // true

```
Memory Diagram
```
p
 └─ [[Prototype]] ───► Person.prototype
                           └─ [[Prototype]] ───► Object.prototype
```
## 6. Prototype Chain (Property Lookup)
```
p.toString();
```
JavaScript looks for **toString** in this order:
```
p
↓
Person.prototype
↓
Object.prototype  ✅ found
↓
null (stop)
```

---

## 7. Why Only Some Things Have `prototype`

In JavaScript, **`prototype` exists only on constructor functions**, not on every value.

This is because `prototype` is used **only when creating new objects using `new`**.

### Which things have `prototype`?

| Entity | Has `prototype` | Reason |
|------|----------------|--------|
| Normal Function | ✅ Yes | Can be used as a constructor with `new` |
| Arrow Function | ❌ No | Cannot be used with `new` |
| Object Literal | ❌ No | Already an instance, not a constructor |
| Array Literal | ❌ No | Already an instance |
| Class | ✅ Yes | Classes are constructor functions internally |


### Normal Functions Have `prototype`

```js
function Person() {}
```
---

## 8. Creating Objects Without Constructors (Object.create)
```
const parent = { a: 1 };
const child = Object.create(parent);
```
Memory Diagram
```
child
 └─ [[Prototype]] ───► parent
                          └─ [[Prototype]] ───► Object.prototype
child.a; // 1
```
---

## 9. Prototype Inheritance (Manual)
```
function Animal() {}
Animal.prototype.speak = function () {
  console.log("animal sound");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  console.log("woof");
};
```
What This Line Means
```
Dog.prototype = Object.create(Animal.prototype);

```
Internally:
```
Dog.prototype.__proto__ = Animal.prototype;
```
--- 

## 10. Why This Works for Instances
```
const d = new Dog();
```
Memory Diagram
```
d
 └─ [[Prototype]] ───► Dog.prototype
                           ├─ bark()
                           └─ [[Prototype]] ───► Animal.prototype
                                                        ├─ speak()
                                                        └─ [[Prototype]] ───► Object.prototype
                                                                                     └─ null

```
```
d.bark();  // Dog.prototype
d.speak(); // Animal.prototype
```
--- 

## 11. Important Distinction (Very Important)
✅ Correct for instance inheritance
```
Dog.prototype.__proto__ = Animal.prototype;

```
❌ Incorrect for instances
```
Dog.__proto__ = Animal.prototype;
```
Why?

- Dog.prototype → used by instances
- Dog.__proto__ → used for static inheritance

---

## 12. Why null Has No Prototype
```
Object.prototype.__proto__ === null; // true

```
Reason:
- null ends the prototype chain
- Prevents infinite lookup

object → Object.prototype → null
```
