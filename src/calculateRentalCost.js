/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = days * 40;

  if (days >= 7) {
    totalCost = totalCoast - 50;
  } else if (days >= 30) {
    totalCost = totalCoast - 20;
  }
  return totalCost;
}

module.exports = calculateRentalCost;
