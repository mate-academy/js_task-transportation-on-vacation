'use strict';

function calculateRentalCost(days) {
  const cost = 40;
  const bonusThree = 20;
  const bonusSeven = 50;

  const rentDays = days * cost;
  const rentThreeDays = rentDays - bonusThree;
  const rentSevenDays = rentDays - bonusSeven;

  const dayThree = 3;
  const daySeven = 7;

  let result = rentDays;

  if (days >= daySeven) {
    result = rentSevenDays;
  }

  if (days >= dayThree && days < daySeven) {
    result = rentThreeDays;
  }

  return result;
}

module.exports = calculateRentalCost;
