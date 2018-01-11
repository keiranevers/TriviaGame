$(document).ready(function(){

function initializeGame() {

//set variables to play game

	var startGame;
	var clock 0;
	var questionArray = 
	['What is the piece of plastic covering at the ends of your shoelace, so you don’t have to moisten them with spit to thread them through your shoelace holes?'
	,'What are the posts in the parking lot that lets wheelchairs and shopping carts go through, but not your car?'
	,'What are the non-alphanumeric, non-punctuation characters, usually used when you want to write something that you don’t want your children to read?'
	,'What is the metal band that connects the pencil eraser to the end of the pencil?'
	,'What is the leather loop in your belt or watch strap that keeps the end in place after it has been fastened through the buckle?'
	,'What is the groove made by a sawblade, ie, the width of a cut?'
	,'What is the small indentation at the bottom of a wine bottle, designed to give the bottle extra strength (so they say....), and also, to make it look like it has more wine than it really does (yeah, I hate that.....)?'
	,'What is the vertical groove between your lip and nose that separates your left and right mustache, unless you’re Hitler, then it’s the part that your mustache covers?'
	,'What are the points of light that you see behind your eyelids when you shut your eyes really hard?'
	,'What is that little piece of cartilage that sticks out at the front side of your ear?'];
	var answerArray = [
		["Langyard","Aglet","Eyelet","Puggle","Sangler"],
		["Bollard","Lenker","Dike","Channel Bar","Liripipe"],
		["Wing-dings","Tarnmark","Dingbat","Binger","Gudgeon"],
		["Nesh","Crottle","Tiffin","Ferrule","Hoggin"],
		["Keeper","Shofar","Cupre","Probang","Wittol"],
		["Dwal","Tiffin","Marlet","Dragomar","Kerf"],
		["Winebibber","Thrutch","Punt","Deceiver","Mim"],
		["Sternutator","Philtrum","Mallam","Dariole","Fankle"],
		["Famulus","Flocculents","Seraks","Starbuff","Phosphenes"],
		["Tragus","Shallop","Cerulean","Spurr","Ensorcell"]
	];

	var imageArray = 
	["<img id='image' class='rounded mx-auto d-block' src='assets/images/shoelace.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/steelpost.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/junkchars.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/eraserthing.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/bucklethingy.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/cutseam.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/bottlebottom.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/noselipgroove.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/eyestars.jpg'>"
	,"<img id='image' class='rounded mx-auto d-block' src='assets/images/earthingy.jpg'>"]
	var correctAnswer = ['Aglet','Bollard','Dingbat','Ferrule','Keeper','Kerf','Punt','Philtrum','Phosphenes','Tragus'];
	var selectedAnswer;
	var correctCount = 0;
	var incorrectCount = 0;
	var score = 0;

}

initializeGame();

//start the game when click start button - start the clock

$('#start').on('click', startGame), function(event) {
	setInterval(clock, 100*1000); //setting clock interval 100 seconds (avg 10 seconds per question)
	generateQuestion();

}

//after selection of answer, go to next question, answer and image

$('#question'), function(event) {
	nextQuestion(); //next question, answer and image
}

//


}
