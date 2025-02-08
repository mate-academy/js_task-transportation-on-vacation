/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseCost = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const basicDiscountDays = 3;
  const additionalDiscountDays = 7;

  const fullPrice = baseCost * days;

  if (days >= additionalDiscountDays) {
    return fullPrice - additionalDiscount;
  }

  if (days >= basicDiscountDays) {
    return fullPrice - basicDiscount;
  }

  return fullPrice;
}

module.exports = calculateRentalCost;
