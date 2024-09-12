/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const sevenDayDiscount = 50;
  const threeDayDiscount = 20;
  const totalCost = days * dailyCost;

  if (days >= 7) {
    return totalCost - sevenDayDiscount;
  }

  if (days >= 3) {
    return totalCost - threeDayDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
