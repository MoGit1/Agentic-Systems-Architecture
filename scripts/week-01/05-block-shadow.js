/**
 * Audit 09: Block Scope & Shadowing
 * Goal: Observe how V8 partitions memory for blocks and prevents illegal shadowing.
 */

// --- 1. Global & Script Scope Setup ---
var a = 100; // Attached to Global
let b = 200; // Attached to Script

console.log("--- Initial State ---");
console.log("Global a:", a);
console.log("Script b:", b);

// --- 2. The Block Scope Partition ---
{
    var a = 10;  // SHADOWING: Overwrites Global 'a'
    let b = 20;  // SHADOWING: Creates a new 'b' in Block Scope
    const c = 30;

    console.log("\n--- Inside Block ---");
    console.log("Block a (Shadowed):", a); 
    console.log("Block b (Shadowed):", b); 
    console.log("Block c:", c);
    
    // Architect's Note: Set a breakpoint here and look at the 'Scope' panel.
    // You will see three distinct layers: Block, Script, and Global.
}



// --- 3. Memory Cleanup & Leak Analysis ---
console.log("\n--- Post-Block Execution ---");
console.log("Global a (Persistent Overwrite):", a); // Still 10!
console.log("Script b (Restored):", b);             // Back to 200

try {
    // console.log(c); // This would trigger a ReferenceError
} catch (e) {
    console.log("Const 'c' was garbage collected.");
}

// --- 4. Illegal Shadowing (Boundary Test) ---
// To test this, uncomment the block below. 
// Notice the engine throws a SyntaxError BEFORE execution starts.

/*
let x = 10;
{
    var x = 20; // ILLEGAL: var tries to leak to Global, but let 'x' is already there.
}
*/

console.log("\nAudit 09 Complete.");