/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ans = days * 40;

  if (days < 3) {
    return ans;
  }

  if (days < 7) {
    return ans - 20;
  }

  if (days >= 7) {
    return ans - 50;
  }
}

module.exports = calculateRentalCost;
