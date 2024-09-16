/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyCarRent = 40;
  const totalCarRent = days * dailyCarRent;
  const maxDiscount = 50;
  const minDiscount = 20;

  if (days >= 7) {
    return totalCarRent - maxDiscount;
  }

  if (days >= 3) {
    return totalCarRent - minDiscount;
  }

  return totalCarRent;
}

module.exports = calculateRentalCost;
