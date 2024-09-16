/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  const RENT_PRICE = 40;

  const rentalCost = days * RENT_PRICE;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return rentalCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return rentalCost - LONG_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
