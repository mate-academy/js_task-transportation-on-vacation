/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  const totalPrice = days * priceDay;
  const weekDiscount = 50;
  const threeDaysDiscount = 20;

  if (days >= 7) {
    return totalPrice - weekDiscount;
  } else if (days >= 3) {
    return totalPrice - threeDaysDiscount;
  }

  return totalPrice;
}
calculateRentalCost(6);
module.exports = calculateRentalCost;
