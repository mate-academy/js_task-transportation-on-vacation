/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const LONG_RENT = 7;
  const SHORT_RENT = 3;
  const DISCOUNT_LONG = 50;
  const DISCOUNT_SHORT = 20;

  if (days >= LONG_RENT) {
    return days * COST - DISCOUNT_LONG;
  } else if (days >= SHORT_RENT) {
    return days * COST - DISCOUNT_SHORT;
  }

  return days * COST;
}

module.exports = calculateRentalCost;
