/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basicDiscount = 20;
  const maxDiscount = 50;
  const defaultCost = days * price;

  if (days >= 7) {
    return defaultCost - maxDiscount;
  }

  if (days >= 3) {
    return defaultCost - basicDiscount;
  }

  return defaultCost;
}

module.exports = calculateRentalCost;
