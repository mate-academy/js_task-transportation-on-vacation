/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const CAR_RENTAL_RATE = 40;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const rentalAmount = CAR_RENTAL_RATE * days;

  if (days >= LONG_TERM) {
    return rentalAmount - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rentalAmount - SHORT_TERM_DISCOUNT;
  }

  return rentalAmount;
}

module.exports = calculateRentalCost;
