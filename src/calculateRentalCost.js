/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_COST = 40;
  const LONG_TERM_RENT = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENT = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const baseCost = days * RENT_CAR_COST;

  if (days >= LONG_TERM_RENT) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT) {
    return baseCost - SHORT_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
