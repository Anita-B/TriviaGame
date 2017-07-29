$(document).ready(function() {

// Make our variables global to the runtime of our application
//  Set our number counter to 20.
var seconds = 15;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;
var slideNum = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

var batgirl = {
	"name": "Batgirl",
	"image": "batgirl.png",
	"question": "Dr. Barbara Gordon Ph.D. is a career woman with a doctorate in library science, and head of Gotham City public library",
	"answer1": "Catwoman",
	"answer2": "Bumblebee",
	"answer3": "Supergirl",
	"answer4": "Batgirl",
	"correct": "Batgirl"
}
var bumblebee = {
	"name": "Bumblebee",
	"image": "bumblebee.png",
	"question": "Scientist Karen Beecher is semi-retired from superheroics on Team Titans, and works at S.T.A.R. Labs, where she designs non-lethal weaponry",
	"answer1": "Bumblebee",
	"answer2": "Catwoman",
	"answer3": "Harley Quinn",
	"answer4": "Starfire",
	"correct": "Bumblebee"
}
var catwoman = {
	"name": "Catwoman",
	"image": "catwoman.png",
	"question": "A mysterious burglar and jewel thief",
	"answer1": "Batgirl",
	"answer2": "Harley Quinn",
	"answer3": "Catwoman",
	"answer4": "Katana",
	"correct": "Catwoman"
}
var harley_quinn = {
	"name": "Harley Quinn",
	"image": "harley_quinn.png",
	"question": "Poison Ivy's best friend",
	"answer1": "Catwoman",
	"answer2": "Katana",
	"answer3": "Harley Quinn",
	"answer4": "Hawkgirl",
	"correct": "Harley Quinn"
}
var hawkgirl = {
	"name": "Hawkgirl",
	"image": "hawkgirl.png",
	"question": "Owes her powers to a belt of Nth metal. It grants the power of flight, superhuman strength, super-acute vision, and an enhanced healing/regeneration ability",
	"answer1": "Hawkgirl",
	"answer2": "Katana",
	"answer3": "Starfire",
	"answer4": "Bumblebee",
	"correct": "Hawkgirl"
}
var katana = {
	"name": "Katana",
	"image": "katana.png",
	"question": "Katana’s sword is called",
	"answer1": "Soultaker",
	"answer2": "Sakana",
	"answer3": "Oracle",
	"answer4": "George",
	"correct": "Soultaker"
}
var poison_ivy = {
	"name": "Poison Ivy",
	"image": "poison_ivy.png",
	"question": "Dr. Pamela Lillian Isley, PhD is a botanist who steals ancient egyptian herbs, is poisoned by her partner in crime, and becomes immune to all natural toxins and diseases",
	"answer1": "Hawkgirl",
	"answer2": "Poison Ivy",
	"answer3": "Starfire",
	"answer4": "Bumblebee",
	"correct": "Poison Ivy"
}
var starfire = {
	"name": "Starfire",
	"image": "starfire.png",
	"question": "Koriand'r is a princess of the planet Tamaran. Tamaraneans constantly absorb ultraviolet radiation, which is converted to pure energy, and allows her to fly at supersonic speeds",
	"answer1": "Supergirl",
	"answer2": "Starfire",
	"answer3": "Bumblebee",
	"answer4": "Harley Quinn",
	"correct": "Starfire"
}
var supergirl = {
	"name": "Supergirl",
	"image": "supergirl.png",
	"question": "Kara Zor-El possesses vast superhuman strength, speed and stamina, invulnerability, flight, super breath, x-ray vision, telescopic and microscopic vision, freeze breath, heat vision, and super hearing",
	"answer1": "Supergirl",
	"answer2": "Wonder Woman",
	"answer3": "Starfire",
	"answer4": "Hawkgirl",
	"correct": "Supergirl"
}
var wonder_woman = {
	"name": "Wonder Woman",
	"image": "wonder_woman.png",
	"question": "This super hero was based on birth control pioneer Margaret Sanger",
	"answer1": "Supergirl",
	"answer2": "Katana",
	"answer3": "Wonder Woman",
	"answer4": "Batgirl",
	"correct": "Wonder Woman"
}
var convertStringtoVariable = {
	0: batgirl,
	1 : bumblebee,
	2 : catwoman,
	3 : harley_quinn,
	4 : hawkgirl,
	5 : katana,
	6 : poison_ivy,
	7 : starfire,
	8 : supergirl,
	9 : wonder_woman
}


// The setupGame method is called when the page first loads.
function setupGame() { console.log("in setupGame");

	//console.log("here setupGame");

	$("#startPage").show();
	$("#content").hide();
	$("#questionPage").hide();
	$("#answerPage").hide();
	$("#scorePage").hide();

}


//  The decrement function.
function decrement() { console.log("in decrement");

    //  Decrease number by one.
    seconds--;

    //  Show the number in the #countdown span tag.
    $("#countdown").html(seconds);


    //  Once number hits zero...
    if (seconds === 0) { 

    	//  ...run the stop function.
    	stop("outOfTime");
    }

}

//  The stop function
function stop(userInput) { console.log("in stop ");

    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId); 


	$("#questionHolder").html( $("#questionPage") );
	$("#questionHolder").hide();

	$("#QA").html( $("#answerPage") ); //append an object #answerPage



    // call next slide
  	switch (userInput) {
    case "outOfTime": //console.log("in case outOfTime");
    	$("#triviaResult").html("Out of time!");
    	unanswered++;
        break;
    case "answer1":
        if (convertStringtoVariable[slideNum].answer1 === convertStringtoVariable[slideNum].correct){
        	$("#triviaResult").html("Correct!");
        	correctAnswers++;
        }
        else {
        	$("#triviaResult").html("Nope!");
        	incorrectAnswers++;
        }
        break;
    case "answer2":
      	if (convertStringtoVariable[slideNum].answer2 === convertStringtoVariable[slideNum].correct){
        	$("#triviaResult").html("Correct!");
        	correctAnswers++;
        }
        else {
        	$("#triviaResult").html("Nope!");
        	incorrectAnswers++;
        }
        break;
    case "answer3":
    	if (convertStringtoVariable[slideNum].answer3 === convertStringtoVariable[slideNum].correct){
        	$("#triviaResult").html("Correct!");
        	correctAnswers++;
        }
        else {
        	$("#triviaResult").html("Nope!");
        	incorrectAnswers++;
        }
        break;
    case "answer4":
    	if (convertStringtoVariable[slideNum].answer4 === convertStringtoVariable[slideNum].correct){
        	$("#triviaResult").html("Correct!");
        	correctAnswers++;
        }
        else {
        	$("#triviaResult").html("Nope!");
        	incorrectAnswers++;
        }
        break;            
    default:
        
	}

	$("#triviaAnswer").html("The answer was " + convertStringtoVariable[slideNum].correct);
    $("#triviaImage").html("<img src=\"assets/images/" + convertStringtoVariable[slideNum].image + "\" alt=\"" + convertStringtoVariable[slideNum].name + "\" width=\"250px\" \">");
    console.log("<img src=\"assets/images/" + convertStringtoVariable[slideNum].image + "\" alt=\"" + convertStringtoVariable[slideNum].name + "\" width=\"250px\" \">");


	$("#answerPage").show();


    if (slideNum === 9){
    	setTimeout(displayScore, 2000);
    }
    else { console.log("in else");
    	slideNum++; console.log(slideNum);
    	seconds = 15;
    	setTimeout(displayTrivia, 2000);
    }

}



function displayTrivia() { console.log("in displayTrivia");


	if (slideNum === 0){
	 	$("#startPage").hide();
    	$("#content").show();
    }

    $("#answerHolder").html( $("#answerPage") );
	$("#answerHolder").hide();
	
	$("#QA").html( $("#questionPage") ); //append an object #questionPage

	

	//display questions in order 
	$("#triviaQuestion").html("<h4>" + convertStringtoVariable[slideNum].question + "</h4>");
	console.log(slideNum, "  ", convertStringtoVariable[slideNum].question);	

	//display possible answers
	$("#answer1").html(convertStringtoVariable[slideNum].answer1); 
	$("#answer2").html(convertStringtoVariable[slideNum].answer2);
	$("#answer3").html(convertStringtoVariable[slideNum].answer3);
	$("#answer4").html(convertStringtoVariable[slideNum].answer4);

	$("#questionPage").show();

	intervalId = setInterval(decrement, 1000); 
 		
}


function displayScore() {

	$("#QA").html( $("#scorePage") );

	$("#correctAnswer").html("Correct answers: " + correctAnswers);
	$("#incorrectAnswer").html("Incorrect answers: " + incorrectAnswers);
	$("#unanswered").html("Unanswered: " + unanswered);

	$("#scorePage").show();

}

	// function calls
	setupGame();

	// onclick events
	$("#startButton").on("click", function() { console.log("in startButton");

		//load first question
		displayTrivia();

	});


	$("#answer1").on("click", function() { console.log("in clicked answer1");
	   stop("answer1");
	});


	$("#answer2").on("click", function() { console.log("in clicked answer2");
	   stop("answer2");
	});


	$("#answer3").on("click", function() { console.log("in clicked answer3");
	   stop("answer3");
	});


	$("#answer4").on("click", function() { console.log("in clicked answer3");
	   stop("answer4");	
	});


	$("#startOverButton").on("click", function() { 
		seconds = 15;
		slideNum = 0;
		correctAnswers = 0;
		incorrectAnswers = 0;
		unanswered = 0;
		displayTrivia();
	});


});










