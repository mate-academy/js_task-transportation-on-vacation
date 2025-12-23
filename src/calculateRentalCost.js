/**
 * @param {number} days
 *
 * @return {number}
 */
const dailyRate = 40;
const discontFor3OrMoreDays = 20;
const discontFor7OrMoreDays = 50;
const bigDiscontDays = 7;
const smallDiscontDays = 3;

function calculateRentalCost(days) {
  if (days >= bigDiscontDays) {
    return days * dailyRate - discontFor7OrMoreDays;
  }

  if (days >= smallDiscontDays) {
    return days * dailyRate - discontFor3OrMoreDays;
  }

  return days * dailyRate;
}

module.exports = calculateRentalCost;
