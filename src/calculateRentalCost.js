/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalPrice = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  const longPeriod = 7;
  const shortPeriod = 3;

  if (days < shortPeriod) {
    return days * rentalPrice;
  }

  if (days < longPeriod) {
    return days * rentalPrice - discountThreeDays;
  }

  return days * rentalPrice - discountSevenDays;
}

module.exports = calculateRentalCost;
