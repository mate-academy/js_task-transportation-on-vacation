/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  let totalPrice = days;

  totalPrice *= pricePerDay;

  if (days >= 7) {
    totalPrice -= 50;
  } else if (days >= 3) {
    totalPrice -= 20;
  }

  return totalPrice;
}

module.exports = calculateRentalCost;
