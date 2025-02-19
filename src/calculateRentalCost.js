/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const basicDiscountDays = 3;
  const additionalDiscountDays = 7;
  const totalCost = baseCost * days;

  if (days < basicDiscountDays) {
    return totalCost;
  }

  if (days < additionalDiscountDays) {
    return totalCost - basicDiscount;
  }

  return totalCost - additionalDiscount;
}

module.exports = calculateRentalCost;
