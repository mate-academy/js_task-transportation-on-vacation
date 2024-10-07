/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const COST_RENT_CAR = 40;
  const BIG_DISCOUNT = 50;
  const LESS_DISCOUNT = 20;

  const price = days * COST_RENT_CAR;

  if (days >= 7) {
    return price - BIG_DISCOUNT;
  }

  if (days >= 3) {
    return price - LESS_DISCOUNT;
  }

  return price;
}
module.exports = calculateRentalCost;
