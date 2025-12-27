/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRate = 40;
  const longTermDays = 7;
  const longTermDiscount = 50;
  const lowTermDays = 3;
  const lowTermDiscount = 20;

  if (days >= longTermDays) {
    return days * dailyRate - longTermDiscount;
  }

  if (days >= lowTermDays) {
    return days * dailyRate - lowTermDiscount;
  }

  return days * dailyRate;
}

module.exports = calculateRentalCost;
