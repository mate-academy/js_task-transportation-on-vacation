/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const basicCost = dailyCost * days;
  const basicDiscount = 20;
  const higherDiscount = 50;

  if (days >= 7) {
    return basicCost - higherDiscount;
  }

  if (days >= 3) {
    return basicCost - basicDiscount;
  }

  return basicCost;
}

module.exports = calculateRentalCost;
