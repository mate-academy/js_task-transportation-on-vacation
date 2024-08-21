/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const basePrice = 40;
  const numberOfDays = days;

  if (numberOfDays >= LONG_TERM) {
    return basePrice * numberOfDays - LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= SHORT_TERM) {
    return basePrice * numberOfDays - SHORT_TERM_DISCOUNT;
  } else {
    return basePrice * numberOfDays;
  }
}

module.exports = calculateRentalCost;
