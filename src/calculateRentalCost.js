/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const minDiscount = 20;
  const maxDiscount = 50;

  if (days >= 7) {
    return days * price - maxDiscount;
  }

  if (days >= 3) {
    return days * price - minDiscount;
  }

  return days * price;
}

module.exports = calculateRentalCost;
