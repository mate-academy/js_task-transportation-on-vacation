/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  let totalCost = days * dayCost;

  if (days >= 3 && days < 7) {
    totalCost = totalCost - 20;
  }

  if (days >= 7) {
    totalCost = totalCost - 50;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
