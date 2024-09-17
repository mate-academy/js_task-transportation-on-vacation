/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const fee = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalPrice = days * fee;

  if (days > 6) {
    return totalPrice - bigDiscount;
  }

  if (days > 2) {
    return totalPrice - smallDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
