/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const ans = days * 40;
  const shortDiscount = 20;
  const longDiscount = 50;

  if (days < 3) {
    return ans;
  }

  if (days < 7) {
    return ans - shortDiscount;
  }

  if (days >= 7) {
    return ans - longDiscount;
  }
}

module.exports = calculateRentalCost;
