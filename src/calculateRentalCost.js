/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const rentalCost = 40;

  if (days < MEDIUM_TERM) {
    return rentalCost * days;
  }

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    return rentalCost * days - MEDIUM_TERM_DISCOUNT;
  }

  return rentalCost * days - LONG_TERM_DISCOUNT;
}
module.exports = calculateRentalCost;
