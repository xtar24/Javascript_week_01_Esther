//Task 9-
let nameArray = ["Temitope", "Mirabel", "Tolulope","Opeyemi"];

//forEach
nameArray.forEach(name => {
    console.log(nameArray);
})

//Map
let a = nameArray.map(name => nameArray.toUpperCase);
console.log(a);

//filter
let b = nameArray.filter(name => nameArray.length > 8);
console.log(b);