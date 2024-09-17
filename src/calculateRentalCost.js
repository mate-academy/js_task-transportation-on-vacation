/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  const sevenMoreOff = 50;
  const threeMoreOff = 20;

  if (days >= 7) {
    return totalCost - sevenMoreOff;
  }
  if (days >= 3) {
    return totalCost - threeMoreOff;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
