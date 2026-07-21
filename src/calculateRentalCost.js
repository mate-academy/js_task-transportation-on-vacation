/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  return days < 3 ? 40 * days : days < 7 ? 40 * days - 20 : 40 * days - 50;
}

module.exports = calculateRentalCost;
