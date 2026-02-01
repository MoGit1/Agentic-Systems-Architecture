/**
 * Audit 10: Akshay Saini's Episode 10 Examples
 * Reference: Namaste JavaScript Ep. 10
 */

// --- Example 1: The Basic Closure ---
function x() {
    var a = 7;
    function y() {
        console.log(a); // Accessing parent scope
    }
    y();
}
x(); 


// --- Example 2: Returning the Function (The Core of Closures) ---
function x2() {
    var a = 100;
    function y() {
        console.log(a);
    }
    return y; // Returning the function bundle
}
var z = x2();
console.log(z); // Logs the function code
// ...thousands of lines of code later...
z(); // Still logs 100 because of the Closure


// --- Example 3: The "Value vs Reference" Proof ---
function x3() {
    var a = 500;
    function y() {
        console.log(a);
    }
    a = 1000; // Value of 'a' changes before the function is returned
    return y;
}
var z3 = x3();
z3(); // Logs 1000, proving closure points to the memory reference, not a snapshot


// --- Example 4: Deeply Nested Closures ---
function outest() {
    var c = 20;
    function outer(b) {
        function inner() {
            console.log(a, b, c); // Accessing multiple levels of closures
        }
        let a = 10;
        return inner;
    }
    return outer;
}
var close = outest()("Hello World");
close(); // Logs: 10 "Hello World" 20