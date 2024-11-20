/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const discountThreeDays = 20;
  const discountSevenDays = 50;

  if (days >= 7) {
    return days * dayRent - discountSevenDays;
  } else if (days >= 3) {
    return days * dayRent - discountThreeDays;
  }

  return days * dayRent;
}

module.exports = calculateRentalCost;
