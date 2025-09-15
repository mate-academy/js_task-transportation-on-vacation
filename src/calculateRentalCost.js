/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM_DISCOUNT = 50;
  const DAILY_RATE = 40;
  const MEDIUM_TERM_DISCOUNT = 20;

  const LONG_TERM_DAYS = 7;
  const MEDIUM_TERM_DAYS = 3;

  const baseCost = days * DAILY_RATE;

  if (days >= LONG_TERM_DAYS) {
    return baseCost - LONG_TERM_DISCOUNT;
  }

  if (days >= MEDIUM_TERM_DAYS) {
    return baseCost - MEDIUM_TERM_DISCOUNT;
  }

  return baseCost;
}

module.exports = calculateRentalCost;
