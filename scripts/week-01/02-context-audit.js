// --- Audit 02: Local Execution Contexts & Variable Environments ---

var x = "Global Scope";

function a() {
    var x = "Function A Scope";
    console.log("Inside A:", x);
}

function b() {
    var x = "Function B Scope";
    console.log("Inside B:", x);
}

a();
b();
console.log("Outside:", x);