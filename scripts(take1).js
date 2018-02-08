console.log('Hello');

//GOALZ
// The user chooses one of many choices and the click comes with several changes that affect the status on several tables.


// One of several personality tables that, depending on the user's choices will decide the final outcome of the AI.

// const personalityTable1 = [1,2,3,4,5];
// let personalityTrait1_Status = personalityTable1[2];
let personalityTrait1_Status = 0;
let personalityTrait2_Status = 0;
let personalityTrait3_Status = 0;


//On click alter current status of personalityTable1
$(function () {
   $('.checkbox1').on('click', function(){
      personalityTrait1_Status = personalityTrait1_Status + 1;
      personalityTrait2_Status = personalityTrait2_Status + 1;
      console.log(personalityTrait1_Status);
      console.log(personalityTrait2_Status);
      $('.messageText').append(`Dance!!!`);
   })
});

$(function () {
   $('.checkbox2').on('click', function(){
      personalityTrait3_Status = personalityTrait3_Status + 1;
      console.log(personalityTrait3_Status);
   
   })
});

// Introduce an item, bringing it to the front and bringing some text.
// Previous choices will affect future choices.
// Image and/or icon disappears upon click.

// An updating status of where the AI is currently at. How many more choices you can offer to it.


// aiPersonality.finalOutcome = function (attribute, attributeOutcome) {
//    if (aiPersonality.attribute1 === 0) {
//       $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.Outcome_0);
//    } else if (aiPersonality.attribute1 === 1) {
//       $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.Outcome_1);
//    } else if (aiPersonality.attribute1 === 2) {
//       $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.Outcome_2);
//    } else if (aiPersonality.attribute1 === 3) {
//       $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.Outcome_3);
//    } else if (aiPersonality.attribute1 === 4) {
//       $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.Outcome_4);
//    } else {
//       console.log('nothing happening with attribute 1');
//    };
// }




// aiPersonality.finalOutcome = function () {
//    // let finalOutcome1 = function() {
//       if (aiPersonality.attribute1 === 0) {
//          $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.attribute1_Outcome_0);
//       } else if (aiPersonality.attribute1 === 1) {
//          $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.attribute1_Outcome_1);
//       } else if (aiPersonality.attribute1 === 2) {
//          $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.attribute1_Outcome_2);
//       } else if (aiPersonality.attribute1 === 3) {
//          $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.attribute1_Outcome_3);
//       } else if (aiPersonality.attribute1 === 4) {
//          $('.outcomeText1').append(aiPersonality.outcomes.attribute1Outcomes.attribute1_Outcome_4);
//       } else {
//          console.log('nothing happening with attribute 1');
//       };
//    // };
//    // let finalOutcome2 = function () {
//       if (aiPersonality.attribute2 === 0) {
//          $('.outcomeText2').append(aiPersonality.outcomes.attribute2Outcomes.attribute2_Outcome_0);
//       } else if (aiPersonality.attribute2 === 1) {
//          $('.outcomeText2').append(aiPersonality.outcomes.attribute2Outcomes.attribute2_Outcome_1);
//       } else if (aiPersonality.attribute2 === 2) {
//          $('.outcomeText2').append(aiPersonality.outcomes.attribute2Outcomes.attribute2_Outcome_2);
//       } else if (aiPersonality.attribute2 === 3) {
//          $('.outcomeText2').append(aiPersonality.outcomes.attribute2Outcomes.attribute2_Outcome_3);
//       } else if (aiPersonality.attribute2 === 4) {
//          $('.outcomeText2').append(aiPersonality.outcomes.attribute2Outcomes.attribute2_Outcome_4);
//       } else {
//          console.log('nothing attribute 2');
//       };
//    // };
//    // let finalOutcome3 = function () {
//       if (aiPersonality.attribute3 === 0) {
//          $('.outcomeText3').append(aiPersonality.outcomes.attribute3Outcomes.attribute3_Outcome_0);
//       } else if (aiPersonality.attribute3 === 1) {
//          $('.outcomeText3').append(aiPersonality.outcomes.attribute3Outcomes.attribute3_Outcome_1);
//       } else if (aiPersonality.attribute3 === 2) {
//          $('.outcomeText3').append(aiPersonality.outcomes.attribute3Outcomes.attribute3_Outcome_2);
//       } else if (aiPersonality.attribute3 === 3) {
//          $('.outcomeText3').append(aiPersonality.outcomes.attribute3Outcomes.attribute3_Outcome_3);
//       } else if (aiPersonality.attribute3 === 4) {
//          $('.outcomeText3').append(aiPersonality.outcomes.attribute3Outcomes.attribute3_Outcome_4);
//       } else {
//          console.log('nothing attribute 3');
//       };
//    // };
//    // let finalOutcome4 = function () {
//       if (aiPersonality.attribute4 === 0) {
//          $('.outcomeText4').append(aiPersonality.outcomes.attribute4Outcomes.attribute4_Outcome_0);
//       } else if (aiPersonality.attribute4 === 1) {
//          $('.outcomeText4').append(aiPersonality.outcomes.attribute4Outcomes.attribute4_Outcome_1);
//       } else if (aiPersonality.attribute4 === 2) {
//          $('.outcomeText4').append(aiPersonality.outcomes.attribute4Outcomes.attribute4_Outcome_2);
//       } else if (aiPersonality.attribute4 === 3) {
//          $('.outcomeText4').append(aiPersonality.outcomes.attribute4Outcomes.attribute4_Outcome_3);
//       } else if (aiPersonality.attribute4 === 4) {
//          $('.outcomeText4').append(aiPersonality.outcomes.attribute4Outcomes.attribute4_Outcome_4);
//       } else {
//          console.log('nothing attribute 4');
//       };
//    // };
//    // let finalOutcome5 = function () {
//       if (aiPersonality.attribute5 === 0) {
//          $('.outcomeText5').append(aiPersonality.outcomes.attribute5Outcomes.attribute5_Outcome_0);
//       } else if (aiPersonality.attribute5 === 1) {
//          $('.outcomeText5').append(aiPersonality.outcomes.attribute5Outcomes.attribute5_Outcome_1);
//       } else if (aiPersonality.attribute5 === 2) {
//          $('.outcomeText5').append(aiPersonality.outcomes.attribute5Outcomes.attribute5_Outcome_2);
//       } else if (aiPersonality.attribute5 === 3) {
//          $('.outcomeText5').append(aiPersonality.outcomes.attribute5Outcomes.attribute5_Outcome_3);
//       } else if (aiPersonality.attribute5 === 4) {
//          $('.outcomeText5').append(aiPersonality.outcomes.attribute5Outcomes.attribute5_Outcome_4);
//       } else {
//          console.log('nothing attribute 5');
//       };
//    // };
// };