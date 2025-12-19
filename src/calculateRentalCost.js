/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const LONG_TERM = 7;
  const SHROT_TERM = 3;
  const PRICE_PER_DAY = 40;
  const DISCOUNT_SHORT_TERM = 20;
  const DISCOUNT_LONG_TERM = 50;

  if (days >= LONG_TERM) {
    return days * PRICE_PER_DAY - DISCOUNT_LONG_TERM;
  }

  if (days >= SHROT_TERM) {
    return days * PRICE_PER_DAY - DISCOUNT_SHORT_TERM;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
