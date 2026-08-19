/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const LONG_TERM = 7;
const LONG_TERM_DISCOUNT = 50;
const BASIC_RENTAL_PERIOD = 3;
const BASIC_DISCOUNT = 20;

function calculateRentalCost(numberOfDays) {
  // write code here
  if (numberOfDays >= LONG_TERM) {
    return numberOfDays * DAILY_RATE - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= BASIC_RENTAL_PERIOD) {
    return numberOfDays * DAILY_RATE - BASIC_DISCOUNT;
  }

  return numberOfDays * DAILY_RATE;
}

module.exports = calculateRentalCost;
