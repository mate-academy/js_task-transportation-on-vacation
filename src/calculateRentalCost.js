/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_RENT = 40;

  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const rentalCost = days * CAR_RENT;

  if (days >= LONG_TERM) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return rentalCost - SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
