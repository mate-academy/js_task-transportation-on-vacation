/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const bigDiscount = 50;
  const smallDiscount = 20;
  const cost = days * 40;

  if (days >= 7) {
    return cost - bigDiscount;
  }

  if (days >= 3) {
    return cost - smallDiscount;
  }

  return cost;
}

module.exports = calculateRentalCost;
