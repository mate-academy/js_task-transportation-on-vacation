/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const Price = 40;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const BASE_PRISE = Price * numberOfDays;

  if (numberOfDays >= LONG_TERM) {
    return BASE_PRISE - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return BASE_PRISE - SHORT_TERM_DISCOUNT;
  }

  return BASE_PRISE;
}

module.exports = calculateRentalCost;
