/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const MEDIUM_TERM = (days > 2 && days < 7);
  const MEDIUM_TERM_DISCOUNT = 20;
  const LONG_TERM = days >= 7;
  const LONG_TERM_DISCOUNT = 50;

  const totalCost = days * PRICE_PER_DAY;

  if (MEDIUM_TERM) {
    return totalCost - MEDIUM_TERM_DISCOUNT;
  }

  if (LONG_TERM) {
    return totalCost - LONG_TERM_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
