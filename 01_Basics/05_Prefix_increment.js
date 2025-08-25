// 1. Simple Number
let a = 3;
let b = ++a;

// Step:
// old = 3
// convert → 3
// new = 3 + 1 = 4
// write back → a = 4
// expression value = new = 4 → b = 4

console.log(a, b); // 4, 4


// 2. Boolean
let flag = true;
let val = ++flag;

console.log(flag, val);

// Step:
// old = true
// convert → 1
// new = 1 + 1 = 2
// write back → flag = 2
// expression value = 2 → val = 2


// 3. Undefined
let u;
let res = ++u;

console.log(u, res);

// Step:
// old = undefined
// convert → NaN
// new = NaN + 1 = NaN
// write back → u = NaN
// expression value = NaN → res = NaN
