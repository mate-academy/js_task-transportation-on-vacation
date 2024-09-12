/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const totalPrice = price * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const daysAmountForSmallDis = 3;
  const daysAmountForBigDis = 7;

  if (days < daysAmountForSmallDis) {
    return totalPrice;
  }

  if (days >= daysAmountForBigDis) {
    return totalPrice - bigDiscount;
  }

  return totalPrice - smallDiscount;
}

module.exports = calculateRentalCost;
