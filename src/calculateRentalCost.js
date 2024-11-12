/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const daysCost = days * 40;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;

  if (days >= SHORT_TERM && days < LONG_TERM) {
    return daysCost - SHORT_TERM_DISCOUNT;
  }

  if (days >= LONG_TERM) {
    return daysCost - LONG_TERM_DISCOUNT;
  }

  return daysCost;
}

module.exports = calculateRentalCost;
