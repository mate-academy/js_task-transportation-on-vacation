/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  if (days > 1 && days < 3) {
    return 40 * days;
  }

  if (days > 2 && days < 7) {
    return 40 * days - 20;
  }

  return 40 * days - 50;
}

module.exports = calculateRentalCost;
