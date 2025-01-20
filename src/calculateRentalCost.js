/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_OF_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  let rentalCost = days * PRICE_OF_DAY;

  if (days >= LONG_TERM) {
    rentalCost -= LONG_TERM_DISCOUNT;
  } else if (days >= SHORT_TERM) {
    rentalCost -= SHORT_TERM_DISCOUNT;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
