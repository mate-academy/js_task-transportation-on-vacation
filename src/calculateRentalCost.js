/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseValue = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return days * baseValue - bigDiscount;
  }

  if (days >= 3) {
    return days * baseValue - smallDiscount;
  }

  return days * baseValue;
}

module.exports = calculateRentalCost;
