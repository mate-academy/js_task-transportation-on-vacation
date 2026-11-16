/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRent = 40;

  if (days >= 7) {
    return days * dailyRent - 50;
  } else if (days >= 3) {
    return days * dailyRent - 20;
  }

  return days * dailyRent;
}

module.exports = calculateRentalCost;
