/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayPrice = 40;
  const totalPrice = days * dayPrice;

  if (days > 6) {
    return totalPrice - 50;
  }

  if (days > 2) {
    return totalPrice - 20;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
