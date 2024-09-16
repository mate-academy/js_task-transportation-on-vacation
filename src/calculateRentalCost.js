/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const topDiscount = 50;
  const discount = 20;
  const count = 40;
  const sum = days * count;

  if (days >= 7) {
    return sum - topDiscount;
  } else if (days >= 3) {
    return sum - discount;
  }

  return sum;
}

module.exports = calculateRentalCost;
