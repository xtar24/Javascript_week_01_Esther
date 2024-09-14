//Task 6 - Use arrow functions
let greet = (a = "Guest", b = "Premium") => {
  console.log(`Hello, ${a}, Hope you are enjoying our ${b} services`);
}

greet("Esther");
greet();