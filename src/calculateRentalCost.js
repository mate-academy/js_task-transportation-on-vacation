/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCost = 40;

  if (days >= 3 && days < 7) {
    return rentCost * days - 20;
  }

  if (days >= 7) {
    return rentCost * days - 50;
  }

  return rentCost * days;
}

module.exports = calculateRentalCost;
