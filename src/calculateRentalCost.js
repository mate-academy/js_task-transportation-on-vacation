/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const fixedSum = 40 * days;
  const smallDiscount = 20;
  const bigDiscount = 50;

  if (days < 3) {
    return fixedSum;
  }

  if (days < 7) {
    return fixedSum - smallDiscount;
  }

  return fixedSum - bigDiscount;
}

module.exports = calculateRentalCost;
