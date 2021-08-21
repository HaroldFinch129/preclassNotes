const btnPlayer = document.getElementById("ex-button");


function increaseCounter(event) {
    console.log('You clicked me');
}

btnPlayer.addEventListener('click', increaseCounter);

// map() function------------------------

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
// return element for newArray, after executing something
// }[, thisArg]);


function square(number) {
    return number * number
};
const numbers = [1, 3, 5, 7];
const squares = numbers.map(square);
// burada square callback function onu sonradan çağırıyoruz

console.log(squares);


// filter() function --------------------

// let newArray = arr.filter(callback(currentValue[, index[, array]]) {
// return element for newArray, if true
// }[, thisArg]);

const numberos = [1, 2, 3, 4, 5, 6, 7, 9];
console.log(numberos.filter((numara) => !(numara % 2)));


// reduce() method--------------------------

// arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator * currentValue;

console.log(array1.reduce(reducer));

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.reduce((accumulator, item) => accumulator + item));