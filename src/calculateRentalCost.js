/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const LONG_TERM_DAYS = 7;
const LONG_TERM_DISCOUNT = 50;
const MEDIUM_TERM_DAYS = 3;
const MEDIUM_TERM_DISCOUNT = 20;

function calculateRentalCost(numberOfDays) {
  const basePrice = numberOfDays * DAILY_RATE;

  if (numberOfDays >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MEDIUM_TERM_DAYS) {
    return basePrice - MEDIUM_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
