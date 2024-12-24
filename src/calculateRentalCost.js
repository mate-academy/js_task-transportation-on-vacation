/**
 * @param {number} days
 *
 * @return {number}
 */
function CalculateRentalCost(days) {
  const dailyCost = 40;

  let totalCost = days * dailyCost;

  if (days >= 3) {
    totalCost -= 20;
  }

  if (days >= 7) {
    totalCost -= 30;
  }

  return totalCost;
}

module.exports = CalculateRentalCost;
