/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const threeDaysDiscount = 20;
  const sevenDaysDiscount = 50;

  const totalCost = days * dailyCost;

  if (days >= 7) {
    return totalCost - sevenDaysDiscount;
  }

  if (days >= 3) {
    return totalCost - threeDaysDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
