/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;

  const SHORT_TERM = 3;
  const LONG_TERM = 7;

  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM_DISCOUNT = 50;

  const baseCost = pricePerDay * days;

  if (days >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
