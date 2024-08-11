/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  return days > 2 && days < 7
    ? days * 40 - 20
    : days > 6
      ? days * 40 - 50
      : days * 40;
}

module.exports = calculateRentalCost;
