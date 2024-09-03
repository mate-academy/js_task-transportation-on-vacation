/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const basePrice = 40;
  const threeDaysDiscount = 20;
  const threeDays = 3;
  const sevenDaysDiscount = 50;
  const sevenDays = 7;

  if (days >= sevenDays) {
    return basePrice * days - sevenDaysDiscount;
  } else if (days >= threeDays) {
    return basePrice * days - threeDaysDiscount;
  } else {
    return basePrice * days;
  }
}

module.exports = calculateRentalCost;
