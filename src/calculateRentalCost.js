/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const MID_TERM = 3;
  const LONG_TERM_DISCOUNT = 50;
  const MID_TERM_DISCOUNT = 20;
  const PRICE_PER_DAY = 40;
  const rentalPrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return rentalPrice - LONG_TERM_DISCOUNT;
  }

  if (days >= MID_TERM) {
    return rentalPrice - MID_TERM_DISCOUNT;
  }

  return rentalPrice;
}

module.exports = calculateRentalCost;
