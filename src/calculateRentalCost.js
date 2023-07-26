'use strict';

const DAILY_COST = 40;
const DISCOUNT_FOR_WEEK = 50;
const DISCOUNT_FOR_THREE_DAYS = 20;
const THREE_DAYS = 3;
const SEVEN_DAYS = 7;

function calculateRentalCost(days) {
  let total = days * DAILY_COST;

  if (days >= SEVEN_DAYS) {
    total -= DISCOUNT_FOR_WEEK;

    return total;
  }

  if (days >= THREE_DAYS) {
    total -= DISCOUNT_FOR_THREE_DAYS;

    return total;
  }

  return total;
}

module.exports = calculateRentalCost;
