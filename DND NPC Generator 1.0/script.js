"use strict";

let race;

let strMod, dexMod, conMod, intMod, wisMod, chaMod;

let racialModSTR,
  racialModDEX,
  racialModCON,
  racialModINT,
  racialModWIS,
  racialModCHA;

let finalSTR, finalDEX, finalCON, finalINT, finalWIS, finalCHA;

let attributes = [0, 0, 0, 0, 0, 0];

racialModSTR = 0;
racialModDEX = 0;
racialModCON = 0;
racialModINT = 0;
racialModWIS = 0;
racialModCHA = 0;

//RANDOMIZE RACE //

const races = [
  "Dragonborn",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Halfling",
  "Half-Orc",
  "Human",
  "Tiefling",
];

// Make the GENERATOR-button work.

document.querySelector(".generate").addEventListener("click", function () {
  function randomRace() {
    let randomNumber = Math.floor(Math.random() * races.length);
    return randomNumber;
  }

  // For the GENERATOR
  race = races[randomRace()];

  // Display race

  document.getElementById("race-text").textContent = race;

  // ATTRIBUTES RANDOMIZED

  // STR, DEX, CON, INT, WIS, CHA
  let attributes = [0, 0, 0, 0, 0, 0];

  // Randomize the attributes (array) from 8-13

  function randomAttributes() {
    for (let i = 0; i < attributes.length; i++) {
      let newAttribute = Math.floor(Math.random() * 5) + 7;
      attributes[i] = newAttribute;
    }
  }

  randomAttributes();

  // RACIAL MODIFIERS TO ATTRIBUTES

  // Create if-statement for updating the correct atrribute modifiers X

  if (race === "Dragonborn") {
    racialModSTR = 2;
    racialModCHA = 1;
  } else if (race === "Dwarf") {
    racialModCON = 2;
  } else if (race === "Elf") {
    racialModDEX = 2;
  } else if (race === "Gnome") {
    racialModINT = 2;
  } else if (race === "Half-Elf") {
    // Randomize two attributes and add +1 to them
    racialModCHA = 2;
    let randomAttribute = Math.floor(Math.random() * attributes.length - 1);
    if (randomAttribute === 0) {
      racialModSTR = 1;
    } else if (randomAttribute === 1) {
      racialModDEX = 1;
    } else if (randomAttribute === 2) {
      racialModCON = 1;
    } else if (randomAttribute == 3) {
      racialModINT = 1;
    } else if (randomAttribute === 4) {
      racialModWIS = 1;
    }

    let randomAttribute2 = Math.floor(Math.random() * attributes.length - 1);
    if (randomAttribute2 === 0) {
      racialModSTR = 1;
    } else if (randomAttribute2 === 1) {
      racialModDEX = 1;
    } else if (randomAttribute2 === 2) {
      racialModCON = 1;
    } else if (randomAttribute2 == 3) {
      racialModINT = 1;
    } else if (randomAttribute2 === 4) {
      racialModWIS = 1;
    }
  } else if (race === "Halfling") {
    racialModDEX = 2;
  } else if (race === "Half-Orc") {
    racialModSTR = 2;
    racialModCON = 1;
  } else if (race === "Human") {
    racialModSTR = 1;
    racialModDEX = 1;
    racialModCON = 1;
    racialModINT = 1;
    racialModWIS = 1;
    racialModCHA = 1;
  } else if (race === "Tiefling") {
    racialModCHA = 2;
    racialModINT = 1;
  }

  // Add the racialMod(s)

  finalSTR = attributes[0] + racialModSTR;
  finalDEX = attributes[1] + racialModDEX;
  finalCON = attributes[2] + racialModCON;
  finalINT = attributes[3] + racialModINT;
  finalWIS = attributes[4] + racialModWIS;
  finalCHA = attributes[5] + racialModCHA;

  // Display the total of attributes and racial mods in the DOM

  document.getElementById("strDOM").textContent = finalSTR;
  document.getElementById("dexDOM").textContent = finalDEX;
  document.getElementById("conDOM").textContent = finalCON;
  document.getElementById("intDOM").textContent = finalINT;
  document.getElementById("wisDOM").textContent = finalWIS;
  document.getElementById("chaDOM").textContent = finalCHA;

  // Calculate the stat modifiers (make it a single function to run whatever stat we need)

  const calcMod = function (attribute) {
    if (attribute <= 9) {
      return "-1";
    } else if (attribute <= 11) {
      return "+0";
    } else if (attribute <= 13) {
      return "+1";
    } else if (attribute <= 15) {
      return "+2";
    } else if (attribute <= 17) {
      return "+2";
    }
  };

  // Display the modifers

  document.getElementById("str-mod").textContent = calcMod(finalSTR);
  document.getElementById("dex-mod").textContent = calcMod(finalDEX);
  document.getElementById("con-mod").textContent = calcMod(finalCON);
  document.getElementById("int-mod").textContent = calcMod(finalINT);
  document.getElementById("wis-mod").textContent = calcMod(finalWIS);
  document.getElementById("cha-mod").textContent = calcMod(finalCHA);
});
