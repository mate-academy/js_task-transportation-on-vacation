/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const rentalPrice = 40;
  const rentalAmount = days * rentalPrice;
  const threeDayDiscount = 20;
  const sevenDayDiscount = 50;

  if (days < 3) {
    return rentalAmount;
  }

  if (days < 7) {
    return rentalAmount - threeDayDiscount;
  }

  return rentalAmount - sevenDayDiscount;
}

module.exports = calculateRentalCost;
