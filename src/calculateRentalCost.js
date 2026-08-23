/**
 * @param {number} days
 *
 * @return {number}
 */
const DAILY_RATE = 40;
const THREE_DAY_DISCOUNT = 20;
const SEVEN_DAY_DISCOUNT = 50;
const THREE_DAY_MIN = 3;
const SEVEN_DAY_MIN = 7;

function calculateRentalCost(days) {
  let totalCost = days * DAILY_RATE;

  if (days >= SEVEN_DAY_MIN) {
    totalCost -= SEVEN_DAY_DISCOUNT;
  } else if (days >= THREE_DAY_MIN) {
    totalCost -= THREE_DAY_DISCOUNT;
  }

  return totalCost;
}

module.exports = calculateRentalCost;
