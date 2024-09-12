/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return total - bigDiscount;
  }

  if (days >= 3) {
    return total - smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
