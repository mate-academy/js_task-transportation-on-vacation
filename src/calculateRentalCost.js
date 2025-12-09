/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCosts = 40;

  if (days >= 7) {
    return carCosts * days - 50;
  }

  if (days >= 3) {
    return carCosts * days - 20;
  }

  return days * carCosts;
}

module.exports = calculateRentalCost;
