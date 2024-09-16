/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentPrice = 40;
  const totalPrice = rentPrice * days;
  const fewDaysDiscount = 20;
  const weeklyDiscount = 50;

  if (days >= 3 && days < 7) {
    return totalPrice - fewDaysDiscount;
  }

  if (days >= 7) {
    return totalPrice - weeklyDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
