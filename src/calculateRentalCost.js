const PRICE_PER_DAY = 40;
const SHORT_TERM = 3;
const LONG_TERM = 7;
const SHORT_TERM_DISCOUNT = 20;
const LONG_TERM_DISCOUNT = 50;

/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const calculatedRentalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return calculatedRentalCost - LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    return calculatedRentalCost - SHORT_TERM_DISCOUNT;
  }

  return calculatedRentalCost;
}

module.exports = calculateRentalCost;
