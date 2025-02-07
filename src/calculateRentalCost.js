/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;
  const DISCOUNT_3_DAYS = 20;
  const DISCOUNT_7_DAYS = 50;

  const totalPrice = PRICE_PER_DAY * days;

  if (days < 3) {
    return totalPrice;
  }

  if (days < 7) {
    return totalPrice - DISCOUNT_3_DAYS;
  }

  return totalPrice - DISCOUNT_7_DAYS;
}

module.exports = calculateRentalCost;
