/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const sevenDaysOffDiscount = 50;
  const threeDaysOffDiscount = 20;
  const basePrice = 40;

  return days >= 7
    ? days * basePrice - sevenDaysOffDiscount
    : days >= 3
      ? days * basePrice - threeDaysOffDiscount
      : days * basePrice;
}

module.exports = calculateRentalCost;
