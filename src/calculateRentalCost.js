/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const longTerm = 7;
  const mediumTerm = 3;

  if (days >= longTerm) {
    return dailyCost * days - 50;
  }

  if (days >= mediumTerm) {
    return dailyCost * days - 20;
  }

  return days * dailyCost;
}

module.exports = calculateRentalCost;
