/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const basePrice = 40;
  const smallDiscount = 20;
  const bigDiscount = 50;
  const totalPrice = basePrice * days;

  if (days >= 7) {
    return totalPrice - bigDiscount;
  } else if (days >= 3) {
    return totalPrice - smallDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
