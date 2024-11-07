"use strict";

/*
 *BONUS PERSONALE: scrivere codice per gioco dei dadi
 *interamente in javascript e qualche animazione in css (NO HTML)
 */
/* Al click di un bottone, appare il gioco dei dadi
    Ci sono due giocatori, rispettivamente playerSX e playerDX
    Al click di un bottone "Lancia", vengono lanciati i dadi.
    Il bottone "Lancia" scompare.
    Esce un messaggio di vittoria o sconfitta in base all'esito.
    Compare un bottone "Rigioca" che riporta il gioco allo stato iniziale
*/
// DOM elements creation
const playBtn = document.createElement("button");
playBtn.innerHTML = "Play Dices!";

const playArea = document.createElement("div");
playArea.classList.add("d-none");
playArea.style.background = "#222222";
playArea.style.width = "fit-content";

const dice1 = document.createElement("img");
dice1.style.margin = "50px";
dice1.src = "img/dadi/1.svg";
const dice2 = document.createElement("img");
dice2.style.margin = "50px";
dice2.src = "img/dadi/1.svg";

const throwBtn = document.createElement("button");
throwBtn.innerHTML = "Throw!";

const playAgainBtn = document.createElement("button");
playAgainBtn.innerHTML = "Play Again";
playAgainBtn.classList.add("d-none");

const text = document.createElement("p");
text.innerHTML = "Ha vinto ";
text.classList.add("d-none");
text.style.color = "#ffffff";
// other variables
const script = document.querySelector("script");
// appends elements
document.body.insertBefore(playBtn, script);
playBtn.insertAdjacentElement("afterend", playArea);
playArea.insertAdjacentElement("beforeend", dice1);
playArea.insertAdjacentElement("beforeend", dice2);
playArea.insertAdjacentElement("beforeend", throwBtn);
playArea.insertAdjacentElement("beforeend", playAgainBtn);
playArea.insertAdjacentElement("beforeend", text);
// event listeners
playBtn.addEventListener("click", () => {
    playArea.classList.remove("d-none");
});
throwBtn.addEventListener("click", handleThrowDices);
// event handlers
function handleThrowDices() {
    const res1 = getRndInteger(1, 6);
    const res2 = getRndInteger(1, 6);
    // cambia dado in base a res$
    dice1.src = `img/dadi/${res1}.svg`;
    dice2.src = `img/dadi/${res2}.svg`;

    // Mostra testo vittoria
    text.classList.remove("d-none");
    if (res1 > res2) {
        text.innerHTML += "playerSX !!";
    } else if (res1 < res2) {
        text.innerHTML += "playerDX !!";
    } else {
        text.innerHTML = "Pareggio!";
    }

    // nascondi Throw
    throwBtn.classList.add("d-none");
    // mostra Play again
    playAgainBtn.classList.remove("d-none");
    // event listener Play again
    playAgainBtn.addEventListener("click", handlePlayAgain);
}

function handlePlayAgain(){
    dice1.src = `img/dadi/1.svg`;
    dice2.src = `img/dadi/1.svg`;

    throwBtn.classList.remove("d-none");

    text.innerHTML = "Ha vinto ";
    text.classList.add("d-none");

    playAgainBtn.classList.add("d-none");
}
// functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
