'use strict';

const DAILY_RATE = 40;
const DISCOUNT_THREE_DAYS = 20;
const DISCOUNT_SEVEN_DAYS = 50;
const THRESHOLD_THREE_DAYS = 3;
const THRESHOLD_SEVEN_DAYS = 7;

/**
 * @param {number} days
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseTotal = days * DAILY_RATE;

  if (days >= THRESHOLD_SEVEN_DAYS) {
    return baseTotal - DISCOUNT_SEVEN_DAYS;
  }

  if (days >= THRESHOLD_THREE_DAYS) {
    return baseTotal - DISCOUNT_THREE_DAYS;
  }

  return baseTotal;
}

module.exports = calculateRentalCost;
