'use strict';

function calculateRentalCost(days) {
  const cost = 40;
  const bonusThree = 20;
  const bonusSeven = 50;

  const rentDays = days * cost;
  const rentThreeDays = rentDays - bonusThree;
  const rentSevenDays = rentDays - bonusSeven;

  const firstStageBonus = 3;
  const secondStageBonus = 7;

  let result = rentDays;

  if (days >= secondStageBonus) {
    result = rentSevenDays;
  }

  if (days >= firstStageBonus && days < secondStageBonus) {
    result = rentThreeDays;
  }

  return result;
}

module.exports = calculateRentalCost;
