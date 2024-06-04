/**
 * @param {number} days
 *
 * @return {number}
 */

const DAY_COST_VALUE = 40;
const THREE_DAYS_OFF_VALUE = 20;
const SEVEN_DAYS_OFF_VALUE = 50;
const THREE_DAYS = 3;
const SEVEN_DAYS = 7;
const ERROR_MESSAGE = 'Invalid data have been provided.';

function calculateRentalCost(days) {
  const isInvalidData = typeof days !== 'number';

  if (isInvalidData) {
    throw new Error(ERROR_MESSAGE);
  }

  const totalCost = DAY_COST_VALUE * days;

  if (days >= SEVEN_DAYS) {
    return totalCost - SEVEN_DAYS_OFF_VALUE;
  }

  if (days >= THREE_DAYS) {
    return totalCost - THREE_DAYS_OFF_VALUE;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
