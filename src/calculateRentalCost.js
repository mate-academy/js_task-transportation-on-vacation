/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;
  const basePrice = 40;

  if (days >= 7) {
    return days * basePrice - sevenDayDiscount;
  }

  if (days >= 3) {
    return days * basePrice - threeDayDiscount;
  }

  return days * basePrice;
}

module.exports = calculateRentalCost;
