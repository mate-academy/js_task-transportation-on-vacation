/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const PRICE_PER_DAY = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;
  const DAYS_3 = 3;
  const DAYS_7 = 7;

  const total = days * PRICE_PER_DAY;

  if (days >= DAYS_7) {
    return total - DISCOUNT_7_DAYS;
  }

  if (days >= DAYS_3) {
    return total - DISCOUNT_3_DAYS;
  }

  return total;
}

module.exports = calculateRentalCost;
