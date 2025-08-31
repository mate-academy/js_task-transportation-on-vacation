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
  const cost = DAILY_COST * days;

  if (days >= THRESHOLD_SEVEN_DAYS) {
    return cost - SEVEN_DAYS_DISCOUNT;
  } else if (days >= THRESHOLD_THREE_DAYS) {
    return cost - THREE_DAYS_DISCOUNT;
  }

  return cost;
}

module.exports = calculateRentalCost;
