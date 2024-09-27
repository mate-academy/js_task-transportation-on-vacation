/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40 * days;
  const discontMax = 50;
  const discontMin = 20;

  if (days >= 7) {
    return rentalCost - discontMax;
  }

  if (days >= 3) {
    return rentalCost - discontMin;
  }

  return rentalCost;
}

module.exports = calculateRentalCost;
