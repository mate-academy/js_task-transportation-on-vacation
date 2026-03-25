/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST = 40;
  const DISCOUNT_FEW_DAYS = 20;
  const DISCOUNT_WEEK = 50;
  const totalPrice = COST * days;

  if (days >= 7) {
    return totalPrice - DISCOUNT_WEEK;
  }

  if (days >= 3) {
    return totalPrice - DISCOUNT_FEW_DAYS;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
