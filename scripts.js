//This variable is an object that stores the various attribute numbers that will decide the final outcome of the AI.
let index = null;

const aiPersonality = {
   attribute1: 0,
   attribute2: 0,
   attribute3: 0,
   attribute4: 0,
   attribute5: 0,
   choiceCount: 0,
};

const objectChoices = [
   {
      id: 'choice0',
      url: 'assets/stapler.JPG',
      attribute1: 2,
      attribute2: 0,
      attribute3: 1,
      attribute4: 0,
      attribute5: 1,
      message: 'Stapler message',
      aiResponse: 'Stapler response',
   },
   {
      id: 'choice1',
      url: 'assets/yoga.jpg',
      attribute1: 1,
      attribute2: 1,
      attribute3: 0,
      attribute4: 2,
      attribute5: 0,
      message: 'yoga message',
      aiResponse: 'yoga response',
   },
   {
      id: 'choice2',
      url: 'assets/boston.jpg',
      attribute1: 0,
      attribute2: 1,
      attribute3: 1,
      attribute4: 0,
      attribute5: 2,
      message: 'boston shit',
      aiResponse: 'boston response',
   },
   {
      id: 'choice3',
      url: 'assets/dota.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'dota message',
      aiResponse: 'dota response',
   },
   {
      id: 'choice4',
      url: 'assets/instagram.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'instagram friends message',
      aiResponse: 'instagram response',
   },
   {
      id: 'choice5',
      url: 'assets/kids.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'kids message',
      aiResponse: 'kids response',
   },
   {
      id: 'choice6',
      url: 'assets/kittenPuppy.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'kitten and puppy message',
      aiResponse: 'kitten and puppy response',
   },
   {
      id: 'choice7',
      url: 'assets/moon.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'moon landing message',
      aiResponse: 'moon landing response',
   },
   {
      id: 'choice8',
      url: 'assets/musk.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'Elon Musk message',
      aiResponse: 'Elon Musk response',
   },
   {
      id: 'choice9',
      url: 'assets/natureShow.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'nature message',
      aiResponse: 'Nature response',
   },
   {
      id: 'choice10',
      url: 'assets/parliamentCanada.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'parliament message',
      aiResponse: 'parliament response',
   },
   {
      id: 'choice11',
      url: 'assets/robocop.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'robocop message',
      aiResponse: 'robocop response',
   },
   {
      id: 'choice12',
      url: 'assets/scienceTeam.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'team message',
      aiResponse: 'team response',
   },
   {
      id: 'choice13',
      url: 'assets/tamagotchi.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'tamagotchi message',
      aiResponse: 'tamagotchi response',
   },
   {
      id: 'choice14',
      url: 'assets/wine.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      message: 'wine message',
      aiResponse: 'wine response',
   },
];

aiPersonality.introPage = function() {
   $('.hideIntroPage').on('click', function (e) {
      e.preventDefault();
      $('.introPage').removeClass('displayed');
   })
}

//A function to display all the choices on the page.
aiPersonality.displayChoices = function() {
   for (let i = 0; i < objectChoices.length; i++) {
      $('form').append(`\
         <div data-index="${i}" id="${objectChoices[i].id}" class="choice">\
            <label class="imgBox" for="input-${objectChoices[i].id}">\
               <img class="" src="${objectChoices[i].url}" alt="">\
               <span class="imgOverlay"></span>\
            </label>\
            <input type="radio" name="radioButton" id="input-${objectChoices[i].id}" class="${objectChoices[i].id} radioButton">\
         </div>\
      `);
   }
};

// The user clicks on a choice. It is displayed in an overlay, and there is some text describing the choice.
aiPersonality.choiceOverlay = function() {
   $('.choice').on('click', function(e) {
      e.preventDefault();
      index = $(this).data('index');
      $('.overlayImg').attr('src', objectChoices[index].url);
      $('.overlayMessage').text(objectChoices[index].message);
      $('.choiceOverlay').toggleClass('displayed');
   });
};

//a close overlay function
aiPersonality.closeOverlay = function() {
   $('.close').on('click', function(e) {
      e.preventDefault();
      index = null;
      $('.choiceOverlay').removeClass('displayed');
   });
}

//WRITE IT OUT DYNAMICALLY
//MAKE AN ARRAY OF OBJECTS

// The user commits to a choice. It has one or more effects on the AI's attributes which are stored in a variable.
// The choice to commit to an item will bring up a specific response from the AI.
aiPersonality.confirmOverlay = function() {
   $('.confirm').on('click', function(e){
      e.preventDefault();
      aiPersonality.choiceCount = aiPersonality.choiceCount + 1;
      aiPersonality.attribute1 += objectChoices[index].attribute1;
      aiPersonality.attribute2 += objectChoices[index].attribute2;
      aiPersonality.attribute3 += objectChoices[index].attribute3;
      aiPersonality.attribute4 += objectChoices[index].attribute4;
      aiPersonality.attribute5 += objectChoices[index].attribute5;
      $('.messageZone').text(objectChoices[index].aiResponse);
      $('#choice' + index).unbind('click').addClass('selected disabled');
      $('.choiceOverlay').removeClass('displayed');
      //go to an overlay with hard-coded narrative
      //button on that page to 
      //go to the outcomes page

      if (aiPersonality.choiceCount === 3) {
         $('.choice').unbind('click').addClass('disabled');
         $('.evolutionButton').addClass('displayed');
      }
   });
};

// After the second to last choice is made, a specific response will be given by the AI to inform the user that this is their last choice. 
// After the last choice is made, the outcome screen will display.

aiPersonality.displayOutcomePages = function () {
   $('.evolutionButton').on('click', function (e) {
      e.preventDefault();
      console.log('works');
      $('.outcomePage').toggleClass('displayed');
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
      //SET TIMEOUT BUTTON FOR THE LET ME TRY AGAIN SHIT
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
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_0).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 1) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_1).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 2) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_2).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 3) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_3).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 4) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_4).addClass('outcomeTransition');
   } else {
      console.log('nothing happens');
   };
}

//A reset button on the outcome page will reload the page or reset the game.
aiPersonality.events = function() {
   $('.resetButton').on('click', function() {
      aiPersonality.attribute1 = 0;
      aiPersonality.attribute2 = 0;
      aiPersonality.attribute3 = 0;
      aiPersonality.attribute4 = 0;
      aiPersonality.attribute5 = 0;
      aiPersonality.choiceCount = 0;
      index = null;
      $('.introPage').addClass('displayed');
      aiPersonality.choiceOverlay();
      $('.choice').removeClass('selected disabled');
      $('.outcomePage').toggleClass('displayed');
      $('.evolutionButton').removeClass('displayed');
      $('.outcomeText').removeClass('outcomeTransition');
   });
};

//The init function to get the whole application running
aiPersonality.init = function () {
   aiPersonality.displayOutcomePages();
   aiPersonality.displayChoices();
   aiPersonality.choiceOverlay();
   aiPersonality.confirmOverlay();
   aiPersonality.closeOverlay();
   aiPersonality.events();
   aiPersonality.introPage();
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