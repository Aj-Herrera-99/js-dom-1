"use strict";

/**
Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

 */

//* NORMALE
// variables
const img = document.querySelector("img");
const button = document.querySelector("button");
// event listener
button.addEventListener("click", handleLightBulb);
// event handler
function handleLightBulb() {
    img.src = "img/yellow_lamp.png";
    img.alt = "lampadina accesa";
    img.style.transform = "translate(-41px, 0)";
}

/**
Facciamo accendi e spegni:
- Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
- Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
 */
//* BONUS
// variables
const imgBonus = document.getElementById("img-bonus");
const toggleOnOffBtn = document.getElementById("toggle-on-off-btn");
// event listeners
toggleOnOffBtn.addEventListener("click", handleToggleOnOff);
// event handlers
function handleToggleOnOff() {
    console.log(imgBonus.src);
    if (imgBonus.src.includes("white_lamp.png")) {
        // cambio immagine lampadina
        imgBonus.src = "img/yellow_lamp.png";
        imgBonus.alt = "lampadina accesa bonus";
        imgBonus.style.transform = "translate(-41px, 0)";
        // cambio testo button
        toggleOnOffBtn.innerHTML = "Spegni";
    } else if (imgBonus.src.includes("yellow_lamp.png")) {
        // cambio immagine lampadina
        imgBonus.src = "img/white_lamp.png";
        imgBonus.alt = "lampadina spenta bonus";
        imgBonus.removeAttribute("style");
        // cambio testo button
        toggleOnOffBtn.innerHTML = "Accendi";
    }
}
