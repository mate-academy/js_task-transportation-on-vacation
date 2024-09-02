/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCosts = 40;
  let totalAmount = days * dayCosts;

  if (days >= 7) {
    totalAmount -= 50;
  } else {
    if (days >= 3) {
      totalAmount -= 20;
    }
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
