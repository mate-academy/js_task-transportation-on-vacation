/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const dayCost = 40;
  const longPeriod = 7;
  const shortPeriod = 3;
  const longPeriodTotal = 50;
  const shortPeriodTotal = 20;

  if (days >= longPeriod) {
    return days * dayCost - longPeriodTotal;
  }

  if (days >= shortPeriod) {
    return days * dayCost - shortPeriodTotal;
  }

  return days * dayCost;
}

module.exports = calculateRentalCost;
