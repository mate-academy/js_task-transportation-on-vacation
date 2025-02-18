/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let totalSum = days * 40;

  if (days < 7 && days >= 3) {
    totalSum = days * 40 - 20;
  }

  if (days >= 7) {
    totalSum = days * 40 - 50;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
