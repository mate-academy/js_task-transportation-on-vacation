/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RENTAL_COST = 40;
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const totalPrice = days * DAILY_RENTAL_COST;

  if (days >= 7) {
    return totalPrice - BIG_DISCOUNT;
  } else if (days >= 3) {
    return totalPrice - SMALL_DISCOUNT;
  } else {
    return totalPrice;
  }
}

module.exports = calculateRentalCost;
