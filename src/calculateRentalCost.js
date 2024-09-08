/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const DAILY_RENTAL_COST = 40;
  const SHORT_TERM = 3;
  const LONG_TERM = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;
  const totalCost = numberOfDays * DAILY_RENTAL_COST;

  if (numberOfDays >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
