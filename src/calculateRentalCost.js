/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_PERIOD = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_PERIOD = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const totalCost = PRICE_PER_DAY * days;

  // Add an 50$ discount for 7 and more days of rent
  if (days >= LONG_TERM_PERIOD) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  // Add the 20$ discount from 3 to 6 days of rent
  if (days >= SHORT_TERM_PERIOD) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
