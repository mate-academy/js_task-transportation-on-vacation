/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const maxDiscount = 50;
  const minDiscount = 20;
  let totalPrice = 40 * days;

  if (days >= 7) {
    totalPrice -= maxDiscount;
  } else if (days >= 3) {
    totalPrice -= minDiscount;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
