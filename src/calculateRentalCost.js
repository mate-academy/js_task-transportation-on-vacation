/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const totalPrice = rent * days;
  const smallDiscount = 20;
  const bigDiscount = 50;
  if (days >= 3 && days < 7) {
    return totalPrice - smallDiscount;
  } else if (days >= 7) {
    return totalPrice - bigDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
