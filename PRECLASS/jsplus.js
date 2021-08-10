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

// class dog {
//     constructor(name, legs, tail) {
//         this.name = name;
//         this.legs = legs;
//         this.tail = tail;
//     }
// }

// var dog1 = new dog("Riley", 4, 1);
// var dog2 = new dog("Ginger", 4, 1);

// document.write(dog1.name); // Output: "Riley"
// document.write(dog2.tail);
// // there are two ways to access

var myDog = dog.name;
console.log(myDog);

var yourDog = dog["name"];
console.log(yourDog);

// Object Methods

var cat = {
    name: "Gilbert",
    legs: 4,
    tail: 1,
    qualities: ["cute", "fast", "hunter"],
    meow: function() {
        console.log("meowww");
    },
    result: function() {
        return this.name + " has " + this.legs + " legs.";
    }


};


cat.meow();
console.log(cat.result());

// The Object Constructor



//  After we have an object constructor, we can create 
// **new** objects of the same type with the new keyword.
var cat = {
    name: "Gilbert",
    legs: 4,
    tail: 1,
    qualities: ["cute", "fast", "hunter"],
    meow: function() {
        console.log("meowww");
    },
    result: function() {
        return this.name + " has " + this.legs + " legs.";
    }



};






class Dog {
    constructor(name, foot) {
        this.dogName = name;
        this.foot = foot;
    }
    current() {
        return "I have a " + this.dogName;
    }
}

class Specy extends Dog {
    constructor(name, foot, char) {
        super(name, foot);
        this.character = char;
    }
    show() {
        return this.current() + ', it is  ' + this.character;
    }
}

myDog = new Specy("Buldog", 4, "curious");
console.log(myDog);