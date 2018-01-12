$(document).ready(function(){


//set variables to play game
	var questionCounter = 0;
	var correctCount = 0;
	var incorrectCount = 0;
	var score = 0;
	var startGame;
	var clock = 10;
	var questionArray = 
	[
		{
		question: 'What is the piece of plastic covering at the ends of your shoelace, so you don’t have to moisten them with spit to thread them through your shoelace holes?',
		answerArray: ["Langyard","Aglet","Eyelet","Puggle","Sangler"],
		correctAnswer: 'Aglet',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/shoelace.jpg'>"
		},
		{
		question: 'What are the posts in the parking lot that lets wheelchairs and shopping carts go through, but not your car?',
		answerArray: ["Bollard","Lenker","Dike","Channel Bar","Liripipe"],
		correctAnswer: 'Bollard',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/steelpost.jpg'>"
		},
		{
		question: 'What are the non-alphanumeric, non-punctuation characters, usually used when you want to write something that you don’t want your children to read?',
		answerArray: ["Wing-dings","Tarnmark","Dingbat","Binger","Gudgeon"],
		correctAnswer: 'Dingbat',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/junkchars.jpg'>"
		},
		{
		question: 'What is the metal band that connects the pencil eraser to the end of the pencil?',
		answerArray: ["Nesh","Crottle","Tiffin","Ferrule","Hoggin"],
		correctAnswer: 'Ferrule',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/eraserthing.jpg'>",
		},
		{
		question: 'What is the leather loop in your belt or watch strap that keeps the end in place after it has been fastened through the buckle?',
		answerArray: ["Keeper","Shofar","Cupre","Probang","Wittol"],
		correctAnswer: 'Keeper',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/bucklethingy.jpg'>"
		},
		{
		question: 'What is the groove made by a sawblade, ie, the width of a cut?',
		answerArray: ["Dwal","Tiffin","Marlet","Dragomar","Kerf"],
		correctAnswer: 'Kerf',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/cutseam.jpg'>"
		},
		{
		question: 'What is the small indentation at the bottom of a wine bottle, designed to give the bottle extra strength (so they say....), and also, to make it look like it has more wine than it really does (yeah, I hate that.....)?',
		answerArray: ["Winebibber","Thrutch","Punt","Deceiver","Mim"],
		correctAnswer: 'Punt',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/bottlebottom.jpg'>"
		},
		{
		question: 'What is the vertical groove between your lip and nose that separates your left and right mustache, unless you’re Hitler, then it’s the part that your mustache covers?',
		answerArray: ["Sternutator","Philtrum","Mallam","Dariole","Fankle"],
		correctAnswer: 'Philtrum',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/noselipgroove.jpg'>"
		},
		{
		question: 'What are the points of light that you see behind your eyelids when you shut your eyes really hard?',
		answerArray: ["Famulus","Flocculents","Seraks","Starbuff","Phosphenes"],
		correctAnswer: 'Phosphenes',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/eyestars.jpg'>"
		},
		{
		question: 'What is that little piece of cartilage that sticks out at the front side of your ear?',
		answerArray: ["Tragus","Shallop","Cerulean","Spurr","Ensorcell"],
		correctAnswer: 'Tragus',
		image: "<img id='image' class='rounded mx-auto d-block' src='assets/images/earthingy.jpg'>"

		}
	];

function startGame() {
	$("#start").on("click", generateQuestion);

}

function generateQuestion() {
		startGame();
		$(".clock").html(clock);
		$("#question").append("<p> question</p>");
		$("#answer").html(answerArray);
		$("#image").html(image);
	}
});

