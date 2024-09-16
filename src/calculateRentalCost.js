/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const basicDiscount = 20;
  const maxDiscount = 50;
  const basicPrice = price * days;
  const week = 7;

  if (days >= 3 && days < week) {
    return basicPrice - basicDiscount;
  }

  if (days >= week) {
    return basicPrice - maxDiscount;
  }

  return basicPrice;
}

module.exports = calculateRentalCost;
