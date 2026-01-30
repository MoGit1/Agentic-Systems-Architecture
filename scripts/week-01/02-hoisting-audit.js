// --- Audit 02: Hoisting & Functional Variable Environment ---

console.log("1. Var Hoisting:", a); 
console.log("2. Let Hoisting:", b); // UNCOMMENT THIS TO OBSERVE THE TDZ CRASH

var a = "Architect";
let b = "Junior";

// --- Function Hoisting Test ---

testDeclaration(); 
// testArrow(); // UNCOMMENT THIS TO OBSERVE THE TypeError CRASH

function testDeclaration() {
    console.log("3. Function Declaration: SUCCESS");
}

var testArrow = () => {
    console.log("4. Arrow Function: SUCCESS");
};

testArrow();