/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days > 6) {
    return days * 40 - 50;
  }

  if (days > 2) {
    return days * 40 - 20;
  }

  return days * 40;
}

module.exports = calculateRentalCost;
