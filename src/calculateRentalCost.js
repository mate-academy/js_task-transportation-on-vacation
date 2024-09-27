/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const WEEKLY_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;
const WEEK = 7;
const THREE_DAYS = 3;

function calculateRentalCost(days) {
  let totalCost = days * DAILY_RATE;

  if (days >= WEEK) {
    return totalCost - WEEKLY_DISCOUNT;
  } else if (days >= THREE_DAYS) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
