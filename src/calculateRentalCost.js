/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;

  if (days >= 3 && days < 7) {
    return cost * days - 20;
  }

  if (days >= 7) {
    return cost * days - 50;
  }

  return cost * days;
}

module.exports = calculateRentalCost;
