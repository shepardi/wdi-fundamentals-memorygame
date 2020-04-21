
//array to store our card objects
let cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//empty array
let cardsInPlay = [];

//function that checks for a match
function checkForMatch(){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	}else{
		alert("Sorry, try again");
	}
}

//function to store the cards that were flipped
function flipCard(cardsID){

	console.log( "User flipped " + cards[cardsID].rank);
	console.log( "User flipped " + cards[cardsID].suit);
	console.log( "User flipped " + cards[cardsID].cardImage);

	//add the card flipped into the cardsInPlay array
	cardsInPlay.push(cards[cardsID].rank);

	//call check for match function
	if(cardsInPlay.length ===2){
		checkForMatch();
	}
}

//stimulate a card flip
flipCard(0);
flipCard(2);

