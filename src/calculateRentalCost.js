/**
 * @param {number} rentalDays
 *
 * @return {number}
 */
function calculateRentalCost(rentalDays) {
  const DAILY_RATE = 40;

  const LONG_TERM_LIMIT = 7;
  const LONG_TERM_DISCOUNT = 50;

  const SHORT_TERM_LIMIT = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const totalBasePrice = rentalDays * DAILY_RATE;

  if (rentalDays >= LONG_TERM_LIMIT) {
    return totalBasePrice - LONG_TERM_DISCOUNT;
  }

  if (rentalDays >= SHORT_TERM_LIMIT) {
    return totalBasePrice - SHORT_TERM_DISCOUNT;
  }

  return totalBasePrice;
}

module.exports = calculateRentalCost;
