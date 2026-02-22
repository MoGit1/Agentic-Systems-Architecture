/**
 * AUDIT 15: THE QUEUE RACE
 * Focus: Microtask Queue vs. Callback Queue priority.
 */

console.log("1. Start of Script");           // Synchronous: Stays on Call Stack

setTimeout(function () {                     // Dispatched to Web API (Timer)
    console.log("2. Timer Callback");        // Enters Callback Queue (Low Priority)
}, 0);

Promise.resolve().then(function () {         // Dispatched to Microtask Queue
    console.log("3. Promise Resolve");       // Enters Microtask Queue (High Priority)
});

// Heavy Synchronous Task
for(let i=0; i<1000000; i++) {}              // Blocks the stack temporarily
console.log("4. End of Script");             // Synchronous: Still on Call Stack

/**
 * EXPECTED OUTPUT ORDER:
 * 1. Start of Script
 * 4. End of Script
 * 3. Promise Resolve (Microtasks run first!)
 * 2. Timer Callback  (Task Queue runs only when Microtasks are clear)
 * * ARCHITECT'S NOTE:
 * Even with a 0ms timer, the Promise will ALWAYS win the race.
 * This is why API calls (Promises) feel faster than old-school timers.
 */