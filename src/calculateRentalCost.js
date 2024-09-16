/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const CAR_RENTAL_COST_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  const originalCost = days * CAR_RENTAL_COST_PER_DAY;

  if (days >= LONG_TERM) {
    return originalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= SHORT_TERM) {
    return originalCost - SHORT_TERM_DISCOUNT;
  }

  return originalCost;
}

module.exports = calculateRentalCost;
