/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalSum = days * basePrice;

  if (days >= 7) {
    return totalSum - bigDiscount;
  } else if (days >= 3) {
    return totalSum - smallDiscount;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
