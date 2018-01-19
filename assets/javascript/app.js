$(document).ready(function(){


//set variables to play game
	var questionArray = 
	[
		{
		question: 'What is the piece of plastic covering at the ends of your shoelace, so you don’t have to moisten them with spit to thread them through your shoelace holes?',
		answerArray: ["Langyard","Aglet","Eyelet","Puggle","Sangler"],
		correctAnswer: 1,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/shoelace.jpg'>"
		},
		{
		question: 'What are the posts in the parking lot that lets wheelchairs and shopping carts go through, but not your car?',
		answerArray: ["Bollard","Lenker","Dike","Channel Bar","Liripipe"],
		correctAnswer: 0,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/steelpost.jpg'>"
		},
		{
		question: 'What are the non-alphanumeric, non-punctuation characters, usually used when you want to write something that you don’t want your children to read?',
		answerArray: ["Wing-dings","Tarnmark","Dingbat","Binger","Gudgeon"],
		correctAnswer: 2,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/junkchars.jpg'>"
		},
		{
		question: 'What is the metal band that connects the pencil eraser to the end of the pencil?',
		answerArray: ["Nesh","Crottle","Tiffin","Ferrule","Hoggin"],
		correctAnswer: 3,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/eraserthing.jpg'>",
		},
		{
		question: 'What is the leather loop in your belt or watch strap that keeps the end in place after it has been fastened through the buckle?',
		answerArray: ["Keeper","Shofar","Cupre","Probang","Wittol"],
		correctAnswer: 0,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/bucklethingy.jpg'>"
		},
		{
		question: 'What is the groove made by a sawblade, ie, the width of a cut?',
		answerArray: ["Dwal","Tiffin","Marlet","Dragomar","Kerf"],
		correctAnswer: 4,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/cutseam.jpg'>"
		},
		{
		question: 'What is the small indentation at the bottom of a wine bottle, designed to give the bottle extra strength (so they say....), and also, to make it look like it has more wine than it really does (yeah, I hate that.....)?',
		answerArray: ["Winebibber","Thrutch","Punt","Deceiver","Mim"],
		correctAnswer: 2,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/bottlebottom.jpg'>"
		},
		{
		question: 'What is the vertical groove between your lip and nose that separates your left and right mustache, unless you’re Hitler, then it’s the part that your mustache covers?',
		answerArray: ["Sternutator","Philtrum","Mallam","Dariole","Fankle"],
		correctAnswer: 1,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/noselipgroove.jpg'>"
		},
		{
		question: 'What are the points of light that you see behind your eyelids when you shut your eyes really hard?',
		answerArray: ["Famulus","Flocculents","Seraks","Starbuff","Phosphenes"],
		correctAnswer: 4,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/eyestars.jpg'>"
		},
		{
		question: 'What is that little piece of cartilage that sticks out at the front side of your ear?',
		answerArray: ["Tragus","Shallop","Cerulean","Spurr","Ensorcell"],
		correctAnswer: 0,
		image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/earthingy.jpg'>"

		}
	];

var questionCounter = 0;
var correctCount = 0;
var incorrectCount = 0;
var gameOver = false;
var score = (correctCount*10) + "%";
var clock = 10;

startGame();

function startGame() {
		generateQuestion();
		$("#start-over").hide();
		$("#start").on("click", function() {
			var startClock = setInterval(function() {
			$("#clock").html(clock);
			$("#start").hide();
			clock--
			if (clock < 0) {
				clearInterval(startClock);
			}
		}, 1000);
	})
}

function generateQuestion() {
	var question = questionArray[questionCounter].question;
	$("#image").html(questionArray[questionCounter].image);
	$('#question').html(questionArray[questionCounter].question);
	var answers = questionArray[questionCounter].answerArray;
  	$("#answer").html(
  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[questionCounter].answerArray[0] + "</span></label>" +
  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[questionCounter].answerArray[1] + "</span></label>" +
  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[questionCounter].answerArray[2] + "</span></label>" +
  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[questionCounter].answerArray[3] + "</span></label>" +
  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[questionCounter].answerArray[4] + "</span></label>");
}

function incorrectCount() {
	$("#incorrectCount").html(correctCount);
	incorrectCount++;
	var answer = questionArray[questionCounter].correctAnswer;
	questionCounter++;
}

function timeOut() {
	if (clock == 0) {
		gameOver = true;
	}
}

$("#next").on("click", function() {
	if (!gameOver) {
		this.answer = $("#answer").val();
		if (this.answer == undefined) {
			$("#message").html("Please, select an answer.");
		} else {
			if (this.answer == questionArray[questionCounter].correctAnswer) {
				correctCount++;
			} else { 
				incorrectCount++;
			}
		questionCounter++;
		if (questionCounter < questionArray.length) {
			generateQuestion();
		} else {
			gameOver = true;
			$("#next").hide();
			$("#start-over").html(resetGame);
		}
		}
	} else {
		gameOver = false;
	}
});

});


// function correctCount() {
// 	$("#correctCount").append("<a>"+correctCount+"</a>");
// 	correctCount++;
// 	var correctAnswer = questionArray[questionCount].correctAnswer;
// 	setTimeout(nextQuestion, 4000);
// 	questionCounter++;
// 	nextQuestion();
// }

// function incorrectCount() {
// 	$("#incorrectCount").append("<a>"+incorrectCount+"</a>");
// 	correctCount++;
// 	var correctAnswer = questionArray[questionCount].correctAnswer;
// 	setTimeout(nextQuestion, 4000);
// 	questionCounter++;
// 	nextQuestion();
// }

// function nextQuestion () {
// 	if (questionCounter < questionArray.length) {
// 		questionContent();

// 	}
// }







