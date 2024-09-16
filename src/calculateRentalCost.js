/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  return days >= 3 && days < 7
    ? days * 40 - 20
    : days >= 7
      ? days * 40 - 50
      : 40 * days;
}
module.exports = calculateRentalCost;
