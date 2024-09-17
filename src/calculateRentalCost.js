/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const totalPrice = 40 * days;

  if (days >= 3 && days < 7) {
    return totalPrice - 20;
  } else if (days >= 7) {
    return totalPrice - 50;
  } else {
    return totalPrice;
  }
}

module.exports = calculateRentalCost;
