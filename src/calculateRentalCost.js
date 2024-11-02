/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const sum = basePrice * days;

  if (days > 6) {
    return sum - 50;
  }

  if (days > 2) {
    return sum - 20;
  }

  return sum;
}

module.exports = calculateRentalCost;
