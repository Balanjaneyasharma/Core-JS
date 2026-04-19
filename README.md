# Core JS

A collection of custom JavaScript utility implementations written in **TypeScript** — for learning, practice, and reference.

---

## What's inside

### Array Utilities
- `array-map.ts` — custom `Array.map` implementation
- `array-reduce.ts` — custom `Array.reduce` implementation
- `flatten-array.ts` — flatten nested arrays
- `group-by.ts` — group array items by a key
- `compact-object.ts` — remove falsy values from an object

### Function Utilities
- `debounce.ts` — delay execution until inactivity
- `throttle.ts` — limit execution to once per interval
- `curry.ts` — convert a function into a curried version
- `memoize-I.ts` — basic result caching
- `memoize-II.ts` — memoization with multi-argument support
- `call-polyfill.ts` — polyfill for `Function.prototype.call`

### Async / Promise
- `promise-all.ts` — custom `Promise.all`
- `promise-time-limit.ts` — reject a promise if it exceeds a time limit
- `cache-time-limit.ts` — memoize with TTL expiry
- `timeout-cancellation.ts` — cancellable `setTimeout`
- `interval-cancellation.ts` — cancellable `setInterval`

### Patterns
- `event-emitter.ts` — simple pub/sub with `on`, `emit`, `off`
- `check-if-instance-of.ts` — custom `instanceof` via prototype chain

### Notes
- `prototype.md` — notes on JavaScript prototypes
- `factory-functions.md` — factory functions vs classes

---

## Running a file

```bash
npx ts-node debounce.ts
```

---

*Built for learning. No dependencies, just plain TypeScript.*
