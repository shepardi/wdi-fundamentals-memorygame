
//array to store our cards
let cards = ["queen", "queen", "king", "king"];

//empty array
let cardsInPlay = [];

//varaibles for cards the user flipped
let cardOne = cards[0];
let cardTwo = cards[1];

//add the cards to the cardsInPlay array
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

//Check if two cards have been played
if( cardsInPlay.length ===2){

	//check if 1st card in cardsInPlay array is equal to the second
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You have found a match!");
	}
	else{
		alert("Sorry, try again");
	}
}