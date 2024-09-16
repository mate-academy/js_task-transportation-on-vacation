/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const MIDDLE_TERM_DAYS = 3;
  const MIDDLE_TERM_DISCOUNT = 20;
  const LONG_TERM_DAYS = 7;
  const LONG_TERM_DISCOUNT = 50;
  const PRICE_PER_DAY = 40;
  const basePrice = days * PRICE_PER_DAY;

  if (days >= LONG_TERM_DAYS) {
    return (basePrice - LONG_TERM_DISCOUNT);
  }

  if (days >= MIDDLE_TERM_DAYS) {
    return (basePrice - MIDDLE_TERM_DISCOUNT);
  }

  return basePrice;
}

module.exports = calculateRentalCost;
