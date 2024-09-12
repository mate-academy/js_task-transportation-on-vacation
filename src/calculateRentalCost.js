/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalSum = days * 40;

  if (days >= 3 && days < 7) {
    return totalSum - 20;
  } else if (days >= 7) {
    return totalSum - 50;
  }

  return totalSum;
}

module.exports = calculateRentalCost;
