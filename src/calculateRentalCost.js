/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const minDiscount = 20;
  const maxDiscount = 50;

  if (days >= 7) {
    return dailyCost * days - maxDiscount;
  }

  if (days >= 3) {
    return dailyCost * days - minDiscount;
  }

  return dailyCost * days;
}

module.exports = calculateRentalCost;
