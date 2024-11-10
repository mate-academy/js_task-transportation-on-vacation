/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_DAY_COST = 40;
  const LONG_TERM_RENT = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_RENT = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const carCost = days * RENT_DAY_COST;

  if (days >= LONG_TERM_RENT) {
    return carCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM_RENT) {
    return carCost - SHORT_TERM_DISCOUNT;
  }

  return carCost;
}

module.exports = calculateRentalCost;
