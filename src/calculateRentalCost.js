/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const carCost = 40;
  const totalSpend = carCost * days;

  if (days > 6) {
    return totalSpend - 50;
  }

  if (days > 2) {
    return totalSpend - 20;
  }

  return totalSpend;
}

module.exports = calculateRentalCost;
