/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_CAR_COST = 40;
  const MAX_DISCOUNT_DAYS = 7;
  const MAX_DISCOUNT = 50;
  const MIN_DISCOUNT_DAYS = 3;
  const MIN_DISCOUNT = 20;
  const totalPrice = days * RENT_CAR_COST;

  if (days >= MAX_DISCOUNT_DAYS) {
    return totalPrice - MAX_DISCOUNT;
  }

  if (days >= MIN_DISCOUNT_DAYS) {
    return totalPrice - MIN_DISCOUNT;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
