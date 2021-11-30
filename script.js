
// go back and replace with random number generator
let firstCard = 11;
let secondCard = 9;

let sum = firstCard + secondCard;
console.log("Contents of sum: ", sum);

// track win state for game
let hasBlackjack = false;

let isAlive = true;

//to win total must be exactly 21
if (sum <= 20) {
    console.log("Contents of sum: ", sum);
    console.log("Cards less than 21. Do you want to draw a new card?");
    console.log("IsAlive: ", isAlive)
} else if (sum === 21) {
    hasBlackjack = true;
    isAlive = false;
    console.log("Contents of sum: ", sum);
    console.log("Exactly 21! You've got blackjack!");
    console.log("IsAlive: ", isAlive)
} else {
    isAlive = false;
    console.log("Contents of sum: ", sum);
    console.log("Over 21! Sorry, you are out of the game!");
    console.log("IsAlive: ", isAlive)
}