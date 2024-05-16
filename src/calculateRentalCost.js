/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAY_COST = 40;
  const LONG_TERM = 7;
  const SHORT_TERM = 3;
  const DISCOUNT_7_MORE_DAYS = 50;
  const DISCTOUNT_3_MORE_DAYS = 20;
  
  const basePrice = days * DAY_COST;

  if (days >= LONG_TERM) {
    return basePrice - DISCOUNT_7_MORE_DAYS;
  }

  if (days >= SHORT_TERM) {
    return basePrice - DISCTOUNT_3_MORE_DAYS;
  }

  return basePrice;
}

module.exports = calculateRentalCost;
