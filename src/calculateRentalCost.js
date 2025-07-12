/**
 * @param {number} days
 *
 * @return {number}
 * ## Task description:
 */
function calculateRentalCost(days) {
  // write code here
  let totalCost = 40 * days;

  if (days >= 7) {
    totalCost -= 50;

    return totalCost;
  }

  if (days >= 3) {
    totalCost -= 20;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
