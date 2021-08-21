const btnPlayer = document.getElementById("ex-button");


function increaseCounter(event) {
    console.log('You clicked me');
}

btnPlayer.addEventListener('click', increaseCounter);