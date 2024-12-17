/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const minRabat = 20;
  const maxRabat = 50;
  const dailyCost = 40;

  if (days >= 7) {
    return dailyCost * days - maxRabat;
  }

  if (days >= 3) {
    return dailyCost * days - minRabat;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
