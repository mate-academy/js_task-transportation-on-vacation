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
    return (totalCost -= 50);
  }

  if (days >= 3) {
    return (totalCost -= 20);
  }

  return totalCost;
}

module.exports = calculateRentalCost;
