/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const DAILY_RATE = 40;
  const DISCOUNT_WEEK = 50;
  const DISCOUNT_THREE_DAYS = 20;

  let cost = DAILY_RATE * days;

  if (days >= 7) {
    cost -= DISCOUNT_WEEK;

    return cost;
  }

  if (days >= 3) {
    cost -= DISCOUNT_THREE_DAYS;
  }

  return cost;
}

module.exports = calculateRentalCost;
