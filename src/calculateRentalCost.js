/**
 * @param {number} days
 *
 * @return {number}
 */

const DAILY_COST = 40;
const THREE_DAYS_DISCOUNT = 20;
const SEVEN_DAYS_DISCOUNT = 50;
const THRESHOLD_THREE_DAYS = 3;
const THRESHOLD_SEVEN_DAYS = 7;

function calculateRentalCost(days) {
  // write code here
  let cost = DAILY_COST * days;

  for (let i = 1; i <= days; i++) {
    if (i >= THRESHOLD_SEVEN_DAYS) {
      cost -= SEVEN_DAYS_DISCOUNT;
    } else if (i >= THRESHOLD_THREE_DAYS) {
      cost -= THREE_DAYS_DISCOUNT;
    }
  }

  return cost;
}

module.exports = calculateRentalCost;

