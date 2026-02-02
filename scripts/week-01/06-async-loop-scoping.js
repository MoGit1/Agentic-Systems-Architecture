/**
 * AUDIT 11: ASYNC LOOP SCOPING
 */

function varTrap() {
    for (var i = 1; i <= 3; i++) {
        setTimeout(function () {
            console.log("Var:", i);          // Prints 4, 4, 4: 'var' is shared across all iterations
        }, i * 1000);                        // Closures capture the final reference of 'i' (4)
    }
}

function letSuccess() {
    for (let j = 1; j <= 3; j++) {
        setTimeout(function () {
            console.log("Let:", j);          // Prints 1, 2, 3: 'let' is block-scoped
        }, j * 1000);                        // Each iteration creates a unique memory binding for 'j'
    }
}

function functionalFix() {
    for (var k = 1; k <= 3; k++) {
        (function (snapshot) {               // IIFE creates a new functional execution context
            setTimeout(function () {
                console.log("Manual:", snapshot); // Prints 1, 2, 3: 'snapshot' is a local copy
            }, snapshot * 1000);             // The value is "pinned" inside this specific scope
        })(k);                               // Immediately pass 'k' into the function by value
    }
}

letSuccess();