/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = days * 40;

  if (days >= 7) {
    return totalSum - 50;
  } else if (days >= 3) {
    return totalSum - 20;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
