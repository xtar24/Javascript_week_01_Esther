//Converting string to Integer
let string1 = "71";
let num1 = parseInt(string1);
console.log("Converted String:", num1);

//Converting string to float
let string2 = "83.53";
let num2 = parseFloat(string2);
console.log("Converted String2:", num2);

//Converting string to number
let num3 = 37;
let string3 = num3.toString();
console.log("Converted Number:", string3);

//Concantenated method
let string4 = num3 + "";
console.log("Converted concantenated string:", string4);

//Converting String to an array
let text = "I'm a student at LmTech hub";
let stringArray = text.split("");
console.log("Converted String to Array:", stringArray);

let cars = "benz,toyota,jeep";
let carArray = cars.split(",")