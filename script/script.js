"use strict";

/**
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

 */

// variables
const img = document.querySelector("img");
const button = document.querySelector("button");
// eventListener
button.addEventListener("click", handleLightBulb);

// event handler
function handleLightBulb() {
    img.src = "img/yellow_lamp.png";
    img.alt = "lampadina accesa";
    img.style.rotate = "y 180deg";
}
