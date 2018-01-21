$(document).ready(function(){


//set variables to play game
var questionArray = 
[
	{
	question: 'What is the piece of plastic covering at the ends of your shoelace, so you don’t have to moisten them with spit to thread them through your shoelace holes?',
	answerArray: ["Langyard","Aglet","Eyelet","Puggle","Sangler"],
	correctAnswer: "Aglet",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/shoelace.jpg'>"
	},
	{
	question: 'What are the posts in the parking lot that lets wheelchairs and shopping carts go through, but not your car?',
	answerArray: ["Bollard","Lenker","Dike","Channel Bar","Liripipe"],
	correctAnswer: "Bollard",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/steelpost.jpg'>"
	},
	{
	question: 'What are the non-alphanumeric, non-punctuation characters, usually used when you want to write something that you don’t want your children to read?',
	answerArray: ["Wing-dings","Tarnmark","Dingbat","Binger","Gudgeon"],
	correctAnswer: "Dingbat",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/junkchars.jpg'>"
	},
	{
	question: 'What is the metal band that connects the pencil eraser to the end of the pencil?',
	answerArray: ["Nesh","Crottle","Tiffin","Ferrule","Hoggin"],
	correctAnswer: "Ferrule",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/eraserthing.jpg'>",
	},
	{
	question: 'What is the leather loop in your belt or watch strap that keeps the end in place after it has been fastened through the buckle?',
	answerArray: ["Keeper","Shofar","Cupre","Probang","Wittol"],
	correctAnswer: "Keeper",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/bucklethingy.jpg'>"
	},
	{
	question: 'What is the groove made by a sawblade, ie, the width of a cut?',
	answerArray: ["Dwal","Tiffin","Marlet","Dragomar","Kerf"],
	correctAnswer: "Kerf",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/cutseam.jpg'>"
	},
	{
	question: 'What is the small indentation at the bottom of a wine bottle, designed to give the bottle extra strength (so they say....), and also, to make it look like it has more wine than it really does (yeah, I hate that.....)?',
	answerArray: ["Winebibber","Thrutch","Punt","Deceiver","Mim"],
	correctAnswer: "Punt",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/bottlebottom.jpg'>"
	},
	{
	question: 'What is the vertical groove between your lip and nose that separates your left and right mustache, unless you’re Hitler, then it’s the part that your mustache covers?',
	answerArray: ["Sternutator","Philtrum","Mallam","Dariole","Fankle"],
	correctAnswer: "Philtrum",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/noselipgroove.jpg'>"
	},
	{
	question: 'What are the points of light that you see behind your eyelids when you shut your eyes really hard?',
	answerArray: ["Famulus","Flocculents","Seraks","Starbuff","Phosphenes"],
	correctAnswer: "Phosphenes",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/eyestars.jpg'>"
	},
	{
	question: 'What is that little piece of cartilage that sticks out at the front side of your ear?',
	answerArray: ["Tragus","Shallop","Cerulean","Spurr","Ensorcell"],
	correctAnswer: "Tragus",
	image: "<img class='thumbnail rounded mx-auto d-block' src='assets/images/earthingy.jpg'>"

	}
];

$('#start').on('click', function(){
  game.start();
});
// End my game when my Done btn clicked
$('#done').on('click', function(){
  game.countDown();
});

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,
  // Setting my counter
  countDown: function(){
    game.counter--;
    $('#clock').html(game.counter)
    if(game.counter <= 0){
      game.done();
    }
    if($('#done').on('click', function(){
      game.done();
    }));
  },



  // start the game with a timer and add all the questions and answers
  start: function(){
    timer = setInterval(game.countDown, 1000)
    $('#start').hide();
    for(var i=0; i<questionArray.length; i++){
      $('#subwrapper').append(questionArray[i].image+'<h3>' + questionArray[i].question + '</h3>')
      for(var j=0; j < questionArray[i].answerArray.length; j++){
        $('#subwrapper').append("<input class='check-with-label' type='radio' name='question-"+i+"' value='"+questionArray[i].answerArray[j]+"'>  <label class='label-for-check'>"+ questionArray[i].answerArray[j]+"  </label></br>");
      }
    }
    $('<button id="done" class="btn btn-success btn-block" type="button" name="button-done">Done</button>').appendTo('#subwrapper');
  },
  // checking each input if it is a correct answer or wrong answer and incrementing my game.correct and game.incorrect
  done: function(){
    $.each($('input[name=radio]:checked').val(), function(){
      if($(this).val() == questionArray[0].correctAnswer){
        $("#correctCount").html(game.correct++);
      }
      else {
        $("#incorrectCount").html(game.incorrect++);
      }
    });
    $.each($('input[name="question-1"]:checked'), function(){
      if($(this).val() == questionArray[1].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-2"]:checked'), function(){
      if($(this).val() == questionArray[2].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-3"]:checked'), function(){
      if($(this).val() == questionArray[3].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-4"]:checked'), function(){
      if($(this).val() == questionArray[4].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-5"]:checked'), function(){
      if($(this).val() == questionArray[5].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-6"]:checked'), function(){
      if($(this).val() == questionArray[6].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-7"]:checked'), function(){
      if($(this).val() == questionArray[7].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-8"]:checked'), function(){
      if($(this).val() == questionArray[8].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-9"]:checked'), function(){
      if($(this).val() == questionArray[9].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    $.each($('input[name="question-10"]:checked'), function(){
      if($(this).val() == questionArray[10].correctAnswer){
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });
    // Show the results after checking all answers
    this.result();
  },
  // Clearing my timer and remove it from page, adding correct answwers and incorrectanswers and Unanswered questions to the user
  result: function(){
    clearInterval(timer);
    $('#subwrapper h2').remove();
    $('#subwrapper').html('<h2>All Done!</h2>').addClass('all-done')
    $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    // display all the Unanswered questions
    $('#subwrapper').append("<h3>Unanswered: "+(questionArray.length-(this.incorrect+this.correct))+"<h3>");
  },
}



// function startClock() {
// 	var clock = 10;
// 		$("#start").on("click", function() {
// 			var startClock = setInterval(function() {
// 			$("#clock").html(clock);
// 			$("#start").hide();
// 			$("#quiz").show();
// 			generateQuestion();
// 			clock--
// 				if (clock < 0) {
// 					clearInterval(startClock);
// 				}
// 			}, 1000);
// 		})
// 	}
// function generateQuestion(i) {
// 	$("#submit").show();

// 	for (i = 0; i < questionArray.length; i++) {
	
// 		if (i == questionArray.length) {
// 			var gameOver = true;
// 			$("#game-over").html("Game Over!!")
// 			restart.show();
// 		} 
// 			else  
// 				if (i < questionArray.length) {
// 				$("#image").html(questionArray[i].image);
// 				$('#question').html(questionArray[i].question);
// 				$("#answer").html(
// 			  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[i].answerArray[0] + "</span></label>"+ 
// 			  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[i].answerArray[1] + "</span></label>"+ 
// 			  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[i].answerArray[2] + "</span></label>"+ 
// 			  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[i].answerArray[3] + "</span></label>"+ 
// 			  	"<label class='container'><input type='radio' name='radio'><span id='selected' class='checkmark'>"+ questionArray[i].answerArray[4] + "</span></label>");
			
// 				userAnswer = (questionArray[i].querySelector('input[name=radio'+i+']:checked')||{}).value;	
// 				console.log(userAnswer);
// 			}
// 		}
// 	}

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











