/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_DAY = 40;
  const MORE_DAYS_7 = 7;
  const DISCOUNT_7 = 50;
  const MORE_DAYS_3 = 3;
  const DISCOUNT_3 = 20;

  const totalPrice = days * PRICE_DAY;

  if (days >= MORE_DAYS_7) {
    return totalPrice - DISCOUNT_7;
  }

  if (days >= MORE_DAYS_3) {
    return totalPrice - DISCOUNT_3;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
