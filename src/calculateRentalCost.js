/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalCost = days * 40;
  const firstDiscount = 20;
  const secondDiscount = 50;

  if (days >= 7) {
    return totalCost - secondDiscount;
  }

  if (days >= 3) {
    return totalCost - firstDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
