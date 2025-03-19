/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM_DISCOUNT = 20;
  const totalCost = days * PRICE_PER_DAY;

  if (days >= 7) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  if (days >= 3) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
