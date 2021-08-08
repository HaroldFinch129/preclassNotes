let arr = [1, 2, 3, 4, 5];
for (a of arr) {;
    console.log(a);
};

let obj = { name: "Edward", lastname: "King", age: "47" };

for (key in obj) {
    console.log(key);
};

console.log(obj["name"]);
let secondObj = obj.age;
console.log(secondObj);



// *****JS Objects & Classes******* //

var dog = {
    name: "Rocky",
    legs: 4,
    tail: 1,
    qualities: ["loyalty", "companionship"]
};

// there are two ways to access

var myDog = dog.name;
console.log(myDog);

var yourDog = dog["name"];
console.log(yourDog);