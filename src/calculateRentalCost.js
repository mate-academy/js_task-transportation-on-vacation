/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_FOR_3_DAYS = 20;
  const DISCOUNT_FOR_7_DAYS = 50;
  const TOTAL_PRICE = PRICE_PER_DAY * days;

  if (days >= 7) {
    return TOTAL_PRICE - DISCOUNT_FOR_7_DAYS;
  }

  if (days >= 3) {
    return TOTAL_PRICE - DISCOUNT_FOR_3_DAYS;
  }

  return TOTAL_PRICE;
}

module.exports = calculateRentalCost;
