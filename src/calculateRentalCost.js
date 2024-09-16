/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = 40 * days;
  const normalDiscount = 20;
  const extendedDiscount = 50;

  if (days >= 3 && days < 7) {
    return total - normalDiscount;
  }

  if (days >= 7) {
    return total - extendedDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
