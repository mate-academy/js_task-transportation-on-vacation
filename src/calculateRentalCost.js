/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const perDay = 40;
  const maxDiscount = 50;
  const maxDiscountDays = 7;
  const minDiscount = 20;
  const minDiscountDays = 3;
  const dayCost = perDay * days;

  if (days < minDiscountDays) {
    return dayCost;
  }

  if (days < maxDiscountDays) {
    return dayCost - minDiscount;
  }

  return dayCost - maxDiscount;
}

module.exports = calculateRentalCost;
