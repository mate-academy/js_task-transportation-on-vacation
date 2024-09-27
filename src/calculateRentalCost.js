/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = 40;
  const discountFromThreeDays = 20;
  const discountFromSevenDays = 50;
  const totalCost = days * cost;

  if (days >= 7) {
    return totalCost - discountFromSevenDays;
  }

  if (days >= 3) {
    return totalCost - discountFromThreeDays;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
