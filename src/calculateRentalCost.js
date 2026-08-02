/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const tierOneOff = 20;
  const tierTwoOff = 50;
  const totalCost = days * 40;

  if (days >= 7) {
    return totalCost - tierTwoOff;
  }

  if (days >= 3) {
    return totalCost - tierOneOff;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
