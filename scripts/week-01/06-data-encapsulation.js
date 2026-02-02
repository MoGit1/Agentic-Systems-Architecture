/**
 * AUDIT 12: DATA HIDING & ENCAPSULATION
 */

function AIAgent(name) {
    let _apiKey = "SK-PROD-9921-X";          // Private variable: unreachable from the global scope
    this.agentName = name;                   // Public property: accessible via instance.agentName

    this.showStatus = function () {          // Privileged method: a closure with access to '_apiKey'
        console.log(`Agent: ${this.agentName}`);
        console.log(`Key: ${_apiKey.slice(0,4)}`); // Accesses the private variable securely
    };

    this.updateKey = function (newKey) {     // Setter: allows controlled modification of private state
        if (newKey.startsWith("SK-")) {      // Logic gate: only updates if key format is valid
            _apiKey = newKey;
            console.log("Key updated.");
        }
    };
}

const myAgent = new AIAgent("Sentinel-1");   // Instantiate the agent
console.log(myAgent.agentName);              // Sentinel-1
console.log(myAgent._apiKey);               // undefined: Encapsulation is working
myAgent.showStatus();                        // Works: Closure maintains access to parent scope

/**
 * ARCHITECT'S MEMORY NOTE:
 * '_apiKey' persists in the Heap as long as 'myAgent' is in scope.
 * To trigger Garbage Collection, use: myAgent = null;
 */