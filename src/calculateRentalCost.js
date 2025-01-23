/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;

  if (days < 3) {
    return days * dailyRate;
  } else if (days >= 3 && days <= 6) {
    return days * dailyRate - 20;
  } else if (days >= 7) {
    return days * dailyRate - 50;
  }
}

module.exports = calculateRentalCost;
