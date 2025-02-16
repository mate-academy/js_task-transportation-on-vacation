/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const cost = 40;
  let totalCost = cost * days;

  if (days >= 7) {
    totalCost -= 50;
  } else if (days >= 3 && days < 7) {
    totalCost -= 20;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
