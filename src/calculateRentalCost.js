/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRent = 40;
  const offSevenDays = 50;
  const offThreeDays = 20;

  if (days >= 7) {
    return days * dayRent - offSevenDays;
  } else if (days >= 3) {
    return days * dayRent - offThreeDays;
  } else {
    return days * dayRent;
  }
}

module.exports = calculateRentalCost;
