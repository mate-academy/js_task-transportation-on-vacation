/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentCosts = 40;
  const totalRent = rentCosts * days;
  if (days >= 7) {
    return totalRent - 50;
  } else if (days >= 3) {
    return totalRent - 20;
  }
  return totalRent;
}

module.exports = calculateRentalCost;
