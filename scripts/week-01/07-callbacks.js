/**
 * AUDIT 14: CALLBACKS & ASYNC ORCHESTRATION
 * Focus: Non-blocking execution and closure-based event handling.
 */

// --- 1. BASIC CALLBACK PATTERN ---
function processSensorData(id, callback) {   // Simulation: 'callback' is our "return address"
    console.log(`Analyzing Stream: ${id}`);
    callback();                              // The logic is deferred until the task is ready
}

processSensorData("SENTINEL_01", function() {
    console.log("Analysis Result: No anomalies.");
});

// --- 2. EVENT LISTENERS & MEMORY ---
function setupInteraction() {
    let clickCount = 0;                      // Private state trapped in a closure
    
    // Simulating an event listener attachment
    const listener = function() {
        clickCount++;                        // This closure keeps the outer scope alive
        console.log(`Events Logged: ${clickCount}`);
    };
    
    // In a real browser: 
    // document.getElementById("btn").addEventListener("click", listener);
}

// --- 3. BLOCKING THE MAIN THREAD ---       // A caution for high-frequency systems
function blockThread() {
    let start = Date.now();
    while (Date.now() < start + 3000) {}     // Synchronous loop: Nothing else can run
    console.log("Main thread was frozen for 3s");
}

/**
 * ARCHITECT'S NOTE:
 * Always use Callbacks (and later Promises) for I/O tasks. 
 * Blocking the thread in the Sentinel Bridge would cause 
 * data packet loss from live streams.
 */