# JavaScript Factory Functions

This  contains examples and notes on **Factory Functions** in JavaScript, inspired by the tutorial by [ColorCode](https://www.youtube.com/watch?v=lE_79wkP-1U).

## 🚀 What is a Factory Function?
A factory function is any function that is not a class or a constructor that returns a (new) object. In JavaScript, any function can return an object. When it does so without the `new` keyword, it’s a factory function.

## ✨ Benefits
- **Avoid Code Duplication:** Define logic once and reuse it across multiple objects.
- **Data Privacy:** Use closures to keep variables private and inaccessible from the outside.
- **Simplicity:** No need for `this`, `new`, or `class` syntax.

## 💻 Example Code

### Basic Factory Function
```javascript
const personFactory = (name) => {
  return {
    talk() {
      console.log(`Hello, I am ${name}`);
    }
  };
};

const me = personFactory('Cena');
me.talk(); // Hello, I am Cena
```
### DOM Element Factory
```javascript
const createElement = (type, text, color) => {
  const el = document.createElement(type);
  el.innerText = text;
  el.style.color = color;
  document.body.append(el);

  return {
    el,
    setText(newText) { el.innerText = newText; },
    setColor(newColor) { el.style.color = newColor; }
  };
};

const myHeader = createElement('h1', 'Hello World', 'blue');
myHeader.setColor('red');
```
