/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCost = 40;
  const weeklyDiscount = 50;
  const weekendDiscount = 20;
  const minimumDiscountDays = 3;
  const maximumDiscountDays = 7;

  let totalCost = days * dailyCost;

  if (days >= minimumDiscountDays && days < maximumDiscountDays) {
    totalCost -= weekendDiscount;

    return totalCost;
  }

  if (days >= maximumDiscountDays) {
    totalCost -= weeklyDiscount;

    return totalCost;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
