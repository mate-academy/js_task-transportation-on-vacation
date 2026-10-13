/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = 40;
  const discount = 3;
  const additionalDiscount = 20;
  const totalCost = days * baseCost;
  const discountAmount = days >= discount;
  const additionalDiscountAmont = days >= 7;
  const finalCost =
    totalCost -
    (discountAmount ? discount * baseCost : 0) -
    (additionalDiscountAmont ? additionalDiscount : 0);

  if (days <= 2) {
    return days * baseCost;
  }

  if (days >= 3 && days <= 6) {
    return days * baseCost - additionalDiscount;
  }

  if (days >= 7) {
    return days * baseCost - 50;
  }

  return finalCost; // write code here
}

module.exports = calculateRentalCost;
