/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const daylyRentRate = 40;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;

  if (days >= 7) {
    return daylyRentRate * days - sevenDayDiscount;
  }

  if (days >= 3) {
    return daylyRentRate * days - threeDayDiscount;
  }

  return daylyRentRate * days;
}

module.exports = calculateRentalCost;
