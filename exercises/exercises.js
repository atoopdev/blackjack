
// iterate through array and output to DOM
let sentence = ["Hello", "my", "name", "is", "Per"];
let greetingEL= document.getElementById("greeting-el");

for (let n=0; n<sentence.length; n++){
  
    greetingEL.textContent += sentence[n] + " ";
}

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