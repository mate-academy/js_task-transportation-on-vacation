/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const DISCOUNT_FEW_DAYS = 20;
  const DISCOUNT_WEEK = 50;
  const TOTAL_PRICE = COST * days;

  if (days >= 7) {
    return TOTAL_PRICE - DISCOUNT_WEEK;
  }

  if (days >= 3) {
    return TOTAL_PRICE - DISCOUNT_FEW_DAYS;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
