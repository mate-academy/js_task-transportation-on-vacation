'use strict';

function calculateRentalCost(days) {
  const threeDaysBonus = 20;
  const sevenDaysBonus = 50;
  const threeDaysBonusStart = 3;
  const sevenDaysBonusStart = 7;
  const rentalCost = 40;

  if (days < threeDaysBonusStart) {
    return rentalCost * days;
  }

  if (days >= threeDaysBonusStart && days < sevenDaysBonusStart) {
    return rentalCost * days - threeDaysBonus;
  }

  if (days >= sevenDaysBonusStart) {
    return rentalCost * days - sevenDaysBonus;
  }
}

module.exports = calculateRentalCost;
