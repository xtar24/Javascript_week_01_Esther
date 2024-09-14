//Typeof to check the type of variable
let x = 58;
let y = "what's up";
let z = true;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

//Comparing equality and strict equality
let string = "9";
let number = 6;

console.log(number == string);

console.log(number === string);

//Truthy and Falsy
let trueValue1 = "Esther";
let trueValue2 = 85;
let trueValue3 = {};

console.log(Boolean(trueValue1));
console.log(Boolean(trueValue2));
console.log(Boolean(trueValue3));

let falseValue1 = false;
let falseValue2 = -1;
let falseValue3 = NaN;

console.log(Boolean(falseValue1));
console.log(Boolean(falseValue2));
console.log(Boolean(falseValue3));