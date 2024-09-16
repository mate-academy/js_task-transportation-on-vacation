/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRentalCost = 40;
  let totalCost = days * dailyRentalCost;
  const maxDiscountDays = 7;
  const minDiscountDays = 3;
  const smallDiscount = 20;
  const largeDiscount = 50;

  if (days >= minDiscountDays && days < maxDiscountDays) {
    return totalCost - smallDiscount;
  } else if (days >= maxDiscountDays) {
    return totalCost - largeDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
