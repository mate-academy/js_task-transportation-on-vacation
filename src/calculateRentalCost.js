/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = days * 40;

  if (days >= 7) {
    totalCost -= 50;

  } else if (days >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
