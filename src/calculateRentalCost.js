/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const mediumTermDiscount = 20;
  const longTermDiscount = 50;
  const mediumTerm = 3;
  const longTerm = 7;

  if (days >= longTerm) {
    return days * dailyRate - longTermDiscount;
  } else if (days >= mediumTerm) {
    return days * dailyRate - mediumTermDiscount;
  } else {
    return days * dailyRate;
  }
}

module.exports = calculateRentalCost;
