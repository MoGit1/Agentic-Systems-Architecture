// --- Audit 07: The Scope Chain & Lexical Environment ---

function a() {
    var b = 10;
    
    // Function c is lexically inside function a
    c();

    function c() {
        // Variable 'b' is not in c's local memory.
        // The engine will look at the 'Reference to Outer Environment' 
        // which points to function a's Lexical Environment.
        console.log("Found b in Parent Scope:", b); 

        // Variable 'globalVar' is not in c OR a.
        // It will climb the chain to the Global Execution Context.
        console.log("Found globalVar in Global Scope:", globalVar);
    }
}

var globalVar = "I am at the top!";
a();

// --- The "ReferenceError" Test ---
function d() {
    // console.log(z); // UNCOMMENT to see the engine climb to Global, fail, and crash.
}
d();