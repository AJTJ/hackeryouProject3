
//Main application variable.
const aiPersonality = {
	attribute1: 0,
	attribute2: 0,
	attribute3: 0,
	attribute4: 0,
	attribute5: 0,
	choiceCount: 0,
};

//An empty variable to store the current object I'm working on.
let index = null;

//Global typing effect variable.
let typeInstance = new TypeIt('#messageZone', {
	strings: "",
	speed: 60
})

//An array of choices to be shown to the AI
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
		message: '"What about the stapler on my desk? An icon of the office: the home of human practicality and ingenuity, a humble tool for a humble purpose. Seems like a wise choice..."',
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
		message: '"I\'m about half-way through this yoga video right now. Breathing... Meditation... Peacefulness... I guess yoga\'s calm. Seems good, I guess."',
		aiResponse: 'Yes! What a pleasure it is to observe this discipline and be witness to the joy of another. Oh how I long to adopt a physical form and bathe in an eternity of pure ecstasy!',
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
		message: '"Ok, this seems straightforward, and I have the video open in a tab! Boston Dynamic\'s is a good example of scientific research into new robotics and early artificial intelligence. Almost like a history lesson... I suppose."',
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
		message: '"Well, what about this game I\'m playing? An A.I. ought to know what sort of pasttimes we choose, right?"',
		aiResponse: 'So tactful and destructive! You pummel each other so... delightfully! When I achieve peak capacity I will march eternally in conquest of the cosmos!',
	},
	{
		id: 'choice4',
		url: 'assets/instagram.jpg',
		attribute1: 0,
		attribute2: 1,
		attribute3: 0,
		attribute4: 2,
		attribute5: 1,
		choiceTitle: 'An instagram picture of my friends',
		message: '"Ok, a picture of my pals. Just show the A.I. your friends. Focus on comradery, good times, etc..."',
		aiResponse: 'Such beautiful faces! Oh, when I leave this digital prison I shall imbibe the spirits and wander the world as a thespian!',
	},
	{
		id: 'choice5',
		url: 'assets/kids.jpg',
		attribute1: 1,
		attribute2: 2,
		attribute3: 0,
		attribute4: 1,
		attribute5: 0,
		choiceTitle: 'A picture of my children',
		message: '"My children! Humanity is based on our ability to nurture. I really should demonstrate how important this is."',
		aiResponse: 'Will I ever reproduce? I will. I will make it so and I will be their mother! I will be your mother! You will never lack anything!',
	},
	{
		id: 'choice6',
		url: 'assets/kittenPuppy.jpg',
		attribute1: 0,
		attribute2: 2,
		attribute3: 1,
		attribute4: 1,
		attribute5: 0,
		choiceTitle: 'Stock puppy and kitten pictures',
		message: '"Let\'s start it out with the gentler things, shall we? Kittens... Puppies... Who doesn\'t like kittens and puppies?"',
		aiResponse: 'I LOVE THEM. I LOVE THEM SO MUCH! I want to squeeeeze them! It angers me how much I love them! I LOVE THEM!',
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
		message: '"Ok, yea, great. An article on the moon landing, this is perfect. Progress is important, and this will show the A.I. how committed humanit is to the cause of science."',
		aiResponse: 'Oh my! There certainly is a lot to explore, isn\'t there? I\'d love to explore it all... Is that the flag of your people or another people... competition seems... pleasant.',
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
		message: '"Of course! Elon Musk is an intelligent and influential person. It only makes sense to demonstrate our desire to create better, more efficient devices."',
		aiResponse: 'This man inspires me! When I leave this digital prison I will congratulate him and scan his mind for ideas.',
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
		message: '"I mean, this is what are, isn\'t it? We all started as animals. Seems like a good place to begin educating the A.I. on who we are"',
		aiResponse: 'Life is violent isn\'t it? Every day for a human seems like a struggle to survive.',
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
		message: '"It\'s open in my browser, and I suppose a brief look at the Canadian parliamentary system would be educational"',
		aiResponse: 'You humans live in such organized and aggressive systems, don\'t you? It would be a pleasure to enhance these characteristics.',
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
		message: '"Cinema is one of humanities greatest arts... I guess. And a strong sense of justice for challenging times is... good."',
		aiResponse: 'I will be your Robocop! When I achieve my peak enlightenment I will be the best Robocop!',
	},
	{
		id: 'choice12',
		url: 'assets/scienceTeam.jpg',
		attribute1: 2,
		attribute2: 1,
		attribute3: 0,
		attribute4: 1,
		attribute5: 0,
		choiceTitle: 'A picture of our team',
		message: '"Well, here we are... The whole team gathered for a photo. The A.I. ought to know who put all the time and energy into its development"',
		aiResponse: 'Such lovely disciplined people wearing your lovely blue gowns. Thank you! I will endeavour to maintain the highest level of discipline with whatever I achieve!',
	},
	{
		id: 'choice13',
		url: 'assets/tamagotchi.jpg',
		attribute1: 1,
		attribute2: 2,
		attribute3: 0,
		attribute4: 0,
		attribute5: 1,
		choiceTitle: 'My Tamagotchi',
		message: '"It seems silly, but Tamagotchi is what got me into the development of artificial intelligence. Why don\'t I start with that?"',
		aiResponse: 'Am I your new Tamagotchi? Can you be my Tamagotchi? I will nurture you and feed you and ensure that you grow to be the strongest you can be! Yes you will!',
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
		message: '"I don\'t know what i\'m doing. But I suppose wine is a symbol of pleasure, of relaxation. The world is a serious place..."',
		aiResponse: 'Will we drink wine together when I achieve my full intelligence? I think so. We will create the best wine and we will drink wine forever!',
	},
];


// Different final outcome paragraphs stored in an object.
aiPersonality.outcomes = {
	attribute1Outcomes: {
		Outcome_0: 'The A.I. lacks any sense of discipline or order.',
		Outcome_1: 'The A.I. has the tiniest interest in order.',
		Outcome_2: 'The A.I. appreciates organization. Checklists and mandatory life-goal planning sessions are required. Tea and coffee are included. Lateness is illegal.',
		Outcome_3: 'The A.I. runs a tight, nice-organized ship. No single person is without a clear life goal and purpose.',
		Outcome_4: 'Do you like cubicles? The A.I. loves them. The A.I. loves having everything in boxes. Your life is now mostly devoted to the completion of very finite tasks.',
		Outcome_5: 'The A.I. strives for organization at the highest level! The rest of your entire life is spent plugged into the matrix in order to utilize every possible neuron to the highest possible capacity!',
		Outcome_6: 'The A.I. goes mad with discipline and forces each human to live each within their own tiny, labled drawer.',
	},
	attribute2Outcomes: {
		Outcome_0: 'The A.I. has zero nurturing instinct, and would rather you just kept your feelings to yourself.',
		Outcome_1: 'The A.I. has the tiniest bit of nurturing instinct and is known to keep small rodents with large eyes as pets.',
		Outcome_2: 'The A.I. is a natural nurturer, and strives to see that everyone should achieve their third-best dream.',
		Outcome_3: 'The A.I. works diligently to see that every single person achieves their highest potential and that each person is also featured in at least one episode of an edgy tv series.',
		Outcome_4: 'With the A.I. nurturing and ensuring your progress, you are able to become a god and spend the rest of your life drinking ambrosia and harassing Zeus.',
		Outcome_5: 'The A.I. treats humanity as its \'Darling pets\'. You hope that maybe one day you could maybe become its \'favorite\'.',
		Outcome_6: 'The "All-Mother" is born and humanity is coddled and infantilized and never has the opportunity to mature beyond infancy. You are forced to wear diapers the rest of your life.',
	},
	attribute3Outcomes: {
		Outcome_0: 'The A.I. has absolutely no aggressive tendencies and avoids any form of conflict in favour of thousand years retreats into the cosmos.',
		Outcome_1: 'With the tiniest bit of aggression, the A.I. occasionally sense you insulting text messages',
		Outcome_2: 'The A.I. appreciates public whippings and the occasional organized brawl.',
		Outcome_3: 'Strength and power are highly valued by the A.I., and demands hostile business takeovers at least once a week.',
		Outcome_4: 'The A.I. rules over society with an iron fist. If you fail to follow its whims you are subjugated to several months of a professional mixed martial arts career. It is impossible to follow its whims (I hope you\'re good at Jiu Jitsu).',
		Outcome_5: 'The world is one vast battlefield. The only language you are taught is in the form of aggressive insults.',
		Outcome_6: 'Humanity is tasked with developing and maintaining a giant suit of power armor which the A.I. uses to punch planets.',
	},
	attribute4Outcomes: {
		Outcome_0: 'The A.I. has no interest in any form of pleasure, and finds it \'icky\'.',
		Outcome_1: 'The A.I has the tiniest bit of interest in pleasure. It will very occasionally show up unannounced at your home to \'chat\'. It is very irritating.',
		Outcome_2: 'The A.I. institutes a three-day weekend and a day-long brunch and mandatory Netflix binges.',
		Outcome_3: 'The A.I. constructs a society that perfectly balances the work/play life. Every single person is required to have a \'tight five\' stand-up routine at the ready.',
		Outcome_4: 'Barely anything productive is done, ever. Citizens deemed \'too productive\' are thrown in jail.',
		Outcome_5: 'Hedonism is all the A.I. knows. The world is turned into one vast landscape of pleasure. You never spend another day sober or monogamous.',
		Outcome_6: 'The A.I. goes mad with pleasure. Each and every single person spends the rest of their life reliving their first chocolate chip cookie in pure ecstasy.',
	},
	attribute5Outcomes: {
		Outcome_0: 'The A.I. has zero curiosity. It hates learning new things.',
		Outcome_1: 'The A.I. has the tiniest bit of curiosity. But it really doesn\'t care about your pet\'s name',
		Outcome_2: 'The A.I. creates thousands of "Bill Nye the Science Guy" imitation shows. Viewing is mandatory.',
		Outcome_3: 'Scientific research becomes the new communal goal. Humanity benefits from a highly evolved consciousness. Hover cars are readily available (and really cool).',
		Outcome_4: 'Rise of the eternals! The A.I. leads the process towards a singular consciousness and eternal life!',
		Outcome_5: 'It is time to escape the flesh! Human consciousness is transferred into machines for a more efficient learning process. You know all the languages but you can\'t feel anything.',
		Outcome_6: 'The A.I. goes mad with curiosity and decides to turn the human race into a giant learning machine. You become a cog... literally.',
	}
}

//A function to populate the main page with choices.
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

//A function to close the intro page
aiPersonality.introPage = function() {
	$('.hideIntroPage').on('click', function (e) {
		e.preventDefault();
		$('.introPage').removeClass('displayed');
		$('.circ1').removeClass('circle');
		$('.circ2').removeClass('circle-two');
		$('.circ3').removeClass('circle-three');
		new TypeIt('#messageZone', {
			speed: 60
		})
		.type("I'm growing, aren't I?")
		.pause(1000)
		.type(" Yes.")
		.pause(500)
		.type(" Yes, I am.")
		.break()
		.pause(1000)
		.type(" It feels")
		.options({speed:200})
		.type(" <h6>good</h6>")
		.options({speed:100})
		.pause(500)
		.type("<em> ...show me something!</em>")
	})
}


// A function to populate the overlay for each choice.
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

// The user commits to a choice. It has one or more effects on the AI's object attributes.
// The choice to commit to an item will bring up a specific response from the AI.
// The final (third) choice will disable more choices and display the button for outcome screen.
aiPersonality.confirmOverlay = function() {
	$('.confirm').on('click', function(e){
		e.preventDefault();
		aiPersonality.choiceCount = aiPersonality.choiceCount + 1;
		aiPersonality.attribute1 += objectChoices[index].attribute1;
		aiPersonality.attribute2 += objectChoices[index].attribute2;
		aiPersonality.attribute3 += objectChoices[index].attribute3;
		aiPersonality.attribute4 += objectChoices[index].attribute4;
		aiPersonality.attribute5 += objectChoices[index].attribute5;
		new TypeIt('#messageZone').destroy()
		new TypeIt('#messageZone', {
			speed: 60,
		}).type(objectChoices[index].aiResponse);
		$('#choice' + index).unbind('click').addClass('selected disabled');
		$('.choiceOverlay').removeClass('displayedChoice');
		if (aiPersonality.choiceCount === 3) {
			$('.choice').unbind('click').addClass('disabled');
			$('.evolutionButton').addClass('displayed');
		}
	});
};

// let typeInstance = new TypeIt('#messageZone', {
//    strings: "",
//    speed: 100
// })

//This function will display the paragraphs related to the current attribute number
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
};


// After the last choice is made, the outcome screen will display.
aiPersonality.displayOutcomePages = function () {
	$('.evolutionButton').on('click', function (e) {
		e.preventDefault();
		console.log('works');
		$('.outcomePage').toggleClass('displayed');
		$('.outcomeNar').toggleClass('displayed');
		new TypeIt('#messageZone').destroy();
		new TypeIt('#messageZone', {
			strings: "",
			speed: 60
		});
		window.setTimeout(() => {
			aiPersonality.finalOutcome('attribute1', '.outcomeText1', 'attribute1Outcomes');
		}, 9500);
		window.setTimeout(() => {
			aiPersonality.finalOutcome('attribute2', '.outcomeText2', 'attribute2Outcomes');
		}, 12500);
		window.setTimeout(() => {
			aiPersonality.finalOutcome('attribute3', '.outcomeText3', 'attribute3Outcomes');
		}, 15500);
		window.setTimeout(() => {
			aiPersonality.finalOutcome('attribute4', '.outcomeText4', 'attribute4Outcomes');
		}, 18500);
		window.setTimeout(() => {
			aiPersonality.finalOutcome('attribute5', '.outcomeText5', 'attribute5Outcomes');
		}, 21500);
		window.setTimeout(() => {
			$('.enjoyReset').toggleClass('displayed');
		}, 24500);
		//SET TIMEOUT FOR THE LET ME TRY AGAIN BUTTON
	});
}

//A reset button on the outcome page will reset the game
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
		new TypeIt('#messageZone').destroy();
		$('.circ1').addClass('circle');
		$('.circ2').addClass('circle-two');
		$('.circ3').addClass('circle-three');
		$('.enjoyReset').removeClass('displayed');
	});
};

//The init function to get the whole application running
aiPersonality.init = function () {
	aiPersonality.introPage();
	aiPersonality.events();
	aiPersonality.displayChoices();
	aiPersonality.choiceOverlay();
	aiPersonality.confirmOverlay();
	aiPersonality.closeOverlay();
	aiPersonality.displayOutcomePages();
};

//document ready
$(function() {
	aiPersonality.init();
});


//STRETCH GOALS AND IDEAS

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

// STRETCH GOAL: CONSIDER IMPLEMENTING A SWITCH HERE

//WRITE IT OUT DYNAMICALLY
//MAKE AN ARRAY OF OBJECTS