/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const discount3Days = 3;
  const discount7Days = 7;

  if (days >= discount7Days) {
    return days * 40 - 50;
  }

  if (days >= discount3Days) {
    return days * 40 - 20;
  }

  if (days < discount3Days) {
    return days * 40;
  }
}

module.exports = calculateRentalCost;
