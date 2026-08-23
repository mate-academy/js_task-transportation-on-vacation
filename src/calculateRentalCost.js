/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const THREE_DAY_DISCOUNT = 20;
const SEVEN_DAY_DISCOUNT = 50;
const THREE_DAY = 3;
const SEVEN_DAY = 7;

function calculateRentalCost(days) {
  let totalCost = days * DAILY_RATE;

  if (days >= SEVEN_DAY) {
    totalCost -= SEVEN_DAY_DISCOUNT;
  } else if (days >= THREE_DAY) {
    totalCost -= THREE_DAY_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
