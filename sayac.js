var deger = document.getElementById("degeri-al");
var programla = document.getElementById("programla");
var start = document.getElementById("start");
var stop = document.getElementById("stop");

var kutu = document.getElementsByClassName("kutu")[0];
var durum = document.getElementsByClassName("durum")[0];
var saniye = document.getElementsByClassName("deger")[0];

var x;

programla.addEventListener("click", () => {
    saniye.innerHTML = deger.value;
    durum.classList.remove("gorun")

});
start.addEventListener("click", () => {
    x = setInterval(geriSay, 1000);

    function geriSay() {
        var degeri_al = Number(saniye.textContent);
        if (degeri_al > 0) {
            degeri_al -= 1;
            saniye.innerHTML = degeri_al.toString();


        } else {
            clearInterval();
            durum.classList.add("gorun");

        }
    }
});

stop.addEventListener("click", () => {
    clearInterval(x);
});













// var x = 5;
// setInterval(geriSay, 1000);

// function geriSay() {
//     if (x >= 0) {
//         console.log(x);
//         x--;

//     } else {
//         clearInterval();
//     }
// }