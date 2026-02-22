# Day 08: The Event Loop & The "Concurrency" Myth (Ep. 15)

## Executive Summary
Audited the internal orchestration of the JavaScript Runtime Environment. Decoupled the relationship between the **Call Stack**, **Web APIs**, and the **Callback Queues**. Understanding this "Loop" is the prerequisite for building the Phase 2 Sentinel Bridge, as it dictates how our system handles high-frequency data streams without crashing.

---

## I. The Runtime Environment
JavaScript does not exist in a vacuum. It runs inside a **Runtime Environment** (Browser or Node.js) which provides tools the engine lacks:
* **JS Engine:** Contains the Call Stack and Heap (Memory).
* **Web APIs:** Features like `setTimeout`, `fetch()`, `LocalStorage`, and `console` that live outside the engine.
* **Callback/Task Queue:** The "waiting room" for functions ready to be executed.
* **Microtask Queue:** A high-priority queue for Promises and Mutation Observers.



---

## II. The Mechanics of the Loop
The **Event Loop** has one simple job: Monitoring the Call Stack and the Callback Queue.

1. **Stack Check:** It waits until the Call Stack is completely empty (Global Execution Context is popped).
2. **Queue Check:** It looks at the Callback Queue for any waiting functions.
3. **Push:** It moves the first function from the Queue to the Stack for execution.

### The "Starvation" Problem (Microtask vs. Callback)
Not all queues are created equal. The **Microtask Queue** has absolute priority.
* The Event Loop will execute **all** tasks in the Microtask Queue before it even looks at the Callback Queue (Task Queue).
* **Architectural Risk:** If microtasks (like Promise resolutions) keep generating more microtasks, the Callback Queue (which handles UI renders and timers) will never run. This is known as **Task Starvation**.

---

## III. Phase 1 Review Glossary
* **Event Loop:** The gatekeeper that synchronizes the Call Stack with the Callback Queues.
* **Callback Queue (Task Queue):** Where standard async callbacks (setTimeout, DOM events) wait.
* **Microtask Queue:** High-priority queue for Promises and Mutation Observers.
* **Non-Blocking:** The ability to offload long-running tasks to the environment, keeping the Call Stack free for user interaction.

--------------------------------------------------------------------------------------------------------------------

# Day 08.1: Inside the V8 Engine & JIT Compilation (Ep. 16)

## Executive Summary
Audited the internal lifecycle of JavaScript code execution within the V8 Engine. Shifted focus from "how to write code" to "how code is consumed by the machine." This knowledge is foundational for Phase 2 (The Sentinel Bridge), where execution efficiency directly impacts ingestion latency.

---

## I. The V8 Pipeline: From Text to Machine Code

The V8 engine doesn't just "run" code; it transforms it through a multi-stage pipeline:

1.  **Parser:** Converts the raw source code into an **Abstract Syntax Tree (AST)**.
2.  **Ignition (Interpreter):** Takes the AST and converts it into **Bytecode**. This allows the code to start running almost immediately.
3.  **TurboFan (JIT Compiler):** While the code runs, V8 identifies "Hot Functions" (code run repeatedly) and compiles them into highly optimized **Machine Code**.



---

## II. Optimization & De-optimization (Bailout)

V8 makes "optimistic assumptions" based on the types of data it sees.

* **Hot Path:** If a function always receives integers, TurboFan optimizes it for integer math.
* **The Bailout:** If the function suddenly receives a string, TurboFan "de-optimizes" (Bails out) and sends the code back to the Ignition Interpreter.
* **Architectural Takeaway:** Type consistency is not just for developers; it is for the compiler. Consistent data shapes lead to "Hot Path" performance.

---

## III. Garbage Collection (Orinoco)

V8 manages memory through a collector called **Orinoco**.
* It uses a **Mark-and-Sweep** algorithm to identify unreachable objects in the Heap.
* **Generational Hypothesis:** It separates objects into "Young" and "Old" generations, as most objects die young.

---

## IV. Phase 1 Review Glossary
* **JIT (Just-In-Time):** A compilation method that happens during execution, combining the speed of a compiler with the flexibility of an interpreter.
* **AST (Abstract Syntax Tree):** A tree representation of the abstract syntactic structure of source code.
* **Bytecode:** An abstraction of machine code that is easier for the engine to interpret than raw source text.
* **Monomorphism:** Calling a function with the same "shape" of data every time, allowing for maximum optimization.