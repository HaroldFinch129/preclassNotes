const btnPlayer = document.getElementById("ex-button");


function increaseCounter(event) {
    console.log('You clicked me');
}

btnPlayer.addEventListener('click', increaseCounter);


function square(number) {
    return number * number
};
const numbers = [1, 3, 5, 7];
const squares = numbers.map(square);

console.log(squares);