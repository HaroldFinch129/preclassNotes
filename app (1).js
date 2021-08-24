let minutes = 2;
let seconds = 0;
let timer;
let mySound = new Audio("horn.wav");

const start = () => {
    if (document.getElementById("time-limit").value !== "") {
        minutes = document.getElementById("time-limit").value; 
    }
    
    document.getElementById("btn-start").style.backgroundColor = "red";
    timer = setInterval(() => {
        seconds--;
        if (minutes !== 0 && seconds === -1) {
            minutes--;
            seconds = 59;
        }

        let minutesInString = minutes.toString();
        let secondsInString = seconds.toString();
        if (minutes < 10) {
            minutesInString = "0" + minutesInString;
        }
        if (seconds < 10) {
            secondsInString = "0" + secondsInString;
        }

        document.getElementById("btn-start").innerText = minutesInString + ":" + secondsInString;
        if (minutes === 0 && seconds === 0 || seconds < -1) {
            // mySound.play();
            clearInterval(timer);
            document.getElementById("btn-stop").removeEventListener("click", stop);
            restart();
        }


    }, 100);

    document.getElementById("btn-start").removeEventListener("click", start);
    document.getElementById("btn-stop").addEventListener("click", stop);

};

const stop = () => {
    clearInterval(timer);
    document.getElementById("btn-start").addEventListener("click", start);

}
const restart = () => {
    minutes = 2;
    seconds = 0;
    document.getElementById("btn-start").innerText = "Start Break!";
    document.getElementById("btn-stop").addEventListener("click", stop);
    stop();
    document.getElementById("btn-start").style.backgroundColor = "gry";
}








document.getElementById("btn-start").addEventListener("click", start);
document.getElementById("btn-restart").addEventListener("click", restart);
