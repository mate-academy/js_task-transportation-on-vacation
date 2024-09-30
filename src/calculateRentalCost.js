/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_TERM_DISCONT = 50;
  const SHOT_TERM_DISCONT = 20;
  const LONG_TERM = 7;
  const SHOT_TERM = 3;

  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM) {
    return basePrice - LONG_TERM_DISCONT;
  }

  if (days >= SHOT_TERM) {
    return basePrice - SHOT_TERM_DISCONT;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
