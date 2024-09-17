/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_RENT = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENT = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const totalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_RENT) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT) {
    return totalCost - SHORT_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
