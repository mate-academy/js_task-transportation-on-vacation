/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const week = 7;
  const severalDays = 3;

  if (days >= week) {
    return total - bigDiscount;
  }

  if (days >= severalDays) {
    return total - smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
