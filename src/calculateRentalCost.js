/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basicDiscountPerDays = 3;
  const mediumDiscountPerDays = 6;
  const additionalDiscountPerDays = 7;

  const noDiscount = 80;
  const basicDiscount = 100;
  const mediumDiscount = 220;
  const additionalDiscount = 230;

  if (days >= additionalDiscountPerDays) {
    return additionalDiscount;
  }

  if (days >= mediumDiscountPerDays) {
    return mediumDiscount;
  }

  if (days >= basicDiscountPerDays) {
    return basicDiscount;
  }

  return noDiscount;
}

module.exports = calculateRentalCost;
