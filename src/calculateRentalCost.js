/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const cost = days * 40;
  let totalAmount = 0;

  if (days < 3) {
    totalAmount = cost;
  }

  if (days >= 7) {
    totalAmount = cost - 50;
  }

  if (days >= 3 && days < 7) {
    totalAmount = cost - 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
