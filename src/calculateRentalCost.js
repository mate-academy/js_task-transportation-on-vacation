/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENT = 40;
  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const MEDIUM_TERM = 3;
  const MEDIUM_TERM_DISCOUNT = 20;

  const baseCost = days * DAILY_RENT;

  if (days >= LONG_TERM) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
