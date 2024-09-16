/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalDayPrice = 40;
  const weekDiscount = 50;
  const threeDaysDiscount = 20;

  if (days >= 7) {
    return days * rentalDayPrice - weekDiscount;
  }

  if (days >= 3) {
    return days * rentalDayPrice - threeDaysDiscount;
  }

  return days * rentalDayPrice;
}

module.exports = calculateRentalCost;
