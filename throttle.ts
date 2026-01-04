/**
 * @param {*} func
 * @param {number} [delay=3000]
 * @return {*} 
 * Imagine someone keeps knocking on your door every second:

    Throttle:
    “I’ll answer once every 5 seconds, even if you keep knocking.”

    Debounce:
    “I’ll answer 5 seconds after you stop knocking.”

 */
const throttle = (func, delay = 3000) => {
    let inThrottle;
    return (...args) => {
        if(inThrottle) return;
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, delay);
    }
}
let myThrottle = throttle((name) => console.log('Hi' + ' ' + name));
myThrottle('1');
myThrottle('2');
myThrottle('3');  
setTimeout(() => {
    myThrottle('4');
}, 4000);
