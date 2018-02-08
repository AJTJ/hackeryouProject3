console.log('Hello');

//This variable is an object that stores the various attribute numbers that will decide the final outcome of the AI.
const aiPersonality = {
   attribute1: 0,
   attribute2: 0,
   attribute3: 0,
   attribute4: 0,
   attribute5: 0,
   choiceCount: 0,
};

// The user clicks on a choice. It is displayed in an overlay, and there is some text describing the choice.
aiPersonality.choiceOverlay = function() {
   $('.choice').on('click', function() {
      if ($(this).hasClass('choice1')) {
         $('.choice1Overlay').toggleClass('displayed');
      } else if ($(this).hasClass('choice2')) {
         $('.choice2Overlay').toggleClass('displayed');
      } else {
         console.log('no overlay here')
      }
   });
};

//a close overlay function
aiPersonality.closeOverlay = function() {
   $('.close').on('click', function(e) {
      e.preventDefault();
      $('.choiceOverlay').removeClass('displayed');
   });
}

// The user commits to a choice. It has one or more effects on the AI's attributes which are stored in a variable.
// The choice to commit to an item will bring up a specific response from the AI.
aiPersonality.choiceConfirm = function() {
   $('.choiceButton').on('click', function(){
      if ($(this).hasClass('choiceButton1')) {
         aiPersonality.attribute1 = aiPersonality.attribute1 + 1;
         aiPersonality.attribute2 = aiPersonality.attribute2 + 1;
         aiPersonality.attribute5 = aiPersonality.attribute5 + 1;
         console.log(aiPersonality.attribute1);
         console.log(aiPersonality.attribute2);
         console.log(aiPersonality.attribute5);
         console.log('You pressed the first button');
         $('.messageZone').empty();
         $('.messageZone').append('<p class="typewriter">You have chosen the stapler</p>');
      } else if ($(this).hasClass('choiceButton2')) {
         aiPersonality.attribute3 = aiPersonality.attribute3 + 1;
         aiPersonality.attribute4 = aiPersonality.attribute4 + 1;
         console.log(aiPersonality.attribute3);
         console.log(aiPersonality.attribute4);
         console.log('You pressed the second button')
         $('.messageZone').empty();
         $('.messageZone').append('<p class="typewriter">You have chosen the second item</p>');
      } else {
         console.log('Hmm, aint no button to do that shit.')
      };
   });
};

// After the second to last choice is made, a specific response will be given by the AI to inform the user that this is their last choice. 
// After the last choice is made, the outcome screen will display.

aiPersonality.choiceCounter = function () {
   $('.choiceButton').on('click', function() {
      aiPersonality.choiceCount = aiPersonality.choiceCount + 1;
      console.log("the count is at:", aiPersonality.choiceCount);
      if (aiPersonality.choiceCount === 2) {
         //HOW TO SET TIMING HERE??
         $('.messageZone').append('<p class="typewriter">You have only one choice left</p>');
      } 
      if (aiPersonality.choiceCount === 3) {
         $('.outcomePage').toggleClass('displayed');
         //HOW TO SET TIMING HERE
         window.setTimeout(() => {
            aiPersonality.finalOutcome('attribute1', '.outcomeText1', 'attribute1Outcomes')
         }, 500);
         window.setTimeout(() => {
            aiPersonality.finalOutcome('attribute2', '.outcomeText2', 'attribute2Outcomes');
         }, 2500);
         window.setTimeout(() => {
            aiPersonality.finalOutcome('attribute3', '.outcomeText3', 'attribute3Outcomes');
         }, 4500);
         window.setTimeout(() => {
            aiPersonality.finalOutcome('attribute4', '.outcomeText4', 'attribute4Outcomes');
         }, 6500);
         window.setTimeout(() => {
            aiPersonality.finalOutcome('attribute5', '.outcomeText5', 'attribute5Outcomes');
         }, 8500);
      }
   });
}


// Different final outcome paragraphs stored in an object.

aiPersonality.outcomes = {
   attribute1Outcomes: {
      Outcome_0: '0TEXT',
      Outcome_1: '1TEXT',
      Outcome_2: '2TEXT',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
   },
   attribute2Outcomes: {
      Outcome_0: '0TEXT',
      Outcome_1: '1TEXT',
      Outcome_2: '2TEXT',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
   },
   attribute3Outcomes: {
      Outcome_0: '0TEXT',
      Outcome_1: '1TEXT',
      Outcome_2: '2TEXT',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
   },
   attribute4Outcomes: {
      Outcome_0: '0TEXT',
      Outcome_1: '1TEXT',
      Outcome_2: '2TEXT',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
   },
   attribute5Outcomes: {
      Outcome_0: '0TEXT',
      Outcome_1: '1TEXT',
      Outcome_2: '2TEXT',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
   }
}

// The different final outcome paragraphs will be displayed as 
// they are related directly with the final number of each attribute.
aiPersonality.finalOutcome = function (attNum, outcomeText, attributeOutcome) {
   if (aiPersonality[attNum] === 0) {
      $(outcomeText).append(aiPersonality.outcomes[attributeOutcome].Outcome_0).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 1) {
      $(outcomeText).append(aiPersonality.outcomes[attributeOutcome].Outcome_1).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 2) {
      $(outcomeText).append(aiPersonality.outcomes[attributeOutcome].Outcome_2).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 3) {
      $(outcomeText).append(aiPersonality.outcomes[attributeOutcome].Outcome_3).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 4) {
      $(outcomeText).append(aiPersonality.outcomes[attributeOutcome].Outcome_4).addClass('outcomeTransition');
   } else {
      console.log('nothing happens');
   };
}


//A reset button on the outcome page will reload the page or reset the game.
aiPersonality.events = function() {
   $('.resetButton').on('click', function() {
      location.reload();
   });
};


//The init function to get the whole application running
aiPersonality.init = function () {
   aiPersonality.choiceOverlay();
   aiPersonality.choiceConfirm();
   aiPersonality.closeOverlay();
   aiPersonality.choiceCounter();
   aiPersonality.events();
};

//upon loading the page
$(function() {
   aiPersonality.init();
});


//STRETCH GOALS

// STRETCH
// A cover page with Title, Description and "Play now" button.

// STRETCH
// A Story outline page with text that fades in and out in a specific sequence.

//STRETCH
//A title or unifying paragraph will be displayed depending on what kind of configuration the attribute numbers are displaying.

//GRAPHICAL ELEMENTS FOR EVERYTHING
//Style up the main game area.
//Style up the final outcome area.

//SOUNDS

//Observing multiple choices creates another response.

// If choice A has already been chosen, and choice B is chosen, then a different (differing from choice B's normal effect) AI response and personality change will be made.

//Typed Text for AI's responses.

//Pre-game page with instructions.
//Transition page before seeing your outcome.