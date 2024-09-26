/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const days3Off = 20;
  const days7Off = 50;
  const dailyCost = 40;
  const startPrice = days * dailyCost;

  if (days < 3) {
    return startPrice;
  } else if (days < 7) {
    return startPrice - days3Off;
  }

  return startPrice - days7Off;
}

module.exports = calculateRentalCost;
