const number=new Number(1000000)
console.log(number.toLocaleString('en-IN'));
// console.log(number.toString().concat(" million"));
// console.log(number.toExponential());
// console.log(number.toFixed(2));
// console.log(number.toPrecision(6));
// console.log(number.valueOf());
// Number Methods Cannot be Used on Variables
// The number methods above belong to the JavaScript Number Object.

// These methods can only be accessed like Number.isInteger().

// Using X.isInteger() where X is a variable, will result in an error:

// TypeError X.isInteger is not a function.
// console.log(Number.isInteger(-21.2))
// The Number.isSafeInteger() Method
// A safe integer is an integer that can be exactly represented as a double precision number.

// The Number.isSafeInteger() method returns true if the argument is a safe integer.
// console.log(Number.isSafeInteger(-21))
// Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(Number.MIN_SAFE_INTEGER)
// ===============================Math======================

console.log(Math);
console.log(Math.abs(-17.222));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
console.log(Math.sqrt(333))
console.log(Math.pow(4,2))

console.log(Math.min(0,1,34,-1));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log(Math.floor((Math.random()*10)+1))


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)))