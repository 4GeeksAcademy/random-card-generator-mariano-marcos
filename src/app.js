/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {

// };
let suitsStrings = ["Diamonds", "Hearts", "Spades", "Clubs"];
let ranksStrings = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace"
];

document.addEventListener("DOMContentLoaded", function() {
  generateCard();
  let generateCardButton = document.querySelector("#deal-card-button");
  generateCardButton.addEventListener("click", generateCard);
});

function generateCard() {
  let suits = ["♦", "♥", "♠", "♣"];
  let ranks = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let cardSuits = document.querySelectorAll(".card-suit");
  let suitIndex = Math.floor(Math.random() * suits.length);
  let suitColor = suitIndex === 0 || suitIndex === 1 ? "red" : "black";
  console.log("Selected suit:", suits[suitIndex]); // Log the selected suit

  cardSuits.forEach(cardSuit => {
    cardSuit.innerHTML = suits[suitIndex];
    cardSuit.style.color = suitColor;
  });

  let cardValue = document.getElementById("card-value");
  let cardValueIndex = Math.floor(Math.random() * ranks.length);
  cardValue.innerHTML = ranks[cardValueIndex];
  cardValue.style.color = suitColor;
}
