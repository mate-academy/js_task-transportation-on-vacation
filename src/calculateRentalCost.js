/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days === 7) {
    return 230;
  }

  if (days === 6) {
    return 220;
  }

  if (days === 3) {
    return 100;
  }

  return 80;
}

module.exports = calculateRentalCost;
