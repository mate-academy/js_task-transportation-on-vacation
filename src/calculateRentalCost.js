/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;

  if (days >= 7) {
    return rentCost * days - 50;
  }

  if (days >= 3) {
    return rentCost * days - 20;
  }

  return rentCost * days;
}

module.exports = calculateRentalCost;
