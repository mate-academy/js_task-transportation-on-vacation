/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;

  const totalPrice = numberOfDays * 40;

  if (numberOfDays >= LONG_TERM) {
    return totalPrice - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return totalPrice - SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
