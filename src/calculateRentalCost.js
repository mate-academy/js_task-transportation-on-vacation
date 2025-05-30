/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(numberOfDays) {
  let basePrice = numberOfDays * 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (numberOfDays >= LONG_TERM) {
    basePrice -= LONG_TERM_DISCOUNT;
  } else if (numberOfDays >= SHORT_TERM) {
    basePrice -= SHORT_TERM_DISCOUNT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
