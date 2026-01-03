/*
Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

count(): returns the count of un-expired keys.
*/
type CacheTimerValue = {
    value: number,
    timer: NodeJS.Timeout
}

class TimeLimitedCache {
    cache: Map<number, CacheTimerValue>
    constructor() {
        this.cache = new Map();
    }
    
    set(key: number, value: number, duration: number): boolean {
        const result = this.cache.has(key);
        if(result) {
            clearTimeout(this.cache.get(key).timer);
        }
        let timer = setTimeout(() => {
            this.cache.delete(key);
        }, duration);
        this.cache.set(key, {
            value,
            timer
        });
        return result;
    }
    
    get(key: number): number {
        if(this.cache.has(key)) {
            return this.cache.get(key).value;
        }
        return -1;
    }
    
    count(): number {
        return this.cache.size;
    }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
