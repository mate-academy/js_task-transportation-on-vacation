/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const dayCost = 40;
  const discoundFor7Days = 50;
  const discoundFor3Days = 20;

  const calc = dayCost * days;

  if (days >= 7) {
    return calc - discoundFor7Days;
  }

  if (days >= 3) {
    return calc - discoundFor3Days;
  }

  return calc;
}
module.exports = calculateRentalCost;
