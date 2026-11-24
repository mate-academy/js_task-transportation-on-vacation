/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayRental = 40;
  const sevenDaysOff = 50;
  const threeDaysOff = 20;

  if (days < 3) {
    return days * dayRental;
  }

  if (days >= 3 && days < 7) {
    return days * dayRental - threeDaysOff;
  }

  if (days >= 7) {
    return days * dayRental - sevenDaysOff;
  }
}

module.exports = calculateRentalCost;
