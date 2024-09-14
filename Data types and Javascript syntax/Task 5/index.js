let person = {
    name: "Esther",
    age: 16,
    location: "Nigeria"
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("Location:", person.location);

//Dot notation
person.age = 20;
console.log("Name2:", person.age);

person.height = 1.7;
console.log("Height:", person.height);

//Bracket notation
person["location"] = "United State of America";
console.log("location2:", person["location"]);

person.complexion = "lightSkinned";
console.log("Complexion:", person.complexion);