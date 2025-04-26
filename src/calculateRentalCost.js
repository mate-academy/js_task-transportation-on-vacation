/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  if (days > 6) {
    return 40 * days - 50;
  }

  if (days > 2) {
    return 40 * days - 20;
  }

  return 40 * days;
}

module.exports = calculateRentalCost;
