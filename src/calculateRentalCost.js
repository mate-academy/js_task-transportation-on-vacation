/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costDay = 40;
  const dayMinimumlDiscount = 3;
  const dayMaximumDiscount = 7;

  const minDiscount = 20;
  const maxDiscount = 50;

  const finalSum = days * costDay;

  if (days >= dayMaximumDiscount) {
    return finalSum - maxDiscount;
  }

  if (days >= dayMinimumlDiscount) {
    return finalSum - minDiscount;
  }

  return finalSum;
}

module.exports = calculateRentalCost;
