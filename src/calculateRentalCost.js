/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const ONE_DAY_COST = 40;
  const DISCOUNT_7 = 50;
  const DISCOUNT_3 = 20;

  let total = days * ONE_DAY_COST;

  if (days >= 7) {
    total -= DISCOUNT_7;
  }

  if (days >= 3 && days < 7) {
    total -= DISCOUNT_3;
  }

  return total;
}

module.exports = calculateRentalCost;
