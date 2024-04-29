/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalCost = 0;

  if (days >= 7) {
    totalCost = days * 40 - 50;
  } else if (days >= 3) {
    totalCost = days * 40 - 20;
  } else {
    totalCost = days * 40;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
