/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discount3Days = 20;
  const discount7Days = 50;
  const basicDiscountDays = 3;
  const bigDiscountDays = 7;

  const totalCost = days * dailyRate;

  if (days < basicDiscountDays) {
    return totalCost;
  }

  if (days < bigDiscountDays) {
    return totalCost - discount3Days;
  }

  return totalCost - discount7Days;
}

module.exports = calculateRentalCost;
