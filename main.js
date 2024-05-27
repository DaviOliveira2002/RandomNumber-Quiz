const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

function tryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber");

    if(Number(inputNumber.value) == randomNumber){
        screen1.classList.toggle("hide");
        screen2.classList.toggle("hide");

        screen2.querySelector("h1").innerText = `Acertou em ${xAttemps} Tentativas`;
    }

    xAttemps++;
    inputNumber.value= "";
}

function tryReset(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

    xAttemps=1;

    randomNumber = Math.round(Math.random() * 10);
} 

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", tryClick)
btnReset.addEventListener("click", tryReset)