/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  let totalPrice = costPerDay * days;

  if (days >= 3 && days < 7) {
    totalPrice += -20;
  }
  if (days >= 7) {
    totalPrice += -50;
  }
  return totalPrice;
}

module.exports = calculateRentalCost;
