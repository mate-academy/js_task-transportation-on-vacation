/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const priceDay = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;

  if (days >= 3 && days < 7) {
    return days * priceDay - discountThreeDays;
  }

  if (days >= 7) {
    return days * priceDay - discountSevenDays;
  }

  return days * priceDay;
}

module.exports = calculateRentalCost;
