
// go back and replace with random number generator
let firstCard = 11;
let secondCard = 10;

let sum = firstCard + secondCard;
console.log("Contents of sum: ", sum);

// track win state for game
let hasBlackjack = false;

// tracks if game is still active
let isAlive = true;

// for communicating to player
let message = "";
// for outputing messages to browser
let cardsEL = document.getElementById("cards-el");

// more dynamic way to grab css selectors that getElementbyID. must use # to specify is id. use . for classes
let sumEL = document.querySelector("#sum-el");
let messageEL = document.getElementById("message-el");

function startGame(){
//to win total must be exactly 21
cardsEL.textContent = "Cards: " + firstCard + ", " + secondCard;
sumEL.textContent = "Sum: " + sum;
    if (sum <= 20) {
        console.log("Contents of sum: ", sum);
        message="Cards less than 21. Do you want to draw a new card?";
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    } else if (sum === 21) {
        hasBlackjack = true;
        isAlive = false; 
        message = "Exactly 21! You've got blackjack!"
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    } else {
        isAlive = false;
        message = "Over 21! Sorry, you are out of the game!";
        messageEL.textContent = message;
        console.log("IsAlive: ", isAlive)
    }
}

