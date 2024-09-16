/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  const discountMax = 50;
  const discountMin = 20;
  const minDays = 3;
  const maxDays = 7;

  if (days >= maxDays) {
    return cost - discountMax;
  }

  if (days >= minDays) {
    return cost - discountMin;
  }

  return cost;
}

module.exports = calculateRentalCost;
