## Day 02: Hoisting & The Functional Variable Environment

### **Objective**
To audit the "Creation Phase" of the Execution Context and analyze how the V8 engine handles memory allocation for different identifier types before code execution begins.

---

### **Technical Analysis**

#### **1. The Hoisting Mechanism**
Hoisting is the engine's behavior of allocating memory for variables and functions during the **Creation Phase** of the Execution Context.
* **Function Declarations:** Successfully hoisted with the entire function body available in memory.
* **`var` Variables:** Successfully hoisted but initialized as `undefined`.
* **Arrow Functions & Function Expressions:** Treated as variables. If declared with `var`, they are initialized as `undefined`, causing a `TypeError` if invoked before the assignment line.



#### **2. Local Execution Contexts (EC)**
When a function is invoked, a unique **Local Execution Context** is created with its own **Variable Environment**.
* **Isolation:** Variables defined within a function stay within that function's scope, preventing global namespace pollution.
* **Call Stack Lifecycle:** The Local EC is pushed onto the Call Stack when the function starts and is popped (destroyed) immediately upon completion, releasing that local memory.



---

### **Empirical Results (Audit Scripts)**
* **Observation 01:** Successfully invoked a function statement before its declaration line, confirming full body allocation in the Creation Phase.
* **Observation 02:** Confirmed that `var` variables return `undefined` when accessed early, whereas `let` and `const` (tested in TDZ) throw a `ReferenceError`, proving they are stored in a separate memory space.
* **Observation 03:** Verified that identical variable names across different functions (Shadowing) do not conflict, as each function operates in its own isolated Execution Context.

---

### **Architect’s Perspective**
In high-concurrency **Azure AI Agentic workflows**, understanding local execution contexts is non-negotiable. It ensures that state "leakage" does not occur between concurrent agents. Mastering the Call Stack allows for deeper debugging of "Maximum call stack size exceeded" errors often found in recursive AI reasoning loops.