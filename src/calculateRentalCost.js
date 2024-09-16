/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseRate = 40 * days;
  const sevenDaysDiscount = 50;
  const threeDaysDiscount = 20;

  if (days >= 7) {
    return baseRate - sevenDaysDiscount;
  }

  if (days >= 3) {
    return baseRate - threeDaysDiscount;
  }

  if (days < 3) {
    return baseRate;
  }
}

module.exports = calculateRentalCost;
