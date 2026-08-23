/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;

  const totalCost = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
