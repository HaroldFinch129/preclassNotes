var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const sentence = prompt("Please enter a sentence");
const letter = sentence.toUpperCase().split("");
// console.log(letter);

const deleter = () => {
    letter.forEach(element => {
        if (alphabet.includes(element)) {
            // console.log(element);
            alphabet.splice(alphabet.indexOf(element), 1);
        }
    });
    // console.log(alphabet);
    return alphabet.length === 0 && "it is pangram" || "it's not pangram"
}
console.log(deleter());

// The quick brown fox jupms over the lazy dog