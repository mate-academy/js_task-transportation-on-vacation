/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_COST = 40;
const MIN_DAYS_FOR_SHORT_TERM_DISCOUNT = 3;
const MIN_DAYS_FOR_LONG_TERM_DISCOUNT = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

function calculateRentalCost(numberOfDays) {
  const totalCost = numberOfDays * DAILY_COST;

  if (numberOfDays >= MIN_DAYS_FOR_LONG_TERM_DISCOUNT) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= MIN_DAYS_FOR_SHORT_TERM_DISCOUNT) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
