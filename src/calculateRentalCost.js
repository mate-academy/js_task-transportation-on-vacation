/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_PER_DAY = 40;
  const DISCOUNT_SHORT_RENT = 20;
  const DISCOUNT_LONG_RENT = 50;
  const LONG_RENT = 7;
  const SHORT_RENT = 3;

  const price = days * COST_PER_DAY;

  if (days >= LONG_RENT) {
    return price - DISCOUNT_LONG_RENT;
  }

  if (days >= SHORT_RENT) {
    return price - DISCOUNT_SHORT_RENT;
  }

  return price;
}

module.exports = calculateRentalCost;
