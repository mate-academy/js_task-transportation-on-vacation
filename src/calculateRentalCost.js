/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRent = 40;
  const basicDiscount = 50;
  const basicDiscountDays = 7;
  const alternativeDiscount = 20;
  const alternativeDiscountDays = 3;
  let totalAmount = days * dailyRent;

  if (days >= basicDiscountDays) {
    totalAmount = totalAmount - basicDiscount;
  } else if (days >= alternativeDiscountDays) {
    totalAmount = totalAmount - alternativeDiscount;
  }

  return totalAmount;
}
module.exports = calculateRentalCost;
