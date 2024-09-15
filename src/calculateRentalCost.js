/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyPrice = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  const total = price * days;

  if (days >= 7) {
    return total - bigDiscount;
  }

  if (days >= 3) {
    return total - smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
