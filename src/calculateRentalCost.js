/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const total = days * 40;
  const basicDiscount = 20;
  const maxDiscount = 50;

  if (days >= 3 && days < 7) {
    return total - basicDiscount;
  }

  if (days >= 7) {
    return total - maxDiscount;
  }

  return total;
}

module.exports = calculateRentalCost;
