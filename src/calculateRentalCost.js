/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const total = days * price;
  const basicDiscount = 20;
  const largeDiscount = 50;

  if (days < 3) {
    return total;
  }

  if (days < 7) {
    return total - basicDiscount;
  }

  return total - largeDiscount;
}

module.exports = calculateRentalCost;
