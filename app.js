"use strict";

// Global Selectors
const numberOfDice = document.querySelector(".dice__input");
const roll = document.querySelector(".submit");
const clear = document.querySelector(".clear");
const diceContainer = document.querySelector(".dice__container");



// Creates a certain amount of dice based on the user's input.
function createDice() {
  // Assigns the user's input to a variable, then creates a that many die.
  let diceNumber = numberOfDice.value;
  // Generates the amount of die.
  for (let i = 0; i < diceNumber; i++) {
    // Creates the single die
    let newDie = document.createElement("div");

    // Generates a random number from 1-6
    const randomDie = Math.floor(Math.random() * 6) + 1;

    // Generates a random face for each generated die.
    switch (randomDie) {
      case 1:
        newDie.classList.add("one");
        newDie.innerHTML = "<span class='dot'></span>";

        break;
      case 2:
        newDie.classList.add("two");
        newDie.innerHTML =
          "<span class='dot'></span> <span class='dot'></span> ";
        break;
      case 3:
        newDie.classList.add("three");
        newDie.innerHTML =
          "<span class='dot'></span> <span class='dot'></span> <span class='dot'></span>";
        break;
      case 4:
        newDie.classList.add("four");
        newDie.innerHTML =
          "<div class='column'><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span></div>";
        break;
      case 5:
        newDie.classList.add("five");
        newDie.innerHTML =
          "<div class='column'><span class='dot'></span><span class='dot'></span></div> <div class='column'><span class='dot'></span></div> <div class='column'><span class='dot'></span><span class='dot'></span></div>";
        break;
      case 6:
        newDie.classList.add("six");
        newDie.innerHTML =
          "<div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div><div class='column'><span class='dot'></span><span class='dot'></span><span class='dot'></span></div>";
        break;
    }

    //Adds the dice class to each die
    newDie.classList.add("dice");
    // Attaches the newly generated die to the dice container.
    diceContainer.append(newDie);
  }
}

// Clears the previous input and focuses on it.
function clearAndFocus() {
  // Clears the user's previous input.
  numberOfDice.value = "";
  // Focuses on the number of dice input.
  numberOfDice.focus();
}

function clearDiceContainer() {
  diceContainer.innerHTML = "";
}

// When the roll button is clicked...
roll.addEventListener("click", (evt) => {
  // Prevent the default form submission from occuring
  evt.preventDefault();

  // Create dice based on the user's input.
  createDice();

  // Clears the user's previous input and re-focuses on it.
  clearAndFocus();
});

clear.addEventListener("click", clearDiceContainer);
