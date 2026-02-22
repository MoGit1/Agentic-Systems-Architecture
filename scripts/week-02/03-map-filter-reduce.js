/**
 * Namaste JavaScript - Episode 19: Functional Programming
 * Script: Akshay Saini's Map, Filter, & Reduce Lab
 */

const arr = [5, 1, 3, 2, 6];

// ==========================================
// 1. MAP() - Transformation
// ==========================================

function double(x) { return x * 2; }
function triple(x) { return x * 3; }
function binary(x) { return x.toString(2); }

// Map is a Higher-Order Function that takes the logic (callback)
console.log("Doubled:", arr.map(double));
console.log("Tripled:", arr.map(triple));
console.log("Binary:", arr.map(binary));


// ==========================================
// 2. FILTER() - The Condition
// ==========================================

function isOdd(x) { return x % 2 !== 0; }
function isEven(x) { return x % 2 === 0; }

console.log("Odds:", arr.filter(isOdd));
console.log("Greater than 4:", arr.filter((x) => x > 4));


// ==========================================
// 3. REDUCE() - The Accumulator
// ==========================================

// --- THE MANUAL WAY (For comparison) ---
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
console.log("Manual Sum:", findSum(arr));

// --- THE REDUCE WAY ---
// acc = accumulator (like 'sum')
// curr = current value (like 'arr[i]')
const outputSum = arr.reduce(function (acc, curr) {
    acc = acc + curr;
    return acc;
}, 0); // 0 is the initial value of 'acc'
console.log("Reduce Sum:", outputSum);

// Finding Max using Reduce
const outputMax = arr.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max;
}, 0);
console.log("Reduce Max:", outputMax);


// ==========================================
// 4. REAL WORLD - Array of Objects
// ==========================================

const users = [
    { firstName: "akshay", lastName: "saini", age: 26 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "deepika", lastName: "padukone", age: 26 },
];

// Combine first and last names
const fullNames = users.map((x) => x.firstName + " " + x.lastName);
console.log("Full Names:", fullNames);

// Count people by age { 26: 2, 75: 1, 50: 1 }
const ageCounts = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log("Age Counts:", ageCounts);

// Chaining: Find first names of all people whose age is less than 30
const namesUnder30 = users
    .filter((x) => x.age < 30)
    .map((x) => x.firstName);

console.log("Names < 30:", namesUnder30);