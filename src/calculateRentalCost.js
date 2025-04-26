/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const dayRental = 40;
  const sevenDaysOff = 50;
  const threeDaysOff = 20;

  if (days <= 0) {
    // eslint-disable-next-line no-const-assign
    return 0;
  }

  if (days < 3) {
    // eslint-disable-next-line no-const-assign
    return days * dayRental;
  }

  if (days >= 3 && days <= 6) {
    // eslint-disable-next-line no-const-assign
    return days * dayRental - threeDaysOff;
  }

  if (days >= 7) {
    // eslint-disable-next-line no-const-assign
    return days * dayRental - sevenDaysOff;
  }
}

module.exports = calculateRentalCost;
