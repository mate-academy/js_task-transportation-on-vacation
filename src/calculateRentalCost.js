/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_RENT_COST = 40;

  const SHORT_RENT_TERM = 3;
  const SHORT_RENT_DISCOUNT = 20;

  const LONG_RENT_TERM = 7;
  const LONG_RENT_DISCOUNT = 50;

  const rentCost = days * BASE_RENT_COST;

  if (days >= LONG_RENT_TERM) {
    return rentCost - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT_TERM) {
    return rentCost - SHORT_RENT_DISCOUNT;
  }

  return rentCost;
}

module.exports = calculateRentalCost;
