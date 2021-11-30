
// go back and replace with random number generator
let firstCard = 4;
let secondCard = 7;

let sum = firstCard + secondCard;
console.log("Contents of sum: ", sum);

//to win total must be exactly 21
if (sum < 21) {
    console.log("Contents of sum: ", sum);
    console.log("Cards less than 21. Do you want to draw a new card?");
} else if (sum === 21) {
    console.log("Contents of sum: ", sum);
    console.log("Exactly 21! You've got blackjack!");
} else {
    console.log("Contents of sum: ", sum);
    console.log("Over 21! Sorry, you are out of the game!");
}