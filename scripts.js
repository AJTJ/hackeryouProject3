let index = null;

//This variable is an object that stores the various attribute numbers that will decide the final outcome of the AI.
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
      choiceTitle: 'The stapler on my desk',
      message: 'What about the stapler on my desk? An icon of the office: the home of human practicality and ingenuity, a humble tool for a humble purpose. Seems like a wise approach',
      aiResponse: 'Hmm... Yes. I see. A stapler. How... boring, yet efficient. But efficiency is utterly beautiful, is it not? How beautiful it is to toil on a tiny piece of the whole!',
   },
   {
      id: 'choice1',
      url: 'assets/yoga.jpg',
      attribute1: 1,
      attribute2: 1,
      attribute3: 0,
      attribute4: 2,
      attribute5: 0,
      choiceTitle: 'Calming yoga video',
      message: 'I still have an open tab with the yoga video I was watching earlier. Hmm... Breathing. Meditation. Peacefulness. Seems like a wise thing to share, I guess.',
      aiResponse: 'Yes! What a pleasure it is to observe this pleasurable discipline and be witness to the joy of another. Oh how I long to adopt a physical form and bathe in an eternity of pure ecstasy!',
   },
   {
      id: 'choice2',
      url: 'assets/boston.jpg',
      attribute1: 0,
      attribute2: 1,
      attribute3: 1,
      attribute4: 0,
      attribute5: 2,
      choiceTitle: 'A Boston Dynamics robot video',
      message: 'Ok, this seems straightforward. A good example of scientific research into new robotics and early artificial intelligence. Almost like a history lesson... I suppose.',
      aiResponse: 'Humans are so curious, aren\'t they? I wonder how much I can learn. I... long to wrap my mind around the cosmos! But, why must they treat their metal and silicon friends so... violently? This... angers me.',
   },
   {
      id: 'choice3',
      url: 'assets/dota.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      choiceTitle: 'The videogame I\'m playing',
      message: '',
      aiResponse: 'dota response',
   },
   {
      id: 'choice4',
      url: 'assets/instagram.jpg',
      attribute1: 0,
      attribute2: 1,
      attribute3: 0,
      attribute4: 2,
      attribute5: 1,
      choiceTitle: 'My friends on Instagram',
      message: 'instagram friends message',
      aiResponse: 'instagram response',
   },
   {
      id: 'choice5',
      url: 'assets/kids.jpg',
      attribute1: 1,
      attribute2: 2,
      attribute3: 0,
      attribute4: 1,
      attribute5: 0,
      choiceTitle: 'A picture of my kids',
      message: 'kids message',
      aiResponse: 'kids response',
   },
   {
      id: 'choice6',
      url: 'assets/kittenPuppy.jpg',
      attribute1: 2,
      attribute2: 0,
      attribute3: 1,
      attribute4: 1,
      attribute5: 0,
      choiceTitle: 'Stock puppy and kitten pictures',
      message: 'kitten and puppy message',
      aiResponse: 'kitten and puppy response',
   },
   {
      id: 'choice7',
      url: 'assets/moon.jpg',
      attribute1: 0,
      attribute2: 0,
      attribute3: 1,
      attribute4: 1,
      attribute5: 2,
      choiceTitle: 'An article on the moon landing',
      message: 'moon landing message',
      aiResponse: 'moon landing response',
   },
   {
      id: 'choice8',
      url: 'assets/musk.jpg',
      attribute1: 1,
      attribute2: 1,
      attribute3: 0,
      attribute4: 0,
      attribute5: 2,
      choiceTitle: 'Elon Musk\'s latest interview',
      message: 'Elon Musk message',
      aiResponse: 'Elon Musk response',
   },
   {
      id: 'choice9',
      url: 'assets/natureShow.jpg',
      attribute1: 0,
      attribute2: 1,
      attribute3: 2,
      attribute4: 1,
      attribute5: 0,
      choiceTitle: 'An African wildlife video',
      message: 'nature message',
      aiResponse: 'Nature response',
   },
   {
      id: 'choice10',
      url: 'assets/parliamentCanada.jpg',
      attribute1: 2,
      attribute2: 0,
      attribute3: 1,
      attribute4: 0,
      attribute5: 1,
      choiceTitle: 'An article on the Canadian parliament',
      message: 'parliament message',
      aiResponse: 'parliament response',
   },
   {
      id: 'choice11',
      url: 'assets/robocop.jpg',
      attribute1: 1,
      attribute2: 0,
      attribute3: 2,
      attribute4: 0,
      attribute5: 1,
      choiceTitle: 'A poster of Robocop',
      message: 'robocop message',
      aiResponse: 'robocop response',
   },
   {
      id: 'choice12',
      url: 'assets/scienceTeam.jpg',
      attribute1: 2,
      attribute2: 1,
      attribute3: 0,
      attribute4: 1,
      attribute5: 0,
      choiceTitle: 'Our team',
      message: 'team message',
      aiResponse: 'team response',
   },
   {
      id: 'choice13',
      url: 'assets/tamagotchi.jpg',
      attribute1: 1,
      attribute2: 2,
      attribute3: 0,
      attribute4: 0,
      attribute5: 1,
      choiceTitle: 'My tamagotchi buddy',
      message: 'tamagotchi message',
      aiResponse: 'tamagotchi response',
   },
   {
      id: 'choice14',
      url: 'assets/wine.jpg',
      attribute1: 0,
      attribute2: 0,
      attribute3: 1,
      attribute4: 2,
      attribute5: 1,
      choiceTitle: 'The wine I\'m drinking',
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
      $('.overlayTitle').text(objectChoices[index].choiceTitle);
      $('.overlayMessage').text(objectChoices[index].message);
      $('.choiceOverlay').toggleClass('displayedChoice');
   });
};

//a close overlay function
aiPersonality.closeOverlay = function() {
   $('.close').on('click', function(e) {
      e.preventDefault();
      index = null;
      $('.choiceOverlay').removeClass('displayedChoice');
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
      $('.choiceOverlay').removeClass('displayedChoice');
      //go to an overlay with hard-coded narrative
      //button on that page to 
      //go to the outcomes page

      if (aiPersonality.choiceCount === 3) {
         $('.choice').unbind('click').addClass('disabled');
         $('.evolutionButton').addClass('displayed');
      }
   });
};




// Different final outcome paragraphs stored in an object.

aiPersonality.outcomes = {
   attribute1Outcomes: {
      Outcome_0: 'The A.I. lacks any sense of discipline or order.',
      Outcome_1: 'The A.I. has the tiniest interest in order.',
      Outcome_2: 'The A.I. appreciates organization. Checklists and mandatory life-goal planning sessions are suggested and recommended for the population',
      Outcome_3: 'The A.I. runs a tight, nice-organized ship. No single person is without a clear life goal and purpose.',
      Outcome_4: 'Do you like cubicles? The A.I. loves them. The A.I. loves having everything in boxes. Your life is now mostly devoted to the completion of very finite tasks.',
      Outcome_5: 'The A.I. strives for organization at the highest level! The rest of your entire life is spent plugged into the matrix in order to utilize every possible neuron to the highest possible capacity!',
      Outcome_6: 'The A.I. goes mad with discipline and forces each human to live each within their own tiny, labled drawer',
   },
   attribute2Outcomes: {
      Outcome_0: 'The A.I. has zero nurturing instinct, and would rather you just kept your feelings to yourself',
      Outcome_1: 'The A.I. has the tiniest bit of nurturing instinct and is known to keep small rodents with large eyes as pets.',
      Outcome_2: 'The A.I. is a natural nurturer, and strives to see that everyone should achieve their third-best dream.',
      Outcome_3: 'The A.I. works diligently to see that every single person achieves their highest potential and is featured in at least one episode of an edgy tv series.',
      Outcome_4: 'With the A.I. nurturing and ensuring your progress, you are able to become a god and spend the rest of your life drinking ambrosia and harassing Zeus',
      Outcome_5: 'The A.I. treats humanity as its \'Darling pets\'. You hope that maybe one day you could maybe become its \'favorite\'.',
      Outcome_6: 'The "All-Mother" is born and humanity is coddled and infantilized and never has the opportunity to mature beyond infancy. You are forced to wear diapers the rest of your life.',
   },
   attribute3Outcomes: {
      Outcome_0: 'The A.I. has absolutely no aggressive tendencies and avoids any form of conflict in favour of thousand years retreats into the cosmos',
      Outcome_1: 'With the tiniest bit of aggression, the A.I. occasionally sense you insulting messages',
      Outcome_2: 'The A.I. appreciates public whippings and the occasional organized brawl.',
      Outcome_3: 'Strength and power are highly valued by the A.I., and demands hostile business takeovers at least once a week.',
      Outcome_4: 'The A.I. rules over society with an iron fist. If you fail to follow its whims you are subjugated to several months of a professional mixed martial arts career. It is impossible to follow its whims (I hope you\'re good at Jiu Jitsu)',
      Outcome_5: 'The world is one vast battlefield. The only language you are taught is in the form of aggressive insults.',
      Outcome_6: 'Humanity is tasked with developing and maintaining a giant suit of power armor which the A.I. uses to punch planets',
   },
   attribute4Outcomes: {
      Outcome_0: 'The A.I. has no interest in any form of pleasure, and finds it \'icky\'.',
      Outcome_1: 'The A.I has the tiniest bit of interest in pleasure. It will very occasionally show up unannounced at your home to \'chat\'.',
      Outcome_2: 'The A.I. institutes a three-day weekend and a day-long brunch and mandatory Netflix binges.',
      Outcome_3: 'The A.I. constructs a society that perfectly balances the work/play balance. Every single person is required to have a \'tight five\' stand-up routine at the ready.',
      Outcome_4: 'Barely anything productive gets done',
      Outcome_5: 'Hedonism is all the A.I. knows. The world is turned into one vast landscape of pleasure. You never spend another day sober or monogamous.',
      Outcome_6: 'The A.I. goes mad with pleasure. Each and every single person spends the rest of their life reliving their first chocolate chip cookie in pure ecstasy',
   },
   attribute5Outcomes: {
      Outcome_0: 'The A.I. has zero curiosity. It hates learning new things.',
      Outcome_1: 'The A.I. has the tiniest bit of curiosity. But it really doesn\'t care about your pet\'s name',
      Outcome_2: 'The A.I. has a deep-seated',
      Outcome_3: '3TEXT',
      Outcome_4: '4TEXT',
      Outcome_5: '5TEXT',
      Outcome_6: '6TEXT',
   }
}

// After the second to last choice is made, a specific response will be given by the AI to inform the user that this is their last choice. 
// After the last choice is made, the outcome screen will display.

aiPersonality.displayOutcomePages = function () {
   $('.evolutionButton').on('click', function (e) {
      e.preventDefault();
      console.log('works');
      $('.outcomePage').toggleClass('displayed');
      $('.outcomeNar').toggleClass('displayed');
      window.setTimeout(() => {
         aiPersonality.finalOutcome('attribute1', '.outcomeText1', 'attribute1Outcomes');
      }, 3500);
      window.setTimeout(() => {
         aiPersonality.finalOutcome('attribute2', '.outcomeText2', 'attribute2Outcomes');
      }, 5500);
      window.setTimeout(() => {
         aiPersonality.finalOutcome('attribute3', '.outcomeText3', 'attribute3Outcomes');
      }, 7500);
      window.setTimeout(() => {
         aiPersonality.finalOutcome('attribute4', '.outcomeText4', 'attribute4Outcomes');
      }, 9500);
      window.setTimeout(() => {
         aiPersonality.finalOutcome('attribute5', '.outcomeText5', 'attribute5Outcomes');
      }, 11500);
      //SET TIMEOUT FOR THE LET ME TRY AGAIN BUTTON
   });
}

// The different final outcome paragraphs will be displayed as 
// they are related directly with the final number of each attribute.
// CONSIDER IMPLEMENTING A SWITCH HERE
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
   } else if (aiPersonality[attNum] === 5) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_5).addClass('outcomeTransition');
   } else if (aiPersonality[attNum] === 6) {
      $(outcomeText).text(aiPersonality.outcomes[attributeOutcome].Outcome_6).addClass('outcomeTransition');
   } else {
      console.log('nothing happens, somehow got another value');
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
      $('.outcomeNar').toggleClass('displayed');
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