
// go back and replace with random number generator
let firstCard = 11;
let secondCard = 11;

let sum = firstCard + secondCard;
console.log("Contents of sum: ", sum);

// track win state for game
let hasBlackjack = false;

// tracks if game is still active
let isAlive = true;

// for communicating to player
let message = "";

//to win total must be exactly 21
if (sum <= 20) {
    console.log("Contents of sum: ", sum);
    message="Cards less than 21. Do you want to draw a new card?";
    console.log(message);
    console.log("IsAlive: ", isAlive)
} else if (sum === 21) {
    hasBlackjack = true;
    isAlive = false;
    console.log("Contents of sum: ", sum);
    message = "Exactly 21! You've got blackjack!"
    console.log(message);
    console.log("IsAlive: ", isAlive)
} else {
    isAlive = false;
    console.log("Contents of sum: ", sum);
    message = "Over 21! Sorry, you are out of the game!";
    console.log(message);
    console.log("IsAlive: ", isAlive)
}