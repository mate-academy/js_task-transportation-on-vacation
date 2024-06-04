/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_SHORT_RENT = 20;
  const DISCOUNT_LONG_RENT = 50;

  const price = days * COST_PER_DAY;

  if (days >= 7) {
    return price - DISCOUNT_LONG_RENT;
  }

  if (days >= 3) {
    return price - DISCOUNT_SHORT_RENT;
  }

  return price;
}

module.exports = calculateRentalCost;
