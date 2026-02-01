## Day 01: The Mechanics of the Global Execution Context (GEC)

### Technical Observations:
1. **The Dual-Component Nature of the GEC:**
   - **Variable Environment (Memory):** A key-value store where identifiers are mapped to memory locations.
   - **Thread of Execution (Code):** The single-threaded process that parses and executes instructions line-by-line.

2. **The Two-Phase Lifecycle:**
   - **Creation Phase (Memory Allocation):** Observed that identifiers are "hoisted." Variables are initialized as `undefined`, while function declarations are stored in their entirety.
   - **Execution Phase:** Value assignment occurs. I verified that function invocation triggers a nested **Functional Execution Context (FEC)**.

3. **Call Stack Management:**
   - The Call Stack (LIFO - Last In, First Out) acts as the control mechanism for the engine. 
   - *Architectural Note:* Understanding that the FEC is "garbage collected" (erased) upon return is vital for optimizing high-throughput Node.js applications.


 
 
**Audit 01: Empirical Results**

Execution Command: **scripts/01-execution-context.js**

Observed Terminal Output:

Memory Phase - n: undefined

Memory Phase - square function: [Function: square]

Execution Phase - n: 2

Execution Phase - square2: 4

Execution Phase - square4: 16

**Practical Conclusion**: The results confirm the two-phase lifecycle of the Global Execution Context. The "undefined" output for 'n' proves that the V8 engine allocates memory for variables before executing code. In contrast, the 'square' function was stored in its entirety, allowing it to be logged as a function even before its definition line.

The successful calculation of 'square2' proves that when a function is called, a new Functional Execution Context is created, executed, and then successfully returned to the Global context.