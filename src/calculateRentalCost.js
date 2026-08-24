/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyPrice = 40;

  if (days >= 7) {
    return days * dailyPrice - 50;
  } else if (days >= 3) {
    return days * dailyPrice - 20;
  } else {
    return days * dailyPrice;
  }
}

module.exports = calculateRentalCost;
