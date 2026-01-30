/**
 * Audit 08: Temporal Dead Zone & V8 Error Hierarchy
 * Goal: Observe how the engine handles memory access before initialization.
 */

// --- TEST CASE 1: ReferenceError (The TDZ) ---
try {
    console.log("Attempting to access 'a' in TDZ...");
    // console.log(a); // <--- UNCOMMENT to trigger ReferenceError
} catch (err) {
    console.error("CAUGHT:", err.name, "-", err.message);
}

let a = "Architect initialized.";
console.log(a);


// --- TEST CASE 2: TypeError (Immutable Contract) ---
const agentID = "AI-7741";
try {
    console.log("\nAttempting to reassign const 'agentID'...");
    // agentID = "AI-9999"; // <--- UNCOMMENT to trigger TypeError
} catch (err) {
    console.error("CAUGHT:", err.name, "-", err.message);
}


// --- TEST CASE 3: SyntaxError (Blueprint Failure) ---
// Note: You cannot wrap a SyntaxError in a try/catch block like the others.
// Because it's a 'Parsing Phase' error, the script won't even start.

console.log("\nChecking for SyntaxErrors...");
// let a = "duplicate"; // <--- UNCOMMENT to trigger SyntaxError (Identifier 'a' has already been declared)


// --- GLOBAL OBJECT INSPECTION ---
var globalVar = "I am on the Global Object";
let scriptVar = "I am in the Script Scope";

console.log("\n--- Memory Partition Audit ---");
if (typeof window !== 'undefined') {
    console.log("Is 'globalVar' in window?:", window.globalVar !== undefined);
    console.log("Is 'scriptVar' in window?:", window.scriptVar !== undefined);
} else {
    console.log("Node.js detected. Run in Browser to see 'window' partitioning.");
}

console.log("\nAudit Complete.");