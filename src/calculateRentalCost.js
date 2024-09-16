/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;
  const billToPay = costPerDay * days;

  if (days > 6) {
    return billToPay - additionalDiscount;
  }

  if (days > 2) {
    return billToPay - basicDiscount;
  }

  return billToPay;
}
module.exports = calculateRentalCost;
