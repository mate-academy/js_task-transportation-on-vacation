/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dailyRentPrice = 40;
  const discount3To6Days = 20;
  const discount7OrMoreDays = 50;

  if (days < 3) {
    return days * dailyRentPrice;
  } else if (days >= 3 && days <= 6) {
    return days * dailyRentPrice - discount3To6Days;
  }

  return days * dailyRentPrice - discount7OrMoreDays;
}

module.exports = calculateRentalCost;
