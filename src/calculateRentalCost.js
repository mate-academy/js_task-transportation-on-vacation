/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const maxDiscount = 50;
  const minDiscount = 20;

  if (days >= 7) {
    return days * 40 - maxDiscount;
  } else {
    if (days >= 3) {
      return days * 40 - minDiscount;
    }
  }

  return days * 40;
}

module.exports = calculateRentalCost;
