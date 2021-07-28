document.write("Merhaba Yiğidim <br>");
// document.write("alta geçmedi")""
console.log("iyi misin");
// alert("anladın mı?")

var myNumber = 7
document.write(myNumber + "<br>");

let yourNumber = 3


console.log(yourNumber);

const myBrotherNumber = 97

document.write(myBrotherNumber);

console.log("1. " + typeof 8);
document.write("2. " + typeof "Merhaba");

console.log("3. " + typeof true);

console.log(Boolean(3 < 5));

// variables
var myCar = {
    make: "ford",
    model: "mustang",
    year: 1969

}

console.log(myCar.make);
console.log(typeof myCar);

var i = 10;
i++;
console.log(i);
let j = 17;
j += 3;
console.log(j);

console.log(Boolean(i === j));

var i = 20;
console.log(Boolean(i === j));

var y = 4;
var z = 11;
console.log(y > z || z > y);
// conditional statements
// if- else if - else
if (y == 4) {
    console.log(" y nin değeri dört");
}
if (z == 7) {
    console.log("z nin değeri 7 ");
} else {
    console.log("z nin değeri 7 değidir.");
}

if (y == z) {
    console.log("y ve z eşit");
} else if (y > z) {
    console.log("y z den büyük");
} else {
    console.log("z y den büyük");
}
// switch
var team = "fenerbahce";
switch (team) {
    case "galatasaray":
        console.log(team + "lıyım");
        break;
    case "fenerbahce":
        console.log(team + "liyim");
        break
    default:
        console.log("takım tutmuyorum");


}
// while loop
var i = 0;
var toplam = 0
while (i < 7) {
    var toplam = toplam + i;
    i++;

}
console.log(toplam);

// do..while

// The difference between while and do-while loops is that code will execute at least once in the do-while loop

do {
    var toplam = toplam + i;
    i++;
}
while (i < 7);
console.log(toplam);
// gördüğümüz gibi yukardaki örnekle aynı olamasına rağmen
// sonuncu 7 koşulu yanlış olsa da do.. while yapısı 
// nedeniyle yazdırdı.

// FOR Statement *****

//  for (statement 1; statement 2; statement 3)
// code block
var sum = 0;
for (var i = 0; i < 7; i++) {
    sum += i;
}
console.log(sum);

// break

var c = 0

while (c < 11) {
    if (c === 5) {
        break;
    }
    console.log(c);
    c++;
}
console.log(c);

// contunue statement
for (var yo = 8; yo < 12; yo++) {
    if (yo === 10) {
        continue;
    }
    console.log(yo);
}

// Functions

// function name(parameters){
//     statements
//   }

function kare(numara) {
    return numara * numara;
}
var sonuc = kare(7);
console.log(sonuc);
// function expression
var ückatı = function(numara) { return numara * 3 }
var snc = ückatı(8);
console.log(snc);
// function constructor

const square = new Function("numara", "return numara*numara")
console.log(square(3));

// var num = [7, 12, 143, 54, 37]
// num.sort(function(a, b) {
//     return b - a
// });
// console.log(num);???

// *****Arrow Function****


// ***string methods***
// length
var kurs = "Clarusway";
console.log(kurs.length);

// concat
var kurs2 = " Reinvent Yourself";
var kursCw = kurs.concat(kurs2);
console.log(kursCw);

// charAt

console.log(kurs.charAt(4));
console.log(kurs.charAt(kurs.length - 1));

// includes

console.log(kurs.includes("aru"));
// true because cl aru sway

// indexOf

var umut = "Good days are soon";
var p = umut.indexOf("are");

console.log(p);