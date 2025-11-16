/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountFor3To6Days = 20;
  const discountFor7OrMoreDays = 50;

  if (days >= 7) {
    return days * dailyRate - discountFor7OrMoreDays;
  }

  if (days >= 3) {
    return days * dailyRate - discountFor3To6Days;
  }

  return days * dailyRate;
}
module.exports = calculateRentalCost;
