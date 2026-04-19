/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const total = days * 40;

  if (days >= 7) {
    return total - 50;
  }

  if (days >= 3) {
    return total - 20;
  }

  return total;
}

module.exports = calculateRentalCost;
