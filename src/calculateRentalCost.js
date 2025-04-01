/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;

  const LONG_TERM_DISCOUNT = 50;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DISCOUNT = 20;
  const SHORT_TERM_DAYS = 3;

  if (days < LONG_TERM_DAYS && days >= SHORT_TERM_DAYS) {
    return days * rentalCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM_DAYS) {
    return days * rentalCost - LONG_TERM_DISCOUNT;
  }

  return days * rentalCost;
}

module.exports = calculateRentalCost;
