/**
 * @param {number} days
 *
 * @return {number}
 */
const DAY_COST = 40;
const WEEK_LENGTH = 7;
const WEEK_OFF = 50;
const THREE_DAYS = 3;
const THREE_DAYS_OFF = 20;

function calculateRentalCost(days) {
  let result = days * DAY_COST;

  if (days >= WEEK_LENGTH) {
    result -= WEEK_OFF;
  } else if (days >= THREE_DAYS) {
    result -= THREE_DAYS_OFF;
  }

  return result;
}

module.exports = calculateRentalCost;
