/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  return 40 * days - (days >= 7 ? 50 : days >= 3 ? 20 : 0);
}

module.exports = calculateRentalCost;
