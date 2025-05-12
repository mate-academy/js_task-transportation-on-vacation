/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  const totalCost = dailyCost * days;

  if (days >= 3 && days < 7) {
    return totalCost - threeDaysDiscount;
  }

  if (days >= 7) {
    return totalCost - sevenDaysDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
