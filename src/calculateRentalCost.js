/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCount = 40;
  const totalSum = dailyRentalCount * days;
  const discountFromTreeDays = 20;
  const discountFromSevenDays = 50;

  if (days >= 3 && days <= 6) {
    return totalSum - discountFromTreeDays;
  }

  if (days >= 7) {
    return totalSum - discountFromSevenDays;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
