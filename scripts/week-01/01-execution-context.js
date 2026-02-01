/**
 * AUDIT 01: Global Execution Context Verification
 * Purpose: Observe the 'Memory Creation Phase' in action.
 */

// 1. Accessing 'n' and 'square' before they are defined in the code
console.log("Memory Phase - n:", n); 
console.log("Memory Phase - square function:", square); 

var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

// 2. Accessing after the 'Code Execution Phase' has assigned values
var square2 = square(n);
var square4 = square(4);

console.log("Execution Phase - n:", n);
console.log("Execution Phase - square2:", square2);
console.log("Execution Phase - square4:", square4);