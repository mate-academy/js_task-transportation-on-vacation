/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  return days < 3 ? days * 40 : days < 7 ? days * 40 - 20 : days * 40 - 50;
}

module.exports = calculateRentalCost;
