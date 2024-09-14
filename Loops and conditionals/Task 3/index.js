//Task 3 - Use a "for...in" loop to iterate over an object
let personInformation = {
    name: "Esther",
    age: 16,
    city: "Ibadan"
};

//for in loop
for (const key in personInformation) {
    console.log(`${key} : ${personInformation[key]}`);
}