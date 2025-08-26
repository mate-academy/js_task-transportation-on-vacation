/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceOnDay = 40;
  const bigDiscount = 50;
  const smallDiscount = 20;
  const totalPrice = days * priceOnDay;

  if (days >= 7) {
    return totalPrice - bigDiscount;
  } else if (days >= 3) {
    return totalPrice - smallDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
