/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  const basicDiscount = 20;
  const extraDiscount = 50;

  if (days > 2 && days < 7) {
    return totalCost - basicDiscount;
  }

  if (days > 6) {
    return totalCost - extraDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
