# Day 07: First Class Functions & The Callback Architecture (Ep. 13 & 14)

## Executive Summary
Audited the functional landscape of JavaScript, moving from basic declarations to "First Class Citizenship." Explored the power of Callback functions as the primary mechanism for asynchronous programming and event-driven architecture. This session establishes how we will "inject" logic into our Phase 3 AI Agents.

---

## I. Function Anatomy & Hoisting (Ep. 13)

### 1. Statements vs. Expressions
* **Function Statement (Declaration):** Defined using the `function` keyword. These are fully hoisted, meaning the function body is available in memory before any code executes.
* **Function Expression:** Assigning a function to a variable. These are treated as variables during the memory creation phase; they are initialized as `undefined`, making them unavailable for execution until the line of assignment is reached.

### 2. Anonymous & Named Function Expressions
* **Anonymous Functions:** Functions without a name, primarily used when functions are utilized as values (expressions).
* **Named Function Expressions:** Providing a name to a function expression. This name is **local** to the function's own scope (useful for recursion) and is not accessible in the outer scope.

### 3. First Class Functions (Citizenship)
The ability of functions to be treated like any other variable. In JavaScript, functions can:
1. Be assigned to variables.
2. Be passed as arguments into other functions.
3. Be returned from other functions.

---

## II. Callback Functions & Async Foundations (Ep. 14)

### 1. The Power of Callbacks
A callback is a function passed into another function to be executed later. This allows us to delegate "when" a piece of logic runs, which is fundamental to the **Sentinel Bridge** data-handling logic.

### 2. Blocking the Main Thread
Since JavaScript has a single Call Stack (Main Thread), any heavy synchronous operation will "block" the thread, causing the application to freeze. Callbacks, when used with Web APIs (like timers or event listeners), allow us to offload tasks so the Main Thread remains free for other operations.



### 3. Event Listeners & Closure Memory
Event listeners are a primary use case for callbacks. However, every listener attached to a DOM element (or a Node.js stream) creates a closure that holds onto its outer scope variables.
* **Memory Management:** Excess event listeners can lead to memory leaks. High-performance systems must explicitly remove listeners (`removeEventListener`) when they are no longer needed to allow the Garbage Collector to reclaim memory.

---

## III. Phase 1 Review Glossary
* **First Class Citizen:** An entity which supports all the operations generally available to other entities (pass as arg, return from func, assign to var).
* **Callback Function:** A function executed "back" at a later time, often after an asynchronous task completes.
* **Main Thread:** The single place where JS executes code. Blocking this results in a "frozen" system.
* **Higher-Order Function:** A function that takes a function as an argument or returns a function.