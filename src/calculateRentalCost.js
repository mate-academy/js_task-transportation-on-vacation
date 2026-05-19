/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RENT = 40;
const LONG_TERM_DAYS = 7;
const SHORT_TERM_DAYS = 3;
const LONG_TERM_DISCOUNT = 50;
const SHORT_TERM_DISCOUNT = 20;

function calculateRentalCost(days) {
  const rentTotal = days * DAILY_RENT;

  if (days >= LONG_TERM_DAYS) {
    return rentTotal - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_DAYS) {
    return rentTotal - SHORT_TERM_DISCOUNT;
  }

  return rentTotal;
}

module.exports = calculateRentalCost;
