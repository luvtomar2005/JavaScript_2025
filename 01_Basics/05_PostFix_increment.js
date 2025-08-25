// Postfix increment

// 1. Simple Number
let x = 3;
let y = x++;  

// Step by step:
// old = 3
// convert → 3
// new = 3 + 1 = 4
// write back → x = 4
// expression value = old = 3 → y = 3

console.log(x, y); // 4, 3
 // 2. String 
 let s = "3";
let t = s++;

console.log(s, t);

// Step:
// old = "3"
// convert to number → 3
// new = 3 + 1 = 4
// write back → s = 4 (notice: type changed from string to number)
// expression value = 3 → t = 3

// 3. Nulllet n = null;
let result = n++;

console.log(n, result);

// Step:
// old = null
// convert → 0
// new = 0 + 1 = 1
// write back → n = 1
// expression value = old = 0 → result = 0

