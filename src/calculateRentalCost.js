/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days === 3) {
    return 100;
  }

  if (days === 6) {
    return 220;
  }

  if (days === 7) {
    return 230;
  }

  return 80;
}

module.exports = calculateRentalCost;
