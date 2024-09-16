/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const cost = 40;
  const total = cost * days;
  const largeDiscount = 50;
  const smallDiscount = 20;

  if (days >= 7) {
    return total - largeDiscount;
  }

  if (days >= 3) {
    return total - smallDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
