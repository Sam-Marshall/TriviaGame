window.onload = function(){
			
	var $submitButton = $("#submitButton");
	var $nextQuestion = $("#nextQuestion");
	var $showResults = $("#showResults");
	var $triviaForm = $("#triviaForm");
	var $questionCounter = $("#questionCounter");
	var $optionOne = $("#optionOne");
	var $optionTwo = $("#optionTwo");
	var $optionThree = $("#optionThree");
	var $optionFour = $("#optionFour");
	var $hiddenStuff = $("#hiddenStuff");
	var $timer = $("#timer");
	var $entireTriviaContents = $("#entireTriviaContents");
	var $messageOut = $(".messageOut");
	var $correctAnswers = $(".correctAnswers");
	var $mainImage = $("#mainImage");
	var $incorrectAnswers = $(".incorrectAnswers");
	var $buttonHere = $(".buttonHere");
	var $startButton = $("#startButton");
	var $song = $("#hpSong");
	var $timerDiv = $("#timerDiv");
	var $questionCounterDiv = $("#questionCounterDiv");
	var $jumbotron = $(".jumbotron");
	var $startButtonDiv = $("#startButtonDiv");

	var correctAnswer = "";
	var userGuess = "";
	var answerText = "";
	var questionNumber = 10;
	var questionsCorrect = 0;
	var questionsIncorrect = 0;
	var timerCount = 20;
	var timerResetValue = 20;
	var intervalID;
	var questionCounter = 0;
	var gameOver = false;

	var questionArray = [
				
				{	"Option" : 1,
					"Answer" : "A",
					"OptionOne" : "He eats Gillyweed",
					"OptionTwo" : "He transfigures into a shark",
					"OptionThree" : "He performs a bubble-head charm",
					"OptionFour" : "He kisses a mermaid",
					"Question" : "How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?",
					"AnswerText" : "HARRY EATS GILLYWEED to breathe underwater during the second task of the Triwizard Tournament",
					"ImageLocation" : "./assets/images/gillyweed.gif"}
				,

				{	"Option" : 2,
					"Answer" : "B",
					"OptionOne" : "Avada Kedavra",
					"OptionTwo" : "Sectumsempra",
					"OptionThree" : "Cruciatus Curse",
					"OptionFour" : "Imperius Curse",					
					"Question" : "Which of these is NOT one of the Unforgivable Curses?",
					"AnswerText" : "SECTUMSEMPRA is NOT one of the Unforgivable Curses",
					"ImageLocation" : "./assets/images/sectumsempra.gif-c200"}
				,

				{	"Option" : 3,
					"Answer" : "D",
					"OptionOne" : "The Grey Lady",
					"OptionTwo" : "The Fat Friar",
					"OptionThree" : "The Bloody Baron",
					"OptionFour" : "The Fat Lady",					
					"Question" : "Who guards the entrance to the Gryffindor common room?",
					"AnswerText" : "THE FAT LADY guards the entrance to the Gryffindor common room",
					"ImageLocation" : "./assets/images/fatLady.gif"}
				,

				{	"Option" : 4,
					"Answer" : "B",
					"OptionOne" : "Mad-Eye Moody",
					"OptionTwo" : "Cornelius Fudge",
					"OptionThree" : "Professor Snape",
					"OptionFour" : "Remus Lupin",					
					"Question" : "Who is NOT a member of the Order of the Phoenix?",
					"AnswerText" : "CORNELIUS FUDGE is NOT a member of the Order of the Phoenix",
					"ImageLocation" : "./assets/images/orderOfPheonix.gif"}			
				,

				{	"Option" : 5,
					"Answer" : "C",
					"OptionOne" : "Bleaker",
					"OptionTwo" : "Muggle",
					"OptionThree" : "Squib",
					"OptionFour" : "Boggart",					
					"Question" : "A wizard-born who cannot do magic is known as a:",
					"AnswerText" : "SQUIBS are born into a wizarding family, but are unable to do magic",
					"ImageLocation" : "./assets/images/squib.gif"}	
				,

				{	"Option" : 6,
					"Answer" : "C",
					"OptionOne" : "Relashio",
					"OptionTwo" : "I solemnly swear that I am up to no good",
					"OptionThree" : "Mischief managed",
					"OptionFour" : "Obliviate",					
					"Question" : "What does one say to close the Marauder's Map and make it blank again?",
					"AnswerText" : "Saying 'MISCHIEF MANAGED' makes the Marauder's Map appear blank to prying eyes",
					"ImageLocation" : "./assets/images/mischiefManaged.gif"}
				,

				{	"Option" : 7,
					"Answer" : "A",
					"OptionOne" : "In the Forbidden Forest",
					"OptionTwo" : "At the Ministry of Magic",
					"OptionThree" : "In the Chamber of Secrets",
					"OptionFour" : "In the Triwizard Cup hedge maze",					
					"Question" : "Where do Harry and Ron eventually find the missing flying Ford Anglia?",
					"AnswerText" : "The quirky flying car finds its new home in THE FORBIDDEN FOREST",
					"ImageLocation" : "./assets/images/fordAnglia.gif"}	
				,

				{	"Option" : 8,
					"Answer" : "D",
					"OptionOne" : "Chaser",
					"OptionTwo" : "Keeper",
					"OptionThree" : "Beater",
					"OptionFour" : "Seeker",					
					"Question" : "What Quidditch position does Harry play?",
					"AnswerText" : "Harry plays SEEKER for the Gryffindor Quidditch team",
					"ImageLocation" : "./assets/images/seeker.gif"}		
				,

				{	"Option" : 9,
					"Answer" : "B",
					"OptionOne" : "Fluffy",
					"OptionTwo" : "Norbert",
					"OptionThree" : "Buckbeak",
					"OptionFour" : "Smaug",					
					"Question" : "What is the name of the dragon that Hagrid hatches from an egg in 'Harry Potter and the Sorcerer's Stone'?",
					"AnswerText" : "NORBERT is the name of Hagrid's briefly owned pet dragon",
					"ImageLocation" : "./assets/images/norbert.gif"}	
				,

				{	"Option" : 10,
					"Answer" : "C",
					"OptionOne" : "Inferi",
					"OptionTwo" : "Giants",
					"OptionThree" : "Dementors",
					"OptionFour" : "Centaurs",					
					"Question" : "Name the magical creatures who guard Azkaban prison:",
					"AnswerText" : "DEMENTORS guard the prison cells at Azkaban",
					"ImageLocation" : "./assets/images/dementors.gif"}																																						

			];

	function getNewQuestion(){

			$entireTriviaContents.css('display', 'block');
			$hiddenStuff.css('display', 'none');
				
			//clear form contents for new question				
			$triviaForm.each(function(){
				this.reset();
			});				

			//check to see if all questions have been asked
			if (questionCounter < questionNumber){

				userGuess = "";

				$nextQuestion.html(questionArray[questionCounter].Question);
				$questionCounter.html("Question " + questionArray[questionCounter].Option);
				correctAnswer = questionArray[questionCounter].Answer;
				answerText = questionArray[questionCounter].AnswerText;
				$optionOne.html(questionArray[questionCounter].OptionOne);
				$optionTwo.html(questionArray[questionCounter].OptionTwo);
				$optionThree.html(questionArray[questionCounter].OptionThree);
				$optionFour.html(questionArray[questionCounter].OptionFour);

			}
			
			//if all questions have been asked    
			else if (questionCounter === questionNumber){
			    	
			    gameOver = true;
			    stopTimer();
			    informationScreen();
			    
			}

	}

	function timerCountDown(){
				
			intervalID = setInterval(decrement, 1000);

	}

	function decrement() {

		if (questionCounter < questionNumber){

			timerCount -- ;

			$timer.html("Time Remaining: " + timerCount + " Seconds");

			if (timerCount === 0) {

				stopTimer();
				questionsIncorrect += 1;				
				questionCounter += 1;
				$hiddenStuff.css('display', 'block');
				$entireTriviaContents.css('display', 'none');
				$messageOut.html("Time's up!");
				$correctAnswers.html(answerText);
				$mainImage.attr('src', questionArray[questionCounter-1].ImageLocation);
				setTimeout(getNewQuestion, 6000);
				timerCount = timerResetValue;
				setTimeout(timerCountDown, 5000);
			      
			}
		
		}
		
		else if (questionCounter === questionNumber){
			  	
			  	stopTimer();
			  	gameOver = true;
			  
		}
			   
	}

	function stopTimer(){
				
			clearInterval(intervalID);			

	}
			
	function informationScreen(){
				
			$entireTriviaContents.css('display', 'none');
			$hiddenStuff.css('display', 'block');				
			
			if (gameOver === true){

				checkWizardLevel();
				$correctAnswers.html("Correct Answers: " + questionsCorrect);
				$incorrectAnswers.html("Incorrect Answers: " + questionsIncorrect);
					
				var a = $("<button> Try Again </button>");
				a.addClass("reset btn btn-lg btn-danger center-block");
				$buttonHere.html(a);

				$(".reset").on('click', function(){
					event.preventDefault();
					$entireTriviaContents.css('display', 'block');
					correctAnswer = "";
					userGuess = "";
					answerText = "";
					questionsCorrect = 0;
					questionsIncorrect = 0;
					timerCount = 20;
					questionCounter = 0;
					gameOver = false;
					$hiddenStuff.css('display', 'none');
					$showResults.empty();
					$messageOut.html("");
					$correctAnswers.html("");
					$incorrectAnswers.html("");
					$buttonHere.html("");
					getNewQuestion();
					timerCountDown();
				});
			}

			else if (gameOver === false){

				$mainImage.attr('src', questionArray[questionCounter-1].ImageLocation);
				setTimeout(getNewQuestion, 6000);
				timerCount = timerResetValue;
				setTimeout(timerCountDown, 5000);

			}		

	}
	function checkWizardLevel(){
		if (questionsCorrect >= 9){
			$messageOut.html("Result: Fully Trained Witch/Wizard<br><h4>You sure know your stuff! Great Job!</h4>");
			$mainImage.attr('src', './assets/images/fullyTrained.gif');		
		}
		else if (questionsCorrect < 9 && questionsCorrect >= 5){
			$messageOut.html("Result: Fifth Year Student<br><h4>Not too bad! Study hard for your O.W.L.s, and you'll soon be top of the class.</h4>");
			$mainImage.attr('src', './assets/images/fifthYear.gif');	
		}
		else if(questionsCorrect < 5 && questionsCorrect >= 2){
			$messageOut.html("Result: First Year Student<br><h4>You're definitely new to the wizarding world. Never stop learning!</h4>");
			$mainImage.attr('src', './assets/images/firstYear.gif');	
		}
		else{
			$messageOut.html("Result: Squib<br><h4>Well we can't all be Hermione. Reach out to Kwikspell, and quickly!");
			$mainImage.attr('src', './assets/images/squibResult.gif');	
		}
	}

	$startButton.on('click', function(){
		$song.attr('src', './assets/images/HP.mp3');
		$timerDiv.css('display', 'block');
		$questionCounterDiv.css('display', 'block');
		$jumbotron.css('display', 'block');
		getNewQuestion();
		timerCountDown();
		$startButtonDiv.css('display', 'none');
	})

	$submitButton.on('click', function(){
				
			event.preventDefault();
			userGuess = ($(".option:checked").val());
					
			if (userGuess !== undefined){

				if (correctAnswer === userGuess){

					questionsCorrect += 1;
					questionCounter += 1;
					$messageOut.html("You Got It!");
					$correctAnswers.html(answerText);
					stopTimer();	

				}

				else{

					questionsIncorrect += 1;
					questionCounter += 1;
					$messageOut.html("Incorrect!");
					$correctAnswers.html(answerText);
					stopTimer();

				}

				informationScreen();


			}

	});

}
