/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const sumPerDay = 40;
  const totalSum = sumPerDay * days;
  const smallDiscount = 20;
  const largeDiscount = 50;

  if (days >= 7) {
    return totalSum - largeDiscount;
  }

  if (days >= 3) {
    return totalSum - smallDiscount;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
