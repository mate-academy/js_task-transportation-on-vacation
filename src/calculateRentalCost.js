/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const LONG_DISCOUNT = 50;
  const SHORT_DISCOUNT = 20;

  if (days >= 7) {
    return days * PRICE_PER_DAY - LONG_DISCOUNT;
  }

  if (days >= 3 && days < 7) {
    return days * PRICE_PER_DAY - SHORT_DISCOUNT;
  }

  return days * PRICE_PER_DAY;
}

module.exports = calculateRentalCost;
