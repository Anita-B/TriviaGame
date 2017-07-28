// Creating a giant triviaGame object that will house all of our logic and variables.
var triviaGame = {

	// Object of all words that can be chosen, along with info such as their picture and a song clip.
  	characters: {
	  	batgirl: {
	  		name: "Batgirl",
			image: "batgirl.png",
			question: "Dr. Barbara Gordon Ph.D. is a career woman with a doctorate in library science, and head of Gotham City public library",
			answer1: "Catwoman",
	    	answer2: "Bumblebee",
	    	answer3: "Supergirl",
	    	answer4: "Batgirl",
	    	correct: "Batgirl"
	    },
	    bumblebee: {
	    	name: "Bumblebee",
	    	image: "bumblebee.png",
	    	question: "Scientist Karen Beecher is semi-retired from superheroics on Team Titans, and works at S.T.A.R. Labs, where she designs non-lethal weaponry",
			answer1: "Bumblebee",
	    	answer2: "Catwoman",
	    	answer3: "Harley Quinn",
	    	answer4: "Starfire",
	    	correct: "Bumblebee"
	    },
	    catwoman: {
	    	name: "Catwoman",
	    	image: "catwoman.png",
	    	question: "A mysterious burglar and jewel thief",
			answer1: "Batgirl",
	    	answer2: "Harley Quinn",
	    	answer3: "Catwoman",
	    	answer4: "Katana",
	    	correct: "Catwoman"
	    },
	    harley_quinn: {
	    	name: "Harley Quinn",
	    	image: "harley_quinn.png",
	    	question: "Poison Ivy's best friend",
			answer1: "Catwoman",
	    	answer2: "Katana",
	    	answer3: "Harley Quinn",
	    	answer4: "Hawkgirl",
	    	correct: "Harley Quinn"
	    },
	    hawkgirl: {
	    	name: "Hawkgirl",
	    	image: "hawkgirl.png",
	    	question: "Owes her powers to a belt of Nth metal, a substance native to the planet Thanagar. It grants the power of flight, superhuman strength, super-acute vision, and an enhanced healing/regeneration ability",
			answer1: "Hawkgirl",
	    	answer2: "Katana",
	    	answer3: "Starfire",
	    	answer4: "Bumblebee",
	    	correct: "Hawkgirl"
	    },
	    katana: {
	    	name: "Katana",
	    	image: "katana.png",
	    	question: "Katana’s sword is called",
			answer1: "Soultaker",
	    	answer2: "Sakana",
	    	answer3: "Oracle",
	    	answer4: "George",
	    	correct: "Katana"
	    },
	    poison_ivy: {
	    	name: "Poison Ivy",
	    	image: "poison_ivy.png",
	    	question: "Dr. Pamela Lillian Isley, PhD is a botanist who steals ancient egyptian herbs, is poisoned by her partner in crime, and becomes immune to all natural toxins and diseases",
	    	answer1: "Hawkgirl",
	    	answer2: "Poison Ivy",
	    	answer3: "Starfire",
	    	answer4: "Bumblebee",
	    	correct: "Poison Ivy"
	    },
	    starfire: {
	    	name: "Starfire",
	    	image: "starfire.png",
	    	question: "Koriand'r is a princess of the planet Tamaran. Tamaraneans constantly absorb ultraviolet radiation, which is converted to pure energy, and allows her to fly at supersonic speeds",
			answer1: "Supergirl",
	    	answer2: "Starfire",
	    	answer3: "Bumblebee",
	    	answer4: "Harley Quinn",
	    	correct: "Poison Ivy"
	    },
	    supergirl: {
	    	name: "Supergirl",
	    	image: "supergirl.png",
	    	question: "Kara Zor-El possesses vast superhuman strength, speed and stamina, invulnerability, flight, super breath, x-ray vision, telescopic and microscopic vision, freeze breath, heat vision, and super hearing",
			answer1: "Supergirl",
	    	answer2: "Wonder Woman",
	    	answer3: "Starfire",
	    	answer4: "Hawkgirl",
	    	correct: "Supergirl"
	    },
	    wonder_woman: {
	    	name: "Wonder Woman",
	    	image: "wonder_woman.png",
	    	question: "This super hero was based on birth control pioneer Margaret Sanger",
			answer1: "Supergirl",
	    	answer2: "Katana",
	    	answer3: "Wonder Woman",
	    	answer4: "Batgirl",
	    	correct: "Wonder Woman"
	    },
	},

	findCharacters: {
		//"batgirl1": this.characters
		// "bumblebee" : bumblebee,
		// "catwoman" : catwoman,
		// "harley_quinn" : harley_quinn,
		// "hawkgirl" : hawkgirl,
		// "katana" : katana,
		// "poison_ivy" : poison_ivy,
		// "starfire" : starfire,
		// "supergirl" : supergirl,
		// "wonder_woman" : wonder_woman
	},

  	// Variables that set the initial state of our game.
  	//  Set our number counter to 20.
    seconds: 5,
  	//  Variable that will hold our interval ID when we execute
    //  the "run" function
    intervalId: 0,
    objKeys: "",

  	// The setupGame method is called when the page first loads.
  	setupGame: function() { 
  		$("#startPage").show();
  		$("#content").hide();

  		//get the index values for each of the characters in order to be able to access them
  		objKeys = Object.keys(this.characters);

  	},

  	//  The run function sets an interval
    //  that runs the decrement function once a second.
    run: function() {
    	$("#startPage").hide();
    	$("#content").show();

    	//load first question
    	//triviaGame.displayTrivia(0);

    	intervalId = setInterval(triviaGame.decrement, 1000); //console.log("in run " + intervalId);
    },

    //  The decrement function.
    decrement: function() { //console.log("here");

      //  Decrease number by one.
      triviaGame.seconds--;

      //  Show the number in the #countdown span tag.
      $("#countdown").html(triviaGame.seconds);


      //  Once number hits zero...
      if (triviaGame.seconds === 0) { console.log("it's 0 " + triviaGame.seconds);

        //  ...run the stop function.
        triviaGame.stop("outOfTime");

        //  Alert the user that time is up.
        //alert("Time Up!");
      }


    },

    //  The stop function
    stop: function(userInput, slideNum) {console.log("here stop " + userInput);

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(triviaGame.intervalId); 
      console.log(triviaGame.intervalId);

      console.log("triviaGame.seconds " + triviaGame.seconds);

      // call next slide
      	switch (userInput) {
	    case "outOfTime":
	        
	        break;
	    case "answer1":
	        
	        break;
	    case "answer2":
	      
	        break;
	    case "answer3":
	       
	        break;
	    case "answer4":
	       
	        break;            
	    default:
	        
		}

    },

  	// This function will replace display whatever image it's given
	// in the 'src' attribute of the img tag.
	displayTrivia: function(slideNum) {
  		//$("#image-holder").html("<img src=" + images[count] + " width='400px'>");

  		//var i = parseInt(slideNum); console.log(i);

  		switch (slideNum) {
	    case "outOfTime":
	        
	        break;
	    case 0:
	    	$("#triviaQuestion").html("<h4>" + triviaGame.characters.batgirl.question + "</h4>");
  			$("#answer1").html(triviaGame.characters.batgirl.answer1);
  			$("#answer2").html(triviaGame.characters.batgirl.answer2);
  			$("#answer3").html(triviaGame.characters.batgirl.answer3);
  			$("#answer4").html(triviaGame.characters.batgirl.answer4);
	        
	        break;
	    case "answer2":
	      
	        break;
	    case "answer3":
	       
	        break;
	    case "answer4":
	       
	        break;            
	    default:
	        
		}
  		
  		
  		  		//console.log(objKeys[slideNum]);
  		  		//var character = objKeys[slideNum];

  		  		//console.log(objKeys);
  		  		//console.log("type " + typeof(triviaGame.characters.batgirl));
  		  		//console.log(triviaGame.findCharacters["batgirl1"]);

  		  		//console.log(this.characters.batgirl);

  		//if user clicks an answer
      	$("#answer1").on("click", triviaGame.stop("answer1", slideNum));
      	$("#answer2").on("click", triviaGame.stop("answer2"));
      	$("#answer3").on("click", triviaGame.stop("answer3"));
      	$("#answer4").on("click", triviaGame.stop("answer4"));  		
	},


	nextImage: function() {
		// TODO: Increment the count by 1.
		count++;

	  	// TODO: Show the loading gif in the "image-holder" div.
		$("#image-holder").html("<img src=\"loading.gif\" width='400px'>");

		// TODO: Use a setTimeout to run displayImage after 1 second.
		setTimeout(displayImage, 1000);
		//displayImage();

		// TODO: If the count is the same as the length of the image array, reset the count to 0.
		if (count === images.length){
		count = 0;
	  	}
	},


	startSlideshow: function() {

		// TODO: Use showImage to hold the setInterval to run nextImage.
		showImage = setInterval(nextImage, 3000);
	}

};	

//  This code will run as soon as the page loads.
window.onload = function() {

	triviaGame.setupGame();
	//  click start button
	$("#start").click(triviaGame.run);

};


