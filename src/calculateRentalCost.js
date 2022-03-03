'use strict';

function calculateRentalCost(days) {
  const cost = 40;
  const secondStageCost = 20;
  const thirdStageCost = 50;

  const rentDays = days * cost;
  const rentDaysSecondStage = rentDays - secondStageCost;
  const rentDaysThirdStage = rentDays - thirdStageCost;

  const firstStageBonus = 3;
  const secondStageBonus = 7;

  let result = rentDays;

  if (days >= secondStageBonus) {
    result = rentDaysThirdStage;
  }

  if (days >= firstStageBonus && days < secondStageBonus) {
    result = rentDaysSecondStage;
  }

  return result;
}

module.exports = calculateRentalCost;
