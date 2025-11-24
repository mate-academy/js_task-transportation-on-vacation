/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  let totalAmount = days * dailyRate;

  if (days >= 7) {
    totalAmount -= 50;
  } else if (days >= 3) {
    totalAmount -= 20;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
