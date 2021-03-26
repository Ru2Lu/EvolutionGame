"use strict";

const diceEl = document.querySelector(".dice-image");
const characterEl = document.querySelector(".character");
const btnRoll = document.getElementById("btn-roll");
const btnRestart = document.getElementById("btn-restart");
const message = document.querySelector(".message");

let playing = true;

diceEl.classList.add("hidden");

//Roll a dice

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    diceEl.src = `images/dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    let characterSrc = characterEl.src;
    let currentCharacterNum = Number(characterSrc[characterSrc.length - 5]);

    //Evolution(If roll a dice on 1 )
    if (dice === 1) {
      characterEl.src = `images/image${currentCharacterNum + 1}.png`;
      message.textContent = "EVOLUTION!";
    } else {
      // Be in form final
      if (currentCharacterNum === 6) {
        message.textContent = "CONGLATULATION! YOU'RE IN THE FINAL FORM!!";
        document.querySelector("body").style.background =
          "radial-gradient(#01306d, #4cbfdb)";
        document.querySelector("body").style.color = "white";
        // Can't roll a dice when in final form
        playing = false;
      }
      //Degeneration in case of first character
      else if (currentCharacterNum === 1) {
        message.textContent =
          "If you roll a 1 on the dice,your character will evolve.";

        //Degeneration if not first character except the final character
      } else {
        message.textContent = "Digeneration ...";
      }
      characterEl.src = `images/image1.png`;
    }
  }
});

//Restart the game
btnRestart.addEventListener("click", function () {
  diceEl.classList.add("hidden");
  characterEl.src = `images/image1.png`;
  message.textContent =
    "If you roll a 1 on the dice,your character will evolve.";
  document.querySelector("body").style.background = "aqua";
  document.querySelector("body").style.color = "black";
  playing = true;
});
