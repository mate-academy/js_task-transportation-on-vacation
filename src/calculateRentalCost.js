/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here

  const sum = days * 40;

  if (days < 3) {
    return sum;
  }

  if (days >= 7) {
    return sum - 50;
  }

  if (days >= 3) {
    return sum - 20;
  }
}

module.exports = calculateRentalCost;
