/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const maxDiscount = 50;
  const minDiscount = 20;
  const dailyPrice = 40;

  if (days <= 0) {
    return 'No days';
  }

  const total = days * dailyPrice;

  if (days >= 7) {
    return total - maxDiscount;
  }

  if (days >= 3) {
    return total - minDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
