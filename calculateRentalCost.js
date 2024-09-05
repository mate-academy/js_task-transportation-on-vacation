/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_COST = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(numberOfDays) {
  let basePrice = numberOfDays * DAILY_COST;

  if (numberOfDays >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
