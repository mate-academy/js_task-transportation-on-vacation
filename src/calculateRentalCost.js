/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_COST = 40;
  const SHORT_RENT = 3;
  const SHORT_RENT_DISCOUNT = 20;
  const LONG_RENT = 7;
  const LONG_RENT_DISCOUNT = 50;
  const BASE_PRICE = RENT_COST * days;

  if (days >= LONG_RENT) {
    return BASE_PRICE - LONG_RENT_DISCOUNT;
  }

  if (days >= SHORT_RENT) {
    return BASE_PRICE - SHORT_RENT_DISCOUNT;
  }

  return BASE_PRICE;
}

module.exports = calculateRentalCost;

// correct all errors
