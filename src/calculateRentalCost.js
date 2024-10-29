/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const minDiscount = 20;
  const maxDiscount = 50;
  let totalSum = 0;

  totalSum = days * pricePerDay;

  if (days >= 7) {
    return totalSum - maxDiscount;
  } else if (days >= 3) {
    return totalSum - minDiscount;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
