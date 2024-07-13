/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DISCOUNT_AFTER_3_DAYS = 20;
  const DISCOUNT_AFTER_7_DAYS = 50;
  const PRICE = days * 40;

  if (days >= 7) {
    return PRICE - DISCOUNT_AFTER_7_DAYS;
  }

  if (days >= 3) {
    return PRICE - DISCOUNT_AFTER_3_DAYS;
  }

  return PRICE;
}

module.exports = calculateRentalCost;
