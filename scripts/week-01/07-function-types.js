/**
 * AUDIT 13: FUNCTION TYPES & FIRST CLASS CITIZENS
 * Focus: Hoisting behavior and passing logic as data.
 */

// --- 1. HOISTING DIFFERENTIATION ---
a();                                         // SUCCESS: Statements are hoisted with their definition
// b();                                      // TYPE ERROR: b is currently 'undefined' in memory

function a() {                               // FUNCTION STATEMENT: Loaded into memory during Phase 1
    console.log("Statement: Fully Hoisted");
}

var b = function () {                        // FUNCTION EXPRESSION: Treated like a variable
    console.log("Expression: Not Hoisted");
};

// --- 2. THE ANONYMOUS vs NAMED TRAP ---
var c = function namedFunc() {               // NAMED FUNCTION EXPRESSION
    console.log(namedFunc);                  // Works here: 'namedFunc' is local to itself
};
// namedFunc();                              // REFERENCE ERROR: Not available in global scope

// --- 3. FIRST CLASS CITIZENSHIP ---        // This is the "Logic as Data" core
function executeTask(task) {                 // Higher-Order Function: Receives a function
    console.log("Dispatcher active...");
    task();                                  // Executes the "parcel" of logic
}

executeTask(function() {                     // Passing an anonymous function as an argument
    console.log("Task Injected & Run");
});