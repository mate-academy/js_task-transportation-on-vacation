/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const totalCost = costPerDay * days;

  if (days >= 7) {
    return totalCost - 50;
  } else if (days >= 3 && days < 7) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
