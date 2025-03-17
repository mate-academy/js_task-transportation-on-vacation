/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const costPerDay = 40;
  const discount = 50;
  const halfDiscount = 20;

  const discountDays = 7;
  const halfDiscountDays = 3;

  const totalCost = days * costPerDay;

  if (days >= discountDays) {
    return totalCost - discount;
  }

  if (days >= halfDiscountDays) {
    return totalCost - halfDiscount;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
