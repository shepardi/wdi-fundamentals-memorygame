
//array to store our card objects, each index contains a card object
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
function flipCard(){

	//use getAttribute method to get data-id
	let cardsID = this.getAttribute('data-id');

	//add the card flipped into the cardsInPlay array
	cardsInPlay.push(cards[cardsID].rank);

	//use setAttribute method to update the src image on the card just clicked
	this.setAttribute('src', cards[cardsID].cardImage);

	//call check for match function
	if(cardsInPlay.length ===2){
		checkForMatch();
	}
}

//creat a gameboard function that populates our game with cards
function createBoard(){

	for(let i = 0; i < cards.length; i++){

		//create each card
		const cardElement = document.createElement('img');

		//set attribute on the cardElement to have src to images/back.png
		cardElement.setAttribute('src', 'images/back.png');

		//Set the cards data=id attribute to current index of ard array
		cardElement.setAttribute('data-id', i);

		//add an eventListener to teh cardelement
		cardElement.addEventListener('click', flipCard);

		//append the cardElement to the gameboard
		document.getElementById('game-board').appendChild(cardElement);

	}
}

createBoard();








