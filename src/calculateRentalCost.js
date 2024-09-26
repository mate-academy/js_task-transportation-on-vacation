/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountForSevenDays = 50;
  const discountForThreeDays = 20;
  const totalCost = days * pricePerDay;
  if (days >= 7) {
    return totalCost - discountForSevenDays;
  }
  if (days >= 3) {
    return totalCost - discountForThreeDays;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
