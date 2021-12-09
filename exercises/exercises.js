// create castle object with one bool, one string, one number, one array

let castle ={
    name: "Castle in Norway",
    dailyRate: 707,
    entireHome: true,
    features: ["kitchen", "free parking", "wifi", "hot tub"]
}

console.log(castle.name);
console.log(castle.features);


// intro to objects

let course = {
    title: "Learn CSS Grid for Free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

// use dot notation to access contents
console.log(course.length);

// here is how bracket notation works
console.log( course["tags"]);


// let likesDocumentaries = false;
// let likesStartUps = true;

// if(likesDocumentaries === true || likesStartUps ===true){
//     recommendMovie();
// }

// function recommendMovie(){
//     console.log("Check this movie out..")
// }





// let hasSolvedChallenge = false;
// let hasHintsLeft = false;

// if( hasSolvedChallenge ===false && hasHintsLeft ===false){
//     showSolution();
// }
// function showSolution(){
//     console.log("Showing the solution...")
// }

//logical operators
// let hasCompletedCourse = true;
// let givesCertificate = true;

// // note, adding === true is not necessary because the variables are bools
// if(hasCompletedCourse === true && givesCertificate === true){
//     generateCertificate();
// }
// function generateCertificate(){
//     console.log("Generating certificate...")
// }


// // generating random numbers

// function rollDice(){
// // 1-6 range - have to +1 to eliminate 0 result
// let randomNum = Math.floor(Math.random() * 6) + 1;
// console.log(randomNum);
// return randomNum;
// }

// rollDice();

// // 0-6 range
// let randomNum = Math.floor(Math.random() * 7);
// console.log(randomNum);

// // drops the decimals
// let flooredNumber = Math.floor(3.45632);
// console.log(flooredNumber);

// // returns randome between 0 and 0.999999999
// // multiply by x allows range to be between 0 and up to but not inclusive of x
// let randomNumber = Math.random() * 6;
// console.log(randomNumber);




// let player1Time = 102;
// let player2Time = 107;

// function getFastestRaceTime(){
//     if(player1Time < player2Time){
//         return player1Time;
//     } else if (player2Time < player1Time){
//         return player2Time;
//     } else{
//         return player1Time;
//     }
// }

// let fastestRace = getFastestRaceTime();

// console.log(fastestRace)

// function getTotalRaceTime(){
//     return player1Time + player2Time;
// }

// let totalRaceTime = getTotalRaceTime();
// console.log(totalRaceTime);


// // iterate through array and output to DOM
// let sentence = ["Hello", "my", "name", "is", "Per"];
// let greetingEL= document.getElementById("greeting-el");

// for (let n=0; n<sentence.length; n++){
  
//     greetingEL.textContent += sentence[n] + " ";
// }

// let cards = [7, 3, 9];

// for (let n=0; n<cards.length; n++){
//     console.log(cards[n]);
// }


// for (let n=10; n<101; n+=10){
//     console.log(n);
// }



// // start at 1, stop at 10, increment by 1
// for (let count =1; count<11; count+=1) {
//     console.log(count);
// }

// iterate through an array
// let messages =[
//     "hey, how's it going?",
//     "I'm great, how about you?",
//     "All good. Been working on my portfolio lately.",
//     "Same here!"
// ]

// for (n=0; n<4; n+=1){
//     console.log(messages[n]);
// }

// messages.push("Same here!")
// console.log(messages);

// // remove last item in array
// messages.pop();
// console.log(messages);



// // add items to array

// let cards = [7,4];
// // add items to array
// cards.push(6);
// console.log(cards);



// let description = [
// "Amanda Toop",
// 40,
// true
// ]


// let experience = [
//     "CEO at Scrimba",
//     "Frontend developer at Xeneta",
//     "People counter for Norstat"
// ]

// console.log(experience[1]);
// console.log(experience[2]);
// console.log(experience[0]);

// console.log(experience.length); //3 in this example

// let myExperience = [
//     "Smith College BA in Art, minor in Computer Science", 
//     "University of Washington Helpdesk Analyst", 
//     "Frontend Mentor challenge xyz"
// ]

// console.log(myExperience[0]);







// let age = 101;

// console.log("Age: ", age);

// if (age < 100) {
//     console.log("Not elligible for birthday card!")
// } else if (age === 100) {
//     console.log("Here's your birthday card from the king!")
// } else {
//     console.log("You are over 100 - you already have a card!")
// }








// console.log("Age: ", age);

// if (age >= 21) {
//     console.log("You are old enough to enter a bar.")
// } else {
//     console.log("You are under 21.")
// }