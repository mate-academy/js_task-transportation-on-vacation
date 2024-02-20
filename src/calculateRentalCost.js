/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const priceDay = 40;
  let totalPrice = priceDay * numberOfDays;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (numberOfDays >= LONG_TERM) {
    totalPrice -= LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= SHORT_TERM) {
    totalPrice -= SHORT_TERM_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
