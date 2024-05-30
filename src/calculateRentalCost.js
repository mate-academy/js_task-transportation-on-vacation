/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentCost = 40;
  const rentOff = days < 3 ? 0 : days >= 3 && days >= 7 ? 50 : 20;

  return rentCost * days - rentOff;
}

module.exports = calculateRentalCost;
