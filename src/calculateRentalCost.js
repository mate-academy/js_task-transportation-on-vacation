/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const costPerDay = 40;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;

  if (days > 6) {
    return days * costPerDay - sevenDaysDiscount;
  }

  if (days > 2 && days < 7) {
    return days * costPerDay - threeDaysDiscount;
  }

  return days * costPerDay;
}

module.exports = calculateRentalCost;
