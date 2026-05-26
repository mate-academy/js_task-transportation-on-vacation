/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const shortTermDiscount = 20;
  const longTermDiscount = 50;
  const shortTermDays = 3;
  const longTermDays = 7;

  if (days < shortTermDays) {
    return days * dailyRate;
  }

  if (days < longTermDays) {
    return days * dailyRate - shortTermDiscount;
  }

  return days * dailyRate - longTermDiscount;
}

module.exports = calculateRentalCost;
