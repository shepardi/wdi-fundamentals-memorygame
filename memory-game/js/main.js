
//array to store our cards
let cards = ["queen", "queen", "king", "king"];

//empty array
let cardsInPlay = [];

//function that checks for a match
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		console.log("You found a match!");
	}else{
		console.log("Sorry, try again");
	}
}

//function to store the cards that were flipped
function flipCard(cardsID){

	console.log( "User flipped " + cards[cardsID]);

	//add the card flipped into the cardsInPlay array
	cardsInPlay.push(cards[cardsID]);

	//call check for match function
	if(cardsInPlay.length ===2){
		checkForMatch();
	}
}

//stimulate a card flip
flipCard(0);
flipCard(2);

