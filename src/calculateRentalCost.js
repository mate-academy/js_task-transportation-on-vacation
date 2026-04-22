/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const RENT_PER_DAY = 40;

  const totalCost = RENT_PER_DAY * days;

  if (days >= 7) {
    return totalCost - 50;
  }

  if (days >= 3) {
    return totalCost - 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
