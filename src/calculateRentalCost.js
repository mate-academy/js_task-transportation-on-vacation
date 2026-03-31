/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  // write code here
  const rentPerDay = 40;
  const threeDaysOff = 20;
  const sevenDaysOff = 50;
  const dayForFirsOff = 3;
  const dayForSecondOff = 7;

  if (days < dayForFirsOff) {
    return days * rentPerDay;
  }

  if (days < dayForSecondOff) {
    return days * rentPerDay - threeDaysOff;
  }

  return days * rentPerDay - sevenDaysOff;
}

module.exports = calculateRentalCost;
