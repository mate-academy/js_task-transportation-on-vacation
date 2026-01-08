/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const pricePerDay = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;
  const threeDays = 3;
  const sevenDays = 7;

  if (days >= sevenDays) {
    return days * pricePerDay - discountSevenDays;
  } else if (days >= threeDays && days < sevenDays) {
    return days * pricePerDay - discountThreeDays;
  } else {
    return days * pricePerDay;
  }
}

module.exports = calculateRentalCost;
