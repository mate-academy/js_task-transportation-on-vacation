/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;

  if (days < 3) {
    return dailyCost * days;
  }

  if (days >= 3 && days <= 6) {
    return dailyCost * days - 20;
  }

  return dailyCost * days - 50;
}

module.exports = calculateRentalCost;
