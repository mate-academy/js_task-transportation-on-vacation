/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentCostForOneDay = 40;
  const getOff7days = 50;
  const getOff3days = 20;
  let totalCost = rentCostForOneDay * days;

  if (days >= 7) {
    totalCost -= getOff7days;
  } else if (days >= 3) {
    totalCost -= getOff3days;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
