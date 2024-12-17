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
    return days * dailyCost - maxRabat;
  }

  if (days >= 3) {
    return days * dailyCost - minRabat;
  }

  return days * dailyCost;
}

module.exports = calculateRentalCost;
