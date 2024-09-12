/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;
  const baseDiscountDaysLimit = 3;
  const normalDiscountDaysLimit = 7;
  const baseDiscount = 20;
  const normalDiscount = 50;
  const total = days * rentCost;

  if (days < baseDiscountDaysLimit) {
    return total;
  }

  if (days < normalDiscountDaysLimit) {
    return total - baseDiscount;
  }

  return total - normalDiscount;
}

module.exports = calculateRentalCost;
