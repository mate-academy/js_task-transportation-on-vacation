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
  const finalCost = rentalCost * days;

  if (days < MEDIUM_TERM) {
    return finalCost;
  }

  if (days >= MEDIUM_TERM && days < LONG_TERM) {
    return finalCost - MEDIUM_TERM_DISCOUNT;
  }

  return finalCost - LONG_TERM_DISCOUNT;
}
module.exports = calculateRentalCost;
