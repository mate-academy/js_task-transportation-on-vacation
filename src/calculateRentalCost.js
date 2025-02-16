/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;

  const dayCountsForSmallDiscount = 3;
  const dayCountsForBigDiscount = 7;

  const smallDiscount = 20;
  const bigDiscount = 50;

  const costSum = days * costPerDay;

  if (days >= dayCountsForBigDiscount) {
    return costSum - bigDiscount;
  }

  if (days >= dayCountsForSmallDiscount) {
    return costSum - smallDiscount;
  }

  return costSum;
}

module.exports = calculateRentalCost;
