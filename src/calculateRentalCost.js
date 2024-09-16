/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  const shortRentalDiscount = 20;
  const longRentalDiscount = 50;
  const week = 7;
  const threeDays = 3;

  if (days >= week) {
    return totalCost - longRentalDiscount;
  }

  if (days >= threeDays) {
    return totalCost - shortRentalDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
