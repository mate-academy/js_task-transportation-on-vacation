/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY_COST_VALUE = 40;
const THREE_DAYS_OFF_VALUE = 20;
const SEVEN_DAYS_OFF_VALUE = 50;

function calculateRentalCost(days) {
  const isInvalidData = typeof days !== 'number';

  if (isInvalidData) {
    return 0;
  }

  const totalCost = DAY_COST_VALUE * days;

  if (days >= 7) {
    return totalCost - SEVEN_DAYS_OFF_VALUE;
  }

  if (days >= 3) {
    return totalCost - THREE_DAYS_OFF_VALUE;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
