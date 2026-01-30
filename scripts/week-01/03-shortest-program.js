console.log(a); // undefined due to hoisting
var a = "Architect";

if (a === undefined) {
    console.log("a is undefined");
} else {
    console.log("a is defined");
}

console.log(x); // UNCOMMENT to see 'not defined' crash