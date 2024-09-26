/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyFee = 40;
  const smallDiscount = 20;
  const smallDiscountMinPeriod = 3;
  const largeDiscount = 50;
  const largeDiscountMinPeriod = 7;

  const finalCost = days * dailyFee;

  if (days >= largeDiscountMinPeriod) {
    return finalCost - largeDiscount;
  }

  if (days >= smallDiscountMinPeriod) {
    return finalCost - smallDiscount;
  }

  return finalCost;
}

module.exports = calculateRentalCost;
