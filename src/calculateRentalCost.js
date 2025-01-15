/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const BIG_DISCOUNT = 50;
  const SMALL_DISCOUNT = 20;
  const LONG_TERM = 7;
  const MEDIUM_TERM = 3;
  const PRICE = 40;
  const cost = days * PRICE;
  let totalCost = 0;

  if (days >= LONG_TERM) {
    totalCost = cost - BIG_DISCOUNT;

    return totalCost;
  }

  if (days >= MEDIUM_TERM) {
    totalCost = cost - SMALL_DISCOUNT;

    return totalCost;
  }
  totalCost = cost;

  return totalCost;
}

module.exports = calculateRentalCost;
