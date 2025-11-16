/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dailyRate = 40;
  const discountFor3To6Days = 20;
  const discountFor7OrMoreDays = 50;
  const totalCost = days * dailyRate;
  const smallRentThreshold = 3;
  const largeRentThreshold = 7;

  if (days >= largeRentThreshold) {
    return totalCost - discountFor7OrMoreDays;
  }

  if (days >= smallRentThreshold) {
    return totalCost - discountFor3To6Days;
  }

  return totalCost;
}
module.exports = calculateRentalCost;
