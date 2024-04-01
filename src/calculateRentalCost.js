/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const basicDiscount = 20;
  const additionalDiscount = 50;

  if (days >= 7) {
    return days * dailyRate - additionalDiscount;
  } else if (days >= 3) {
    return days * dailyRate - basicDiscount;
  } else {
    return days * dailyRate;
  }
}

module.exports = calculateRentalCost;
