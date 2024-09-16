/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const price = 40;
  const discoundRentalForThreeDays = 20;
  const discoundRentalForSevenDays = 50;

  if (days <= 0) {
    return 0;
  }

  if (days < 3) {
    return days * price;
  }

  if (days < 7) {
    return days * price - discoundRentalForThreeDays;
  }

  return days * price - discoundRentalForSevenDays;
}

module.exports = calculateRentalCost;
