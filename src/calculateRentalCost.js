/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rent = 40;
  const days7Discount = 50;
  const days3Discount = 20;
  const totalPrice = rent * days;

  if (days >= 7) {
    return totalPrice - days7Discount;
  } else if (days >= 3) {
    return totalPrice - days3Discount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
