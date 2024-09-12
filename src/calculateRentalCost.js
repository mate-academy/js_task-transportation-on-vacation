/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basicCost = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days >= 7) {
    return (basicCost * days) - bigDiscount;
  }

  if (days >= 3) {
    return (basicCost * days) - smallDiscount;
  }

  return basicCost * days;
}

module.exports = calculateRentalCost;
