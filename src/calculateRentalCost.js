/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const WEEK_DISCOUNT = 50;
  const THREE_DAY_DISCOUNT = 20;

  let result = days * DAILY_RATE;

  if (days >= 7) {
    result -= WEEK_DISCOUNT;
  } else if (days >= 3) {
    result -= THREE_DAY_DISCOUNT;
  }

  return result;
}

module.exports = calculateRentalCost;
