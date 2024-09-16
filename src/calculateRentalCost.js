/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BASE_PRICE = 40;
  const SMALL_DISCOUNT = 20;
  const BIG_DISCOUNT = 50;

  let cost = BASE_PRICE * days;

  if (days >= 3 && days < 7) {
    cost -= SMALL_DISCOUNT;
  }

  if (days >= 7) {
    cost -= BIG_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
