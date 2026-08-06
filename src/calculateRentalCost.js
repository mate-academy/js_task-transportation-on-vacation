/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  if (!isFinite(days) && days <= 0) {
    return 0;
  }

  const BASE_PRICE = 40;
  const SHORT_THERM = 3;
  const SHORT_THERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const CALC_RENT = days * BASE_PRICE;

  if (days >= SHORT_THERM && days < LONG_TERM) {
    return CALC_RENT - SHORT_THERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return CALC_RENT - LONG_TERM_DISCOUNT;
  }

  return CALC_RENT;
}

module.exports = calculateRentalCost;
